// js/data-loader.js

import { anesthesiaQs } from '../data/anesthesia.js';

window.qBank = [
    ...anesthesiaQs
];

console.log("Anesthesia data loaded! Total Questions:", window.qBank.length);
