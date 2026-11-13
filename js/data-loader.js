// js/data-loader.js

// ১৯টি সাবজেক্টের ডেটা সঠিক রুট পাথ দিয়ে ইমপোর্ট করা হচ্ছে
import { anatomyQs } from '../data/anatomy.js';
import { physiologyQs } from '../data/physiology.js';
import { biochemistryQs } from '../data/biochemistry.js';
import { pathologyQs } from '../data/pathology.js';
import { pharmacologyQs } from '../data/pharmacology.js';
import { microbiologyQs } from '../data/microbiology.js';
import { forensicQs } from '../data/forensic.js';
import { communityMedicineQs } from '../data/community-medicine.js';
import { entQs } from '../data/ent.js';
import { ophthalmologyQs } from '../data/ophthalmology.js';
import { medicineQs } from '../data/medicine.js';
import { surgeryQs } from '../data/surgery.js';
import { obgynQs } from '../data/obgyn.js';
import { pediatricsQs } from '../data/pediatrics.js';
import { orthopedicsQs } from '../data/orthopedics.js';
import { psychiatryQs } from '../data/psychiatry.js';
import { dermatologyQs } from '../data/dermatology.js';
import { radiologyQs } from '../data/radiology.js';
import { anesthesiaQs } from '../data/anesthesia.js';

// ব্লগের ডেটা ইমপোর্ট করা হচ্ছে
import { blogArticles } from '../data/blog-data.js';

// সবগুলোকে গ্লোবাল Array-তে যুক্ত করা হলো
window.qBank = [
    ...anatomyQs,
    ...physiologyQs,
    ...biochemistryQs,
    ...pathologyQs,
    ...pharmacologyQs,
    ...microbiologyQs,
    ...forensicQs,
    ...communityMedicineQs,
    ...entQs,
    ...ophthalmologyQs,
    ...medicineQs,
    ...surgeryQs,
    ...obgynQs,
    ...pediatricsQs,
    ...orthopedicsQs,
    ...psychiatryQs,
    ...dermatologyQs,
    ...radiologyQs,
    ...anesthesiaQs
];

window.blogData = blogArticles;
console.log("All medical data loaded successfully! Total Questions:", window.qBank.length);
