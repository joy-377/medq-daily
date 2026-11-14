MEDQ DAILY UPDATE PACKAGE
=========================

Included:
- index.html: repaired and updated main application file
- data/flashcards.js: new image-only flashcard registry (starts empty)
- assets/flashcards/README.txt: instructions for adding image cards
- manifest.json: valid web app manifest
- robots.txt and sitemap.xml: technical SEO basics
- ads.txt: publisher declaration matching the AdSense publisher ID already in index.html

IMPORTANT DEPLOYMENT STEPS
1. Back up your current Netlify project before replacing anything.
2. Copy the included index.html to the project root.
3. Merge the included files/folders into your existing project. Do NOT delete or replace your existing 19 subject data files:
   data/anatomy.js, physiology.js, biochemistry.js, pathology.js, pharmacology.js,
   microbiology.js, forensic-medicine.js, psm.js, ent.js, ophthalmology.js,
   medicine.js, surgery.js, obg.js, pediatrics.js, orthopedics.js, psychiatry.js,
   dermatology.js, radiology.js, anesthesia.js, and blog-data.js.
4. Keep your existing Firebase configuration, service worker (if any), and all other assets.
5. Deploy, then test the home page, Daily Quiz, Custom Test, NEET PG/INI-CET mocks, result review, sign-in and image zoom.

FLASHCARDS
- Cards are image-only. No front/back text is used.
- Add images under assets/flashcards/<subject-slug>/.
- Add records to data/flashcards.js using: { id, subject, topic, img }.
- The file intentionally starts with an empty array because no flashcard images were supplied.

ADSENSE
- The existing AdSense loader remains in index.html.
- ads.txt is included using the publisher ID already present in the uploaded HTML.
- Manual ad units were NOT invented: a real AdSense ad-slot ID is required for each manual unit.
- Auto Ads can still be controlled from the AdSense account. Avoid ads in active test/question/timer areas.

SEO
- Homepage title, description, canonical URL, robots metadata and Open Graph metadata are updated.
- sitemap.xml and robots.txt are included.
- Subject-specific indexable pages are intentionally not fabricated from thin placeholder text. To create useful SEO landing pages, add original subject content and confirm the actual subject data files.

TESTING LIMITATION
The uploaded HTML was syntax-checked after repair. The 19 external subject JS files and Firebase credentials/configuration were not included in this upload, so a complete live-browser integration test against the user's full project could not be performed here. Preserve those files and test the deployed project before treating it as production-ready.
