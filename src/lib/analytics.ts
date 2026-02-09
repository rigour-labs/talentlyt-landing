/**
 * Centralized Analytics Utility
 *
 * This module provides a type-safe abstraction over analytics providers.
 * Currently supports: Mixpanel
 *
 * Architecture:
 * - All events are typed via discriminated unions for compile-time safety
 * - Event names follow snake_case convention for Mixpanel compatibility
 * - Properties are strictly typed per event type
 * - Safe initialization check prevents runtime errors during SSR
 *
 * Usage:
 *   import { analytics } from '@/lib/analytics';
 *   analytics.track({ event: 'cta_clicked', properties: { location: 'hero', cta_type: 'start_trial' } });
 */

import mixpanel from 'mixpanel-browser';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// ============================================================================
// EVENT DEFINITIONS
// ============================================================================

/**
 * CTA Click Event
 * Fired when user clicks any call-to-action button
 */
interface CTAClickedEvent {
  event: 'cta_clicked';
  properties: {
    location: 'hero' | 'navbar' | 'footer' | 'pricing' | 'bottom_cta' | 'blog' | 'comparison' | 'announcement_bar';
    cta_type: 'start_trial' | 'watch_demo' | 'contact_sales' | 'book_demo' | 'get_started' | 'scale_pipeline' | 'start_pilot' | 'request_coupon' | 'book_pilot_call';
    cta_text: string;
    destination_url?: string;
  };
}

/**
 * Form Events
 * Fired during form interactions
 */
interface FormStartedEvent {
  event: 'form_started';
  properties: {
    form_type: 'demo_request' | 'interactive_demo' | 'contact';
    location: string;
  };
}

interface FormSubmittedEvent {
  event: 'form_submitted';
  properties: {
    form_type: 'demo_request' | 'interactive_demo' | 'contact';
    location: string;
    /** Role selected (for interactive demo) */
    role?: 'ENGINEER' | 'PRODUCT_MANAGER' | 'DESIGNER' | 'DATA_SCIENTIST';
    /** Company domain extracted from email */
    company_domain?: string;
  };
}

interface FormErrorEvent {
  event: 'form_error';
  properties: {
    form_type: 'demo_request' | 'interactive_demo' | 'contact';
    error_type: 'validation' | 'submission' | 'rate_limit' | 'network';
    error_message?: string;
  };
}

/**
 * Demo Events
 * Fired during interactive demo flow
 */
interface DemoRoleSelectedEvent {
  event: 'demo_role_selected';
  properties: {
    role: 'ENGINEER' | 'PRODUCT_MANAGER' | 'DESIGNER' | 'DATA_SCIENTIST';
    previous_role?: 'ENGINEER' | 'PRODUCT_MANAGER' | 'DESIGNER' | 'DATA_SCIENTIST';
  };
}

interface DemoStartedEvent {
  event: 'demo_started';
  properties: {
    role: 'ENGINEER' | 'PRODUCT_MANAGER' | 'DESIGNER' | 'DATA_SCIENTIST';
    user_name: string;
  };
}

interface DemoCompletedEvent {
  event: 'demo_completed';
  properties: {
    role: 'ENGINEER' | 'PRODUCT_MANAGER' | 'DESIGNER' | 'DATA_SCIENTIST';
    duration_seconds?: number;
  };
}

/**
 * Pricing Events
 * Fired on pricing page interactions
 */
interface PricingTierViewedEvent {
  event: 'pricing_tier_viewed';
  properties: {
    tier_name: 'the_pilot' | 'the_starter' | 'the_engine' | 'the_fortress';
    price: string;
  };
}

interface PricingCTAClickedEvent {
  event: 'pricing_cta_clicked';
  properties: {
    tier_name: 'the_pilot' | 'the_starter' | 'the_engine' | 'the_fortress';
    cta_text: string;
    price: string;
  };
}

/**
 * Navigation Events
 */
interface PageViewedEvent {
  event: 'page_viewed';
  properties: {
    page_path: string;
    page_title?: string;
    referrer?: string;
  };
}

interface LinkClickedEvent {
  event: 'link_clicked';
  properties: {
    location: 'footer' | 'navbar' | 'content';
    link_type: 'internal' | 'external' | 'social';
    link_text: string;
    destination_url: string;
  };
}

/**
 * Video Events
 */
interface VideoPlayedEvent {
  event: 'video_played';
  properties: {
    video_name: string;
    location: string;
  };
}

interface VideoPausedEvent {
  event: 'video_paused';
  properties: {
    video_name: string;
    location: string;
    watch_duration_seconds?: number;
  };
}

/**
 * Feature Interaction Events
 */
interface FeatureToggledEvent {
  event: 'feature_toggled';
  properties: {
    feature_name: 'sentinel_mode' | 'maya_voice';
    enabled: boolean;
    location: string;
  };
}

