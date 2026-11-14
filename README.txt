MEDQ DAILY — IMAGE FLASHCARDS

This folder is reserved for image-based flashcard files.
No question/answer text is displayed on the card face. Each card is one image.

Recommended:
- Use .webp or .jpg
- Keep images reasonably compressed
- Keep the important diagram/text inside the image itself
- Organize by subject, e.g. assets/flashcards/anatomy/

Add each image to data/flashcards.js like this:

window.MEDQ_FLASHCARDS = [
  {
    id: "anatomy-heart-001",
    subject: "Anatomy",
    topic: "Heart",
    img: "assets/flashcards/anatomy/heart-001.webp"
  }
];

The id must be unique. The img path is relative to the website root.
