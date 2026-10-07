// Silent visitor tracker — no UI changes, all failures suppressed

const ENDPOINT = "/api/track";

function getSessionId(): string {
  try {
    const key = "portfolio_sid";
    let sid = sessionStorage.getItem(key);
    if (!sid) {
      sid = crypto.randomUUID();
      sessionStorage.setItem(key, sid);
    }
    return sid;
  } catch {
    return "unknown";
  }
}

function getCampaign(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const c = params.get("utm_campaign");
    if (c && /^[a-zA-Z0-9_-]{1,50}$/.test(c)) return c;
    return null;
  } catch {
    return null;
  }
}

function beacon(payload: object): void {
  try {
    const body = JSON.stringify(payload);
    const sent = navigator.sendBeacon(
      ENDPOINT,
      new Blob([body], { type: "application/json" })
    );
    if (!sent) {
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // silent
  }
}

function labelFromElement(el: Element): string {
  try {
    // data-track attribute takes priority
    const dt = el.closest("[data-track]")?.getAttribute("data-track");
    if (dt) return dt.slice(0, 200);

    // anchor — use hostname
    const anchor = el.closest("a");
    if (anchor?.href) {
      try {
        return new URL(anchor.href).hostname.slice(0, 200);
      } catch {
        return anchor.href.slice(0, 200);
      }
    }

    return "unknown";
  } catch {
    return "unknown";
  }
}

let initialized = false;

export function initTracker(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  try {
    const sessionId = getSessionId();
    const campaign = getCampaign();

    // One visit event per session
    const visitKey = "portfolio_visited";
    if (!sessionStorage.getItem(visitKey)) {
      sessionStorage.setItem(visitKey, "1");
      beacon({
        sessionId,
        type: "visit",
        campaign,
        path: window.location.pathname,
      });
    }

    // Delegated click listener
    document.addEventListener(
      "click",
      (e) => {
        try {
          const target = e.target as Element;
          if (!target) return;

          const trackable =
            target.closest("a[data-track]") ||
            target.closest("[data-track]") ||
            target.closest("a[href]");

          if (!trackable) return;

          beacon({
            sessionId,
            type: "click",
            campaign,
            target: labelFromElement(target),
            path: window.location.pathname,
          });
        } catch {
          // silent
        }
      },
      { passive: true }
    );
  } catch {
    // silent
  }
}
