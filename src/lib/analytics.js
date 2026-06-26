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
    page: window.location.pathname,
  });
}

export function trackCtaClick(name, location) {
  trackEvent("cta_click", {
    cta_name: name,
    location,
  });
}

export function trackSocialClick(platform) {
  trackEvent("social_click", {
    platform,
    location = window.location.pathname,
  });
}

export function trackInsightsView(volume, issue) {
  trackEvent("insights_article_view", {
    article: window.location.pathname,
    volume,
    issue,
  });
}

export function trackAircraftPageView() {
    trackEvent("aircraft_page_view", {
        section: "aircraft_overview",
        page: window.location.pathname,
    });
}

export function trackDevelopmentPageView() {
    trackEvent("development_page_view", {
        page: window.location.pathname,
    });
}

export function trackInsightsPageView() {
    trackEvent("insights_page_view", {
        page: window.location.pathname,
    });
}

export function trackAboutPageView() {
    trackEvent("about_page_view", {
    });
}

export function trackAircraftView(model, variant = "") {
  trackEvent("aircraft_page_view", {
    model,
    variant,
  });
}

export function trackFaqPageView() {
    trackEvent("faq_page_view", {
        page: window.location.pathname,
    });
}

export function trackArchivePageView() {
    trackEvent("archive_page_view", {
        page: window.location.pathname,
    });
}

export function trackHomePageView() {
    trackEvent("home_page_view", {
        page: window.location.pathname,
    });
}

export function trackNavigationClick(destination, location) {
    trackEvent("navigation_click", {
        destination,
        location,
        page: window.location.pathname,
    });
}