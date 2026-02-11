/**
 * UTM Parameter Capture & Persistence
 *
 * Captures UTM parameters, ad click IDs, and referrer data from the URL
 * and persists them across page navigations using localStorage.
 *
 * Supports:
 * - Standard UTM params: utm_source, utm_medium, utm_campaign, utm_content, utm_term
 * - Google Ads: gclid, gclsrc, wbraid, gbraid, dclid
 * - Facebook/Meta: fbclid
 * - Microsoft Ads: msclkid
 * - TikTok Ads: ttclid
 * - LinkedIn Ads: li_fat_id
 * - Twitter/X Ads: twclid
 *
 * Architecture:
 * - First-touch attribution: stored permanently until cleared
 * - Last-touch attribution: updated on every visit with new params
 * - Session data: current session's referrer and landing page
 */

// ============================================================================
// TYPES
// ============================================================================

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface ClickIDs {
  gclid?: string;
  gclsrc?: string;
  wbraid?: string;
  gbraid?: string;
  dclid?: string;
  fbclid?: string;
  msclkid?: string;
  ttclid?: string;
  li_fat_id?: string;
  twclid?: string;
}

export interface TrafficAttribution {
  utm: UTMParams;
  clickIds: ClickIDs;
  referrer: string;
  landingPage: string;
  timestamp: string;
}

export interface FullAttribution {
  firstTouch: TrafficAttribution | null;
  lastTouch: TrafficAttribution | null;
  currentSession: {
    referrer: string;
    landingPage: string;
    entryTimestamp: string;
  };
}

// ============================================================================
// CONSTANTS
// ============================================================================

const UTM_KEYS: (keyof UTMParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

const CLICK_ID_KEYS: (keyof ClickIDs)[] = [
  'gclid',
  'gclsrc',
  'wbraid',
  'gbraid',
  'dclid',
  'fbclid',
  'msclkid',
  'ttclid',
  'li_fat_id',
  'twclid',
];

const STORAGE_KEYS = {
  FIRST_TOUCH: 'rgv_first_touch',
  LAST_TOUCH: 'rgv_last_touch',
  SESSION_REFERRER: 'rgv_session_referrer',
  SESSION_LANDING: 'rgv_session_landing',
  SESSION_TIMESTAMP: 'rgv_session_timestamp',
} as const;

// ============================================================================
// CAPTURE FUNCTIONS
// ============================================================================

/**
 * Extract UTM parameters from current URL
 */
function captureUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      utm[key] = decodeURIComponent(value);
    }
  }

  return utm;
}

/**
 * Extract ad platform click IDs from current URL
 */
function captureClickIDs(): ClickIDs {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const clickIds: ClickIDs = {};

  for (const key of CLICK_ID_KEYS) {
    const value = params.get(key);
    if (value) {
      clickIds[key] = decodeURIComponent(value);
    }
  }

  return clickIds;
}

/**
 * Infer traffic source from referrer when UTMs are absent
 */
function inferSourceFromReferrer(referrer: string): Partial<UTMParams> {
  if (!referrer) return {};

  try {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();

    // Search engines
    if (hostname.includes('google.')) return { utm_source: 'google', utm_medium: 'organic' };
    if (hostname.includes('bing.')) return { utm_source: 'bing', utm_medium: 'organic' };
    if (hostname.includes('duckduckgo.')) return { utm_source: 'duckduckgo', utm_medium: 'organic' };
    if (hostname.includes('yahoo.')) return { utm_source: 'yahoo', utm_medium: 'organic' };
    if (hostname.includes('baidu.')) return { utm_source: 'baidu', utm_medium: 'organic' };

    // Social platforms
    if (hostname.includes('facebook.') || hostname.includes('fb.')) return { utm_source: 'facebook', utm_medium: 'social' };
    if (hostname.includes('instagram.')) return { utm_source: 'instagram', utm_medium: 'social' };
    if (hostname.includes('twitter.') || hostname.includes('t.co') || hostname.includes('x.com')) return { utm_source: 'twitter', utm_medium: 'social' };
    if (hostname.includes('linkedin.')) return { utm_source: 'linkedin', utm_medium: 'social' };
    if (hostname.includes('reddit.')) return { utm_source: 'reddit', utm_medium: 'social' };
    if (hostname.includes('youtube.')) return { utm_source: 'youtube', utm_medium: 'social' };
    if (hostname.includes('tiktok.')) return { utm_source: 'tiktok', utm_medium: 'social' };

    // Tech/News
    if (hostname.includes('news.ycombinator.com')) return { utm_source: 'hackernews', utm_medium: 'referral' };
    if (hostname.includes('producthunt.com')) return { utm_source: 'producthunt', utm_medium: 'referral' };
    if (hostname.includes('github.com')) return { utm_source: 'github', utm_medium: 'referral' };

    // Generic referral
    return { utm_source: hostname, utm_medium: 'referral' };
  } catch {
    return {};
  }
}

