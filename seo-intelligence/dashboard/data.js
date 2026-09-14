/**
 * Dashboard data — hand-built from the 2026-09-14 GSC pull.
 *
 * Every number here came out of Search Console. Fields that would come from
 * Semrush (volume, kd, intent, ranking URL for individual queries) are null,
 * not estimated: the MCP server is registered but not yet authenticated, and a
 * plausible-looking guess is worse than an honest blank in a file people will
 * make decisions from.
 *
 * Regenerate by re-running the GSC pull and updating meta.gscPulled.
 */
window.__SEO_DATA__ = {
  meta: {
    gscPulled: '2026-09-14',
    gscWindow: '≈2026-06-16 → 2026-09-11 (3 months, Web)',
    semrushStatus: 'not connected (MCP registered, OAuth pending)',
    footnote:
      'Source: Google Search Console, property <code>sc-domain:kortechservice.com</code>, ' +
      'Web search type, 3-month window. 1,000-row query cap applies; the 997 returned rows ' +
      'account for 9,675 of 49,000 impressions, the remainder being long tail GSC does not ' +
      'return. No Semrush, GA4 or AI-visibility data is present. This file contains no ' +
      'credentials and this dashboard is never deployed.'
  },

  kpis: [
    { label: 'Impressions', value: '49,000', note: '3-month total' },
    { label: 'Clicks', value: '103', note: '28 of them brand' },
    { label: 'Average CTR', value: '0.2%', note: 'desktop-weighted — see below' },
    { label: 'Average position', value: '12.8', note: 'across all queries' },
    { label: 'Indexed pages', value: '67', note: '515 not indexed (pre-fix)' },
    { label: 'Sitemap URLs', value: '57', note: 'Success, read 2026-09-10' },
    { label: 'Organic keywords', value: '—', note: 'needs Semrush' },
    { label: 'Authority Score', value: '—', note: 'needs Semrush' }
  ],

  devices: [
    { device: 'Mobile',  clicks: 66, impressions: 3896,  ctr: 1.69 },
    { device: 'Desktop', clicks: 35, impressions: 45075, ctr: 0.08 },
    { device: 'Tablet',  clicks: 2,  impressions: 68,    ctr: 2.94 }
  ],

  families: [
    { label: '"near me"',                 n: 271, impr: 1709, clicks: 25, ctr: 1.46,  avgPos: 19.6 },
    { label: 'brand ("kortech")',         n: 2,   impr: 190,  clicks: 28, ctr: 14.74, avgPos: 4.6  },
    { label: '"nc" abbreviated',          n: 80,  impr: 1442, clicks: 5,  ctr: 0.35,  avgPos: 43.4 },
    { label: '"north carolina" spelled out', n: 23, impr: 1439, clicks: 0, ctr: 0,    avgPos: 45.7 },
    { label: 'everything else',           n: 626, impr: 5089, clicks: 4,  ctr: 0.08,  avgPos: 37.1 }
  ],

  striking: [
    { q:'computer repair matthews north carolina', impr:329, clicks:0, ctr:0,    pos:8.1,  volume:null, kd:null, intent:null, url:'homepage (not the Matthews page)' },
    { q:'computer repair near me',                 impr:243, clicks:5, ctr:2.1,  pos:13.0, volume:null, kd:null, intent:null, url:null },
    { q:'kortech service',                         impr:145, clicks:25,ctr:17.2, pos:5.4,  volume:null, kd:null, intent:null, url:null },
    { q:'repair computer near me',                 impr:83,  clicks:0, ctr:0,    pos:17.7, volume:null, kd:null, intent:null, url:null },
    { q:'laptop repair near me',                   impr:61,  clicks:4, ctr:6.6,  pos:8.5,  volume:null, kd:null, intent:null, url:null },
    { q:'pc repair near me',                       impr:46,  clicks:1, ctr:2.2,  pos:7.5,  volume:null, kd:null, intent:null, url:null },
    { q:'computer service',                        impr:39,  clicks:0, ctr:0,    pos:16.3, volume:null, kd:null, intent:null, url:null },
    { q:'computer repair service',                 impr:38,  clicks:0, ctr:0,    pos:10.6, volume:null, kd:null, intent:null, url:null },
    { q:'computer repair matthews nc',             impr:30,  clicks:2, ctr:6.7,  pos:10.7, volume:null, kd:null, intent:null, url:null },
    { q:'matthews computer technician',            impr:30,  clicks:0, ctr:0,    pos:8.8,  volume:null, kd:null, intent:null, url:null },
    { q:'printer repair near me',                  impr:29,  clicks:0, ctr:0,    pos:15.3, volume:null, kd:null, intent:null, url:null },
    { q:'ps5 repair near me',                      impr:28,  clicks:0, ctr:0,    pos:16.0, volume:null, kd:null, intent:null, url:'/ps5-hdmi-repair/' },
    { q:'pc repair services',                      impr:26,  clicks:0, ctr:0,    pos:13.8, volume:null, kd:null, intent:null, url:null },
    { q:'matthews laptop repair',                  impr:26,  clicks:0, ctr:0,    pos:14.0, volume:null, kd:null, intent:null, url:null },
    { q:'matthews computer repair',                impr:22,  clicks:0, ctr:0,    pos:14.5, volume:null, kd:null, intent:null, url:null },
    { q:'computer store near me',                  impr:18,  clicks:0, ctr:0,    pos:15.6, volume:null, kd:null, intent:null, url:null },
    { q:'computer repair monroe nc',               impr:16,  clicks:0, ctr:0,    pos:11.9, volume:null, kd:null, intent:null, url:'/monroe-computer-repair/' },
    { q:'matthews pc repair',                      impr:13,  clicks:0, ctr:0,    pos:13.2, volume:null, kd:null, intent:null, url:null },
    { q:'electronics repair near me',              impr:11,  clicks:0, ctr:0,    pos:5.8,  volume:null, kd:null, intent:null, url:null },
    { q:'computer support and services',           impr:10,  clicks:0, ctr:0,    pos:4.0,  volume:null, kd:null, intent:null, url:null },
    { q:'pc repair',                               impr:10,  clicks:0, ctr:0,    pos:8.1,  volume:null, kd:null, intent:null, url:null },
    { q:'it service near me',                      impr:9,   clicks:0, ctr:0,    pos:23.3, volume:null, kd:null, intent:null, url:null },
    { q:'nintendo switch repair near me',          impr:8,   clicks:0, ctr:0,    pos:19.9, volume:null, kd:null, intent:null, url:'/nintendo-switch-repair/' },
    { q:'computer repair shop near me',            impr:8,   clicks:0, ctr:0,    pos:17.6, volume:null, kd:null, intent:null, url:null },
    { q:'xbox repair near me',                     impr:5,   clicks:0, ctr:0,    pos:11.0, volume:null, kd:null, intent:null, url:'/xbox-hdmi-repair/' },
    { q:'ps5 controller repair near me',           impr:5,   clicks:0, ctr:0,    pos:13.2, volume:null, kd:null, intent:null, url:'/ps5-hdmi-repair/' }
  ],

  ctrOpportunities: [
    { q:'laptop repair', impr:727, pos:2.6,
      note:'Position 2.6 with 0 clicks at this volume is not a snippet problem — averaged position across shallow national appearances. Do not rewrite titles for it.' },
    { q:'computer repair matthews north carolina', impr:329, pos:8.1,
      note:'Real page-1 local intent, but the "north carolina" phrasing family returns 0 clicks across 1,439 impressions sitewide. Treated as non-clickable.' },
    { q:'graphics card repair', impr:97, pos:1.2,
      note:'Same averaged-position artifact. Useful as evidence of board-level topical relevance, not as a CTR target.' },
    { q:'motherboard repair', impr:59, pos:1.3,
      note:'Same as above. Supports AEO work on board-level concepts.' },
    { q:'computer support service', impr:51, pos:1.0,
      note:'Same as above.' },
    { q:'matthews computer technician', impr:30, pos:8.8,
      note:'Page-1 local intent. Blocked by the page-targeting defect below rather than by the snippet.' },
    { q:'nc computer tech', impr:26, pos:3.7, note:'Page-1, zero clicks. Low volume.' },
    { q:'computer consultant', impr:14, pos:1.0, note:'Averaged-position artifact.' },
    { q:'electronics repair near me', impr:11, pos:5.8,
      note:'Genuine local intent at a clickable position — worth watching after recrawl.' }
  ],

  matthews: [
    { page:'https://www.kortechservice.com/ (homepage)', impr:780, clicks:2 },
    { page:'/locations/',                                impr:14,  clicks:0 },
    { page:'/contact',                                   impr:11,  clicks:0 },
    { page:'/about',                                     impr:8,   clicks:0 },
    { page:'/matthews-computer-repair/ (the actual page)',impr:2,   clicks:0 },
    { page:'/data-recovery/',                            impr:2,   clicks:0 },
    { page:'/charlotte-computer-repair/',                impr:1,   clicks:0 }
  ],

  geo: [
    { item:'Entity @id cross-reference', status:'Done',
      detail:'All 36 LocalBusiness/Organization nodes now carry @id https://www.kortechservice.com/#organization, so they resolve to one entity instead of 36 unrelated businesses.' },
    { item:'Service → service-area internal links', status:'Done',
      detail:'New ServiceAreaLinks component on 6 demand-backed service pages, with descriptive anchors ("Laptop Screen Repair in Matthews, NC") instead of bare city names.' },
    { item:'Direct-answer sections', status:'Done',
      detail:'PS5 HDMI failure causes, clicking-hard-drive recoverability, cracked-screen repair-vs-replace. Plain body content; no FAQPage/HowTo/Speakable added.' },
    { item:'NAP consistency', status:'Done',
      detail:'Verified against LOCAL_CITATIONS.md: address, both numbers, hours all match exactly.' },
    { item:'aggregateRating removed from own schema', status:'Done',
      detail:'Shipped in PR #20. Google rating stays visible with attribution; not republished as our structured data.' },
    { item:'Original repair media', status:'Gap',
      detail:'docs/media-capture-list.md exists but no photos captured. Highest-impact first: microscope board-level shots, damaged vs repaired HDMI/USB-C ports, real bench and shop interior.' },
    { item:'AI citation / mention tracking', status:'Blocked',
      detail:'Needs Semrush AI Visibility export → seo-intelligence/data/ai-visibility/' },
    { item:'Author/technician E-E-A-T signals', status:'Gap',
      detail:'Blog posts carry a bare Organization author with no url/@id. Named technician attribution would need real credentials — not inventable.' }
  ]
};
