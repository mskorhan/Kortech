# Original Media Capture List

Specific original photos/videos to capture for the site, and which page each belongs on. Nothing here is fabricated or implied to exist yet — this is a shot list for future capture. Do not add these images/claims to any page until the real asset exists.

## Why this matters

Original repair photography and video are one of the strongest, hardest-to-fake trust and GEO signals available: they demonstrate real hands-on expertise to both human visitors and AI systems evaluating E-E-A-T (experience, expertise, authoritativeness, trust), and they can't be sourced from a stock library the way the current Pexels blog images can.

## Priority 1 — highest-traffic service pages

- **Data Recovery** (`/data-recovery/`, `src/pages/services/DataRecovery.tsx`)
  - Photos: failed hard drive opened on a clean bench/mat, a drive with visible head-crash or platter damage, a cleanroom-adjacent workstation shot
  - Diagnostic screenshot: recovery software mid-scan showing recoverable file tree
  - Before/after: corrupted directory listing vs. successfully recovered files on destination drive

- **PCB / Micro-Soldering** (`/pcb-micro-soldering/`, `src/pages/services/PCBMicroSoldering.tsx`)
  - Microscope photos: a board under the microscope showing a damaged trace, a BGA chip mid-reball, a repaired joint compared to the original
  - Short video: 15-30s micro-soldering iron work on a real board (no faces/customer info visible)
  - Photos: damaged charge port or HDMI port pins next to the same port after repair

- **Laptop Screen Repair** (`/laptop-screen-repair/`, `src/pages/services/LaptopScreenRepair.tsx`)
  - Before/after: cracked screen vs. replaced screen, same device
  - Photo: screen removal/disassembly mid-repair

- **PS5 / Xbox HDMI Repair** (`/ps5-hdmi-repair/`, `/xbox-hdmi-repair/`)
  - Microscope/macro photo: damaged HDMI port pins before repair
  - Photo: reballed/replaced HDMI port after repair
  - Short video: HDMI port desoldering or reflow process

- **Smartphone / Tablet Repair** (`/smartphone-screen-repair-charlotte/`, `/tablet-ipad-repair/`)
  - Before/after: cracked phone/tablet screen vs. repaired
  - Photo: battery swap or charging-port repair in progress

## Priority 2 — supporting service pages

- **Water Damage Repair** (`/water-damage-repair/`)
  - Photo: corrosion on a board after liquid exposure, before cleaning
  - Photo: same board after ultrasonic cleaning/corrosion removal

- **SSD Upgrades** (`/ssd-upgrades/`)
  - Photo: old HDD next to new SSD installed in the same laptop chassis
  - Diagnostic screenshot: before/after boot-time or benchmark comparison

- **Smart TV Repair** (`/smart-tv-repair/`)
  - Photo: TV panel or mainboard removed for diagnosis
  - Photo: a failed capacitor or power-board component identified during diagnosis

- **Nintendo Switch Repair** (`/nintendo-switch-repair/`)
  - Photo: Joy-Con drift repair or charging port replacement in progress

- **Printer/Router Repair** (`/printer-router-repair/`)
  - Photo: a router or printer on the bench mid-diagnosis

- **Custom Gaming PC** (`/custom-gaming-pc/`)
  - Photos: a build in progress, cable management, completed build

- **Appliance/Electronics Repair** (`/appliance-electronics-repair/`)
  - Photo: a representative small-appliance repair in progress

## Priority 3 — trust/entity pages

- **About** (`/about/`)
  - Photo: the actual Sardis Rd N shop interior/exterior (storefront, workbench area)
  - Photo: a technician actively working (with consent), no need to show faces if that's a concern

- **Home** (`/`)
  - Photo: shop storefront or workbench, to replace/supplement generic hero imagery with a real, local, verifiable image

- **Contact** (`/contact/`)
  - Photo: shop entrance/signage, useful both for trust and for local-pack image consistency with the Google Business Profile

## Capture guidelines

- No customer-identifying information visible (names, screens with personal data, license plates, faces without consent)
- Include a plain-text caption/alt-text draft alongside each asset when captured (e.g. "Close-up of a corroded PS5 HDMI port before micro-soldering repair, Charlotte NC") — descriptive alt text also improves GEO extractability
- Prefer natural/shop lighting over staged studio shots — authenticity reads better to both users and AI evaluators than polish
- Keep original files (not just web-optimized exports) in case larger prints or higher-res reuse is needed later