/**
 * Detect source from click IDs when no UTMs are present
 */
function inferSourceFromClickIDs(clickIds: ClickIDs): Partial<UTMParams> {
  if (clickIds.gclid || clickIds.wbraid || clickIds.gbraid) {
    return { utm_source: 'google', utm_medium: 'cpc' };
  }
  if (clickIds.fbclid) {
    return { utm_source: 'facebook', utm_medium: 'paid_social' };
  }
  if (clickIds.msclkid) {
    return { utm_source: 'bing', utm_medium: 'cpc' };
  }
  if (clickIds.ttclid) {
    return { utm_source: 'tiktok', utm_medium: 'paid_social' };
  }
  if (clickIds.li_fat_id) {
    return { utm_source: 'linkedin', utm_medium: 'paid_social' };
  }
  if (clickIds.twclid) {
    return { utm_source: 'twitter', utm_medium: 'paid_social' };
  }
  if (clickIds.dclid) {
    return { utm_source: 'google', utm_medium: 'display' };
  }
  return {};
}

// ============================================================================
// STORAGE FUNCTIONS
// ============================================================================

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage not available or full
  }
}

function loadAttribution(key: string): TrafficAttribution | null {
  const raw = safeGetItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as TrafficAttribution;
  } catch {
    return null;
  }
}

function saveAttribution(key: string, data: TrafficAttribution): void {
  safeSetItem(key, JSON.stringify(data));
}

// ============================================================================
// MAIN API
// ============================================================================

/**
 * Capture and persist all tracking parameters from the current URL.
 * Call this once on every page load (in AnalyticsProvider).
 *
 * Returns the full attribution data for use as super properties.
 */
export function captureTrafficAttribution(): FullAttribution {
  if (typeof window === 'undefined') {
    return {
      firstTouch: null,
      lastTouch: null,
      currentSession: { referrer: '', landingPage: '', entryTimestamp: '' },
    };
  }

  const utm = captureUTMParams();
  const clickIds = captureClickIDs();
  const referrer = document.referrer || '';
  const landingPage = window.location.pathname + window.location.search;
  const timestamp = new Date().toISOString();

  // Enrich UTMs from click IDs if no explicit UTMs
  const hasExplicitUTM = Object.keys(utm).length > 0;
  const hasClickIds = Object.keys(clickIds).length > 0;

  let enrichedUTM = { ...utm };
  if (!hasExplicitUTM) {
    if (hasClickIds) {
      enrichedUTM = { ...enrichedUTM, ...inferSourceFromClickIDs(clickIds) };
    } else if (referrer && !referrer.includes(window.location.hostname)) {
      enrichedUTM = { ...enrichedUTM, ...inferSourceFromReferrer(referrer) };
    }
  }

  const hasTrackingData = hasExplicitUTM || hasClickIds;

  const currentAttribution: TrafficAttribution = {
    utm: enrichedUTM,
    clickIds,
    referrer,
    landingPage,
    timestamp,
  };

  // First-touch: only set if never captured before
  const existingFirstTouch = loadAttribution(STORAGE_KEYS.FIRST_TOUCH);
  if (!existingFirstTouch && hasTrackingData) {
    saveAttribution(STORAGE_KEYS.FIRST_TOUCH, currentAttribution);
  }

  // Last-touch: update whenever new tracking params are present
  if (hasTrackingData) {
    saveAttribution(STORAGE_KEYS.LAST_TOUCH, currentAttribution);
  }

  // Session data: set once per session (check sessionStorage)
  let sessionReferrer = '';
  let sessionLanding = '';
  let sessionTimestamp = '';
  try {
    const existingSession = sessionStorage.getItem(STORAGE_KEYS.SESSION_REFERRER);
    if (!existingSession) {
      sessionStorage.setItem(STORAGE_KEYS.SESSION_REFERRER, referrer);
      sessionStorage.setItem(STORAGE_KEYS.SESSION_LANDING, landingPage);
      sessionStorage.setItem(STORAGE_KEYS.SESSION_TIMESTAMP, timestamp);
      sessionReferrer = referrer;
      sessionLanding = landingPage;
      sessionTimestamp = timestamp;
    } else {
      sessionReferrer = existingSession;
      sessionLanding = sessionStorage.getItem(STORAGE_KEYS.SESSION_LANDING) || landingPage;
      sessionTimestamp = sessionStorage.getItem(STORAGE_KEYS.SESSION_TIMESTAMP) || timestamp;
    }
  } catch {
    sessionReferrer = referrer;
    sessionLanding = landingPage;
    sessionTimestamp = timestamp;
  }

  return {
    firstTouch: loadAttribution(STORAGE_KEYS.FIRST_TOUCH),
    lastTouch: loadAttribution(STORAGE_KEYS.LAST_TOUCH),
    currentSession: {
      referrer: sessionReferrer,
      landingPage: sessionLanding,
      entryTimestamp: sessionTimestamp,
    },
  };
}