/**
 * Scroll/Engagement Events
 * Fired when users interact with scroll indicators or engagement elements
 */
interface ScrollIndicatorClickedEvent {
  event: 'scroll_indicator_clicked';
  properties: {
    location: 'hero' | 'section';
  };
}

/**
 * Scroll Depth Event
 * Fired when user scrolls past milestone percentages
 */
interface ScrollDepthEvent {
  event: 'scroll_depth';
  properties: {
    depth_percentage: 25 | 50 | 75 | 100;
    page_path: string;
    time_to_reach_seconds: number;
  };
}

/**
 * Section Impression Event
 * Fired when a homepage section enters the viewport
 */
interface SectionImpressionEvent {
  event: 'section_impression';
  properties: {
    section_id: string;
    section_name: string;
    section_index: number;
    time_on_page_seconds: number;
    scroll_depth_at_impression: number;
  };
}

/**
 * Engagement Time Milestone Event
 * Fired when user reaches time milestones on a page
 */
interface EngagementMilestoneEvent {
  event: 'engagement_milestone';
  properties: {
    milestone_seconds: 15 | 30 | 60 | 120;
    page_path: string;
    scroll_depth_at_milestone: number;
    sections_viewed: number;
  };
}

// ============================================================================
// UNION TYPE
// ============================================================================

type AnalyticsEvent =
  | CTAClickedEvent
  | FormStartedEvent
  | FormSubmittedEvent
  | FormErrorEvent
  | DemoRoleSelectedEvent
  | DemoStartedEvent
  | DemoCompletedEvent
  | PricingTierViewedEvent
  | PricingCTAClickedEvent
  | PageViewedEvent
  | LinkClickedEvent
  | VideoPlayedEvent
  | VideoPausedEvent
  | FeatureToggledEvent
  | ScrollIndicatorClickedEvent
  | ScrollDepthEvent
  | SectionImpressionEvent
  | EngagementMilestoneEvent;

// ============================================================================
// ANALYTICS CLASS
// ============================================================================

class Analytics {
  private initialized = false;

  /**
   * Check if we're in a browser environment
   */
  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  /**
   * Check if Mixpanel is ready
   */
  private isReady(): boolean {
    return this.isBrowser() && this.initialized;
  }

  /**
   * Initialize analytics (called by AnalyticsProvider)
   */
  init() {
    if (!this.isBrowser()) return;
    this.initialized = true;
  }

  /**
   * Track an analytics event with type safety
   *
   * @example
   * analytics.track({
   *   event: 'cta_clicked',
   *   properties: {
   *     location: 'hero',
   *     cta_type: 'start_trial',
   *     cta_text: 'Start Free Trial'
   *   }
   * });
   */
  track<T extends AnalyticsEvent>(payload: T): void {
    if (!this.isReady()) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Event queued (not initialized):', payload.event, payload.properties);
      }
      return;
    }

    try {
      // 1. Existing Mixpanel Tracking
      mixpanel.track(payload.event, payload.properties);

      // 2. Google Tag Manager / DataLayer Sync
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: payload.event,
          ...payload.properties,
        });
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Tracked:', payload.event, payload.properties);
      }
    } catch (error) {
      console.error('[Analytics] Track error:', error);
    }
  }

  /**
   * Identify a user (useful for logged-in users)
   */
  identify(userId: string, traits?: Record<string, unknown>): void {
    if (!this.isReady()) return;

    try {
      mixpanel.identify(userId);
      if (traits) {
        mixpanel.people.set(traits);
      }
    } catch (error) {
      console.error('[Analytics] Identify error:', error);
    }
  }

  /**
   * Set super properties (attached to all future events)
   */
  setSuperProperties(properties: Record<string, unknown>): void {
    if (!this.isReady()) return;

    try {
      mixpanel.register(properties);
    } catch (error) {
      console.error('[Analytics] Set super properties error:', error);
    }
  }

  /**
   * Reset analytics (useful on logout)
   */
  reset(): void {
    if (!this.isReady()) return;

    try {
      mixpanel.reset();
    } catch (error) {
      console.error('[Analytics] Reset error:', error);
    }
  }
}

// ============================================================================
// SINGLETON EXPORT
// ============================================================================

export const analytics = new Analytics();

// ============================================================================
// CONVENIENCE HELPERS
// ============================================================================

/**
 * Helper to extract domain from email
 * @example extractDomain('john@acme.com') // 'acme.com'
 */
export function extractDomain(email: string): string | undefined {
  const match = email.match(/@([a-zA-Z0-9.-]+)/);
  return match?.[1];
}

/**
 * Helper to convert tier name to analytics format
 */
export function normalizeTierName(name: string): 'the_pilot' | 'the_starter' | 'the_engine' | 'the_fortress' {
  const normalized = name.toLowerCase().replace(/\s+/g, '_');
  return normalized as 'the_pilot' | 'the_starter' | 'the_engine' | 'the_fortress';
}
