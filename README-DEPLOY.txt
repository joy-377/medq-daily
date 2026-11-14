MEDQ DAILY — COMPLETE REPAIR PACKAGE
====================================

This package contains the repaired main application, the subject question banks, blog data, image-flashcard registry, legal pages and site metadata.

DEPLOYMENT
1. Back up the current Netlify project.
2. Extract this ZIP and upload/merge the CONTENTS of the medq-daily-main folder into the root of your Netlify project.
3. Do not upload only index.html: the question banks, blog articles, manifest, legal pages and ads.txt are separate files loaded by the site.
4. Preserve your existing Firebase project settings and any other custom assets that are not replaced by this package.
5. Confirm the deployed files are at these exact paths: index.html, data/*.js, privacy-policy.html, terms.html, contact.html, about.html, ads.txt, robots.txt, sitemap.xml and manifest.json.

QUESTION DATA
The 19 subject files are: anatomy.js, physiology.js, biochemistry.js, pathology.js, pharmacology.js, microbiology.js, forensic.js, community-medicine.js, ent.js, ophthalmology.js, medicine.js, surgery.js, obgyn.js, pediatrics.js, orthopedics.js, psychiatry.js, dermatology.js, radiology.js and anesthesia.js. Blog articles are in data/blog-data.js. Separate PYQ source files are data/pyq/pyq-neetpg.js and data/pyq/pyq-inicet.js; they are intentionally empty until verified PYQ records are supplied. Keep these files in the data folder with the exact filenames above.

FLASHCARDS
Flashcards are image-only. The registry is data/flashcards.js and is intentionally empty until you supply the images. Add image files under assets/flashcards/<subject>/ and records using { id, subject, topic, img }.

ADSENSE
The existing AdSense loader and ads.txt publisher declaration are preserved. No manual ad-slot IDs have been invented. Make sure ads.txt is reachable at https://medq-daily.netlify.app/ads.txt after deployment.

LEGAL / SEO
Privacy Policy, Terms, Contact and About are standalone pages linked from the footer. sitemap.xml and robots.txt include these pages.

TESTING NOTE
All inline JavaScript and data JavaScript files were syntax-checked. The local browser runtime in this environment did not complete, so Firebase sign-in and live ad delivery still need confirmation on the deployed Netlify site. Local quiz/test functions are designed to remain available in Guest Mode if Firebase is unavailable.