/**
 * Get flattened UTM properties for attaching to analytics events.
 * Returns both first-touch and last-touch UTMs with prefixed keys.
 */
export function getAttributionProperties(): Record<string, string> {
  const attribution = getStoredAttribution();
  const props: Record<string, string> = {};

  // Last-touch UTMs (most commonly used for conversion attribution)
  if (attribution.lastTouch?.utm) {
    for (const [key, value] of Object.entries(attribution.lastTouch.utm)) {
      if (value) props[key] = value;
    }
  }

  // First-touch UTMs (prefixed for comparison)
  if (attribution.firstTouch?.utm) {
    for (const [key, value] of Object.entries(attribution.firstTouch.utm)) {
      if (value) props[`first_touch_${key}`] = value;
    }
  }

  // Click IDs (last-touch)
  if (attribution.lastTouch?.clickIds) {
    for (const [key, value] of Object.entries(attribution.lastTouch.clickIds)) {
      if (value) props[key] = value;
    }
  }

  // Session info
  if (attribution.currentSession.referrer) {
    props['session_referrer'] = attribution.currentSession.referrer;
  }
  if (attribution.currentSession.landingPage) {
    props['session_landing_page'] = attribution.currentSession.landingPage;
  }

  return props;
}

/**
 * Retrieve stored attribution without re-capturing from URL
 */
export function getStoredAttribution(): FullAttribution {
  if (typeof window === 'undefined') {
    return {
      firstTouch: null,
      lastTouch: null,
      currentSession: { referrer: '', landingPage: '', entryTimestamp: '' },
    };
  }

  let sessionReferrer = '';
  let sessionLanding = '';
  let sessionTimestamp = '';
  try {
    sessionReferrer = sessionStorage.getItem(STORAGE_KEYS.SESSION_REFERRER) || '';
    sessionLanding = sessionStorage.getItem(STORAGE_KEYS.SESSION_LANDING) || '';
    sessionTimestamp = sessionStorage.getItem(STORAGE_KEYS.SESSION_TIMESTAMP) || '';
  } catch {
    // sessionStorage not available
  }

  return {
    firstTouch: loadAttribution(STORAGE_KEYS.FIRST_TOUCH),
    lastTouch: loadAttribution(STORAGE_KEYS.LAST_TOUCH),
    currentSession: {
      referrer: sessionReferrer,
      landingPage: sessionLanding,
      entryTimestamp: sessionTimestamp,
    },
  };
}

/**
 * Clean URL by removing tracking parameters (fbclid, gclid, etc.)
 * without triggering a page reload. This keeps URLs clean in the browser bar.
 */
export function cleanTrackingParams(): void {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  const paramsToRemove = [...CLICK_ID_KEYS, ...UTM_KEYS];
  let changed = false;

  for (const param of paramsToRemove) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      changed = true;
    }
  }

  if (changed) {
    // Replace URL without reload — keeps URL bar clean
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
  }
}
