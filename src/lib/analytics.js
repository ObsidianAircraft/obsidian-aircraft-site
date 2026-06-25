export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    ...params,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

export function trackFlightDeckClick(location) {
  trackEvent("flight_deck_click", { 
    location,
    page: window.location.pathname,
  });
}

export function trackFlightDeckPageView(location) {
    trackEvent("flight_deck_page_view", {
        page: window.location.pathname,
    });
}

export function trackFlightDeckSubmit(location = "join_page") {
  trackEvent("sign_up", {
    method: "flight_deck",
    location,
  });
}

export function trackCtaClick(name, location) {
  trackEvent("cta_click", {
    cta_name: name,
    location,
  });
}

export function trackSocialClick(platform, location = "footer") {
  trackEvent("social_click", {
    platform,
    location,
  });
}

export function trackInsightsView(articleTitle, issueNumber) {
  trackEvent("insights_article_view", {
    article_title: articleTitle,
    issue_number: issueNumber,
  });
}

export function trackAircraftView(model, variant = "") {
  trackEvent("aircraft_page_view", {
    model,
    variant,
  });
}