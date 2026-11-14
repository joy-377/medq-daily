window.MEDQ_DATA = window.MEDQ_DATA || {};
window.MEDQ_DATA.physiology = [
{
  id: 2001,
  subject: "Physiology",
  topic: "General Physiology",
  chapter: "Membrane Transport Mechanisms",
  level: "Easy",
  q: "An investigator studying epithelial transport in human enterocytes identifies a transport protein situated on the basolateral membrane that moves 3 Na+ ions out of the cell and 2 K+ ions into the cell per molecule of ATP hydrolyzed. What effect does pharmacological inhibition of this transporter by a cardiac glycoside have on intracellular solute concentrations?",
  opts: [
    "Decreased intracellular Na+ and increased intracellular K+",
    "Increased intracellular Na+ and decreased intracellular K+",
    "Increased intracellular Na+ and increased intracellular K+",
    "Decreased intracellular Na+ and decreased intracellular Ca2+"
  ],
  ans: 1,
  exp: "The Na+/K+-ATPase is a primary active electrogenic transporter located on the basolateral membrane of animal cells. It couples the hydrolysis of one ATP molecule to the extrusion of 3 Na+ ions out of the cell and the uptake of 2 K+ ions into the cell, against their respective electrochemical gradients. Inhibition of this pump by cardiac glycosides (such as ouabain or digoxin) halts active Na+ extrusion and K+ import, leading directly to an accumulation of intracellular Na+ and a depletion of intracellular K+. Secondary to the elevated intracellular Na+, the forward driving force of the Na+/Ca2+ exchanger (NCX) is blunted, leading to secondary accumulation of intracellular Ca2+.",
  wrongExp: "• <strong>Option A (Decreased intracellular Na+ and increased intracellular K+):</strong> This represents hyperactivation of the pump, whereas inhibition causes Na+ retention and K+ loss.<br>• <strong>Option C (Increased intracellular Na+ and increased intracellular K+):</strong> While intracellular Na+ does increase due to impaired extrusion, intracellular K+ drops because the primary route of K+ entry into the cell is blocked.<br>• <strong>Option D (Decreased intracellular Na+ and decreased intracellular Ca2+):</strong> Intracellular Na+ increases, and as a consequence of decreased forward Na+/Ca2+ exchange, intracellular Ca2+ increases rather than decreases."
},
{
  id: 2002,
  subject: "Physiology",
  topic: "General Physiology",
  chapter: "Action Potential & Excitability",
  level: "Moderate",
  q: "During an in vitro electrophysiological recording of a mammalian peripheral nerve axon, an investigator increases the extracellular potassium concentration ([K+]out) from 4.5 mEq/L to 10 mEq/L. Which of the following consequences on the resting membrane potential (RMP) and nerve excitability will occur initially?",
  opts: [
    "Hyperpolarization of RMP and increased threshold excitability",
    "Depolarization of RMP leading to initial hyperexcitability followed by inexcitability due to Na+ channel inactivation",
    "Hyperpolarization of RMP due to accelerated outward K+ diffusion",
    "No change in RMP because resting potential is determined solely by Na+ permeability"
  ],
  ans: 1,
  exp: "According to the Nernst equation (E_K = -61.5 * log10([K+]in / [K+]out)), increasing extracellular K+ reduces the concentration gradient favoring K+ efflux. Consequently, the resting membrane potential (RMP) becomes less negative (depolarization). Initially, bringing the RMP closer to the threshold potential (-55 mV) increases membrane excitability. However, sustained depolarization leads to time-dependent closure of the inactivation gates (h-gates) of voltage-gated Na+ channels (accommodation/inactivation), rendering the cell refractory and ultimately inexcitable.",
  wrongExp: "• <strong>Option A (Hyperpolarization of RMP and increased threshold excitability):</strong> Hyperpolarization occurs when extracellular K+ drops (hypokalemia), which increases the outward concentration gradient for K+.<br>• <strong>Option C (Hyperpolarization of RMP due to accelerated outward K+ diffusion):</strong> Elevating extracellular K+ decreases, rather than accelerates, the outward chemical gradient of K+.<br>• <strong>Option D (No change in RMP because resting potential is determined solely by Na+ permeability):</strong> The resting membrane is roughly 50 to 100 times more permeable to K+ than to Na+ via inward-rectifying and background two-pore domain K+ leak channels; hence, RMP tracks E_K closely."
},
{
  id: 2003,
  subject: "Physiology",
  topic: "General Physiology",
  chapter: "Second Messenger Systems",
  level: "Hard",
  q: "A pharmaceutical compound is developed that selectively and irreversibly locks the alpha subunit of the Gq heterotrimeric G-protein in its GTP-bound state. In vascular smooth muscle cells, sustained activation of which downstream intracellular pathway will be observed?",
  opts: [
    "Adenylyl cyclase activation -> Increased cAMP -> Protein Kinase A activation",
    "Phospholipase C-beta activation -> Cleavage of PIP2 into IP3 and DAG -> Release of Ca2+ from sarcoplasmic reticulum and PKC activation",
    "Phosphodiesterase activation -> Decreased cGMP -> Dephosphorylation of myosin light chain",
    "Gi activation -> Inhibition of adenylyl cyclase -> Decreased intracellular Ca2+"
  ],
  ans: 1,
  exp: "The Gq signaling pathway operates via activation of Phospholipase C-beta (PLC-beta). PLC-beta hydrolyzes membrane-bound phosphatidylinositol 4,5-bisphosphate (PIP2) into two second messengers: inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG). IP3 diffuses to the sarcoplasmic/endoplasmic reticulum and binds to IP3 receptor-gated Ca2+ channels, releasing Ca2+ into the cytosol. DAG remains membrane-associated and, along with Ca2+, activates Protein Kinase C (PKC). In vascular smooth muscle, this elevates cytosolic Ca2+, leading to Ca2+-calmodulin-dependent myosin light chain kinase (MLCK) activation and vasoconstriction.",
  wrongExp: "• <strong>Option A (Adenylyl cyclase activation -> Increased cAMP -> Protein Kinase A activation):</strong> This is the canonical Gs signaling cascade, utilized by beta-1 and beta-2 adrenergic receptors, which causes smooth muscle relaxation rather than contraction.<br>• <strong>Option C (Phosphodiesterase activation -> Decreased cGMP -> Dephosphorylation of myosin light chain):</strong> Phosphodiesterase degrades cGMP or cAMP and is downstream of receptors like rhodopsin (via transducin/Gt), not Gq.<br>• <strong>Option D (Gi activation -> Inhibition of adenylyl cyclase -> Decreased intracellular Ca2+):</strong> Gi inhibits adenylyl cyclase and opens GIRK channels, an entirely distinct pathway from Gq."
},
{
  id: 2004,
  subject: "Physiology",
  topic: "General Physiology",
  chapter: "Gibbs-Donnan Equilibrium & Osmosis",
  level: "Moderate",
  q: "Two compartments, X and Y, are separated by a semipermeable membrane that is freely permeable to water, Na+, and Cl-, but completely impermeable to large negatively charged protein anions (Prot-). Compartment X contains 100 mM NaProt, while Compartment Y contains 100 mM NaCl. Once the Gibbs-Donnan equilibrium is fully reached, which of the following statements correctly describes the distribution of diffusible ions?",
  opts: [
    "[Na+] in X is less than [Na+] in Y; [Cl-] in X equals [Cl-] in Y",
    "[Na+] in X is greater than [Na+] in Y; [Cl-] in X is less than [Cl-] in Y",
    "[Na+] in X equals [Na+] in Y; [Cl-] in X is greater than [Cl-] in Y",
    "[Na+] in X is greater than [Na+] in Y; [Cl-] in X is greater than [Cl-] in Y"
  ],
  ans: 1,
  exp: "The Gibbs-Donnan equilibrium states that the presence of a non-diffusible charged macromolecule (here Prot- in compartment X) alters the distribution of diffusible co-ions across a semipermeable membrane. At equilibrium: (1) Electrical neutrality must hold in each compartment, and (2) The product of diffusible ions must be equal on both sides: [Na+]_X * [Cl-]_X = [Na+]_Y * [Cl-]_Y. Because Prot- contributes negative charge in X, additional Na+ is drawn into compartment X to preserve electroneutrality, while Cl- is repelled away from X into Y. Consequently, at equilibrium: [Na+]_X > [Na+]_Y, whereas [Cl-]_X < [Cl-]_Y.",
  wrongExp: "• <strong>Option A ([Na+] in X is less than [Na+] in Y; [Cl-] in X equals [Cl-] in Y):</strong> Na+ is electrostatic-attracted into X by the impermeant Prot- anions, so [Na+]_X cannot be lower than [Na+]_Y, and Cl- is repelled.<br>• <strong>Option C ([Na+] in X equals [Na+] in Y; [Cl-] in X is greater than [Cl-] in Y):</strong> Diffusible cations and anions do not distribute equally when an impermeable charged species is confined to one side.<br>• <strong>Option D ([Na+] in X is greater than [Na+] in Y; [Cl-] in X is greater than [Cl-] in Y):</strong> If both [Na+] and [Cl-] were higher in compartment X, the product [Na+]_X * [Cl-]_X would exceed [Na+]_Y * [Cl-]_Y, violating the thermodynamic law of Donnan equilibrium."
},
{
  id: 2005,
  subject: "Physiology",
  topic: "General Physiology",
  chapter: "Skeletal Muscle Contraction",
  level: "Moderate",
  q: "During excitation-contraction coupling in mammalian skeletal muscle, depolarization of the sarcolemma triggers calcium release into the myoplasm. Which specific mechanical link between the sarcolemmal transverse tubule (T-tubule) and the terminal cisterna of the sarcoplasmic reticulum mediates this process?",
  opts: [
    "Calcium-induced calcium release via cardiac-type Ryanodine Receptor 2 (RyR2)",
    "Direct conformational-mechanical coupling between Dihydropyridine Receptors (DHPR/Cav1.1) and Ryanodine Receptor 1 (RyR1)",
    "Calmodulin-dependent phosphorylation of phospholamban",
    "Sodium-calcium exchange reversal across the terminal cisternae"
  ],
  ans: 1,
  exp: "In skeletal muscle, excitation-contraction coupling relies on a direct physical (mechanical) coupling between voltage-sensing L-type calcium channels (Dihydropyridine Receptors, DHPR or Cav1.1) situated in the T-tubular membrane and the calcium-release channels (Ryanodine Receptors type 1, RyR1) located in the adjacent terminal cisternae of the sarcoplasmic reticulum (forming the triad). Depolarization induces a conformational change in DHPR, which physically uncorks RyR1, releasing Ca2+ into the sarcoplasm without requiring extracellular Ca2+ influx. In contrast, cardiac muscle relies on extracellular Ca2+ entry through Cav1.2 to trigger Calcium-Induced Calcium Release (CICR) via RyR2.",
  wrongExp: "• <strong>Option A (Calcium-induced calcium release via cardiac-type Ryanodine Receptor 2):</strong> CICR via RyR2 is the hallmark of cardiac muscle, not skeletal muscle; skeletal muscle can contract in an extracellular calcium-free medium in experimental setups.<br>• <strong>Option C (Calmodulin-dependent phosphorylation of phospholamban):</strong> Phospholamban regulates the SERCA2a pump in cardiac and smooth muscle, accelerating calcium re-uptake during diastole, not initial release in skeletal triads.<br>• <strong>Option D (Sodium-calcium exchange reversal across the terminal cisternae):</strong> NCX is located on the plasma membrane and is not the mediator of sarcoplasmic reticulum calcium release."
},
{
  id: 2006,
  subject: "Physiology",
  topic: "Hematology",
  chapter: "Erythropoiesis & Iron Metabolism",
  level: "Easy",
  q: "A 42-year-old male with chronic inflammatory bowel disease presents with microcytic, hypochromic anemia. Serum studies reveal low serum iron, low total iron-binding capacity (TIBC), and elevated serum ferritin levels. The pathophysiology of this anemia is driven by hepatic overproduction of which regulatory peptide that binds to and degrades ferroportin?",
  opts: [
    "Transferrin",
    "HFE protein",
    "Hepcidin",
    "Ceruloplasmin"
  ],
  ans: 2,
  exp: "Hepcidin is a 25-amino-acid peptide hormone synthesized by hepatocytes in response to elevated systemic iron stores and inflammatory cytokines, notably Interleukin-6 (IL-6). Hepcidin is the master negative regulator of systemic iron homeostasis. It binds to the basolateral iron exporter ferroportin-1 on enterocytes and macrophages, inducing its internalization and lysosomal degradation. This traps iron inside enterocytes and reticuloendothelial macrophages, preventing intestinal absorption and systemic recycling, leading to the hallmark laboratory profile of Anemia of Chronic Disease (low serum iron, low TIBC/transferrin, high/normal ferritin).",
  wrongExp: "• <strong>Option A (Transferrin):</strong> Transferrin is the glycoprotein responsible for transporting Fe3+ in the circulation, not for degrading ferroportin; its level (TIBC) decreases in inflammation.<br>• <strong>Option B (HFE protein):</strong> HFE is an upstream membrane protein that modulates hepcidin expression; mutations in HFE cause hereditary hemochromatosis by inappropriately downregulating hepcidin.<br>• <strong>Option D (Ceruloplasmin):</strong> Ceruloplasmin is a copper-dependent ferroxidase that oxidizes Fe2+ to Fe3+ to facilitate binding to transferrin, but it does not degrade ferroportin."
},
{
  id: 2007,
  subject: "Physiology",
  topic: "Hematology",
  chapter: "Hemostasis & Coagulation Cascade",
  level: "Moderate",
  q: "A 12-year-old boy experiences severe hemarthrosis of the right knee following minor trauma during a soccer match. Laboratory evaluation shows an isolated prolongation of the activated partial thromboplastin time (aPTT), while the prothrombin time (PT), thrombin time (TT), and platelet count are normal. Mixing studies show correction of the aPTT with normal plasma. Deficiency of which coagulation factor activates factor X within the intrinsic tenase complex?",
  opts: [
    "Factor VII",
    "Factor VIII",
    "Factor XIII",
    "Factor V"
  ],
  ans: 1,
  exp: "The intrinsic tenase complex is composed of activated Factor IX (FIXa) as the enzyme, activated Factor VIII (FVIIIa) as the cofactor, calcium ions, and a negatively charged phospholipid membrane surface. This complex converts Factor X to its active form, FXa. A congenital deficiency of Factor VIII (Hemophilia A) impairs intrinsic tenase formation, resulting in an isolated prolongation of the aPTT (which assesses the intrinsic and common pathways: XII, XI, IX, VIII, X, V, II, and fibrinogen) while PT (extrinsic pathway: VII, tissue factor) and platelet count remain entirely normal.",
  wrongExp: "• <strong>Option A (Factor VII):</strong> Factor VII is the primary enzymatic component of the extrinsic pathway (extrinsic tenase complex with Tissue Factor); its deficiency prolongs the PT, not the aPTT.<br>• <strong>Option C (Factor XIII):</strong> Factor XIII is a transglutaminase that cross-links fibrin polymers into a stable clot; its deficiency does not prolong either PT or aPTT (clot solubility test in 5M urea is used for diagnosis).<br>• <strong>Option D (Factor V):</strong> Factor V is a cofactor in the common prothrombinase complex (with FXa); its deficiency prolongs BOTH the PT and the aPTT."
},
{
  id: 2008,
  subject: "Physiology",
  topic: "Hematology",
  chapter: "Platelet Physiology & Aggregation",
  level: "Moderate",
  q: "Endothelial injury exposes subendothelial collagen, initiating primary hemostasis. Which glycoprotein receptor complex on the platelet surface binds directly to subendothelial von Willebrand factor (vWF) under high shear stress conditions, and what clinical disorder results from its congenital absence?",
  opts: [
    "Glycoprotein IIb/IIIa (alpha-IIb-beta-3) — Glanzmann thrombasthenia",
    "Glycoprotein Ib-IX-V complex — Bernard-Soulier syndrome",
    "Glycoprotein VI — Storage pool disease",
    "P2Y12 purinergic receptor — Gray platelet syndrome"
  ],
  ans: 1,
  exp: "Primary hemostatic platelet adhesion under high shear stress conditions (e.g., in arterioles and stenotic microvasculature) requires the interaction between the subendothelial matrix-bound von Willebrand Factor (vWF) and the platelet membrane Glycoprotein Ib-IX-V (GpIb-IX-V) receptor complex. Congenital deficiency or dysfunction of the GpIb-IX-V complex causes Bernard-Soulier syndrome, an autosomal recessive bleeding disorder characterized by mucocutaneous bleeding, thrombocytopenia, giant platelets on peripheral smear, and absent ristocetin-induced platelet aggregation that does not correct with normal plasma.",
  wrongExp: "• <strong>Option A (Glycoprotein IIb/IIIa — Glanzmann thrombasthenia):</strong> GpIIb/IIIa mediates platelet-to-platelet aggregation by binding fibrinogen (and secondary vWF); its absence causes Glanzmann thrombasthenia with normal platelet counts and morphology.<br>• <strong>Option C (Glycoprotein VI — Storage pool disease):</strong> GpVI binds collagen directly (low shear), while storage pool disease involves defects in platelet alpha or dense granules.<br>• <strong>Option D (P2Y12 purinergic receptor — Gray platelet syndrome):</strong> P2Y12 is an ADP G-protein coupled receptor (targeted by clopidogrel), whereas Gray platelet syndrome is a congenital deficiency of platelet alpha-granules."
},
{
  id: 2009,
  subject: "Physiology",
  topic: "Hematology",
  chapter: "Blood Groups & Transfusion Physiology",
  level: "Easy",
  q: "A healthy 28-year-old Rh-negative (D-negative) woman delivers her first child, who is Rh-positive (D-positive). The mother did not receive anti-D immunoglobulin (RhoGAM) postpartum. During her second pregnancy with another Rh-positive fetus, which class of maternally produced anti-D antibodies crosses the placenta to cause hemolytic disease of the fetus and newborn (erythroblastosis fetalis)?",
  opts: [
    "Pentameric IgM",
    "Monomeric IgG",
    "Secretory IgA",
    "Monomeric IgE"
  ],
  ans: 1,
  exp: "The Rh(D) antigen is a transmembrane protein. Exposure of an Rh-negative mother to fetal Rh-positive red cells (feto-maternal hemorrhage during delivery) elicits a primary immune response producing IgM antibodies, followed by class switching to high-affinity IgG antibodies (predominantly IgG1 and IgG3). During subsequent pregnancies with an Rh-positive fetus, maternal anti-D IgG antibodies bind to the neonatal Fc receptor (FcRn) on the syncytiotrophoblast and are actively transcytosed across the placental barrier into the fetal circulation, where they opsonize fetal D-positive erythrocytes for destruction by splenic macrophages.",
  wrongExp: "• <strong>Option A (Pentameric IgM):</strong> IgM antibodies (e.g., natural ABO isohemagglutinins) are large pentamers that cannot cross the placental barrier and do not mediate Rh erythroblastosis fetalis.<br>• <strong>Option C (Secretory IgA):</strong> Secretory IgA is present in mucosal secretions and breast milk (colostrum) providing mucosal immunity, but does not cross the placenta.<br>• <strong>Option D (Monomeric IgE):</strong> IgE mediates type I hypersensitivity and antiparasitic responses via high-affinity Fc-epsilon-RI receptors on mast cells and does not cross the placenta."
},
{
  id: 2010,
  subject: "Physiology",
  topic: "Hematology",
  chapter: "Leukocytes & Cell-Mediated Immunity",
  level: "Hard",
  q: "During the respiratory burst of phagocytes, activated neutrophils rapidly increase their oxygen consumption to generate reactive oxygen species (ROS) capable of killing engulfed bacteria. Which enzyme catalyzes the initial, rate-limiting conversion of molecular oxygen into superoxide radicals (O2•-)?",
  opts: [
    "Myeloperoxidase (MPO)",
    "Superoxide dismutase (SOD)",
    "NADPH oxidase",
    "Catalase"
  ],
  ans: 2,
  exp: "The respiratory (oxidative) burst in neutrophils and macrophages is initiated by the multisubunit enzyme complex NADPH oxidase (specifically NOX2 / gp91phox complex). Activated NADPH oxidase transfers electrons from cytosolic NADPH to molecular oxygen within the phagolysosome: 2 O2 + NADPH -> 2 O2•- + NADP+ + H+. The generated superoxide radical (O2•-) is subsequently dismutated by Superoxide Dismutase (SOD) into hydrogen peroxide (H2O2). Myeloperoxidase (MPO) then combines H2O2 with chloride (Cl-) to form hypochlorous acid (HOCl, bleach). Genetic deficiency of NADPH oxidase subunits causes Chronic Granulomatous Disease (CGD).",
  wrongExp: "• <strong>Option A (Myeloperoxidase):</strong> MPO acts downstream in the cascade, utilizing H2O2 and Cl- to form hypochlorous acid (HOCl); its deficiency does not affect the production of superoxide.<br>• <strong>Option B (Superoxide dismutase):</strong> SOD catalyzes the conversion of superoxide radicals into hydrogen peroxide and oxygen (2 O2•- + 2 H+ -> H2O2 + O2), acting after NADPH oxidase.<br>• <strong>Option D (Catalase):</strong> Catalase is an antioxidant enzyme found in peroxisomes and catalase-positive organisms that degrades H2O2 into H2O and O2, neutralizing ROS."
},
{
  id: 2011,
  subject: "Physiology",
  topic: "Cardiovascular System",
  chapter: "Cardiac Electrophysiology & Action Potentials",
  level: "Easy",
  q: "Electrophysiological recording from a ventricular myocardial contractile cell shows a prolonged action potential of approximately 250 milliseconds with a prominent plateau phase (Phase 2). Which ion channels are simultaneously active during Phase 2 to maintain this near-zero net membrane current?",
  opts: [
    "Inward fast Na+ current (INa) balanced by outward K+ current (Ito)",
    "Inward L-type Ca2+ current (ICa,L) balanced by outward delayed rectifier K+ currents (IKr, IKs)",
    "Inward funny current (If) balanced by outward leak K+ current (IK1)",
    "Inward T-type Ca2+ current (ICa,T) balanced by inward-rectifier K+ current (IK1)"
  ],
  ans: 1,
  exp: "The plateau phase (Phase 2) of the ventricular myocardial action potential is characterized by a balance between depolarizing inward currents and repolarizing outward currents, resulting in a prolonged refractory period. The principal inward depolarizing current is mediated by voltage-gated L-type Ca2+ channels (Cav1.2, carrying ICa,L, through the dihydropyridine receptors). This is electrically balanced by outward K+ currents moving through delayed rectifier potassium channels (slow and rapid components: IKs and IKr). As L-type Ca2+ channels slowly inactivate and delayed rectifier K+ conductance increases, Phase 3 rapid repolarization ensues.",
  wrongExp: "• <strong>Option A (Inward fast Na+ current balanced by outward K+ current):</strong> Fast Na+ channels mediate the rapid upstroke (Phase 0) and are completely inactivated within 1-2 milliseconds by closure of their h-gates.<br>• <strong>Option C (Inward funny current balanced by outward leak K+ current):</strong> The funny current (If) is carried by hyperpolarization-activated cyclic nucleotide-gated (HCN) channels in pacemaker tissue (SA/AV node) during Phase 4 prepotential, not in ventricular myocytes.<br>• <strong>Option D (Inward T-type Ca2+ current balanced by inward-rectifier K+ current):</strong> T-type Ca2+ channels open at more negative potentials in pacemaker cells during Phase 4, whereas IK1 maintains resting membrane potential (Phase 4) and closes during Phase 2."
},
{
  id: 2012,
  subject: "Physiology",
  topic: "Cardiovascular System",
  chapter: "Cardiac Cycle & Wiggers Diagram",
  level: "Moderate",
  q: "On a standard Wiggers diagram, which phase of the left ventricular cardiac cycle begins immediately with the closure of the mitral valve and ends just prior to the opening of the aortic valve?",
  opts: [
    "Rapid ventricular ejection",
    "Isovolumetric contraction",
    "Isovolumetric relaxation",
    "Reduced ventricular ejection"
  ],
  ans: 1,
  exp: "Isovolumetric contraction represents the initial phase of ventricular systole. It begins with the closure of the atrioventricular valves (mitral and tricuspid), which produces the first heart sound (S1). At this point, ventricular pressure rises steeply above atrial pressure, but because left ventricular pressure has not yet exceeded aortic diastolic pressure (~80 mmHg), the aortic valve remains closed. During this phase, all four cardiac valves are closed, so ventricular volume remains constant while intraventricular pressure spikes dramatically. It ends the instant left ventricular pressure exceeds aortic pressure, forcing the aortic valve to open.",
  wrongExp: "• <strong>Option A (Rapid ventricular ejection):</strong> Rapid ejection begins after the aortic valve opens and is characterized by a sharp decline in ventricular volume as blood rushes into the aorta.<br>• <strong>Option C (Isovolumetric relaxation):</strong> Isovolumetric relaxation occurs in early diastole, initiated by closure of the aortic valve (S2) and terminated by opening of the mitral valve.<br>• <strong>Option D (Reduced ventricular ejection):</strong> Reduced ejection occurs in late systole when ventricular pressure begins to decline and aortic blood flow slows down before aortic valve closure."
},
{
  id: 2013,
  subject: "Physiology",
  topic: "Cardiovascular System",
  chapter: "Hemodynamics & Vascular Resistance",
  level: "Moderate",
  q: "A 60-year-old male with generalized atherosclerosis has an eccentric atherosclerotic plaque in his right femoral artery that reduces the internal vessel lumen radius by 50% over a segment of 2 cm. According to Poiseuille's law (Resistance = 8ηL / πr^4), by what factor will the vascular resistance across this stenotic segment increase?",
  opts: [
    "2-fold",
    "4-fold",
    "8-fold",
    "16-fold"
  ],
  ans: 3,
  exp: "According to Poiseuille's equation, vascular resistance (R) is inversely proportional to the fourth power of the radius (r^4): R ∝ 1 / r^4. If the luminal radius is reduced by 50% (halved to 1/2 of its initial value, r/2), the resistance will change by a factor of 1 / (1/2)^4 = 1 / (1/16) = 16-fold. Because resistance rises 16 times, to maintain the same blood flow through that segment, the pressure gradient (ΔP = Q * R) would theoretically need to increase 16-fold, which illustrates why severe luminal narrowing causes profound distal ischemia.",
  wrongExp: "• <strong>Option A (2-fold):</strong> A 2-fold increase would occur if resistance were inversely proportional to radius to the first power (1/r).<br>• <strong>Option B (4-fold):</strong> A 4-fold increase would occur if resistance were inversely proportional to cross-sectional area (r^2).<br>• <strong>Option C (8-fold):</strong> An 8-fold increase would correspond to an inverse cubic relationship (r^3), which does not describe Poiseuille laminar flow."
},
{
  id: 2014,
  subject: "Physiology",
  topic: "Cardiovascular System",
  chapter: "Arterial Baroreceptor Reflex",
  level: "Easy",
  q: "A healthy 24-year-old medical student abruptly stands up from a supine posture after resting for 1 hour. Gravitational pooling of blood in the lower extremities transiently decreases venous return, stroke volume, and arterial blood pressure. Which autonomic reflex response is immediately orchestrated by the medullary vasomotor center?",
  opts: [
    "Increased firing from carotid sinus nerve -> Increased parasympathetic outflow -> Bradycardia",
    "Decreased firing from carotid sinus nerve (Hering's nerve) -> Decreased inhibition of rostral ventrolateral medulla (RVLM) -> Tachycardia and vasoconstriction",
    "Increased firing from aortic depressor nerve -> Decreased sympathetic tone -> Peripheral vasodilation",
    "Decreased firing from cardiopulmonary receptors -> Selective renal vasodilation and natriuresis"
  ],
  ans: 1,
  exp: "Upon standing, venous return drops, reducing cardiac output and mean arterial pressure (MAP). Carotid sinus baroreceptors detect this decrease in stretch, leading to decreased afferent firing along Hering's nerve (glossopharyngeal nerve, CN IX) to the nucleus tractus solitarii (NTS) in the medulla. Reduced NTS stimulation decreases its excitatory output to the caudal ventrolateral medulla (CVLM), which in turn disinhibits (activates) the rostral ventrolateral medulla (RVLM). The RVLM increases sympathetic efferent outflow to the heart (increasing heart rate and contractility) and systemic arterioles/veins (producing vasoconstriction and venoconstriction), while simultaneously decreasing vagal parasympathetic output to the SA node, restoring arterial pressure.",
  wrongExp: "• <strong>Option A (Increased firing from carotid sinus nerve -> Increased parasympathetic outflow):</strong> Increased firing occurs in response to an increase in blood pressure (hypertension), stimulating the vagus to produce bradycardia.<br>• <strong>Option C (Increased firing from aortic depressor nerve -> Decreased sympathetic tone):</strong> The aortic arch baroreceptors decrease their firing rate via the vagus nerve (CN X) during hypotension.<br>• <strong>Option D (Decreased firing from cardiopulmonary receptors -> Selective renal vasodilation):</strong> Decreased cardiopulmonary receptor stretch increases renal sympathetic nerve activity, causing renal vasoconstriction and renin release, not vasodilation."
},
{
  id: 2015,
  subject: "Physiology",
  topic: "Cardiovascular System",
  chapter: "Microcirculation & Starling Forces",
  level: "Hard",
  q: "A 55-year-old female with decompensated liver cirrhosis develops severe peripheral edema and ascites. Her plasma albumin level is 1.8 g/dL (normal: 3.5-5.0 g/dL). Measurement of microvascular pressures shows: Capillary hydrostatic pressure (Pc) = 28 mmHg, Interstitial fluid hydrostatic pressure (Pi) = 1 mmHg, Plasma colloid osmotic pressure (πc) = 12 mmHg, and Interstitial fluid colloid osmotic pressure (πi) = 3 mmHg. Assuming a reflection coefficient (σ) of 1.0, what is the net filtration pressure (NFP)?",
  opts: [
    "+8 mmHg",
    "+18 mmHg",
    "+22 mmHg",
    "-18 mmHg"
  ],
  ans: 1,
  exp: "The Starling equation defines Net Filtration Pressure (NFP) as: NFP = (Pc - Pi) - σ * (πc - πi). Substituting the given values: Pc - Pi = 28 - 1 = 27 mmHg. πc - πi = 12 - 3 = 9 mmHg. With σ = 1.0, NFP = 27 - 9 = +18 mmHg. The positive sign indicates a net outward driving force favoring fluid movement from the intravascular compartment into the interstitial space (filtration). Due to severe hypoalbuminemia from hepatic synthetic dysfunction, πc is markedly reduced (from normal ~25-28 mmHg down to 12 mmHg), shifting the balance strongly toward filtration and edema formation.",
  wrongExp: "• <strong>Option A (+8 mmHg):</strong> This would be calculated if πc was normal (~22 mmHg) or by an arithmetic error in subtracting hydrostatic from oncotic pressures.<br>• <strong>Option C (+22 mmHg):</strong> This results if the interstitial hydrostatic pressure (Pi) and interstitial oncotic pressure (πi) are omitted or miscalculated.<br>• <strong>Option D (-18 mmHg):</strong> A negative value indicates net fluid reabsorption, which would oppose edema formation."
},
{
  id: 2016,
  subject: "Physiology",
  topic: "Respiratory System",
  chapter: "Lung Mechanics & Compliance",
  level: "Easy",
  q: "A 32-week-gestation premature neonate develops severe tachypnea, grunting, and intercostal retractions shortly after birth. Arterial blood gas shows severe hypoxemia. Chest radiography demonstrates diffuse reticulogranular ground-glass opacities with air bronchograms. Which substance produced by alveolar Type II pneumocytes is deficient, and what is its primary physiological role?",
  opts: [
    "Dipalmitoylphosphatidylcholine (DPPC); Decreases alveolar surface tension, preventing atelectasis at low lung volumes",
    "Surfactant protein D; Enhances mucosal ciliary transport and mucociliary clearance",
    "Alpha-1 antitrypsin; Inhibits neutrophil elastase and prevents alveolar wall destruction",
    "Fibronectin; Increases alveolar capillary wall permeability to facilitate gas diffusion"
  ],
  ans: 0,
  exp: "Neonatal Respiratory Distress Syndrome (NRDS) is caused by a deficiency of pulmonary surfactant, which is synthesized by Type II pneumocytes beginning around week 24 of gestation but reaches mature levels around week 35. Surfactant is composed largely of dipalmitoylphosphatidylcholine (DPPC, lecithin), alongside surfactant proteins (SP-A, B, C, D). By inserting its hydrophobic fatty acyl tails into the air phase and hydrophilic heads into the aqueous lining phase, surfactant disrupts the cohesive intermolecular hydrogen bonding of water molecules at the air-liquid interface. According to the Law of Laplace (P = 2T / r), surfactant lowers surface tension (T) proportionately more in smaller alveoli than larger ones, equalizing collapsing pressures, preventing end-expiratory alveolar collapse (atelectasis), and markedly increasing lung compliance.",
  wrongExp: "• <strong>Option B (Surfactant protein D; Enhances mucosal ciliary transport):</strong> SP-D and SP-A are collectins that participate in innate immune defense and pathogen opsonization, but do not lower surface tension.<br>• <strong>Option C (Alpha-1 antitrypsin; Inhibits neutrophil elastase):</strong> Alpha-1 antitrypsin is a serpin antiprotease synthesized in the liver; its deficiency causes panacinar emphysema in adults, not neonatal atelectasis.<br>• <strong>Option D (Fibronectin; Increases alveolar capillary wall permeability):</strong> Fibronectin is an extracellular matrix glycoprotein; increasing capillary permeability would worsen pulmonary edema."
},
{
  id: 2017,
  subject: "Physiology",
  topic: "Respiratory System",
  chapter: "Oxygen-Hemoglobin Dissociation Curve",
  level: "Moderate",
  q: "A 22-year-old collegiate athlete is undergoing high-intensity treadmill exercise testing. Blood drawn from the femoral vein of his working quadriceps muscle shows an elevated PCO2, decreased pH, elevated temperature, and an elevated concentration of 2,3-bisphosphoglycerate (2,3-BPG). How do these physiological changes alter the oxygen-hemoglobin dissociation curve and the P50 value?",
  opts: [
    "Leftward shift of the curve and decreased P50",
    "Rightward shift of the curve and increased P50",
    "Rightward shift of the curve and decreased P50",
    "Leftward shift of the curve and unchanged P50"
  ],
  ans: 1,
  exp: "In actively metabolizing skeletal muscle, increased lactic acid and CO2 production lower tissue pH (the Bohr effect), while metabolic heat production raises temperature, and RBC glycolysis generates 2,3-BPG. These allosteric effectors bind preferentially to the deoxygenated (T, taut) state of hemoglobin, stabilizing it and decreasing hemoglobin's oxygen affinity. This shifts the oxygen-hemoglobin dissociation curve to the right. A rightward shift means that a higher partial pressure of oxygen is required to achieve 50% hemoglobin saturation, which by definition increases the P50 (normal: ~26.8 mmHg). This physiological adaptation facilitates the unloading of oxygen from oxyhemoglobin into oxygen-starved peripheral tissues.",
  wrongExp: "• <strong>Option A (Leftward shift of the curve and decreased P50):</strong> A leftward shift indicates increased O2 affinity and a decreased P50, caused by hypothermia, alkalosis, decreased PCO2, decreased 2,3-BPG, carboxyhemoglobin, and fetal hemoglobin (HbF).<br>• <strong>Option C (Rightward shift of the curve and decreased P50):</strong> A rightward shift corresponds to an increased P50, not a decreased P50.<br>• <strong>Option D (Leftward shift of the curve and unchanged P50):</strong> Any lateral shift of the curve directly changes the P50 value."
},
{
  id: 2018,
  subject: "Physiology",
  topic: "Respiratory System",
  chapter: "Ventilation-Perfusion (V/Q) Dynamics",
  level: "Moderate",
  q: "A 68-year-old postoperative patient suddenly develops acute dyspnea and pleuritic chest pain. CT pulmonary angiography reveals a massive saddle pulmonary thromboembolism completely occluding the left main pulmonary artery. What are the expected alveolar gas partial pressures (PAO2 and PACO2) in the non-perfused left lung (V/Q = infinity)?",
  opts: [
    "PAO2 = 40 mmHg, PACO2 = 45 mmHg",
    "PAO2 = 100 mmHg, PACO2 = 40 mmHg",
    "PAO2 = 150 mmHg, PACO2 = 0 mmHg",
    "PAO2 = 0 mmHg, PACO2 = 100 mmHg"
  ],
  ans: 2,
  exp: "A complete vascular occlusion with continued alveolar ventilation results in alveolar dead space, where the ventilation-perfusion ratio approaches infinity (V/Q = ∞). Because there is zero capillary blood flow (Q = 0) through the left lung, no oxygen is extracted from the alveoli into the blood, and no carbon dioxide is added from the blood into the alveoli. Consequently, with each breath of humidified room air at sea level, the gas within the non-perfused alveoli equilibrates with inspired tracheal air: PAO2 = PIO2 = 0.21 * (760 - 47) ≈ 150 mmHg, and PACO2 = PICO2 ≈ 0 mmHg.",
  wrongExp: "• <strong>Option A (PAO2 = 40 mmHg, PACO2 = 45 mmHg):</strong> These are the partial pressures of mixed venous blood, which occur in a pure shunt (V/Q = 0), where perfusion continues in the complete absence of ventilation (e.g., complete airway obstruction).<br>• <strong>Option B (PAO2 = 100 mmHg, PACO2 = 40 mmHg):</strong> These represent normal physiological alveolar gas values under normal ventilation-perfusion matching (V/Q ≈ 0.8).<br>• <strong>Option D (PAO2 = 0 mmHg, PACO2 = 100 mmHg):</strong> These are non-physiological values that do not occur in either dead space or shunt states."
},
{
  id: 2019,
  subject: "Physiology",
  topic: "Respiratory System",
  chapter: "Control of Breathing",
  level: "Hard",
  q: "An experimental animal undergoes bilateral surgical transection of the vagus nerves (CN X) along with a mid-pontine brainstem transection separating the rostral pons (pneumotaxic center) from the caudal pons (apneustic center). What respiratory breathing pattern will this animal exhibit?",
  opts: [
    "Rapid, shallow tachypnea",
    "Apneusis (prolonged, sustained inspiratory spasms punctuated by brief expirations)",
    "Cheyne-Stokes breathing with crescendo-decrescendo hyperpnea",
    "Complete and immediate cessation of all respiratory efforts (apnea)"
  ],
  ans: 1,
  exp: "Breathing rhythm is generated in the medulla (pre-Bötzinger complex) and modulated by pontine centers and vagal afferents. The pneumotaxic center (located in the parabrachial and Kölliker-Fuse nuclei of the rostral pons) normally sends rhythmic inhibitory signals to the apneustic center (in the caudal pons) and dorsal respiratory group to terminate inspiration (the 'off-switch' mechanism). Similarly, pulmonary stretch receptors carried by the vagus nerve inhibit inspiration during lung inflation (the Hering-Breuer reflex). When the rostral pons is severed (removing pneumotaxic inhibition) AND both vagus nerves are cut (removing pulmonary stretch inhibition), the uninhibited apneustic center drives unconstrained inspiration, resulting in apneusis.",
  wrongExp: "• <strong>Option A (Rapid, shallow tachypnea):</strong> Rapid shallow breathing occurs with pulmonary C-fiber stimulation (J-receptor activation) or high pneumotaxic output.<br>• <strong>Option C (Cheyne-Stokes breathing):</strong> Cheyne-Stokes respiration is characterized by alternating periods of hyperventilation and apnea, seen in severe congestive heart failure and bilateral cortical/subcortical brain injury.<br>• <strong>Option D (Complete and immediate cessation of all respiratory efforts):</strong> Immediate respiratory arrest occurs only if transection is performed below the medulla (at or below the cervicomedullary junction), severing motor outflow to the phrenic and intercostal motor neurons."
},
{
  id: 2020,
  subject: "Physiology",
  topic: "Respiratory System",
  chapter: "High-Altitude Adaptation",
  level: "Moderate",
  q: "A mountaineer ascends to the summit of Mount Kilimanjaro (5,895 meters; barometric pressure ~380 mmHg). Within 24 hours of arrival, peripheral chemoreceptor stimulation triggers hyperventilation. Which compensatory renal mechanism develops over the next 48 to 72 hours to partially restore arterial pH toward normal?",
  opts: [
    "Increased tubular secretion of H+ via the Na+/H+ exchanger (NHE3)",
    "Increased urinary excretion of HCO3- accompanied by decreased ammonium (NH4+) excretion",
    "Increased renal production of erythropoietin suppressing carbonic anhydrase",
    "Increased reabsorption of filtered HCO3- by proximal convoluted tubule cells"
  ],
  ans: 1,
  exp: "At high altitude, hypobaric hypoxia stimulates carotid and aortic body peripheral chemoreceptors, driving acute hyperventilation. The excessive exhalation of CO2 causes a sharp decline in PaCO2 (hypocapnia), creating a respiratory alkalosis (elevated arterial pH). In response, the kidneys initiate metabolic compensation over 48 to 72 hours by downregulating apical Na+/H+ exchangers and basolateral Na+-HCO3- cotransporters in the proximal tubule. This suppresses HCO3- reabsorption, resulting in bicarbonaturia (excretion of bicarbonate in urine), and decreases titratable acid and NH4+ excretion. The drop in plasma [HCO3-] lowers pH back toward normal (partially compensated respiratory alkalosis).",
  wrongExp: "• <strong>Option A (Increased tubular secretion of H+ via NHE3):</strong> Increasing H+ secretion would generate new HCO3- and worsen the alkalosis; it is the physiological compensation for respiratory acidosis, not alkalosis.<br>• <strong>Option C (Increased renal production of erythropoietin suppressing carbonic anhydrase):</strong> Erythropoietin stimulates erythrocyte production to boost oxygen-carrying capacity, but does not regulate renal acid-base transport proteins.<br>• <strong>Option D (Increased reabsorption of filtered HCO3- by PCT):</strong> Proximal tubule HCO3- reabsorption is decreased during respiratory alkalosis to eliminate base excess."
},
{
  id: 2021,
  subject: "Physiology",
  topic: "Renal System",
  chapter: "Glomerular Filtration Rate & Autoregulation",
  level: "Moderate",
  q: "In an experimental animal, selective pharmacological constriction of the efferent arterioles of the glomeruli is induced while renal arterial perfusion pressure is held constant. How will this change affect Glomerular Capillary Hydrostatic Pressure (PGC), Glomerular Filtration Rate (GFR), and Renal Blood Flow (RBF)?",
  opts: [
    "Decreased PGC, Decreased GFR, Increased RBF",
    "Increased PGC, Increased GFR, Decreased RBF",
    "Decreased PGC, Increased GFR, Decreased RBF",
    "Increased PGC, Decreased GFR, Increased RBF"
  ],
  ans: 1,
  exp: "The efferent arteriole lies downstream of the glomerular capillary bed. Constriction of the efferent arteriole (such as that mediated by low-dose Angiotensin II) increases downstream resistance, which causes blood to 'back up' within the glomerulus, raising the glomerular capillary hydrostatic pressure (PGC). Because net filtration pressure is driven directly by PGC, the Glomerular Filtration Rate (GFR) initially increases. Simultaneously, because total renal vascular resistance (R_afferent + R_efferent) has increased, total Renal Blood Flow (RBF = ΔP / R) decreases. Consequently, the Filtration Fraction (FF = GFR / RPF) rises significantly.",
  wrongExp: "• <strong>Option A (Decreased PGC, Decreased GFR, Increased RBF):</strong> This profile is characteristic of selective afferent arteriolar constriction (e.g., mediated by high-dose norepinephrine or NSAID-induced prostaglandin inhibition).<br>• <strong>Option C (Decreased PGC, Increased GFR, Decreased RBF):</strong> GFR cannot increase if PGC decreases, as PGC is the primary forward driving force of filtration.<br>• <strong>Option D (Increased PGC, Decreased GFR, Increased RBF):</strong> RBF must decrease when arteriolar resistance increases at constant arterial pressure."
},
{
  id: 2022,
  subject: "Physiology",
  topic: "Renal System",
  chapter: "Proximal Tubule Transport Mechanisms",
  level: "Easy",
  q: "Under normal physiological conditions, more than 65% of filtered water, sodium, chloride, and potassium, and virtually 100% of filtered glucose and amino acids, are reabsorbed in the proximal convoluted tubule (PCT). What apical membrane transport protein mediates the secondary active reabsorption of the bulk of filtered glucose in the early S1 segment of the PCT?",
  opts: [
    "Glucose transporter 1 (GLUT1)",
    "Sodium-glucose cotransporter 2 (SGLT2)",
    "Sodium-glucose cotransporter 1 (SGLT1)",
    "Glucose transporter 4 (GLUT4)"
  ],
  ans: 1,
  exp: "In the early (S1) segment of the renal proximal convoluted tubule, filtered D-glucose is reabsorbed from the tubular lumen across the brush-border membrane by the Sodium-Glucose Cotransporter 2 (SGLT2, encoded by SLC5A2). SGLT2 is a low-affinity, high-capacity symporter that couples the downhill entry of 1 Na+ ion along its electrochemical gradient to the uphill transport of 1 glucose molecule. It is responsible for approximately 90% of total renal glucose reabsorption. The remaining 10% is reabsorbed in the late S3 segment by the high-affinity, low-capacity SGLT1 (which cotransports 2 Na+ with 1 glucose). SGLT2 inhibitors (gliflozins) block this transporter to promote glucosuria in type 2 diabetes.",
  wrongExp: "• <strong>Option A (Glucose transporter 1 - GLUT1):</strong> GLUT1 is a facilitated diffusion uniporter present on red blood cells and the blood-brain barrier, not the apical brush border of early PCT.<br>• <strong>Option C (Sodium-glucose cotransporter 1 - SGLT1):</strong> SGLT1 reabsorbs only ~10% of glucose in the late S3 segment of the PCT (and mediates glucose/galactose absorption in the small intestine).<br>• <strong>Option D (Glucose transporter 4 - GLUT4):</strong> GLUT4 is an insulin-sensitive glucose transporter expressed on skeletal muscle and adipocytes."
},
{
  id: 2023,
  subject: "Physiology",
  topic: "Renal System",
  chapter: "Tubuloglomerular Feedback & Juxtaglomerular Apparatus",
  level: "Hard",
  q: "An increase in systemic arterial blood pressure causes a transient surge in single-nephron GFR, delivering an increased load of NaCl to the macula densa cells of the juxtaglomerular apparatus. Which signaling cascade is initiated by the macula densa to return single-nephron GFR to baseline (Tubuloglomerular Feedback)?",
  opts: [
    "Uptake of NaCl via apical NKCC2 -> Basolateral release of adenosine/ATP -> Activation of A1 receptors on extraglomerular mesangial and afferent arteriolar vascular smooth muscle -> Afferent vasoconstriction",
    "Uptake of NaCl via apical ENaC -> Release of Nitric Oxide -> Vasodilation of the afferent arteriole",
    "Uptake of NaCl via apical SGLT2 -> Release of Prostaglandin E2 -> Renin secretion from granular cells",
    "Activation of calcium-sensing receptors -> Parathyroid hormone release -> Efferent arteriolar dilation"
  ],
  ans: 0,
  exp: "Tubuloglomerular feedback (TGF) is an autoregulatory mechanism. When GFR rises, increased delivery of Na+ and Cl- to the thick ascending limb is sensed by the macula densa via increased transport through apical Na+-K+-2Cl- cotransporters (NKCC2). Increased intracellular Na+ stimulates the basolateral Na+/K+-ATPase, consuming ATP and generating adenosine, which along with ATP is released into the interstitial space. Adenosine binds to Gi-coupled Adenosine A1 receptors on extraglomerular mesangial cells and afferent arteriolar vascular smooth muscle cells, elevating intracellular Ca2+ and triggering afferent arteriolar constriction. This increases afferent resistance, lowering PGC and bringing GFR back to baseline.",
  wrongExp: "• <strong>Option B (Uptake of NaCl via apical ENaC -> Release of Nitric Oxide):</strong> Macula densa uptake occurs via NKCC2, not ENaC. Furthermore, NO causes vasodilation (which occurs when NaCl delivery drops), opposing the corrective vasoconstriction needed.<br>• <strong>Option C (Uptake of NaCl via apical SGLT2 -> Release of PGE2):</strong> SGLT2 is located in the PCT, not the macula densa. PGE2 is released when luminal NaCl delivery is low to stimulate renin release.<br>• <strong>Option D (Activation of CaSR -> PTH release):</strong> CaSR and PTH regulate systemic calcium balance in the parathyroid glands and distal nephron, not autoregulatory tubuloglomerular feedback."
},
{
  id: 2024,
  subject: "Physiology",
  topic: "Renal System",
  chapter: "Countercurrent Mechanism & Medullary Hyperosmolarity",
  level: "Moderate",
  q: "The renal countercurrent multiplier system creates an axial hyperosmotic medullary interstitium reaching up to 1200 mOsm/L at the hairpin turn of the inner medulla. Which of the following transport characteristics of the loop of Henle is essential for establishing this gradient?",
  opts: [
    "Active transport of NaCl out of the thin descending limb, which is completely impermeable to water",
    "High water permeability in the thin descending limb, accompanied by active, water-impermeable NaCl transport in the thick ascending limb",
    "High urea permeability in the thick ascending limb, accompanied by active water extrusion in the collecting duct",
    "Active reabsorption of sodium and water in equimolar amounts across both limbs of Henle's loop"
  ],
  ans: 1,
  exp: "The countercurrent multiplier system requires two distinct physical characteristics of the opposing limbs of the loop of Henle: (1) The thin descending limb is highly permeable to water (via aquaporin-1 channels) but relatively impermeable to NaCl and urea; as tubular fluid descends into the hypertonic medulla, water leaves by osmosis, concentrating luminal solutes. (2) The thick ascending limb (TAL) is completely impermeable to water, but actively pumps NaCl out of the lumen into the surrounding interstitium via the apical NKCC2 cotransporter. This active salt reabsorption without water generates a 'single effect' osmotic gradient of ~200 mOsm/L at each horizontal level, which is multiplied longitudinally along the countercurrent flow path to achieve medullary interstitial hyperosmolarity of up to 1200 mOsm/L.",
  wrongExp: "• <strong>Option A (Active transport of NaCl out of the thin descending limb...):</strong> The thin descending limb does not actively transport NaCl and is highly permeable to water.<br>• <strong>Option C (High urea permeability in the thick ascending limb...):</strong> The thick ascending limb is impermeable to both water and urea; urea reabsorption occurs in the inner medullary collecting duct via UT-A1/UT-A3 transporters under ADH control.<br>• <strong>Option D (Active reabsorption of sodium and water in equimolar amounts...):</strong> Equimolar reabsorption of Na+ and water (isobaric/isosmotic reabsorption) occurs in the proximal tubule, which does not generate an osmotic gradient."
},
{
  id: 2025,
  subject: "Physiology",
  topic: "Renal System",
  chapter: "Acid-Base Regulation & Net Acid Excretion",
  level: "Hard",
  q: "A 48-year-old male with severe diabetic ketoacidosis has an arterial blood pH of 7.15, PaCO2 of 24 mmHg, and serum HCO3- of 8 mEq/L. In response to this severe metabolic acidosis, which renal mechanism accounts for the greatest quantitative increase in net acid excretion (NAE = [UNH4+ * V] + [UT.A. * V] - [UHCO3- * V])?",
  opts: [
    "Increased tubular secretion of free, unbuffered hydrogen ions lowering urine pH to 2.0",
    "Marked upregulation of proximal tubular glutamine metabolism and ammonium (NH4+) excretion",
    "Increased urinary excretion of filtered sodium biphosphate (titratable acid) exceeding 500 mEq/day",
    "Downregulation of the collecting duct H+-ATPase pump"
  ],
  ans: 1,
  exp: "Net acid excretion (NAE) by the kidneys consists of three components: NAE = (U_NH4+ * V) + (U_TA * V) - (U_HCO3- * V). Under normal conditions, titratable acidity (primarily buffered by dibasic phosphate, HPO4^2- + H+ -> H2PO4-) accounts for about one-third to one-half of acid excretion, but its capacity is strictly limited by the amount of filtered phosphate. In chronic or severe metabolic acidosis, the primary adaptive response is a massive upregulation of renal ammoniagenesis in the proximal tubule. Proximal tubular cells metabolize glutamine into 2 NH4+ and 2 new HCO3- molecules. The NH4+ is secreted into the tubular lumen (via NHE3 substituting for H+), while the newly formed HCO3- is returned to the blood. Ammonium excretion can increase from a basal 30-40 mEq/day up to 300-500 mEq/day, providing the vast majority of net acid excretion during severe acidosis.",
  wrongExp: "• <strong>Option A (Increased tubular secretion of free H+ lowering urine pH to 2.0):</strong> The minimum achievable physiological urine pH is ~4.5; the concentration of free, unbuffered H+ at pH 4.5 is only ~0.03 mEq/L, which is quantitatively negligible.<br>• <strong>Option C (Increased urinary excretion of filtered sodium biphosphate exceeding 500 mEq/day):</strong> Titratable acid excretion cannot exceed the daily filtered load of phosphate, which caps titratable acid at around 40-50 mEq/day.<br>• <strong>Option D (Downregulation of collecting duct H+-ATPase):</strong> Type A intercalated cells strongly upregulate apical H+-ATPase and H+/K+-ATPase to pump protons into the lumen during acidosis."
},
{
  id: 2026,
  subject: "Physiology",
  topic: "Gastrointestinal System",
  chapter: "Gastric Acid Secretion & Parietal Cells",
  level: "Easy",
  q: "A 45-year-old executive is diagnosed with a peptic ulcer. Endoscopy confirms mucosal erosion in the duodenal bulb. Gastric parietal cells synthesize and secrete hydrochloric acid (HCl) into the gastric lumen. Which primary active transport protein on the apical canalicular membrane of the parietal cell pumps protons into the lumen in exchange for potassium ions?",
  opts: [
    "Na+/K+-ATPase",
    "H+/K+-ATPase (proton pump)",
    "H+/Na+ exchanger",
    "Ca2+-ATPase"
  ],
  ans: 1,
  exp: "The gastric H+/K+-ATPase (proton pump) is a P-type primary active transport ATPase located on the apical canalicular membrane of gastric parietal (oxyntic) cells. Upon stimulation by histamine (via H2 receptors/cAMP), acetylcholine (via M3 receptors/Ca2+), and gastrin (via CCK_B receptors/Ca2+), tubulovesicles containing the pump fuse with the apical membrane. The pump hydrolyzes ATP to extrude H+ ions into the gastric lumen against a concentration gradient of more than a million-fold (pH ~0.8 to 1.0) in exchange for K+ ions transported into the cell. Potassium subsequently recycles back into the lumen via apical K+ channels, while basolateral HCO3-/Cl- exchangers (AE2) supply chloride for apical secretion via Cl- channels (CFTR/anoctamin).",
  wrongExp: "• <strong>Option A (Na+/K+-ATPase):</strong> The Na+/K+-ATPase is restricted to the basolateral membrane of the parietal cell, maintaining low intracellular Na+ and high K+.<br>• <strong>Option C (H+/Na+ exchanger):</strong> NHE is a secondary active antiporter involved in intracellular pH defense, not luminal acid secretion.<br>• <strong>Option D (Ca2+-ATPase):</strong> Plasma membrane or sarco/endoplasmic reticulum Ca2+-ATPases pump Ca2+ out of the cytosol to terminate signaling, not to acidify the gastric lumen."
},
{
  id: 2027,
  subject: "Physiology",
  topic: "Gastrointestinal System",
  chapter: "Gastrointestinal Motility & Migrating Motor Complex",
  level: "Moderate",
  q: "During the interdigestive (fasting) state, a cyclic pattern of smooth muscle contractions known as the Migrating Motor Complex (MMC) sweeps through the stomach and small intestine every 90 to 120 minutes to clear luminal debris and prevent small intestinal bacterial overgrowth. Which gastrointestinal peptide hormone triggers Phase III (burst of strong rhythmic propulsive contractions) of the MMC?",
  opts: [
    "Cholecystokinin (CCK)",
    "Motilin",
    "Secretin",
    "Vasoactive Intestinal Peptide (VIP)"
  ],
  ans: 1,
  exp: "The Migrating Motor Complex (MMC) is a cyclic, stereotypic motility pattern occurring during fasting in the stomach and small bowel, consisting of: Phase I (quiescence), Phase II (irregular baseline contractions), and Phase III (regular, high-amplitude propulsive peristaltic contractions lasting 5-10 minutes). Phase III functions as the 'intestinal housekeeper,' sweeping undigested food particles, sloughed enterocytes, and bacteria forward into the colon. The initiation of Phase III is driven by cyclical peaks in plasma levels of the 22-amino-acid peptide hormone motilin, which is secreted by endocrine M cells located in the mucosal crypts of the duodenum and jejunum. Ingestion of a meal abolishes the MMC, replacing it with feeding (mixing and segmentation) motility.",
  wrongExp: "• <strong>Option A (Cholecystokinin - CCK):</strong> CCK is secreted by I cells in response to fatty acids and amino acids in the fed state; it stimulates gallbladder contraction and pancreatic enzyme secretion while interrupting the MMC.<br>• <strong>Option C (Secretin):</strong> Secretin is released by S cells in response to duodenal acid to stimulate pancreatic bicarbonate secretion, not MMC cycling.<br>• <strong>Option D (Vasoactive Intestinal Peptide - VIP):</strong> VIP is an inhibitory enteric neurotransmitter that causes smooth muscle relaxation (including sphincter relaxation) and copious water/electrolyte secretion."
},
{
  id: 2028,
  subject: "Physiology",
  topic: "Gastrointestinal System",
  chapter: "Enterohepatic Circulation & Bile Secretion",
  level: "Moderate",
  q: "A 38-year-old female undergoes terminal ileal resection for Crohn's disease involving the distal 80 cm of the ileum. Several weeks postoperatively, she presents with chronic watery diarrhea and steatorrhea. Which apical transporter responsible for the reabsorption of >95% of conjugated bile salts was resected during her surgery?",
  opts: [
    "Apical Sodium-Dependent Bile Acid Transporter (ASBT / SLC10A2)",
    "Bile Salt Export Pump (BSEP / ABCB11)",
    "Multidrug Resistance-Associated Protein 2 (MRP2 / ABCC2)",
    "Organic Anion Transporting Polypeptide 1B1 (OATP1B1)"
  ],
  ans: 0,
  exp: "Bile salts undergo continuous enterohepatic circulation. While passive non-ionic absorption of unconjugated bile acids occurs along the jejunum and colon, the vast majority (>95%) of conjugated bile salts (tauro- and glyco-conjugates) are actively reabsorbed in the terminal ileum by the Apical Sodium-Dependent Bile Acid Transporter (ASBT, encoded by SLC10A2). Following ileal uptake, they bind to ileal lipid-binding protein (ILBP) and exit the basolateral membrane via OST-alpha/OST-beta into the portal venous circulation to return to the liver. Resection of the terminal ileum disrupts this cycle, causing bile salt malabsorption: unabsorbed bile salts spill into the colon to induce secretory diarrhea, and depletion of the bile acid pool leads to impaired micelle formation and steatorrhea.",
  wrongExp: "• <strong>Option B (Bile Salt Export Pump - BSEP / ABCB11):</strong> BSEP is an ATP-binding cassette transporter located on the canalicular membrane of hepatocytes that pumps bile salts into bile canaliculi, not an intestinal transporter.<br>• <strong>Option C (MRP2 / ABCC2):</strong> MRP2 is located on the hepatocyte canalicular membrane and secretes conjugated bilirubin into bile (defective in Dubin-Johnson syndrome).<br>• <strong>Option D (OATP1B1):</strong> OATP1B1 is located on the basolateral (sinusoidal) membrane of hepatocytes, mediating uptake of bilirubin and xenobiotics from portal blood."
},
{
  id: 2029,
  subject: "Physiology",
  topic: "Gastrointestinal System",
  chapter: "Digestion & Absorption of Nutrients",
  level: "Easy",
  q: "A 10-month-old infant is evaluated for chronic diarrhea, abdominal distension, and failure to thrive. Elimination of dairy products results in complete resolution of symptoms. An oral lactose tolerance test demonstrates failure of blood glucose to rise and elevated breath hydrogen levels. The deficient enzyme is normally anchored to the enterocyte apical microvillar membrane. What products does this brush-border enzyme yield upon cleaving lactose?",
  opts: [
    "Two molecules of D-glucose",
    "One molecule of D-glucose and one molecule of D-galactose",
    "One molecule of D-glucose and one molecule of D-fructose",
    "One molecule of D-galactose and one molecule of D-fructose"
  ],
  ans: 1,
  exp: "Lactase (lactase-phlorizin hydrolase) is an apical brush-border disaccharidase expressed on the microvilli of differentiated enterocytes in the small intestine. It hydrolyzes the dietary disaccharide lactose (found in milk and dairy products) into two absorbable monosaccharide units: one molecule of D-glucose and one molecule of D-galactose. These hexoses are subsequently transported across the apical membrane via SGLT1 (along with Na+) and extruded across the basolateral membrane into the portal circulation via GLUT2. In lactase deficiency, undigested lactose remains in the intestinal lumen, drawing water into the bowel (osmotic diarrhea) and undergoing anaerobic fermentation by colonic bacteria into short-chain fatty acids and hydrogen gas (breath hydrogen test).",
  wrongExp: "• <strong>Option A (Two molecules of D-glucose):</strong> Maltose and trehalose are cleaved into two molecules of D-glucose by maltase and trehalase, respectively.<br>• <strong>Option C (One molecule of D-glucose and one molecule of D-fructose):</strong> Sucrose is cleaved into D-glucose and D-fructose by the brush-border enzyme sucrase-isomaltase.<br>• <strong>Option D (One molecule of D-galactose and one molecule of D-fructose):</strong> This combination does not represent the hydrolytic cleavage product of any standard dietary disaccharide."
},
{
  id: 2030,
  subject: "Physiology",
  topic: "Gastrointestinal System",
  chapter: "Enteric Nervous System & Intestinal Reflexes",
  level: "Hard",
  q: "The peristaltic reflex ('law of the intestine') described by Bayliss and Starling occurs in response to mechanical distension of the gut lumen by a food bolus. Sensory intrinsic primary afferent neurons (IPANs) synapse with interneurons within the myenteric (Auerbach's) plexus to orchestrate coordinated motor responses. Which neurotransmitters mediate contraction of the circular smooth muscle upstream (orad) of the bolus and relaxation downstream (caudad) of the bolus, respectively?",
  opts: [
    "Upstream: Nitric oxide and VIP; Downstream: Acetylcholine and Substance P",
    "Upstream: Acetylcholine and Substance P; Downstream: Nitric oxide and Vasoactive Intestinal Peptide (VIP)",
    "Upstream: Norepinephrine; Downstream: Acetylcholine",
    "Upstream: Serotonin; Downstream: Dopamine"
  ],
  ans: 1,
  exp: "The peristaltic reflex is coordinated by the enteric nervous system within the myenteric (Auerbach's) plexus. Mucosal distension stimulates enterochromaffin (EC) cells to release serotonin (5-HT), which binds to 5-HT4/5-HT1P receptors on intrinsic primary afferent neurons (IPANs). IPANs project to ascending and descending interneurons: (1) Ascending (orad) excitatory motor neurons release Acetylcholine (ACh) and Substance P, causing contraction of the circular smooth muscle behind the bolus to propel it forward; (2) Descending (caudad) inhibitory motor neurons release Nitric Oxide (NO), Vasoactive Intestinal Peptide (VIP), and ATP, causing receptive relaxation of the circular smooth muscle ahead of the bolus to accommodate the advancing contents.",
  wrongExp: "• <strong>Option A (Upstream: Nitric oxide and VIP; Downstream: Acetylcholine and Substance P):</strong> This is inverted; receptive relaxation occurs downstream (caudad), while propulsive contraction occurs upstream (orad).<br>• <strong>Option C (Upstream: Norepinephrine; Downstream: Acetylcholine):</strong> Norepinephrine is a postganglionic sympathetic neurotransmitter that generally inhibits gut motility and constricts sphincters, rather than mediating the physiological enteric peristaltic wave.<br>• <strong>Option D (Upstream: Serotonin; Downstream: Dopamine):</strong> Serotonin acts as an initiating sensory trigger for IPANs, but the direct motor neuro-effector transmitters on circular smooth muscle are ACh/Substance P (excitatory) and NO/VIP (inhibitory)."
},
{
  id: 2031,
  subject: "Physiology",
  topic: "CNS & Special Senses",
  chapter: "Sensory Receptors & Somatosensory Pathways",
  level: "Easy",
  q: "A neurologist tests vibratory sense in a 54-year-old diabetic patient by placing a 128-Hz tuning fork over the first metatarsophalangeal joint. Which specialized, rapidly adapting, encapsulated mechanoreceptors located deep in the dermis and subcutaneous tissue are primarily responsible for detecting high-frequency mechanical vibrations?",
  opts: [
    "Merkel discs",
    "Pacinian (lamellar) corpuscles",
    "Ruffini endings",
    "Meissner corpuscles"
  ],
  ans: 1,
  exp: "Pacinian corpuscles (lamellar corpuscles) are large, encapsulated mechanoreceptors located deep in the skin (dermis and hypodermis), interosseous membranes, and joint capsules. They consist of a single central unmyelinated nerve ending surrounded by concentric lamellae of flattened Schwann-like cells separated by fluid. They are very rapidly adapting (RA II) receptors with large receptive fields with indistinct borders. Because the viscoelastic lamellae filter low-frequency mechanical deformations, only rapidly changing mechanical stimuli transmit deformation to the central nerve terminal, making Pacinian corpuscles the primary detectors of high-frequency vibration (optimal sensitivity at 200-300 Hz) and rapid transient touches.",
  wrongExp: "• <strong>Option A (Merkel discs):</strong> Merkel cells (SA I) are slowly adapting receptors in the basal layer of the epidermis that detect sustained touch, pressure, and fine spatial details/texture.<br>• <strong>Option C (Ruffini endings):</strong> Ruffini corpuscles (SA II) are slowly adapting spindle-shaped encapsulated receptors sensitive to skin stretch, joint angle, and directional shear forces.<br>• <strong>Option D (Meissner corpuscles):</strong> Meissner corpuscles (RA I) are rapidly adapting encapsulated receptors located in dermal papillae of glabrous skin sensitive to low-frequency flutter (30-50 Hz) and dynamic slip (grip adjustment)."
},
{
  id: 2032,
  subject: "Physiology",
  topic: "CNS & Special Senses",
  chapter: "Motor Control & Stretch Reflex",
  level: "Moderate",
  q: "During the clinical elicitation of the knee jerk (patellar tendon) reflex, a sudden tap with a reflex hammer stretches the quadriceps femoris muscle. What type of sensory afferent fiber innervates the primary annulospiral endings of the muscle spindle to initiate the monosynaptic stretch reflex?",
  opts: [
    "Group Ia sensory afferents",
    "Group Ib sensory afferents",
    "Group II sensory afferents",
    "Group C unmyelinated fibers"
  ],
  ans: 0,
  exp: "The muscle spindle is a stretch receptor arranged in parallel with extrafusal skeletal muscle fibers. It contains nuclear bag and nuclear chain intrafusal fibers. Group Ia sensory afferent fibers (large, heavily myelinated axons with the fastest conduction velocities: 70-120 m/s) wrap around the central equatorial regions of intrafusal fibers forming primary (annulospiral) endings. Group Ia afferents are sensitive to the dynamic rate of change of muscle length (velocity of stretch). In the monosynaptic stretch reflex (myotatic reflex), a tendon tap stretches the muscle, firing Group Ia afferents that enter the spinal cord dorsal horn and directly synapse with alpha-motor neurons in the anterior horn, causing homonymous muscle contraction.",
  wrongExp: "• <strong>Option B (Group Ib sensory afferents):</strong> Group Ib afferents innervate Golgi Tendon Organs (arranged in series with extrafusal fibers) to detect muscle tension and mediate the autogenic (inverse) myotatic reflex.<br>• <strong>Option C (Group II sensory afferents):</strong> Group II afferents form flower-spray (secondary) endings on nuclear chain fibers, detecting static muscle length rather than dynamic rate of change.<br>• <strong>Option D (Group C unmyelinated fibers):</strong> Group C fibers are slow, unmyelinated axons transmitting dull/burning pain, crude touch, and temperature, not proprioception."
},
{
  id: 2033,
  subject: "Physiology",
  topic: "CNS & Special Senses",
  chapter: "Phototransduction in Vision",
  level: "Hard",
  q: "In complete darkness, rod photoreceptors maintain a steady resting membrane potential of approximately -40 mV ('dark current') and continuously release glutamate. What biochemical event occurs within the rod outer segment when a photon of light is absorbed by 11-cis-retinal within rhodopsin?",
  opts: [
    "Activation of transducin -> Activation of cGMP phosphodiesterase (PDE6) -> Breakdown of cGMP -> Closure of cGMP-gated Na+/Ca2+ channels -> Hyperpolarization",
    "Inactivation of transducin -> Accumulation of cGMP -> Opening of cyclic-nucleotide gated channels -> Depolarization",
    "Activation of adenylyl cyclase -> Increased cAMP -> Opening of ligand-gated K+ channels -> Depolarization",
    "Direct light-induced opening of voltage-gated Ca2+ channels -> Increased glutamate release"
  ],
  ans: 0,
  exp: "In the dark, high levels of intracellular cyclic guanosine monophosphate (cGMP) keep cyclic nucleotide-gated (CNG) cation channels open in the outer segment of photoreceptors, allowing continuous inward flow of Na+ and Ca2+ (the 'dark current'), maintaining the membrane depolarized at ~ -40 mV with baseline glutamate release. When a photon strikes rhodopsin, 11-cis-retinal photoisomerizes to all-trans-retinal, producing the active intermediate Metarhodopsin II. Metarhodopsin II activates the G-protein transducin (Gt), whose alpha subunit activates cGMP phosphodiesterase (PDE6). PDE6 hydrolyzes cGMP to 5'-GMP. The drop in intracellular cGMP causes CNG channels to close, stopping the dark current. Continuous K+ efflux via inner segment channels then hyperpolarizes the photoreceptor to -70 mV, decreasing glutamate release at the synaptosome.",
  wrongExp: "• <strong>Option B (Inactivation of transducin -> Accumulation of cGMP...):</strong> Transducin is activated (not inactivated) by light, and cGMP is degraded (not accumulated), leading to channel closure, not opening.<br>• <strong>Option C (Activation of adenylyl cyclase -> Increased cAMP...):</strong> Phototransduction is driven by a cGMP-specific phosphodiesterase cascade, not an adenylyl cyclase/cAMP pathway.<br>• <strong>Option D (Direct light-induced opening of voltage-gated Ca2+ channels...):</strong> Photoreceptors do not depolarize in response to light; they hyperpolarize, which decreases (not increases) glutamate release."
},
{
  id: 2034,
  subject: "Physiology",
  topic: "CNS & Special Senses",
  chapter: "Auditory Transduction & Endolymph",
  level: "Moderate",
  q: "During sound transduction in the Organ of Corti, acoustic vibrations cause upward deflection of the basilar membrane, shearing the stereocilia of hair cells against the tectorial membrane toward the kinocilium. Deflection opens mechanosensitive MET (mechanoelectrical transduction) channels at the tips of the stereocilia. What ion primarily enters through these channels to depolarize the auditory hair cell, and why?",
  opts: [
    "Na+ influx; because endolymph has a high Na+ concentration similar to extracellular fluid",
    "K+ influx; because endolymph has an exceptionally high K+ concentration (~150 mM) and a positive endocochlear potential (+80 mV)",
    "Ca2+ influx; because endolymph lacks all monovalent cations",
    "Cl- efflux; because the hair cell interior has a high Cl- concentration"
  ],
  ans: 1,
  exp: "The apical surfaces and stereocilia of auditory hair cells are bathed in endolymph (contained within the scala media), which is secreted by the stria vascularis. Unlike ordinary extracellular fluids, endolymph resembles intracellular fluid: it has a high concentration of potassium ([K+] ≈ 150 mM) and a low concentration of sodium ([Na+] ≈ 2 mM). Furthermore, the stria vascularis maintains a positive endocochlear potential of +80 mV relative to perilymph. Because the resting interior of the hair cell is -45 to -70 mV, there is a large electrical driving force of ~125 to 150 mV favoring the influx of K+ into the hair cell. When tip-links pull open the MET channels, K+ rushes down its electrical gradient into the hair cell, causing cellular depolarization, which opens basolateral voltage-gated Ca2+ channels and triggers neurotransmitter release.",
  wrongExp: "• <strong>Option A (Na+ influx; because endolymph has a high Na+ concentration):</strong> Endolymph has a low Na+ concentration (~2 mM); high Na+ is characteristic of perilymph in the scala vestibuli and scala tympani.<br>• <strong>Option C (Ca2+ influx; because endolymph lacks all monovalent cations):</strong> Endolymph contains high concentrations of the monovalent cation K+; although Ca2+ does enter MET channels in small amounts, K+ carries >90% of the depolarizing current.<br>• <strong>Option D (Cl- efflux; because the hair cell interior has a high Cl- concentration):</strong> Depolarization is mediated by cation influx (K+), not by chloride movements."
},
{
  id: 2035,
  subject: "Physiology",
  topic: "CNS & Special Senses",
  chapter: "Basal Ganglia Pathways & Circuitry",
  level: "Hard",
  q: "The basal ganglia control the initiation and execution of voluntary movements via direct and indirect striatal projection pathways. In the direct pathway, striatal medium spiny neurons express which dopamine receptor subtype, and what is the net functional effect of its activation on the thalamocortical motor drive?",
  opts: [
    "D2 receptors; Net inhibition of the motor thalamus, suppressing movement",
    "D1 receptors; Disinhibition of the motor thalamus (via inhibition of GPi/SNr), facilitating movement",
    "D2 receptors; Direct excitation of the subthalamic nucleus, terminating movement",
    "D1 receptors; Direct stimulation of the globus pallidus internus, suppressing movement"
  ],
  ans: 1,
  exp: "The direct pathway facilitates voluntary movement initiation. Striatal medium spiny neurons (MSNs) of the direct pathway project directly to the primary output nuclei of the basal ganglia: the internal segment of the globus pallidus (GPi) and the substantia nigra pars reticulata (SNr). These direct MSNs express excitatory Dopamine D1 receptors (coupled to Gs/Golf). Dopamine released from the substantia nigra pars compacta (SNc) activates D1 receptors, firing these GABAergic/substance P MSNs. This inhibits the tonically active GABAergic neurons of the GPi/SNr. Inhibiting the inhibitor (disinhibition) releases the ventral anterior (VA) and ventral lateral (VL) nuclei of the motor thalamus from baseline suppression, allowing the thalamus to send excitatory (glutamatergic) signals to the motor cortex to execute movement.",
  wrongExp: "• <strong>Option A (D2 receptors; Net inhibition of the motor thalamus...):</strong> D2 receptors (coupled to Gi) are expressed on MSNs of the indirect pathway; their activation by dopamine inhibits the indirect pathway, which also facilitates movement.<br>• <strong>Option C (D2 receptors; Direct excitation of the subthalamic nucleus...):</strong> The indirect pathway projects to the external globus pallidus (GPe), which then projects to the subthalamic nucleus (STN); it is not a direct MSN-to-STN connection.<br>• <strong>Option D (D1 receptors; Direct stimulation of GPi...):</strong> Direct MSNs release the inhibitory neurotransmitter GABA onto the GPi, inhibiting it rather than stimulating it."
},
{
  id: 2036,
  subject: "Physiology",
  topic: "Endocrinology",
  chapter: "Hypothalamic-Pituitary Axis & Feedback",
  level: "Easy",
  q: "A 28-year-old female presents with secondary amenorrhea, bilateral galactorrhea, and mild headaches. Pregnancy test is negative. Serum prolactin is elevated at 160 ng/mL (normal: <25 ng/mL). MRI of the brain confirms a 6-mm pituitary microadenoma. Which hypothalamic neurotransmitter provides the primary tonic physiological inhibition of prolactin secretion from anterior pituitary lactotrophs?",
  opts: [
    "Thyrotropin-releasing hormone (TRH)",
    "Dopamine",
    "Somatostatin",
    "Gonadotropin-releasing hormone (GnRH)"
  ],
  ans: 1,
  exp: "Unlike all other anterior pituitary hormones (which are primarily regulated by hypothalamic releasing factors), prolactin is uniquely under tonic (continuous) inhibitory control by the hypothalamus. The physiological Prolactin-Inhibiting Factor (PIF) is dopamine, synthesized by dopaminergic neurons in the arcuate nucleus of the tuberoinfundibular pathway. Dopamine is secreted into the hypophyseal portal circulation and binds to Gi-coupled Dopamine D2 receptors on anterior pituitary lactotrophs, suppressing adenylyl cyclase, lowering intracellular cAMP and Ca2+, and inhibiting prolactin synthesis and exocytosis. Disruption of the pituitary stalk or administration of dopamine antagonists (e.g., antipsychotics, metoclopramide) lifts this inhibition, producing hyperprolactinemia.",
  wrongExp: "• <strong>Option A (Thyrotropin-releasing hormone - TRH):</strong> TRH stimulates prolactin release (which is why primary hypothyroidism with elevated TRH can cause galactorrhea), but it is not the primary tonic regulator.<br>• <strong>Option C (Somatostatin):</strong> Somatostatin (GHIH) primarily inhibits Growth Hormone (GH) and Thyroid-Stimulating Hormone (TSH) release, not prolactin.<br>• <strong>Option D (Gonadotropin-releasing hormone - GnRH):</strong> GnRH stimulates the release of LH and FSH from gonadotrophs, with no direct inhibitory action on lactotrophs."
},
{
  id: 2037,
  subject: "Physiology",
  topic: "Endocrinology",
  chapter: "Thyroid Hormone Synthesis & Action",
  level: "Moderate",
  q: "A 36-year-old woman is evaluated for palpitations, weight loss despite increased appetite, and heat intolerance. Thyroid scintigraphy demonstrates diffuse toxic goiter (Graves' disease). In the normal biosynthesis of thyroid hormones within the follicular lumen, which enzyme catalyzes the oxidation of iodide (I-), the iodination of tyrosyl residues on thyroglobulin (organification), and the coupling of iodotyrosines to form T3 and T4?",
  opts: [
    "Sodium-iodide symporter (NIS)",
    "Thyroid peroxidase (TPO)",
    "Pendrin",
    "Iodotyrosine deiodinase (DEHAL1)"
  ],
  ans: 1,
  exp: "Thyroid peroxidase (TPO) is a membrane-bound, heme-containing enzyme located on the apical (luminal) microvillar membrane of thyroid follicular cells. Utilizing hydrogen peroxide (H2O2) generated by Dual Oxidase 2 (DUOX2), TPO catalyzes three successive steps in thyroid hormonogenesis: (1) Oxidation of inorganic iodide (I-) to an active iodinating species (iodinium or free radical I0); (2) Organification of iodine by iodinating tyrosyl residues on the scaffolding protein thyroglobulin, forming monoiodotyrosine (MIT) and diiodotyrosine (DIT); and (3) Coupling of iodotyrosyl residues: DIT + DIT -> Thyroxine (T4), and MIT + DIT -> Triiodothyronine (T3). Thionamide antithyroid drugs (methimazole and propylthiouracil) treat hyperthyroidism by inhibiting TPO.",
  wrongExp: "• <strong>Option A (Sodium-iodide symporter - NIS):</strong> NIS is an active basolateral membrane cotransporter that concentrates iodide into the follicular cell against an electrochemical gradient, driven by the Na+ gradient.<br>• <strong>Option C (Pendrin):</strong> Pendrin is an apical anion exchanger (SLC26A4) that transports iodide across the apical membrane into the colloid lumen; mutations cause Pendred syndrome.<br>• <strong>Option D (Iodotyrosine deiodinase - DEHAL1):</strong> DEHAL1 acts intracellularly to salvage iodine by deiodinating free uncoupled MIT and DIT released during thyroglobulin proteolysis."
},
{
  id: 2038,
  subject: "Physiology",
  topic: "Endocrinology",
  chapter: "Adrenal Steroidogenesis & Regulation",
  level: "Hard",
  q: "A newborn genetic female (46,XX) presents with ambiguous genitalia, clitoromegaly, and labial fusion. At 10 days of life, she develops vomiting, hypotension, hyponatremia, and hyperkalemia (salt-wasting crisis). Serum 17-hydroxyprogesterone levels are markedly elevated. A deficiency of which adrenal steroidogenic enzyme explains this condition, and what causes the marked adrenocortical hyperplasia?",
  opts: [
    "21-hydroxylase deficiency; Absence of cortisol negative feedback leading to unrestrained ACTH hypersecretion",
    "11-beta-hydroxylase deficiency; Excess aldosterone production by the zona glomerulosa",
    "17-alpha-hydroxylase deficiency; Unrestrained stimulation by Angiotensin II",
    "3-beta-hydroxysteroid dehydrogenase deficiency; Hypothalamic CRH suppression"
  ],
  ans: 0,
  exp: "Congenital Adrenal Hyperplasia (CAH) is most commonly (>90% of cases) caused by 21-hydroxylase deficiency (CYP21A2 mutation). 21-hydroxylase is required to convert progesterone to 11-deoxycorticosterone (mineralocorticoid pathway) and 17-hydroxyprogesterone to 11-deoxycortisol (glucocorticoid pathway). Its absence prevents the synthesis of both aldosterone and cortisol. Lack of aldosterone causes renal salt wasting (hyponatremia, hyperkalemia, dehydration, hypotension). Critically, the absence of circulating cortisol removes negative feedback inhibition at the pituitary and hypothalamic levels, triggering massive, unrestrained secretion of Adrenocorticotropic Hormone (ACTH). Elevated ACTH stimulates the adrenal cortex (hyperplasia) and shunts steroid precursors upstream of the block into the intact adrenal androgen pathway, producing excess androgens (DHEA, androstenedione, testosterone) that virilize female external genitalia.",
  wrongExp: "• <strong>Option B (11-beta-hydroxylase deficiency; Excess aldosterone...):</strong> 11-beta-hydroxylase deficiency also virilizes females, but causes hypertension (not salt-wasting) due to accumulation of 11-deoxycorticosterone (DOC), a potent mineralocorticoid.<br>• <strong>Option C (17-alpha-hydroxylase deficiency; Unrestrained stimulation by Angiotensin II):</strong> 17-alpha-hydroxylase deficiency blocks sex hormone and cortisol production, resulting in phenotypically female genitalia with mineralocorticoid excess and hypertension.<br>• <strong>Option D (3-beta-hydroxysteroid dehydrogenase deficiency...):</strong> 3-beta-HSD deficiency blocks all active steroid pathways early; it causes elevated, not suppressed, CRH and ACTH."
},
{
  id: 2039,
  subject: "Physiology",
  topic: "Endocrinology",
  chapter: "Calcium & Phosphate Homeostasis",
  level: "Moderate",
  q: "A 52-year-old woman presents with recurrent nephrolithiasis, generalized bone pain, and fatigue. Serum labs reveal hypercalcemia (11.8 mg/dL) and hypophosphatemia (1.9 mg/dL) with an inappropriately elevated intact Parathyroid Hormone (PTH) level of 145 pg/mL (normal: 15-65 pg/mL). Which combination of direct biological actions of PTH on the kidneys and bone accounts for these serum electrolyte findings?",
  opts: [
    "Inhibition of renal 1-alpha-hydroxylase; stimulation of renal phosphate reabsorption in PCT; inhibition of osteoclasts",
    "Stimulation of renal Ca2+ reabsorption in DCT; inhibition of Na+-phosphate cotransporters (NPT2a/2c) in PCT; stimulation of osteocytic osteolysis and RANKL-mediated osteoclastogenesis",
    "Inhibition of renal Ca2+ reabsorption in the thick ascending limb; stimulation of intestinal phosphate absorption independent of Vitamin D",
    "Stimulation of calcitonin release from thyroid C cells; increased urinary calcium excretion"
  ],
  ans: 1,
  exp: "Parathyroid Hormone (PTH) defends against hypocalcemia through three integrated actions: (1) In the kidney distal convoluted tubule (DCT), it stimulates active transcellular Ca2+ reabsorption via apical TRPV5 channels and basolateral NCX1; (2) In the proximal convoluted tubule (PCT), it downregulates and internalizes apical Na+-phosphate cotransporters (NPT2a and NPT2c), producing marked phosphaturia (lowering serum phosphate); (3) In the PCT, it upregulates 1-alpha-hydroxylase (CYP27B1), converting 25-OH-D3 into active 1,25-(OH)2-D3 (calcitriol) to indirectly enhance intestinal Ca2+ and phosphate absorption; (4) In bone, it binds to osteoblasts, increasing their expression of Receptor Activator of Nuclear Factor-kappa B Ligand (RANKL) and decreasing osteoprotegerin (OPG), driving osteoclastic bone resorption and mobilizing calcium and phosphate into blood.",
  wrongExp: "• <strong>Option A (Inhibition of renal 1-alpha-hydroxylase...):</strong> PTH stimulates 1-alpha-hydroxylase, inhibits (rather than stimulates) proximal tubular phosphate reabsorption, and promotes (rather than inhibits) osteoclasts.<br>• <strong>Option C (Inhibition of renal Ca2+ reabsorption in TAL...):</strong> PTH stimulates renal calcium reabsorption and does not act directly on the intestine without calcitriol.<br>• <strong>Option D (Stimulation of calcitonin release...):</strong> Calcitonin is stimulated by hypercalcemia acting directly on the thyroid C-cell calcium-sensing receptor, not by PTH."
},
{
  id: 2040,
  subject: "Physiology",
  topic: "Endocrinology",
  chapter: "Pancreatic Hormones & Glucose Regulation",
  level: "Easy",
  q: "In pancreatic beta cells, glucose-stimulated insulin secretion (GSIS) couples extracellular blood glucose fluctuations to exocytosis of insulin granules. What is the key metabolic coupling event that triggers depolarization of the beta-cell plasma membrane?",
  opts: [
    "Glucose entry via SGLT2 -> Activation of Na+/K+-ATPase -> Hyperpolarization",
    "Glucose entry via GLUT2/GLUT1 -> Glycolytic ATP generation -> Increased ATP/ADP ratio -> Closure of ATP-sensitive K+ (K_ATP) channels",
    "Glucose binding to G-protein coupled sweet receptors -> Inositol trisphosphate (IP3) synthesis -> Opening of K+ channels",
    "Direct activation of voltage-gated Ca2+ channels by extracellular glucose molecules"
  ],
  ans: 1,
  exp: "The canonical pathway of Glucose-Stimulated Insulin Secretion (GSIS) involves: (1) Facilitated entry of blood glucose into the beta cell via GLUT2 (in rodents) or GLUT1/3 (in humans); (2) Phosphorylation by glucokinase (the 'glucose sensor'); (3) Glycolysis and mitochondrial TCA oxidation generating ATP, sharply increasing the intracellular [ATP]/[ADP] ratio; (4) Direct binding of ATP to the Kir6.2 pore-forming subunit of ATP-sensitive K+ channels (K_ATP, which contains SUR1 regulatory subunits), inducing channel closure; (5) Decreased outward K+ conductance leads to membrane depolarization (from -70 mV to -50 mV); (6) Depolarization opens voltage-gated L-type Ca2+ channels (Cav1.2), causing Ca2+ influx that triggers SNARE-mediated exocytosis of insulin-containing granules.",
  wrongExp: "• <strong>Option A (Glucose entry via SGLT2 -> Activation of Na+/K+-ATPase):</strong> SGLT2 is an active transporter in the renal PCT, not in pancreatic beta cells; insulin secretion involves membrane depolarization, not hyperpolarization.<br>• <strong>Option C (Glucose binding to sweet receptors -> IP3 synthesis...):</strong> While sweet-taste receptors (T1R2/T1R3) exist on beta cells and can modulate secretion, primary GSIS is driven by intracellular oxidative metabolism and K_ATP closure.<br>• <strong>Option D (Direct activation of voltage-gated Ca2+ channels...):</strong> Cav channels respond to membrane electrical depolarization, not to direct chemical binding of extracellular glucose."
},
{
  id: 2041,
  subject: "Physiology",
  topic: "Reproductive System",
  chapter: "Ovarian Cycle & Ovulation",
  level: "Moderate",
  q: "In the normal human 28-day menstrual cycle, mid-cycle ovulation occurs approximately 10 to 12 hours after the peak of the Luteinizing Hormone (LH) surge. Which endocrine event is the mandatory prerequisite that triggers this positive feedback LH surge from anterior pituitary gonadotrophs?",
  opts: [
    "A sustained elevation of circulating 17-beta-estradiol exceeding ~200 pg/mL for at least 36 to 48 hours",
    "A sudden, steep drop in circulating progesterone levels below 1 ng/mL",
    "Inhibin A-mediated stimulation of pituitary GnRH receptors",
    "A transient surge in human chorionic gonadotropin (hCG) from the dominant follicle"
  ],
  ans: 0,
  exp: "Throughout most of the follicular phase, moderate levels of estradiol exert classic negative feedback on the hypothalamus (reducing GnRH pulse frequency) and anterior pituitary (reducing LH/FSH sensitivity). However, as the dominant Graafian follicle matures, its granulosa cells secrete large amounts of 17-beta-estradiol. When circulating estradiol concentrations surpass a critical threshold of approximately 200 pg/mL and remain continuously elevated for at least 36 to 48 hours, a switch from negative to positive feedback occurs. This sustained high estrogen stimulates kisspeptin neurons in the anteroventral periventricular (AVPV) nucleus of the hypothalamus, triggering a high-frequency GnRH discharge and dramatically sensitizing pituitary gonadotrophs to GnRH, producing the preovulatory LH surge.",
  wrongExp: "• <strong>Option B (A sudden, steep drop in circulating progesterone levels...):</strong> Progesterone levels are low (<1 ng/mL) throughout the early follicular phase; small preovulatory rises in progesterone actually facilitate the LH surge.<br>• <strong>Option C (Inhibin A-mediated stimulation of pituitary GnRH receptors):</strong> Inhibin A (secreted by the corpus luteum) and Inhibin B (secreted by granulosa cells) selectively inhibit pituitary FSH secretion, without stimulating LH.<br>• <strong>Option D (A transient surge in hCG from the dominant follicle):</strong> hCG is secreted by the syncytiotrophoblast of the blastocyst after fertilization and implantation, not by preovulatory ovarian follicles."
},
{
  id: 2042,
  subject: "Physiology",
  topic: "Reproductive System",
  chapter: "Male Reproductive Physiology & Spermatogenesis",
  level: "Easy",
  q: "A 30-year-old man presenting with primary infertility has a normal physical examination and normal secondary sexual characteristics. Semen analysis reveals severe oligozoospermia. Serum testosterone and LH levels are completely normal, but serum Follicle-Stimulating Hormone (FSH) is elevated. Selective impairment of which testicular cell type accounts for this isolated elevation of FSH?",
  opts: [
    "Leydig (interstitial) cells failing to produce testosterone",
    "Sertoli (sustentacular) cells failing to produce Inhibin B",
    "Peritubular myoid cells failing to produce endothelin",
    "Spermatogonia failing to produce activin"
  ],
  ans: 1,
  exp: "Testicular function is regulated by the hypothalamic-pituitary-gonadal axis via two parallel loops: (1) LH binds to receptors on Leydig cells in the interstitial space to stimulate testosterone synthesis; circulating testosterone feeds back negatively on both hypothalamic GnRH and pituitary LH secretion. (2) FSH binds to receptors on Sertoli cells within the seminiferous tubules to promote spermatogenesis and drive the secretion of androgen-binding protein (ABP) and Inhibin B. Inhibin B acts directly on anterior pituitary gonadotrophs to selectively suppress FSH synthesis and secretion. When Sertoli cell function or spermatogenesis is selectively impaired, circulating Inhibin B drops, removing negative feedback and resulting in an isolated rise in serum FSH despite normal LH and testosterone.",
  wrongExp: "• <strong>Option A (Leydig cells failing to produce testosterone):</strong> Impairment of Leydig cells causes decreased testosterone and an elevation of LH (hypergonadotropic hypogonadism).<br>• <strong>Option C (Peritubular myoid cells failing to produce endothelin):</strong> Peritubular cells provide structural support and peristaltic contractions to move immotile spermatozoa, but do not secrete feedback regulators of pituitary gonadotrophs.<br>• <strong>Option D (Spermatogonia failing to produce activin):</strong> Activin stimulates FSH secretion, but is produced by the pituitary and gonads; it is not a negative feedback regulator produced by germ cells."
},
{
  id: 2043,
  subject: "Physiology",
  topic: "Reproductive System",
  chapter: "Maternal-Fetal Exchange & Placental Hormones",
  level: "Moderate",
  q: "Human Chorionic Gonadotropin (hCG) is a glycoprotein hormone synthesized by the syncytiotrophoblast of the blastocyst shortly after implantation. Detection of hCG in maternal blood or urine forms the basis of modern pregnancy tests. What is the essential physiological role of hCG during the first 8 to 10 weeks of pregnancy?",
  opts: [
    "Direct stimulation of fetal adrenal cortisol synthesis",
    "Maintenance of the maternal corpus luteum to ensure uninterrupted progesterone production",
    "Stimulation of maternal thyroid-binding globulin to prevent gestational thyrotoxicosis",
    "Suppression of maternal uterine oxytocin receptor expression"
  ],
  ans: 1,
  exp: "Following fertilization and blastocyst implantation, the conceptus must prevent regression of the maternal corpus luteum, which would otherwise luteolyze at the end of the menstrual cycle, leading to progesterone withdrawal, endometrial shedding, and pregnancy loss. Syncytiotrophoblast cells secrete human Chorionic Gonadotropin (hCG), which shares an identical alpha subunit with LH, FSH, and TSH, and has a beta subunit that binds to LH/hCG receptors on the maternal corpus luteum. This 'rescues' the corpus luteum, stimulating its continuous growth and high-level production of progesterone and estrogen. Around the 8th to 10th week of gestation, the placenta synthesizes sufficient progesterone autonomously to maintain the decidua (the 'luteal-placental shift'), after which the corpus luteum is no longer required.",
  wrongExp: "• <strong>Option A (Direct stimulation of fetal adrenal cortisol synthesis):</strong> ACTH, not hCG, stimulates the adrenal cortex; in male fetuses, hCG stimulates Leydig cells to produce testosterone for male sexual differentiation, but does not drive adrenal cortisol.<br>• <strong>Option C (Stimulation of TBG to prevent thyrotoxicosis):</strong> Elevated TBG in pregnancy is induced by high maternal estrogen levels stimulating hepatic synthesis, not by hCG.<br>• <strong>Option D (Suppression of maternal uterine oxytocin receptor expression):</strong> Progesterone (not hCG directly) maintains uterine quiescence and downregulates oxytocin receptors and gap junctions."
},
{
  id: 2044,
  subject: "Physiology",
  topic: "Reproductive System",
  chapter: "Lactation Physiology & Neuroendocrine Reflexes",
  level: "Easy",
  q: "A 24-year-old primiparous woman who is exclusively breastfeeding her 3-week-old infant notices milk leaking from both breasts whenever she hears her baby cry. What neuroendocrine hormone mediates this rapid milk-ejection ('let-down') reflex, and which cells does it contract?",
  opts: [
    "Prolactin; Alveolar epithelial secretory cells",
    "Oxytocin; Myoepithelial cells surrounding the mammary alveoli",
    "Human Placental Lactogen (hPL); Ductal smooth muscle cells",
    "Estrogen; Stromal adipocytes"
  ],
  ans: 1,
  exp: "Lactation involves two distinct hormonal processes: milk production and milk ejection. (1) Milk synthesis is driven by prolactin from the anterior pituitary, which acts on alveolar secretory epithelial cells. (2) Milk ejection ('let-down' reflex) is mediated by oxytocin, a nonapeptide synthesized in the paraventricular and supraoptic nuclei of the hypothalamus and stored in the posterior pituitary (neurohypophysis). Tactile stimulation of the nipple during suckling (or conditioned psychological cues like a crying infant) sends afferent neural signals up the spinothalamic tract to the hypothalamus, releasing oxytocin into the bloodstream. Oxytocin binds to Gq-coupled receptors on myoepithelial cells basket-woven around the mammary alveoli, contracting them and forcefully propelling milk into the lactiferous ducts and sinuses.",
  wrongExp: "• <strong>Option A (Prolactin; Alveolar epithelial secretory cells):</strong> Prolactin stimulates milk synthesis and storage within alveolar lumens, but has no contractile properties to drive milk ejection.<br>• <strong>Option C (Human Placental Lactogen; Ductal smooth muscle cells):</strong> hPL is a placental hormone of pregnancy that promotes mammary duct development and induces maternal insulin resistance; it is not involved in postpartum milk let-down.<br>• <strong>Option D (Estrogen; Stromal adipocytes):</strong> Estrogen stimulates ductal elongation during puberty and pregnancy, but inhibits the secretory action of prolactin on breast tissue prior to delivery."
},
{
  id: 2045,
  subject: "Physiology",
  topic: "Reproductive System",
  chapter: "Fertilization, Capacitation & Acrosome Reaction",
  level: "Hard",
  q: "Freshly ejaculated mammalian spermatozoa are incapable of fertilizing an ovum until they undergo capacitation within the female reproductive tract. What biochemical alteration occurs in the sperm plasma membrane during capacitation that prepares it for the subsequent acrosome reaction?",
  opts: [
    "Incorporation of exogenous cholesterol into the plasma membrane to increase membrane rigidity",
    "Extraction of membrane cholesterol by female albumin, leading to increased membrane fluidity and calcium influx",
    "Closure of CatSper voltage-gated channels, preventing hyperactivation",
    "Inactivation of sperm adenylyl cyclase, lowering intracellular cAMP"
  ],
  ans: 1,
  exp: "Capacitation is an obligatory maturation process occurring over 5 to 7 hours inside the female reproductive tract (uterus and fallopian tubes). Seminal plasma contains decapacitation factors and cholesterol that stabilize the sperm membrane. In the female tract, sterol acceptors (chiefly albumin and high-density lipoproteins) extract cholesterol from the sperm plasma membrane, increasing membrane fluidity and permeability to bicarbonate and calcium. Bicarbonate activates soluble adenylyl cyclase (sAC), generating cAMP and activating Protein Kinase A (PKA). Concurrently, alkalinization and progesterone open sperm-specific CatSper Ca2+ channels, producing a large Ca2+ influx. This triggers hyperactivated motility (whiplash flagellar beating) and primes the acrosomal membrane to fuse with the outer sperm membrane upon binding to ZP3 of the zona pellucida (acrosome reaction).",
  wrongExp: "• <strong>Option A (Incorporation of exogenous cholesterol...):</strong> Cholesterol removal (efflux), not incorporation, is the defining lipid event of capacitation; adding cholesterol inhibits capacitation.<br>• <strong>Option C (Closure of CatSper channels...):</strong> CatSper channels must open to allow Ca2+ influx; blocking CatSper causes male infertility due to failure of hyperactivation.<br>• <strong>Option D (Inactivation of sperm adenylyl cyclase, lowering cAMP):</strong> Soluble adenylyl cyclase is strongly activated (by HCO3- and Ca2+), elevating cAMP and driving PKA-dependent protein tyrosine phosphorylation."
},
{
  id: 2046,
  subject: "Physiology",
  topic: "Cardiovascular System",
  chapter: "Jugular Venous Pulse & Hemodynamics",
  level: "Moderate",
  q: "Examination of the jugular venous pulse (JVP) waveform in a patient reveals a prominent, sharp 'a' wave followed by a normal 'c' wave, an 'x' descent, a 'v' wave, and a 'y' descent. What specific mechanical event in the right side of the heart is responsible for the generation of the physiological 'a' wave?",
  opts: [
    "Right ventricular isometric contraction causing bulging of the tricuspid valve into the right atrium",
    "Right atrial active contraction during end-diastole against the tricuspid valve",
    "Passive venous filling of the right atrium while the tricuspid valve is closed during ventricular systole",
    "Rapid passive emptying of blood from the right atrium into the right ventricle after tricuspid valve opening"
  ],
  ans: 1,
  exp: "The jugular venous pulse (JVP) reflects pressure fluctuations in the right atrium transmitted retrogradely into the internal jugular vein. The 'a' wave is the first positive deflection, caused by right atrial active contraction (atrial systole) at end-diastole, which elevates intra-atrial pressure just before tricuspid valve closure. It corresponds temporally to the PR interval on the surface ECG. A 'cannon a-wave' occurs when the right atrium contracts against a closed tricuspid valve (e.g., complete heart block or ventricular tachycardia), while the 'a' wave is absent in atrial fibrillation.",
  wrongExp: "• <strong>Option A (Right ventricular isometric contraction causing bulging of the tricuspid valve):</strong> This produces the 'c' wave of the JVP, corresponding to early ventricular systole.<br>• <strong>Option C (Passive venous filling of the right atrium while tricuspid is closed):</strong> This generates the 'v' wave of the JVP, reflecting venous filling against a closed tricuspid valve during ventricular systole.<br>• <strong>Option D (Rapid passive emptying of blood into the right ventricle):</strong> This produces the 'y' descent of the JVP, caused by opening of the tricuspid valve and rapid ventricular filling."
},
{
  id: 2047,
  subject: "Physiology",
  topic: "Respiratory System",
  chapter: "Spirometry & Pulmonary Volumes",
  level: "Easy",
  q: "A 25-year-old healthy male volunteer undergoes routine pulmonary function testing. Spirometric measurements record: Tidal Volume (TV) = 500 mL, Inspiratory Reserve Volume (IRV) = 3000 mL, and Expiratory Reserve Volume (ERV) = 1100 mL. Helium dilution technique determines his Residual Volume (RV) to be 1200 mL. What is his Functional Residual Capacity (FRC)?",
  opts: [
    "1600 mL",
    "2300 mL",
    "3500 mL",
    "4600 mL"
  ],
  ans: 1,
  exp: "Functional Residual Capacity (FRC) is the volume of gas remaining in the lungs at the end of a normal, quiet tidal expiration. Mechanically, it represents the equilibrium point of the respiratory system where the inward elastic recoil of the lungs is exactly balanced by the outward elastic recoil of the chest wall (transpulmonary pressure = +5 cmH2O, alveolar pressure = 0 cmH2O). FRC is the sum of Expiratory Reserve Volume (ERV) and Residual Volume (RV): FRC = ERV + RV. Substituting the given values: FRC = 1100 mL + 1200 mL = 2300 mL.",
  wrongExp: "• <strong>Option A (1600 mL):</strong> This corresponds to TV + ERV (500 + 1100), which is not a standard physiological pulmonary capacity.<br>• <strong>Option C (3500 mL):</strong> This represents Inspiratory Capacity (IC = TV + IRV = 500 + 3000 = 3500 mL).<br>• <strong>Option D (4600 mL):</strong> This is the Vital Capacity (VC = IRV + TV + ERV = 3000 + 500 + 1100 = 4600 mL)."
},
{
  id: 2048,
  subject: "Physiology",
  topic: "Renal System",
  chapter: "Renal Clearance & Plasma Flow",
  level: "Moderate",
  q: "To assess renal function in an experimental subject, steady-state plasma infusions of inulin and para-aminohippuric acid (PAH) are administered. Urine collected over 1 hour yields: Urine volume = 60 mL (flow rate = 1 mL/min), Urine [Inulin] = 120 mg/mL, Plasma [Inulin] = 1 mg/mL, Urine [PAH] = 580 mg/mL, and Plasma [PAH] = 1 mg/mL. Hematocrit is 40%. What are the subject's Glomerular Filtration Rate (GFR) and Effective Renal Plasma Flow (ERPF)?",
  opts: [
    "GFR = 100 mL/min; ERPF = 500 mL/min",
    "GFR = 120 mL/min; ERPF = 580 mL/min",
    "GFR = 60 mL/min; ERPF = 300 mL/min",
    "GFR = 120 mL/min; ERPF = 966 mL/min"
  ],
  ans: 1,
  exp: "Renal clearance is defined by the formula: C = (U * V) / P, where U is urine concentration, V is urine flow rate (mL/min), and P is plasma concentration. (1) Inulin is freely filtered at the glomerulus and is neither reabsorbed, secreted, nor metabolized by the renal tubules; therefore, inulin clearance equals Glomerular Filtration Rate (GFR): GFR = C_Inulin = (120 mg/mL * 1 mL/min) / 1 mg/mL = 120 mL/min. (2) Para-aminohippuric acid (PAH) is freely filtered and actively secreted by organic anion transporters in the proximal tubule such that virtually all PAH entering the renal arterial circulation is cleared in a single pass (~90% extraction ratio); therefore, PAH clearance estimates Effective Renal Plasma Flow (ERPF): ERPF = C_PAH = (580 mg/mL * 1 mL/min) / 1 mg/mL = 580 mL/min.",
  wrongExp: "• <strong>Option A (GFR = 100 mL/min; ERPF = 500 mL/min):</strong> These are rounded approximations, but mathematically incorrect based on the exact values given.<br>• <strong>Option C (GFR = 60 mL/min; ERPF = 300 mL/min):</strong> This results if urine volume (60 mL) is plugged in directly without converting it to urine flow rate per minute (60 mL / 60 min = 1 mL/min).<br>• <strong>Option D (GFR = 120 mL/min; ERPF = 966 mL/min):</strong> 966 mL/min represents the total Renal Blood Flow (RBF = RPF / (1 - Hct) = 580 / 0.60 ≈ 966.7 mL/min), not the ERPF."
},
{
  id: 2049,
  subject: "Physiology",
  topic: "CNS & Special Senses",
  chapter: "Cerebellar Function & Synaptic Circuitry",
  level: "Hard",
  q: "In the microscopic circuitry of the cerebellar cortex, Purkinje cells receive two major distinct types of excitatory afferent inputs: climbing fibers and mossy fibers (via granule cell parallel fibers). What characteristic electrical response is evoked in a Purkinje cell by the direct synaptic input of a single climbing fiber originating from the contralateral inferior olivary nucleus?",
  opts: [
    "A simple, single high-frequency action potential followed by immediate facilitation",
    "A complex spike consisting of an initial large-amplitude sodium action potential followed by a prolonged plateau of small calcium spikelets",
    "A long-lasting inhibitory postsynaptic potential (IPSP) mediated by glycine",
    "A graded receptor potential that does not reach threshold"
  ],
  ans: 1,
  exp: "Purkinje cells are the sole output neurons of the cerebellar cortex and are GABAergic (inhibitory). They receive two excitatory inputs: (1) Mossy fibers synapse on cerebellar granule cells, whose axons ascend to form parallel fibers; thousands of parallel fibers synapse on a single Purkinje cell, each evoking a brief 'simple spike' (standard single action potential) at high background frequencies (20-100 Hz). (2) Climbing fibers originate exclusively from the contralateral inferior olivary nucleus. A single climbing fiber makes hundreds of synaptic contacts with the proximal dendrites of a single Purkinje cell. Firing of a climbing fiber reliably generates an all-or-none 'complex spike': a high-voltage initial Na+ depolarization followed by a prolonged dendritic Ca2+ plateau and a burst of smaller spikelets, occurring at low frequency (~1 Hz). Climbing fiber complex spikes signal motor error and induce Long-Term Depression (LTD) at parallel fiber-Purkinje synapses.",
  wrongExp: "• <strong>Option A (A simple, single action potential...):</strong> Simple spikes are generated by parallel fiber inputs, not climbing fibers.<br>• <strong>Option C (A long-lasting IPSP mediated by glycine):</strong> Climbing fibers release the excitatory neurotransmitter glutamate; inhibitory inputs onto Purkinje cells come from stellate, basket, and Golgi interneurons via GABA, not climbing fibers.<br>• <strong>Option D (A graded receptor potential that does not reach threshold):</strong> The climbing fiber synapse is one of the most powerful excitatory synapses in the mammalian CNS and invariably triggers a complex spike that propagates."
},
{
  id: 2050,
  subject: "Physiology",
  topic: "Endocrinology",
  chapter: "Renin-Angiotensin-Aldosterone System (RAAS)",
  level: "Easy",
  q: "A 50-year-old male is started on an ACE inhibitor for essential hypertension. By inhibiting the conversion of Angiotensin I to Angiotensin II, this medication blunts downstream production of aldosterone. On which target cells of the late distal tubule and cortical collecting duct does aldosterone act, and what transporters/channels does it upregulate to promote sodium retention and potassium excretion?",
  opts: [
    "Type A intercalated cells; Upregulates apical H+-ATPase and basolateral HCO3-/Cl- exchanger",
    "Principal cells; Upregulates apical Epithelial Sodium Channels (ENaC), apical Renal Outer Medullary Potassium (ROMK) channels, and basolateral Na+/K+-ATPase",
    "Type B intercalated cells; Upregulates apical pendrin and basolateral H+-ATPase",
    "Podocytes; Upregulates nephrin and podocin expression"
  ],
  ans: 1,
  exp: "Aldosterone is a mineralocorticoid steroid hormone synthesized by the zona glomerulosa of the adrenal cortex. It diffuses into principal cells of the late distal convoluted tubule and cortical collecting duct, binding to cytosolic Mineralocorticoid Receptors (MR). The hormone-receptor complex translocates to the nucleus and binds to hormone response elements, transcribing: (1) Apical Epithelial Sodium Channels (ENaC), increasing Na+ influx from the lumen into the cell; (2) Apical Renal Outer Medullary Potassium channels (ROMK), facilitating K+ excretion into the lumen down the lumen-negative electrical gradient generated by Na+ entry; and (3) Basolateral Na+/K+-ATPase pumps, extruding 3 Na+ into the interstitium and pumping 2 K+ into the cell. This results in net sodium (and water) retention, expansion of effective circulating volume, and potassium excretion in urine.",
  wrongExp: "• <strong>Option A (Type A intercalated cells...):</strong> Type A intercalated cells mediate proton secretion and bicarbonate reabsorption during acidosis; while aldosterone stimulates their apical H+-ATPase to promote H+ secretion, ENaC and ROMK are localized on principal cells.<br>• <strong>Option C (Type B intercalated cells...):</strong> Type B intercalated cells secrete bicarbonate via apical pendrin during metabolic alkalosis, not sodium reabsorption.<br>• <strong>Option D (Podocytes; Upregulates nephrin and podocin):</strong> Podocytes form the slit diaphragms of the glomerular filtration barrier and do not express aldosterone-regulated ENaC/ROMK transport machinery."
}
];
