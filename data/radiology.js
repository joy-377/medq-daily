export const radiologyQs = [
{
  id: 18001,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "Ultrasound Physics",
  level: "Easy",
  q: "A 45-year-old female presents with right upper quadrant pain. An ultrasound of the abdomen demonstrates a highly echogenic focus within the gallbladder lumen, accompanied by a distinct anechoic band extending deep to the structure. Which acoustic artifact is responsible for this classic finding?",
  opts: [
    "Posterior acoustic enhancement",
    "Acoustic shadowing",
    "Reverberation artifact",
    "Mirror image artifact"
  ],
  ans: 1,
  exp: "Acoustic shadowing occurs when sound waves encounter a highly reflective or attenuating structure, such as a gallstone or bone. The sound waves are almost entirely reflected or absorbed, leaving a signal void (an anechoic 'shadow') deep to the structure, confirming its dense nature.",
  wrongExp: "• <strong>Option A (Posterior acoustic enhancement):</strong> This occurs deep to fluid-filled, non-attenuating structures like cysts, where sound waves travel easily, causing the deep tissues to appear artificially brighter.<br>• <strong>Option C (Reverberation artifact):</strong> This is caused by sound bouncing back and forth between two highly reflective interfaces, producing multiple equidistant parallel echogenic lines.<br>• <strong>Option D (Mirror image artifact):</strong> This occurs when a highly reflective surface (like the diaphragm) acts as a mirror, placing a false duplicate image of a true structure deep to the reflector."
},
{
  id: 18002,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "MRI Principles",
  level: "Moderate",
  q: "A 30-year-old male undergoes an MRI of the brain. The images demonstrate cerebrospinal fluid (CSF) appearing bright (hyperintense), while the white matter is darker than the gray matter. Which of the following MRI sequences is being viewed?",
  opts: [
    "T1-weighted image",
    "T2-weighted image",
    "FLAIR image",
    "Diffusion-weighted image (DWI)"
  ],
  ans: 1,
  exp: "In a T2-weighted MRI sequence, fluids containing free water (like CSF, edema, and joint fluid) appear bright (hyperintense). Additionally, because white matter has higher fat content (myelin) than gray matter, it appears darker than gray matter on T2-weighted images.",
  wrongExp: "• <strong>Option A (T1-weighted image):</strong> In T1 imaging, fluid (CSF) appears dark (hypointense), while fat-containing structures (like white matter) appear bright relative to gray matter.<br>• <strong>Option C (FLAIR image):</strong> Fluid-Attenuated Inversion Recovery (FLAIR) suppresses the signal of free fluid, making normal CSF appear dark while maintaining the T2 characteristics of the brain tissue (highlighting edema/lesions).<br>• <strong>Option D (Diffusion-weighted image):</strong> DWI measures the random Brownian motion of water molecules; normal CSF appears dark, while areas of restricted diffusion (like acute stroke) appear brightly hyperintense."
},
{
  id: 18003,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "CT Physics",
  level: "Easy",
  q: "A non-contrast CT of the abdomen is performed to evaluate an incidentally discovered adrenal nodule. The radiologist places a region of interest (ROI) over the lesion, which yields a reading of -20 Hounsfield Units (HU). This measurement is most indicative of which type of tissue?",
  opts: [
    "Water (Simple cyst)",
    "Fat (Myelolipoma/Adenoma)",
    "Soft tissue (Metastasis)",
    "Bone/Calcification"
  ],
  ans: 1,
  exp: "The Hounsfield Unit (HU) scale is a linear transformation of the original linear attenuation coefficient measurement into one where the radiodensity of distilled water is defined as zero HU. Fat ranges from -10 to -100 HU, making a reading of -20 HU highly specific for a fat-containing lesion (like a lipid-rich adrenal adenoma or myelolipoma).",
  wrongExp: "• <strong>Option A (Water):</strong> Water, such as in a simple cyst, has a defined Hounsfield Unit of exactly 0 (typically ranging from -10 to +10 HU in clinical practice).<br>• <strong>Option C (Soft tissue):</strong> Solid soft tissue components (organs, muscles, metastases) generally measure between +20 and +80 HU.<br>• <strong>Option D (Bone/Calcification):</strong> Bone and dense calcifications have very high attenuation values, typically ranging from +300 to +1000 HU."
},
{
  id: 18004,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "Radiation Safety",
  level: "Hard",
  q: "Radiation-induced cataract formation in the lens of the eye occurs only after a specific cumulative threshold dose has been reached, after which the severity increases with higher doses. This is a classic example of which of the following radiation effects?",
  opts: [
    "Stochastic effect",
    "Deterministic effect",
    "Hormetic effect",
    "ALARA principle"
  ],
  ans: 1,
  exp: "Deterministic (or tissue reaction) effects occur only once a specific threshold dose of radiation is exceeded, after which the severity of the effect is directly proportional to the dose received. Examples include cataract formation, skin erythema, and radiation-induced hair loss.",
  wrongExp: "• <strong>Option A (Stochastic effect):</strong> These effects occur by chance and have no threshold dose; the probability (but not severity) increases with dose. The primary examples are cancer induction and genetic mutations.<br>• <strong>Option C (Hormetic effect):</strong> Radiation hormesis is a controversial hypothesis suggesting that low doses of ionizing radiation are beneficial by stimulating repair mechanisms, not related to cataract formation.<br>• <strong>Option D (ALARA principle):</strong> Stands for 'As Low As Reasonably Achievable', which is a guiding safety principle in radiology to minimize patient and staff exposure, not a biological effect."
},
{
  id: 18005,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "Nuclear Medicine & PET",
  level: "Moderate",
  q: "A patient with suspected lung cancer undergoes a Positron Emission Tomography (PET) scan using 18F-fluorodeoxyglucose (FDG). Which of the following best explains why the tumor exhibits high metabolic uptake on the scan?",
  opts: [
    "Increased expression of glucose transporters and hexokinase activity",
    "Selective retention of the tracer due to impaired lymphatic drainage",
    "Rapid cellular division leading to high thymidine uptake",
    "Accumulation in hypoxic necrotic centers of the tumor"
  ],
  ans: 0,
  exp: "18F-FDG is a glucose analog that is taken up by cells via glucose transporters (GLUT) and phosphorylated by hexokinase. However, unlike normal glucose, it cannot be further metabolized and remains trapped intracellularly. Malignant tumors exhibit the Warburg effect (increased glycolysis), leading to upregulated GLUT expression and hexokinase activity, causing massive FDG accumulation.",
  wrongExp: "• <strong>Option B (Selective retention due to impaired lymphatic drainage):</strong> This mechanism is utilized in lymphoscintigraphy or sentinel node mapping using colloid tracers, not FDG-PET.<br>• <strong>Option C (Rapid cellular division leading to thymidine uptake):</strong> This describes the mechanism of 18F-FLT (fluorothymidine), a specific marker of cellular proliferation, not FDG.<br>• <strong>Option D (Accumulation in hypoxic necrotic centers):</strong> FDG requires metabolically active, living cells; necrotic centers are avascular and metabolically dead, so they show absent FDG uptake (photopenic defect)."
},
{
  id: 18006,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "MRI Safety",
  level: "Easy",
  q: "A 65-year-old male with a history of profound sensorineural hearing loss requires an MRI of the cervical spine. During safety screening, which of the following implanted devices constitutes an absolute contraindication to undergoing a standard 1.5 Tesla MRI scan?",
  opts: [
    "Titanium orthopedic screws in the femur",
    "Cochlear implant",
    "Mechanical heart valve (modern, non-ferromagnetic)",
    "Coronary artery bare-metal stent placed 1 year ago"
  ],
  ans: 1,
  exp: "Most cochlear implants contain an internal magnet that aligns with an external transmitter. The powerful magnetic field of an MRI can demagnetize the internal magnet, induce painful torque, or damage the electronic circuitry, making it an absolute contraindication (unless the specific model has a removable magnet and is clearly certified as MR-conditional).",
  wrongExp: "• <strong>Option A (Titanium orthopedic screws):</strong> Titanium is non-ferromagnetic and perfectly safe in an MRI, though it may cause local susceptibility artifacts on the image.<br>• <strong>Option C (Mechanical heart valve):</strong> Nearly all modern mechanical and bioprosthetic heart valves are non-ferromagnetic and safe for MRI, though older specific star-poppet valves required caution.<br>• <strong>Option D (Coronary artery stent):</strong> Coronary stents become firmly endothelized within weeks. Most modern stents are considered MR-safe or conditional almost immediately after placement."
},
{
  id: 18007,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "Contrast Media",
  level: "Moderate",
  q: "A 70-year-old diabetic male with a baseline serum creatinine of 1.9 mg/dL is scheduled for a contrast-enhanced CT of the abdomen. What is the most widely accepted and evidence-based prophylactic measure to prevent Contrast-Induced Nephropathy (CIN) in this patient?",
  opts: [
    "Administration of oral N-acetylcysteine",
    "Intravenous administration of isotonic saline",
    "Prophylactic hemodialysis immediately post-scan",
    "Administration of intravenous furosemide"
  ],
  ans: 1,
  exp: "Adequate periprocedural intravascular volume expansion is the most effective and universally recommended strategy to prevent Contrast-Induced Nephropathy (CIN). Intravenous isotonic saline (0.9% NaCl) or sodium bicarbonate is administered before and after the contrast injection to increase renal blood flow, decrease contrast transit time, and dilute the contrast media in the tubules.",
  wrongExp: "• <strong>Option A (Oral N-acetylcysteine):</strong> While historically popular as an antioxidant to prevent CIN, large randomized controlled trials (like the PRESERVE trial) have proven it offers no significant benefit over IV fluids alone.<br>• <strong>Option C (Prophylactic hemodialysis):</strong> Hemodialysis removes contrast but does not prevent the acute tubular damage that occurs during contrast transit; prophylactic dialysis is not indicated for CIN prevention.<br>• <strong>Option D (Intravenous furosemide):</strong> Loop diuretics can cause volume depletion and actually increase the risk of acute kidney injury and CIN; they are contraindicated for CIN prophylaxis."
},
{
  id: 18008,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "Ultrasound Artifacts",
  level: "Hard",
  q: "During an abdominal ultrasound of a patient with suspected adenomyomatosis of the gallbladder, the sonographer notes bright echogenic foci in the gallbladder wall with a series of tapering, closely spaced, V-shaped parallel echo bands extending deep into the tissue. Which artifact is being described?",
  opts: [
    "Side-lobe artifact",
    "Comet-tail artifact",
    "Mirror image artifact",
    "Edge shadowing artifact"
  ],
  ans: 1,
  exp: "Comet-tail artifact is a specific type of short-path reverberation artifact. It occurs when sound waves bounce rapidly between two highly reflective, closely spaced interfaces (like the cholesterol crystals lodged in the Rokitansky-Aschoff sinuses in adenomyomatosis). It appears as a continuous, tapering, V-shaped echogenic trail deep to the reflector.",
  wrongExp: "• <strong>Option A (Side-lobe artifact):</strong> Caused by low-energy off-axis sound beams outside the main ultrasound beam, often creating false 'sludge' or debris within an anechoic structure like the bladder or gallbladder.<br>• <strong>Option C (Mirror image artifact):</strong> Creates a duplicate image deep to a strong specular reflector (like seeing liver tissue on the wrong side of the diaphragm).<br>• <strong>Option D (Edge shadowing artifact):</strong> Refraction artifact occurring at the curved edges of a spherical structure (like a cyst), leading to a shadow dropping down from the edges."
},
{
  id: 18009,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "Doppler Ultrasound",
  level: "Hard",
  q: "While performing a spectral Doppler ultrasound of a stenotic carotid artery, the peak systolic velocity exceeds the measurable limit set by the pulse repetition frequency (PRF), causing the top of the spectral waveform to 'wrap around' and appear below the baseline. What is the fundamental physical principle governing this phenomenon?",
  opts: [
    "Snell's Law",
    "Nyquist limit",
    "Heisenberg uncertainty principle",
    "Larmor frequency"
  ],
  ans: 1,
  exp: "The artifact described is 'aliasing', which occurs in pulsed-wave Doppler when the Doppler frequency shift exceeds the Nyquist limit. The Nyquist limit is defined as one-half of the Pulse Repetition Frequency (PRF/2). If the blood velocity causes a shift greater than this limit, the machine cannot sample it fast enough, and the waveform 'wraps around' to the opposite side of the baseline.",
  wrongExp: "• <strong>Option A (Snell's Law):</strong> Describes the degree of refraction (bending of the wave) when sound or light passes through an interface between two media with different propagation speeds.<br>• <strong>Option C (Heisenberg uncertainty principle):</strong> A quantum mechanics concept stating that exact position and momentum of a particle cannot be simultaneously known; not applicable to macroscopic Doppler physics.<br>• <strong>Option D (Larmor frequency):</strong> The specific frequency at which magnetic spins precess in a magnetic field; it is the fundamental physics equation for MRI, not ultrasound."
},
{
  id: 18010,
  subject: "Radiology",
  topic: "General Physics & Principles",
  chapter: "MRI Artifacts",
  level: "Moderate",
  q: "On an abdominal MRI, a distinct black band is seen at one interface between the kidney and the surrounding retroperitoneal fat, while a bright band is seen at the opposite interface. This artifact is a consequence of the differing resonant frequencies of protons in water versus protons in fat. What is the name of this artifact?",
  opts: [
    "Chemical shift artifact",
    "Susceptibility artifact",
    "Cross-talk artifact",
    "Motion ghosting artifact"
  ],
  ans: 0,
  exp: "Chemical shift artifact (Type 1 or spatial misregistration) occurs in the frequency-encoding direction. It is caused by the slight difference in resonant frequencies between protons in water molecules and protons in fat molecules. The MRI scanner misinterprets this frequency difference as a spatial difference, resulting in a dark band (void) on one side of a fat-water interface and a bright band (overlap) on the other.",
  wrongExp: "• <strong>Option B (Susceptibility artifact):</strong> Occurs near metallic implants, air-tissue interfaces, or hemorrhage, causing severe geometric distortion and signal voids due to local magnetic field inhomogeneities.<br>• <strong>Option C (Cross-talk artifact):</strong> Occurs when adjacent MRI slices overlap and 'excite' each other's protons, leading to loss of signal and decreased tissue contrast in the overlapping regions.<br>• <strong>Option D (Motion ghosting artifact):</strong> Appears as faint, replicated copies of anatomy (ghosts) extending in the phase-encoding direction, caused by patient movement, respiration, or cardiac pulsation."
},
{
  id: 18011,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Pleural & Pericardial Diseases",
  level: "Easy",
  q: "A 22-year-old tall, thin male presents to the ER with sudden onset right-sided chest pain and severe dyspnea. A supine anteroposterior (AP) chest radiograph reveals an abnormally deep and radiolucent right costophrenic angle. There is also a mediastinal shift to the left. What is the significance of the deep right costophrenic angle?",
  opts: [
    "It is the 'Deep Sulcus Sign' indicating a tension pneumothorax",
    "It is the 'Meniscus Sign' indicating a massive pleural effusion",
    "It is a normal finding in asthenic individuals",
    "It indicates right lower lobe atelectasis"
  ],
  ans: 0,
  exp: "The 'Deep Sulcus Sign' is a classic radiographic sign of a pneumothorax on a supine chest X-ray. Because air rises to the highest point, in a supine patient, it accumulates anteromedially and basally, abnormally deepening and making the costophrenic angle hyperlucent. The accompanying mediastinal shift away from the affected side confirms a life-threatening tension pneumothorax.",
  wrongExp: "• <strong>Option B (Meniscus Sign):</strong> This represents a pleural effusion, where fluid blunts the costophrenic angle and tracks up the lateral chest wall, creating a concave, opaque meniscus, not a radiolucent deep sulcus.<br>• <strong>Option C (Normal finding):</strong> While asthenic (tall, thin) individuals can have deep lungs, an abnormally radiolucent, plunging sulcus combined with mediastinal shift is never normal.<br>• <strong>Option D (Right lower lobe atelectasis):</strong> Atelectasis causes volume loss, pulling the mediastinum TOWARDS the affected side and causing increased opacity, not radiolucency."
},
{
  id: 18012,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Cardiac Imaging",
  level: "Moderate",
  q: "A 45-year-old female with a history of rheumatic fever presents with worsening exertional dyspnea. A posteroanterior (PA) chest radiograph demonstrates a 'double density' sign on the right heart border, splaying of the carina with an increased carinal angle (>90 degrees), and an enlarged left atrial appendage. Which cardiac chamber is pathologically enlarged?",
  opts: [
    "Right atrium",
    "Right ventricle",
    "Left atrium",
    "Left ventricle"
  ],
  ans: 2,
  exp: "The constellation of radiographic findings—the 'double density' sign (right edge of the enlarged left atrium pushing behind the right atrium), splaying of the carina (the left main bronchus is elevated by the enlarged atrium beneath it), and straightening of the left heart border (due to left atrial appendage enlargement)—is pathognomonic for severe Left Atrial Enlargement, classically seen in mitral stenosis.",
  wrongExp: "• <strong>Option A (Right atrium):</strong> Right atrial enlargement shifts the right heart border outward into the right lung field but does not cause the double density sign or elevate the left mainstem bronchus.<br>• <strong>Option B (Right ventricle):</strong> Right ventricular enlargement causes the heart to expand anteriorly (filling the retrosternal clear space on a lateral view) and can lift the cardiac apex upward on a PA view ('boot-shaped heart').<br>• <strong>Option D (Left ventricle):</strong> Left ventricular enlargement pushes the cardiac apex downward and outward, burying it below the diaphragm, without splaying the carina."
},
{
  id: 18013,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Diffuse Lung Disease",
  level: "Moderate",
  q: "A 65-year-old man presents with a chronic dry cough and progressive exertional dyspnea. High-Resolution Computed Tomography (HRCT) of the chest reveals bilateral, basally predominant, peripheral reticular opacities, traction bronchiectasis, and clustered cystic airspaces measuring 3-10 mm in the subpleural regions. Which specific HRCT pattern is described?",
  opts: [
    "Non-Specific Interstitial Pneumonia (NSIP)",
    "Usual Interstitial Pneumonia (UIP)",
    "Organizing Pneumonia (OP)",
    "Hypersensitivity Pneumonitis (HP)"
  ],
  ans: 1,
  exp: "The classic High-Resolution CT (HRCT) features of the Usual Interstitial Pneumonia (UIP) pattern (the radiological hallmark of Idiopathic Pulmonary Fibrosis) include an apicobasal gradient (worse at the bases), peripheral/subpleural predominance, reticular opacities, traction bronchiectasis, and the pathognomonic 'honeycombing' (clustered, thick-walled subpleural cystic airspaces).",
  wrongExp: "• <strong>Option A (NSIP):</strong> Characterized primarily by ground-glass opacities with subpleural sparing, rather than the coarse honeycombing and severe structural distortion seen in UIP.<br>• <strong>Option C (Organizing Pneumonia):</strong> Presents with patchy, migratory consolidations and ground-glass opacities, often with a peribronchovascular or subpleural distribution (e.g., the 'reverse halo' sign), not honeycombing.<br>• <strong>Option D (Hypersensitivity Pneumonitis):</strong> Acute/subacute phases present with ill-defined centrilobular nodules and ground-glass opacities (the 'headcheese' sign); chronic HP can cause fibrosis but it typically spares the extreme lung bases and is upper-mid zone predominant."
},
{
  id: 18014,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Occupational Lung Diseases",
  level: "Easy",
  q: "A 55-year-old man with a 30-year occupational history of working as a sandblaster presents with worsening dyspnea. Chest radiograph shows multiple small nodular opacities predominantly in the upper lung zones. There is prominent hilar and mediastinal lymphadenopathy with distinct, peripheral rim-like calcifications. What is the classic term for this nodal calcification pattern?",
  opts: [
    "Popcorn calcification",
    "Eggshell calcification",
    "Target calcification",
    "Ghon complex"
  ],
  ans: 1,
  exp: "'Eggshell calcification' refers to thin, distinct ring-like calcifications occurring at the periphery of hilar and mediastinal lymph nodes. While it can occasionally be seen in sarcoidosis or treated lymphoma, it is the classic, highly suggestive radiographic hallmark of Silicosis (sandblasting, mining, quarrying).",
  wrongExp: "• <strong>Option A (Popcorn calcification):</strong> Stippled, irregular calcification classically seen in benign pulmonary hamartomas and cartilaginous bone tumors (chondrosarcoma).<br>• <strong>Option C (Target calcification):</strong> Characterized by a central calcified nidus surrounded by a radiolucent halo, typically seen in benign granulomas like histoplasmosis.<br>• <strong>Option D (Ghon complex):</strong> A localized subpleural calcified nodule (Ghon focus) combined with a calcified ipsilateral hilar lymph node, representing healed primary tuberculosis."
},
{
  id: 18015,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Pulmonary Vascular Disease",
  level: "Hard",
  q: "A 40-year-old woman develops sudden onset pleuritic chest pain and hemoptysis four days after pelvic surgery. A chest radiograph demonstrates a wedge-shaped, pleural-based opacification in the right lower lobe with its apex pointing toward the hilum. What is this classic radiographic sign of pulmonary infarction called?",
  opts: [
    "Westermark sign",
    "Hampton's hump",
    "Fleischner sign",
    "Knuckle sign"
  ],
  ans: 1,
  exp: "Hampton's hump is a classic (though relatively rare) radiographic sign of pulmonary embolism with pulmonary infarction. It appears as a wedge-shaped, shallow, pleural-based consolidation with a convex margin facing the hilum. It is typically seen in the lower lobes.",
  wrongExp: "• <strong>Option A (Westermark sign):</strong> Another sign of pulmonary embolism, but it represents focal oligemia (hyperlucency/darker lung) distal to the occluded pulmonary vessel, not an opaque consolidation.<br>• <strong>Option C (Fleischner sign):</strong> A prominently enlarged central pulmonary artery seen on CXR due to pulmonary hypertension or a massive lodged central clot.<br>• <strong>Option D (Knuckle sign):</strong> An abrupt tapering or cutoff of a pulmonary artery secondary to an embolus, best seen on CT or angiography."
},
{
  id: 18016,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Airway Diseases",
  level: "Moderate",
  q: "A patient with active pulmonary tuberculosis undergoes a high-resolution CT (HRCT) of the chest. The scan demonstrates multiple small centrilobular nodules connected to linear branching opacities, resembling a budding branch. What is the pathological significance of this 'tree-in-bud' pattern?",
  opts: [
    "Endobronchial spread of infection leading to bronchiolar impaction",
    "Hematogenous dissemination of the bacilli (miliary spread)",
    "Lymphangitic carcinomatosis",
    "Fibrotic traction and destruction of alveolar walls"
  ],
  ans: 0,
  exp: "The 'tree-in-bud' pattern on HRCT represents dilated terminal and respiratory bronchioles filled with mucus, pus, or fluid (impacted bronchioles). In the context of active pulmonary tuberculosis, it indicates endobronchial spread of the infection. It can also be seen in other airway-centered infections (bronchopneumonia) and cystic fibrosis.",
  wrongExp: "• <strong>Option B (Hematogenous dissemination):</strong> Miliary spread produces a classic 'miliary pattern' consisting of countless tiny (1-3 mm), randomly distributed nodules throughout both lungs, without the branching V- or Y-shaped tubular structures.<br>• <strong>Option C (Lymphangitic carcinomatosis):</strong> Characterized by smooth or nodular thickening of the interlobular septa and peribronchovascular interstitium, often with unilateral pleural effusion.<br>• <strong>Option D (Fibrotic traction):</strong> Causes traction bronchiectasis and honeycombing (as seen in UIP), not the exudative tree-in-bud pattern."
},
{
  id: 18017,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Infectious Diseases of Chest",
  level: "Moderate",
  q: "A 60-year-old man with a history of treated tuberculosis presents with hemoptysis. A chest radiograph demonstrates a pre-existing large cavity in the right upper lobe containing a solid, dependent, rounded mass. A crescent of air separates the mass from the superior wall of the cavity. When the patient is imaged in the prone position, the mass shifts to the dependent portion of the cavity. What is the name of this radiological sign?",
  opts: [
    "Water lily sign",
    "Monod sign (Air crescent sign)",
    "Halo sign",
    "Reverse halo sign"
  ],
  ans: 1,
  exp: "The Monod sign (often referred to interchangeably with the air crescent sign in this context) describes a crescent of air outlining a solid, mobile mass (a mycetoma or 'fungus ball', typically Aspergillus) within a pre-existing lung cavity. Gravity-dependent mobility of the mass on decubitus or prone imaging confirms that it is free-floating within the cavity.",
  wrongExp: "• <strong>Option A (Water lily sign):</strong> Also known as the Camelot sign; seen when the endocyst of a pulmonary hydatid cyst (Echinococcus) ruptures and collapses, floating on top of the fluid within the cyst.<br>• <strong>Option C (Halo sign):</strong> A zone of ground-glass opacity surrounding a pulmonary nodule, representing focal hemorrhage. It is classic for invasive pulmonary aspergillosis in severely neutropenic patients, not a chronic saprophytic aspergilloma.<br>• <strong>Option D (Reverse halo sign):</strong> A central ground-glass opacity surrounded by a ring of denser consolidation. It is classically associated with organizing pneumonia (Cryptogenic Organizing Pneumonia)."
},
{
  id: 18018,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Lung Cancer Imaging",
  level: "Hard",
  q: "A 65-year-old heavy smoker presents with weight loss and a chronic cough. A posteroanterior chest radiograph reveals opacification of the right upper lobe. The minor (horizontal) fissure is displaced superiorly, forming a concave curve laterally, but its medial aspect bulges inferiorly due to a prominent hilar mass. What is this classic radiographic appearance called?",
  opts: [
    "Luftsichel sign",
    "Golden S sign",
    "Silhouette sign",
    "Cervicothoracic sign"
  ],
  ans: 1,
  exp: "The Golden S sign (or S-sign of Golden) is seen in right upper lobe (RUL) collapse secondary to an obstructing central mass (typically bronchogenic carcinoma). The collapsed RUL pulls the lateral portion of the minor fissure upward (concave), while the bulky central tumor prevents the medial portion from collapsing and pushes it downward (convex), creating a reverse 'S' shape.",
  wrongExp: "• <strong>Option A (Luftsichel sign):</strong> Seen in severe left upper lobe collapse. It is a sickle-shaped lucency of the hyperinflated superior segment of the left lower lobe interposing itself between the collapsed LUL and the aortic arch.<br>• <strong>Option C (Silhouette sign):</strong> Loss of a normal anatomical border when an opacity contiguous with it has the same radiographic density (e.g., RML consolidation obscuring the right heart border).<br>• <strong>Option D (Cervicothoracic sign):</strong> Used to determine if an upper mediastinal mass is anterior or posterior. If the border extends above the clavicles, it is posterior; if it disappears below the clavicles, it is anterior."
},
{
  id: 18019,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Aortic Diseases",
  level: "Moderate",
  q: "A 55-year-old hypertensive male presents with tearing chest pain radiating to his back. A CT angiogram of the chest reveals a dissection flap originating distal to the origin of the left subclavian artery and extending into the descending aorta. The ascending aorta is completely spared. According to the Stanford classification, what type of dissection is this, and what is the typical initial management?",
  opts: [
    "Stanford Type A; Emergency surgery",
    "Stanford Type A; Medical management",
    "Stanford Type B; Emergency surgery",
    "Stanford Type B; Medical management"
  ],
  ans: 3,
  exp: "The Stanford classification divides aortic dissections into Type A (involving the ascending aorta, regardless of the site of the primary tear) and Type B (all others, strictly sparing the ascending aorta, typically originating distal to the left subclavian artery). Type A dissections require emergency surgical intervention due to the high risk of fatal pericardial tamponade or coronary occlusion. Uncomplicated Type B dissections are initially treated with aggressive medical management (IV beta-blockers) to control blood pressure and shear stress.",
  wrongExp: "• <strong>Option A (Type A; Emergency surgery):</strong> Type A must involve the ascending aorta, which is spared in this patient.<br>• <strong>Option B (Type A; Medical management):</strong> Incorrect classification and incorrect management for Type A.<br>• <strong>Option C (Type B; Emergency surgery):</strong> Type B is managed medically unless complicated by rupture, rapid expansion, or end-organ malperfusion (e.g., renal or bowel ischemia)."
},
{
  id: 18020,
  subject: "Radiology",
  topic: "Chest & CVS Imaging",
  chapter: "Pulmonary Edema",
  level: "Easy",
  q: "A 70-year-old patient with congestive heart failure presents with severe orthopnea. A chest radiograph demonstrates cardiomegaly, cephalization of pulmonary vessels, and short 1-2 cm horizontal radiopaque lines in the lung periphery, abutting the pleural surface near the costophrenic angles. What is the anatomical basis of these lines?",
  opts: [
    "Thickened interlobular septa due to interstitial edema",
    "Subsegmental atelectasis",
    "Calcified pleural plaques",
    "Dilated alveolar sacs filled with transudate"
  ],
  ans: 0,
  exp: "The lines described are Kerley B lines, which are a hallmark of interstitial pulmonary edema in congestive heart failure. They are caused by fluid accumulating in and thickening the interlobular septa. They appear as short, horizontal, non-branching lines measuring 1-2 cm, most prominent at the lung bases touching the lateral pleura.",
  wrongExp: "• <strong>Option B (Subsegmental atelectasis):</strong> Produces linear, band-like opacities (discoid or plate-like atelectasis) that are usually much longer and thicker than Kerley B lines, often located above the diaphragm.<br>• <strong>Option C (Calcified pleural plaques):</strong> Classic finding in asbestos exposure (asbestosis). They appear as dense, irregular, 'holly leaf' calcifications on the diaphragmatic or parietal pleura.<br>• <strong>Option D (Dilated alveolar sacs):</strong> Fluid in the alveoli produces airspace disease (alveolar pulmonary edema), which appears as fluffy, confluent, bilateral perihilar opacities ('bat-wing' or 'butterfly' pattern), not distinct horizontal lines."
},
{
  id: 18021,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Traumatic Brain Injury",
  level: "Easy",
  q: "A 22-year-old man is struck on the side of the head with a baseball bat. He briefly loses consciousness, wakes up, and seems fine. Two hours later, he rapidly deteriorates and becomes comatose. A non-contrast CT of the head reveals a hyperdense, biconvex (lens-shaped) extra-axial collection of blood over the right temporal lobe. What is the most likely source of this bleeding?",
  opts: [
    "Bridging veins",
    "Middle meningeal artery",
    "Superior sagittal sinus",
    "Berry aneurysm"
  ],
  ans: 1,
  exp: "The clinical vignette (lucid interval) and CT findings (hyperdense, biconvex/lentiform shape that respects cranial suture lines) are classic for an Epidural Hematoma (EDH). The vast majority of epidural hematomas are arterial in origin, most commonly caused by a tear of the Middle Meningeal Artery secondary to a temporal bone fracture.",
  wrongExp: "• <strong>Option A (Bridging veins):</strong> Tearing of the bridging veins causes a Subdural Hematoma (SDH). On CT, an SDH appears as a crescent-shaped collection that crosses suture lines but respects dural attachments (like the falx cerebri).<br>• <strong>Option C (Superior sagittal sinus):</strong> Tears in dural venous sinuses can cause an EDH or SDH, but the middle meningeal artery is by far the most common cause of a classic temporal EDH.<br>• <strong>Option D (Berry aneurysm):</strong> Rupture of an intracranial aneurysm typically causes a Subarachnoid Hemorrhage (SAH), seen as hyperdensity tracking into the basal cisterns, sylvian fissures, and sulci (the 'star sign')."
},
{
  id: 18022,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Traumatic Brain Injury",
  level: "Easy",
  q: "An 80-year-old alcoholic man presents with a progressive headache and confusion over the past month. He had a minor fall 4 weeks ago. Non-contrast CT of the head shows a large, crescent-shaped, hypodense extra-axial collection over the left cerebral hemisphere, causing significant midline shift. What is the diagnosis?",
  opts: [
    "Acute epidural hematoma",
    "Chronic subdural hematoma",
    "Subarachnoid hemorrhage",
    "Acute subdural hematoma"
  ],
  ans: 1,
  exp: "A Subdural Hematoma (SDH) forms a crescent-shaped collection over the cerebral hemisphere, crossing suture lines. Acute blood on CT is hyperdense (bright white). Over time, as the hemoglobin degrades, the blood becomes isodense, and eventually hypodense (dark gray/fluid density) in the chronic stage (>3 weeks). The elderly and alcoholics are highly susceptible due to brain atrophy, which stretches and tears the bridging veins with minor trauma.",
  wrongExp: "• <strong>Option A (Acute epidural hematoma):</strong> Appears as a hyperdense, biconvex (lens-shaped) collection that does not cross cranial sutures.<br>• <strong>Option C (Subarachnoid hemorrhage):</strong> Blood tracks into the sulci and basal cisterns, causing a 'star pattern' of hyperdensity.<br>• <strong>Option D (Acute subdural hematoma):</strong> Would appear as a bright white (hyperdense) crescentic collection immediately following severe trauma."
},
{
  id: 18023,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Cerebrovascular Disease",
  level: "Moderate",
  q: "A 50-year-old female presents to the ER with the 'worst headache of my life'. A non-contrast CT of the head is obtained immediately and demonstrates hyperdense material outlining the basal cisterns and tracking into the Sylvian fissures bilaterally, creating a 'five-pointed star' appearance. What is the most common etiology of this finding?",
  opts: [
    "Rupture of a saccular (berry) aneurysm",
    "Hypertensive rupture of Charcot-Bouchard microaneurysms",
    "Tearing of the middle meningeal artery",
    "Rupture of bridging veins"
  ],
  ans: 0,
  exp: "The patient is experiencing a Subarachnoid Hemorrhage (SAH), classically presenting with a 'thunderclap' headache. The CT reveals acute blood (hyperdensity) filling the subarachnoid space (basal cisterns, sulci, and fissures). Approximately 85% of spontaneous non-traumatic SAHs are caused by the rupture of a saccular (berry) aneurysm, most commonly located in the Circle of Willis.",
  wrongExp: "• <strong>Option B (Charcot-Bouchard microaneurysms):</strong> These typically rupture due to chronic hypertension and cause spontaneous Intraparenchymal Hemorrhage (classically in the basal ganglia, thalamus, or pons), not primary subarachnoid bleeding.<br>• <strong>Option C (Middle meningeal artery):</strong> Tearing causes an Epidural Hematoma (lens-shaped extra-axial mass).<br>• <strong>Option D (Bridging veins):</strong> Tearing causes a Subdural Hematoma (crescent-shaped extra-axial mass)."
},
{
  id: 18024,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Demyelinating Diseases",
  level: "Moderate",
  q: "A 30-year-old woman presents with episodes of unilateral vision loss and leg weakness separated by months. A sagittal T2-FLAIR MRI of the brain is performed, demonstrating multiple hyperintense, ovoid plaques perpendicular to the lateral ventricles extending from the corpus callosum. What is the eponymous name for these characteristic lesions?",
  opts: [
    "Dawson's fingers",
    "Lisch nodules",
    "Virchow-Robin spaces",
    "Negri bodies"
  ],
  ans: 0,
  exp: "The clinical presentation (dissemination in time and space) and MRI findings are classic for Multiple Sclerosis (MS). 'Dawson's fingers' are ovoid demyelinating plaques oriented perpendicular to the ependymal surface of the lateral ventricles, following the path of the deep medullary veins. They are best visualized on sagittal T2-FLAIR MRI sequences.",
  wrongExp: "• <strong>Option B (Lisch nodules):</strong> Pigmented iris hamartomas pathognomonic for Neurofibromatosis Type 1 (NF1), not brain MRI findings.<br>• <strong>Option C (Virchow-Robin spaces):</strong> Enlarged perivascular spaces that follow the course of penetrating cerebral vessels. While visible on MRI as small fluid-filled spaces, they are a normal variant and not the demyelinating plaques of MS.<br>• <strong>Option D (Negri bodies):</strong> Eosinophilic intracytoplasmic inclusions found in neurons infected with the Rabies virus, seen purely on histology, not MRI."
},
{
  id: 18025,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Ischemic Stroke",
  level: "Hard",
  q: "A 65-year-old man presents with acute onset of right-sided hemiplegia and aphasia starting 2 hours ago. A non-contrast CT is largely unrevealing. An MRI brain is immediately performed. Which of the following MRI sequence combinations provides the highest sensitivity for detecting acute cytotoxic edema in hyperacute ischemic stroke?",
  opts: [
    "Hyperintensity on T2 and hypointensity on T1",
    "Hyperintensity on FLAIR and hypointensity on Gradient Echo (GRE)",
    "Hyperintensity on Diffusion-Weighted Imaging (DWI) and hypointensity on Apparent Diffusion Coefficient (ADC) map",
    "Hypointensity on DWI and hyperintensity on ADC map"
  ],
  ans: 2,
  exp: "Diffusion-Weighted Imaging (DWI) is the most sensitive imaging modality for detecting hyperacute ischemic stroke (within minutes of onset). Acute ischemia causes failure of the Na+/K+ pump, leading to cytotoxic edema and cellular swelling, which restricts the random (Brownian) motion of water. Restricted diffusion appears as bright hyperintensity on DWI and dark hypointensity on the corresponding ADC (Apparent Diffusion Coefficient) map.",
  wrongExp: "• <strong>Option A (T2 bright, T1 dark):</strong> Standard MRI sequences that take hours to days to show the edema and infarction of a stroke, making them insensitive in the hyperacute (<3 hour) window.<br>• <strong>Option B (FLAIR bright, GRE dark):</strong> FLAIR takes 6+ hours to become positive in stroke. GRE (or SWI) is highly sensitive to paramagnetic substances like hemosiderin and is used to rule out acute hemorrhage (blooming artifact), not to detect cytotoxic edema.<br>• <strong>Option D (DWI dark, ADC bright):</strong> This pattern indicates facilitated diffusion (e.g., in vasogenic edema from tumors or in chronic stroke), representing free movement of water, the exact opposite of an acute stroke."
},
{
  id: 18026,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "CNS Infections",
  level: "Moderate",
  q: "A 35-year-old HIV-positive patient with a CD4 count of 45 cells/mm³ presents with confusion and a new-onset seizure. A contrast-enhanced MRI of the brain reveals multiple small, ring-enhancing lesions localized predominantly within the basal ganglia and corticomedullary junction. There is significant surrounding vasogenic edema. What is the most likely diagnosis?",
  opts: [
    "Primary CNS Lymphoma",
    "Cerebral Toxoplasmosis",
    "Progressive Multifocal Leukoencephalopathy (PML)",
    "Cytomegalovirus encephalitis"
  ],
  ans: 1,
  exp: "Cerebral Toxoplasmosis is the most common cause of mass lesions in patients with advanced HIV/AIDS. The classic MRI finding is multiple ring-enhancing lesions, heavily favoring the basal ganglia and corticomedullary junction, often with prominent surrounding vasogenic edema. An 'eccentric target sign' (a small enhancing nodule on the wall of the ring) is highly specific when present.",
  wrongExp: "• <strong>Option A (Primary CNS Lymphoma):</strong> The second most common mass lesion in AIDS. However, it typically presents as a solitary, solid, homogeneously enhancing periventricular mass. Thallium SPECT or PET can differentiate (Lymphoma is metabolically active/hot; Toxo is cold).<br>• <strong>Option C (PML):</strong> Caused by the JC virus. It produces patchy, asymmetric, non-enhancing white matter lesions without mass effect or surrounding edema.<br>• <strong>Option D (Cytomegalovirus encephalitis):</strong> Typically causes periventricular enhancement (ventriculitis) and atrophy, not discrete ring-enhancing basal ganglia masses."
},
{
  id: 18027,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Brain Tumors",
  level: "Easy",
  q: "A 60-year-old man presents with progressive morning headaches, vomiting, and personality changes. A contrast-enhanced MRI of the brain demonstrates a large, irregular, peripherally ring-enhancing mass in the right frontal lobe with a central necrotic core. The lesion crosses the midline through the corpus callosum to involve the left frontal lobe. What is this classic 'butterfly' tumor?",
  opts: [
    "Meningioma",
    "Oligodendroglioma",
    "Glioblastoma Multiforme (GBM)",
    "Pilocytic astrocytoma"
  ],
  ans: 2,
  exp: "Glioblastoma (formerly Glioblastoma Multiforme or WHO Grade IV Astrocytoma) is the most common and aggressive primary malignant brain tumor in adults. It classically appears on contrast MRI as a highly necrotic, irregularly ring-enhancing mass with extensive surrounding edema. Its aggressive nature allows it to track along white matter tracts, classically crossing the corpus callosum to form a 'butterfly glioma'.",
  wrongExp: "• <strong>Option A (Meningioma):</strong> A benign, extra-axial, slow-growing tumor arising from the arachnoid cap cells, exhibiting broad dural attachment (dural tail sign) and homogeneous enhancement.<br>• <strong>Option B (Oligodendroglioma):</strong> A slow-growing frontal lobe tumor characteristically demonstrating coarse, clumped 'fried-egg' calcifications on CT.<br>• <strong>Option D (Pilocytic astrocytoma):</strong> A benign pediatric tumor typically found in the posterior fossa (cerebellum), classically appearing as a well-circumscribed cystic lesion with an intensely enhancing mural nodule."
},
{
  id: 18028,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Brain Tumors",
  level: "Moderate",
  q: "A 45-year-old female complains of progressive unilateral sensorineural hearing loss, tinnitus, and mild unsteadiness on her feet. An MRI of the brain with gadolinium contrast demonstrates a vividly enhancing mass at the cerebellopontine angle (CPA). The mass extends into and widens the internal acoustic meatus, producing an 'ice cream on a cone' appearance. What is the most likely diagnosis?",
  opts: [
    "Meningioma",
    "Epidermoid cyst",
    "Vestibular schwannoma",
    "Arachnoid cyst"
  ],
  ans: 2,
  exp: "Vestibular schwannoma (Acoustic Neuroma) is a benign tumor arising from the Schwann cells of the vestibular portion of the 8th cranial nerve. It is the most common mass of the Cerebellopontine Angle (CPA). The classic MRI hallmark is an intensely enhancing mass with an intracanalicular portion that funnels into and widens the internal acoustic meatus, resembling an 'ice cream on a cone'. Bilateral vestibular schwannomas are pathognomonic for Neurofibromatosis Type 2 (NF2).",
  wrongExp: "• <strong>Option A (Meningioma):</strong> The second most common CPA mass. However, it is eccentrically placed, has a broad dural base (dural tail), and does NOT extend into or widen the internal acoustic meatus.<br>• <strong>Option B (Epidermoid cyst):</strong> A CPA mass that restricts diffusion on DWI (bright) but does not enhance with gadolinium. It engulfs nerves and vessels rather than displacing them.<br>• <strong>Option D (Arachnoid cyst):</strong> A benign fluid-filled sac that perfectly matches CSF signal intensity on all MRI sequences (including FLAIR dark) and does not enhance."
},
{
  id: 18029,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Traumatic Brain Injury",
  level: "Hard",
  q: "A 25-year-old male is involved in a high-speed rollover motor vehicle accident and is deeply comatose at the scene. An initial CT scan of the head is unremarkable except for loss of gray-white matter differentiation. A subsequent MRI demonstrates multiple tiny, punctate foci of restricted diffusion and hypointense microhemorrhages on Susceptibility-Weighted Imaging (SWI) located at the gray-white matter junction, corpus callosum, and dorsolateral brainstem. What is the diagnosis?",
  opts: [
    "Hypertensive encephalopathy",
    "Diffuse Axonal Injury (DAI)",
    "Cerebral amyloid angiopathy",
    "Fat embolism syndrome"
  ],
  ans: 1,
  exp: "Diffuse Axonal Injury (DAI) results from severe rotational acceleration-deceleration forces that sheer axons at interfaces of differing tissue density. Patients are typically profoundly comatose with disproportionately 'normal' initial CT scans. The hallmark on MRI (specifically gradient echo or SWI sequences, which are highly sensitive to blood products) is multiple punctate microhemorrhages located classically at the gray-white matter junction, the splenium of the corpus callosum, and the upper brainstem.",
  wrongExp: "• <strong>Option A (Hypertensive encephalopathy):</strong> Presents with posterior reversible encephalopathy syndrome (PRES), characterized by symmetrical vasogenic edema in the posterior parietal and occipital lobes, not shearing microhemorrhages.<br>• <strong>Option C (Cerebral amyloid angiopathy):</strong> A common cause of lobar microhemorrhages, but it occurs in the elderly leading to spontaneous lobar bleeds and dementia, not severe acute post-traumatic coma in a young patient.<br>• <strong>Option D (Fat embolism syndrome):</strong> Can cause a 'starfield' pattern of microinfarcts on MRI, but classically occurs 24-72 hours after a long bone fracture and is accompanied by hypoxia and a petechial rash."
},
{
  id: 18030,
  subject: "Radiology",
  topic: "Neuroimaging",
  chapter: "Brain Tumors",
  level: "Moderate",
  q: "A 55-year-old woman is evaluated for new-onset focal seizures. An MRI of the brain with contrast reveals a homogenously enhancing extra-axial mass over the right parietal convexity. The mass compresses the adjacent brain parenchyma without invading it. A thickened, enhancing strip of dura extends away from the margins of the tumor base. What is the significance of this thickened dural strip?",
  opts: [
    "It is the 'dural tail sign', highly characteristic of a meningioma",
    "It indicates leptomeningeal carcinomatosis from breast cancer",
    "It is the 'crescent sign', indicative of an acute subdural hematoma",
    "It represents pachymeningitis secondary to tuberculosis"
  ],
  ans: 0,
  exp: "The 'dural tail sign' refers to the thickening and intense enhancement of the dura mater extending away from the base of a mass. When associated with an extra-axial, homogeneously enhancing tumor that compresses adjacent brain tissue, it is highly characteristic (though not 100% pathognomonic) of a Meningioma.",
  wrongExp: "• <strong>Option B (Leptomeningeal carcinomatosis):</strong> Involves diffuse, nodular enhancement tracing the sulci and folia (pia and arachnoid mater), not a focal thickened broad base of a solid extra-axial mass.<br>• <strong>Option C (Crescent sign):</strong> Subdural hematomas are crescentic but they do not homogeneously enhance with gadolinium like a solid tumor.<br>• <strong>Option D (Pachymeningitis):</strong> Can cause diffuse, thick dural enhancement, but is a widespread inflammatory condition (e.g., from TB, syphilis, or rheumatoid arthritis) without the discrete, massive tumor nodule seen in meningioma."
},
{
  id: 18031,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Esophageal Diseases",
  level: "Easy",
  q: "A 40-year-old male presents with progressive dysphagia to both solids and liquids, regurgitation of undigested food, and weight loss. A Barium swallow study is performed, demonstrating a significantly dilated proximal esophagus with smooth, symmetric tapering at the gastroesophageal junction. What is the classic name for this radiographic appearance?",
  opts: [
    "Apple core sign",
    "Bird beak sign",
    "Corkscrew sign",
    "String sign"
  ],
  ans: 1,
  exp: "The 'Bird beak' sign (or 'rat tail' appearance) on a barium swallow is the classic radiographic hallmark of Achalasia. It represents smooth, symmetric tapering of the distal esophagus down to a closed, non-relaxing lower esophageal sphincter, with proximal esophageal dilation and absent primary peristalsis.",
  wrongExp: "• <strong>Option A (Apple core sign):</strong> A short, irregular, circumferential stricture with overhanging edges, characteristic of an annular colorectal carcinoma on a barium enema.<br>• <strong>Option C (Corkscrew sign):</strong> Characteristic of Diffuse Esophageal Spasm, where simultaneous, uncoordinated, non-propulsive contractions create a beaded or corkscrew appearance of the esophagus on barium swallow.<br>• <strong>Option D (String sign):</strong> Severe, long, tubular narrowing of the terminal ileum caused by transmural inflammation, stricturing, and spasm, classically seen in Crohn's disease."
},
{
  id: 18032,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Colorectal Disease",
  level: "Easy",
  q: "A 65-year-old man presents with a change in bowel habits, iron deficiency anemia, and weight loss. A double-contrast barium enema reveals a short, sharply demarcated, circumferential stricture in the descending colon. The stricture has irregular, ulcerated mucosal margins and abrupt 'overhanging' edges. What is the most likely diagnosis?",
  opts: [
    "Crohn's disease",
    "Ulcerative colitis",
    "Colorectal adenocarcinoma",
    "Diverticular stricture"
  ],
  ans: 2,
  exp: "The description of a short, irregular, circumferential narrowing with abrupt, 'shouldered' or overhanging margins is the classic 'apple-core' (or napkin-ring) sign. It is highly specific for an annular, constricting Colorectal Adenocarcinoma, most commonly seen in the left (descending/sigmoid) colon.",
  wrongExp: "• <strong>Option A (Crohn's disease):</strong> Produces long, tubular strictures (string sign), deep fissuring ulcers, and a cobblestone appearance, typically involving the terminal ileum and right colon with skip lesions.<br>• <strong>Option B (Ulcerative colitis):</strong> Characterized by diffuse, continuous mucosal granularity, loss of haustra leading to a rigid, featureless 'lead pipe' colon, without focal strictures (unless a stricture develops, which mandates biopsy to rule out cancer).<br>• <strong>Option D (Diverticular stricture):</strong> Typically longer, with tapered margins and preserved, intact mucosa, associated with numerous diverticula, lacking the destructive 'apple-core' malignancy features."
},
{
  id: 18033,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Pediatric GI Imaging",
  level: "Moderate",
  q: "A 10-month-old infant is brought to the emergency department with episodes of severe, crampy abdominal pain, drawing up of the legs, and the passage of a 'red currant jelly' stool. An abdominal ultrasound is performed. Which of the following classic sonographic signs will confirm the suspected diagnosis?",
  opts: [
    "Whirlpool sign",
    "Target sign (Doughnut sign)",
    "String sign",
    "Double bubble sign"
  ],
  ans: 1,
  exp: "The infant's presentation is pathognomonic for Intussusception (the telescoping of a proximal bowel segment into a distal segment). Ultrasound is the diagnostic modality of choice. In cross-section, the invaginated bowel layers create concentric alternating echogenic and hypoechoic rings, known as the 'Target sign', 'Doughnut sign', or 'Bull's-eye sign'. On a longitudinal scan, it appears as the 'Pseudokidney sign'.",
  wrongExp: "• <strong>Option A (Whirlpool sign):</strong> Seen on ultrasound or CT when the bowel and mesenteric vessels twist around the superior mesenteric artery pedicle, characteristic of Midgut Volvulus.<br>• <strong>Option C (String sign):</strong> Used to describe the severely narrowed, elongated pyloric canal on a barium meal in Infantile Hypertrophic Pyloric Stenosis, or the narrowed terminal ileum in Crohn's.<br>• <strong>Option D (Double bubble sign):</strong> Seen on a plain abdominal X-ray in a newborn with Duodenal Atresia, representing air in the dilated stomach and proximal duodenum, separated by the pylorus."
},
{
  id: 18034,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Pancreatic Imaging",
  level: "Moderate",
  q: "A 45-year-old male with a history of heavy alcohol use presents with severe epigastric pain radiating to his back. A contrast-enhanced CT of the abdomen is obtained 72 hours after admission. The CT scan is utilized in the Modified CT Severity Index (Balthazar scoring). Which specific finding on a contrast-enhanced CT is the most accurate predictor of morbidity and mortality in acute pancreatitis?",
  opts: [
    "Presence of a dilated main pancreatic duct",
    "Degree of pancreatic glandular necrosis",
    "Presence of scattered pancreatic calcifications",
    "Elevation of serum lipase and amylase"
  ],
  ans: 1,
  exp: "Contrast-enhanced CT (CECT) is the gold standard for evaluating complications of acute severe pancreatitis. The Modified CT Severity Index evaluates pancreatic inflammation, fluid collections, and most importantly, the extent of pancreatic glandular necrosis. Necrosis appears as areas of the pancreas that fail to enhance with IV contrast. The extent of necrosis directly correlates with the risk of infection, multiorgan failure, and mortality.",
  wrongExp: "• <strong>Option A (Dilated main pancreatic duct):</strong> A sign of chronic pancreatitis or an obstructing lesion (like a mass), not the primary prognostic factor in acute pancreatitis.<br>• <strong>Option C (Pancreatic calcifications):</strong> The pathognomonic hallmark of Chronic Pancreatitis resulting from recurrent damage, not an acute severity marker.<br>• <strong>Option D (Elevation of lipase and amylase):</strong> These are diagnostic laboratory markers, but their absolute levels do NOT correlate with disease severity, prognosis, or the degree of necrosis."
},
{
  id: 18035,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Acute Abdomen",
  level: "Moderate",
  q: "A 50-year-old male presents with sudden, excruciating abdominal pain and a rigid, board-like abdomen. An erect chest radiograph demonstrates crescent-shaped radiolucencies immediately beneath the right and left hemidiaphragms. An abdominal radiograph obtained in the supine position demonstrates gas outlining both the inner and outer walls of the bowel loops. What is the name of this supine radiographic sign?",
  opts: [
    "Football sign",
    "Rigler's sign",
    "Falciform ligament sign",
    "Chilaiditi's sign"
  ],
  ans: 1,
  exp: "The patient has a pneumoperitoneum (free air in the peritoneal cavity), most likely from a perforated peptic ulcer. On an erect CXR, free air rises to form subdiaphragmatic crescents. On a supine abdominal X-ray, free gas outlines the outer wall of the bowel. Because intraluminal gas outlines the inner wall, the bowel wall itself becomes distinctly visible as a sharp, white line. This is known as Rigler's sign (or the double-wall sign).",
  wrongExp: "• <strong>Option A (Football sign):</strong> Represents massive pneumoperitoneum outlining the entire peritoneal cavity in a supine patient, creating a large oval radiolucency resembling an American football.<br>• <strong>Option C (Falciform ligament sign):</strong> Free gas outlining the falciform ligament, making it visible as a longitudinal linear opacity in the right upper quadrant.<br>• <strong>Option D (Chilaiditi's sign):</strong> A benign, incidental finding where a loop of colon is interposed between the liver and the right hemidiaphragm. It mimics free air (pseudopneumoperitoneum) but exhibits distinct haustral markings."
},
{
  id: 18036,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Bowel Obstruction",
  level: "Easy",
  q: "An 80-year-old institutionalized male with chronic constipation presents with massive abdominal distension and failure to pass gas or stool for 3 days. A supine abdominal radiograph demonstrates a massively dilated, single loop of large bowel originating from the pelvis and extending toward the right upper quadrant. The loop has a thick central white line formed by the apposed inner walls, creating a 'Coffee Bean' appearance. What is the diagnosis?",
  opts: [
    "Cecal volvulus",
    "Sigmoid volvulus",
    "Toxic megacolon",
    "Small bowel obstruction"
  ],
  ans: 1,
  exp: "The 'Coffee bean' sign (or 'bent inner tube' sign) is pathognomonic for a Sigmoid Volvulus. It represents a dilated, twisted sigmoid colon arising from the left lower quadrant/pelvis and typically projecting superiorly towards the right upper quadrant. The central white line is the apposition of the medial walls of the dilated, twisted loop.",
  wrongExp: "• <strong>Option A (Cecal volvulus):</strong> Less common, typically occurs in younger patients. The dilated cecum projects from the right lower quadrant towards the left upper quadrant, resembling a fetal ('comma') shape.<br>• <strong>Option C (Toxic megacolon):</strong> A life-threatening complication of inflammatory bowel disease or C. difficile, presenting with systemic toxicity and massive, continuous dilation of the transverse colon without a twisted axis or central septal line.<br>• <strong>Option D (Small bowel obstruction):</strong> Appears as multiple, centrally located, dilated loops (>3 cm) with prominent valvulae conniventes (stack of coins appearance) and multiple air-fluid levels on erect films."
},
{
  id: 18037,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Liver Tumors",
  level: "Moderate",
  q: "A 55-year-old male with Hepatitis C cirrhosis undergoes a screening ultrasound, which reveals a new 3 cm solid mass in the right hepatic lobe. A multi-phase contrast-enhanced CT scan of the liver is performed. Which of the following enhancement patterns is the diagnostic radiologic hallmark for Hepatocellular Carcinoma (HCC)?",
  opts: [
    "Peripheral, nodular, discontinuous enhancement in the arterial phase with progressive centripetal fill-in on delayed phases",
    "Early, uniform, intense enhancement in the arterial phase followed by 'washout' (hypoenhancement) in the portal venous and delayed phases",
    "Lack of enhancement in the arterial phase, with a central scar that enhances only on very late delayed phases",
    "A thick, intensely enhancing fibrous capsule with multiple internal cystic spaces that do not enhance"
  ],
  ans: 1,
  exp: "The radiologic hallmark of Hepatocellular Carcinoma (HCC) is arterial hyperenhancement followed by venous/delayed washout. HCC draws its blood supply almost exclusively from the hepatic artery (rather than the portal vein). Thus, it lights up brightly (hyperenhances) during the arterial phase, but the contrast rapidly drains away ('washes out') by the portal venous and delayed phases, rendering the tumor darker (hypoenhancing) than the surrounding liver parenchyma.",
  wrongExp: "• <strong>Option A (Peripheral nodular centripetal fill-in):</strong> This is the pathognomonic enhancement pattern for a Hepatic Hemangioma, the most common benign liver tumor.<br>• <strong>Option C (Enhancing central scar):</strong> This is highly characteristic of Focal Nodular Hyperplasia (FNH), a benign hyperplastic response to a vascular anomaly.<br>• <strong>Option D (Fibrous capsule with internal cysts):</strong> This describes a complex cystic mass like a hepatic cystadenoma or a hydatid cyst, not a solid hypervascular HCC."
},
{
  id: 18038,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Renal Imaging",
  level: "Hard",
  q: "A 30-year-old female is evaluated for recurrent bilateral calcium oxalate renal stones. An Intravenous Urogram (IVU) is performed, revealing multiple cystic dilations of the distal collecting ducts within the renal papillae bilaterally. The contrast pools within these cystic spaces, creating a classic 'bouquet of flowers' or 'paintbrush' appearance. What is the most likely diagnosis?",
  opts: [
    "Autosomal Dominant Polycystic Kidney Disease (ADPKD)",
    "Medullary Sponge Kidney",
    "Multicystic Dysplastic Kidney",
    "Papillary Necrosis"
  ],
  ans: 1,
  exp: "Medullary Sponge Kidney (MSK) is a benign, usually asymptomatic congenital anomaly characterized by cystic dilatation of the terminal collecting ducts in the medullary pyramids. The stasis of urine leads to nephrocalcinosis and recurrent calcium stones. On an IVU, the pooling of contrast in these dilated tubules prior to emptying into the calyces yields a pathognomonic striated 'paintbrush' or 'bouquet of flowers' appearance.",
  wrongExp: "• <strong>Option A (ADPKD):</strong> Presents with massive bilateral enlargement of the kidneys by hundreds of cysts of varying sizes scattered throughout the cortex and medulla, destroying renal parenchyma and causing renal failure.<br>• <strong>Option C (Multicystic Dysplastic Kidney):</strong> A severe, non-functioning unilateral malformation consisting of multiple non-communicating cysts with atretic ureters, diagnosed in infancy.<br>• <strong>Option D (Papillary Necrosis):</strong> Caused by ischemia (analgesics, sickle cell, diabetes). IVU shows tracking of contrast into the sloughed, necrotic papillae (the 'ring sign' or 'golf-tee sign'), not a paintbrush appearance."
},
{
  id: 18039,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Renal Tumors",
  level: "Moderate",
  q: "A 35-year-old female presents to the ER with sudden, severe right flank pain. She has a known history of Tuberous Sclerosis. A non-contrast CT scan of the abdomen reveals a 6 cm exophytic mass arising from the right kidney. The mass contains prominent areas measuring -50 Hounsfield Units (HU), alongside interspersed soft tissue and vascular densities. There is a large retroperitoneal hematoma surrounding the mass. What is the diagnosis?",
  opts: [
    "Renal Cell Carcinoma",
    "Angiomyolipoma",
    "Oncocytoma",
    "Xanthogranulomatous pyelonephritis"
  ],
  ans: 1,
  exp: "An Angiomyolipoma (AML) is a benign hamartoma composed of blood vessels, smooth muscle, and mature adipose tissue. They are highly associated with Tuberous Sclerosis. The diagnostic hallmark on CT is the presence of macroscopic fat (evidenced by Hounsfield units ranging from -20 to -100). Large AMLs (>4 cm) carry a significant risk of spontaneous, life-threatening retroperitoneal hemorrhage (Wunderlich syndrome).",
  wrongExp: "• <strong>Option A (Renal Cell Carcinoma):</strong> The most common malignant renal tumor. It is a solid enhancing mass. Crucially, clear cell RCC may contain microscopic lipid (visible on chemical shift MRI), but it never contains macroscopic bulk fat with negative HU on a standard CT.<br>• <strong>Option C (Oncocytoma):</strong> A benign solid renal tumor that often contains a central stellate scar, but lacks bulk macroscopic fat.<br>• <strong>Option D (Xanthogranulomatous pyelonephritis):</strong> A chronic destructive granulomatous process usually associated with an obstructing staghorn calculus, causing a non-functioning, enlarged 'bear paw' kidney."
},
{
  id: 18040,
  subject: "Radiology",
  topic: "GI & GU Imaging",
  chapter: "Pediatric GI Imaging",
  level: "Easy",
  q: "A 4-week-old first-born male infant is brought to the clinic for progressively worsening, forceful, non-bilious projectile vomiting after every feed. He appears hungry immediately after vomiting. An abdominal ultrasound is performed. Which set of ultrasound measurements definitively confirms the diagnosis of Infantile Hypertrophic Pyloric Stenosis?",
  opts: [
    "Pyloric muscle thickness > 3 mm and pyloric channel length > 15 mm",
    "Pyloric muscle thickness < 2 mm and pyloric channel length < 10 mm",
    "Bowel wall thickness > 5 mm with concentric alternating rings (target sign)",
    "Absent peristalsis in a dilated duodenal bulb"
  ],
  ans: 0,
  exp: "Ultrasound is the imaging modality of choice for diagnosing Infantile Hypertrophic Pyloric Stenosis. The hypertrophied pyloric muscle appears as a hypoechoic ring surrounding an echogenic mucosal center (the 'target sign' in cross-section). The diagnostic criteria are a pyloric muscle thickness greater than 3 mm (some texts say >4 mm, but >3 mm is the standard cut-off) and a pyloric channel length greater than 15-16 mm.",
  wrongExp: "• <strong>Option B (Thickness < 2 mm, length < 10 mm):</strong> These are normal pyloric measurements, ruling out hypertrophic pyloric stenosis.<br>• <strong>Option C (Concentric alternating rings / target sign of bowel):</strong> This measurement and appearance (multiple layers of invaginated bowel) is diagnostic of Intussusception, not pyloric stenosis.<br>• <strong>Option D (Dilated duodenal bulb):</strong> Suggests Duodenal Atresia (the 'double bubble' sign on X-ray), which presents with bilious vomiting on the first day of life, not non-bilious vomiting at 4 weeks."
},
{
  id: 18041,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Bone Tumors",
  level: "Easy",
  q: "A 15-year-old boy presents with worsening pain and swelling around his right knee for the past two months. A plain radiograph of the distal femur reveals an ill-defined, bone-forming (sclerotic) mass in the metaphysis. There is a prominent, radiating, spiculated periosteal reaction extending perpendicularly from the bone cortex into the soft tissue, alongside a triangular elevation of the periosteum at the tumor margin. What are these two classic radiologic signs called, and what is the diagnosis?",
  opts: [
    "Onion-skin appearance and Codman's triangle; Ewing Sarcoma",
    "Sunburst pattern and Codman's triangle; Osteosarcoma",
    "Soap bubble appearance and Fallen leaf sign; Giant Cell Tumor",
    "Shepherd's crook deformity and Ground-glass matrix; Fibrous Dysplasia"
  ],
  ans: 1,
  exp: "Osteosarcoma is the most common primary malignant bone tumor in youths, characteristically arising in the metaphysis of long bones (especially around the knee). It is an aggressive, osteoid-producing tumor. Rapid growth destroys the cortex and lifts the periosteum, creating a triangular rim of reactive bone ('Codman's triangle') and a radiating, spiculated pattern of perpendicular malignant bone formation ('Sunburst' or 'Sunray' appearance).",
  wrongExp: "• <strong>Option A (Onion-skin appearance; Ewing Sarcoma):</strong> Ewing sarcoma is a small round blue cell tumor of the diaphysis. It causes a multi-lamellated, parallel periosteal reaction mimicking onion layers.<br>• <strong>Option C (Soap bubble appearance; Giant Cell Tumor):</strong> GCT is a benign but locally aggressive epiphyseal tumor in adults (20-40 years) that causes an eccentric, multilocular lytic lesion ('soap bubble').<br>• <strong>Option D (Shepherd's crook; Fibrous Dysplasia):</strong> Fibrous dysplasia is a benign developmental defect replacing bone with fibrous tissue, giving a hazy 'ground-glass' appearance, and often causing bowing deformities (Shepherd's crook) in the proximal femur."
},
{
  id: 18042,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Bone Tumors",
  level: "Easy",
  q: "A 12-year-old boy presents with fever, weight loss, and severe pain in the mid-thigh. A radiograph of the femur demonstrates a large, permeative, poorly marginated lytic lesion within the diaphysis. The periosteum is lifted and thickened in multiple, concentric, parallel layers parallel to the long axis of the bone. What is this specific periosteal reaction called?",
  opts: [
    "Sunburst pattern",
    "Hair-on-end appearance",
    "Onion-skin appearance",
    "Solid lamellar periosteal reaction"
  ],
  ans: 2,
  exp: "The 'onion-skin' (lamellated) appearance is a classic aggressive periosteal reaction caused by cyclic, rapid tumor growth separating the periosteum from the cortex in multiple parallel layers. In a child with a diaphyseal permeative lesion and systemic symptoms (fever, weight loss), it is highly characteristic of Ewing Sarcoma.",
  wrongExp: "• <strong>Option A (Sunburst pattern):</strong> Consists of bone spicules radiating perpendicularly from the cortex, characteristic of Osteosarcoma.<br>• <strong>Option B (Hair-on-end appearance):</strong> Spicules of reactive bone growing vertically from the skull vault, seen in severe chronic hemolytic anemias (like Thalassemia major) due to extreme marrow hyperplasia.<br>• <strong>Option D (Solid lamellar periosteal reaction):</strong> A thick, continuous, wavy layer of new bone indicating a slow-growing, benign process (e.g., osteoid osteoma or healing fracture), not an aggressive malignancy."
},
{
  id: 18043,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Benign Bone Tumors",
  level: "Moderate",
  q: "A 20-year-old male complains of severe, deep, aching pain in his mid-tibia. The pain is noticeably worse at night and is completely relieved within 30 minutes of taking aspirin. Radiographs reveal a thickened, densely sclerotic tibial cortex containing a small (< 1.5 cm) central radiolucent core. What is this central radiolucent core called, and what is the diagnosis?",
  opts: [
    "Nidus; Osteoid Osteoma",
    "Sequestrum; Chronic Osteomyelitis",
    "Involucrum; Osteoblastoma",
    "Fallen fragment; Unicameral Bone Cyst"
  ],
  ans: 0,
  exp: "Osteoid osteoma is a benign, bone-forming tumor consisting of a highly vascular, prostaglandin-secreting core of osteoid tissue called a 'nidus' (which appears radiolucent), surrounded by an immense amount of dense, reactive sclerotic bone. The high prostaglandin E2 level causes intense nocturnal pain that is exquisitely and characteristically relieved by NSAIDs (aspirin).",
  wrongExp: "• <strong>Option B (Sequestrum; Chronic Osteomyelitis):</strong> A sequestrum is a piece of dead, necrotic bone inside a radiolucent infected cavity, appearing dense (radiopaque), not radiolucent.<br>• <strong>Option C (Involucrum; Osteoblastoma):</strong> An involucrum is a sheath of new bone around infected bone. Osteoblastoma is histologically similar to osteoid osteoma but has a nidus >2 cm, prefers the spine, and the pain is NOT dramatically relieved by aspirin.<br>• <strong>Option D (Fallen fragment; Unicameral Bone Cyst):</strong> The fallen fragment sign occurs when a piece of fractured cortex sinks into the fluid of a simple bone cyst."
},
{
  id: 18044,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Arthritis Imaging",
  level: "Moderate",
  q: "A 45-year-old woman presents with bilateral, symmetric pain, swelling, and morning stiffness in her hands and wrists. Radiographs of the hands are obtained. Which of the following constellations of radiographic findings is the most specific hallmark of early Rheumatoid Arthritis?",
  opts: [
    "Asymmetric joint space narrowing, subchondral sclerosis, and marginal osteophytes",
    "Periarticular osteopenia, symmetric joint space narrowing, and marginal bone erosions",
    "Punched-out juxta-articular erosions with overhanging bony edges ('rat-bite' erosions)",
    "Pencil-in-cup deformities and fluffy periostitis of the distal interphalangeal joints"
  ],
  ans: 1,
  exp: "Rheumatoid Arthritis (RA) is an inflammatory, autoimmune polyarthritis. The classic early radiographic features result from synovial hypertrophy (pannus) attacking the 'bare areas' of the bone inside the joint capsule. This leads to marginal erosions (the hallmark of RA), symmetric uniform joint space narrowing, and periarticular osteopenia (washout of bone density near the joints due to hyperemia).",
  wrongExp: "• <strong>Option A (Asymmetric narrowing, sclerosis, osteophytes):</strong> The classic degenerative triad defining Osteoarthritis (OA).<br>• <strong>Option C (Punched-out erosions with overhanging edges):</strong> The classic 'rat-bite' erosions pathognomonic for tophaceous Gout.<br>• <strong>Option D (Pencil-in-cup deformities):</strong> Characteristic of severe Psoriatic Arthritis (arthritis mutilans), which predominantly targets the DIP joints and features periostitis."
},
{
  id: 18045,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Arthritis Imaging",
  level: "Easy",
  q: "A 65-year-old overweight man presents with chronic, worsening pain in his right knee that worsens with weight-bearing and improves with rest. An anteroposterior (AP) standing radiograph of the knees is obtained. Which of the following radiographic findings is most characteristic of Osteoarthritis?",
  opts: [
    "Uniform, symmetric narrowing of both the medial and lateral joint compartments",
    "Marginal erosions and severe periarticular osteopenia",
    "Asymmetric narrowing of the medial joint compartment, subchondral sclerosis, and osteophyte formation",
    "Chondrocalcinosis (linear calcification) of the articular cartilage and menisci"
  ],
  ans: 2,
  exp: "Osteoarthritis (OA) is a degenerative 'wear and tear' disease. Because the mechanical axis of the leg normally passes through the medial compartment of the knee, it bears the most weight and degenerates first. Classic radiographic signs of OA include non-uniform/asymmetric joint space narrowing, subchondral sclerosis (dense white bone under the cartilage), subchondral cysts, and marginal osteophytes (bony spurs).",
  wrongExp: "• <strong>Option A (Uniform, symmetric narrowing):</strong> Characteristic of an inflammatory arthritis (like Rheumatoid Arthritis) where the pannus destroys the entire joint cartilage globally.<br>• <strong>Option B (Marginal erosions, periarticular osteopenia):</strong> Pathognomonic for Rheumatoid Arthritis.<br>• <strong>Option D (Chondrocalcinosis):</strong> The deposition of calcium pyrophosphate crystals in the cartilage, which is the radiographic hallmark of CPPD (Pseudogout)."
},
{
  id: 18046,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Spine Imaging",
  level: "Moderate",
  q: "A 28-year-old man presents with chronic, insidious lower back pain and severe morning stiffness that improves with exercise. Radiographs of the pelvis show bilateral fusion of the sacroiliac joints. An AP radiograph of the lumbar spine reveals continuous, thin, vertical bony bridges connecting the margins of adjacent vertebral bodies, resulting in a 'Bamboo spine' appearance. What are these specific bony bridges called?",
  opts: [
    "Osteophytes",
    "Syndesmophytes",
    "Flowing anterior mantle ossification",
    "Schmorl's nodes"
  ],
  ans: 1,
  exp: "The patient has Ankylosing Spondylitis (AS), an HLA-B27 associated seronegative spondyloarthropathy. The hallmark spinal lesion is the syndesmophyte—a thin, vertical, symmetrical ossification of the outer fibers of the annulus fibrosus bridging adjacent vertebral bodies. Fusion of these syndesmophytes across the entire spine creates the rigid 'Bamboo spine'.",
  wrongExp: "• <strong>Option A (Osteophytes):</strong> Horizontal, thick, bony spurs arising from the vertebral body margins in degenerative osteoarthritis (spondylosis).<br>• <strong>Option C (Flowing anterior mantle ossification):</strong> The classic description of Diffuse Idiopathic Skeletal Hyperostosis (DISH), producing thick, bulky, asymmetrical 'flowing candle wax' osteophytes across at least 4 contiguous vertebrae, while sparing the SI joints.<br>• <strong>Option D (Schmorl's nodes):</strong> Herniations of the intervertebral disc vertically through the cartilaginous endplate into the adjacent vertebral body."
},
{
  id: 18047,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Bone Tumors",
  level: "Moderate",
  q: "A 30-year-old woman complains of aching pain in her left knee. Radiographs reveal an eccentric, expansile, purely lytic lesion located in the epiphysis of the proximal tibia, extending right up to the subarticular bone plate. The lesion has a multiloculated, 'soap bubble' appearance without a sclerotic rim. What is the most likely diagnosis?",
  opts: [
    "Aneurysmal Bone Cyst",
    "Chondroblastoma",
    "Giant Cell Tumor (Osteoclastoma)",
    "Osteosarcoma"
  ],
  ans: 2,
  exp: "Giant Cell Tumor (GCT) of bone is a locally aggressive, osteoclast-derived tumor that characteristically arises in the epiphyses of long bones (most commonly around the knee) in skeletally mature young adults (20-40 years old, after the growth plates have fused). It is classically eccentric, expansile, lytic, and multiloculated ('soap bubble'), often reaching the very edge of the subarticular cortex.",
  wrongExp: "• <strong>Option A (Aneurysmal Bone Cyst):</strong> Also expansile and multiloculated, but it typically occurs in the METAPHYSIS of patients under 20 years old.<br>• <strong>Option B (Chondroblastoma):</strong> The only other major epiphyseal tumor, but it occurs in skeletally IMMATURE patients (children/teens with open growth plates) and contains chondroid matrix calcifications.<br>• <strong>Option D (Osteosarcoma):</strong> An aggressive, bone-forming, highly sclerotic (not purely lytic) tumor located in the metaphysis."
},
{
  id: 18048,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Spine Imaging",
  level: "Hard",
  q: "A 45-year-old man presents with severe lower back pain radiating down his right leg to the lateral border of his foot. He has weakness in plantar flexion. A non-contrast MRI of the lumbar spine is obtained. On the sagittal T2-weighted sequence, the L5-S1 intervertebral disc is bulging posteriorly, compressing the traversing nerve root. Additionally, the interior of the L5-S1 disc appears distinctly dark (hypointense) compared to the bright discs above it. What does this loss of T2 signal within the disc signify?",
  opts: [
    "Acute infectious discitis",
    "Desiccation (dehydration) due to disc degeneration",
    "Calcification of the nucleus pulposus",
    "A high-intensity zone (HIZ) indicating an annular tear"
  ],
  ans: 1,
  exp: "In a healthy spine, the nucleus pulposus of the intervertebral disc has a high water and proteoglycan content, making it bright (hyperintense) on T2-weighted MRI. As a disc degenerates, it loses water and proteoglycans, a process called desiccation. This causes the disc to lose height and turn dark on T2-weighted images (the 'black disc' sign), which is the MRI hallmark of degenerative disc disease.",
  wrongExp: "• <strong>Option A (Acute infectious discitis):</strong> Infection (discitis) introduces edema and inflammatory fluid, causing the disc space to appear abnormally BRIGHT (hyperintense) on T2, often with destruction of the adjacent vertebral endplates.<br>• <strong>Option C (Calcification):</strong> Can appear dark, but widespread T2 darkening is primarily due to standard degenerative dehydration, not bulk calcification.<br>• <strong>Option D (HIZ indicating annular tear):</strong> A High-Intensity Zone (HIZ) is a small, focal, bright white spot in the posterior annulus on a T2 image, representing a painful annular fissure/tear; it does not explain the entire disc turning dark."
},
{
  id: 18049,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Bone Tumors",
  level: "Hard",
  q: "A 16-year-old girl is evaluated for swelling and mild pain in her distal femur. Plain radiographs show a highly expansile, eccentric, lytic lesion in the metaphysis with a thin 'eggshell' cortical rim. An MRI is performed. The defining MRI feature is the presence of multiple horizontal interfaces separating bright and dark fluid intensities within the cystic spaces. What is the diagnosis?",
  opts: [
    "Simple (Unicameral) Bone Cyst",
    "Giant Cell Tumor",
    "Aneurysmal Bone Cyst",
    "Chondromyxoid fibroma"
  ],
  ans: 2,
  exp: "The presence of multiple 'fluid-fluid levels' within an expansile, multilocular lytic bone lesion on MRI is the diagnostic hallmark of an Aneurysmal Bone Cyst (ABC). ABCs are cavernous, blood-filled spaces. Because the blood is static, the heavier red blood cells settle to the bottom, separating from the lighter serum on top. This creates distinct horizontal lines (fluid-fluid levels) best seen on T2-weighted MRI.",
  wrongExp: "• <strong>Option A (Unicameral Bone Cyst):</strong> A centrally located, single-chambered cyst filled with clear serous fluid. It exhibits uniform fluid intensity on MRI, completely lacking multiple fluid-fluid levels.<br>• <strong>Option B (Giant Cell Tumor):</strong> A solid, neoplastic tumor of the epiphysis. While secondary ABCs can occasionally form within a GCT, primary GCTs are solid cellular tumors, not large fluid lakes.<br>• <strong>Option D (Chondromyxoid fibroma):</strong> A rare benign cartilaginous tumor containing solid myxoid tissue, presenting as an eccentric sclerotic-rimmed lesion, lacking fluid-fluid levels."
},
{
  id: 18050,
  subject: "Radiology",
  topic: "MSK Imaging",
  chapter: "Bone Tumors",
  level: "Moderate",
  q: "A 68-year-old man presents with worsening lower back pain and generalized fatigue. Laboratory tests show a normocytic anemia, hypercalcemia, and renal insufficiency. A lateral skull radiograph demonstrates multiple, sharply circumscribed, purely radiolucent lesions of varying sizes without any surrounding reactive sclerosis. What is the classic term for this radiographic appearance?",
  opts: [
    "Cotton wool appearance",
    "Salt and pepper skull",
    "Raindrop skull",
    "Hair-on-end skull"
  ],
  ans: 2,
  exp: "The patient has the classic 'CRAB' symptoms (Calcium elevation, Renal failure, Anemia, Bone lesions) of Multiple Myeloma. The pathognomonic radiographic finding in the skull is the 'Raindrop skull'—multiple, sharply defined, purely lytic 'punched-out' bone lesions that look like drops of rain hitting a surface, uniquely lacking any surrounding sclerotic reactive bone.",
  wrongExp: "• <strong>Option A (Cotton wool appearance):</strong> Classic for the sclerotic (late) phase of Paget's disease of bone, where thickened, disorganized, fluffy sclerotic patches mix with lytic areas in the skull vault.<br>• <strong>Option B (Salt and pepper skull):</strong> A classic radiographic finding in Hyperparathyroidism, where diffuse granular demineralization (osteopenia) gives the skull a speckled, granular appearance.<br>• <strong>Option D (Hair-on-end skull):</strong> Caused by extreme marrow hyperplasia widening the diploic space and forming vertical bony spicules, seen in severe chronic hemolytic anemias like Thalassemia major and Sickle cell disease."
},
];
