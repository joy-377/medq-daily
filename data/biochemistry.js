export const biochemistryQs = [
{
  id: 3001,
  subject: "Biochemistry",
  topic: "Cell & Organelles",
  chapter: "Lysosomes and Peroxisomes",
  level: "Moderate",
  q: "A 4-month-old infant is brought to the pediatric clinic due to poor feeding, hypotonia, and craniofacial dysmorphism characterized by a high forehead, large anterior fontanelle, and shallow orbital ridges. Brain MRI demonstrates diffuse demyelination and polymicrogyria. Biochemical analysis reveals markedly elevated levels of very-long-chain fatty acids (VLCFAs, C26:0 and C26:1) and phytanic acid in plasma, alongside absent catalase-containing organelles on liver biopsy. Which of the following organelles is primarily defective in this patient?",
  opts: [
    "Peroxisome",
    "Lysosome",
    "Mitochondrion",
    "Rough endoplasmic reticulum"
  ],
  ans: 0,
  exp: "Zellweger syndrome (cerebrohepatorenal syndrome) is an autosomal recessive peroxisome biogenesis disorder caused by mutations in PEX genes (most commonly PEX1). Peroxisomes are essential for alpha-oxidation of branched-chain fatty acids (e.g., phytanic acid) and the initial beta-oxidation of very-long-chain fatty acids (VLCFAs, >22 carbons) prior to mitochondrial completion. Absence of functional peroxisomes causes accumulation of VLCFAs, phytanic acid, and pristanic acid, leading to profound neurological impairment, craniofacial abnormalities, and early death.",
  wrongExp: "• <strong>Option B (Lysosome):</strong> Lysosomal storage diseases (e.g., Gaucher, Tay-Sachs) result from defective acid hydrolases degrading sphingolipids or glycosaminoglycans, not defects in peroxisomal beta- or alpha-oxidation.<br>• <strong>Option C (Mitochondrion):</strong> Mitochondria perform beta-oxidation of short-, medium-, and long-chain fatty acids, but they cannot initiate oxidation of VLCFAs (C24-C26).<br>• <strong>Option D (Rough endoplasmic reticulum):</strong> The RER is responsible for synthesis and folding of secretory and membrane proteins, not fatty acid oxidation or phytanic acid metabolism."
},
{
  id: 3002,
  subject: "Biochemistry",
  topic: "Cell & Organelles",
  chapter: "Protein Targeting and Sorting",
  level: "Hard",
  q: "An 8-month-old male infant presents with severe developmental delay, coarse facial features, gingival hyperplasia, and restricted joint mobility. Skeletal survey reveals dysostosis multiplex. Analysis of cultured fibroblasts reveals dense cytoplasmic granular inclusions. Laboratory testing shows markedly elevated levels of multiple lysosomal enzymes in the patient's serum, but their intracellular activity within cultured fibroblasts is deficient. Which of the following biochemical defects accounts for this presentation?",
  opts: [
    "Defective mannose-6-phosphate tagging in the Golgi apparatus",
    "Mutations in the signal recognition particle (SRP) receptor",
    "Deficiency of lysosomal beta-galactosidase activity",
    "Impaired retrograde transport via COP-I vesicles"
  ],
  ans: 0,
  exp: "This infant presents with I-cell disease (mucolipidosis type II), caused by an autosomal recessive defect in UDP-N-acetylglucosamine:lysophosphotransferase (GlcNAc-phosphotransferase). This Golgi apparatus enzyme adds mannose-6-phosphate (M6P) tags to newly synthesized acid hydrolases. Without M6P, the enzymes cannot bind the M6P receptor for delivery to lysosomes; instead, they are constitutively secreted into the extracellular space/plasma, leading to empty lysosomes, substrate accumulation (dense cytoplasmic inclusion bodies), and high plasma lysosomal enzyme levels.",
  wrongExp: "• <strong>Option B (Mutations in SRP receptor):</strong> SRP receptor defects halt the docking of translating ribosomes onto the rough ER membrane, broadly abolishing secretory and transmembrane protein synthesis rather than selectively mistargeting lysosomal hydrolases.<br>• <strong>Option C (Deficiency of lysosomal beta-galactosidase):</strong> Causes GM1 gangliosidosis or Krabbe disease, characterized by single-enzyme deficiencies rather than elevated serum levels of dozens of distinct acid hydrolases.<br>• <strong>Option D (Impaired COP-I retrograde transport):</strong> COP-I mediates retrograde transport from Golgi to ER; defects disrupt general ER-Golgi recycling, not specific M6P-dependent lysosomal targeting."
},
{
  id: 3003,
  subject: "Biochemistry",
  topic: "Cell & Organelles",
  chapter: "Mitochondrial Structure and Apoptosis",
  level: "Moderate",
  q: "During intrinsic apoptosis induced by DNA damage, the pro-apoptotic proteins Bax and Bak oligomerize to form pores in the mitochondrial outer membrane. Release of which of the following molecules into the cytosol directly binds Apaf-1 to initiate apoptosome assembly?",
  opts: [
    "Cytochrome c",
    "Cytochrome P450",
    "Cardiolipin",
    "Succinate dehydrogenase"
  ],
  ans: 0,
  exp: "In the intrinsic (mitochondrial) pathway of apoptosis, mitochondrial outer membrane permeabilization (MOMP) mediated by Bax/Bak releases Cytochrome c from the intermembrane space into the cytosol. Cytosolic cytochrome c binds apoptotic protease activating factor-1 (Apaf-1) in the presence of dATP, triggering heptamerization of the Apaf-1/cytochrome c complex into the apoptosome, which recruits and activates procaspase-9.",
  wrongExp: "• <strong>Option B (Cytochrome P450):</strong> Hemeprotein enzymes located predominantly in the smooth endoplasmic reticulum involved in phase I xenobiotic metabolism and steroidogenesis; they do not trigger apoptosome assembly.<br>• <strong>Option C (Cardiolipin):</strong> A specialized diphosphatidylglycerol lipid found in the inner mitochondrial membrane that anchors cytochrome c; it does not bind Apaf-1 in the cytosol.<br>• <strong>Option D (Succinate dehydrogenase):</strong> Complex II of the electron transport chain embedded in the inner mitochondrial membrane; it is not released as a soluble pro-apoptotic trigger."
},
{
  id: 3004,
  subject: "Biochemistry",
  topic: "Cell & Organelles",
  chapter: "Plasma Membrane and Cytoskeleton",
  level: "Easy",
  q: "A 7-year-old child presents with recurrent jaundice, splenomegaly, and mild pallor. Peripheral blood smear reveals numerous spherocytes lacking central pallor. An osmotic fragility test is positive. Genetic sequencing confirms a mutation in ankyrin. Ankyrin normally connects the spectrin-actin cytoskeleton of erythrocytes to which integral membrane protein?",
  opts: [
    "Band 3 (Anion exchanger 1)",
    "Aquaporin-1",
    "Sodium-potassium ATPase",
    "Glycophorin A"
  ],
  ans: 0,
  exp: "In hereditary spherocytosis, destabilization of the RBC membrane skeletal lattice leads to spontaneous membrane budding, spherical remodeling, and splenic sequestration. The vertical membrane tether consists of spectrin connected via ankyrin to Band 3 (anion exchanger 1) and Protein 4.2. Mutations in ankyrin (~50%), Band 3, or beta-spectrin disrupt this vertical scaffold.",
  wrongExp: "• <strong>Option B (Aquaporin-1):</strong> A water channel protein present on erythrocyte membranes, but it does not anchor the spectrin-based submembranous cytoskeleton.<br>• <strong>Option C (Sodium-potassium ATPase):</strong> Maintains resting ion gradients across membranes, but does not serve as the structural anchor for ankyrin.<br>• <strong>Option D (Glycophorin A):</strong> Glycophorin C (not A) interacts with protein 4.1R in the horizontal junctional complex; Band 3 is the direct binding partner for ankyrin."
},
{
  id: 3005,
  subject: "Biochemistry",
  topic: "Cell & Organelles",
  chapter: "Endoplasmic Reticulum and Proteasome",
  level: "Moderate",
  q: "Misfolded or aberrant proteins within the endoplasmic reticulum are retrotranslocated to the cytosol for degradation. Which of the following post-translational modifications serves as the primary recognition signal that targets these abnormal proteins to the 26S proteasome?",
  opts: [
    "Polyubiquitination via Lysine-48 linkages",
    "Polyubiquitination via Lysine-63 linkages",
    "N-linked high-mannose glycosylation",
    "O-linked beta-N-acetylglucosaminylation"
  ],
  ans: 0,
  exp: "Endoplasmic-reticulum-associated degradation (ERAD) shunts misfolded proteins to the cytosol, where E1 (activating), E2 (conjugating), and E3 (ligase) enzyme cascades attach a polyubiquitin chain linked specifically at Lysine-48 (K48). The 19S regulatory cap of the 26S proteasome recognizes K48-linked polyubiquitin, deubiquitinates the substrate, unfolds it via ATPases, and threads it into the 20S core for proteolytic destruction.",
  wrongExp: "• <strong>Option B (Polyubiquitination via Lysine-63 linkages):</strong> K63-linked polyubiquitination typically directs non-proteasomal signaling functions, such as NF-kappa-B activation, DNA damage repair, and endocytic trafficking.<br>• <strong>Option C (N-linked high-mannose glycosylation):</strong> Facilitates chaperone binding (calnexin/calreticulin) within the ER lumen for proper protein folding, but is not the proteasome degron.<br>• <strong>Option D (O-linked beta-N-acetylglucosaminylation):</strong> A dynamic regulatory signaling modification on Ser/Thr residues analogous to phosphorylation, not a proteasomal degradation signal."
},
{
  id: 3006,
  subject: "Biochemistry",
  topic: "Enzymes",
  chapter: "Enzyme Kinetics and Inhibition",
  level: "Easy",
  q: "A clinical biochemist evaluates an experimental competitive inhibitor targeting HMG-CoA reductase. In the presence of a fixed concentration of this competitive inhibitor, what changes are observed in the Michaelis constant (Km) and the maximum velocity (Vmax) of the reaction?",
  opts: [
    "Km increases, Vmax remains unchanged",
    "Km decreases, Vmax remains unchanged",
    "Km remains unchanged, Vmax decreases",
    "Both Km and Vmax decrease proportionally"
  ],
  ans: 0,
  exp: "Competitive inhibitors reversibly bind to the active site of the free enzyme, directly competing with the substrate. Because increasing the substrate concentration can displace the inhibitor, the maximum reaction velocity (Vmax) remains unchanged. However, a higher substrate concentration is required to achieve half-maximal velocity, resulting in an increased apparent Km (lower apparent affinity).",
  wrongExp: "• <strong>Option B (Km decreases, Vmax unchanged):</strong> A decrease in Km indicates increased substrate affinity, which does not occur with competitive inhibitors.<br>• <strong>Option C (Km unchanged, Vmax decreases):</strong> Characteristic of pure non-competitive inhibitors, which bind allosterically to both free enzyme and enzyme-substrate complex.<br>• <strong>Option D (Both Km and Vmax decrease):</strong> Hallmark of uncompetitive inhibition, where the inhibitor binds exclusively to the enzyme-substrate (ES) complex."
},
{
  id: 3007,
  subject: "Biochemistry",
  topic: "Enzymes",
  chapter: "Diagnostic Enzymology",
  level: "Moderate",
  q: "A 52-year-old man presents to the emergency room with crushing substernal chest pain of 4 hours' duration. Electrocardiogram reveals ST-segment elevations in leads V1–V4. Which of the following serum enzyme or protein markers is the earliest to rise, and which remains elevated for the longest duration, respectively?",
  opts: [
    "Myoglobin rises earliest; Cardiac Troponin T remains elevated longest",
    "CK-MB rises earliest; Myoglobin remains elevated longest",
    "AST rises earliest; CK-MB remains elevated longest",
    "LDH-1 rises earliest; Cardiac Troponin I remains elevated longest"
  ],
  ans: 0,
  exp: "Myoglobin is a small hemeprotein that rises first (within 1 to 3 hours of myocardial necrosis), peaking at 6-8 hours, but lacks cardiac specificity. Cardiac troponins (cTnI and cTnT) rise by 3 to 6 hours, peak at 12-24 hours, and remain elevated for up to 10-14 days (cTnT up to 10-14 days; cTnI up to 7-10 days), making them the longest-lasting markers.",
  wrongExp: "• <strong>Option B (CK-MB earliest, Myoglobin longest):</strong> CK-MB rises at 4-6 hours and normalizes within 48-72 hours, whereas myoglobin clears rapidly within 24 hours.<br>• <strong>Option C (AST earliest):</strong> AST begins rising around 8-12 hours and is obsolete for acute myocardial infarction triage due to non-specificity.<br>• <strong>Option D (LDH-1 earliest):</strong> LDH (flipped pattern LDH1 > LDH2) rises late at 24-48 hours and peaks at 3-6 days; it is never the earliest."
},
{
  id: 3008,
  subject: "Biochemistry",
  topic: "Enzymes",
  chapter: "Coenzymes and Regulation",
  level: "Hard",
  q: "Pyruvate dehydrogenase (PDH) kinase is an allosteric regulatory enzyme that phosphorylates and inactivates the E1 alpha subunit of the pyruvate dehydrogenase complex. Which of the following sets of allosteric effectors directly activates PDH kinase, thereby shutting down the PDH complex?",
  opts: [
    "High ATP, high NADH, and high Acetyl-CoA",
    "High ADP, high NAD+, and high Pyruvate",
    "High Calcium, high Magnesium, and high AMP",
    "High CoA-SH, high NAD+, and high FAD"
  ],
  ans: 0,
  exp: "Pyruvate dehydrogenase kinase (PDK) phosphorylates and inactivates the E1 component of PDH. PDK is activated by high energy and product accumulation, specifically elevated ATP, NADH, and Acetyl-CoA. Conversely, PDK is inhibited by ADP, pyruvate, and NAD+. Furthermore, PDH phosphatase (which dephosphorylates and activates PDH) is stimulated by Ca2+ and insulin.",
  wrongExp: "• <strong>Option B (High ADP, high NAD+, high Pyruvate):</strong> These are potent allosteric inhibitors of PDH kinase, functioning to keep PDH in its dephosphorylated active state.<br>• <strong>Option C (High Calcium, high Magnesium, high AMP):</strong> Ca2+ activates PDH phosphatase (activating PDH), while AMP signals low energy charge, favoring PDH activation.<br>• <strong>Option D (High CoA-SH, high NAD+, high FAD):</strong> Substrates for the complex that relieve product inhibition and inhibit PDH kinase, keeping PDH fully active."
},
{
  id: 3009,
  subject: "Biochemistry",
  topic: "Enzymes",
  chapter: "Enzyme Kinetics and Lineweaver-Burk Plots",
  level: "Hard",
  q: "In a Lineweaver-Burk double-reciprocal plot (1/V versus 1/[S]), an uncompetitive inhibitor produces a line that demonstrates which of the following alterations compared to the uninhibited enzyme reaction?",
  opts: [
    "A parallel line shifted upward with an increased y-intercept and a more negative x-intercept",
    "A line pivoting on the y-intercept with a steeper slope and a less negative x-intercept",
    "A line pivoting on the x-intercept with a steeper slope and an increased y-intercept",
    "A parallel line shifted downward with a decreased y-intercept and a less negative x-intercept"
  ],
  ans: 0,
  exp: "In uncompetitive inhibition, the inhibitor binds exclusively to the [ES] complex. This reduces both apparent Vmax and apparent Km by the exact same ratio (alpha factor). On a Lineweaver-Burk plot (1/V = (Km/Vmax)(1/[S]) + 1/Vmax), the slope (Km/Vmax) remains constant, resulting in parallel lines. Because Vmax decreases, 1/Vmax (y-intercept) increases. Because Km decreases, -1/Km (x-intercept) becomes more negative (shifts left).",
  wrongExp: "• <strong>Option B (Pivoting on y-intercept):</strong> Represents pure competitive inhibition, where Vmax is constant (identical y-intercept) but apparent Km increases (x-intercept shifts closer to zero).<br>• <strong>Option C (Pivoting on x-intercept):</strong> Represents pure non-competitive inhibition, where Km is unchanged (identical x-intercept) but Vmax decreases (y-intercept increases).<br>• <strong>Option D (Parallel line shifted downward):</strong> Would imply an increase in Vmax, which represents enzyme activation rather than uncompetitive inhibition."
},
{
  id: 3010,
  subject: "Biochemistry",
  topic: "Enzymes",
  chapter: "Isoenzymes and Clinical Applications",
  level: "Moderate",
  q: "Lactate dehydrogenase (LDH) is a tetrameric enzyme composed of two distinct subunits: H (heart) and M (muscle). A patient presenting with acute hemolytic anemia will most likely show an elevation in which of the following LDH isoenzyme tetramers, producing the classic 'flipped' LDH pattern?",
  opts: [
    "LDH-1 (H4)",
    "LDH-3 (H2M2)",
    "LDH-4 (HM3)",
    "LDH-5 (M4)"
  ],
  ans: 0,
  exp: "LDH is a tetramer. LDH-1 (H4) and LDH-2 (H3M1) predominate in erythrocytes and cardiac myocytes. Normally, serum LDH-2 levels exceed LDH-1 (LDH-2 > LDH-1). In acute intravascular hemolysis or acute myocardial infarction, large amounts of LDH-1 are released into circulation, causing LDH-1 levels to surpass LDH-2, a diagnostic hallmark known as the 'flipped LDH' pattern.",
  wrongExp: "• <strong>Option B (LDH-3 [H2M2]):</strong> Predominates in lung, spleen, and endocrine tissues; selectively elevated in pulmonary embolism or extensive lymphoid malignancies.<br>• <strong>Option C (LDH-4 [HM3]):</strong> Distributed in leukocytes, kidney, and placenta, but does not cause the classic flipped pattern.<br>• <strong>Option D (LDH-5 [M4]):</strong> Found predominantly in skeletal muscle and hepatocytes; selectively elevated in acute viral hepatitis, toxic liver necrosis, or rhabdomyolysis."
},
{
  id: 3011,
  subject: "Biochemistry",
  topic: "Enzymes",
  chapter: "Suicide and Irreversible Inhibitors",
  level: "Moderate",
  q: "A 64-year-old man with hyperuricemia and recurrent gouty attacks is prescribed allopurinol. Inside the body, allopurinol is converted by xanthine oxidase into oxypurinol (alloxanthine), which remains tightly coordinated to molybdenum in the enzyme active site, permanently trapping it. This mechanism represents which type of enzyme inhibition?",
  opts: [
    "Suicide (mechanism-based irreversible) inhibition",
    "Allosteric feedback inhibition",
    "Uncompetitive inhibition",
    "Non-specific denaturing inhibition"
  ],
  ans: 0,
  exp: "Allopurinol is a classic example of a suicide inhibitor (mechanism-based irreversible inhibitor). The target enzyme, xanthine oxidase, initially acts on allopurinol as a substrate, hydroxylating it to oxypurinol (alloxanthine). Oxypurinol then binds tightly to the reduced molybdenum cofactor (Mo-IV) in the catalytic core, irreversibly inactivating the enzyme.",
  wrongExp: "• <strong>Option B (Allosteric feedback inhibition):</strong> Involves a downstream end-product binding to a distinct non-catalytic allosteric site reversibly, rather than catalytic processing at the active site.<br>• <strong>Option C (Uncompetitive inhibition):</strong> Reversibly binds to the enzyme-substrate complex without chemical conversion by the enzyme's catalytic machinery.<br>• <strong>Option D (Non-specific denaturing inhibition):</strong> Involves non-specific disruptions of tertiary structure (e.g., heavy metals, heat, extreme pH), not active-site-directed suicide catalysis."
},
{
  id: 3012,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Glycolysis and Pyruvate Oxidation",
  level: "Moderate",
  q: "An otherwise healthy 24-year-old marathon runner experiences severe muscle cramping and dark urine after a prolonged endurance race. In red blood cells, which lack mitochondria, glycolysis generates ATP strictly by substrate-level phosphorylation. Which of the following glycolytic enzymes catalyzes a substrate-level phosphorylation step that directly generates ATP?",
  opts: [
    "Phosphoglycerate kinase",
    "Glyceraldehyde 3-phosphate dehydrogenase",
    "Hexokinase",
    "Phosphofructokinase-1"
  ],
  ans: 0,
  exp: "Glycolysis contains two substrate-level phosphorylation reactions that directly generate ATP: (1) Phosphoglycerate kinase, which transfers a high-energy phosphate from 1,3-bisphosphoglycerate to ADP forming 3-phosphoglycerate and ATP; and (2) Pyruvate kinase, which converts phosphoenolpyruvate (PEP) to pyruvate generating ATP.",
  wrongExp: "• <strong>Option B (Glyceraldehyde 3-phosphate dehydrogenase):</strong> Catalyzes an oxidative phosphorylation reaction coupling NAD+ reduction to the formation of 1,3-bisphosphoglycerate, generating NADH rather than ATP directly.<br>• <strong>Option C (Hexokinase):</strong> Consumes one molecule of ATP to phosphorylate glucose to glucose 6-phosphate.<br>• <strong>Option D (Phosphofructokinase-1):</strong> Consumes one molecule of ATP to phosphorylate fructose 6-phosphate to fructose 1,6-bisphosphate."
},
{
  id: 3013,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Glycogen Storage Diseases",
  level: "Hard",
  q: "A 4-month-old infant is evaluated for profound lethargy, doll-like facies, massive hepatomegaly, and failure to thrive. Laboratory evaluation reveals fasting hypoglycemia (blood glucose 28 mg/dL), severe lactic acidosis, hyperuricemia, and hyperlipidemia. Administration of glucagon fails to raise the blood glucose level. A liver biopsy shows accumulation of glycogen with normal branching structure. Which of the following enzymes is deficient?",
  opts: [
    "Glucose-6-phosphatase",
    "Glycogen debranching enzyme",
    "Liver glycogen phosphorylase",
    "Lysosomal alpha-1,4-glucosidase"
  ],
  ans: 0,
  exp: "Von Gierke disease (GSD Type Ia) is caused by a deficiency of glucose-6-phosphatase. This enzyme catalyzes the final common step of both glycogenolysis and gluconeogenesis (Glucose-6-P -> Glucose). Its absence impairs glucose release, causing profound fasting hypoglycemia. Accumulated G6P shunts into glycolysis (causing massive lactic acidosis), HMP shunt/purine degradation (causing hyperuricemia), and lipogenesis (causing hypertriglyceridemia).",
  wrongExp: "• <strong>Option B (Glycogen debranching enzyme):</strong> Cori disease (GSD Type III) causes accumulation of limit dextrin-like glycogen with abnormally short outer branches; lactic acid and uric acid levels are typically normal.<br>• <strong>Option C (Liver glycogen phosphorylase):</strong> Hers disease (GSD Type VI) presents with mild hepatomegaly and mild hypoglycemia without severe lactic acidosis.<br>• <strong>Option D (Lysosomal alpha-1,4-glucosidase):</strong> Pompe disease (GSD Type II) causes massive cardiomegaly and hypotonia without prominent hypoglycemia or lactic acidosis."
},
{
  id: 3014,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Fructose and Galactose Metabolism",
  level: "Easy",
  q: "A 3-week-old neonate develops vomiting, jaundice, lethargy, and bilateral nuclear cataracts after being breastfed. Urinalysis reveals reducing substances in the urine, but a glucose oxidase dipstick test is negative. Which enzyme deficiency is responsible for this condition?",
  opts: [
    "Galactose-1-phosphate uridyltransferase",
    "Galactokinase",
    "Fructokinase",
    "Aldolase B"
  ],
  ans: 0,
  exp: "Classic galactosemia is caused by an autosomal recessive deficiency of galactose-1-phosphate uridyltransferase (GALT). Ingestion of galactose (from lactose in breast milk/formula) leads to accumulation of toxic galactose-1-phosphate and galactitol in the liver, brain, kidneys, and lens. This results in neonatal jaundice, hepatomegaly, failure to thrive, cataracts, and Escherichia coli sepsis. Non-glucose reducing sugars are positive on Clinitest but negative on glucose oxidase dipsticks.",
  wrongExp: "• <strong>Option B (Galactokinase):</strong> Deficiency causes galactokinase deficiency galactosemia, presenting solely with early cataract formation due to galactitol accumulation, without hepatic, renal, or systemic toxicity.<br>• <strong>Option C (Fructokinase):</strong> Essential fructosuria is a completely benign, asymptomatic condition where fructose is excreted unchanged in urine.<br>• <strong>Option D (Aldolase B):</strong> Hereditary fructose intolerance presents when fructose or sucrose is introduced into the diet (weaning), not during exclusive initial breastfeeding."
},
{
  id: 3015,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Hexose Monophosphate Shunt",
  level: "Moderate",
  q: "A 26-year-old soldier stationed abroad is prescribed primaquine for malaria prophylaxis. Four days later, he presents with dark urine, scleral icterus, fatigue, and a hemoglobin of 7.8 g/dL. Heinz bodies and bite cells are visible on peripheral blood smear. Which of the following pathways fails to generate adequate reducing equivalents in this patient's red blood cells?",
  opts: [
    "Glucose-6-phosphate dehydrogenase in the HMP shunt",
    "Pyruvate kinase in the Embden-Meyerhof pathway",
    "Glutathione peroxidase in the cytosol",
    "Methemoglobin reductase via NADH"
  ],
  ans: 0,
  exp: "Glucose-6-phosphate dehydrogenase (G6PD) catalyzes the first, rate-limiting step of the Hexose Monophosphate (HMP) Shunt (pentose phosphate pathway), generating NADPH. In erythrocytes, NADPH is indispensable for maintaining glutathione in its reduced state (GSH) via glutathione reductase. When exposed to oxidant drugs (e.g., primaquine, dapsone, sulfa drugs), lack of GSH leads to oxidation of hemoglobin sulfhydryl groups, precipitating Heinz bodies that are plucked out by splenic macrophages, forming bite cells.",
  wrongExp: "• <strong>Option B (Pyruvate kinase deficiency):</strong> Causes chronic non-spherocytic hemolytic anemia without oxidant triggers; it does not impair NADPH production or cause Heinz bodies.<br>• <strong>Option C (Glutathione peroxidase):</strong> An antioxidant enzyme that requires GSH as an electron donor; the enzyme itself is intact, but it lacks reduced cofactor due to deficient NADPH.<br>• <strong>Option D (Methemoglobin reductase):</strong> Utilizes NADH to convert Fe3+ (methemoglobin) back to Fe2+; deficiency causes cyanosis responsive to methylene blue, not acute drug-induced hemolytic anemia."
},
{
  id: 3016,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Citric Acid Cycle and Pyruvate Dehydrogenase",
  level: "Hard",
  q: "A chronic alcoholic presents with ataxia, confusion, and ophthalmoplegia (Wernicke encephalopathy). Administration of intravenous dextrose before thiamine administration can precipitate acute neurological collapse. Which of the following enzymes of the citric acid cycle directly requires thiamine pyrophosphate (TPP) as an obligate coenzyme?",
  opts: [
    "Alpha-ketoglutarate dehydrogenase",
    "Isocitrate dehydrogenase",
    "Malate dehydrogenase",
    "Succinate thiokinase"
  ],
  ans: 0,
  exp: "Alpha-ketoglutarate dehydrogenase complex (TCA cycle) and Pyruvate dehydrogenase complex (link reaction) both require five cofactors: Thiamine pyrophosphate (TPP from Vitamin B1), Lipoic acid, Coenzyme A (from B5), FAD (from B2), and NAD+ (from B3). Infusing glucose without thiamine depletes the remaining TPP reserves, impairing both PDH and alpha-ketoglutarate dehydrogenase, shutting down oxidative metabolism in thiamine-sensitive brain regions.",
  wrongExp: "• <strong>Option B (Isocitrate dehydrogenase):</strong> Catalyzes the oxidative decarboxylation of isocitrate to alpha-ketoglutarate using NAD+ (or NADP+), but does not require thiamine pyrophosphate.<br>• <strong>Option C (Malate dehydrogenase):</strong> Converts malate to oxaloacetate using NAD+ as the sole electron acceptor.<br>• <strong>Option D (Succinate thiokinase):</strong> Catalyzes the substrate-level phosphorylation of GDP to GTP (or ADP to ATP); it requires CoA, but does not use TPP."
},
{
  id: 3017,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Electron Transport Chain and Oxidative Phosphorylation",
  level: "Moderate",
  q: "A laboratory worker accidentally inhales a pesticide containing rotenone. Which of the following electron transport chain components is directly inhibited by rotenone, preventing electron transfer to ubiquinone (Coenzyme Q)?",
  opts: [
    "Complex I (NADH-Q oxidoreductase)",
    "Complex II (Succinate-Q reductase)",
    "Complex III (Q-cytochrome c oxidoreductase)",
    "Complex IV (Cytochrome c oxidase)"
  ],
  ans: 0,
  exp: "Rotenone (along with amobarbital/Amytal) is a specific inhibitor of Complex I (NADH-ubiquinone oxidoreductase). It binds to the ubiquinone reduction site, blocking electron transfer from iron-sulfur clusters to Coenzyme Q, terminating the proton gradient generated by Complex I, and halting ATP synthesis derived from NADH.",
  wrongExp: "• <strong>Option B (Complex II):</strong> Inhibited by competitive analogs like malonate and carboxin; succinate-driven electron flow through Complex II bypasses Complex I.<br>• <strong>Option C (Complex III):</strong> Specifically inhibited by Antimycin A, which blocks electron transfer from cytochrome b to cytochrome c1.<br>• <strong>Option D (Complex IV):</strong> Blocked by cyanide (CN-), carbon monoxide (CO), sodium azide, and hydrogen sulfide (H2S)."
},
{
  id: 3018,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Gluconeogenesis",
  level: "Moderate",
  q: "During prolonged fasting, hepatic gluconeogenesis maintains normoglycemia. The conversion of pyruvate to phosphoenolpyruvate bypasses the irreversible pyruvate kinase step. Which enzyme converts pyruvate to oxaloacetate inside the mitochondria, and which allosteric metabolite acts as its obligate activator?",
  opts: [
    "Pyruvate carboxylase; activated by Acetyl-CoA",
    "Phosphoenolpyruvate carboxykinase; activated by Citrate",
    "Pyruvate carboxylase; activated by Fructose 2,6-bisphosphate",
    "Malate dehydrogenase; activated by Glucagon"
  ],
  ans: 0,
  exp: "Pyruvate carboxylase is a biotin-dependent mitochondrial enzyme that converts pyruvate to oxaloacetate (requiring ATP and CO2). It is allosterically activated by Acetyl-CoA (derived from fatty acid beta-oxidation during fasting). High acetyl-CoA simultaneously inhibits pyruvate dehydrogenase, shunting pyruvate into gluconeogenesis.",
  wrongExp: "• <strong>Option B (PEPCK):</strong> Converts oxaloacetate to phosphoenolpyruvate in the cytosol/mitochondria using GTP; it is transcriptionally regulated (induced by cortisol and glucagon) rather than allosterically activated by citrate.<br>• <strong>Option C (Activated by Fructose 2,6-BP):</strong> Fructose 2,6-bisphosphate is a potent allosteric activator of phosphofructokinase-1 (PFK-1) and an inhibitor of fructose-1,6-bisphosphatase, having no effect on pyruvate carboxylase.<br>• <strong>Option D (Malate dehydrogenase):</strong> Reversible enzyme of TCA and malate-aspartate shuttle; it does not carboxylate pyruvate."
},
{
  id: 3019,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Regulation of Glycogen Metabolism",
  level: "Hard",
  q: "In skeletal muscle, calcium released from the sarcoplasmic reticulum during contraction synchronizes muscle work with glycogenolysis. Calcium directly binds to which subunit of phosphorylase kinase to trigger its activation without requiring phosphorylation?",
  opts: [
    "Delta subunit (Calmodulin)",
    "Alpha subunit (Regulatory)",
    "Beta subunit (Phosphorylated target)",
    "Gamma subunit (Catalytic)"
  ],
  ans: 0,
  exp: "Phosphorylase kinase is a hexadecamer composed of four tetramers (alpha, beta, gamma, delta)4. The delta (delta) subunit is calmodulin. When Ca2+ is released from the sarcoplasmic reticulum during muscle contraction, it binds directly to the delta subunit (calmodulin), allosterically activating the catalytic gamma subunit even in the absence of prior phosphorylation by Protein Kinase A.",
  wrongExp: "• <strong>Option B (Alpha subunit):</strong> Regulatory subunit that contains phosphorylation sites targeted by cyclic AMP-dependent Protein Kinase A (PKA).<br>• <strong>Option C (Beta subunit):</strong> Also acts as a regulatory subunit phosphorylated by PKA; it does not bind Ca2+ directly.<br>• <strong>Option D (Gamma subunit):</strong> The catalytic subunit that transfers phosphate to glycogen phosphorylase b, converting it to phosphorylase a, but it does not directly coordinate Ca2+ ions."
},
{
  id: 3020,
  subject: "Biochemistry",
  topic: "Carbohydrate Metabolism",
  chapter: "Uncouplers of Oxidative Phosphorylation",
  level: "Easy",
  q: "An adult ingests a toxic overdose of 2,4-dinitrophenol (DNP) in an attempt to lose weight rapidly. Which of the following alterations in oxygen consumption, mitochondrial proton gradient, and ATP synthesis best describes the cellular consequences of DNP toxicity?",
  opts: [
    "Oxygen consumption increases, proton gradient dissipates, ATP synthesis decreases",
    "Oxygen consumption stops, proton gradient increases, ATP synthesis stops",
    "Oxygen consumption decreases, proton gradient increases, ATP synthesis decreases",
    "Oxygen consumption increases, proton gradient increases, ATP synthesis increases"
  ],
  ans: 0,
  exp: "2,4-Dinitrophenol (DNP) is a lipophilic proton ionophore that shuttles protons across the inner mitochondrial membrane, bypassing the FoF1-ATP synthase. This dissipates the proton motive force (electrochemical gradient), terminating ATP synthesis. Uninhibited by a back-pressure proton gradient, electron transport accelerates to its maximum, markedly increasing oxygen consumption and releasing the uncoupled energy as uncontrolled heat (severe hyperthermia).",
  wrongExp: "• <strong>Option B (Oxygen consumption stops):</strong> Characteristic of electron transport chain complex inhibitors (e.g., cyanide, azide, carbon monoxide), which halt both electron flow and oxygen utilization.<br>• <strong>Option C (Proton gradient increases):</strong> Occurs with ATP synthase inhibitors like oligomycin, where protons accumulate in the intermembrane space because they cannot re-enter the matrix.<br>• <strong>Option D (ATP synthesis increases):</strong> Uncouplers uncouple electron transfer from ATP phosphorylation, leading to profound ATP depletion rather than increased ATP synthesis."
},
{
  id: 3021,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Fatty Acid Oxidation and Ketogenesis",
  level: "Moderate",
  q: "A 2-year-old child presents with lethargy, vomiting, and seizures following an overnight fast triggered by viral gastroenteritis. Laboratory findings reveal severe non-ketotic hypoglycemia (blood glucose 24 mg/dL, negative urine ketones), hyperammonemia, and dicarboxylic aciduria. A defect in carnitine palmitoyltransferase-1 (CPT-1) is suspected. Which of the following molecules allosterically inhibits CPT-1 during the fed state?",
  opts: [
    "Malonyl-CoA",
    "Acetyl-CoA",
    "Citrate",
    "Acetoacetyl-CoA"
  ],
  ans: 0,
  exp: "Carnitine palmitoyltransferase-1 (CPT-1) on the outer mitochondrial membrane converts long-chain fatty acyl-CoAs to acylcarnitines for import into the matrix. In the fed state, active fatty acid synthesis produces Malonyl-CoA (via Acetyl-CoA carboxylase). Malonyl-CoA potently inhibits CPT-1, preventing simultaneous, futile synthesis and beta-oxidation of fatty acids.",
  wrongExp: "• <strong>Option B (Acetyl-CoA):</strong> Inhibits pyruvate dehydrogenase and activates pyruvate carboxylase, but does not directly inhibit CPT-1.<br>• <strong>Option C (Citrate):</strong> An allosteric activator of Acetyl-CoA carboxylase (stimulating lipogenesis), but does not directly inhibit CPT-1.<br>• <strong>Option D (Acetoacetyl-CoA):</strong> An intermediate in ketogenesis and cholesterol biosynthesis, without direct regulatory action on CPT-1."
},
{
  id: 3022,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Hyperlipidemias",
  level: "Hard",
  q: "A 34-year-old male presents with recurrent episodes of severe acute pancreatitis. Physical examination reveals eruptive xanthomas over his extensor surfaces and lipemia retinalis. Fasting lipid profile shows triglyceride levels of 2,450 mg/dL. Following overnight refrigeration of his plasma, a thick, creamy top layer forms over a clear infranatant. A mutation in which of the following apolipoproteins is the most likely genetic cause?",
  opts: [
    "Apolipoprotein C-II",
    "Apolipoprotein B-100",
    "Apolipoprotein E",
    "Apolipoprotein A-I"
  ],
  ans: 0,
  exp: "This patient has Type I Familial Hyperchylomicronemia (Fredrickson Type I). It is caused by an autosomal recessive deficiency of either Lipoprotein Lipase (LPL) or its obligate cofactor, Apolipoprotein C-II (ApoC-II). Without functional LPL or ApoC-II, circulating chylomicrons cannot be cleared, leading to massive hypertriglyceridemia, eruptive xanthomas, lipemia retinalis, and recurrent acute pancreatitis. Chylomicrons float to the surface upon overnight refrigeration, forming a creamy layer over clear plasma.",
  wrongExp: "• <strong>Option B (Apolipoprotein B-100):</strong> Familial defective ApoB-100 causes Type IIa hypercholesterolemia (elevated LDL and total cholesterol), presenting with tendon xanthomas and premature atherosclerosis without massive hypertriglyceridemia.<br>• <strong>Option C (Apolipoprotein E):</strong> Deficiency causes Type III Hyperlipoproteinemia (Dysbetalipoproteinemia), characterized by elevated IDL and chylomicron remnants, presenting with palmar xanthomas and turbid plasma.<br>• <strong>Option D (Apolipoprotein A-I):</strong> The structural apoprotein of HDL and activator of LCAT; deficiency causes Tangier disease (hypoalphalipoproteinemia), not chylomicronemia."
},
{
  id: 3023,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Sphingolipidoses",
  level: "Moderate",
  q: "An 8-month-old infant of Ashkenazi Jewish descent is evaluated for developmental regression, hyperacusis (exaggerated startle response), and loss of motor milestones. Funduscopic examination reveals a prominent cherry-red spot in the macula. Abdominal examination reveals no hepatosplenomegaly. Electron microscopy demonstrates lysosomes with onion-skin lamellar bodies. Which enzyme is deficient?",
  opts: [
    "Hexosaminidase A",
    "Sphingomyelinase",
    "Glucocerebrosidase",
    "Galactocerebrosidase"
  ],
  ans: 0,
  exp: "Tay-Sachs disease is an autosomal recessive lysosomal storage disease caused by deficiency of Hexosaminidase A, leading to accumulation of GM2 ganglioside in neuronal lysosomes. Characteristic clinical findings include developmental regression, hyperacusis, cherry-red macular spots, and onion-skin lysosomes. Crucially, hepatosplenomegaly is absent, distinguishing it from Niemann-Pick disease (which has sphingomyelinase deficiency and massive hepatosplenomegaly).",
  wrongExp: "• <strong>Option B (Sphingomyelinase):</strong> Deficient in Niemann-Pick disease Type A, which also presents with a cherry-red spot and neurodegeneration, but hepatosplenomegaly is invariably present and foam cells are seen.<br>• <strong>Option C (Glucocerebrosidase):</strong> Deficient in Gaucher disease, presenting with massive hepatosplenomegaly, bone crises/Erlenmeyer flask deformities, and Gaucher cells (wrinkled tissue paper appearance), without a cherry-red spot.<br>• <strong>Option D (Galactocerebrosidase):</strong> Deficient in Krabbe disease, characterized by optic atrophy, globoid cells, and peripheral neuropathy, without a macular cherry-red spot."
},
{
  id: 3024,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Cholesterol and Lipoprotein Synthesis",
  level: "Easy",
  q: "A 55-year-old hypercholesterolemic patient is started on atorvastatin. Statins reduce plasma LDL-cholesterol primarily by competitively inhibiting HMG-CoA reductase. What is the immediate physiological and cellular downstream response in hepatocytes that mediates this drop in serum LDL?",
  opts: [
    "Upregulation of cell-surface LDL receptor expression",
    "Inhibition of intestinal cholesterol transporter NPC1L1",
    "Direct degradation of circulating Apolipoprotein B-100",
    "Activation of Lysosomal Acid Lipase"
  ],
  ans: 0,
  exp: "Inhibition of HMG-CoA reductase reduces intracellular de novo cholesterol synthesis in hepatocytes. Depletion of intracellular cholesterol triggers the cleavage and nuclear translocation of Sterol Regulatory Element-Binding Protein-2 (SREBP-2). SREBP-2 upregulates the transcription and cell-surface expression of LDL receptors (ApoB/E receptors), dramatically enhancing receptor-mediated endocytosis of circulating LDL particles.",
  wrongExp: "• <strong>Option B (Inhibition of NPC1L1):</strong> This is the specific mechanism of ezetimibe, which blocks dietary and biliary cholesterol absorption in the brush border of enterocytes.<br>• <strong>Option C (Direct degradation of ApoB-100):</strong> Antisense oligonucleotides like mipomersen inhibit ApoB-100 synthesis; statins do not directly degrade circulating ApoB-100.<br>• <strong>Option D (Activation of Lysosomal Acid Lipase):</strong> LAL degrades internalized cholesteryl esters inside lysosomes; it is not the primary mechanism of statin action."
},
{
  id: 3025,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Fatty Acid Synthesis",
  level: "Moderate",
  q: "De novo fatty acid synthesis occurs in the cytosol, but acetyl-CoA is generated primarily within the mitochondrial matrix. Acetyl-CoA is transported across the impermeable inner mitochondrial membrane into the cytosol in the form of which intermediate?",
  opts: [
    "Citrate",
    "Oxaloacetate",
    "Malonyl-CoA",
    "Carnitine"
  ],
  ans: 0,
  exp: "The inner mitochondrial membrane lacks an acetyl-CoA transporter. In the mitochondrial matrix, acetyl-CoA condenses with oxaloacetate via citrate synthase to form citrate. When energy charges are high, citrate accumulates and is exported via the citrate shuttle (tricarboxylate transporter) into the cytosol. In the cytosol, ATP-citrate lyase cleaves citrate back into acetyl-CoA and oxaloacetate for lipogenesis.",
  wrongExp: "• <strong>Option B (Oxaloacetate):</strong> The inner mitochondrial membrane is completely impermeable to oxaloacetate; it must be converted to citrate, malate, or aspartate to traverse the membrane.<br>• <strong>Option C (Malonyl-CoA):</strong> Formed solely in the cytosol by acetyl-CoA carboxylase; it is not transported out of the mitochondria.<br>• <strong>Option D (Carnitine):</strong> Shuttles long-chain fatty acyl groups from the cytosol into the mitochondria for beta-oxidation, not acetyl units into the cytosol."
},
{
  id: 3026,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Eicosanoids and Prostaglandins",
  level: "Easy",
  q: "Low-dose aspirin (75-100 mg daily) is widely used for secondary prevention of arterial thrombosis. Aspirin achieves irreversible inhibition of platelet cyclooxygenase-1 (COX-1) through which chemical mechanism?",
  opts: [
    "Covalent acetylation of a serine residue in the active site",
    "Competitive displacement of arachidonic acid from heme",
    "Reversible non-covalent hydrophobic pocket blockade",
    "Oxidative cleavage of the catalytic tyrosine residue"
  ],
  ans: 0,
  exp: "Aspirin (acetylsalicylic acid) is the only NSAID that irreversibly inhibits cyclooxygenase enzymes (COX-1 and COX-2). It transfers its acetyl group covalently to a specific serine residue (Ser-529 in COX-1, Ser-516 in COX-2) near the catalytic active site. Because platelets lack nuclei and ribosomal machinery, they cannot synthesize new COX-1, permanently abolishing thromboxane A2 (TXA2) generation for the entire platelet lifespan (7-10 days).",
  wrongExp: "• <strong>Option B (Competitive displacement from heme):</strong> Reversible NSAIDs like ibuprofen competitively and reversibly occupy the substrate-binding channel, not via irreversible acetylation.<br>• <strong>Option C (Reversible non-covalent blockade):</strong> Describes standard NSAIDs (e.g., naproxen, indomethacin), which dissociate from the active site as plasma levels fall.<br>• <strong>Option D (Oxidative cleavage of tyrosine):</strong> Incorrect; although Tyr-385 participates in the cyclooxygenase catalytic cycle, aspirin targets Ser-529 via transesterification."
},
{
  id: 3027,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Reverse Cholesterol Transport",
  level: "Hard",
  q: "Lecithin-cholesterol acyltransferase (LCAT) plays an essential role in reverse cholesterol transport by converting nascent, discoidal high-density lipoproteins (HDL) into mature spherical HDL particles. Which apolipoprotein serves as the obligate cofactor that activates LCAT?",
  opts: [
    "Apolipoprotein A-I",
    "Apolipoprotein B-48",
    "Apolipoprotein C-III",
    "Apolipoprotein E"
  ],
  ans: 0,
  exp: "Lecithin-cholesterol acyltransferase (LCAT) is synthesized by the liver and circulates bound to HDL. It transfers a fatty acid from phosphatidylcholine (lecithin) to free cholesterol, generating hydrophobic cholesteryl esters that partition into the core of the HDL particle. Apolipoprotein A-I (ApoA-I), the principal structural protein of HDL, acts as the obligate cofactor required to activate LCAT.",
  wrongExp: "• <strong>Option B (Apolipoprotein B-48):</strong> Structural apoprotein unique to chylomicrons synthesized in enterocytes; lacks LCAT-activating ability.<br>• <strong>Option C (Apolipoprotein C-III):</strong> Inhibits lipoprotein lipase (LPL) and impairs remnant clearance; it does not activate LCAT.<br>• <strong>Option D (Apolipoprotein E):</strong> Serves as the ligand for receptor-mediated clearance of chylomicron remnants and IDL via the LDL receptor and LRP; it does not activate LCAT."
},
{
  id: 3028,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Refsum Disease and Alpha Oxidation",
  level: "Moderate",
  q: "A 22-year-old man presents with progressive night blindness, sensorineural hearing loss, ataxia, and scaly skin changes (ichthyosis). Neurological examination confirms peripheral polyneuropathy. Biochemical evaluation reveals an extreme elevation of phytanic acid in plasma. This disorder is caused by an inherited defect in which metabolic process?",
  opts: [
    "Peroxisomal alpha-oxidation",
    "Mitochondrial beta-oxidation",
    "Microsomal omega-oxidation",
    "Cytosolic fatty acid desaturation"
  ],
  ans: 0,
  exp: "Refsum disease is an autosomal recessive disorder caused by a deficiency in peroxisomal phytanoyl-CoA 2-hydroxylase (PhyH), the key enzyme of peroxisomal alpha-oxidation. Phytanic acid (derived from dietary chlorophyll) has a methyl group at its beta-carbon (carbon 3), which blocks conventional beta-oxidation. Peroxisomal alpha-oxidation removes one carbon atom from the alpha-position, shifting the methyl group to an alpha-position and allowing normal beta-oxidation. Accumulation of phytanic acid damages myelin, retina, and skin.",
  wrongExp: "• <strong>Option B (Mitochondrial beta-oxidation):</strong> Handles linear fatty acids; it is blocked by the beta-methyl branch of phytanic acid until alpha-oxidation occurs.<br>• <strong>Option C (Microsomal omega-oxidation):</strong> A minor alternative pathway in the ER catalyzed by Cytochrome P450 4A enzymes converting fatty acids to dicarboxylic acids, not phytanic acid breakdown.<br>• <strong>Option D (Cytosolic fatty acid desaturation):</strong> Generates monounsaturated fatty acids (e.g., oleic acid via stearoyl-CoA desaturase), unrelated to phytanic acid catabolism."
},
{
  id: 3029,
  subject: "Biochemistry",
  topic: "Lipid Metabolism",
  chapter: "Brown Adipose Tissue and Thermogenesis",
  level: "Hard",
  q: "Non-shivering thermogenesis in neonates occurs predominantly within brown adipose tissue (BAT). This thermogenic process is driven by the opening of which inner mitochondrial membrane protein that dissipates the proton gradient?",
  opts: [
    "Thermogenin (UCP-1)",
    "Adenine nucleotide translocase",
    "Mitochondrial permeability transition pore",
    "Voltage-dependent anion channel (VDAC)"
  ],
  ans: 0,
  exp: "Brown adipose tissue (BAT) contains abundant mitochondria equipped with Thermogenin, also known as Uncoupling Protein-1 (UCP-1). Upon beta-3 adrenergic stimulation by norepinephrine, free fatty acids activate UCP-1, which provides a low-resistance conductance channel for protons to re-enter the mitochondrial matrix, bypassing ATP synthase. This collapses the proton electrochemical gradient, liberating the energy of electron transport entirely as heat.",
  wrongExp: "• <strong>Option B (Adenine nucleotide translocase):</strong> An antiporter that exchanges cytosolic ADP for matrix ATP across the inner mitochondrial membrane; it is not the physiological thermogenic uncoupler.<br>• <strong>Option C (Mitochondrial permeability transition pore):</strong> A non-selective mega-channel involved in apoptosis and necrosis during ischemia-reperfusion injury, not physiological thermogenesis.<br>• <strong>Option D (VDAC):</strong> Located in the outer mitochondrial membrane (porin), mediating metabolite diffusion, unrelated to proton gradient dissipation."
},
{
  id: 3030,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Urea Cycle Disorders",
  level: "Hard",
  q: "A 3-day-old male neonate becomes progressively lethargic, develops tachypnea, and vomits repeatedly. Arterial blood gas shows respiratory alkalosis. Serum ammonia is 680 mcg/dL (markedly elevated). Plasma amino acid chromatography demonstrates undetectable levels of citrulline, low arginine, and markedly elevated levels of orotic acid in the urine. Which enzyme of the urea cycle is deficient?",
  opts: [
    "Ornithine transcarbamylase",
    "Carbamoyl phosphate synthetase I",
    "N-acetylglutamate synthase",
    "Argininosuccinate synthetase"
  ],
  ans: 0,
  exp: "Ornithine transcarbamylase (OTC) deficiency is the most common urea cycle disorder and is the only one inherited in an X-linked recessive pattern. Deficiency of OTC causes accumulation of mitochondrial carbamoyl phosphate, which spills into the cytosol and enters the pyrimidine synthesis pathway via aspartate transcarbamylase, causing massive excretion of orotic acid in urine. Hyperammonemia with low/absent citrulline and high orotic acid confirms OTC deficiency.",
  wrongExp: "• <strong>Option B (Carbamoyl phosphate synthetase I):</strong> Deficient CPS I leads to hyperammonemia and undetectable citrulline, but orotic acid is NOT elevated because carbamoyl phosphate cannot be produced.<br>• <strong>Option C (N-acetylglutamate synthase):</strong> Deficiency mimics CPS I (absent activator), causing hyperammonemia without orotic aciduria.<br>• <strong>Option D (Argininosuccinate synthetase):</strong> Deficiency causes classic Citrullinemia Type I, characterized by massive elevations in plasma citrulline, not absent citrulline."
},
{
  id: 3031,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Phenylketonuria and Tetrahydrobiopterin",
  level: "Moderate",
  q: "A 4-month-old infant presents with fair skin, light blonde hair, blue eyes, intellectual disability, and a characteristic 'mousy' or musty body odor. Blood screening confirms elevated phenylalanine. Despite high-dose dietary phenylalanine restriction, the infant continues to deteriorate neurologically and develops hyperprolactinemia. This refractory atypical variant is caused by an inherited deficiency of which enzyme?",
  opts: [
    "Dihydropteridine reductase",
    "Phenylalanine hydroxylase",
    "Tyrosinase",
    "Homogentisate 1,2-dioxygenase"
  ],
  ans: 0,
  exp: "Atypical (malignant) PKU is caused by a deficiency in tetrahydrobiopterin (BH4) synthesis or recycling, most commonly due to dihydropteridine reductase (DHPR) deficiency. BH4 is an obligate cofactor not only for phenylalanine hydroxylase, but also for tyrosine hydroxylase (dopamine/catecholamine synthesis) and tryptophan hydroxylase (serotonin synthesis). Decreased dopamine removes the physiological inhibition on prolactin, causing hyperprolactinemia, and causes severe neurological decline despite dietary phenylalanine restriction.",
  wrongExp: "• <strong>Option B (Phenylalanine hydroxylase):</strong> Deficient in classic PKU; classic PKU responds well to dietary phenylalanine restriction and does not cause central dopamine deficiency or hyperprolactinemia.<br>• <strong>Option C (Tyrosinase):</strong> Converts tyrosine to melanin; deficiency causes oculocutaneous albinism without hyperphenylalaninemia or musty odor.<br>• <strong>Option D (Homogentisate 1,2-dioxygenase):</strong> Deficient in alkaptonuria, causing dark urine on standing, ochronosis, and arthropathy, without phenylalanine accumulation."
},
{
  id: 3032,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Alkaptonuria",
  level: "Easy",
  q: "A 38-year-old man presents with chronic lower back pain and stiffness. Physical examination reveals bluish-black pigmentation of the sclerae and ear cartilage (ochronosis). He notes that his urine turns dark black upon standing or when exposed to air. Deficiency of which of the following enzymes in the tyrosine degradation pathway is responsible for this condition?",
  opts: [
    "Homogentisate 1,2-dioxygenase",
    "Fumarylacetoacetate hydrolase",
    "Tyrosine aminotransferase",
    "4-Hydroxyphenylpyruvate dioxygenase"
  ],
  ans: 0,
  exp: "Alkaptonuria is a benign autosomal recessive disorder caused by deficiency of homogentisate 1,2-dioxygenase in the degradative pathway of tyrosine and phenylalanine. Homogentisic acid accumulates and auto-oxidizes to benzoquinone acetic acid, which forms black polymers (alkapton bodies) that deposit in connective tissues, cartilage (ochronosis), and heart valves, leading to debilitating arthropathy in adults and urine that darkens on standing/alkalinization.",
  wrongExp: "• <strong>Option B (Fumarylacetoacetate hydrolase):</strong> Deficient in Tyrosinemia Type I, causing accumulation of succinylacetone, severe liver failure, renal Fanconi syndrome, and cabbage-like odor.<br>• <strong>Option C (Tyrosine aminotransferase):</strong> Deficient in Tyrosinemia Type II (Richner-Hanhart syndrome), causing painful palmar/plantar hyperkeratosis and corneal ulcers.<br>• <strong>Option D (4-Hydroxyphenylpyruvate dioxygenase):</strong> Deficient in Tyrosinemia Type III, a rare condition presenting with mild ataxia or intellectual impairment without ochronosis."
},
{
  id: 3033,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Homocystinuria",
  level: "Moderate",
  q: "A 12-year-old boy presents with sudden-onset left hemiparesis due to middle cerebral artery thrombosis. Physical exam reveals a tall, slender build with arachnodactyly, pectus excavatum, and downward and inward (inferonasal) subluxation of the ocular lens (ectopia lentis). Plasma homocysteine and methionine levels are markedly elevated. Which cofactor should be supplemented first, as a subset of patients with this enzyme deficiency responds dramatically to it?",
  opts: [
    "Pyridoxine (Vitamin B6)",
    "Thiamine (Vitamin B1)",
    "Niacin (Vitamin B3)",
    "Riboflavin (Vitamin B2)"
  ],
  ans: 0,
  exp: "Classic homocystinuria is caused by an autosomal recessive deficiency of cystathionine beta-synthase (CBS), which converts homocysteine and serine to cystathionine. CBS strictly requires Pyridoxal phosphate (PLP, active Vitamin B6) as a cofactor. High-dose pyridoxine supplementation stabilizes mutant CBS enzyme conformations in ~50% of patients ('B6-responsive homocystinuria'). Clinical hallmarks include marfanoid habitus, downward lens dislocation (vs. upward in Marfan), intellectual disability, and life-threatening premature thromboembolism.",
  wrongExp: "• <strong>Option B (Thiamine):</strong> Cofactor for decarboxylases (PDH, alpha-KGDH, transketolase, BCKDH); it plays no role in cystathionine beta-synthase function.<br>• <strong>Option C (Niacin):</strong> Forms NAD+/NADP+ for redox reactions; not utilized by CBS.<br>• <strong>Option D (Riboflavin):</strong> Forms FMN/FAD; utilized by methylenetetrahydrofolate reductase (MTHFR), but does not activate cystathionine beta-synthase."
},
{
  id: 3034,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Branched-Chain Amino Acid Metabolism",
  level: "Moderate",
  q: "A 6-day-old infant develops poor feeding, alternating episodes of hypotonia and hypertonia, and encephalopathy. The mother notes a distinct sweet smell resembling burnt sugar or maple syrup coming from the infant's diaper. Plasma levels of leucine, isoleucine, and valine are markedly elevated. This disease is caused by an inherited defect in a multienzyme complex that requires which set of five cofactors?",
  opts: [
    "Thiamine, Lipoic acid, Coenzyme A, FAD, and NAD+",
    "Biotin, ATP, Magnesium, Pyridoxine, and NAD+",
    "Cobalamin, Folate, Iron, Copper, and Ascorbate",
    "Pyridoxal phosphate, BH4, GTP, Zinc, and SAM"
  ],
  ans: 0,
  exp: "Maple Syrup Urine Disease (MSUD) is caused by an autosomal recessive defect in the Branched-Chain Alpha-Keto Acid Dehydrogenase (BCKDH) complex, which degrades branched-chain amino acids (Leucine, Isoleucine, Valine). Like the other classic mitochondrial alpha-keto acid dehydrogenases (Pyruvate Dehydrogenase and Alpha-Ketoglutarate Dehydrogenase), BCKDH requires the classic 5 cofactors: Thiamine pyrophosphate (B1), Lipoic acid, Coenzyme A (B5), FAD (B2), and NAD+ (B3) ['Tender Loving Care For Nancy'].",
  wrongExp: "• <strong>Option B (Biotin, ATP, Mg2+...):</strong> Biotin and ATP are cofactors for carboxylases (e.g., pyruvate carboxylase, propionyl-CoA carboxylase), not alpha-keto acid oxidative decarboxylases.<br>• <strong>Option C (Cobalamin, Folate, Iron...):</strong> Cofactors for one-carbon transfers and hydroxylations, not alpha-keto acid dehydrogenase complexes.<br>• <strong>Option D (PLP, BH4, GTP...):</strong> Utilized by aromatic amino acid hydroxylases and transaminases, not BCKDH."
},
{
  id: 3035,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Amino Acid Derivatives and Neurotransmitters",
  level: "Easy",
  q: "A 45-year-old woman with a history of depression is treated with a monoamine oxidase (MAO) inhibitor. She presents to the emergency room with severe throbbing headache, diaphoresis, and a blood pressure of 210/120 mmHg after consuming aged cheese and red wine. Which amino acid metabolite escaped gastrointestinal breakdown to trigger this hypertensive crisis?",
  opts: [
    "Tyramine",
    "Tryptophan",
    "Histamine",
    "Glutamate"
  ],
  ans: 0,
  exp: "Aged cheeses, red wine, and cured meats contain high concentrations of tyramine, an indirect sympathomimetic amine produced by the decarboxylation of tyrosine. Normally, intestinal and hepatic monoamine oxidase type A (MAO-A) degrades ingested tyramine. In the presence of MAO inhibitors, tyramine enters the systemic circulation, is taken up into adrenergic nerve terminals, and forces massive vesicular release of stored norepinephrine, precipitating a life-threatening hypertensive emergency ('cheese reaction').",
  wrongExp: "• <strong>Option B (Tryptophan):</strong> Precursor for serotonin, melatonin, and niacin; it does not directly act as a sympathomimetic amine at adrenergic nerve endings.<br>• <strong>Option C (Histamine):</strong> Implicated in scombroid fish poisoning (flushing, headache, hypotension/bronchospasm), causing vasodilation rather than severe hypertensive crises.<br>• <strong>Option D (Glutamate):</strong> Excitatory neurotransmitter associated with Chinese Restaurant Syndrome (monosodium glutamate ingestion), but not the classic cheese-induced hypertensive crisis."
},
{
  id: 3036,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Nitric Oxide and Polyamines",
  level: "Moderate",
  q: "Endothelial nitric oxide synthase (eNOS) synthesizes nitric oxide (NO) to mediate smooth muscle relaxation and vasodilation. Nitric oxide is synthesized directly from which amino acid precursor, generating which by-product?",
  opts: [
    "L-Arginine, generating Citrulline",
    "L-Histidine, generating Urocanate",
    "L-Lysine, generating Cadaverine",
    "L-Ornithine, generating Putrescine"
  ],
  ans: 0,
  exp: "Nitric oxide synthase (NOS) catalyzes the five-electron oxidation of L-Arginine to form Nitric Oxide (NO) and L-Citrulline. The reaction consumes NADPH and molecular oxygen, utilizing multiple cofactors including FMN, FAD, Tetrahydrobiopterin (BH4), and heme. NO diffuses into vascular smooth muscle to activate soluble guanylyl cyclase, elevating intracellular cGMP and inducing vasodilation.",
  wrongExp: "• <strong>Option B (L-Histidine to Urocanate):</strong> Catalyzed by histidase in the catabolic pathway of histidine, not producing nitric oxide.<br>• <strong>Option C (L-Lysine to Cadaverine):</strong> Bacterial decarboxylation of lysine during tissue putrefaction generates the foul-smelling diamine cadaverine.<br>• <strong>Option D (L-Ornithine to Putrescine):</strong> Catalyzed by ornithine decarboxylase (ODC), the rate-limiting step in polyamine synthesis (spermidine, spermine)."
},
{
  id: 3037,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Porphyrin and Heme Metabolism",
  level: "Hard",
  q: "A 28-year-old woman is admitted with acute colicky abdominal pain, constipation, tachycardia, and hallucinations. She was recently started on phenobarbital for a seizure disorder. Her urine turns port-wine colored upon standing in sunlight. Notably, she has no cutaneous blisters or photosensitivity. Quantitative testing confirms a deficiency of porphobilinogen deaminase (hydroxymethylbilane synthase). Which intermediate accumulates in her urine?",
  opts: [
    "Porphobilinogen and delta-aminolevulinic acid",
    "Uroporphyrinogen III and coproporphyrinogen III",
    "Protoporphyrin IX and protoporphyrinogen",
    "Bilirubin diglucuronide and urobilinogen"
  ],
  ans: 0,
  exp: "Acute Intermittent Porphyria (AIP) is an autosomal dominant disease caused by deficiency of Porphobilinogen Deaminase (PBGD, also known as hydroxymethylbilane synthase). Induction of CYP450 enzymes by drugs like barbiturates consumes heme, releasing feedback inhibition on ALA synthase-1 (ALAS1). This causes massive accumulation of the upstream neurotoxic precursors delta-aminolevulinic acid (ALA) and porphobilinogen (PBG), precipitating acute neurovisceral attacks (pain, psychiatric symptoms, autonomic instability) and port-wine urine without photosensitivity (as porphyrin rings have not yet formed).",
  wrongExp: "• <strong>Option B (Uroporphyrinogen III):</strong> Accumulates in Porphyria Cutanea Tarda (uroporphyrinogen decarboxylase deficiency), which presents with prominent blistering photosensitivity and hypertrichosis, without acute abdominal crises.<br>• <strong>Option C (Protoporphyrin IX):</strong> Accumulates in Erythropoietic Protoporphyria, presenting with burning non-blistering photosensitivity upon sun exposure.<br>• <strong>Option D (Bilirubin diglucuronide):</strong> Conjugated bilirubin; elevated in cholestasis or Dubin-Johnson syndrome, unrelated to acute hepatic porphyrias."
},
{
  id: 3038,
  subject: "Biochemistry",
  topic: "Protein & Amino Acid Metabolism",
  chapter: "Creatine and Carnitine Synthesis",
  level: "Moderate",
  q: "Creatine phosphate serves as an immediate high-energy reservoir in skeletal muscle and the myocardium. Synthesis of creatine begins in the kidneys and is completed in the liver. Which three amino acids donate their carbon and nitrogen skeletons to synthesize creatine?",
  opts: [
    "Glycine, Arginine, and Methionine (as SAM)",
    "Glutamate, Cysteine, and Glycine",
    "Alanine, Aspartate, and Glutamine",
    "Lysine, Methionine, and Serine"
  ],
  ans: 0,
  exp: "Creatine biosynthesis begins in the kidney, where Arginine and Glycine condense via arginine:glycine amidinotransferase (AGAT) to form guanidinoacetate. Guanidinoacetate is then transported to the liver, where S-adenosylmethionine (SAM, derived from Methionine) donates a methyl group via guanidinoacetate N-methyltransferase (GAMT) to produce Creatine. Creatine is phosphorylated by creatine kinase in muscle to creatine phosphate.",
  wrongExp: "• <strong>Option B (Glutamate, Cysteine, Glycine):</strong> These three amino acids are the tripeptide precursors for Glutathione (gamma-glutamyl-cysteinyl-glycine).<br>• <strong>Option C (Alanine, Aspartate, Glutamine):</strong> Critical nitrogen carriers in blood and purine/pyrimidine synthesis, but they do not form the creatine backbone.<br>• <strong>Option D (Lysine, Methionine, Serine):</strong> Lysine and methionine donate components for carnitine synthesis, not creatine."
},
{
  id: 3039,
  subject: "Biochemistry",
  topic: "Molecular Biology & Genetics",
  chapter: "DNA Replication and Repair",
  level: "Easy",
  q: "A 6-year-old child presents with severe sunburns, freckling, and dry, scaly skin on minimal sun exposure. Examination reveals multiple hyperpigmented macules, poikiloderma, and two ulcerated cutaneous nodules confirmed on biopsy to be squamous cell carcinomas. Which DNA repair mechanism is defective in this patient?",
  opts: [
    "Nucleotide excision repair",
    "Base excision repair",
    "Mismatch repair",
    "Non-homologous end joining"
  ],
  ans: 0,
  exp: "Xeroderma pigmentosum (XP) is an autosomal recessive disease caused by mutations in genes encoding the Nucleotide Excision Repair (NER) complex (e.g., XPA through XPG endonucleases). Ultraviolet radiation induces the covalent cross-linking of adjacent pyrimidine bases, forming cyclobutane pyrimidine dimers (thymine dimers). The NER system recognizes, excises an oligonucleotide containing the lesion, and repairs it. Loss of NER causes extreme UV sensitivity and a >1000-fold increased risk of skin cancers.",
  wrongExp: "• <strong>Option B (Base excision repair):</strong> Fixes non-bulky, spontaneous base alterations (e.g., deamination of cytosine to uracil) using DNA glycosylases and AP endonucleases.<br>• <strong>Option C (Mismatch repair):</strong> Fixes post-replicative mismatches and microsatellite slippages; defective in Lynch syndrome (HNPCC).<br>• <strong>Option D (Non-homologous end joining):</strong> Reconnects double-stranded DNA breaks induced by ionizing radiation; defective in ataxia-telangiectasia and severe combined immunodeficiency (SCID)."
},
{
  id: 3040,
  subject: "Biochemistry",
  topic: "Molecular Biology & Genetics",
  chapter: "Transcription and RNA Processing",
  level: "Moderate",
  q: "A mushroom forager presents with severe abdominal cramps, watery diarrhea, and subsequent fulminant hepatic necrosis after consuming wild mushrooms identified as Amanita phalloides. The lethal fungal toxin alpha-amanitin exerts its cellular toxicity by specifically inhibiting which human enzyme?",
  opts: [
    "RNA Polymerase II",
    "RNA Polymerase I",
    "RNA Polymerase III",
    "Poly(A) polymerase"
  ],
  ans: 0,
  exp: "Alpha-amanitin, found in the death cap mushroom (Amanita phalloides), is an extremely potent inhibitor of eukaryotic RNA Polymerase II, the enzyme responsible for synthesizing messenger RNA (mRNA). At high concentrations, it can also inhibit RNA Polymerase III (which makes tRNA and 5S rRNA), but RNA Polymerase I (which makes 28S, 18S, and 5.8S rRNA) is completely insensitive. Arrest of mRNA synthesis halts global cellular protein translation, causing massive hepatocyte apoptosis and acute liver failure.",
  wrongExp: "• <strong>Option B (RNA Polymerase I):</strong> Synthesizes the 45S precursor of 28S, 18S, and 5.8S rRNAs in the nucleolus; it is totally resistant to alpha-amanitin.<br>• <strong>Option C (RNA Polymerase III):</strong> Synthesizes transfer RNAs (tRNAs) and 5S rRNA; it is inhibited only at exceedingly high concentrations of alpha-amanitin, whereas Pol II is inhibited at nanomolar concentrations.<br>• <strong>Option D (Poly[A] polymerase):</strong> Adds the polyadenylic acid tail to the 3' end of pre-mRNAs independent of a DNA template; it is not the direct target of alpha-amanitin."
},
{
  id: 3041,
  subject: "Biochemistry",
  topic: "Molecular Biology & Genetics",
  chapter: "Genetic Code and Translation",
  level: "Moderate",
  q: "A bacterial strain acquires high-level resistance to aminoglycoside antibiotics. Sequencing demonstrates an enzymatic modification of the bacterial ribosome. Aminoglycosides (e.g., gentamicin) normally bind to which ribosomal subunit, and which fundamental step of protein translation do they primarily disrupt?",
  opts: [
    "30S subunit; causing mRNA misreading and inhibiting initiation complex assembly",
    "50S subunit; blocking peptidyl transferase activity",
    "50S subunit; preventing ribosomal translocation down mRNA",
    "30S subunit; preventing binding of aminoacyl-tRNA to the A-site"
  ],
  ans: 0,
  exp: "Aminoglycosides bind irreversibly to the 16S rRNA within the 30S ribosomal subunit of prokaryotes. This binding interferes with the formation of the 30S initiation complex, freezes translation, and induces conformational changes that cause misreading of the mRNA codon sequence, resulting in the synthesis of non-functional or toxic aberrant proteins.",
  wrongExp: "• <strong>Option B (50S subunit; blocking peptidyl transferase):</strong> The specific mechanism of chloramphenicol, which binds to the 50S subunit and inhibits peptidyl transferase.<br>• <strong>Option C (50S subunit; preventing translocation):</strong> The mechanism of macrolides (e.g., erythromycin) and clindamycin, which bind the 50S subunit and impede peptide chain elongation/translocation.<br>• <strong>Option D (30S subunit; preventing aminoacyl-tRNA binding):</strong> The classic mechanism of tetracyclines, which block aminoacyl-tRNA entry into the ribosomal A-site."
},
{
  id: 3042,
  subject: "Biochemistry",
  topic: "Molecular Biology & Genetics",
  chapter: "Purine and Pyrimidine Synthesis",
  level: "Moderate",
  q: "A 2-year-old boy is brought to the clinic because of severe self-mutilating behaviors, including biting his lips and fingers, along with dystonia, choreoathetosis, and cognitive delay. Laboratory studies reveal a serum uric acid level of 12.8 mg/dL and orange 'sand-like' crystals in his diapers. Which enzyme of purine salvage is deficient in this child?",
  opts: [
    "Hypoxanthine-guanine phosphoribosyltransferase",
    "Adenine phosphoribosyltransferase",
    "Adenosine deaminase",
    "Xanthine oxidase"
  ],
  ans: 0,
  exp: "Lesch-Nyhan syndrome is an X-linked recessive disorder caused by a complete deficiency of Hypoxanthine-Guanine Phosphoribosyltransferase (HGPRT). HGPRT salvages hypoxanthine to IMP and guanine to GMP using PRPP. In its absence, PRPP accumulates, hyperactivating PRPP amidotransferase and driving massive de novo purine synthesis. Unsalvaged purines degrade to uric acid, causing severe hyperuricemia, orange sodium urate crystals, gouty arthritis, nephrolithiasis, dystonia, and characteristic self-mutilation.",
  wrongExp: "• <strong>Option B (Adenine phosphoribosyltransferase):</strong> APRT deficiency causes 2,8-dihydroxyadenine nephrolithiasis, without the neurological signs or self-mutilation of Lesch-Nyhan syndrome.<br>• <strong>Option C (Adenosine deaminase):</strong> Deficiency causes severe combined immunodeficiency (SCID) due to dATP accumulation that poisons ribonucleotide reductase in lymphocytes.<br>• <strong>Option D (Xanthine oxidase):</strong> Deficiency (xanthinuria) leads to hypouricemia and xanthine urinary stones, rather than hyperuricemia."
},
{
  id: 3043,
  subject: "Biochemistry",
  topic: "Molecular Biology & Genetics",
  chapter: "Antineoplastic Antimetabolites",
  level: "Easy",
  q: "A 56-year-old woman receiving adjuvant chemotherapy for breast cancer is treated with 5-fluorouracil (5-FU). Inside cells, 5-FU is metabolically converted into 5-fluoro-2'-deoxyuridine-5'-monophosphate (5-FdUMP), which forms a stable covalent ternary complex that irreversibly inhibits which enzyme?",
  opts: [
    "Thymidylate synthase",
    "Dihydrofolate reductase",
    "Ribonucleotide reductase",
    "Inosine monophosphate dehydrogenase"
  ],
  ans: 0,
  exp: "5-Fluorouracil (5-FU) is a pyrimidine analog that is converted intracellularly to 5-FdUMP. 5-FdUMP acts as a suicide inhibitor of Thymidylate Synthase by forming an irreversible covalent ternary complex with the enzyme and the cofactor N5,N10-methylene-tetrahydrofolate. This arrests the conversion of dUMP to dTMP, inducing 'thymineless death' in rapidly dividing tumor cells.",
  wrongExp: "• <strong>Option B (Dihydrofolate reductase):</strong> Directly inhibited by methotrexate, aminopterin, and trimethoprim, not by 5-FU.<br>• <strong>Option C (Ribonucleotide reductase):</strong> Inhibited by hydroxyurea, which scavenges the tyrosyl free radical required for reducing ribonucleotides to deoxyribonucleotides.<br>• <strong>Option D (IMP dehydrogenase):</strong> Inhibited by mycophenolate mofetil and ribavirin, shutting down de novo synthesis of GMP."
},
{
  id: 3044,
  subject: "Biochemistry",
  topic: "Molecular Biology & Genetics",
  chapter: "Trinucleotide Repeat Expansions",
  level: "Hard",
  q: "A 36-year-old man presents with progressive choreiform movements, emotional lability, and cognitive decline. His father developed similar symptoms at age 52, and his paternal grandfather was diagnosed at age 68. Genetic analysis demonstrates an expansion of a CAG trinucleotide repeat in exon 1 of the huntingtin (HTT) gene. The earlier and more severe onset observed across successive generations represents which genetic phenomenon?",
  opts: [
    "Genetic anticipation",
    "Locus heterogeneity",
    "Incomplete penetrance",
    "Genomic imprinting"
  ],
  ans: 0,
  exp: "Genetic anticipation refers to the clinical phenomenon where an inherited genetic disorder exhibits earlier onset and increased severity in successive generations. In Huntington disease, an autosomal dominant disorder caused by unstable CAG repeat expansions in the HTT gene, repeat expansion occurs predominantly during paternal spermatogenesis (due to DNA replication slippage), leading to longer repeats and earlier disease manifestation in offspring.",
  wrongExp: "• <strong>Option B (Locus heterogeneity):</strong> A phenomenon where mutations at completely different genetic loci produce an identical clinical phenotype (e.g., osteogenesis imperfecta caused by COL1A1 or COL1A2 mutations).<br>• <strong>Option C (Incomplete penetrance):</strong> Occurs when individuals carrying a pathogenic mutation fail to express the phenotypic traits of the disorder.<br>• <strong>Option D (Genomic imprinting):</strong> Epigenetic silencing of an allele dependent on the parent of origin (e.g., Prader-Willi vs. Angelman syndromes on chromosome 15q11-q13)."
},
{
  id: 3045,
  subject: "Biochemistry",
  topic: "Molecular Biology & Genetics",
  chapter: "Epigenetics and Chromatin Remodeling",
  level: "Moderate",
  q: "Acetylation of epsilon-amino groups of conserved lysine residues within histone tails diminishes their positive charge, relaxing the nucleosome architecture. Which of the following effects does histone hyperacetylation have on chromatin structure and transcription?",
  opts: [
    "Forms euchromatin, resulting in increased transcriptional activity",
    "Forms heterochromatin, resulting in transcriptional silencing",
    "Directs ubiquitination of DNA, halting replication forks",
    "Promotes CpG island methylation, leading to gene repression"
  ],
  ans: 0,
  exp: "Histone acetyltransferases (HATs) transfer acetyl groups from acetyl-CoA to positively charged lysine residues on histone amino-terminal tails. Neutralization of the positive lysine charges weakens their electrostatic attraction to negatively charged phosphate backbones of DNA. This transforms dense, inaccessible heterochromatin into open, transcriptionally permissive euchromatin, facilitating transcription factor binding.",
  wrongExp: "• <strong>Option B (Forms heterochromatin, silencing transcription):</strong> Produced by Histone Deacetylases (HDACs), which remove acetyl groups, restoring positive lysine charges and condensing chromatin.<br>• <strong>Option C (Directs ubiquitination of DNA):</strong> DNA is not ubiquitinated; ubiquitination targets proteins, not nucleic acid strands.<br>• <strong>Option D (Promotes CpG methylation):</strong> DNA methylation at CpG islands is mediated by DNA methyltransferases (DNMTs) and is associated with long-term transcriptional repression, working cooperatively with histone deacetylation, not hyperacetylation."
},
{
  id: 3046,
  subject: "Biochemistry",
  topic: "Vitamins & Minerals",
  chapter: "Fat-Soluble Vitamins",
  level: "Easy",
  q: "A 4-year-old boy in a refugee camp presents with dry, scaly eyes and poor vision in dim lighting. Examination of the conjunctiva reveals triangular, foamy-appearing plaques adjacent to the limbus (Bitot spots) and generalized xerophthalmia. Which of the following vitamin forms is directly isomerized by photons in rhodopsin during visual phototransduction?",
  opts: [
    "11-cis-retinal",
    "All-trans-retinoic acid",
    "Beta-carotene",
    "Retinyl palmitate"
  ],
  ans: 0,
  exp: "Vitamin A deficiency causes nyctalopia (night blindness), xerophthalmia, Bitot spots, and keratomalacia. In retinal rod cells, the visual chromophore 11-cis-retinal is covalently bound to the apoprotein opsin, forming rhodopsin. Absorption of a photon isomerizes 11-cis-retinal into all-trans-retinal, triggering a conformational change into metarhodopsin II that activates the G-protein transducin, closing cGMP-gated sodium channels and hyperpolarizing the photoreceptor.",
  wrongExp: "• <strong>Option B (All-trans-retinoic acid):</strong> An active metabolite that binds nuclear RAR receptors to regulate epithelial gene differentiation; it cannot participate in the rhodopsin visual cycle.<br>• <strong>Option C (Beta-carotene):</strong> Provitamin A carotenoid cleaved by intestinal dioxygenase to form retinal; it cannot bind opsin directly without cleavage.<br>• <strong>Option D (Retinyl palmitate):</strong> The primary hepatic storage form of vitamin A within hepatic stellate (Ito) cells, not the active photopigment."
},
{
  id: 3047,
  subject: "Biochemistry",
  topic: "Vitamins & Minerals",
  chapter: "Water-Soluble B Vitamins",
  level: "Moderate",
  q: "A 48-year-old chronic alcoholic presents with dementia, severe watery diarrhea, and a symmetric, hyperpigmented, scaly rash in a broad collar-like distribution around his neck (Casal necklace). The essential amino acid tryptophan can be converted in the human liver into which of the following vitamins, whose severe deficiency is responsible for this patient's symptoms?",
  opts: [
    "Niacin (Vitamin B3)",
    "Pyridoxine (Vitamin B6)",
    "Thiamine (Vitamin B1)",
    "Riboflavin (Vitamin B2)"
  ],
  ans: 0,
  exp: "Pellagra is caused by severe deficiency of Niacin (Vitamin B3) or its precursor amino acid, Tryptophan. It presents classically with the '3 Ds': Dermatitis (photosensitive hyperpigmentation, Casal necklace), Diarrhea, and Dementia (progressing to Death if untreated). Approximately 60 mg of dietary tryptophan can synthesize 1 mg of niacin via a kynurenine pathway that requires riboflavin (B2) and pyridoxal phosphate (B6) as cofactors.",
  wrongExp: "• <strong>Option B (Pyridoxine [B6]):</strong> Acts as a cofactor in the conversion of tryptophan to niacin, but its own deficiency causes peripheral neuropathy and sideroblastic anemia.<br>• <strong>Option C (Thiamine [B1]):</strong> Deficiency causes beriberi (dry/wet) and Wernicke-Korsakoff syndrome, not Casal necklace dermatitis or pellagra.<br>• <strong>Option D (Riboflavin [B2]):</strong> Deficiency causes ariboflavinosis, characterized by angular cheilitis, glossitis, and stomatitis, without Casal necklace or severe watery diarrhea."
},
{
  id: 3048,
  subject: "Biochemistry",
  topic: "Vitamins & Minerals",
  chapter: "Folate and Cobalamin Metabolism",
  level: "Hard",
  q: "A 62-year-old woman with a history of Hashimoto thyroiditis presents with progressive paresthesias in her feet, loss of vibratory sense, spastic ataxia, and memory loss. Laboratory tests show macrocytic anemia (Hb 8.2 g/dL, MCV 114 fL) and hypersegmented neutrophils. Serum levels of methylmalonic acid (MMA) and total homocysteine are both elevated. Which biochemical reaction directly requires cobalamin (Vitamin B12) and fails in this patient to cause elevated methylmalonic acid?",
  opts: [
    "Methylmalonyl-CoA mutase",
    "Methionine synthase",
    "Homocysteine methyltransferase",
    "Propionyl-CoA carboxylase"
  ],
  ans: 0,
  exp: "Vitamin B12 (cobalamin) serves as an obligate coenzyme for only two enzymes in humans: (1) Methionine synthase (converting homocysteine to methionine using methylcobalamin), and (2) Methylmalonyl-CoA mutase (converting L-methylmalonyl-CoA to succinyl-CoA using 5'-deoxyadenosylcobalamin). In B12 deficiency, both methylmalonic acid and homocysteine accumulate. The accumulation of abnormal methylmalonyl-CoA disrupts myelin synthesis, causing Subacute Combined Degeneration (SCD) of the spinal cord.",
  wrongExp: "• <strong>Option B (Methionine synthase):</strong> Requires methylcobalamin; its impairment leads to homocysteinemia and functional folate trapping, causing megaloblastic anemia, but does NOT cause methylmalonic acidemia.<br>• <strong>Option C (Homocysteine methyltransferase):</strong> Synonym/analog of methionine synthase, affecting homocysteine rather than methylmalonyl-CoA.<br>• <strong>Option D (Propionyl-CoA carboxylase):</strong> A biotin-dependent enzyme that converts propionyl-CoA to methylmalonyl-CoA; it does not utilize cobalamin."
},
{
  id: 3049,
  subject: "Biochemistry",
  topic: "Vitamins & Minerals",
  chapter: "Trace Elements and Copper Metabolism",
  level: "Moderate",
  q: "A 16-year-old boy presents with tremor, dysarthria, dystonia, and worsening performance in school. Slit-lamp examination reveals greenish-brown rings around the limbus of both corneas (Kayser-Fleischer rings). Serum ceruloplasmin is markedly reduced, and 24-hour urinary copper excretion is elevated. Wilson disease is caused by an inherited mutation in an ATP-dependent copper transporter encoded by which gene?",
  opts: [
    "ATP7B",
    "ATP7A",
    "HFE",
    "SLC3A1"
  ],
  ans: 0,
  exp: "Wilson disease (hepatolenticular degeneration) is an autosomal recessive disorder caused by mutations in the ATP7B gene on chromosome 13. ATP7B encodes a P-type copper-transporting ATPase in hepatocytes that mediates copper incorporation into apoceruloplasmin and excretion into bile. Defective ATP7B leads to toxic copper accumulation in the liver, basal ganglia (causing parkinsonian symptoms/dystonia), cornea (Kayser-Fleischer rings), and kidneys.",
  wrongExp: "• <strong>Option B (ATP7A):</strong> Mutated in Menkes disease (X-linked recessive), impairing basolateral copper export from enterocytes, resulting in systemic copper deficiency, brittle kinky hair, and hypotonia.<br>• <strong>Option C (HFE):</strong> Mutated in hereditary hemochromatosis, leading to dysregulated enterocyte iron absorption via hepcidin suppression.<br>• <strong>Option D (SLC3A1):</strong> Mutated in Cystinuria, causing defective renal proximal tubule reabsorption of cystine, ornithine, lysine, and arginine (COLA)."
},
{
  id: 3050,
  subject: "Biochemistry",
  topic: "Vitamins & Minerals",
  chapter: "Ascorbic Acid and Collagen Synthesis",
  level: "Easy",
  q: "A 58-year-old unhoused man who consumes a diet consisting solely of canned bread and black tea presents with bleeding gums, corkscrew hairs with perifollicular hemorrhages, loose teeth, and poor wound healing. Ascorbic acid (Vitamin C) is an essential cofactor for which of the following post-translational modifications of collagen occurring within the rough endoplasmic reticulum?",
  opts: [
    "Hydroxylation of proline and lysine residues",
    "Cleavage of amino- and carboxy-terminal propeptides",
    "Cross-linking of lysine-norleucine by lysyl oxidase",
    "Glycosylation of specific serine residues"
  ],
  ans: 0,
  exp: "Scurvy results from severe Vitamin C (ascorbate) deficiency. Inside the rough endoplasmic reticulum, prolyl hydroxylase and lysyl hydroxylase catalyze the post-translational hydroxylation of proline and lysine residues on preprocollagen chains. Ascorbate acts as a reducing agent to keep the active site iron in its ferrous (Fe2+) state. Without hydroxyproline, interchain hydrogen bonds cannot form, preventing the self-assembly of the stable triple helix and causing capillary fragility and poor healing.",
  wrongExp: "• <strong>Option B (Cleavage of propeptides):</strong> Performed by extracellular procollagen peptidases in the extracellular space to convert procollagen to tropocollagen; independent of vitamin C.<br>• <strong>Option C (Cross-linking by lysyl oxidase):</strong> Extracellular copper-dependent enzyme that deaminates lysine/hydroxylysine to form reactive aldehydes, generating covalent cross-links.<br>• <strong>Option D (Glycosylation of serine):</strong> In collagen, glucose and galactose are attached to hydroxylysine residues, not serine residues, and this step does not utilize vitamin C."
}
];
