window.MEDQ_DATA = window.MEDQ_DATA || {};
window.MEDQ_DATA.pharmacology = [
{
  id: 5001,
  subject: "Pharmacology",
  topic: "General Pharmacology",
  chapter: "Pharmacokinetics: Volume of Distribution",
  level: "Moderate",
  q: "A 65-year-old male weighing 70 kg is brought to the emergency department with acute ventricular tachycardia. The attending physician decides to administer a loading dose of an antiarrhythmic drug to achieve an immediate target plasma concentration of 4 mg/L. The drug has an apparent volume of distribution (Vd) of 2 L/kg and a bioavailability of 100% when given intravenously. What is the calculated intravenous loading dose required for this patient?",
  opts: ["140 mg", "280 mg", "560 mg", "1120 mg"],
  ans: 2,
  exp: "The loading dose (LD) of a drug is calculated using the formula: Loading Dose = (Target Plasma Concentration × Volume of Distribution) / Bioavailability (F). For intravenous administration, F = 1.0 (100%). The patient's total volume of distribution is Vd = 2 L/kg × 70 kg = 140 L. Substituting the values: LD = (4 mg/L × 140 L) / 1.0 = 560 mg. Loading doses are designed to rapidly achieve the desired therapeutic steady-state concentration without having to wait for 4 to 5 half-lives.",
  wrongExp: "• <strong>Option A (140 mg):</strong> This value represents only the total volume of distribution in liters (70 kg × 2 L/kg = 140 L), omitting multiplication by the target plasma concentration.<br>• <strong>Option B (280 mg):</strong> This represents an error where the target plasma concentration is multiplied only by the weight-based Vd (4 mg/L × 70 kg = 280 mg), failing to incorporate the distribution volume of 2 L/kg.<br>• <strong>Option D (1120 mg):</strong> This represents a mathematical doubling of the correct dose, which would result in toxic supratherapeutic plasma levels (8 mg/L)."
},
{
  id: 5002,
  subject: "Pharmacology",
  topic: "General Pharmacology",
  chapter: "Pharmacokinetics: Elimination Kinetics",
  level: "Easy",
  q: "A 24-year-old male presents to the emergency department following an acute overdose of ethanol. His initial blood alcohol concentration is 200 mg/dL. Three hours later, repeat testing shows a concentration of 155 mg/dL, and six hours after admission, it is 110 mg/dL. This pattern of a constant amount of drug being eliminated per unit of time regardless of plasma concentration is characteristic of which type of elimination kinetics?",
  opts: ["First-order kinetics", "Zero-order kinetics", "Michaelis-Menten fractional clearance", "Substrate-independent exponential decay"],
  ans: 1,
  exp: "Zero-order (capacity-limited or saturation) kinetics occurs when the metabolic enzymes or transport systems responsible for drug clearance become fully saturated at therapeutic or supratherapeutic concentrations. Consequently, a constant absolute AMOUNT of drug is eliminated per unit time, meaning clearance is variable and the half-life is not constant (it increases with dose). Classic high-yield drugs exhibiting zero-order kinetics at clinical or toxic levels include Ethanol, Phenytoin, High-dose Salicylates (Aspirin), and Theophylline (mnemonic: 'PEAS' or 'THE Pits').",
  wrongExp: "• <strong>Option A (First-order kinetics):</strong> In first-order kinetics, a constant FRACTION (or percentage) of the drug is eliminated per unit time; clearance and half-life remain constant as the elimination rate is proportional to plasma concentration.<br>• <strong>Option C (Michaelis-Menten fractional clearance):</strong> While Michaelis-Menten kinetics underlies the transition between first- and zero-order processes, the steady state where rate of elimination is fixed is specifically defined as zero-order kinetics.<br>• <strong>Option D (Substrate-independent exponential decay):</strong> Exponential decay is the hallmark of first-order kinetics, where concentrations decline logarithmically rather than linearly."
},
{
  id: 5003,
  subject: "Pharmacology",
  topic: "General Pharmacology",
  chapter: "Drug Metabolism: Cytochrome P450 Interactions",
  level: "Moderate",
  q: "A 52-year-old woman with mechanical prosthetic mitral valve replacement has been maintained on a stable dose of warfarin with an international normalized ratio (INR) consistently between 2.5 and 3.0. She is diagnosed with pulmonary tuberculosis and started on Rifampicin, Isoniazid, Pyrazinamide, and Ethambutol. Two weeks later, her routine INR drops to 1.2. Which of the following mechanisms best explains this reduction in therapeutic anticoagulation?",
  opts: [
    "Competitive displacement of warfarin from plasma albumin by pyrazinamide",
    "Potent induction of hepatic CYP2C9 and CYP3A4 enzymes by rifampicin",
    "Direct chemical chelation of warfarin by isoniazid in the systemic circulation",
    "Impaired intestinal absorption of warfarin caused by ethambutol-induced enteropathy"
  ],
  ans: 1,
  exp: "Rifampicin is one of the most potent known inducers of the hepatic microsomal cytochrome P450 enzyme system, specifically upregulating CYP2C9, CYP3A4, and CYP1A2 via activation of the Pregnane X Receptor (PXR). Warfarin exists as a racemic mixture; the more potent S-warfarin is cleared primarily by CYP2C9, while R-warfarin is cleared by CYP3A4 and CYP1A2. Induction of these enzymes by rifampicin markedly accelerates the hepatic clearance of warfarin, leading to subtherapeutic plasma levels and a drastic drop in INR, putting the patient at high risk for thromboembolic stroke.",
  wrongExp: "• <strong>Option A (Competitive displacement of warfarin from plasma albumin by pyrazinamide):</strong> Displacing warfarin from albumin would transiently increase free drug levels and elevate the INR, rather than decrease it.<br>• <strong>Option C (Direct chemical chelation of warfarin by isoniazid):</strong> Isoniazid does not chelate warfarin; in fact, isoniazid is an enzyme inhibitor that alone would tend to increase warfarin levels.<br>• <strong>Option D (Impaired intestinal absorption of warfarin caused by ethambutol-induced enteropathy):</strong> Ethambutol causes retrobulbar optic neuritis, not malabsorptive enteropathy, and does not alter warfarin bioavailability."
},
{
  id: 5004,
  subject: "Pharmacology",
  topic: "General Pharmacology",
  chapter: "Pharmacodynamics: Receptor Antagonism",
  level: "Hard",
  q: "In an experimental organ bath preparation, increasing concentrations of an agonist produce a sigmoidal concentration-response curve for smooth muscle contraction. When the experiment is repeated in the presence of a fixed concentration of Drug X, the agonist's concentration-response curve shifts parallelly to the right without any reduction in the maximal contractile response (Emax). Which type of drug is Drug X?",
  opts: [
    "Non-competitive allosteric antagonist",
    "Reversible competitive antagonist",
    "Irreversible competitive antagonist",
    "Physiological antagonist"
  ],
  ans: 1,
  exp: "A reversible competitive antagonist binds reversibly to the same active receptor site as the endogenous agonist. Because agonist and antagonist compete for the identical orthosteric binding site, the inhibitory effect can be completely overcome by surmounting the block with higher concentrations of the agonist. Consequently, the dose-response curve exhibits a parallel rightward shift, reflecting an increase in the EC50 (effective concentration producing 50% response) and an apparent decrease in agonist potency, while the maximal efficacy (Emax) remains completely intact.",
  wrongExp: "• <strong>Option A (Non-competitive allosteric antagonist):</strong> Non-competitive antagonists bind to allosteric sites and decrease the maximal response (Emax) without shifting the curve parallelly, making it impossible to restore Emax regardless of agonist concentration.<br>• <strong>Option C (Irreversible competitive antagonist):</strong> Irreversible antagonists form covalent bonds with the orthosteric site, removing functional receptors from the pool, which depresses Emax (once receptor reserve is depleted).<br>• <strong>Option D (Physiological antagonist):</strong> Physiological antagonists act through distinct, independent receptor pathways that produce functionally opposing physiological actions (e.g., histamine vs. adrenaline on airway caliber)."
},
{
  id: 5005,
  subject: "Pharmacology",
  topic: "General Pharmacology",
  chapter: "Drug Metabolism: Phase II Conjugation",
  level: "Easy",
  q: "A 4-day-old premature neonate develops abdominal distension, progressive lethargy, hypothermia, ashen-gray skin discoloration, and circulatory collapse ('Gray Baby Syndrome') following intravenous administration of an antimicrobial agent. Deficient activity of which neonatal hepatic Phase II metabolic pathway is responsible for the toxic accumulation of this drug?",
  opts: [
    "Glucuronidation via UDP-glucuronosyltransferase",
    "Acetylation via N-acetyltransferase 2 (NAT2)",
    "Sulfation via sulfotransferase",
    "Glutathione conjugation via glutathione S-transferase"
  ],
  ans: 0,
  exp: "Chloramphenicol is eliminated primarily by hepatic Phase II glucuronide conjugation catalyzed by UDP-glucuronosyltransferase (UGT2B7), followed by renal excretion of the inactive metabolite. Premature infants and neonates have immature hepatic microsomal enzyme systems with physiologically low levels of UDP-glucuronosyltransferase and diminished renal glomerular filtration. When exposed to excessive chloramphenicol, the parent drug accumulates systemically, poisoning mitochondrial ribosomes and cellular respiration, which leads to Gray Baby Syndrome characterized by vomiting, hypotonia, hypothermia, ashen-gray cyanosis, and fatal vascular collapse.",
  wrongExp: "• <strong>Option B (Acetylation via N-acetyltransferase 2):</strong> NAT2 polymorphisms determine fast vs. slow acetylator status for drugs like Isoniazid, Hydralazine, and Procainamide, not chloramphenicol.<br>• <strong>Option C (Sulfation via sulfotransferase):</strong> Neonates have well-developed sulfation pathways (which compensate for paracetamol metabolism), and chloramphenicol does not undergo primary clearance by sulfation.<br>• <strong>Option D (Glutathione conjugation via glutathione S-transferase):</strong> Glutathione conjugation neutralizes reactive toxic electrophiles like paracetamol's NAPQI, not chloramphenicol."
},
{
  id: 5006,
  subject: "Pharmacology",
  topic: "General Pharmacology",
  chapter: "Pharmacogenomics: TPMT & Thiopurines",
  level: "Hard",
  q: "A 28-year-old woman with severe Crohn's disease is evaluated before starting azathioprine therapy. Pharmacogenomic testing reveals homozygous deficiency of the Thiopurine S-methyltransferase (TPMT) gene. If this patient were initiated on standard doses of azathioprine without dose adjustment, which life-threatening adverse event would she be at extreme risk of developing?",
  opts: [
    "Severe bone marrow aplasia and pancytopenia",
    "Acute fulminant hepatic necrosis",
    "Hyperacute interstitial pulmonary fibrosis",
    "Severe refractory hyperuricemic nephropathy"
  ],
  ans: 0,
  exp: "Azathioprine is a prodrug non-enzymatically converted to 6-mercaptopurine (6-MP). 6-MP has three competing metabolic fates: (1) Inactivation by xanthine oxidase to 6-thiouric acid, (2) Inactivation by thiopurine S-methyltransferase (TPMT) to 6-methylmercaptopurine, and (3) Bioactivation by hypoxanthine phosphoribosyltransferase (HGPRT) into cytotoxic 6-thioguanine nucleotides (6-TGN). In patients with TPMT deficiency (or NUDT15 variants), 6-MP is shunted almost entirely down the HGPRT pathway, resulting in excessive accumulation of cytotoxic 6-TGN in hematopoietic progenitor cells, causing catastrophic myelosuppression and fatal pancytopenia. Doses must be reduced by 90% or alternative agents chosen.",
  wrongExp: "• <strong>Option B (Acute fulminant hepatic necrosis):</strong> While azathioprine can produce mild cholestatic jaundice or nodular regenerative hyperplasia, acute hepatic necrosis is not the consequence of TPMT deficiency.<br>• <strong>Option C (Hyperacute interstitial pulmonary fibrosis):</strong> Pulmonary fibrosis is associated with bleomycin, amiodarone, or busulfan, but is not a recognized feature of thiopurine toxicity.<br>• <strong>Option D (Severe refractory hyperuricemic nephropathy):</strong> Hyperuricemic nephropathy results from massive tumor lysis, not thiopurine accumulation; in fact, azathioprine breakdown via xanthine oxidase produces uric acid, which is reduced if 6-MP is shunted."
},
{
  id: 5007,
  subject: "Pharmacology",
  topic: "Autonomic Nervous System",
  chapter: "Cholinergic System: Organophosphate Toxicity",
  level: "Easy",
  q: "A 35-year-old agricultural laborer is rushed to the emergency department unconscious, profusely diaphoretic, salivating, and wheezing. Physical examination reveals pinpoint pupils (miosis), generalized muscle fasciculations, bradycardia (HR 42 bpm), and involuntary urination and defecation. Following stabilization of the airway and administration of atropine, which specific pharmacological agent should be administered to regenerate acetylcholinesterase at the neuromuscular junction?",
  opts: ["Physostigmine", "Pralidoxime (2-PAM)", "Neostigmine", "Edrophonium"],
  ans: 1,
  exp: "Organophosphates irreversibly phosphorylate the serine hydroxyl group at the esteratic site of acetylcholinesterase, leading to massive synaptic accumulation of acetylcholine. While atropine competitively blocks muscarinic receptors (relieving miosis, bronchorrhea, bradycardia, and salivation), it has zero effect at nicotinic neuromuscular junctions. Pralidoxime (2-PAM) is a cholinesterase reactivator with an oxime moiety that binds the anionic site of phosphorylated cholinesterase, generates a high-affinity nucleophilic attack on the phosphate group, and removes it, thereby regenerating active acetylcholinesterase and reversing nicotinic paralysis and fasciculations before irreversible 'aging' of the enzyme occurs.",
  wrongExp: "• <strong>Option A (Physostigmine):</strong> Physostigmine is a tertiary amine anticholinesterase used to treat anticholinergic poisoning (e.g., atropine overdose); giving it in organophosphate toxicity would compound cholinergic catastrophe.<br>• <strong>Option C (Neostigmine):</strong> Neostigmine is another acetylcholinesterase inhibitor used in myasthenia gravis, which would exacerbate organophosphate poisoning.<br>• <strong>Option D (Edrophonium):</strong> Edrophonium is a short-acting competitive cholinesterase inhibitor historically used in the Tensilon test, contraindicated here."
},
{
  id: 5008,
  subject: "Pharmacology",
  topic: "Autonomic Nervous System",
  chapter: "Anticholinergic Drugs: Atropine Toxidrome",
  level: "Moderate",
  q: "A 16-year-old boy is brought to the emergency department after ingesting seeds from a wild plant (Datura stramonium) on a dare. He is agitated, disoriented, hallucinating, and complaining of blurred vision. On examination, his vitals are: HR 135 bpm, BP 140/90 mmHg, Temp 39.2°C (102.5°F). His pupils are widely dilated and non-reactive, oral mucosa is bone dry, bowel sounds are absent, and his skin is hot, flushed, and dry. What is the drug of choice to reverse the central and peripheral manifestations of this toxidrome?",
  opts: ["Neostigmine", "Pyridostigmine", "Physostigmine", "Pilocarpine"],
  ans: 2,
  exp: "Datura stramonium contains high concentrations of belladonna alkaloids (atropine, scopolamine, hyoscyamine) that competitively block muscarinic receptors, causing classic anticholinergic toxidrome ('blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone, full as a flask'). Physostigmine is a tertiary amine anticholinesterase that, unlike quaternary ammonium compounds, is lipid-soluble and readily crosses the blood-brain barrier. It inhibits acetylcholinesterase throughout the central and peripheral nervous systems, elevating endogenous acetylcholine levels to overcome muscarinic blockade, thus reversing both peripheral symptoms and central delirium/hallucinations.",
  wrongExp: "• <strong>Option A (Neostigmine):</strong> Neostigmine possesses a charged quaternary ammonium nitrogen that cannot cross the blood-brain barrier; hence, it cannot reverse the dangerous central neurotoxicity and delirium.<br>• <strong>Option B (Pyridostigmine):</strong> Pyridostigmine is also a quaternary amine used for peripheral maintenance in myasthenia gravis and does not penetrate the CNS.<br>• <strong>Option D (Pilocarpine):</strong> Pilocarpine is a direct muscarinic agonist occasionally used topically in ophthalmology, but it is ineffective and unsafe for treating systemic, central anticholinergic toxicity."
},
{
  id: 5009,
  subject: "Pharmacology",
  topic: "Autonomic Nervous System",
  chapter: "Adrenergic Antagonists: Pheochromocytoma Management",
  level: "Moderate",
  q: "A 44-year-old man with a confirmed right adrenal pheochromocytoma is scheduled for laparoscopic adrenalectomy. His blood pressure in the clinic is 185/110 mmHg with a resting heart rate of 105 bpm. Which principle of preoperative pharmacological stabilization must be strictly followed to prevent an intraoperative hypertensive crisis?",
  opts: [
    "Initiate non-selective beta-blockade with propranolol first, followed 3 days later by phenoxybenzamine",
    "Initiate non-competitive alpha-blockade with phenoxybenzamine first, followed by beta-blockers only after adequate alpha-blockade is established",
    "Administer intravenous nitroprusside alone for two weeks preoperatively without autonomic receptor blockers",
    "Initiate high-dose metoprolol monotherapy to control reflex tachycardia before addressing systemic vascular resistance"
  ],
  ans: 1,
  exp: "In the preoperative management of pheochromocytoma, alpha-adrenergic blockade must ALWAYS precede beta-adrenergic blockade (the rule of 'Alpha before Beta'). Phenoxybenzamine, an irreversible non-competitive alpha-1 and alpha-2 antagonist, is initiated 10-14 days preoperatively to normalize blood pressure and restore contracted intravascular volume. If a beta-blocker is administered first, blockade of vasodilatory beta-2 receptors in skeletal muscle vascular beds leaves massive circulating catecholamines unopposed to stimulate vascular alpha-1 receptors, precipitating catastrophic vasoconstriction and a fatal hypertensive crisis.",
  wrongExp: "• <strong>Option A (Initiate non-selective beta-blockade first...):</strong> Initiating beta-blockade before alpha-blockade triggers unopposed alpha-1-mediated vasoconstriction, which can precipitate pulmonary edema, myocardial infarction, or intracranial hemorrhage.<br>• <strong>Option C (Administer intravenous nitroprusside alone for two weeks...):</strong> Sodium nitroprusside is used intraoperatively for acute hypertensive spikes, but it is not an ambulatory oral agent for preoperative receptor preparation.<br>• <strong>Option D (Initiate high-dose metoprolol monotherapy...):</strong> Beta-1 selective blockers like metoprolol, if used alone, still leave circulating catecholamines free to stimulate vascular alpha-1 receptors, risking paradoxical hypertension."
},
{
  id: 5010,
  subject: "Pharmacology",
  topic: "Autonomic Nervous System",
  chapter: "Glaucoma Pharmacotherapy: Prostaglandin Analogues",
  level: "Easy",
  q: "A 62-year-old man with primary open-angle glaucoma is prescribed topical latanoprost eye drops once daily at bedtime. Which mechanism of action is responsible for the intraocular pressure-lowering effect of this medication?",
  opts: [
    "Decreasing aqueous humor synthesis by inhibiting carbonic anhydrase in ciliary processes",
    "Increasing aqueous humor outflow through the uveoscleral pathway",
    "Decreasing aqueous humor production via beta-2 receptor blockade in the ciliary epithelium",
    "Increasing trabecular meshwork filtration via contraction of the ciliary muscle"
  ],
  ans: 1,
  exp: "Latanoprost is a synthetic prostaglandin F2-alpha analogue prodrug that binds to FP prostanoid receptors in the ciliary muscle. Activation of these receptors upregulates matrix metalloproteinases, which remodel extracellular collagen within the ciliary muscle bundles and suprachoroidal space. This markedly increases unconventional uveoscleral outflow of aqueous humor (up to 50-60%), effectively reducing intraocular pressure. High-yield side effects include irreversible iris hyperpigmentation (increased melanogenesis), hypertrichosis (eyelash lengthening/darkening), and periorbital fat atrophy.",
  wrongExp: "• <strong>Option A (Decreasing aqueous humor synthesis by inhibiting carbonic anhydrase):</strong> This is the mechanism of topical Dorzolamide and Brinzolamide, and oral Acetazolamide.<br>• <strong>Option C (Decreasing aqueous humor production via beta-2 receptor blockade):</strong> This describes the mechanism of topical beta-blockers like Timolol and Betaxolol.<br>• <strong>Option D (Increasing trabecular meshwork filtration via contraction of the ciliary muscle):</strong> This describes direct cholinomimetics like Pilocarpine, which pull on the scleral spur to open trabecular spaces."
},
{
  id: 5011,
  subject: "Pharmacology",
  topic: "Autonomic Nervous System",
  chapter: "Sympathomimetics: Anaphylaxis Management",
  level: "Moderate",
  q: "A 12-year-old boy develops sudden facial angioedema, inspiratory stridor, diffuse urticaria, and a blood pressure of 70/40 mmHg within 5 minutes of being stung by a wasp. Intramuscular adrenaline (epinephrine) is immediately administered into the anterolateral thigh. Which pharmacological action of adrenaline best counteracts the primary life-threatening pathophysiological derangements of anaphylactic shock?",
  opts: [
    "Alpha-1 mediated vasoconstriction, Beta-1 mediated inotropy, and Beta-2 mediated bronchodilation with mast cell stabilization",
    "Selective Beta-2 mediated vasodilation of skeletal muscle beds to improve capillary refill",
    "Pure Alpha-2 agonism in the brainstem to suppress systemic sympathetic outflow",
    "Dopamine D1 receptor-mediated selective renal and splanchnic vasodilation"
  ],
  ans: 0,
  exp: "Adrenaline is the physiological antagonist of histamine and the undisputed drug of choice for anaphylaxis. It acts simultaneously on multiple adrenergic receptors: (1) Alpha-1 stimulation causes systemic arteriolar vasoconstriction, elevating blood pressure, and reduces postcapillary venular permeability, relieving mucosal edema (laryngeal edema/stridor); (2) Beta-1 stimulation increases myocardial contractility and heart rate, improving cardiac output; (3) Beta-2 stimulation produces potent bronchial smooth muscle relaxation (relieving bronchospasm) and elevates intracellular cAMP in tissue mast cells and basophils, which directly inhibits further IgE-mediated degranulation and release of histamine and leukotrienes.",
  wrongExp: "• <strong>Option B (Selective Beta-2 mediated vasodilation...):</strong> Beta-2 mediated vasodilation would worsen systemic vascular collapse and hypotension; the critical vascular effect of adrenaline in shock is alpha-1 vasoconstriction.<br>• <strong>Option C (Pure Alpha-2 agonism in the brainstem...):</strong> Alpha-2 agonism (like clonidine) lowers blood pressure and blunts sympathetic tone, which would be fatal in anaphylactic shock.<br>• <strong>Option D (Dopamine D1 receptor-mediated selective renal vasodilation):</strong> Adrenaline has negligible affinity for dopamine receptors; D1 agonism is a property of low-dose dopamine or fenoldopam."
},
{
  id: 5012,
  subject: "Pharmacology",
  topic: "Autonomic Nervous System",
  chapter: "Cholinergic System: Myasthenia Gravis & Cholinergic Crisis",
  level: "Hard",
  q: "A 34-year-old woman with generalized myasthenia gravis on high-dose pyridostigmine presents to the ICU with acute worsening of muscle weakness and respiratory distress. The physician considers performing an edrophonium (Tensilon) test to differentiate a myasthenic crisis from a cholinergic crisis. If the patient is actually experiencing a cholinergic crisis, what response will be observed, and what is the underlying molecular mechanism?",
  opts: [
    "Rapid improvement in muscle strength due to restoration of endplate potential",
    "Worsening of muscle weakness and increased fasciculations due to persistent depolarizing neuromuscular blockade",
    "No change in skeletal muscle strength, but complete resolution of miosis and bradycardia",
    "Immediate cessation of bronchial secretions due to competitive muscarinic antagonism"
  ],
  ans: 1,
  exp: "A cholinergic crisis results from excessive anticholinesterase therapy (e.g., pyridostigmine overdose), which causes massive accumulation of acetylcholine at the motor endplate. Persistent presence of acetylcholine maintains nicotinic receptor-channel opening, leading to sustained sarcolemmal depolarization. This continuous depolarization inactivates voltage-gated fast Na+ channels, producing a flaccid depolarizing neuromuscular blockade (Phase I block). If edrophonium (a rapid-acting acetylcholinesterase inhibitor) is administered, it further elevates synaptic acetylcholine, exacerbating the depolarizing block, which causes acute worsening of muscle weakness, respiratory paralysis, and fasciculations, along with exaggerated muscarinic toxidrome.",
  wrongExp: "• <strong>Option A (Rapid improvement in muscle strength...):</strong> Improvement in strength upon edrophonium administration defines a MYASTHENIC crisis (undermedication), where deficient acetylcholine is transiently boosted to stimulate remaining nicotinic receptors.<br>• <strong>Option C (No change in skeletal muscle strength, but complete resolution of miosis):</strong> Edrophonium increases acetylcholine levels, which will worsen (not resolve) muscarinic signs like miosis, bradycardia, and salivation.<br>• <strong>Option D (Immediate cessation of bronchial secretions...):</strong> Edrophonium is an acetylcholinesterase inhibitor, not a muscarinic antagonist; it increases bronchial secretions."
},
{
  id: 5013,
  subject: "Pharmacology",
  topic: "Central Nervous System",
  chapter: "Antiepileptic Drugs: Status Epilepticus",
  level: "Easy",
  q: "A 19-year-old male is brought to the emergency department actively convulsing in generalized tonic-clonic status epilepticus lasting 15 minutes. Following airway assessment and oxygenation, what is the initial first-line pharmacological treatment of choice, and what is its cellular mechanism of action?",
  opts: [
    "Intravenous Phenytoin; Voltage-gated potassium channel activation",
    "Intravenous Lorazepam; Allosteric potentiation of GABAA receptor chloride conductance",
    "Intravenous Valproate; Blockade of low-threshold T-type calcium channels",
    "Intravenous Levetiracetam; Inhibition of synaptic vesicle protein SV2A"
  ],
  ans: 1,
  exp: "The first-line therapy for terminating active convulsive status epilepticus is an intravenous benzodiazepine—specifically Lorazepam (0.1 mg/kg IV) or Diazepam (or IM Midazolam if IV access is unavailable). Benzodiazepines bind allosterically to the GABAA receptor complex at the interface of alpha and gamma subunits. This binding increases the FREQUENCY of opening of the intrinsic chloride ion channel in response to GABA, leading to chloride influx, hyperpolarization of the neuronal postsynaptic membrane, and rapid suppression of epileptogenic bursting.",
  wrongExp: "• <strong>Option A (Intravenous Phenytoin; Voltage-gated potassium channel activation):</strong> Phenytoin blocks voltage-gated Na+ channels and is used as second-line therapy after benzodiazepines, not as the immediate initial agent.<br>• <strong>Option C (Intravenous Valproate; Blockade of T-type calcium channels):</strong> Valproate is a broad-spectrum second-line agent for status epilepticus, but benzodiazepines are mandatory first-line drugs.<br>• <strong>Option D (Intravenous Levetiracetam; Inhibition of SV2A):</strong> Levetiracetam binds SV2A to inhibit glutamate exocytosis; it is an excellent second-line agent administered concurrently or immediately following benzodiazepine cessation."
},
{
  id: 5014,
  subject: "Pharmacology",
  topic: "Central Nervous System",
  chapter: "Antidepressants & Serotonin Syndrome",
  level: "Moderate",
  q: "A 32-year-old woman being treated with sertraline for major depression attends a party where she ingests an over-the-counter cough syrup containing dextromethorphan and an illicit pill containing MDMA ('Ecstasy'). Four hours later, she is brought to the hospital with agitation, autonomic instability (BP 160/100 mmHg, HR 130 bpm, Temp 39.8°C), diaphoresis, ocular clonus, hyperreflexia, and spontaneous ankle clonus. Which antidote should be administered if supportive care and benzodiazepines fail to control this condition?",
  opts: ["Dantrolene", "Bromocriptine", "Cyproheptadine", "Flumazenil"],
  ans: 2,
  exp: "This patient exhibits classic Serotonin Syndrome (Hunter Toxicity Criteria: clonus, agitation, diaphoresis, hyperreflexia, hyperthermia) precipitated by the synergistic combination of an SSRI (sertraline), a serotonin reuptake-inhibiting antitussive (dextromethorphan), and a potent serotonin releaser (MDMA). When supportive therapy (cooling, IV fluids) and GABAergic sedation with benzodiazepines are insufficient, the specific pharmacological antidote is Cyproheptadine. Cyproheptadine is a potent first-generation competitive antagonist at 5-HT2A (and 5-HT1A) serotonergic receptors, effectively halting hyperactive serotonergic neurotransmission.",
  wrongExp: "• <strong>Option A (Dantrolene):</strong> Dantrolene is a ryanodine receptor (RyR1) antagonist used primarily for Malignant Hyperthermia triggered by volatile anesthetics and succinylcholine.<br>• <strong>Option B (Bromocriptine):</strong> Bromocriptine is a dopamine D2 receptor agonist used to treat Neuroleptic Malignant Syndrome (NMS), which presents with 'lead-pipe' rigidity and hyporeflexia, not hyperreflexia and clonus.<br>• <strong>Option D (Flumazenil):</strong> Flumazenil is a competitive antagonist at the benzodiazepine binding site on GABAA receptors; it would precipitate acute withdrawal seizures here."
},
{
  id: 5015,
  subject: "Pharmacology",
  topic: "Central Nervous System",
  chapter: "Antiparkinsonian Drugs: COMT Inhibitors",
  level: "Moderate",
  q: "A 68-year-old male with Parkinson's disease treated with levodopa/carbidopa for 5 years complains that his mobility wears off 3 hours after each dose, leaving him stiff and bradykinetic ('wearing-off phenomenon'). The neurologist decides to add Entacapone to his regimen. What is the pharmacological mechanism by which entacapone improves this patient's motor fluctuations?",
  opts: [
    "Selective inhibition of central monoamine oxidase-B (MAO-B), preventing striatal dopamine degradation",
    "Selective inhibition of peripheral catechol-O-methyltransferase (COMT), reducing 3-O-methyldopa formation and prolonging levodopa half-life",
    "Direct stimulation of post-synaptic striatal dopamine D2 and D3 receptors",
    "Blockade of central N-methyl-D-aspartate (NMDA) glutamate receptors and stimulation of dopamine release"
  ],
  ans: 1,
  exp: "Carbidopa inhibits peripheral DOPA decarboxylase, which blocks the conversion of levodopa to dopamine outside the brain. However, this shunts levodopa metabolism toward the peripheral Catechol-O-Methyltransferase (COMT) pathway, generating 3-O-methyldopa (3-OMD), which competes with levodopa for transport across the blood-brain barrier via the L-type amino acid transporter (LAT1). Entacapone is a reversible, purely PERIPHERAL COMT inhibitor. By blocking peripheral levodopa methylation, entacapone decreases 3-OMD levels, increases the area under the curve (AUC) and elimination half-life of levodopa, and provides smoother, more sustained brain delivery, thereby reducing 'wearing-off' motor fluctuations.",
  wrongExp: "• <strong>Option A (Selective inhibition of central MAO-B...):</strong> This describes the mechanism of Selegiline and Rasagiline, which act inside the brain to prevent dopamine breakdown.<br>• <strong>Option C (Direct stimulation of post-synaptic striatal D2/D3 receptors):</strong> This describes non-ergot dopamine agonists like Pramipexole and Ropinirole.<br>• <strong>Option D (Blockade of central NMDA receptors and stimulation of dopamine release):</strong> This describes the mechanism of Amantadine, an antiviral drug with antiparkinsonian efficacy."
},
{
  id: 5016,
  subject: "Pharmacology",
  topic: "Central Nervous System",
  chapter: "Mood Stabilizers: Lithium Toxicity & Interactions",
  level: "Moderate",
  q: "A 42-year-old woman with bipolar I disorder maintained stably on lithium carbonate develops hypertension and is started on a new medication by her primary care physician. Three weeks later, she presents to the clinic with severe coarse hand tremors, ataxia, slurred speech, confusion, and polyuria. Her serum lithium level is 2.4 mEq/L (therapeutic range: 0.6–1.2 mEq/L). Which newly prescribed antihypertensive medication is most likely responsible for this drug toxicity?",
  opts: ["Hydrochlorothiazide", "Amlodipine", "Propranolol", "Doxazosin"],
  ans: 0,
  exp: "Lithium is a monovalent cation that is freely filtered at the glomerulus and handled by the renal tubules identically to sodium; approximately 80% of filtered lithium is reabsorbed in the proximal convoluted tubule (PCT). Thiazide diuretics (e.g., Hydrochlorothiazide) inhibit the Na+/Cl- cotransporter in the distal convoluted tubule, causing natriuresis and mild intravascular volume depletion. In response to hypovolemia, the proximal tubule compensatorily upregulates Na+ (and water) reabsorption via the Na+/H+ exchanger. Because the PCT cannot distinguish lithium from sodium, lithium reabsorption is markedly increased, resulting in decreased lithium clearance, progressive accumulation, and severe lithium neurotoxicity.",
  wrongExp: "• <strong>Option B (Amlodipine):</strong> Dihydropyridine calcium channel blockers do not significantly alter renal tubular sodium handling or lithium excretion.<br>• <strong>Option C (Propranolol):</strong> Beta-blockers are sometimes used to treat benign physiological lithium tremors and do not impair renal lithium clearance.<br>• <strong>Option D (Doxazosin):</strong> Alpha-1 adrenergic blockers produce peripheral vasodilation without altering proximal tubular sodium reabsorption or lithium levels."
},
{
  id: 5017,
  subject: "Pharmacology",
  topic: "Central Nervous System",
  chapter: "Opioid Analgesics: Toxicity & Reversal",
  level: "Easy",
  q: "A 22-year-old male is found unresponsive in an alleyway with shallow respirations at 5 breaths/min, pinpoint pupils (1 mm miosis), cyanotic lips, and cold extremities. An intravenous dose of Naloxone is administered, resulting in immediate gasping, spontaneous respiration, pupil dilation, and aggressive arousal. What is the precise pharmacological mechanism of action of Naloxone?",
  opts: [
    "Competitive antagonist at mu, kappa, and delta opioid receptors with highest affinity for mu receptors",
    "Partial agonist at mu receptors with intrinsic sympathomimetic activity",
    "Direct chemical neutralizer that binds circulating opioid molecules in plasma",
    "GABAA receptor negative allosteric modulator that stimulates the medullary respiratory center"
  ],
  ans: 0,
  exp: "Naloxone is a pure, competitive antagonist at all three classic opioid receptor subtypes (mu, kappa, and delta), with its highest binding affinity directed against the mu-opioid receptor. Mu receptors are Gi/Go-protein coupled receptors located in the brainstem respiratory centers (pre-Bötzinger complex); their activation by agonists like morphine or fentanyl inhibits adenylyl cyclase, closes Cav channels, and opens GIRK potassium channels, causing profound respiratory depression. Naloxone rapidly displaces opioid agonists from mu receptors, completely reversing respiratory depression, coma, and miosis within 1–2 minutes of intravenous administration.",
  wrongExp: "• <strong>Option B (Partial agonist at mu receptors...):</strong> Buprenorphine is a partial mu-opioid agonist; naloxone has zero intrinsic efficacy (it is a pure antagonist).<br>• <strong>Option C (Direct chemical neutralizer that binds opioid molecules in plasma):</strong> This describes a chelating agent or Fab fragment mechanism (like Digibind or Sugammadex), not naloxone.<br>• <strong>Option D (GABAA receptor negative allosteric modulator...):</strong> Naloxone has no activity at GABAA receptors; medullary stimulation occurs because opioid receptor-mediated inhibition is lifted."
},
{
  id: 5018,
  subject: "Pharmacology",
  topic: "Central Nervous System",
  chapter: "Atypical Antipsychotics: Clozapine Toxicity",
  level: "Hard",
  q: "A 36-year-old man with treatment-resistant schizophrenia has achieved remarkable remission of auditory hallucinations and delusions on Clozapine. However, mandatory weekly complete blood count (CBC) monitoring is enforced. Which dangerous adverse effect dictates this strict monitoring protocol, and what threshold warrants permanent discontinuation of the drug?",
  opts: [
    "Agranulocytosis; Absolute Neutrophil Count (ANC) dropping below 1000/mm³",
    "Aplastic anemia; Platelet count dropping below 100,000/mm³",
    "Acute hemolytic anemia; Reticulocyte count dropping below 0.2%",
    "Eosinophilia-myalgia syndrome; Eosinophil count exceeding 1500/mm³"
  ],
  ans: 0,
  exp: "Clozapine is the gold standard for treatment-resistant schizophrenia and the only antipsychotic proven to reduce suicide risk. However, its clinical use is restricted by a 1-2% risk of idiosyncratic, life-threatening Agranulocytosis (mediated by toxic nitrenium ion metabolites inducing immune-mediated neutrophil apoptosis). Absolute Neutrophil Count (ANC) must be monitored weekly for the first 6 months, biweekly for the next 6 months, and monthly thereafter. Under standard haematological protocols, if the ANC falls below 1000/mm³ (or <500/mm³ in severe neutropenia), clozapine must be immediately and permanently discontinued, and the patient must never be rechallenged.",
  wrongExp: "• <strong>Option B (Aplastic anemia; Platelet count dropping below 100,000/mm³):</strong> While clozapine can cause marrow suppression, the selective destruction involves granulocyte/neutrophil lineages (agranulocytosis), not pure isolated thrombocytopenia.<br>• <strong>Option C (Acute hemolytic anemia...):</strong> Clozapine does not cause Coombs-positive or microangiopathic hemolytic anemia.<br>• <strong>Option D (Eosinophilia-myalgia syndrome...):</strong> Eosinophilia can occasionally occur during clozapine initiation, but agranulocytosis (severe neutropenia) is the fatal risk mandating national registry monitoring."
},
{
  id: 5019,
  subject: "Pharmacology",
  topic: "Cardiovascular Drugs",
  chapter: "Heart Failure: Sacubitril/Valsartan (ARNI)",
  level: "Moderate",
  q: "A 62-year-old male with Heart Failure with reduced Ejection Fraction (HFrEF; LVEF 28%, NYHA Class III) is switched from enalapril to Sacubitril/Valsartan. The cardiologist mandates a strict 36-hour washout period between the last dose of enalapril and the first dose of sacubitril/valsartan. What is the critical pharmacological rationale for this mandatory washout period?",
  opts: [
    "Preventing severe hyperkalemia due to additive aldosterone receptor inhibition",
    "Preventing life-threatening angioedema caused by dual inhibition of bradykinin degradation",
    "Allowing restoration of renal neutral endopeptidase enzymes to prevent acute tubular necrosis",
    "Preventing acute profound refractory hypotension from synergistic cGMP synthesis"
  ],
  ans: 1,
  exp: "Sacubitril is a prodrug that is metabolized to LBQ657, an inhibitor of Neprilysin (neutral endopeptidase). Neprilysin degrades beneficial vasoactive peptides including Natriuretic Peptides (ANP, BNP), Bradykinin, and Adrenomedullin. Angiotensin-Converting Enzyme (ACE, kininase II) is also the primary enzyme responsible for the metabolic breakdown of Bradykinin. If an ACE inhibitor (like enalapril) and a neprilysin inhibitor (sacubitril) are administered concurrently without a 36-hour washout period, dual inhibition of bradykinin breakdown leads to massive bradykinin accumulation, triggering fatal angioedema. Because Angiotensin Receptor Blockers (ARBs like valsartan) do not inhibit bradykinin breakdown, valsartan is safely combined with sacubitril.",
  wrongExp: "• <strong>Option A (Preventing severe hyperkalemia...):</strong> While both drugs conserve potassium, hyperkalemia can be monitored and managed; it is not the reason for the strict 36-hour washout rule.<br>• <strong>Option C (Allowing restoration of renal neutral endopeptidase...):</strong> Neprilysin inhibition is the deliberate therapeutic goal to enhance natriuresis, not a toxic process causing acute tubular necrosis.<br>• <strong>Option D (Preventing acute profound hypotension...):</strong> While blood pressure must be monitored, hypotension does not necessitate a 36-hour clearance window; the risk of fatal asphyxiation from angioedema is the sole driver."
},
{
  id: 5020,
  subject: "Pharmacology",
  topic: "Cardiovascular Drugs",
  chapter: "Antiarrhythmic Drugs: Amiodarone Organ Toxicities",
  level: "Moderate",
  q: "A 66-year-old male with a history of recurrent ventricular tachycardia treated with chronic Amiodarone therapy presents with progressive exertional dyspnea, dry cough, and low-grade fever. High-resolution chest CT shows patchy bilateral interstitial infiltrates and ground-glass opacities. Pulmonary function tests reveal a restrictive pattern with markedly reduced Diffusing Capacity of the Lung for Carbon Monoxide (DLCO). Which mechanism explains amiodarone's organ toxicity, and what monitoring is essential?",
  opts: [
    "Direct cytotoxic phospholipidosis and free radical-mediated pulmonary fibrosis; Baseline and serial DLCO/Chest X-ray",
    "Immunoglobulin E-mediated type I hypersensitivity in terminal bronchioles; Serial skin prick testing",
    "Antineutrophil cytoplasmic antibody (ANCA)-associated alveolar hemorrhage; Renal biopsy",
    "Selective accumulation of toxic iodine crystals within alveolar macrophages; Serum iodine levels"
  ],
  ans: 0,
  exp: "Amiodarone is a Vaughan Williams Class III antiarrhythmic with multi-channel blocking properties (K+, Na+, Ca2+, and beta-receptors). It contains 37% iodine by weight and is extremely lipophilic, accumulating in adipose tissue and organs with an enormous volume of distribution (~60 L/kg) and an elimination half-life of ~58 days. Chronic accumulation causes accumulation of undigested phospholipid-drug complexes within lysosomes (phospholipidosis) and generates toxic reactive oxygen species. Pulmonary toxicity—ranging from chronic interstitial pneumonitis to fatal organizing pulmonary fibrosis—develops in 5-10% of patients. Diagnostic monitoring requires baseline and annual Chest X-rays and DLCO testing.",
  wrongExp: "• <strong>Option B (IgE-mediated type I hypersensitivity...):</strong> Amiodarone pulmonary toxicity is a chronic, dose-dependent, cumulative tissue-storage toxicopathy, not an acute IgE allergic reaction.<br>• <strong>Option C (ANCA-associated alveolar hemorrhage):</strong> While hydralazine and propylthiouracil cause ANCA vasculitis, amiodarone causes non-hemorrhagic fibrosing interstitial pneumonitis.<br>• <strong>Option D (Selective accumulation of toxic iodine crystals...):</strong> The toxicity is mediated by phospholipidosis and free radicals from the parent lipophilic molecule, not physical crystallization of iodine."
},
{
  id: 5021,
  subject: "Pharmacology",
  topic: "Cardiovascular Drugs",
  chapter: "Cardiac Glycosides: Digoxin Mechanism & Toxicity",
  level: "Easy",
  q: "A 74-year-old female with chronic atrial fibrillation and heart failure presents with nausea, vomiting, yellow-green tinted halos around lights (xanthopsia), and extreme fatigue. Her ECG shows frequent ventricular bigeminy and a 'scooped-out' ST-segment depression. Serum potassium is 5.8 mEq/L, and serum digoxin is 3.8 ng/mL (therapeutic: 0.5–0.9 ng/mL). What is the cellular target of digoxin, and what is the definitive antidote for this life-threatening intoxication?",
  opts: [
    "Sarcoplasmic reticulum Ca2+-ATPase (SERCA2a); Intravenous Calcium gluconate",
    "Sarcolemmal Na+/K+-ATPase; Digoxin-specific Fab antibody fragments (DigiFab)",
    "L-type voltage-gated calcium channels; Intravenous Verapamil",
    "Mitochondrial sodium-calcium exchanger (NCX); Hemodialysis"
  ],
  ans: 1,
  exp: "Digoxin reversibly binds and inhibits the extracellular alpha subunit of the sarcolemmal Na+/K+-ATPase in cardiac myocytes. This raises intracellular [Na+], which blunts the forward driving force of the Na+/Ca2+ exchanger (NCX), leading to secondary accumulation of intracellular [Ca2+]. This elevated cytosolic calcium increases sarcoplasmic reticulum Ca2+ loading, enhancing inotropy. However, toxic concentrations cause intracellular calcium overload, triggering delayed afterdepolarizations (DADs) and ventricular arrhythmias (bigeminy, VT). Hyperkalemia occurs because systemic Na+/K+-ATPases are blocked. The definitive, life-saving antidote is Digoxin-specific Fab antibody fragments (DigiFab/Digibind), which bind free intravascular digoxin with high affinity.",
  wrongExp: "• <strong>Option A (SERCA2a; Intravenous Calcium gluconate):</strong> Digoxin does not target SERCA2a; giving IV calcium in digoxin toxicity is historically avoided ('stone heart') as it worsens cytosolic calcium overload.<br>• <strong>Option C (L-type calcium channels; Verapamil):</strong> Verapamil displaces digoxin from tissue binding sites and decreases renal clearance, worsening toxicity; it does not treat it.<br>• <strong>Option D (Mitochondrial NCX; Hemodialysis):</strong> Digoxin has an enormous volume of distribution (Vd ~500 L) and is predominantly bound in skeletal muscle; hence, it is NOT dialyzable."
},
{
  id: 5022,
  subject: "Pharmacology",
  topic: "Cardiovascular Drugs",
  chapter: "Hypertensive Emergencies: Acute Aortic Dissection",
  level: "Hard",
  q: "A 58-year-old male presents to the resuscitation bay with severe tearing chest pain radiating to his back. CT angiography confirms a Stanford Type A acute aortic dissection. His BP is 210/120 mmHg and heart rate is 102 bpm. Which pharmacological strategy represents the mandatory first-line intervention, and which class of antihypertensives is strictly contraindicated as monotherapy?",
  opts: [
    "Initiate intravenous Hydralazine immediately; Beta-blockers are contraindicated due to risk of coronary hypoperfusion",
    "Initiate intravenous Esmolol or Labetalol to lower HR below 60 bpm before/concomitant with BP reduction; Vasodilators like Hydralazine/Nitroprusside are contraindicated as monotherapy",
    "Administer intravenous Furosemide to rapidly decrease preload; ACE inhibitors are contraindicated",
    "Initiate Sublingual Nifedipine alone; Beta-blockers are contraindicated due to bronchospasm"
  ],
  ans: 1,
  exp: "In acute aortic dissection, the primary therapeutic goal is to reduce aortic shear stress (rate of change of aortic pressure rise, dP/dt) to prevent propagation and rupture. This requires lowering the heart rate (target HR < 60 bpm) and lowering systolic BP (target SBP 100-120 mmHg). Intravenous beta-blockers (e.g., Esmolol, Labetalol) must be initiated FIRST. Direct arteriolar vasodilators (such as Hydralazine, Sodium Nitroprusside, or Dihydropyridines) are STRICTLY CONTRAINDICATED as monotherapy because they elicit reflex sympathetic activation, increasing heart rate and inotropy, which increases dP/dt and propagates the dissection tear.",
  wrongExp: "• <strong>Option A (Initiate IV Hydralazine immediately...):</strong> Hydralazine monotherapy produces vigorous reflex tachycardia and increases dP/dt, which accelerates aortic tear propagation and rupture.<br>• <strong>Option C (Administer IV Furosemide...):</strong> Furosemide does not lower dP/dt or control the acute hyperdynamic state; beta-blockers are the definitive first-line class.<br>• <strong>Option D (Sublingual Nifedipine alone...):</strong> Sublingual nifedipine causes uncontrolled precipitous drops in blood pressure with severe reflex tachycardia, worsening aortic wall shear stress."
},
{
  id: 5023,
  subject: "Pharmacology",
  topic: "Cardiovascular Drugs",
  chapter: "Lipid-Lowering Drugs: Statins & Statin-Induced Myopathy",
  level: "Moderate",
  q: "A 55-year-old male with familial hypercholesterolemia on high-dose Atorvastatin (80 mg daily) is prescribed Gemfibrozil for persistent hypertriglyceridemia. Two weeks later, he presents with severe diffuse muscle aches, proximal weakness, and dark tea-colored urine. Serum creatine kinase (CK) is 25,000 U/L (normal < 200 U/L). What is the primary pharmacokinetic mechanism underlying this severe drug interaction?",
  opts: [
    "Gemfibrozil induces CYP3A4, generating toxic atorvastatin epoxide metabolites",
    "Gemfibrozil inhibits hepatic uptake of statins via OATP1B1 and inhibits statin glucuronidation via UGT1A1/1A3",
    "Gemfibrozil directly displaces atorvastatin from skeletal muscle myoglobin receptors",
    "Gemfibrozil promotes renal tubular reabsorption of atorvastatin, preventing its urinary elimination"
  ],
  ans: 1,
  exp: "Statin-induced myopathy and rhabdomyolysis are markedly exacerbated when statins are co-administered with Gemfibrozil. Gemfibrozil is a potent inhibitor of the hepatic organic anion transporting polypeptide 1B1 (OATP1B1, encoded by SLCO1B1), which mediates the uptake of statins from the portal blood into hepatocytes. Additionally, gemfibrozil glucuronide strongly inhibits the major phase II clearance pathway of statin acids: UDP-glucuronosyltransferases UGT1A1 and UGT1A3. This dual inhibition dramatically increases systemic plasma concentrations of active statin acid, precipitating muscle toxicity. If a fibrate must be combined with a statin, Fenofibrate is preferred because it does not significantly inhibit OATP1B1 or statin glucuronidation.",
  wrongExp: "• <strong>Option A (Gemfibrozil induces CYP3A4...):</strong> Gemfibrozil does not induce CYP3A4; it is a metabolic inhibitor, and toxicity is driven by the parent drug's elevated systemic levels rather than an epoxide metabolite.<br>• <strong>Option C (Gemfibrozil directly displaces atorvastatin from myoglobin receptors):</strong> Statins cause myopathy by depleting intramuscular mevalonate downstream products (ubiquinone/CoQ10 and prenylated proteins), not by binding myoglobin.<br>• <strong>Option D (Gemfibrozil promotes renal tubular reabsorption...):</strong> Atorvastatin is cleared predominantly via hepatic metabolism and biliary excretion, with minimal renal elimination."
},
{
  id: 5024,
  subject: "Pharmacology",
  topic: "Cardiovascular Drugs",
  chapter: "Antianginal Drugs: Vasospastic (Prinzmetal) Angina",
  level: "Hard",
  q: "A 42-year-old woman presents with episodes of severe crushing retrosternal chest pain that characteristically wake her from sleep at 4:00 AM. Coronary angiography reveals normal coronary arteries with zero atherosclerotic stenosis. Ergonovine provocation testing precipitates focal spasm of the left anterior descending artery accompanied by transient ST-segment elevation. Which class of cardiovascular drugs is strictly CONTRAINDICATED in this patient, and which drug class is the first-line maintenance therapy?",
  opts: [
    "Non-selective Beta-blockers (e.g., Propranolol) are contraindicated; Calcium Channel Blockers are first-line",
    "Calcium Channel Blockers (e.g., Diltiazem) are contraindicated; Beta-blockers are first-line",
    "Long-acting Nitrates are contraindicated; Potassium channel openers are first-line",
    "Statins are contraindicated; Aspirin monotherapy is first-line"
  ],
  ans: 0,
  exp: "This patient has Vasospastic (Prinzmetal/variant) Angina, caused by episodic hyperreactivity of coronary vascular smooth muscle. Non-selective beta-blockers (like Propranolol) are STRICTLY CONTRAINDICATED. Beta-blockade abolishes vasodilatory beta-2 adrenergic receptors on epicardial coronary vessels, leaving sympathetic alpha-1 adrenergic receptors unopposed to mediate intense, paradoxical vasoconstriction, which can trigger refractory coronary spasm and myocardial infarction. The first-line maintenance therapies of choice are Calcium Channel Blockers (e.g., Diltiazem, Amlodipine) and Long-acting Nitrates, which promote coronary vasodilation.",
  wrongExp: "• <strong>Option B (Calcium Channel Blockers are contraindicated; Beta-blockers are first-line):</strong> This is the exact inverse of clinical guidelines; CCBs are the cornerstone of therapy for vasospastic angina, whereas beta-blockers exacerbate it.<br>• <strong>Option C (Long-acting Nitrates are contraindicated...):</strong> Nitrates donate nitric oxide, activating soluble guanylyl cyclase to relax coronary spasms, and are highly indicated.<br>• <strong>Option D (Statins are contraindicated; Aspirin monotherapy is first-line):</strong> Statins improve endothelial function; high-dose aspirin can inhibit prostacyclin synthesis and worsen vasospasm."
},
{
  id: 5025,
  subject: "Pharmacology",
  topic: "Renal & Diuretics",
  chapter: "Diuretics: Calcium Handling (Loop vs Thiazide)",
  level: "Easy",
  q: "A 56-year-old male with chronic recurrent calcium oxalate kidney stones (nephrolithiasis) and mild hypertension is evaluated for pharmacological therapy to reduce urinary calcium excretion. Simultaneously, an adjacent patient in the ward has severe acute hypercalcemia of malignancy requiring forced diuresis. Which classes of diuretics are indicated for hypercalciuria with stones and acute hypercalcemic crisis, respectively?",
  opts: [
    "Loop diuretics for recurrent stones; Thiazide diuretics for hypercalcemic crisis",
    "Thiazide diuretics for recurrent stones; Loop diuretics for hypercalcemic crisis",
    "Potassium-sparing diuretics for recurrent stones; Carbonic anhydrase inhibitors for hypercalcemic crisis",
    "Osmotic diuretics for recurrent stones; Thiazide diuretics for hypercalcemic crisis"
  ],
  ans: 1,
  exp: "Thiazides and Loop diuretics have opposing effects on renal calcium excretion ('Loops Lose Calcium, Thiazides Take it In'): (1) Thiazide diuretics (e.g., Chlorthalidone) inhibit apical Na+/Cl- cotransporters in the DCT, lowering intracellular Na+, which hyper-activates the basolateral Na+/Ca2+ exchanger (NCX) to increase transcellular calcium reabsorption into blood. By lowering urinary calcium (hypocalciuria), thiazides prevent calcium stone recurrence. (2) Loop diuretics (e.g., Furosemide) inhibit the luminal NKCC2 cotransporter in the thick ascending limb, abolishing the lumen-positive transepithelial potential difference (+8 to +10 mV) that normally drives paracellular reabsorption of Ca2+ and Mg2+. This promotes rapid calciuresis, making loop diuretics (with IV saline) ideal for acute hypercalcemia.",
  wrongExp: "• <strong>Option A (Loop diuretics for recurrent stones; Thiazides for hypercalcemia):</strong> Loop diuretics increase urinary calcium excretion and would dramatically worsen nephrolithiasis; thiazides elevate serum calcium and would worsen hypercalcemic crisis.<br>• <strong>Option C (Potassium-sparing diuretics...):</strong> Amiloride or spironolactone do not have the potent hypocalciuric efficacy of thiazides, and acetazolamide does not promote rapid calciuresis.<br>• <strong>Option D (Osmotic diuretics...):</strong> Mannitol does not selectively enhance calcium excretion compared to loop diuretics."
},
{
  id: 5026,
  subject: "Pharmacology",
  topic: "Renal & Diuretics",
  chapter: "Diuretics: Carbonic Anhydrase Inhibitors",
  level: "Moderate",
  q: "A 26-year-old trekker plans an expedition to the Himalayas. His physician prescribes Acetazolamide to be initiated 24 hours prior to rapid ascent above 2,800 meters for prophylaxis against Acute Mountain Sickness (AMS). What is the physiological mechanism by which acetazolamide prevents and alleviates symptoms of high-altitude sickness?",
  opts: [
    "Direct stimulation of medullary peripheral chemoreceptors to induce hyperventilation",
    "Inhibition of proximal tubular carbonic anhydrase, causing mild metabolic acidosis that stimulates central respiratory drive",
    "Selective dilation of cerebral arterioles, improving neuronal oxygen delivery",
    "Inhibition of pulmonary surfactant breakdown, improving alveolar diffusion capacity"
  ],
  ans: 1,
  exp: "At high altitude, hypobaric hypoxia triggers hyperventilation via peripheral carotid chemoreceptors. This causes excessive exhalation of CO2, resulting in respiratory alkalosis, which acts as a brake on the central medullary chemoreceptors, suppressing ventilation and worsening nighttime hypoxemia. Acetazolamide inhibits carbonic anhydrase (CA II and CA IV) in the proximal convoluted tubule, blocking HCO3- reabsorption and causing bicarbonaturia. The resulting mild hyperchloremic metabolic acidosis lowers systemic and cerebrospinal fluid pH, which eliminates the alkalotic brake and directly stimulates central chemoreceptors to sustain hyperventilation, accelerating acclimatization and improving arterial oxygenation.",
  wrongExp: "• <strong>Option A (Direct stimulation of medullary peripheral chemoreceptors...):</strong> Carotid and aortic bodies are peripheral (not medullary) chemoreceptors and respond to PaO2; acetazolamide acts renally, not directly on these glomus cells.<br>• <strong>Option C (Selective dilation of cerebral arterioles...):</strong> Cerebral vasodilation is already driven by hypoxia and contributes to high-altitude headache; acetazolamide does not act as a primary cerebral vasodilator.<br>• <strong>Option D (Inhibition of pulmonary surfactant breakdown...):</strong> Acetazolamide has no regulatory effect on surfactant metabolism."
},
{
  id: 5027,
  subject: "Pharmacology",
  topic: "Renal & Diuretics",
  chapter: "Diuretics: Aldosterone Antagonists in Cirrhosis",
  level: "Moderate",
  q: "A 54-year-old male with decompensated alcoholic cirrhosis presents with massive ascites and bilateral pedal edema. Serum sodium is 132 mEq/L, potassium is 3.6 mEq/L, and creatinine is 0.9 mg/dL. Spironolactone is chosen as the foundational diuretic. What is the specific cellular mechanism of Spironolactone, and why is it preferred over loop diuretics as initial monotherapy in cirrhotic ascites?",
  opts: [
    "Competitive antagonism of mineralocorticoid receptors in late distal tubule/collecting duct; directly counteracts secondary hyperaldosteronism",
    "Direct blockade of apical Epithelial Sodium Channels (ENaC); prevents potassium excretion independent of aldosterone",
    "Inhibition of the Na+/K+/2Cl- cotransporter; induces rapid volume unloading without activating the renin-angiotensin axis",
    "Selective agonist at vascular V2 vasopressin receptors; promotes free water excretion without electrolyte loss"
  ],
  ans: 0,
  exp: "In decompensated cirrhosis, splanchnic arterial vasodilation decreases effective arterial blood volume, triggering massive activation of the Renin-Angiotensin-Aldosterone System (secondary hyperaldosteronism). High circulating aldosterone stimulates mineralocorticoid receptors in the principal cells of the cortical collecting duct, transcribing and upregulating basolateral Na+/K+-ATPases and apical ENaC/ROMK channels, causing intense sodium retention. Spironolactone is a competitive intracellular mineralocorticoid receptor antagonist that directly blocks this mechanism. It is preferred in cirrhosis because loop diuretics alone are ineffective (distal nephron reabsorbs all escaped sodium) and can precipitate fatal hypokalemic metabolic alkalosis and hepatic encephalopathy.",
  wrongExp: "• <strong>Option B (Direct blockade of apical ENaC...):</strong> This describes the mechanism of Amiloride and Triamterene, which are direct ENaC channel blockers, not mineralocorticoid receptor antagonists.<br>• <strong>Option C (Inhibition of NKCC2 cotransporter...):</strong> This describes loop diuretics (furosemide), which exacerbate hyperaldosteronism and cause severe potassium depletion if used without spironolactone.<br>• <strong>Option D (Selective agonist at V2 receptors...):</strong> V2 agonists (like desmopressin) retain water; vaptans are V2 antagonists."
},
{
  id: 5028,
  subject: "Pharmacology",
  topic: "Renal & Diuretics",
  chapter: "Diuretics: Osmotic Diuretics (Mannitol)",
  level: "Hard",
  q: "A 48-year-old male with severe traumatic brain injury develops an acute spike in intracranial pressure (ICP) to 32 mmHg. The neurointensivist orders intravenous Mannitol 20% infusion. However, the patient's past history reveals severe congestive heart failure with an ejection fraction of 25%. Why is rapid intravenous administration of hypertonic mannitol dangerous and potentially fatal in a patient with decompensated heart failure?",
  opts: [
    "Mannitol causes profound coronary artery vasospasm via endothelin release",
    "Mannitol initially expands intravascular volume by extracting water from the intracellular space, precipitating acute pulmonary edema",
    "Mannitol undergoes hepatic metabolism to sorbitol, causing immediate myocardial ATP depletion",
    "Mannitol blocks myocardial beta-1 adrenergic receptors, triggering acute asystole"
  ],
  ans: 1,
  exp: "Mannitol is a low-molecular-weight, pharmacologically inert hexahydric alcohol that remains confined to the extracellular fluid compartment and does not cross the intact blood-brain barrier. When administered as a concentrated hypertonic IV solution, its initial effect BEFORE renal filtration is to create a steep intravascular osmotic gradient that draws water out of parenchymal cells and the interstitium into the systemic circulation. In patients with normal cardiac function, this volume is rapidly eliminated by osmotic diuresis. However, in patients with severe congestive heart failure, this sudden, dramatic expansion of intravascular volume increases cardiac preload beyond the heart's pumping capacity, precipitating acute pulmonary edema.",
  wrongExp: "• <strong>Option A (Mannitol causes profound coronary vasospasm...):</strong> Mannitol does not stimulate endothelin release or induce coronary vasospasm.<br>• <strong>Option C (Mannitol undergoes hepatic metabolism to sorbitol...):</strong> Mannitol is not significantly metabolized in humans; it is excreted unchanged by glomerular filtration.<br>• <strong>Option D (Mannitol blocks myocardial beta-1 receptors...):</strong> Mannitol is an osmotic agent with zero affinity for adrenergic receptors."
},
{
  id: 5029,
  subject: "Pharmacology",
  topic: "Renal & Diuretics",
  chapter: "Diuretics & Antidiabetics: SGLT2 Inhibitors",
  level: "Moderate",
  q: "A 58-year-old male with type 2 diabetes and chronic kidney disease (eGFR 48 mL/min/1.73m², urine albumin-to-creatinine ratio 350 mg/g) is prescribed Dapagliflozin. Beyond glycemic control, this drug slows the progression of diabetic nephropathy. What hemodynamic mechanism at the single-nephron level is responsible for the renal protective effects of SGLT2 inhibitors?",
  opts: [
    "Dilating the efferent arteriole via selective inhibition of Angiotensin II type 1 receptors",
    "Increasing distal NaCl delivery to the macula densa, restoring tubuloglomerular feedback and inducing afferent arteriolar constriction",
    "Directly dilating the afferent arteriole through local stimulation of prostaglandin synthesis",
    "Inhibiting mesangial cell apoptosis by blocking calcium influx through L-type channels"
  ],
  ans: 1,
  exp: "In early diabetes, proximal tubular reabsorption of glucose and sodium via upregulated SGLT2 is abnormally elevated. Consequently, delivery of NaCl to the downstream macula densa is reduced. The macula densa senses this as hypoperfusion and blunts tubuloglomerular feedback (TGF), causing inappropriate afferent arteriolar vasodilation, which drives glomerular hyperfiltration and progressive glomerulosclerosis. SGLT2 inhibitors (e.g., Dapagliflozin, Empagliflozin) block proximal glucose and Na+ uptake, restoring NaCl delivery to the macula densa. This reactivates TGF, releasing adenosine to constrict the dilated afferent arteriole, thereby reducing intraglomerular hypertension and preserving renal architecture long-term.",
  wrongExp: "• <strong>Option A (Dilating the efferent arteriole via AT1 blockade...):</strong> Efferent arteriolar dilation is the mechanism of ACE inhibitors and ARBs, not SGLT2 inhibitors.<br>• <strong>Option C (Directly dilating the afferent arteriole...):</strong> Afferent arteriolar dilation increases intraglomerular pressure and worsens diabetic glomerulosclerosis; SGLT2 inhibitors reverse this by CONSTRICTING the afferent arteriole.<br>• <strong>Option D (Inhibiting mesangial cell apoptosis...):</strong> SGLT2 inhibitors act primarily on transport physiology in the early proximal tubule (S1/S2 segments), not directly on mesangial L-type calcium channels."
},
{
  id: 5030,
  subject: "Pharmacology",
  topic: "Blood & Inflammation",
  chapter: "Anticoagulants: Heparin-Induced Thrombocytopenia (HIT)",
  level: "Moderate",
  q: "A 62-year-old female receiving unfractionated heparin following orthopedic surgery exhibits a 55% drop in platelet count on postoperative day 7 (from 240,000/mm³ to 105,000/mm³), accompanied by acute pain and swelling of the left calf confirmed as a deep vein thrombosis. Heparin-Induced Thrombocytopenia (HIT Type II) is diagnosed. What is the immediate management strategy, and which anticoagulant should be initiated?",
  opts: [
    "Switch immediately to Low-Molecular-Weight Heparin (Enoxaparin)",
    "Discontinue all heparin products immediately and initiate a Direct Thrombin Inhibitor such as Argatroban",
    "Stop heparin and immediately initiate full-dose Warfarin monotherapy",
    "Administer intravenous platelet transfusions followed by high-dose Aspirin"
  ],
  ans: 1,
  exp: "HIT Type II is an immune-mediated prothrombotic emergency caused by IgG antibodies directed against complexes of Platelet Factor 4 (PF4) and Heparin. The Fc portions of these antibodies cross-link Fc-gamma-RIIa receptors on platelets, triggering widespread platelet activation, consumption (thrombocytopenia), and paradoxical arterial/venous thrombosis. Immediate management requires complete cessation of all heparin products (including flushes). Low-molecular-weight heparins exhibit >90% cross-reactivity with HIT antibodies and are strictly contraindicated. The drug of choice is a parenteral direct thrombin inhibitor (DTI) that does not cross-react with HIT antibodies, such as Argatroban (hepatically cleared) or Bivalirudin.",
  wrongExp: "• <strong>Option A (Switch immediately to Low-Molecular-Weight Heparin):</strong> LMWHs cross-react strongly with PF4-heparin antibodies and will exacerbate platelet activation and thrombosis.<br>• <strong>Option C (Stop heparin and initiate full-dose Warfarin monotherapy):</strong> Warfarin is strictly CONTRAINDICATED in acute HIT; it rapidly depletes Protein C while procoagulant factors persist, precipitating microvascular thrombosis and warfarin-induced skin necrosis.<br>• <strong>Option D (Administer IV platelet transfusions...):</strong> Platelet transfusions are contraindicated in HIT as they provide additional substrate for antibody-mediated activation, 'adding fuel to the fire'."
},
{
  id: 5031,
  subject: "Pharmacology",
  topic: "Blood & Inflammation",
  chapter: "Anticoagulants: Warfarin-Induced Skin Necrosis",
  level: "Hard",
  q: "A 48-year-old woman with deep vein thrombosis is initiated on Warfarin at a high loading dose of 15 mg daily without concurrent parenteral anticoagulation. On day 3, she develops painful, well-demarcated, purple-black necrotic purpuric lesions over her breasts, thighs, and buttocks. What transient thrombogenic imbalance in the vitamin K-dependent coagulation pathway explains this devastating complication?",
  opts: [
    "Rapid clearance of antithrombin III before prothrombin levels decline",
    "Rapid decline in short-lived Protein C and Protein S levels while longer-lived Factors II, IX, and X remain active",
    "Massive accumulation of uncarboxylated Factor VII acting as a direct platelet activator",
    "Direct toxic vasculitis of dermal capillaries caused by high-dose warfarin metabolites"
  ],
  ans: 1,
  exp: "Warfarin inhibits Vitamin K Epoxide Reductase (VKORC1), blocking the regeneration of reduced vitamin K required for the gamma-glutamyl carboxylation of clotting factors II, VII, IX, X, and endogenous anticoagulant proteins C and S. Protein C has a very short half-life (~6 to 8 hours), comparable to Factor VII (~6 hours), whereas prothrombin (Factor II) has a long half-life (~60 to 72 hours) and Factor X lasts ~30 to 40 hours. When high doses of warfarin are given without heparin bridging, circulating Protein C is depleted rapidly, eliminating its anticoagulant function (inactivation of Factors Va and VIIIa) while procoagulant Factor II remains fully active. This creates a temporary hypercoagulable state that causes microvascular thrombosis, tissue infarction, and skin necrosis.",
  wrongExp: "• <strong>Option A (Rapid clearance of antithrombin III...):</strong> Antithrombin III is not a vitamin K-dependent protein; its synthesis and half-life are unaffected by warfarin.<br>• <strong>Option C (Massive accumulation of uncarboxylated Factor VII...):</strong> Uncarboxylated factors are inactive, not platelet activators; Factor VII activity declines rapidly alongside Protein C.<br>• <strong>Option D (Direct toxic vasculitis of dermal capillaries...):</strong> Warfarin skin necrosis is due to hypercoagulable microvascular thrombosis and fibrin occlusion in subcutaneous fat, not allergic vasculitis."
},
{
  id: 5032,
  subject: "Pharmacology",
  topic: "Blood & Inflammation",
  chapter: "Anticoagulants: DOACs & Specific Reversal Agents",
  level: "Moderate",
  q: "An 82-year-old man on Dabigatran for non-valvular atrial fibrillation is admitted with an acute intracranial hemorrhage following a fall. His Glasgow Coma Scale is 8, and emergent neurosurgical decompression is planned. Which specific, humanized monoclonal antibody Fab fragment should be immediately administered to rapidly reverse the anticoagulant effect of dabigatran?",
  opts: ["Andexanet alfa", "Idarucizumab", "Protamine sulfate", "Ciraparantag"],
  ans: 1,
  exp: "Idarucizumab is a fully humanized monoclonal antibody Fab fragment that specifically and reversibly binds dabigatran and its acylglucuronide metabolites with an affinity approximately 350 times higher than that of dabigatran for thrombin. Upon IV administration, it binds free and thrombin-bound dabigatran almost instantaneously, neutralizing its anticoagulant effect within minutes without exerting any intrinsic procoagulant activity, allowing emergent surgical intervention.",
  wrongExp: "• <strong>Option A (Andexanet alfa):</strong> Andexanet alfa is a recombinant modified decoy Factor Xa protein used to reverse oral Direct Factor Xa inhibitors (Rivaroxaban, Apixaban, Edoxaban), but it has no activity against the direct thrombin inhibitor dabigatran.<br>• <strong>Option C (Protamine sulfate):</strong> Protamine is a positively charged basic peptide used specifically to reverse negatively charged Unfractionated Heparin (and partially LMWH).<br>• <strong>Option D (Ciraparantag):</strong> Ciraparantag (aripazine) is an investigational universal synthetic small molecule reversal agent not yet standard of care compared to FDA-approved idarucizumab."
},
{
  id: 5033,
  subject: "Pharmacology",
  topic: "Blood & Inflammation",
  chapter: "Drugs for Gout: Colchicine vs Xanthine Oxidase Inhibitors",
  level: "Easy",
  q: "A 54-year-old male presents with excruciating pain, erythema, and swelling of his right first metatarsophalangeal joint (podagra) of 12 hours duration. He has a history of peptic ulcer disease, precluding the use of NSAIDs. Colchicine is prescribed for the acute flare. What is the cellular mechanism of action of colchicine in acute gouty arthritis?",
  opts: [
    "Competitive inhibition of xanthine oxidase, lowering serum uric acid levels",
    "Binding to beta-tubulin to inhibit microtubule polymerization, impairing neutrophil chemotaxis and phagocytosis",
    "Inhibition of renal URAT1 transporters, promoting uricosuric excretion",
    "Direct catalytic degradation of uric acid crystals into soluble allantoin"
  ],
  ans: 1,
  exp: "Colchicine is an alkaloid that binds with high affinity to soluble tubulin heterodimers, preventing their assembly into microtubules and promoting microtubule depolymerization. By disrupting cytoskeletal microtubule dynamics, colchicine arrests neutrophil motility, chemotaxis toward monosodium urate (MSU) crystals, and phagocytosis. Furthermore, it inhibits the assembly of the NLRP3 inflammasome inside macrophages, halting the cleavage of pro-IL-1-beta into active Interleukin-1-beta. Importantly, colchicine has zero effect on serum uric acid synthesis or renal excretion; its efficacy is purely anti-inflammatory.",
  wrongExp: "• <strong>Option A (Competitive inhibition of xanthine oxidase...):</strong> This is the mechanism of Allopurinol and Febuxostat, which are used for chronic urate-lowering therapy and must NOT be initiated during an acute attack.<br>• <strong>Option C (Inhibition of renal URAT1 transporters...):</strong> This describes uricosuric drugs like Probenecid and Lesinurad.<br>• <strong>Option D (Direct catalytic degradation of uric acid into allantoin):</strong> This is the enzymatic mechanism of recombinant uricases like Pegloticase and Rasburicase."
},
{
  id: 5034,
  subject: "Pharmacology",
  topic: "Blood & Inflammation",
  chapter: "NSAIDs: Salicylate Poisoning & Acid-Base Physiology",
  level: "Hard",
  q: "A 17-year-old girl is brought to the emergency department after ingesting 50 tablets of Aspirin (acetylsalicylic acid) in a suicide attempt. Arterial blood gas analysis drawn 4 hours after ingestion reveals: pH 7.42, PaCO2 22 mmHg, HCO3- 14 mEq/L. Which mixed acid-base disorder is characteristically present in adult salicylate poisoning, and what pharmacological intervention accelerates the renal clearance of salicylic acid?",
  opts: [
    "Pure respiratory acidosis; Administration of intravenous Ammonium chloride to acidify urine",
    "Mixed respiratory alkalosis and high anion gap metabolic acidosis; Administration of intravenous Sodium bicarbonate to alkalinize urine",
    "Pure metabolic alkalosis; Administration of oral Acetazolamide to induce bicarbonaturia",
    "Mixed respiratory acidosis and metabolic alkalosis; Administration of intravenous Potassium chloride"
  ],
  ans: 1,
  exp: "Salicylate poisoning in adults classically produces a mixed Respiratory Alkalosis and High Anion Gap Metabolic Acidosis: (1) Salicylates directly stimulate the respiratory center in the medulla, causing hyperventilation and respiratory alkalosis (low PaCO2); (2) Concurrently, salicylates uncouple oxidative phosphorylation in the mitochondrial electron transport chain, stimulating anaerobic glycolysis and lipolysis. This generates accumulation of lactic acid, pyruvic acid, and ketoacids, producing a high anion gap metabolic acidosis (low HCO3-). Because salicylic acid is a weak acid (pKa ~3.5), intravenous Sodium Bicarbonate (NaHCO3) is administered to alkalinize urine (target urine pH 7.5–8.5). This converts non-ionized salicylic acid to its ionized conjugate base (salicylate anion), which cannot cross tubular cell membranes, trapping it in the lumen ('ion trapping') and dramatically accelerating excretion.",
  wrongExp: "• <strong>Option A (Pure respiratory acidosis; IV Ammonium chloride...):</strong> Salicylates stimulate (not depress) respiration initially; acidifying the urine traps salicylate in non-ionized form, driving it into brain tissue and causing death.<br>• <strong>Option C (Pure metabolic alkalosis; Acetazolamide...):</strong> Acetazolamide worsens metabolic acidosis and causes systemic acidemia, which drives salicylate into the CNS.<br>• <strong>Option D (Mixed respiratory acidosis and metabolic alkalosis...):</strong> Uncoupling of oxidative phosphorylation generates acid, never primary metabolic alkalosis."
},
{
  id: 5035,
  subject: "Pharmacology",
  topic: "Blood & Inflammation",
  chapter: "DMARDs: Methotrexate Mechanism & Toxicity",
  level: "Moderate",
  q: "A 45-year-old woman with severe rheumatoid arthritis is treated with weekly oral Methotrexate. Her rheumatologist concurrently prescribes daily oral Folic Acid (except on the day of methotrexate dosing). What is the primary biochemical mechanism of methotrexate, and what is the clinical objective of concurrent folic acid supplementation?",
  opts: [
    "Inhibition of Dihydrofolate Reductase (DHFR); Minimizes mucosal ulceration, cytopenias, and GI toxicity without reducing antirheumatic efficacy",
    "Direct blockade of Tumor Necrosis Factor-alpha (TNF-alpha) receptors; Prevents secondary bacterial infections",
    "Inhibition of inosine monophosphate dehydrogenase; Enhances purine synthesis in regulatory T cells",
    "Inhibition of cyclooxygenase-2 (COX-2); Prevents secondary peptic ulcer formation"
  ],
  ans: 0,
  exp: "Methotrexate is a structural analogue of folic acid that competitively inhibits Dihydrofolate Reductase (DHFR), preventing the conversion of dihydrofolate to tetrahydrofolate (THF). This depletes essential folate cofactors required for de novo synthesis of thymidylate (dTMP) and purines, blocking DNA synthesis. In rheumatoid arthritis, methotrexate also increases extracellular adenosine, which suppresses inflammatory cytokine production. Routine supplementation with low-dose folic acid (1–5 mg/day) protects rapidly dividing host tissues, significantly reducing common toxicities such as stomatitis, oral mucositis, gastrointestinal distress, elevated liver transaminases, and bone marrow cytopenias, without blunting antirheumatic efficacy.",
  wrongExp: "• <strong>Option B (Direct blockade of TNF-alpha receptors...):</strong> Etanercept, Infliximab, and Adalimumab target TNF-alpha; methotrexate does not directly bind TNF receptors.<br>• <strong>Option C (Inhibition of inosine monophosphate dehydrogenase...):</strong> This is the mechanism of Mycophenolate Mofetil, not methotrexate.<br>• <strong>Option D (Inhibition of COX-2...):</strong> Methotrexate is an antimetabolite DMARD with no direct inhibitory action on cyclooxygenase enzymes."
},
{
  id: 5036,
  subject: "Pharmacology",
  topic: "Endocrine Pharmacology",
  chapter: "Antidiabetic Drugs: Metformin & Lactic Acidosis",
  level: "Easy",
  q: "A 64-year-old male with long-standing type 2 diabetes mellitus is admitted for a severe acute pyelonephritis with septic shock. His blood pressure is 85/50 mmHg, serum creatinine has risen acutely from 1.1 to 3.2 mg/dL, and his estimated GFR is 18 mL/min/1.73m². His home antidiabetic regimen includes Metformin 1000 mg twice daily. Why must metformin be immediately withheld in this clinical scenario?",
  opts: [
    "Metformin directly stimulates pancreatic beta cells, causing fatal refractory hypoglycemia",
    "Impaired renal clearance and tissue hypoperfusion dramatically increase the risk of fatal Lactic Acidosis",
    "Metformin chelates broad-spectrum beta-lactam antibiotics, rendering them completely inactive",
    "Metformin induces severe osmotic diuresis, compounding septic shock hypovolemia"
  ],
  ans: 1,
  exp: "Metformin is a biguanide that lowers blood glucose primarily by activating AMP-activated protein kinase (AMPK) in hepatocytes, which suppresses hepatic gluconeogenesis and lipogenesis while increasing peripheral insulin sensitivity. Gluconeogenesis utilizes lactate as a major substrate. In conditions with tissue hypoperfusion, sepsis, or renal impairment, lactate accumulates systemically. Metformin is eliminated entirely unchanged by the kidneys via glomerular filtration and tubular secretion. In acute kidney injury (or eGFR < 30 mL/min/1.73m²), metformin accumulates to toxic levels, inhibiting mitochondrial complex I of the respiratory chain. This shifts cellular metabolism toward anaerobic glycolysis, resulting in Metformin-Associated Lactic Acidosis (MALA), a life-threatening emergency with high mortality.",
  wrongExp: "• <strong>Option A (Metformin directly stimulates beta cells...):</strong> Metformin is an euglycemic/antihyperglycemic agent that does NOT stimulate insulin release; it carries virtually zero risk of hypoglycemia when used as monotherapy.<br>• <strong>Option C (Metformin chelates broad-spectrum antibiotics...):</strong> Metformin does not chelate beta-lactams or aminoglycosides.<br>• <strong>Option D (Metformin induces severe osmotic diuresis...):</strong> Osmotic diuresis is a property of SGLT2 inhibitors or uncontrolled hyperglycemia, not metformin."
},
{
  id: 5037,
  subject: "Pharmacology",
  topic: "Endocrine Pharmacology",
  chapter: "Incretin Therapies: GLP-1 Receptor Agonists",
  level: "Moderate",
  q: "A 48-year-old obese woman with type 2 diabetes and non-alcoholic fatty liver disease is initiated on subcutaneous Semaglutide once weekly. Which combination of physiological actions is mediated by this Glucagon-Like Peptide-1 (GLP-1) receptor agonist?",
  opts: [
    "Glucose-dependent stimulation of insulin, suppression of glucagon, delayed gastric emptying, and centrally mediated appetite suppression",
    "Constitutive, glucose-independent release of insulin, stimulation of glucagon, and accelerated gastric emptying",
    "Inhibition of intestinal brush-border alpha-glucosidases and increased fecal carbohydrate excretion",
    "Direct activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma) in adipose tissue"
  ],
  ans: 0,
  exp: "Semaglutide is a long-acting synthetic GLP-1 receptor agonist resistant to degradation by dipeptidyl peptidase-4 (DPP-4). GLP-1 is an incretin hormone that mediates multi-organ metabolic benefits: (1) In pancreatic beta cells, it stimulates insulin secretion in a GLUCOSE-DEPENDENT manner (minimizing hypoglycemia risk); (2) In pancreatic alpha cells, it suppresses postprandial hypersecretion of glucagon; (3) In the stomach, it slows gastric emptying, blunting postprandial glycemic excursions; and (4) In the pro-opiomelanocortin (POMC) neurons of the hypothalamic arcuate nucleus, it promotes satiety and decreases appetite, driving significant body weight loss.",
  wrongExp: "• <strong>Option B (Constitutive, glucose-independent release of insulin...):</strong> Sulfonylureas and glinides stimulate insulin in a glucose-independent manner (posing high hypoglycemia risk); GLP-1 actions require ambient elevated glucose.<br>• <strong>Option C (Inhibition of intestinal brush-border alpha-glucosidases...):</strong> This is the mechanism of Acarbose and Miglitol.<br>• <strong>Option D (Direct activation of PPAR-gamma in adipose tissue):</strong> This describes the mechanism of Thiazolidinediones (e.g., Pioglitazone)."
},
{
  id: 5038,
  subject: "Pharmacology",
  topic: "Endocrine Pharmacology",
  chapter: "Antithyroid Drugs: Thyroid Storm Sequence",
  level: "Hard",
  q: "A 29-year-old woman with untreated Graves' disease is admitted to the ICU with hyperpyrexia (Temp 41.0°C), profuse sweating, marked agitation, delirium, atrial fibrillation with rapid ventricular response (HR 165 bpm), and high-output heart failure (Burch-Wartofsky score = 75, confirming Thyroid Storm). What is the physiologically correct chronological sequence of pharmacological interventions for this crisis?",
  opts: [
    "Lugol's strong iodine solution immediately -> followed 1 hour later by Propylthiouracil -> then Propranolol",
    "Propylthiouracil (or Methimazole) first -> followed at least 1 hour later by Saturated Solution of Potassium Iodide (Lugol's iodine) -> alongside Propranolol and Hydrocortisone",
    "Radioactive Iodine (I-131) ablation immediately -> followed by high-dose Levothyroxine -> then Esmolol",
    "Intravenous Dexamethasone monotherapy for 48 hours before administering any thionamide drugs"
  ],
  ans: 1,
  exp: "The management of thyroid storm requires a strict, physiologically mandated sequence of therapeutics: (1) Beta-blockers (e.g., Propranolol) are given immediately to control hyperadrenergic symptoms and blunt peripheral T4-to-T3 conversion; (2) A thionamide—specifically Propylthiouracil (PTU)—is administered immediately to block new thyroid hormone synthesis by inhibiting thyroid peroxidase (PTU also uniquely blocks peripheral 5'-deiodinase); (3) INORGANIC IODINE (Lugol's solution or SSKI) must be administered AT LEAST 1 HOUR AFTER the thionamide. If inorganic iodine is given first, it provides fresh substrate for the hyperactive gland to synthesize and release massive new hormone stores (the Jod-Basedow phenomenon); administering thionamide first traps organification before iodine induces the acute temporary Wolff-Chaikoff effect to halt hormone exocytosis; (4) Hydrocortisone or Dexamethasone is added to treat potential relative adrenal insufficiency and inhibit peripheral T4-to-T3 monodeiodination.",
  wrongExp: "• <strong>Option A (Lugol's iodine solution immediately -> followed 1 hour later by PTU...):</strong> Giving iodine before a thionamide provides abundant substrate that worsens the storm (Jod-Basedow effect).<br>• <strong>Option C (Radioactive Iodine ablation immediately...):</strong> Radioactive iodine causes radiation thyroiditis with acute dumping of preformed thyroid hormones into circulation, which is fatal in active thyroid storm.<br>• <strong>Option D (Intravenous Dexamethasone monotherapy for 48 hours...):</strong> Glucocorticoids are adjunctive; delaying thionamides and beta-blockers would lead to cardiovascular collapse."
},
{
  id: 5039,
  subject: "Pharmacology",
  topic: "Endocrine Pharmacology",
  chapter: "Glucocorticoids: HPA Axis Suppression",
  level: "Moderate",
  q: "A 50-year-old male with severe systemic lupus erythematosus has been taking oral Prednisolone 40 mg daily for the past 9 months. His disease is now quiescent, and he abruptly stops taking his medication because he 'feels completely well.' Four days later, he is brought to the emergency department in a state of profound shock (BP 70/40 mmHg), severe abdominal pain, nausea, hyponatremia, and hyperkalemia. What is the pharmacological basis of this acute crisis?",
  opts: [
    "Severe secondary hyperaldosteronism due to renal juxtaglomerular hyperplasia",
    "Iatrogenic secondary adrenal insufficiency caused by prolonged negative-feedback suppression of the hypothalamic-pituitary-adrenal (HPA) axis",
    "Rapid rebound autoimmune destruction of the bilateral adrenal cortices (Addison's disease)",
    "Sudden accumulation of circulating ACTH producing mineralocorticoid receptor down-regulation"
  ],
  ans: 1,
  exp: "Exogenous supraphysiological glucocorticoid therapy (equivalent to >5 mg prednisone daily for >3 weeks) exerts potent, chronic negative feedback on the hypothalamus (suppressing Corticotropin-Releasing Hormone, CRH) and anterior pituitary (suppressing Adrenocorticotropic Hormone, ACTH). Lack of trophic ACTH stimulation leads to profound bilateral atrophy of the adrenal cortex, specifically the zona fasciculata and zona reticularis. If exogenous steroids are abruptly discontinued, the atrophic adrenal cortex cannot synthesize endogenous cortisol. Under physiological stress or withdrawal, this precipitates Acute Adrenal Crisis (Addisonian crisis) characterized by circulatory collapse, vasoplegic shock, abdominal pain, and hypoglycemia. Glucocorticoids must always be tapered gradually over months.",
  wrongExp: "• <strong>Option A (Severe secondary hyperaldosteronism...):</strong> The crisis is marked by relative mineralocorticoid and severe glucocorticoid deficiency, leading to hypotension and salt wasting, not hyperaldosteronism.<br>• <strong>Option C (Rapid rebound autoimmune destruction of adrenal cortices):</strong> Autoimmune Addison's disease is a slow, chronic process caused by 21-hydroxylase antibodies; steroid withdrawal causes functional atrophy, not autoimmune destruction.<br>• <strong>Option D (Sudden accumulation of circulating ACTH...):</strong> ACTH is profoundly SUPPRESSED, not elevated, in secondary/tertiary adrenal insufficiency caused by steroid therapy."
},
{
  id: 5040,
  subject: "Pharmacology",
  topic: "Endocrine Pharmacology",
  chapter: "Bone Mineral Homeostasis: Bisphosphonates",
  level: "Easy",
  q: "A 68-year-old postmenopausal woman with a T-score of -3.2 on dual-energy X-ray absorptiometry (DEXA) is prescribed oral Alendronate. Which instruction must be strictly communicated to this patient to prevent pill-induced ulcerative esophagitis?",
  opts: [
    "Take the tablet immediately after dinner with a full glass of milk and lie down to sleep",
    "Take the tablet first thing in the morning with a full glass of plain water, on an empty stomach, and remain upright for at least 30 minutes",
    "Crush the tablet and dissolve it in orange juice to facilitate gastric absorption",
    "Take the tablet concomitantly with high-dose calcium carbonate supplements to enhance bone incorporation"
  ],
  ans: 1,
  exp: "Nitrogen-containing oral bisphosphonates (such as Alendronate, Risedronate, and Ibandronate) are structural analogues of inorganic pyrophosphate that inhibit osteoclast farnesyl pyrophosphate (FPP) synthase. They have extremely low oral bioavailability (<1%) which is virtually abolished by food, divalent cations, or beverages other than plain water. Furthermore, bisphosphonate tablets cause direct chemical irritation and severe contact ulceration of the esophageal mucosa if they lodge in the esophagus. Patients must take the medication first thing in the morning with a full glass of plain tap water, on an empty stomach, at least 30 minutes before any food or other medications, and must remain strictly upright (sitting or standing) for at least 30 minutes to facilitate rapid gastric transit.",
  wrongExp: "• <strong>Option A (Take after dinner with milk and lie down):</strong> Dairy products (calcium) completely chelate bisphosphonates and eliminate absorption; lying down causes esophageal retention and severe ulcerative esophagitis.<br>• <strong>Option C (Crush the tablet in orange juice...):</strong> Crushing destroys the protective formulation and causes extensive oral and esophageal mucosal ulceration.<br>• <strong>Option D (Take concomitantly with calcium carbonate):</strong> Calcium supplements bind bisphosphonates in the gut lumen, preventing their absorption; calcium must be separated by at least 2 hours."
},
{
  id: 5041,
  subject: "Pharmacology",
  topic: "Endocrine Pharmacology",
  chapter: "SERMs: Tamoxifen vs Raloxifene",
  level: "Moderate",
  q: "A 56-year-old postmenopausal woman with ER-positive breast cancer completed 5 years of adjuvant Tamoxifen therapy. She is now concerned about bone health and her risk of secondary malignancies. How do the tissue-specific estrogen receptor agonist and antagonist profiles of Tamoxifen compare to Raloxifene?",
  opts: [
    "Tamoxifen is an estrogen antagonist in breast and bone, but an agonist in the endometrium",
    "Tamoxifen is an estrogen antagonist in breast, but an agonist in bone and endometrium; Raloxifene is an antagonist in breast and endometrium, but an agonist in bone",
    "Raloxifene is an estrogen agonist in breast and endometrium, but an antagonist in bone",
    "Both drugs are pure estrogen receptor antagonists across all tissues, including breast, bone, and uterus"
  ],
  ans: 1,
  exp: "Selective Estrogen Receptor Modulators (SERMs) display differential, tissue-selective estrogenic agonist or antagonist properties by recruiting distinct co-activator or co-repressor proteins in different cell types. Tamoxifen is an estrogen ANTAGONIST in breast tissue (preventing ER-positive cancer recurrence), but acts as an estrogen AGONIST in bone (maintaining bone mineral density) and, crucially, an estrogen AGONIST in the endometrium (conferring an increased risk of endometrial hyperplasia and endometrial carcinoma). In contrast, Raloxifene is an estrogen ANTAGONIST in both breast and endometrium (zero risk of endometrial cancer), while maintaining AGONIST activity in bone, making it ideal for postmenopausal osteoporosis prevention.",
  wrongExp: "• <strong>Option A (Tamoxifen is an antagonist in bone...):</strong> Tamoxifen is an agonist in bone, conserving bone density in postmenopausal women.<br>• <strong>Option C (Raloxifene is an agonist in breast and endometrium...):</strong> Raloxifene is an antagonist in breast and endometrium; this is its primary safety advantage over tamoxifen.<br>• <strong>Option D (Both drugs are pure antagonists across all tissues...):</strong> Fulvestrant is a pure selective estrogen receptor down-regulator (SERD); SERMs are partial agonists/antagonists by definition."
},
{
  id: 5042,
  subject: "Pharmacology",
  topic: "Antimicrobials",
  chapter: "Glycopeptides: Vancomycin & Infusion Reactions",
  level: "Easy",
  q: "A 32-year-old male with severe MRSA bacteremia is receiving his initial dose of intravenous Vancomycin (1 g infused rapidly over 15 minutes). Mid-infusion, he develops dramatic flushing, an erythematous pruritic maculopapular rash over his face, neck, and upper torso, accompanied by mild hypotension. His vitals are HR 105 bpm, BP 90/60 mmHg, with no laryngeal edema or wheezing. What is the mechanism of this adverse reaction ('Red Man Syndrome'), and how is it managed?",
  opts: [
    "IgE-mediated type I hypersensitivity reaction; Administer intramuscular epinephrine immediately",
    "Rate-dependent direct non-immunologic mast cell degranulation and histamine release; Slow the infusion rate to ≥60 minutes and administer antihistamines",
    "Type IV delayed-type hypersensitivity with epidermal necrolysis; Permanently discontinue all glycopeptide antibiotics",
    "Complement-mediated immune complex deposition in dermal capillaries; Administer intravenous methylprednisolone"
  ],
  ans: 1,
  exp: "Vancomycin Infusion Reaction (formerly known as 'Red Man Syndrome') is a classic rate-dependent adverse drug reaction, NOT an IgE-mediated allergic response. Rapid intravenous administration of vancomycin triggers direct, non-immune degranulation of mast cells and basophils, releasing large amounts of preformed histamine into the systemic circulation. This results in profound cutaneous vasodilation, flushing of the upper body ('red neck/red man'), pruritus, and transient hypotension. The definitive management is to halt or slow the infusion rate to a minimum of 60 minutes (or ≤10 mg/min), dilute the infusion volume, and administer H1/H2 antihistamines. The patient can safely receive vancomycin in the future with proper infusion rates.",
  wrongExp: "• <strong>Option A (IgE-mediated type I hypersensitivity; IM epinephrine):</strong> True vancomycin anaphylaxis is exceptionally rare; true anaphylaxis involves IgE, produces bronchospasm/stridor, and precludes further vancomycin use.<br>• <strong>Option C (Type IV delayed hypersensitivity...):</strong> This describes DRESS syndrome or Stevens-Johnson syndrome, which occur days to weeks into therapy, not within minutes of rapid infusion.<br>• <strong>Option D (Complement-mediated immune complex deposition):</strong> This describes serum sickness (type III hypersensitivity), which presents with fever, arthritis, and nephritis 7–10 days later."
},
{
  id: 5043,
  subject: "Pharmacology",
  topic: "Antimicrobials",
  chapter: "Aminoglycosides: Ototoxicity & Nephrotoxicity",
  level: "Moderate",
  q: "A 70-year-old male with Pseudomonas aeruginosa urosepsis is treated with intravenous Gentamicin. On hospital day 6, his urine output drops, serum creatinine rises from 0.8 to 2.4 mg/dL, and he reports unsteady gait and high-frequency sensorineural hearing loss. What are the cellular mechanisms of aminoglycoside-induced nephrotoxicity and ototoxicity, respectively?",
  opts: [
    "Glomerular immune-complex nephritis and tympanic membrane sclerosis",
    "Proximal tubular epithelial accumulation causing Acute Tubular Necrosis (ATN) and reactive oxygen species-mediated destruction of cochlear/vestibular sensory hair cells",
    "Distal tubular calcium channel blockade and mechanical detachment of the basilar membrane",
    "Afferent arteriolar vasoconstriction and direct chemical paralysis of the eighth cranial nerve axon"
  ],
  ans: 1,
  exp: "Aminoglycosides (Gentamicin, Tobramycin, Amikacin) are polycationic, highly polar molecules that are cleared exclusively by glomerular filtration. (1) Nephrotoxicity occurs because a small percentage of filtered drug is endocytosed via the megalin/cubilin receptor complex into proximal convoluted tubule epithelial cells. Aminoglycosides accumulate within lysosomes, rupture lysosomal membranes, and trigger necrosis and apoptosis of PCT cells, leading to non-oliguric Acute Tubular Necrosis (typically reversible). (2) Ototoxicity occurs because aminoglycosides concentrate in the endolymph and perilymph, generating toxic Reactive Oxygen Species (ROS) that irreversibly destroy the outer sensory hair cells of the Organ of Corti (cochleotoxicity) and vestibular cristae (vestibulotoxicity), leading to permanent sensorineural hearing loss and ataxia.",
  wrongExp: "• <strong>Option A (Glomerular immune-complex nephritis...):</strong> Aminoglycosides cause direct tubular toxic injury (ATN), not immune-mediated glomerulonephritis, and do not affect the tympanic membrane.<br>• <strong>Option C (Distal tubular calcium channel blockade...):</strong> The damage is proximal, not distal, and involves hair cell apoptosis, not mechanical basilar membrane detachment.<br>• <strong>Option D (Afferent arteriolar vasoconstriction...):</strong> Aminoglycosides do not cause primary arteriolar constriction; the ototoxicity is hair-cell specific, not axonal nerve trunk severance."
},
{
  id: 5044,
  subject: "Pharmacology",
  topic: "Antimicrobials",
  chapter: "Fluoroquinolones: Mechanism & Toxicities",
  level: "Moderate",
  q: "A 68-year-old marathon runner is prescribed oral Ciprofloxacin for complicated diverticulitis. On day 5 of therapy, he experiences sudden severe pain and swelling above his left heel, with an inability to plantarflex his foot (Achilles tendon rupture). In addition to tendinopathy, which serious cardiovascular and electrophysiological warnings are black-boxed for fluoroquinolones?",
  opts: [
    "Coronary artery vasospasm and Mobitz type II atrioventricular block",
    "Aortic aneurysm/dissection rupture and QT interval prolongation predisposing to Torsades de Pointes",
    "Acute constrictive pericarditis and sinus node arrest",
    "High-output heart failure and Wolff-Parkinson-White syndrome"
  ],
  ans: 1,
  exp: "Fluoroquinolones (Ciprofloxacin, Levofloxacin, Moxifloxacin) inhibit bacterial DNA gyrase (topoisomerase II) and topoisomerase IV. They exhibit several distinct toxicities: (1) Tendinitis and Tendon Rupture (most frequently the Achilles tendon) due to enhanced collagen degradation and oxidative damage to tenocytes, especially in elderly patients, athletes, and those taking concurrent systemic corticosteroids; (2) Disruption of extracellular matrix metalloproteinases leading to degradation of type I and III collagen in vascular walls, increasing the risk of Aortic Aneurysm and Aortic Dissection; (3) Blockade of the rapid delayed rectifier potassium channel (IKr / hERG channel), leading to QT prolongation and life-threatening Torsades de Pointes ventricular tachycardia.",
  wrongExp: "• <strong>Option A (Coronary artery vasospasm and Mobitz type II AV block):</strong> Fluoroquinolones do not cause coronary vasospasm or infranodal conduction block.<br>• <strong>Option C (Acute constrictive pericarditis and sinus node arrest):</strong> Fluoroquinolones do not cause pericardial inflammation or sick sinus syndrome.<br>• <strong>Option D (High-output heart failure and WPW syndrome):</strong> Fluoroquinolones do not induce accessory pathway conduction or high-output states."
},
{
  id: 5045,
  subject: "Pharmacology",
  topic: "Antimicrobials",
  chapter: "Antitubercular Drugs: First-Line Toxicities",
  level: "Easy",
  q: "A 45-year-old male on standard four-drug therapy (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol) for pulmonary tuberculosis presents for routine follow-up. He complains of progressive burning numbness and tingling in a 'glove-and-stocking' distribution in his feet and hands, and difficulty distinguishing red from green traffic lights. Which two drugs from his anti-TB regimen are responsible for his peripheral neuropathy and optic neuritis, respectively?",
  opts: [
    "Pyrazinamide (peripheral neuropathy) and Rifampicin (optic neuritis)",
    "Isoniazid (peripheral neuropathy) and Ethambutol (optic neuritis)",
    "Ethambutol (peripheral neuropathy) and Isoniazid (optic neuritis)",
    "Rifampicin (peripheral neuropathy) and Pyrazinamide (optic neuritis)"
  ],
  ans: 1,
  exp: "Both Isoniazid and Ethambutol exhibit classic, high-yield organ toxicities: (1) Isoniazid (INH) is chemically related to pyridoxine (Vitamin B6); it binds pyridoxal phosphate to form inactive hydrazones and competitively inhibits pyridoxal phosphokinase. This depletes active Vitamin B6, impairing myelin maintenance and GABA synthesis, resulting in peripheral neuropathy (preventable by co-administering Pyridoxine 10–50 mg daily). (2) Ethambutol inhibits arabinosyl transferase, disrupting mycobacterial cell wall synthesis. Its signature adverse effect is dose-dependent retrobulbar optic neuritis, presenting with decreased visual acuity, central scotoma, and loss of red-green color discrimination.",
  wrongExp: "• <strong>Option A (Pyrazinamide and Rifampicin):</strong> Pyrazinamide causes hyperuricemia (gout) and hepatotoxicity; Rifampicin causes orange-red discoloration of body fluids, cholestatic hepatitis, and CYP450 induction.<br>• <strong>Option C (Ethambutol neuropathy and INH optic neuritis):</strong> This reverses the specific toxicities of the two drugs.<br>• <strong>Option D (Rifampicin neuropathy and Pyrazinamide optic neuritis):</strong> Neither Rifampicin nor Pyrazinamide is typically associated with peripheral neuropathy or optic neuritis."
},
{
  id: 5046,
  subject: "Pharmacology",
  topic: "Antimicrobials",
  chapter: "Antifungals: Amphotericin B Toxicities",
  level: "Hard",
  q: "A 38-year-old HIV-infected male (CD4 count 35 cells/uL) with Cryptococcal meningitis is initiated on intravenous Amphotericin B deoxycholate and Flucytosine. On day 4 of therapy, his serum potassium is 2.6 mEq/L, serum magnesium is 1.2 mg/dL, serum creatinine has climbed from 0.9 to 2.1 mg/dL, and his arterial blood gas shows a normal anion gap metabolic acidosis. What is the molecular mechanism of Amphotericin B nephrotoxicity responsible for these electrolyte disturbances?",
  opts: [
    "Glomerular podocyte effacement causing massive nephrotic proteinuria",
    "Binding to host membrane cholesterol in distal renal tubular cells, creating non-selective pores that induce Type 1 distal RTA, wasting potassium and magnesium",
    "Direct cytotoxic inhibition of the thick ascending limb NKCC2 cotransporter",
    "Precipitation of insoluble amphotericin crystals in the collecting ducts causing obstructive nephropathy"
  ],
  ans: 1,
  exp: "Amphotericin B is a polyene macrolide that binds preferentially to ergosterol in fungal cell membranes, forming transmembrane ion-channel pores that cause fungal cell death. However, amphotericin B also binds with lower affinity to host cholesterol in mammalian renal tubular cells. In the renal distal tubule, pore formation increases membrane permeability, allowing protons (H+) to leak back into cells from the tubular lumen, which destroys the transtubular proton gradient. This produces a Type 1 (Distal) Renal Tubular Acidosis (RTA) accompanied by dramatic wasting of potassium (severe hypokalemia) and magnesium (hypomagnesemia). Concurrently, amphotericin causes intense afferent arteriolar vasoconstriction, causing prerenal ischemic GFR decline.",
  wrongExp: "• <strong>Option A (Glomerular podocyte effacement...):</strong> Amphotericin does not cause minimal change-type podocyte injury; the damage is localized to the renal tubules and microvasculature.<br>• <strong>Option C (Direct cytotoxic inhibition of NKCC2...):</strong> Amphotericin does not specifically inhibit the NKCC2 transport protein (which is the target of loop diuretics).<br>• <strong>Option D (Precipitation of insoluble crystals...):</strong> Obstructive intratubular crystalluria is characteristic of Acyclovir, Sulfonamides, and Methotrexate, not Amphotericin B."
},
{
  id: 5047,
  subject: "Pharmacology",
  topic: "Antimicrobials",
  chapter: "Antimalarial Drugs: Primaquine & G6PD Deficiency",
  level: "Hard",
  q: "A 24-year-old male soldier returning from an endemic malaria region is diagnosed with acute Plasmodium vivax malaria. Blood smear confirms trophozoites, and he is treated successfully with Chloroquine. To prevent relapses from dormant hypnozoites in the liver, the physician plans to prescribe Primaquine for 14 days. Which laboratory investigation must be mandatorily performed prior to initiating primaquine therapy, and what is the underlying hazard?",
  opts: [
    "Serum amylase level; Severe necrotizing pancreatitis",
    "Glucose-6-Phosphate Dehydrogenase (G6PD) activity assay; Massive acute hemolytic anemia",
    "HLA-B*5701 genetic testing; Severe cutaneous hypersensitivity syndrome",
    "Serum alpha-fetoprotein level; Acute hepatic necrosis"
  ],
  ans: 1,
  exp: "Plasmodium vivax and Plasmodium ovale form dormant liver stages known as hypnozoites, which cause recurrent malarial relapses months to years later. Primaquine (and Tafenoquine) are the only antimalarial drugs that effectively eradicate these liver hypnozoites (radical cure). However, primaquine metabolites generate high intracellular oxidative stress within erythrocytes. In patients with Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency, red blood cells cannot regenerate NADPH via the pentose phosphate pathway, depleting reduced glutathione (GSH). Hemoglobin becomes oxidized and cross-linked into insoluble Heinz bodies, triggering acute, severe intravascular and extravascular hemolysis. Therefore, quantitative G6PD enzyme testing is mandatory before starting primaquine.",
  wrongExp: "• <strong>Option A (Serum amylase level; Pancreatitis):</strong> Primaquine does not target the exocrine pancreas or cause acute pancreatitis.<br>• <strong>Option C (HLA-B*5701 genetic testing...):</strong> HLA-B*5701 screening is mandatory before prescribing Abacavir (for HIV) to prevent fatal hypersensitivity reactions.<br>• <strong>Option D (Serum alpha-fetoprotein level...):</strong> Alpha-fetoprotein is a tumor marker for hepatocellular carcinoma and germ cell tumors, irrelevant to primaquine clearance."
},
{
  id: 5048,
  subject: "Pharmacology",
  topic: "Chemotherapy & Anticancer",
  chapter: "Cytotoxic Antibiotics: Anthracyclines & Cardioprotection",
  level: "Easy",
  q: "A 52-year-old woman with invasive ductal breast cancer undergoes adjuvant chemotherapy with Doxorubicin and Cyclophosphamide. The oncologist strictly tracks her cumulative lifetime dose of doxorubicin to not exceed 450-550 mg/m². What type of cardiotoxicity is associated with anthracyclines, and what pharmacological chelating agent can be administered to mitigate this risk in high-dose therapy?",
  opts: [
    "Dilated cardiomyopathy and congestive heart failure; Dexrazoxane",
    "Constrictive pericarditis; Amifostine",
    "Hypertrophic cardiomyopathy; Leucovorin",
    "Acute coronary vasospasm; Mesna"
  ],
  ans: 0,
  exp: "Anthracyclines (Doxorubicin, Daunorubicin) intercalate between DNA base pairs and inhibit Topoisomerase II. Their major dose-limiting adverse effect is cumulative, dose-dependent cardiotoxicity, leading to irreversible Dilated Cardiomyopathy and congestive heart failure. Inside cardiac myocytes, doxorubicin complexes with intracellular iron (Fe3+) to generate massive amounts of toxic superoxide and hydroxyl free radicals; cardiac tissue is uniquely vulnerable because it has low levels of protective catalase. Dexrazoxane is an intracellular iron-chelating agent that hydrolyzes into an EDTA-like ring-opened molecule, preventing iron-anthracycline free-radical generation and dramatically reducing cardiotoxicity.",
  wrongExp: "• <strong>Option B (Constrictive pericarditis; Amifostine):</strong> Anthracyclines cause myocardial myofibrillar drop-out and chamber dilation, not pericarditis; Amifostine is a free-radical scavenger used to prevent cisplatin nephrotoxicity.<br>• <strong>Option C (Hypertrophic cardiomyopathy; Leucovorin):</strong> Anthracyclines cause dilated, not hypertrophic, cardiomyopathy; Leucovorin (folinic acid) rescues cells from methotrexate toxicity.<br>• <strong>Option D (Acute coronary vasospasm; Mesna):</strong> Coronary vasospasm is characteristic of 5-Fluorouracil (5-FU); Mesna protects against cyclophosphamide/ifosfamide hemorrhagic cystitis."
},
{
  id: 5049,
  subject: "Pharmacology",
  topic: "Chemotherapy & Anticancer",
  chapter: "Platinum Compounds: Cisplatin Nephroprotection",
  level: "Moderate",
  q: "A 60-year-old male with metastatic non-small cell lung cancer is scheduled to receive high-dose Cisplatin-based systemic chemotherapy. To prevent cisplatin's major dose-limiting organ toxicity, the oncology team initiates vigorous intravenous saline prehydration and considers the administration of Amifostine. Which dose-limiting toxicity is prevented by this protocol?",
  opts: [
    "Severe pulmonary fibrosis",
    "Dose-limiting nephrotoxicity (Acute Tubular Necrosis)",
    "Hemorrhagic cystitis",
    "Avascular necrosis of the femoral head"
  ],
  ans: 1,
  exp: "Cisplatin is an inorganic platinum coordination complex that forms intrastrand and interstrand cross-links between guanine bases in DNA. Its primary dose-limiting toxicity is severe Nephrotoxicity (manifesting as acute tubular necrosis, electrolyte wasting of magnesium and calcium, and renal failure) mediated by cellular accumulation in proximal tubular cells and reactive oxygen species generation. Vigorous intravenous pre-hydration with normal saline maintains high renal tubular flow and flushes the drug. Amifostine is an organic thiophosphate prodrug dephosphorylated by alkaline phosphatase in normal vascular endothelium to an active free thiol (WR-1065) that scavenges cisplatin-derived reactive toxic species in normal renal parenchyma, protecting the kidneys.",
  wrongExp: "• <strong>Option A (Severe pulmonary fibrosis):</strong> Pulmonary fibrosis is the classic toxicity of Bleomycin and Busulfan, not cisplatin.<br>• <strong>Option C (Hemorrhagic cystitis):</strong> Hemorrhagic cystitis is caused by the acrolein metabolite of Cyclophosphamide and Ifosfamide, prevented by Mesna.<br>• <strong>Option D (Avascular necrosis of the femoral head):</strong> Avascular necrosis is associated with high-dose chronic glucocorticoid therapy, not platinum agents."
},
{
  id: 5050,
  subject: "Pharmacology",
  topic: "Chemotherapy & Anticancer",
  chapter: "Alkylating Agents: Cyclophosphamide & Mesna",
  level: "Hard",
  q: "A 16-year-old male with Ewing sarcoma receives high-dose intravenous Ifosfamide and Cyclophosphamide chemotherapy. On day 2, he develops dysuria, gross hematuria, and suprapubic pain. Cystoscopy demonstrates diffuse, ulcerated hemorrhagic mucosal inflammation throughout the urinary bladder. Which toxic metabolite is responsible for this urothelial damage, and which antidote directly neutralizes it when co-administered?",
  opts: [
    "Phosphoramide mustard; N-acetylcysteine",
    "Acrolein; Mesna (2-mercaptoethane sulfonate)",
    "Nitrenium ion; Dexrazoxane",
    "Thiouracil; Leucovorin"
  ],
  ans: 1,
  exp: "Cyclophosphamide and Ifosfamide are oxazaphosphorine nitrogen mustard prodrugs that require hepatic bioactivation by CYP2B6 into 4-hydroxycyclophosphamide, which exists in equilibrium with aldophosphamide. Aldophosphamide spontaneously fragments into two active moieties: (1) Phosphoramide mustard (the active antineoplastic alkylating species) and (2) Acrolein. Acrolein has zero antineoplastic efficacy; it is excreted by the kidneys and concentrates in the urinary bladder, where it binds sulfhydryl groups on urothelial proteins, causing direct chemical sloughing, mucosal ulceration, and severe Hemorrhagic Cystitis. Mesna (sodium 2-mercaptoethane sulfonate) is a synthetic thiol compound that concentrates in urine; its free sulfhydryl (-SH) group reacts directly with acrolein to form a non-toxic, stable thioether conjugate, neutralizing urothelial toxicity.",
  wrongExp: "• <strong>Option A (Phosphoramide mustard; N-acetylcysteine):</strong> Phosphoramide mustard is the desired antineoplastic alkylating agent, not the urotoxin; while NAC contains thiols, Mesna is the standard uroprotective agent because it concentrates in the bladder.<br>• <strong>Option C (Nitrenium ion; Dexrazoxane):</strong> Nitrenium ions are formed in clozapine metabolism; Dexrazoxane is an iron chelator used against anthracycline cardiotoxicity.<br>• <strong>Option D (Thiouracil; Leucovorin):</strong> Thiouracil is related to antithyroid medications; Leucovorin rescues from dihydrofolate reductase inhibition by methotrexate."
}
];
