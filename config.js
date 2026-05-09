/* =====================================================
   Livestream configuration
   Edit this file only.
   ===================================================== */

/*
  Temporary arrangement:
  brand assets are currently hosted on the livestream site.

  Current:
    /brand

  Later, when moved to the main site, change to:
    https://agentics.org/brand
*/
const BRAND_BASE_URL = "/brand";

/*
  Default livestream video ID.
  This is used unless overridden by:
    ?v=VIDEO_ID
    ?video=VIDEO_ID
    #VIDEO_ID
*/
const VIDEO_ID_DEFAULT = "hJhlPPxbcG4";

/*
  Agentics YouTube channel
*/
const YOUTUBE_CHANNEL_ID = "UCq_8ihSPx2E2elW6Vyx2cdg";

/*
  Google Calendar ICS feed (source of truth)
*/
const CALENDAR_ICS_URL =
  "https://calendar.google.com/calendar/ical/agent%40agentics.org/public/basic.ics";

/*
  Meeting links (fallback if calendar parsing not yet implemented)
*/
const THURSDAY_MEETING_URL =
  "https://us06web.zoom.us/j/81457783806?pwd=cCVc3FdQ92BHcooimWyjCFJbUmdhu0.1";

const FRIDAY_MEETING_URL =
  "https://us06web.zoom.us/j/83802209294?pwd=O17vytsA1UbZkX3hfvNXrNWIARDRtZ.1";

const TEMP_URL = "https://phase2.zoom.us/j/9453992250?omn=93624812822";

/*
  Determine current day in America/Toronto timezone
*/
function getTorontoDay() {
  const now = new Date();

  const torontoString = now.toLocaleString("en-US", {
    timeZone: "America/Toronto",
    weekday: "short"
  });

  const map = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
  };

  return map[torontoString];
}

/*
  Optional meeting link (fallback logic)

  This will be replaced by calendar-driven logic later.

  Thursday  -> THURSDAY_MEETING_URL
  Friday    -> FRIDAY_MEETING_URL
  Other days -> blank (fallback to calendar UI)
*/
const MEETING_URL = (() => {
  const day = getTorontoDay();

  if (day === 4) return THURSDAY_MEETING_URL;
  if (day === 5) return FRIDAY_MEETING_URL;

  return TEMP_URL; 

  return "";
})();

/*
We embed specific video IDs rather than the channel livestream
because channel embeds require PUBLIC streams and do not
work with unlisted broadcasts.
*/
