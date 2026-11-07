---
name: JTLB Repair Clinic
description: Hardware-led repair website in red and black
colors:
  primary: "#ed453b"
  primary-deep: "#bd2c25"
  neutral-bg: "#111111"
  surface: "#1b1b1b"
  text: "#f3f0e9"
  secondary-text: "#bbb8b1"
  line: "#363636"
typography:
  display:
    fontFamily: Anton
    fontWeight: 400
    lineHeight: 1.08
  body:
    fontFamily: Barlow
    fontSize: 17px
    lineHeight: 1.55
  label:
    fontFamily: Barlow Condensed
    fontWeight: 600
rounded:
  control: 0px
spacing:
  section: 104px
  section-mobile: 68px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    padding: "14px 24px"
    height: 54px
---

## Overview
The user rejected the paper-ticket layouts and requested a substantial redesign while retaining red and black, JTLB artwork and detailed repair benefits. The current design puts hardware and a working device-specific repair finder first. Flat dark surfaces, bold condensed type and restrained rules replace the ticket decoration and repeated service-card grid.

## Colors
Repair red carries actions, selected tabs and the full-width upgrade section. Near-black is the primary ground; off-white carries headings and readable body copy. Dark red identifies the enquiry section.

## Typography
Self-hosted Anton for display headings; Barlow for reading; Barlow Condensed for controls and device labels. Display copy is capped at 96px. Long descriptions stay in the body face.

## Layout
Container maximum 1280px, with 48px desktop and 20px phone side margins. Two-column hero and editorial sections become single-column below 800px. The repair finder uses five device tabs and specific fault rows. Tabs scroll horizontally on phones and support arrow, Home and End keys. Forms collapse to one field per row on small screens.

## Elevation & Depth
The controller cutout uses a soft directional shadow. The rest of the site relies on tonal surfaces and fine rules. No simulated repair progress or fake customer records.

## Shapes
Square controls and rectangular surfaces. A red circular ground frames the real controller product image. Original JTLB artwork is shown intact in the clinic section.

## Components
- Repair finder: accessible tablist, single visible panel, keyboard navigation, fault links prefill the form.
- Gear strip: automatic scrolling, pause/resume, hover pause; reduced-motion visitors get static horizontal scrolling.
- Enquiry: Repair/Upgrade choice, device, optional model, description validation, copy status and manual-copy fallback. The contact placeholder and copy-only behavior remain explicit.
- FAQ and mobile navigation: native details/summary controls.
- Motion: brand strip plus small hover feedback; reduced-motion disables transitions and animation.

## Do's and Don'ts
- Preserve red/black, original JTLB identity and the controller qualifier on 48-hour turnaround.
- Keep diagnosis, quote approval, no-fix/no-fee and warranty information easy to find.
- Credit product imagery; never present it as a JTLB workshop photograph.
- Do not fabricate testimonials, review scores, repair counts, locations or contact details.
- Do not restore the discarded paper-ticket hero or repeated service-card grid.
