export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  async function safeJson(response) {
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  }

  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name?.trim() || "";

    const tokenResponse = await fetch("https://accounts.zoho.com/oauth/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const tokenData = await safeResponse(tokenResponse);

    if (!tokenData.access_token) {
      return res.status(500).json({
        success: false,
        message: "Unable to retrieve Zoho access token",
      });
    }

    const accessToken = tokenData.access_token;

    const searchResponse = await fetch(
      `https://www.zohoapis.com/crm/v8/Leads/search?email=${encodeURIComponent(cleanEmail)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
      }
    );

    let searchData = await safeJson(searchResponse);

    if (searchResponse.ok && searchData.data && searchData.data.length > 0) {
      return res.status(200).json({
        success: true,
        alreadyExists: true,
        message: "You're already in the Flight Deck.",
      });
    }

    const nameParts = cleanName.split(" ").filter(Boolean);
    const firstName = nameParts.slice(0, -1).join(" ");
    const lastName =
      nameParts.length > 1
        ? nameParts.slice(-1).join(" ")
        : nameParts[0] || "Flight Deck Subscriber";

    const leadResponse = await fetch("https://www.zohoapis.com/crm/v8/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            First_Name: firstName,
            Last_Name: lastName,
            Email: cleanEmail,
            Lead_Source: "Website",
            Description: "Flight Deck signup from Obsidian Aircraft website",
          },
        ],
      }),
    });

    const leadData = await safeJson(leadResponse);

    if (!leadResponse.ok) {
      return res.status(500).json({
        success: false,
        message: "Unable to create Zoho lead",
        details: leadData,
      });
    }

    return res.status(200).json({
      success: true,
      alreadyExists: false,
      message: "Welcome aboard.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}