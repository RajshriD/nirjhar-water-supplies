# NIRJHAR review and changes

## Implemented in this revision
- Replaced the hero bottle illustration and three product/distribution illustrations with a consistent photo-led visual direction using remote Unsplash image URLs.
- Added photo overlays, editorial labels, hover treatment, responsive image sizing, and visible keyboard focus styles.
- Reworked `admin.html` into a responsive operations dashboard with a clear demo-data warning.
- Added demo order search, status filtering, customer-type filtering, status updates held in browser memory, KPI updates, and CSV export for the demo order and stock movement records.
- Added separate inward/outward stock movement, inventory availability/reserved/in-transit/damaged/slow-moving views, quality exception rows, and returnable-container tracking examples.
- Corrected enquiry message line breaks and removed the fake placeholder email from the homepage structured data.
- Preserved the existing static-site structure and draft privacy/terms pages.

## Important limitations before launch
- The website and dashboard remain static prototypes. The dashboard has no authentication, backend, database, server-side permissions, atomic stock movements, audit logs, backups, or production reporting.
- Product images are loaded from Unsplash over the internet; ensure the chosen images remain suitable and review image licensing/hosting requirements before production. For reliability, consider downloading licensed assets into the project and serving them locally.
- The public enquiry form does not send or store submissions. Add a secure, tested backend and update the privacy notice to reflect the real data flow before collecting personal data.
- Replace illustrative metrics and example order/stock records with validated live data before use.
- Complete business identity, verified contacts, privacy and terms, retention periods, data-principal request handling, incident response, and applicable legal review before launch.
- Verify requirements for the actual packaged water product and business, including applicable FSSAI, BIS/product standards, Legal Metrology, GST and other obligations. No licence or certification claim is made by this prototype.


## Branded bottle imagery update
- Added locally stored NIRJHAR branded transparent bottle/jar imagery under `assets/`.
- Updated the homepage hero and product cards to use these local images instead of generic external water/product imagery.
- Added descriptive alt text for accessibility. The source image is a generated visual concept; verify final label artwork, capacities, and packaging before commercial use.
