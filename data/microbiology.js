export const microbiologyQs = [
{
  id: 6001,
  subject: "Microbiology",
  topic: "General Microbiology",
  chapter: "Bacterial Cell Wall & Endotoxins",
  level: "Moderate",
  q: "A 42-year-old male with urosepsis develops profound hypotension (blood pressure 70/40 mmHg), tachypnea, and generalized petechiae. Blood cultures flag positive for Gram-negative bacilli. The patient's refractory septic shock is driven by the release of lipopolysaccharide (LPS) from the outer membrane of the lysing bacteria. Which specific chemical moiety of LPS is primarily responsible for triggering the cytokine storm via Toll-like receptor 4 (TLR4) activation?",
  opts: [
    "O-antigen polysaccharide side chain",
    "Core polysaccharide domain",
    "Lipid A",
    "Braun lipoprotein"
  ],
  ans: 2,
  exp: "Lipid A represents the toxic, biologically active anchor of the lipopolysaccharide (LPS) molecule embedded in the outer leaflet of Gram-negative bacterial outer membranes. During bacterial lysis or division, Lipid A is recognized by LPS-binding protein (LBP) and presented to CD14 and Toll-like receptor 4 (TLR4) on macrophages and dendritic cells. This interaction triggers high-level NF-κB nuclear translocation, eliciting massive transcriptional release of pro-inflammatory cytokines—predominantly TNF-alpha, Interleukin-1 (IL-1), and Interleukin-6 (IL-6)—leading to nitric oxide-mediated vasodilation, systemic hypotension, microvascular leak, and septic shock.",
  wrongExp: "• <strong>Option A (O-antigen polysaccharide side chain):</strong> Represents the highly variable outer repeating oligosaccharide chain that determines bacterial serological specificity (e.g., E. coli O157:H7) and provides hydrophilic protection against bile salts and complement insertion, but lacks direct endotoxic shock-inducing capability.<br>• <strong>Option B (Core polysaccharide domain):</strong> Serves as a relatively conserved oligosaccharide bridge linking Lipid A to the O-antigen, containing unique bacterial sugars like 2-keto-3-deoxyoctonate (KDO) and heptose, but does not mediate endotoxic shock.<br>• <strong>Option D (Braun lipoprotein):</strong> Is the most abundant structural protein in the Gram-negative cell envelope, covalently anchoring the outer membrane to the underlying peptidoglycan layer, but does not directly stimulate the TLR4 complex to cause septic collapse."
},
{
  id: 6002,
  subject: "Microbiology",
  topic: "General Microbiology",
  chapter: "Sterilization and Disinfection",
  level: "Easy",
  q: "The Central Sterile Services Department (CSSD) of a tertiary care hospital runs a routine quality assurance cycle for their surgical autoclave operating at 121°C at 15 psi for 15 minutes. Which of the following spore-forming bacterial organisms is utilized as the standard biological indicator to validate sterilization efficacy in this moist-heat autoclave?",
  opts: [
    "Geobacillus stearothermophilus",
    "Bacillus atrophaeus",
    "Clostridium tetani",
    "Bacillus pumilus"
  ],
  ans: 0,
  exp: "Geobacillus stearothermophilus (formerly Bacillus stearothermophilus) produces extremely heat-resistant endospores that possess high concentrations of calcium dipicolinate and specialized small acid-soluble spore proteins (SASPs). Because its spores withstand temperatures up to 121°C for over 12 minutes, non-viability of G. stearothermophilus spores after a run provides the gold standard biological proof that moist-heat autoclaving conditions were fully lethal to all transmissible microbes, including bacterial spores.",
  wrongExp: "• <strong>Option B (Bacillus atrophaeus):</strong> Produces spores with exceptional resistance to dry heat and alkylating gases; it is the official biological indicator for dry heat sterilizers (hot air ovens) and ethylene oxide (EtO) gas sterilization, not steam autoclaves.<br>• <strong>Option C (Clostridium tetani):</strong> Although an anaerobic spore-former, its spores possess inferior thermal resistance compared to thermophilic geobacilli, making it unsuitable and hazardous for CSSD validation.<br>• <strong>Option D (Bacillus pumilus):</strong> Produces spores with extreme resistance to ionizing radiation; it is specifically utilized as the biological indicator for gamma radiation and electron beam sterilization facilities."
},
{
  id: 6003,
  subject: "Microbiology",
  topic: "General Microbiology",
  chapter: "Bacterial Genetics",
  level: "Hard",
  q: "A molecular microbiology lab investigates how a hospital strain of Pseudomonas aeruginosa rapidly acquired a plasmid-borne gene conferring metallo-beta-lactamase resistance. The process was completely abrogated in vitro by the addition of micrococcal DNase to the culture broth, but was unaffected by physical barriers separating donor and recipient cells that permitted free liquid flow. Which mechanism of horizontal gene transfer was responsible?",
  opts: [
    "High-frequency recombination conjugation",
    "Generalized transduction",
    "Natural transformation",
    "Specialized transduction"
  ],
  ans: 2,
  exp: "Transformation is the process by which competent bacterial cells take up naked, free exogenous DNA fragments directly from their surrounding liquid environment. Because the transforming DNA exists extracellularly without the protection of a viral capsid or direct cell-to-cell mating bridge, it is uniquely susceptible to enzymatic degradation by added deoxyribonucleases (DNases). Complete inhibition of genetic transfer by the addition of DNase is the classic experimental criterion confirming natural transformation over conjugation or transduction.",
  wrongExp: "• <strong>Option A (High-frequency recombination conjugation):</strong> Requires direct cell-to-cell contact through a sex pilus bridge; it is physically blocked by impermeable filter barriers (e.g., U-tube experiment) and is completely insensitive to extracellular DNase because plasmid DNA passes directly between docked cells.<br>• <strong>Option B (Generalized transduction):</strong> Mediated by packaging of host bacterial genomic DNA fragments into a bacteriophage head during lytic viral assembly; the viral protein capsid shields the DNA from extracellular DNase destruction.<br>• <strong>Option D (Specialized transduction):</strong> Mediated by temperate bacteriophages (e.g., lambda phage) excising inaccurately from the bacterial chromosome along with adjacent flanking genes; the DNA is enclosed within a protective phage head and remains fully DNase-resistant."
},
{
  id: 6004,
  subject: "Microbiology",
  topic: "General Microbiology",
  chapter: "Culture Media & Identification",
  level: "Moderate",
  q: "A 35-year-old traveler returns from an endemic coastal region with massive, painless watery diarrhea resembling 'rice water'. The clinician suspects Vibrio cholerae. Which of the following transport media is most appropriate for preserving stool specimens when immediate laboratory processing is delayed, and which selective medium should be used to isolate yellow sucrose-fermenting colonies?",
  opts: [
    "Cary-Blair medium and Thiosulfate-Citrate-Bile Salts-Sucrose (TCBS) agar",
    "Stuart medium and Lowenstein-Jensen (LJ) medium",
    "Amies medium and MacConkey agar",
    "Buffered glycerol saline and Hektoen enteric agar"
  ],
  ans: 0,
  exp: "Vibrio cholerae is highly sensitive to desiccation, acidic pH, and overgrowth by normal colonic flora. Cary-Blair medium (or alkaline peptone water) is the transport medium of choice because its alkaline pH (8.4–8.6) preserves Vibrio viability while suppressing other commensal enterobacteria. For selective primary isolation, Thiosulfate-Citrate-Bile Salts-Sucrose (TCBS) agar is utilized; V. cholerae ferments sucrose, lowering the pH and turning the bromothymol blue/thymol blue indicator from green to large, opaque yellow colonies.",
  wrongExp: "• <strong>Option B (Stuart medium and Lowenstein-Jensen medium):</strong> Stuart medium is a semi-solid transport medium typically used for fastidious organisms like Neisseria gonorrhoeae, while LJ medium is an egg-based selective medium dedicated to culturing Mycobacterium tuberculosis.<br>• <strong>Option C (Amies medium and MacConkey agar):</strong> MacConkey agar differentiates lactose fermenters from non-lactose fermenters, but does not provide the selective bile-citrate-alkaline conditions needed to reliably isolate V. cholerae from heavy stool flora.<br>• <strong>Option D (Buffered glycerol saline and Hektoen enteric agar):</strong> Buffered glycerol saline (BGS) is toxic to Vibrio species due to the presence of glycerol; Hektoen enteric agar is optimized for the isolation of Salmonella and Shigella species."
},
{
  id: 6005,
  subject: "Microbiology",
  topic: "General Microbiology",
  chapter: "Antimicrobial Resistance Mechanisms",
  level: "Hard",
  q: "An ICU patient with ventilator-associated pneumonia yields a strain of Klebsiella pneumoniae showing high-level resistance to ceftriaxone, piperacillin-tazobactam, and meropenem. The laboratory performs an EDTA-combined disc diffusion test, which shows significant synergy with EDTA, restoring carbapenem sensitivity. This phenotype confirms the production of which class of carbapenemase?",
  opts: [
    "Class A Serine Carbapenemase (KPC)",
    "Class B Metallo-beta-lactamase (NDM-1)",
    "Class D Oxacillinase (OXA-48)",
    "AmpC cephalosporinase"
  ],
  ans: 1,
  exp: "Ambler Class B Metallo-beta-lactamases (MBLs), such as New Delhi Metallo-beta-lactamase-1 (NDM-1), VIM, and IMP, utilize divalent zinc ions (Zn2+) within their active catalytic core to coordinate and hydrolyze the beta-lactam ring. Chelating agents such as ethylenediaminetetraacetic acid (EDTA) or dipicolinic acid sequester zinc ions, thereby rendering Class B MBLs inactive and restoring carbapenem susceptibility in in vitro synergy tests. MBLs hydrolyze all penicillins, cephalosporins, and carbapenems, but spare monobactams (aztreonam).",
  wrongExp: "• <strong>Option A (Class A Serine Carbapenemase [KPC]):</strong> Utilizes a covalent serine active site rather than zinc ions for hydrolysis; it is inhibited by avibactam, vaborbactam, and relebactam, but is completely unaffected by EDTA chelation.<br>• <strong>Option C (Class D Oxacillinase [OXA-48]):</strong> Serine-based carbapenemases common in the Mediterranean region that hydrolyze penicillins and carbapenems poorly inhibited by EDTA or traditional clavulanate/tazobactam.<br>• <strong>Option D (AmpC cephalosporinase):</strong> Class C cephalosporinase that confers resistance to third-generation cephalosporins and beta-lactamase inhibitor combinations, but typically spares carbapenems unless accompanied by porin loss; it is insensitive to EDTA."
},
{
  id: 6006,
  subject: "Microbiology",
  topic: "General Microbiology",
  chapter: "Microscopy & Staining Techniques",
  level: "Moderate",
  q: "A 28-year-old male presents with a painless, indurated genital ulcer. The clinician suspects primary syphilis. The causative spirochete, Treponema pallidum, has a diameter of only ~0.15 µm, which is below the resolving power of a standard light microscope. Which microscopic technique utilizes an opaque central stop in the condenser so that only light rays scattered by the organism enter the objective lens, rendering the treponeme brightly illuminated against a pitch-black background?",
  opts: [
    "Phase-contrast microscopy",
    "Dark-ground microscopy",
    "Fluorescence microscopy",
    "Confocal laser scanning microscopy"
  ],
  ans: 1,
  exp: "Dark-ground (dark-field) microscopy utilizes a specialized dark-field condenser containing an opaque central stop that blocks direct light rays from entering the objective lens. Only light rays refracted, diffracted, or scattered by the specimen enter the objective aperture. This produces high contrast, making extremely thin, unstained living organisms like Treponema pallidum or Leptospira interrogans visible as brightly shining silver filaments with characteristic motility against a completely dark background.",
  wrongExp: "• <strong>Option A (Phase-contrast microscopy):</strong> Exploit minute differences in refractive index and thickness within cell structures to convert phase shifts into visible amplitude (brightness) changes, ideal for unstained living cells and internal organelles, but does not provide the distinct opaque dark-field illumination profile.<br>• <strong>Option C (Fluorescence microscopy):</strong> Requires excitation of natural fluorophores or fluorochrome-conjugated antibodies (e.g., FITC) by high-energy ultraviolet light; unstained wet mounts of exudate cannot be visualized without dyes.<br>• <strong>Option D (Confocal laser scanning microscopy):</strong> Utilizes pinpoint laser illumination and spatial pinholes to eliminate out-of-focus blur, producing optical sections for three-dimensional reconstructions, which is not the standard bedside darkground diagnostic test for chancre exudates."
},
{
  id: 6007,
  subject: "Microbiology",
  topic: "General Microbiology",
  chapter: "Bacterial Structure & Spores",
  level: "Easy",
  q: "Under conditions of severe nutrient starvation, certain Gram-positive rods initiate sporulation to transition from metabolically active vegetative cells to dormant endospores. Which unique chemical constituent found in high concentrations within the spore core complexes with calcium to impart extreme resistance to dry heat, desiccation, and ionizing radiation?",
  opts: [
    "Dipicolinic acid",
    "Peptidoglycan polymer",
    "Teichoic acid",
    "Poly-beta-hydroxybutyrate"
  ],
  ans: 0,
  exp: "The dehydration of the bacterial endospore core is a major determinant of its metabolic dormancy and thermal resistance. Calcium dipicolinate (a chelate of dipicolinic acid [pyridine-2,6-dicarboxylic acid] and Ca2+) accounts for up to 10–15% of the dry weight of the endospore core. This compound intercalates between DNA bases, stabilizes essential nucleoid proteins, and extracts free water from the protoplast, conferring extreme protection against heat denaturation, UV damage, hydrogen peroxide, and enzymatic lysis.",
  wrongExp: "• <strong>Option B (Peptidoglycan polymer):</strong> Forms the spore cortex between the inner and outer spore membranes, but does not chelate calcium within the dehydrated core to confer extreme physicochemical heat resistance.<br>• <strong>Option C (Teichoic acid):</strong> An anionic polyol-phosphate polymer found exclusively within the cell walls of vegetative Gram-positive bacteria, absent from the spore core.<br>• <strong>Option D (Poly-beta-hydroxybutyrate):</strong> An intracellular lipid-like carbon and energy storage polymer synthesized by bacteria under excess carbon conditions, playing no role in spore thermal sturdiness."
},
{
  id: 6008,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Hypersensitivity Reactions",
  level: "Moderate",
  q: "A 10-year-old boy receives an intravenous infusion of equine-derived anti-snake venom following a pit viper bite. Nine days later, he presents with generalized urticaria, high fever, bilateral knee arthralgias, and dark urine containing dysmorphic red blood cells and protein. Serum complement levels (C3 and C4) are markedly depressed. Which type of hypersensitivity reaction accounts for this clinical syndrome?",
  opts: [
    "Type I (IgE-mediated immediate hypersensitivity)",
    "Type II (Antibody-mediated cytotoxic hypersensitivity)",
    "Type III (Immune complex-mediated hypersensitivity)",
    "Type IV (T-cell-mediated delayed-type hypersensitivity)"
  ],
  ans: 2,
  exp: "This patient is exhibiting classic acute serum sickness, a systemic prototype of Type III hypersensitivity. When large quantities of foreign protein (e.g., equine antiserum) are administered, host IgG antibodies are generated over 7–14 days. These IgG molecules form soluble circulating antigen-antibody (immune) complexes in slight antigen excess that deposit in vulnerable microvascular beds (synovium, renal glomeruli, skin venules). Deposited immune complexes fix complement, activating the classical pathway (consuming C3/C4) and recruiting neutrophils via C5a, which release lysosomal enzymes causing acute necrotizing vasculitis, arthritis, and glomerulonephritis.",
  wrongExp: "• <strong>Option A (Type I):</strong> Involves IgE pre-bound to Fc-epsilon-RI on mast cells and basophils, triggering immediate degranulation and histamine release within minutes, causing acute anaphylaxis or bronchospasm without hypocomplementemic vasculitis.<br>• <strong>Option B (Type II):</strong> Mediated by IgG or IgM directed against fixed cell-surface or tissue-bound antigens (e.g., autoimmune hemolytic anemia, Goodpasture syndrome), rather than systemic deposition of soluble circulating immune complexes.<br>• <strong>Option D (Type IV):</strong> Delayed-type hypersensitivity driven by sensitized CD4+ (Th1/Th17) or CD8+ T lymphocytes releasing cytokines or directly lysing target cells (e.g., contact dermatitis, Mantoux tuberculin test), lacking antibody/complement involvement."
},
{
  id: 6009,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Complement System & Deficiencies",
  level: "Easy",
  q: "A 19-year-old military recruit presents with high-grade fever, petechial rash, and signs of meningeal irritation. Cerebrospinal fluid analysis reveals Gram-negative diplococci. Medical history is notable for two prior episodes of disseminated Neisseria meningitidis bacteremia during childhood. An inherited deficiency of which complement component is most strongly associated with recurrent systemic neisserial infections?",
  opts: [
    "C1 esterase inhibitor",
    "C3 convertase decay-accelerating factor (CD55)",
    "C5b-9 membrane attack complex (MAC)",
    "Mannose-binding lectin (MBL)"
  ],
  ans: 2,
  exp: "Neisseria species (N. meningitidis and N. gonorrhoeae) have thin cell walls that make them uniquely vulnerable to complement-mediated osmotic lysis. Formation of the terminal Membrane Attack Complex (MAC), composed of C5b, C6, C7, C8, and multiple C9 molecules, punches a transmembrane pore into the outer and inner membranes of the bacterium. Patients with inherited deficiencies in any of the terminal complement components (C5 through C9) are unable to assemble the MAC and carry a 1,000- to 10,000-fold increased risk of recurrent invasive meningococcal and gonococcal bacteremia.",
  wrongExp: "• <strong>Option A (C1 esterase inhibitor):</strong> Deficiency leads to hereditary angioedema (HAE) due to unchecked kallikrein-kinin activation and excessive bradykinin generation, causing episodic laryngeal edema and bowel-wall swelling without bacterial infection predisposition.<br>• <strong>Option B (CD55 / DAF):</strong> Deficiency of glycosylphosphatidylinositol (GPI)-anchored proteins CD55 and CD59 on erythrocyte membranes causes Paroxysmal Nocturnal Hemoglobinuria (PNH), leading to intravascular hemolytic anemia.<br>• <strong>Option D (Mannose-binding lectin):</strong> Activates the lectin complement pathway; deficiency may predispose young infants to general pyogenic sinopulmonary infections, but does not carry the signature vulnerability to recurrent systemic Neisseria infections seen with terminal MAC deficiencies."
},
{
  id: 6010,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Immunoglobulins Structure and Function",
  level: "Moderate",
  q: "Secretory IgA (sIgA) represents the predominant immunoglobulin isotype protecting mucosal surfaces of the respiratory, gastrointestinal, and genitourinary tracts. Which component of the dimeric sIgA molecule is synthesized by overlying mucosal epithelial cells, facilitating transcytosis and protecting the antibody from proteolytic degradation by luminal digestive enzymes?",
  opts: [
    "J chain (Joining chain)",
    "Secretory component",
    "Hypervariable complementarity-determining region",
    "Constant heavy 2 (CH2) domain"
  ],
  ans: 1,
  exp: "Secretory component is an 80-kDa polypeptide fragment derived from the polymeric immunoglobulin receptor (pIgR) expressed on the basolateral surface of mucosal epithelial cells. Dimeric IgA produced by mucosal lamina propria plasma cells binds pIgR via its J chain. The complex is endocytosed and transcytosed across the epithelial cell. At the apical luminal surface, pIgR is proteolytically cleaved, leaving the secretory component wrapped around the hinge and Fc domains of the IgA dimer. This component physically shields the antibody from degradation by luminal gastric and pancreatic proteases.",
  wrongExp: "• <strong>Option A (J chain):</strong> A small 15-kDa polypeptide synthesized by plasma cells (not epithelial cells) that covalently links the monomers of IgA (into dimers) and IgM (into pentamers), allowing binding to pIgR.<br>• <strong>Option C (Hypervariable complementarity-determining region):</strong> The antigen-binding pocket located within the variable domains (VH and VL) of the Fab fragment, responsible for antigen specificity.<br>• <strong>Option D (CH2 domain):</strong> An immunoglobulin heavy chain constant region domain responsible for complement (C1q) binding in IgG and IgM, not epithelial transcytosis or mucosal enzymatic resistance."
},
{
  id: 6011,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Primary Immunodeficiency Disorders",
  level: "Moderate",
  q: "A 3-year-old boy is brought to the pediatric clinic with recurrent cervical lymphadenitis, perianal abscesses, and hepatic abscesses. Cultures from the liver abscess grow Serratia marcescens. A dihydrorhodamine 123 (DHR) flow cytometry assay reveals absent fluorescence conversion in stimulated neutrophils. Which enzyme complex is defective in this child, and what is its primary biochemical product?",
  opts: [
    "Myeloperoxidase; Hypochlorous acid",
    "NADPH oxidase; Superoxide radical",
    "Glucose-6-phosphate dehydrogenase; NADPH",
    "Lysosomal acid hydrolase; Peroxynitrite"
  ],
  ans: 1,
  exp: "Chronic Granulomatous Disease (CGD) is an immunodeficiency disorder (most commonly X-linked recessive due to mutations in the CYBB gene encoding gp91phox) characterized by a defective phagocyte NADPH oxidase multienzyme complex. Activated neutrophils normally convert molecular oxygen into superoxide radicals (O2•−), the foundational step of the respiratory burst that generates reactive oxygen species to kill phagocytosed microbes. Patients cannot kill catalase-positive organisms (e.g., Staphylococcus aureus, Serratia marcescens, Burkholderia cepacia, Aspergillus fumigatus, Nocardia) because these microbes destroy their own endogenous hydrogen peroxide.",
  wrongExp: "• <strong>Option A (Myeloperoxidase; Hypochlorous acid):</strong> MPO deficiency impairs the conversion of H2O2 and chloride ions into hypochlorous acid (HOCl); however, the respiratory burst itself remains fully functional, meaning the DHR test and nitroblue tetrazolium (NBT) test remain completely normal.<br>• <strong>Option C (Glucose-6-phosphate dehydrogenase; NADPH):</strong> G6PD deficiency primarily causes acute hemolytic anemia upon oxidant challenge; while severe leukocyte G6PD variants mimic CGD, it is not the primary enzymatic defect defining classic CGD with absent DHR fluorescence.<br>• <strong>Option D (Lysosomal acid hydrolase; Peroxynitrite):</strong> Lysosomal hydrolases mediate non-oxidative digestion of macromolecules in phagolysosomes; peroxynitrite is formed non-enzymatically from superoxide and nitric oxide."
},
{
  id: 6012,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Major Histocompatibility Complex (MHC)",
  level: "Easy",
  q: "A 24-year-old male presents with chronic lower back pain and morning stiffness that improves with exercise. Radiographs show bilateral sacroiliitis. Genetic testing reveals positivity for the HLA-B27 allele. The HLA-B locus encodes which class of Major Histocompatibility Complex molecule, and to which T-cell coreceptor does it present endogenous peptides?",
  opts: [
    "MHC Class I presenting to CD8+ cytotoxic T cells",
    "MHC Class II presenting to CD4+ helper T cells",
    "MHC Class I presenting to CD4+ helper T cells",
    "MHC Class II presenting to CD8+ cytotoxic T cells"
  ],
  ans: 0,
  exp: "The Human Leukocyte Antigen (HLA) system in humans encodes MHC molecules. HLA-A, HLA-B, and HLA-C belong to MHC Class I. MHC Class I molecules consist of an alpha heavy chain non-covalently associated with beta-2 microglobulin and are expressed on all nucleated cells and platelets. They sample endogenous intracellular peptides (derived from proteasomal degradation in the cytoplasm) and present them directly to CD8+ cytotoxic T lymphocytes via their alpha-3 domain interaction with the CD8 coreceptor.",
  wrongExp: "• <strong>Option B (MHC Class II presenting to CD4+):</strong> MHC Class II molecules (HLA-DP, HLA-DQ, HLA-DR) consist of alpha and beta chains, are restricted to professional antigen-presenting cells (dendritic cells, macrophages, B cells), and present exogenous endocytosed antigens to CD4+ helper T cells.<br>• <strong>Option C (MHC Class I presenting to CD4+):</strong> MHC Class I interacts specifically with CD8 coreceptors via its alpha-3 domain, not with CD4 coreceptors.<br>• <strong>Option D (MHC Class II presenting to CD8+):</strong> MHC Class II interacts specifically with CD4 coreceptors via its beta-2 domain, not with CD8 coreceptors."
},
{
  id: 6013,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Superantigens & T-Cell Activation",
  level: "Hard",
  q: "A 22-year-old female presents with sudden high fever, erythroderma resembling a sunburn, desquamation of palms and soles, and refractory shock during menstruation while using highly absorbent tampons. The pathology is driven by Toxic Shock Syndrome Toxin-1 (TSST-1). What is the molecular mechanism by which this superantigen induces massive, non-specific polyclonal T-cell activation?",
  opts: [
    "Cross-linking the invariant beta-chain of MHC Class II with the V-beta domain of the T-cell receptor (TCR)",
    "Cleaving the intracellular CD3-zeta signaling chain",
    "Binding directly to CD28 in place of B7 molecules",
    "Covalently blocking CTLA-4 inhibitory checkpoints"
  ],
  ans: 0,
  exp: "Conventional antigens undergo intracellular processing and are presented within the peptide-binding groove of MHC molecules, activating only ~0.001% of antigen-specific T cells. Superantigens (such as staphylococcal TSST-1 and enterotoxins, and streptococcal pyrogenic exotoxin A) bypass intracellular antigen processing entirely. They bind directly and simultaneously to the outer invariant side of MHC Class II molecules on antigen-presenting cells and the variable beta-chain (V-beta domain) of the T-cell receptor (TCR). This cross-linkage activates up to 20% of all circulating naïve T cells, causing a massive hypercytokinemia ('cytokine storm') of IL-1, IL-2, TNF-alpha, and IFN-gamma.",
  wrongExp: "• <strong>Option B (Cleaving CD3-zeta chain):</strong> Would completely abrogate intracellular T-cell receptor signaling and induce T-cell anergy, the exact opposite of the hyperactivation observed in toxic shock syndrome.<br>• <strong>Option C (Binding directly to CD28):</strong> CD28 is the primary costimulatory receptor engaged by CD80/CD86 (B7-1/B7-2); superantigens bridge the MHC-II and TCR-V-beta complex, not the CD28 receptor alone.<br>• <strong>Option D (Blocking CTLA-4):</strong> CTLA-4 is an immune checkpoint molecule targeted by checkpoint inhibitor antibodies (e.g., ipilimumab) for cancer immunotherapy, not the target of microbial superantigens."
},
{
  id: 6014,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Severe Combined Immunodeficiency (SCID)",
  level: "Hard",
  q: "A 5-month-old male infant presents with intractable diarrhea, oral candidiasis, and Pneumocystis jirovecii pneumonia. Flow cytometry reveals an absolute absence of T cells and Natural Killer (NK) cells, but normal numbers of immature, non-functional B cells (T-B+NK- SCID phenotype). Genetic analysis identifies a loss-of-function mutation in the IL2RG gene. This gene encodes which critical signaling molecule?",
  opts: [
    "Common gamma chain (gamma-c) of cytokine receptors",
    "Janus kinase 3 (JAK3) tyrosine kinase",
    "Recombination activating gene-1 (RAG-1)",
    "Adenosine deaminase (ADA)"
  ],
  ans: 0,
  exp: "X-linked Severe Combined Immunodeficiency (X-SCID) is the most common form of SCID (~50% of cases) and results from mutations in the IL2RG gene on the X chromosome. This gene encodes the common gamma chain (gamma-c / CD132), a shared signaling subunit for receptors of Interleukins 2, 4, 7, 9, 15, and 21. Defective IL-7 signaling halts early T-cell development in the thymus, while defective IL-15 signaling completely arrests Natural Killer (NK) cell development. B cells are present in normal or elevated numbers (since B-cell ontogeny does not rely on gamma-c), but they cannot produce functional antibodies due to the lack of CD4+ T-cell help (yielding a T-B+NK- profile).",
  wrongExp: "• <strong>Option B (Janus kinase 3 [JAK3]):</strong> Autosomal recessive mutation that causes a phenotypically identical T-B+NK- SCID by disrupting the downstream intracellular kinase coupled to the common gamma chain, but it is encoded on chromosome 19, not the X-linked IL2RG locus.<br>• <strong>Option C (RAG-1 / RAG-2 deficiency):</strong> Impairs V(D)J somatic recombination, leading to a complete absence of both T cells and B cells, while preserving NK cells (T-B-NK+ phenotype).<br>• <strong>Option D (Adenosine deaminase [ADA] deficiency):</strong> Autosomal recessive metabolic defect leading to intracellular accumulation of toxic dATP, destroying all lymphocyte lineages (T-B-NK- SCID phenotype)."
},
{
  id: 6015,
  subject: "Microbiology",
  topic: "Immunology",
  chapter: "Diagnostic Serology",
  level: "Moderate",
  q: "A patient with suspected secondary syphilis has widespread mucocutaneous lesions. An initial undiluted serum sample tested with a quantitative Rapid Plasma Reagin (RPR) flocculation assay yields a paradoxical falsely negative result. However, when the technician dilutes the patient's serum 1:16 and repeats the test, a strong positive agglutination reaction is observed. What immunological phenomenon explains this discrepancy?",
  opts: [
    "Postzone phenomenon due to antigen excess",
    "Prozone phenomenon due to antibody excess",
    "Equivalence zone precipitation",
    "Cross-reactivity with heterophile antibodies"
  ],
  ans: 1,
  exp: "The prozone phenomenon (prozone effect) occurs in agglutination or precipitation assays when there is an overwhelming excess of antibodies relative to antigen in the patient's serum. In extreme antibody excess, every single epitope on the multivalent antigen particles is independently saturated by individual antibody Fab fragments. As a result, cross-linking between adjacent antigens cannot occur, preventing visible lattice and agglutination formation and causing a false-negative result. Serial dilution of the serum reduces the antibody concentration to the 'zone of equivalence', restoring cross-linking and yielding strong visible flocculation.",
  wrongExp: "• <strong>Option A (Postzone phenomenon):</strong> Occurs when there is an extreme excess of antigen relative to antibody, which also prevents lattice formation; dilution of serum worsens this effect rather than unmasking a positive reaction.<br>• <strong>Option C (Equivalence zone precipitation):</strong> The optimal stoichiometric ratio where concentrations of multivalent antigen and bivalent antibody allow maximum cross-linked lattice network formation, giving a maximal positive test result.<br>• <strong>Option D (Cross-reactivity with heterophile antibodies):</strong> Can cause false-positive results (e.g., in infectious mononucleosis or antiphospholipid syndrome), not a paradoxical false-negative that resolves upon sample dilution."
},
{
  id: 6016,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Staphylococcus aureus",
  level: "Moderate",
  q: "A 58-year-old diabetic male develops a postoperative surgical site infection following knee arthroplasty. Blood and wound cultures grow beta-hemolytic, catalase-positive, coagulase-positive Gram-positive cocci in clusters that show resistance to oxacillin and cefoxitin. What is the genetic basis of methicillin resistance in this isolated pathogen?",
  opts: [
    "Acquisition of mecA gene encoding altered penicillin-binding protein 2a (PBP2a)",
    "Plasmid-mediated production of TEM-1 beta-lactamase",
    "Mutations in DNA gyrase subunit A (gyrA)",
    "Active efflux mediated by the norA transport pump"
  ],
  ans: 0,
  exp: "Methicillin-resistant Staphylococcus aureus (MRSA) resistance is mediated by the acquisition of the staphylococcal cassette chromosome mec (SCCmec) mobile genetic element carrying the mecA (or mecC) gene. This gene encodes Penicillin-Binding Protein 2a (PBP2a), a transpeptidase that has an exceptionally low binding affinity for virtually all beta-lactam antibiotics, including penicillins, cephalosporins (except 5th generation agents like ceftaroline), and carbapenems. Cefoxitin disc diffusion is the preferred surrogate screening method used in diagnostic microbiology laboratories to detect mecA-mediated resistance.",
  wrongExp: "• <strong>Option B (Plasmid-mediated TEM-1 beta-lactamase):</strong> Cleaves penicillinase-labile penicillins (e.g., ampicillin, benzylpenicillin), but is completely inhibited by beta-lactamase inhibitors and has no activity against penicillinase-stable penicillins (oxacillin, methicillin).<br>• <strong>Option C (Mutations in gyrA):</strong> Confers high-level target site resistance to fluoroquinolones (e.g., ciprofloxacin, levofloxacin), not beta-lactam antibiotics.<br>• <strong>Option D (NorA transport pump):</strong> An active chromosomal multidrug efflux pump in S. aureus that expels fluoroquinolones, antiseptics, and biocides, but does not confer methicillin resistance."
},
{
  id: 6017,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Streptococcus pyogenes",
  level: "Moderate",
  q: "A 9-year-old girl is evaluated 3 weeks after an untreated episode of purulent impetigo. She now has facial puffiness, smoky cola-colored urine, and hypertension. Urinalysis shows hematuria with RBC casts and proteinuria. Serum anti-DNase B titers are markedly elevated, but antistreptolysin O (ASO) titers are within normal limits. Why are ASO titers typically non-reactive following cutaneous streptococcal infections?",
  opts: [
    "Skin cholesterol and lipids bind and inactivate streptolysin O",
    "Cutaneous strains of Group A Streptococcus lack the gene for streptolysin O",
    "Keratinocytes degrade streptolysin O before it reaches immune cells",
    "Streptococcal M protein shields streptolysin O exclusively in skin lesions"
  ],
  ans: 0,
  exp: "Streptolysin O is an oxygen-labile, pore-forming thiol-activated cytolysin produced by Streptococcus pyogenes (Group A Streptococcus). Following streptococcal pharyngitis, robust ASO antibody responses occur. However, following cutaneous infections (pyoderma/impetigo) that precipitate post-streptococcal glomerulonephritis (PSGN), ASO titers remain blunted or negative in over 50% of cases. This occurs because free cholesterol and lipids abundant within skin sebum and epidermis irreversibly bind and neutralize the antigenic determinants of streptolysin O, preventing effective antibody generation. Anti-DNase B (and anti-hyaluronidase) titers are not inhibited by skin lipids and remain the definitive serological markers for streptococcal impetigo.",
  wrongExp: "• <strong>Option B (Lack gene for streptolysin O):</strong> Pyodermal GAS strains carry the slo gene and synthesize streptolysin O normally; the antigen is neutralized post-secretion by cutaneous lipids.<br>• <strong>Option C (Keratinocyte degradation):</strong> Keratinocytes do not possess specialized endopeptidases that selectively digest streptolysin O while sparing streptococcal DNase B.<br>• <strong>Option D (M protein shielding):</strong> M protein confers antiphagocytic properties and defines emm-types, but does not selectively shield streptolysin O."
},
{
  id: 6018,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Corynebacterium diphtheriae",
  level: "Hard",
  q: "A 6-year-old unimmunized boy presents with high fever, marked cervical lymphadenopathy ('bull-neck' appearance), and stridor. Pharyngeal examination reveals a thick, leathery, adherent greyish pseudomembrane over the tonsils that bleeds profusely upon attempted dislodgement. What is the precise enzymatic mechanism of the exotoxin responsible for this pathology?",
  opts: [
    "ADP-ribosylation of Elongation Factor-2 (EF-2)",
    "Cleavage of 28S ribosomal RNA",
    "Direct activation of adenylate cyclase via Gs-alpha protein",
    "Cleavage of SNARE complex synaptobrevin proteins"
  ],
  ans: 0,
  exp: "Diphtheria toxin is a lethal A-B exotoxin encoded by the tox gene, which is introduced into Corynebacterium diphtheriae via lysogenic conversion by a temperate bacteriophage (beta-corynephage). The B subunit binds the heparin-binding epidermal growth factor-like precursor on cardiac and neural cells. Following endocytosis and membrane translocation, the active A subunit enters the cytosol and catalyzes the transfer of ADP-ribose from host NAD+ onto a modified histidine residue (diphthamide) of Elongation Factor-2 (EF-2). Inactivation of EF-2 halts ribosome-mediated polypeptide elongation, halting host protein synthesis and causing local mucosal pseudomembrane necrosis, myocarditis, and polyneuritis.",
  wrongExp: "• <strong>Option B (Cleavage of 28S rRNA):</strong> The specific mechanism of Shiga toxin (from Shigella dysenteriae) and Shiga-like toxins (from EHEC/STEC), which cleave a single adenine base from 28S rRNA within the 60S eukaryotic ribosomal subunit.<br>• <strong>Option C (Activation of adenylate cyclase via Gs-alpha):</strong> The mechanism of cholera toxin (Vibrio cholerae) and heat-labile enterotoxin (ETEC), leading to elevated intracellular cAMP and massive chloride secretion.<br>• <strong>Option D (Cleavage of SNARE synaptobrevin):</strong> The neurotoxic mechanism of tetanus toxin (tetanospasmin) and botulinum neurotoxins, disrupting vesicular neurotransmitter release."
},
{
  id: 6019,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Bacillus anthracis",
  level: "Moderate",
  q: "A 45-year-old tanner who works with imported animal hides presents with a painless ulcer on his forearm surrounded by gelatinous non-pitting edema. The ulcer rapidly transforms into a central, black necrotic eschar. Microscopic examination of exudate reveals large, boxcar-shaped, spore-forming Gram-positive bacilli with squared ends. The antiphagocytic capsule of this organism is unique among pathogenic bacteria because it is composed of which substance?",
  opts: [
    "Poly-D-glutamic acid",
    "Hyaluronic acid",
    "High-molecular-weight D-glucan",
    "Sialic acid polymer"
  ],
  ans: 0,
  exp: "Bacillus anthracis possesses a unique capsule encoded on plasmid pXO2 that is composed entirely of a homopolymer of Poly-D-glutamic acid (a polypeptide, rather than a polysaccharide). The negative electrical charge and D-stereoisomer amino acid configuration protect the organism from opsonization and phagocytic engulfment by tissue macrophages and neutrophils. Visualization of this capsule can be confirmed using McFadyean's polychrome methylene blue stain (showing pink capsular material surrounding blue bacilli).",
  wrongExp: "• <strong>Option B (Hyaluronic acid):</strong> The capsular material of Streptococcus pyogenes, which mimics host connective tissue ground substance to evade immune detection.<br>• <strong>Option C (D-glucan):</strong> Polysaccharide polymers found in fungal cell walls and certain bacterial biofilms, not the anthrax capsule.<br>• <strong>Option D (Sialic acid polymer):</strong> Present in the K1 capsule of Escherichia coli (associated with neonatal meningitis) and Group B Neisseria meningitidis, mimicking human neural cell adhesion molecules."
},
{
  id: 6020,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Clostridium tetani",
  level: "Easy",
  q: "A 32-year-old agricultural laborer sustains a deep puncture wound from a rusty nail. Seven days later, he develops lockjaw (trismus), sustained contraction of facial muscles (risus sardonicus), and painful generalized muscle spasms triggered by sudden auditory stimuli (opisthotonos). Which inhibitory neurotransmitters are prevented from being released into the synaptic cleft by tetanospasmin?",
  opts: [
    "Gamma-aminobutyric acid (GABA) and glycine",
    "Acetylcholine and glutamate",
    "Dopamine and norepinephrine",
    "Serotonin and substance P"
  ],
  ans: 0,
  exp: "Clostridium tetani produces tetanospasmin, a potent neurotoxin that binds to polysialogangliosides on peripheral motor nerve terminals and is retrogradely transported along axons to the spinal cord. It migrates trans-synaptically into inhibitory Renshaw interneurons. Inside the presynaptic cytosol, the light-chain zinc metalloprotease cleaves synaptobrevin (VAMP-2), a critical vesicular SNARE protein. This prevents the exocytosis of inhibitory neurotransmitters—primarily Glycine and Gamma-Aminobutyric Acid (GABA)—onto lower motor neurons, causing unchecked motor nerve discharge, sustained muscular tetany, and spastic paralysis.",
  wrongExp: "• <strong>Option B (Acetylcholine and glutamate):</strong> Botulinum toxin cleaves SNARE proteins at the peripheral neuromuscular junction to block acetylcholine release, causing flaccid (not spastic) paralysis; tetanospasmin does not block excitatory glutamate release.<br>• <strong>Option C (Dopamine and norepinephrine):</strong> Catecholaminergic neurotransmitters predominantly active in the central autonomic and basal ganglia circuits, not the primary targets involved in spinal tetanic spasms.<br>• <strong>Option D (Serotonin and substance P):</strong> Neuromodulators involved in pain perception and mood regulation, not the spinal inhibitory neurotransmitters blocked by tetanospasmin."
},
{
  id: 6021,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Neisseria meningitidis",
  level: "Moderate",
  q: "A high-school student living in a dormitory develops acute fulminant meningococcemia. The patient develops bilateral adrenal hemorrhage, extensive purpura fulminans, and circulatory collapse (Waterhouse-Friderichsen syndrome). What is the primary microbial surface virulence factor responsible for inducing the severe endothelial injury, microvascular thrombosis, and cardiovascular collapse seen in this disease?",
  opts: [
    "Lipooligosaccharide (LOS)",
    "Polysaccharide capsule",
    "IgA1 protease",
    "Opa (Opacity-associated) proteins"
  ],
  ans: 0,
  exp: "Neisseria meningitidis sheds large quantities of its outer membrane during rapid growth via blebbing. Unlike enteric Gram-negative bacilli that display full LPS with long O-antigen chains, Neisseria contains Lipooligosaccharide (LOS), which lacks repeating O-antigen side chains. Free LOS endotoxin binds to CD14/TLR4 on macrophages and endothelial cells, triggering the release of TNF-alpha, IL-1, and IL-6. Circulating LOS levels in meningococcemia correlate directly with the severity of disseminated intravascular coagulation (DIC), bilateral adrenal cortical necrosis (Waterhouse-Friderichsen syndrome), multiorgan failure, and mortality.",
  wrongExp: "• <strong>Option B (Polysaccharide capsule):</strong> Essential for evading phagocytosis and surviving complement-mediated bactericidal activity in the bloodstream, enabling dissemination, but is not the direct toxic trigger of endotoxic shock and microvascular thrombosis.<br>• <strong>Option C (IgA1 protease):</strong> Cleaves human secretory IgA at the hinge region to facilitate initial mucosal colonization of the nasopharynx, playing no role in systemic septic shock.<br>• <strong>Option D (Opa proteins):</strong> Outer membrane proteins that mediate tight adherence and entry into epithelial and endothelial cells, but do not directly cause coagulopathy or septic collapse."
},
{
  id: 6022,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Salmonella Typhi & Enteric Fever",
  level: "Moderate",
  q: "A 28-year-old man presents with stepladder fever, dull frontal headache, relative bradycardia (Faget sign), and faint rose spots on his abdomen. Blood cultures collected during the first week of illness confirm Salmonella enterica serovar Typhi. After successful treatment, a subset of patients become chronic asymptomatic carriers who continue to shed bacilli in their stool for over a year. What anatomical site serves as the primary reservoir for chronic carriage of Salmonella Typhi?",
  opts: [
    "Gallbladder",
    "Terminal ileum Peyer patches",
    "Splenic red pulp",
    "Renal tubular epithelium"
  ],
  ans: 0,
  exp: "Following the bacteremic phase of typhoid fever, Salmonella Typhi is excreted by hepatocytes into bile. S. Typhi is resistant to bile salts and can chronically colonize the mucosal epithelium of the Gallbladder, frequently forming recalcitrant biofilms on the surfaces of pre-existing cholesterol gallstones. This chronic carriage can persist for decades (as in 'Typhoid Mary'), serving as a public health reservoir for foodborne fecal-oral transmission and carrying an increased long-term risk of gallbladder carcinoma.",
  wrongExp: "• <strong>Option B (Terminal ileum Peyer patches):</strong> The primary site of bacterial entry via microfold (M) cells and mucosal hypertrophy during the first two weeks of acute illness, often ulcerating in the third week, but not the chronic reservoir.<br>• <strong>Option C (Splenic red pulp):</strong> A major site of reticuloendothelial intracellular bacterial replication during the primary and secondary bacteremic stages, causing splenomegaly, but does not sustain long-term chronic luminal shedding.<br>• <strong>Option D (Renal tubular epithelium):</strong> A rare site of chronic urinary carriage, typically seen in individuals with underlying urinary tract abnormalities or co-infection with Schistosoma haematobium."
},
{
  id: 6023,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Vibrio cholerae",
  level: "Easy",
  q: "A 40-year-old male develops massive watery diarrhea without fever or tenesmus after consuming raw oysters. The stools are non-bloody, translucent, and contain flecks of mucus. Hanging drop preparation demonstrates darting motility that is inhibited by specific antiserum. What is the downstream intracellular messenger elevated by the action of cholera toxin on intestinal enterocytes?",
  opts: [
    "Cyclic adenosine monophosphate (cAMP)",
    "Cyclic guanosine monophosphate (cGMP)",
    "Inositol trisphosphate (IP3)",
    "Diacylglycerol (DAG)"
  ],
  ans: 0,
  exp: "Cholera toxin is an A-B enterotoxin. Its A1 subunit catalyzes the transfer of ADP-ribose from NAD+ to the alpha-subunit of the stimulatory G-protein (Gs-alpha), permanently locking it in an active, GTP-bound conformation. This causes constitutive, unregulated activation of membrane-bound adenylyl cyclase, leading to an intracellular surge of Cyclic Adenosine Monophosphate (cAMP). Elevated cAMP activates Protein Kinase A (PKA), which phosphorylates the Cystic Fibrosis Transmembrane Conductance Regulator (CFTR) chloride channels, driving massive efflux of chloride, sodium, and water into the intestinal lumen.",
  wrongExp: "• <strong>Option B (cGMP):</strong> The intracellular second messenger stimulated by the heat-stable enterotoxin (STa) of enterotoxigenic Escherichia coli (ETEC) and guanylin/uroguanylin via guanylyl cyclase C activation, not cholera toxin.<br>• <strong>Option C (IP3):</strong> Generated alongside DAG via phospholipase C cleavage of PIP2 in Gq-protein coupled pathways, not involved in cholera toxin-mediated secretory diarrhea.<br>• <strong>Option D (DAG):</strong> Activates Protein Kinase C in Gq-coupled receptor signaling, playing no role in the primary pathophysiology of cholera enterotoxin."
},
{
  id: 6024,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Pseudomonas aeruginosa",
  level: "Moderate",
  q: "A neutropenic patient undergoing induction chemotherapy for acute myeloid leukemia develops high fever and rapidly evolving skin lesions on the buttocks. The lesions begin as erythematous macules that quickly progress into painful, hemorrhagic bullae before rupturing into black, punched-out necrotic ulcers with violaceous borders (ecthyma gangrenosum). Blood cultures grow an oxidase-positive, non-lactose fermenting Gram-negative rod that produces a bluish-green pigment. Which virulence factor produced by this organism shares an identical mechanism of action with Diphtheria toxin?",
  opts: [
    "Exotoxin A",
    "Exoenzyme S",
    "Pyocyanin",
    "Elastase (LasB)"
  ],
  ans: 0,
  exp: "Pseudomonas aeruginosa produces Exotoxin A, a potent A-B toxin that possesses an identical biochemical mechanism of action to Corynebacterium diphtheriae toxin: it catalyzes the ADP-ribosylation and permanent inactivation of host eukaryotic Elongation Factor-2 (EF-2). This shuts down cellular protein synthesis, causing direct tissue necrosis and contributing to the ischemic perivascular invasion characteristic of ecthyma gangrenosum in immunocompromised hosts.",
  wrongExp: "• <strong>Option B (Exoenzyme S):</strong> An ADP-ribosyltransferase injected directly into host cells via a Type III Secretion System (T3SS) that targets low-molecular-weight GTP-binding proteins (e.g., Ras) to disrupt the host cytoskeleton, not EF-2.<br>• <strong>Option C (Pyocyanin):</strong> A blue-green phenazine pigment that generates toxic reactive oxygen species (superoxide and hydrogen peroxide), causing oxidative tissue damage and inhibiting ciliary beating, but lacks ADP-ribosyltransferase activity.<br>• <strong>Option D (Elastase [LasB]):</strong> A zinc metalloprotease that digests elastin, collagen, and complement factors (C3a, C5a), causing vascular destruction, ecthyma gangrenosum, and pulmonary hemorrhage without targeting EF-2."
},
{
  id: 6025,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Mycobacterium tuberculosis",
  level: "Hard",
  q: "A 48-year-old HIV-positive male presents with chronic cough, hemoptysis, night sweats, and weight loss. Sputum microscopy shows acid-fast bacilli. The sputum sample is subjected to a Cartridge-Based Nucleic Acid Amplification Test (CBNAAT / GeneXpert MTB/RIF). This automated real-time PCR assay detects Mycobacterium tuberculosis DNA and simultaneously screens for rifampicin resistance by identifying mutations within which specific bacterial gene?",
  opts: [
    "rpoB",
    "katG",
    "inhA",
    "embB"
  ],
  ans: 0,
  exp: "The GeneXpert MTB/RIF assay utilizes hemi-nested real-time PCR and five molecular beacon probes to amplify and detect the 81-base-pair Rifampicin Resistance Determining Region (RRDR) of the bacterial rpoB gene. The rpoB gene encodes the beta-subunit of bacterial DNA-dependent RNA polymerase, which is the primary target of rifampicin. Mutations in this specific hotspot account for over 95% of all rifampicin-resistant strains of M. tuberculosis and serve as an established molecular surrogate marker for multidrug-resistant tuberculosis (MDR-TB).",
  wrongExp: "• <strong>Option B (katG):</strong> Encodes the catalase-peroxidase enzyme responsible for converting the prodrug isoniazid (INH) into its active form; mutations in katG confer high-level isoniazid resistance, not detected by standard GeneXpert MTB/RIF.<br>• <strong>Option C (inhA):</strong> Encodes the NADH-dependent enoyl-acyl carrier protein reductase involved in mycolic acid biosynthesis; promoter mutations confer low-level resistance to isoniazid and cross-resistance to ethionamide.<br>• <strong>Option D (embB):</strong> Encodes arabinosyl transferase involved in cell wall arabinogalactan synthesis; mutations mediate resistance to ethambutol."
},
{
  id: 6026,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Treponema pallidum & Syphilis",
  level: "Moderate",
  q: "A 34-year-old male presents with generalized lymphadenopathy, condylomata lata in the perianal region, and a maculopapular rash involving the palms and soles. His serum VDRL test is positive at a titer of 1:64. Within 3 hours of receiving an intramuscular injection of 2.4 million units of benzathine penicillin G, the patient develops acute shaking chills, high fever, tachycardia, myalgias, and transient exacerbation of his cutaneous lesions. What is the diagnosis for this post-treatment reaction?",
  opts: [
    "Jarisch-Herxheimer reaction",
    "Type I IgE-mediated penicillin anaphylaxis",
    "Serum sickness reaction",
    "Stevens-Johnson syndrome"
  ],
  ans: 0,
  exp: "The Jarisch-Herxheimer reaction is an acute, self-limiting febrile systemic inflammatory reaction that classically develops within 2 to 24 hours following the initiation of effective antimicrobial therapy for spirochetal infections (most notably primary/secondary syphilis, leptospirosis, and relapsing fever). Rapid, penicillin-mediated lysis of spirochetes releases large quantities of treponemal lipoproteins and endotoxin-like pyrogens into the bloodstream, triggering systemic macrophage activation and a sudden release of TNF-alpha, IL-6, and IL-8.",
  wrongExp: "• <strong>Option B (Type I IgE penicillin anaphylaxis):</strong> An immediate hypersensitivity reaction that presents with bronchospasm, laryngeal edema, angioedema, and cardiovascular collapse within minutes of drug administration, requiring epinephrine.<br>• <strong>Option C (Serum sickness reaction):</strong> A Type III hypersensitivity syndrome that occurs 7 to 14 days after antigen exposure, presenting with hypocomplementemia, arthritis, and glomerulonephritis, not within 2-4 hours.<br>• <strong>Option D (Stevens-Johnson syndrome):</strong> A severe delayed mucocutaneous adverse drug reaction marked by keratinocyte necrosis, targetoid bullae, and epidermal detachment that develops days to weeks into therapy."
},
{
  id: 6027,
  subject: "Microbiology",
  topic: "Systematic Bacteriology",
  chapter: "Rickettsia & Orientia",
  level: "Moderate",
  q: "A 26-year-old forest ranger working in Himachal Pradesh presents with high fever, severe headache, conjunctival suffusion, generalized lymphadenopathy, and a distinctive black necrotic skin lesion with an erythematous halo (eschar) in the groin. The clinician suspects scrub typhus caused by Orientia tsutsugamushi. What is the natural arthropod vector responsible for transmitting this intracellular pathogen?",
  opts: [
    "Larval trombiculid mite (chigger)",
    "Pediculus humanus humanus (body louse)",
    "Xenopsylla cheopis (oriental rat flea)",
    "Dermacentor andersoni (wood tick)"
  ],
  ans: 0,
  exp: "Scrub typhus is caused by Orientia tsutsugamushi, an obligate intracellular bacterium endemic across the 'tsutsugamushi triangle' of the Asia-Pacific region. It is transmitted to humans through the bite of infected larval trombiculid mites (commonly referred to as chiggers), predominantly belonging to the genus Leptotrombidium. The chigger feeds on host dermal lymph, inoculating the bacterium and forming a signature cigarette-burn-like necrotic eschar at the bite site. In the Weil-Felix serological reaction, antibodies to O. tsutsugamushi agglutinate Proteus mirabilis OX-K strains.",
  wrongExp: "• <strong>Option B (Pediculus humanus humanus):</strong> The vector for epidemic typhus caused by Rickettsia prowazekii, which does not produce a primary cutaneous eschar and is associated with crowded refugee conditions and poverty.<br>• <strong>Option C (Xenopsylla cheopis):</strong> The vector for endemic murine typhus caused by Rickettsia typhi, as well as the bubonic plague caused by Yersinia pestis.<br>• <strong>Option D (Dermacentor andersoni):</strong> The hard tick vector that transmits Rickettsia rickettsii, the causative agent of Rocky Mountain Spotted Fever (RMSF)."
},
{
  id: 6028,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Herpesviruses",
  level: "Easy",
  q: "A 45-year-old female presents with acute onset of high fever, headache, olfactory hallucinations, behavioral changes, and focal seizures. Brain MRI reveals asymmetric edema, hemorrhage, and hyperintensity localized strictly to the temporal and inferior frontal lobes. Polymerase chain reaction (PCR) of the cerebrospinal fluid is positive for Herpes Simplex Virus-1 (HSV-1). Which histopathological inclusion body is classically identified in neuronal nuclei infected with this virus?",
  opts: [
    "Cowdry A inclusion body",
    "Negri body",
    "Guarnieri body",
    "Owl-eye inclusion body"
  ],
  ans: 0,
  exp: "Herpes Simplex Virus-1 (HSV-1) is the leading cause of sporadic, non-epidemic focal viral encephalitis in adults, exhibiting a distinct tropism for the temporal and inferior frontal lobes. Microscopic examination of infected neural tissue or Tzanck preparations reveals characteristic Cowdry A inclusion bodies. These are eosinophilic, amorphous, intranuclear inclusion bodies surrounded by a clear halo within multinucleated giant cells, reflecting active herpesviral replication and chromatin margination.",
  wrongExp: "• <strong>Option B (Negri body):</strong> Pathognomonic sharply demarcated, eosinophilic intracytoplasmic inclusions found in the Purkinje cells of the cerebellum and pyramidal neurons of the hippocampus in Rabies virus infection.<br>• <strong>Option C (Guarnieri body):</strong> Eosinophilic intracytoplasmic inclusion bodies characteristic of Poxviruses (e.g., Variola / Smallpox, Vaccinia).<br>• <strong>Option D (Owl-eye inclusion body):</strong> Large basophilic intranuclear inclusion bodies surrounded by a clear halo, classically pathognomonic for Cytomegalovirus (CMV) infection."
},
{
  id: 6029,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Epstein-Barr Virus (EBV)",
  level: "Moderate",
  q: "A 19-year-old college student presents with exudative pharyngitis, posterior cervical lymphadenopathy, fever, and moderate splenomegaly. Peripheral blood smear reveals absolute lymphocytosis with 35% atypical lymphocytes. A Monospot heterophile antibody agglutination test is positive. What cell lineage do these circulating atypical lymphocytes (Downey cells) represent?",
  opts: [
    "CD8+ cytotoxic T lymphocytes responding to infected B cells",
    "Apolipoprotein-stimulated B lymphocytes undergoing blastic transformation",
    "Natural Killer cells infected directly by Epstein-Barr virus",
    "CD4+ regulatory T cells suppressing humoral immunity"
  ],
  ans: 0,
  exp: "Epstein-Barr Virus (EBV), the primary cause of infectious mononucleosis, targets and infects naive B lymphocytes by binding its viral glycoprotein gp350 to the complement receptor 2 (CR2 / CD21) on B cells. However, the prominent 'atypical lymphocytes' (Downey Type II cells) that dominate the peripheral blood smear are not the infected B cells. Instead, they are reactive, antigen-stimulated host CD8+ Cytotoxic T Lymphocytes (and to a lesser degree NK cells) clonal-expanded specifically to destroy the EBV-infected proliferating B cells.",
  wrongExp: "• <strong>Option B (B lymphocytes undergoing transformation):</strong> While B cells are the primary targets infected and transformed by EBV, they represent only a tiny fraction of circulating lymphoid cells in blood; the massive lymphocytosis is composed of reactive T cells.<br>• <strong>Option C (Natural Killer cells infected by EBV):</strong> NK cells can help kill infected targets, but EBV relies primarily on CD21 for viral entry, which is absent on NK cells.<br>• <strong>Option D (CD4+ regulatory T cells):</strong> Regulatory T cells suppress immune responses; the prominent large atypical cells with flowing, indented cytoplasm skirting RBCs are cytotoxic CD8+ effector T cells."
},
{
  id: 6030,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Hepatitis B Virus Serology",
  level: "Hard",
  q: "A 32-year-old male is evaluated 10 weeks following an accidental needle-stick injury. Routine screening demonstrates the following serological profile: HBsAg is negative, Anti-HBs is negative, and Total Anti-HBc is positive. Testing for IgM Anti-HBc is reported as positive, while HBeAg and Anti-HBe are both non-reactive. Which clinical phase of Hepatitis B virus infection is this patient traversing?",
  opts: [
    "The window period",
    "Successful post-vaccination immunity",
    "Natural immunity from resolved past infection",
    "Chronic inactive HBsAg carrier state"
  ],
  ans: 0,
  exp: "The 'window period' (window phase) in acute Hepatitis B virus infection represents the serological interval between the clearance of circulating Hepatitis B surface antigen (HBsAg) below the limit of clinical detection and the subsequent appearance of protective surface antibodies (Anti-HBs). During this crucial gap—which may last weeks to months—the only detectable serological marker of acute HBV infection in serum is IgM Anti-HBc (IgM antibody against Hepatitis B core antigen), making it an essential test to prevent misdiagnosing an acute resolving hepatitis as non-infected.",
  wrongExp: "• <strong>Option B (Post-vaccination immunity):</strong> Individuals immunized with the recombinant Hepatitis B vaccine develop antibodies against surface antigen only (Anti-HBs positive) and remain entirely negative for Anti-HBc antibodies.<br>• <strong>Option C (Natural immunity from resolved infection):</strong> Manifests with positive Anti-HBs alongside positive IgG Anti-HBc; IgM Anti-HBc is completely absent.<br>• <strong>Option D (Chronic inactive carrier state):</strong> Characterized by the persistent presence of HBsAg in serum for greater than 6 months, alongside IgG Anti-HBc; IgM Anti-HBc is negative."
},
{
  id: 6031,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Human Immunodeficiency Virus (HIV)",
  level: "Moderate",
  q: "A 29-year-old male with confirmed HIV-1 infection is evaluated for antiretroviral therapy. Genotypic tropism testing is ordered prior to initiating maraviroc. Maraviroc functions as an entry inhibitor by acting as an allosteric antagonist against which host chemokine coreceptor utilized by macrophage-tropic (M-tropic) viral strains during initial mucosal transmission?",
  opts: [
    "CCR5",
    "CXCR4",
    "CD4",
    "CCR3"
  ],
  ans: 0,
  exp: "HIV-1 viral entry is a multi-step process initiated by the binding of viral envelope glycoprotein gp120 to the host primary receptor CD4. This induces a conformational shift in gp120 that exposes a high-affinity binding site for a chemokine coreceptor: either CCR5 (utilized by R5 / M-tropic strains dominant during early transmission) or CXCR4 (utilized by X4 / T-tropic strains emerging in late-stage disease). Maraviroc is a chemokine receptor antagonist that binds selectively to human CCR5, blocking gp120 interaction and preventing viral fusion. Patients homozygous for a 32-base-pair deletion in CCR5 (CCR5-delta-32) are naturally resistant to R5-tropic HIV-1 infection.",
  wrongExp: "• <strong>Option B (CXCR4):</strong> The coreceptor utilized by T-cell tropic (X4) strains; maraviroc is completely ineffective against CXCR4-tropic viruses and cannot be used in patients with dual/mixed or CXCR4-tropic viral populations.<br>• <strong>Option C (CD4):</strong> The primary surface receptor targeted by the monoclonal antibody ibalizumab, not maraviroc.<br>• <strong>Option D (CCR3):</strong> A minor chemokine coreceptor expressed on eosinophils and microglia that does not represent the therapeutic target of maraviroc."
},
{
  id: 6032,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Rabies Virus",
  level: "Easy",
  q: "A 12-year-old boy in a rural district is bitten on the hand by a stray dog. Two months later, he presents with hydrophobia, agitation, aerophobia, and autonomic instability. Rabies virus travels from peripheral inoculation sites to the central nervous system via retrograde axonal transport. Which molecular motor protein complex is responsible for this retrograde transport along the axon to the spinal cord?",
  opts: [
    "Dynein",
    "Kinesin",
    "Myosin V",
    "Actin"
  ],
  ans: 0,
  exp: "Rabies virus binds to nicotinic acetylcholine receptors (nAChR) or neural cell adhesion molecules (NCAM) at the neuromuscular junction. Following endocytosis, the viral ribonucleoprotein complex is transported retrogradely along motor neuron axons toward the central nervous system perikaryon. Retrograde axonal transport (from axon terminal toward the cell soma) is driven by the molecular motor protein Dynein. Once in the CNS, the virus replicates and undergoes anterograde transport (via Kinesin) along autonomic nerves to peripheral structures such as the salivary glands.",
  wrongExp: "• <strong>Option B (Kinesin):</strong> Mediates anterograde axonal transport (from the cell body outward toward the plus end of microtubules at the synaptic terminal), used by rabies to reach the salivary glands later in disease, not for initial entry to the CNS.<br>• <strong>Option C (Myosin V):</strong> An actin-based motor protein involved in short-range transport of vesicles within the subcortical actin cytoskeleton, not long-distance axonal retrograde transit.<br>• <strong>Option D (Actin):</strong> A cytoskeletal microfilament protein that serves as tracks for myosin motors, not the microtubule track used by dynein for retrograde axonal transit."
},
{
  id: 6033,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Arboviruses & Dengue",
  level: "Moderate",
  q: "A 24-year-old male presents on day 5 of acute dengue fever with petechiae, facial flushing, severe plasma leakage, thrombocytopenia (platelets 28,000/µL), and hemoconcentration (hematocrit 52%). He suffered an uncomplicated primary dengue infection with DENV-1 three years prior. Which immunopathogenetic mechanism accounts for the increased severity of Dengue Hemorrhagic Fever / Dengue Shock Syndrome upon secondary infection with a heterologous viral serotype?",
  opts: [
    "Antibody-dependent enhancement (ADE)",
    "Antigenic shift resulting in reassortment",
    "Complement consumption via alternative pathway block",
    "Direct viral integration into host megakaryocyte genomes"
  ],
  ans: 0,
  exp: "There are four distinct serotypes of Dengue virus (DENV-1 through DENV-4). Primary infection confers lifelong homotypic immunity against the infecting serotype, but only transient cross-protection against heterologous serotypes. When infected secondarily by a different serotype, pre-existing sub-neutralizing, non-protective IgG antibodies bind to the new viral particles. The resulting antibody-virus complexes bind via their Fc regions to Fc-gamma receptors (Fc-gamma-R) on circulating monocytes and macrophages. This Antibody-Dependent Enhancement (ADE) facilitates viral entry, increasing viral replication, monocyte infection burden, and cytokine release, triggering severe capillary permeability and shock.",
  wrongExp: "• <strong>Option B (Antigenic shift via reassortment):</strong> Occurs only in viruses with segmented RNA genomes (e.g., Influenza virus, Rotavirus, Bunyaviruses); Dengue virus possesses a non-segmented, single-stranded positive-sense RNA genome and cannot undergo genetic reassortment.<br>• <strong>Option C (Complement consumption via alternative pathway block):</strong> Severe dengue involves high-level classical complement activation triggered by NS1 antigen-antibody complexes, not an alternative pathway block.<br>• <strong>Option D (Viral integration into host genomes):</strong> Retroviruses uniquely integrate into the host DNA using integrase; Flaviviruses replicate strictly in the cytoplasm and never integrate into host DNA."
},
{
  id: 6034,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Influenza Viruses",
  level: "Moderate",
  q: "In 2009, a novel H1N1 influenza strain containing a unique combination of gene segments from human, avian, and swine influenza viruses emerged, causing a global pandemic. What genetic mechanism enables segmented RNA viruses like Influenza A to undergo sudden, radical changes in their surface hemagglutinin and neuraminidase proteins, producing completely new pandemic strains?",
  opts: [
    "Antigenic shift (genetic reassortment)",
    "Antigenic drift (point mutations)",
    "Recombination through copy-choice mechanism",
    "Phenotypic mixing"
  ],
  ans: 0,
  exp: "Influenza A has a segmented genome consisting of 8 distinct negative-sense, single-stranded RNA segments. When two different influenza strains coinfect a single host cell (such as in pigs, which act as a 'mixing vessel' with receptors for both avian and human viruses), the genomic segments can be packaged randomly into assembling virions. This process, termed Genetic Reassortment or Antigenic Shift, results in major, sudden structural changes in the surface glycoproteins (Hemagglutinin and/or Neuraminidase), creating novel chimeric strains capable of circumventing global herd immunity and triggering devastating pandemics.",
  wrongExp: "• <strong>Option B (Antigenic drift):</strong> Gradual, minor antigenic variations caused by spontaneous point mutations in the hemagglutinin and neuraminidase genes during replication (due to the low fidelity of viral RNA-dependent RNA polymerase), driving seasonal annual epidemics, not pandemics.<br>• <strong>Option C (Copy-choice recombination):</strong> Involves the viral polymerase jumping from one RNA template to another during replication, common in non-segmented viruses like Poliovirus and Coronaviruses, but not the primary driver of influenza pandemics.<br>• <strong>Option D (Phenotypic mixing):</strong> Occurs when progeny virions contain surface proteins from two parental viruses while retaining a purely parental genome; subsequent generations revert completely to the parental phenotype, lacking genetic permanence."
},
{
  id: 6035,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Oncogenic Viruses & HPV",
  level: "Easy",
  q: "A 42-year-old female undergoes a cervical biopsy following an abnormal Pap smear showing high-grade squamous intraepithelial lesions (HSIL). Histopathology confirms infection with high-risk Human Papillomavirus Type 16. What are the specific cellular targets of the two major viral oncoproteins, E6 and E7, responsible for driving uncontrolled host cell cycle progression?",
  opts: [
    "E6 promotes p53 degradation; E7 binds and inactivates Retinoblastoma protein (pRb)",
    "E6 binds and inactivates Retinoblastoma protein (pRb); E7 promotes p53 degradation",
    "E6 activates Cyclin D1; E7 directly inhibits p21",
    "E6 inhibits Bcl-2; E7 blocks caspase-8 activation"
  ],
  ans: 0,
  exp: "High-risk Human Papillomaviruses (particularly HPV-16 and HPV-18) drive oncogenesis by integrating their viral DNA into the host genome, disrupting the E2 repressor gene and leading to overexpression of two early oncoproteins: E6 and E7. Viral oncoprotein E6 recruits the host ubiquitin ligase E6AP, targeting the tumor suppressor protein p53 for rapid proteasomal degradation, preventing DNA repair and apoptosis. Viral oncoprotein E7 binds to and hyperphosphorylates the Retinoblastoma tumor suppressor protein (pRb), disrupting the pRb-E2F complex and releasing free E2F transcription factors to drive the cell through the G1/S cell-cycle checkpoint.",
  wrongExp: "• <strong>Option B (Reversed functions):</strong> Inverts the respective functions; E6 binds and degrades p53, while E7 binds and inactivates pRb.<br>• <strong>Option C (E6 activates Cyclin D1; E7 inhibits p21):</strong> E7 bypasses the requirement for Cyclin D1/CDK4 by displacing E2F directly from pRb, while downstream consequences include p16 accumulation due to loss of negative feedback.<br>• <strong>Option D (E6 inhibits Bcl-2; E7 blocks caspase-8):</strong> E6 is an anti-apoptotic protein that prevents cell death by degrading p53, not by inhibiting protective Bcl-2."
},
{
  id: 6036,
  subject: "Microbiology",
  topic: "Virology",
  chapter: "Poliovirus & Vaccines",
  level: "Moderate",
  q: "The Global Polio Eradication Initiative utilizes two classic vaccines: the Inactivated Polio Vaccine (IPV, Salk) and the Oral Polio Vaccine (OPV, Sabin). Which of the following immunological characteristics is a major advantage of the live-attenuated Sabin oral vaccine over the formalin-inactivated Salk vaccine, enabling interruption of wild-type poliovirus transmission in endemic communities?",
  opts: [
    "Induction of robust intestinal secretory mucosal IgA immunity",
    "Complete absence of vaccine-associated paralytic poliomyelitis (VAPP)",
    "Superior thermal stability without requirement of a cold chain",
    "Safety of administration to severely immunocompromised patients"
  ],
  ans: 0,
  exp: "The Oral Polio Vaccine (OPV / Sabin) contains live-attenuated virus strains that replicate in the gut-associated lymphoid tissue (Peyer patches) of the intestinal tract, mimicking natural infection. This stimulates mucosal production of Secretory IgA (sIgA) antibodies in the gut lumen. If a vaccinated individual subsequently ingests wild-type poliovirus, the high mucosal IgA titers neutralize the virus in the gut lumen, preventing viral excretion and halting community transmission. In contrast, IPV administered parenterally induces robust serum IgG that prevents viremia and paralytic disease, but elicits minimal mucosal IgA, meaning IPV-vaccinated individuals can still shed wild poliovirus in their feces.",
  wrongExp: "• <strong>Option B (Absence of VAPP):</strong> A major risk of OPV is that the live-attenuated virus can revert to neurovirulence during enteric replication, causing Vaccine-Associated Paralytic Poliomyelitis (VAPP) or circulating vaccine-derived polioviruses (cVDPV); IPV contains dead virus and has zero risk of VAPP.<br>• <strong>Option C (Superior thermal stability):</strong> OPV is heat-labile and requires a strict cold chain with vaccine vial monitors (VVM); IPV is significantly more stable.<br>• <strong>Option D (Safety in immunocompromised):</strong> Live-attenuated vaccines like OPV are strictly contraindicated in immunocompromised individuals due to prolonged replication, shedding, and risk of disseminated paralysis; IPV is preferred."
},
{
  id: 6037,
  subject: "Microbiology",
  topic: "Mycology",
  chapter: "Superficial & Cutaneous Mycoses",
  level: "Easy",
  q: "A 22-year-old athlete presents with hypopigmented, slightly scaling macules over his chest and back that become more conspicuous during the summer after sun exposure. Potassium hydroxide (KOH) examination of skin scrapings reveals short, stubby, unbranched curved hyphae interspersed with clusters of thick-walled budding yeasts ('spaghetti and meatballs' appearance). What is the causative fungal agent?",
  opts: [
    "Malassezia furfur",
    "Trichophyton rubrum",
    "Sporothrix schenckii",
    "Microsporum canis"
  ],
  ans: 0,
  exp: "Pityriasis (Tinea) versicolor is caused by Malassezia furfur (and Malassezia globosa), a lipophilic yeast that is part of the normal cutaneous microbiota. Overgrowth in hot, humid conditions leads to the production of dicarboxylic acids (such as azelaic acid), which inhibit tyrosinase in melanocytes, causing characteristic hypopigmented patches (or hyperpigmentation due to stratum corneum thickening). Direct microscopy with 10% KOH mounts classically demonstrates round budding yeast cells mixed with short, angular pseudohyphae, a diagnostic feature known as the 'spaghetti and meatballs' or 'meatballs and bananas' pattern.",
  wrongExp: "• <strong>Option B (Trichophyton rubrum):</strong> A common dermatophyte causing tinea corporis, tinea cruris, and tinea pedis; direct microscopy demonstrates long, thin, branching, septate hyphae, not a 'spaghetti and meatballs' pattern.<br>• <strong>Option C (Sporothrix schenckii):</strong> A thermally dimorphic fungus causing subcutaneous nodular lymphocutaneous lesions; tissue biopsy shows cigar-shaped budding yeasts, not superficial curved hyphae.<br>• <strong>Option D (Microsporum canis):</strong> A zoophilic dermatophyte that causes tinea capitis, exhibiting ectothrix hair invasion and producing large, spindle-shaped, multicellular, rough-walled macroconidia in culture."
},
{
  id: 6038,
  subject: "Microbiology",
  topic: "Mycology",
  chapter: "Subcutaneous Mycoses",
  level: "Moderate",
  q: "A 48-year-old rose gardener presents with a painless nodular ulcer on her right index finger following a puncture wound from a rose thorn two weeks ago. Over the following week, a chain of similar subcutaneous nodules erupted along the lymphatic drainage tract of her forearm (sporotrichoid spread). Biopsy shows pyogranulomatous inflammation. When cultured on Sabouraud dextrose agar at 25°C, the fungus grows as a mold with slender hyphae bearing pear-shaped microconidia arranged in a flower-petal or 'rosette' pattern. What is the diagnosis?",
  opts: [
    "Sporotrichosis",
    "Chromoblastomycosis",
    "Eumycotic mycetoma",
    "Lobomycosis"
  ],
  ans: 0,
  exp: "Sporotrichosis ('rose gardener's disease') is caused by Sporothrix schenckii, a classic thermally dimorphic environmental fungus found on plant thorns, moss, and decaying vegetation. Following traumatic cutaneous inoculation, it forms a primary ulcerated papule followed by secondary ulcerating nodules tracking along regional lymphatic channels (nodular lymphangitis). At 25°C, it grows as a white-to-black mold with delicate hyphae producing clusters of conidia on conidiophores resembling a daisy or rosette; at 37°C in tissue, it converts to pleomorphic, elongated 'cigar-shaped' budding yeasts.",
  wrongExp: "• <strong>Option B (Chromoblastomycosis):</strong> A subcutaneous mycosis caused by pigmented (dematiaceous) fungi (e.g., Fonsecaea pedrosoi), presenting as chronic, verrucous, cauliflower-like lesions containing diagnostic golden-brown, sclerotic 'copper penny' Medlar bodies.<br>• <strong>Option C (Eumycotic mycetoma):</strong> Characterized by the clinical triad of localized tumefaction, multiple draining sinus tracts, and macroscopic fungal grains/granules in purulent exudate.<br>• <strong>Option D (Lobomycosis):</strong> Caused by Lacazia loboi; presents with keloidal, nodular skin lesions in tropical regions, showing chains of lemon-shaped yeast cells connected by tubular bridges."
},
{
  id: 6039,
  subject: "Microbiology",
  topic: "Mycology",
  chapter: "Opportunistic Mycoses - Cryptococcus",
  level: "Easy",
  q: "A 38-year-old male with untreated AIDS (CD4 count 42 cells/µL) presents with an insidious onset of low-grade fever, headache, nausea, and photophobia. Lumbar puncture yields clear CSF with opening pressure 280 mm H2O. An India ink wet mount of the CSF reveals budding, spherical yeast cells surrounded by wide, unstained, clear halos. The diagnostic clear halo observed on India ink is due to which prominent fungal structure?",
  opts: [
    "Glucuronoxylomannan polysaccharide capsule",
    "Ergosterol-rich rigid cell wall",
    "Dense melanin envelope",
    "Mucor-like pseudo-capsule"
  ],
  ans: 0,
  exp: "Cryptococcus neoformans is an encapsulated, non-dimorphic opportunistic yeast acquired by inhaling aerosolized pigeon droppings. Its principal virulence factor is an extensive antiphagocytic capsule composed primarily of Glucuronoxylomannan (GXM). The colloidal particles of India ink cannot penetrate this extensive polysaccharide capsule; under light microscopy, the negative staining outlines the yeast as a clear, unstained halo against a dark carbon background. Other diagnostic features include positivity on mucicarmine (stains capsule rose-pink) and Fontana-Masson (stains cell-wall melanin black), along with urease production.",
  wrongExp: "• <strong>Option B (Ergosterol-rich rigid cell wall):</strong> Fungal cell walls and membranes contain ergosterol and beta-glucans, but India ink easily interfaces against standard cell walls; the wide halo is created solely by the exterior gelatinous polysaccharide capsule.<br>• <strong>Option C (Dense melanin envelope):</strong> Melanin is deposited inside the cell wall by the fungal laccase enzyme to provide antioxidant resistance against host oxidative bursts, but does not displace carbon particles in India ink.<br>• <strong>Option D (Mucor-like pseudo-capsule):</strong> Mucorales are non-capsulated filamentous molds that form ribbon-like aseptate hyphae, unrelated to cryptococcal biology."
},
{
  id: 6040,
  subject: "Microbiology",
  topic: "Mycology",
  chapter: "Opportunistic Mycoses - Aspergillus",
  level: "Moderate",
  q: "A 52-year-old male with severe prolonged neutropenia following allogeneic bone marrow transplantation develops pleuritic chest pain, hemoptysis, and fever refractory to broad-spectrum antibacterial therapy. High-resolution chest CT reveals nodular pulmonary infiltrates surrounded by a perimeter of ground-glass attenuation ('halo sign'). A transbronchial lung biopsy reveals fungal elements demonstrating dichotomous, acute-angle (45-degree) branching with uniform, regular septate hyphae. What is the most likely pathogen?",
  opts: [
    "Aspergillus fumigatus",
    "Rhizopus arrhizus",
    "Candida albicans",
    "Pneumocystis jirovecii"
  ],
  ans: 0,
  exp: "Invasive Aspergillosis (most commonly caused by Aspergillus fumigatus) is a life-threatening opportunistic mold infection seen in profoundly neutropenic patients. Aspergillus is angioinvasive, invading pulmonary blood vessels to cause thrombosis, infarction, and tissue necrosis (reflected on CT as the 'halo sign' of surrounding alveolar hemorrhage). Histopathologically, Aspergillus is characterized by narrow, uniform hyphae with frequent, regular cross-walls (septations) that branch dichotomously at acute angles (approximately 45 degrees). Diagnosis can be supported by detecting serum or bronchoalveolar lavage galactomannan antigen.",
  wrongExp: "• <strong>Option B (Rhizopus arrhizus):</strong> A member of the Mucorales order; features broad, ribbon-like, thin-walled hyphae with non-parallel sides, sparse or absent septations (aseptate/coenocytic), and irregular wide-angle (90-degree) branching.<br>• <strong>Option C (Candida albicans):</strong> Grows as a mixture of round/oval budding blastospores and elongated pseudohyphae with regular constrictions, lacking acute-angle branched true septate hyphae.<br>• <strong>Option D (Pneumocystis jirovecii):</strong> An atypical, unculturable fungus that exists as trophozoites and cup-shaped, round-to-oval cysts containing up to 8 intracystic bodies, stained with Gomori methenamine silver (GMS), completely lacking hyphal morphology."
},
{
  id: 6041,
  subject: "Microbiology",
  topic: "Mycology",
  chapter: "Opportunistic Mycoses - Mucormycosis",
  level: "Moderate",
  q: "A 54-year-old male with poorly controlled type 2 diabetes presents with acute diabetic ketoacidosis, severe unilateral facial pain, periorbital swelling, proptosis, and a black necrotic eschar over the hard palate and nasal turbinates. A diagnostic tissue biopsy of the paranasal sinus mucosa is obtained. What are the characteristic microscopic features of the hyphae observed in this fungal infection?",
  opts: [
    "Broad, non-septate ribbon-like hyphae with wide-angle (90-degree) branching",
    "Thin, septate hyphae showing acute-angle (45-degree) dichotomous branching",
    "Yeast cells showing narrow-based, single polar budding",
    "Yeast cells with multiple circumferential buds in a 'mariner's wheel' configuration"
  ],
  ans: 0,
  exp: "Rhino-orbito-cerebral mucormycosis is an aggressive, fulminant opportunistic infection caused by fungi of the order Mucorales (e.g., Rhizopus, Mucor, Lichtheimia). Patients with diabetic ketoacidosis (DKA) are uniquely predisposed because the ketone-rich, acidic environment and elevated free serum iron (due to dissociation from transferrin) stimulate fungal growth via iron-permease receptors. The fungi are angioinvasive, causing extensive vascular thrombosis, ischemic infarction, and black tissue eschars. Histopathology classically demonstrates broad (10–25 µm), thin-walled, ribbon-like, aseptate (coenocytic) hyphae with wide, irregular, right-angle (approximately 90-degree) branching.",
  wrongExp: "• <strong>Option B (Thin septate hyphae with 45-degree branching):</strong> Pathognomonic for Aspergillus species, not Mucorales.<br>• <strong>Option C (Narrow-based budding yeasts):</strong> Typical of Cryptococcus neoformans and Histoplasma capsulatum, not angioinvasive molds.<br>• <strong>Option D (Mariner's wheel budding yeasts):</strong> The classic diagnostic feature of Paracoccidioides brasiliensis (South American blastomycosis), displaying a mother yeast cell surrounded by multiple daughter buds."
},
{
  id: 6042,
  subject: "Microbiology",
  topic: "Mycology",
  chapter: "Systemic Dimorphic Mycoses",
  level: "Hard",
  q: "A 40-year-old spelunker who explored bat-inhabited limestone caves along the Mississippi and Ohio River valleys presents with fever, non-productive cough, and weight loss. Chest radiography reveals bilateral patchy pulmonary infiltrates with hilar lymphadenopathy. A bone marrow biopsy demonstrates tiny (2–4 µm) oval, uninucleate yeast cells clustered within the cytoplasm of circulating histiocytes and alveolar macrophages. What is the definitive etiologic agent?",
  opts: [
    "Histoplasma capsulatum",
    "Blastomyces dermatitidis",
    "Coccidioides immitis",
    "Cryptococcus neoformans"
  ],
  ans: 0,
  exp: "Histoplasma capsulatum is a systemic thermally dimorphic fungus endemic to the Mississippi and Ohio River valleys, thriving in soil heavily enriched with bird droppings and bat guano (spelunking/caving exposure). Microconidia are inhaled into the lungs, where they transform at 37°C into small, oval (2–4 µm) budding yeast cells. These yeasts are uniquely phagocytosed by reticuloendothelial macrophages, surviving and replicating within the phagolysosome by modulating lumen pH. Demonstrating intracellular yeasts tightly packed inside intact macrophages on Giemsa-stained bone marrow or peripheral blood smear is diagnostic.",
  wrongExp: "• <strong>Option B (Blastomyces dermatitidis):</strong> Forms large (8–15 µm) extracellular yeasts characterized by thick, refractive, doubly contoured cell walls and broad-based solitary budding, not tiny intracellular clusters within macrophages.<br>• <strong>Option C (Coccidioides immitis):</strong> Forms large, thick-walled spherules (20–100 µm) filled with numerous internal endospores in tissue, found in the southwestern arid desert soils of the United States.<br>• <strong>Option D (Cryptococcus neoformans):</strong> Extracellular, mucicarmine-positive encapsulated yeasts showing narrow-based unequal budding and wide halos on India ink, rarely found packed intracellularly within macrophages."
},
{
  id: 6043,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Intestinal Protozoa - Amoebae",
  level: "Moderate",
  q: "A 34-year-old male presents with right upper quadrant abdominal pain, high fever, and anorexia. Ultrasonography reveals a solitary, thick-walled cavity measuring 8 cm in the right lobe of the liver. Diagnostic aspiration yields thick, odorless, reddish-brown fluid resembling 'anchovy sauce'. Which protozoan is the causative agent, and what characteristic feature differentiates its invasive vegetative trophozoites from non-pathogenic commensal amoebae?",
  opts: [
    "Entamoeba histolytica; ingestion of erythrocytes (erythrophagocytosis)",
    "Entamoeba dispar; presence of a single central karyosome",
    "Giardia duodenalis; presence of two identical sucking discs",
    "Balantidium coli; presence of prominent macronucleus and micronucleus"
  ],
  ans: 0,
  exp: "Amebic liver abscess (ALA) is the most common extraintestinal manifestation of Entamoeba histolytica infection. Trophozoites breach the colonic epithelium (creating classic flask-shaped ulcers) and travel via the portal venous circulation to the liver, causing localized liquefactive necrosis filled with sterile reddish-brown necrotic liver tissue ('anchovy sauce' pus). Morphologically, E. histolytica is indistinguishable on routine light microscopy from the non-pathogenic commensal Entamoeba dispar, except by the observation of ingested host erythrocytes within the cytoplasm of motile trophozoites (erythrophagocytosis), which confirms invasive pathogenic amoebiasis.",
  wrongExp: "• <strong>Option B (Entamoeba dispar; central karyosome):</strong> E. dispar shares an identical bull's-eye nucleus with a centrally placed karyosome, but is an avirulent commensal that never invades tissues, causes liver abscesses, or ingests red blood cells.<br>• <strong>Option C (Giardia duodenalis):</strong> A flagellated protozoan causing non-invasive malabsorptive enteritis and steatorrhea in the duodenum, not amebic anchovy-sauce liver abscesses.<br>• <strong>Option D (Balantidium coli):</strong> The largest ciliated human intestinal parasite (associated with pig contact), which can produce dysenteric colonic ulcers but rarely causes distant hepatic liquefactive abscesses."
},
{
  id: 6044,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Flagellates - Giardia duodenalis",
  level: "Easy",
  q: "A 26-year-old camper develops foul-smelling, greasy, floating stools without blood, accompanied by abdominal distension, sulfurous belching, and flatulence after drinking unfiltered stream water. Stool examination demonstrates binucleate, pear-shaped flagellated trophozoites that exhibit a classic 'falling leaf' tumbling motility. Where do these parasites primarily attach to cause malabsorption?",
  opts: [
    "Duodenal and jejunal brush border via a ventral sucking disc",
    "Terminal ileum mucosa by invading intraepithelial lamina propria",
    "Ascending colonic crypts via specialized flagellar hooks",
    "Gastric antral pits via urease-dependent mucin adherence"
  ],
  ans: 0,
  exp: "Giardia duodenalis (also known as Giardia lamblia or intestinalis) is an intestinal flagellate that causes malabsorptive diarrhea. Cysts ingested from contaminated surface water excyst in the acidic stomach, releasing motile, binucleated, pear-shaped trophozoites. Trophozoites attach firmly to the epithelial brush border of the duodenum and upper jejunum using a specialized ventral concave sucking disc (adhesive disc). Giardia does not invade the mucosal epithelium; instead, it mechanically blankets the brush border and induces blunting of microvilli, causing fat and carbohydrate malabsorption, leading to greasy, floating steatorrhea.",
  wrongExp: "• <strong>Option B (Terminal ileum invasion):</strong> Giardia is strictly non-invasive and colonizes the proximal small intestine (duodenum/jejunum); invasive ileal disease is characteristic of pathogens like Salmonella, Yersinia, or Crohn disease.<br>• <strong>Option C (Ascending colon attachment):</strong> The colon is the site of colonization for Entamoeba histolytica and Trichuris trichiura; Giardia trophozoites die rapidly in the large intestine and encyst.<br>• <strong>Option D (Gastric antral pits):</strong> The habitat of Helicobacter pylori, not flagellated intestinal protozoa like Giardia."
},
{
  id: 6045,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Leishmania donovani & Kala-Azar",
  level: "Hard",
  q: "A 30-year-old agricultural laborer from Bihar presents with prolonged undulating fever, progressive weight loss, epistaxis, and massive splenomegaly extending into the right iliac fossa. Laboratory studies reveal pancytopenia and polyclonal hypergammaglobulinemia. Bone marrow aspirate reveals intracellular amastigotes (LD bodies) within macrophages. What diagnostic test utilizes an antigen suspension of killed promastigotes to assess delayed-type hypersensitivity, and what is its result during active visceral leishmaniasis?",
  opts: [
    "Montenegro test; negative during active disease",
    "Montenegro test; strongly positive during active disease",
    "Napier aldehyde test; negative during active disease",
    "Kveim-Siltzbach test; positive during active disease"
  ],
  ans: 0,
  exp: "The Montenegro skin test (Leishmanin test) is a delayed-type hypersensitivity (DTH) skin test that measures cell-mediated immunity (CMI) against Leishmania promastigote antigens. In active Visceral Leishmaniasis (Kala-azar, caused by Leishmania donovani), there is a profound, selective cellular anergy against leishmanial antigens (Th2 predominance, absent IFN-gamma, heavy parasitization of reticuloendothelial macrophages). Consequently, the Montenegro test is universally negative during active visceral disease. Following successful chemotherapy or clinical recovery, cellular immunity recovers, and the skin test converts to positive.",
  wrongExp: "• <strong>Option B (Montenegro test; strongly positive during active disease):</strong> It is positive in cutaneous leishmaniasis (where cell-mediated immunity is intact) and becomes positive only after successful cure of Kala-azar, but is negative during active visceral disease.<br>• <strong>Option C (Napier aldehyde test):</strong> A historical chemical screening test based on serum gelation/solidification in the presence of formaldehyde driven by hypergammaglobulinemia; it is strongly positive during active Kala-azar, but is an antibody-protein test, not a cellular DTH test.<br>• <strong>Option D (Kveim-Siltzbach test):</strong> A historical diagnostic intradermal test utilizing sarcoid spleen extract used to identify sarcoidosis, not leishmaniasis."
},
{
  id: 6046,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Malaria - Plasmodium falciparum",
  level: "Moderate",
  q: "A 28-year-old traveler returning from sub-Saharan Africa presents with cyclic high fevers, confusion, and profound jaundice. A peripheral blood thin film demonstrates high-level parasitemia with numerous delicate ring-form trophozoites showing double chromatin dots and multiple infections per erythrocyte, alongside distinctive crescent-shaped (banana-shaped) gametocytes. What parasite-derived protein expressed on infected RBC membranes mediates cytoadherence to endothelial CD36 and ICAM-1, driving the microvascular sequestration of cerebral malaria?",
  opts: [
    "Plasmodium falciparum erythrocyte membrane protein 1 (PfEMP-1)",
    "Circumsporozoite protein (CSP)",
    "Duffy antigen receptor for chemokines (DARC)",
    "Apical membrane antigen 1 (AMA-1)"
  ],
  ans: 0,
  exp: "Plasmodium falciparum causes malignant tertian malaria and severe life-threatening complications such as cerebral malaria. The parasite synthesizes Plasmodium falciparum Erythrocyte Membrane Protein 1 (PfEMP-1), encoded by the hypervariable var multigene family. PfEMP-1 is trafficked to the surface of host erythrocytes and concentrates within specialized membrane projections known as 'knobs'. PfEMP-1 acts as a major cytoadherence ligand, binding to host endothelial receptors including CD36, Intercellular Adhesion Molecule-1 (ICAM-1), and chondroitin sulfate A. This mediates microvascular sequestration of parasitized RBCs in the cerebral microcirculation, preventing splenic clearance while causing local hypoperfusion, ischemia, and coma.",
  wrongExp: "• <strong>Option B (Circumsporozoite protein [CSP]):</strong> The dominant surface protein of the circulating sporozoite stage that facilitates initial homing and binding to host hepatocytes, serving as the target for the RTS,S/AS01 malaria vaccine.<br>• <strong>Option C (Duffy antigen receptor [DARC]):</strong> A host erythrocyte surface glycoprotein utilized by Plasmodium vivax merozoites for erythrocyte entry; Duffy-negative individuals are resistant to P. vivax, not P. falciparum.<br>• <strong>Option D (Apical membrane antigen 1 [AMA-1]):</strong> A conserved merozoite microneme protein involved in the orientation and tight junction formation during general erythrocyte invasion, not endothelial knob cytoadherence."
},
{
  id: 6047,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Toxoplasma gondii",
  level: "Moderate",
  q: "A 24-year-old primigravida gives birth to a neonate with microcephaly. Transfontanelle ultrasound and CT scan of the infant's brain demonstrate hydrocephalus alongside widespread, diffuse intracranial calcifications. Funduscopic examination reveals bilateral chorioretinitis. Maternal history reveals consumption of undercooked mutton and cleaning of cat litter boxes during the first trimester. Which morphological form of Toxoplasma gondii is responsible for the slow, latent, persistent encysted phase within host neural and muscular tissues?",
  opts: [
    "Bradyzoite",
    "Tachyzoite",
    "Oocyst",
    "Sporozoite"
  ],
  ans: 0,
  exp: "Congenital toxoplasmosis classically presents with Sabin's tetrad: Chorioretinitis, Hydrocephalus, Intracranial calcifications, and Convulsions/microcephaly. In the life cycle of Toxoplasma gondii, tachyzoites represent the rapidly dividing, crescent-shaped motile forms responsible for acute tissue destruction, transplacental transmission, and systemic dissemination. Under pressure from host cell-mediated immunity, tachyzoites differentiate into slowly dividing, metabolically quiescent forms termed Bradyzoites. Thousands of bradyzoites are sequestered within dense intracellular tissue cysts in the brain, retina, and skeletal muscle, remaining latent for the host's lifetime.",
  wrongExp: "• <strong>Option B (Tachyzoite):</strong> The rapidly proliferating, invasive form that causes acute systemic inflammation and crosses the placenta during primary maternal infection, but does not form the dormant tissue cysts.<br>• <strong>Option C (Oocyst):</strong> The thick-walled environmental stage formed exclusively by sexual reproduction within the intestinal epithelium of felines (the definitive host), shed in cat feces.<br>• <strong>Option D (Sporozoite):</strong> Infectious, motile forms contained within sporulated oocysts in the environment, which excyst following ingestion by intermediate hosts."
},
{
  id: 6048,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Cestodes & Neurocysticercosis",
  level: "Moderate",
  q: "A 35-year-old male presents with a new-onset generalized tonic-clonic seizure. Contrast-enhanced MRI of the brain reveals multiple small, punctate calcified lesions alongside several cystic lesions displaying a non-enhancing fluid cavity with an eccentric, hyperdense nodule representing a scolex ('hole-with-a-dot' sign). What mode of transmission resulted in this patient acquiring neurocysticercosis?",
  opts: [
    "Ingestion of food or water contaminated with Taenia solium eggs shed in human feces",
    "Ingestion of undercooked pork containing larval cysticerci",
    "Ingestion of undercooked beef containing Taenia saginata cysticerci",
    "Direct transcutaneous penetration by filariform oncospheres"
  ],
  ans: 0,
  exp: "Neurocysticercosis is caused by the larval stage (Cysticercus cellulosae) of the pork tapeworm, Taenia solium. Humans acquire intestinal tapeworm infection (taeniasis) by ingesting undercooked pork containing viable larval cysts (cysticerci). However, cysticercosis occurs when humans act as accidental intermediate hosts by ingesting Taenia solium EGGS (via fecal-oral contamination from a human tapeworm carrier, contaminated vegetables, or autoinfection). The ingested eggs hatch in the stomach, liberating oncospheres that penetrate the intestinal wall and migrate hematogenously to the brain, eyes, and muscles to form cysticerci.",
  wrongExp: "• <strong>Option B (Ingestion of undercooked pork containing cysticerci):</strong> Results in adult intestinal tapeworm infection (taeniasis), in which the adult worm resides in the gut lumen, but does not directly cause neurocysticercosis.<br>• <strong>Option C (Ingestion of undercooked beef):</strong> Transmits Taenia saginata (beef tapeworm), which does NOT cause cysticercosis in humans under any circumstances.<br>• <strong>Option D (Direct transcutaneous penetration):</strong> Characteristic of nematodes like hookworms (Ancylostoma, Necator) and Strongyloides stercoralis; cestode oncospheres cannot penetrate intact human skin."
},
{
  id: 6049,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Trematodes - Blood Flukes",
  level: "Easy",
  q: "A 26-year-old male immigrant from Egypt presents with intermittent, painless terminal hematuria and dysuria. Urine microscopy reveals numerous non-operculated eggs displaying a prominent, sharp terminal spine. Cystoscopy demonstrates mucosal patches resembling 'sandy patches' and a focal nodular mass on the posterior bladder wall. Biopsy confirms squamous cell carcinoma. What is the causative helminthic parasite?",
  opts: [
    "Schistosoma haematobium",
    "Schistosoma mansoni",
    "Schistosoma japonicum",
    "Clonorchis sinensis"
  ],
  ans: 0,
  exp: "Schistosoma haematobium (the vesical blood fluke) resides within the venous plexuses surrounding the human urinary bladder and pelvic organs. Adult females deposit characteristic eggs bearing a sharp, pointed Terminal Spine into the venules. These eggs erode through the bladder wall to be excreted in urine, causing terminal hematuria, dysuria, and granulomatous fibrosis ('sandy patches'). Chronic, long-standing granulomatous inflammation and oxidative irritation induced by lodged eggs is an established biological cause of Squamous Cell Carcinoma of the urinary bladder.",
  wrongExp: "• <strong>Option B (Schistosoma mansoni):</strong> Resides in the inferior mesenteric venules draining the large intestine; its eggs have a prominent, sharp lateral spine and cause intestinal schistosomiasis, colonic polyps, and pipe-stem hepatic fibrosis, not hematuria.<br>• <strong>Option C (Schistosoma japonicum):</strong> Resides within superior mesenteric venules draining the small intestine; its eggs are rounded with a tiny, inconspicuous lateral knob/spine, causing severe hepatosplenic schistosomiasis.<br>• <strong>Option D (Clonorchis sinensis):</strong> The Chinese liver fluke; resides within biliary ducts causing cholangiocarcinoma (biliary adenocarcinoma), not terminal hematuria or squamous bladder carcinoma."
},
{
  id: 6050,
  subject: "Microbiology",
  topic: "Parasitology",
  chapter: "Nematodes - Strongyloides stercoralis",
  level: "Hard",
  q: "A 62-year-old male with chronic obstructive pulmonary disease who has been taking high-dose oral dexamethasone for 6 months develops sudden abdominal pain, distension, bilateral diffuse pulmonary infiltrates, and Gram-negative polymicrobial sepsis with Klebsiella pneumoniae. Microscopic examination of fresh stool and sputum wet mounts reveals numerous active, motile rhabditiform larvae with a short buccal cavity and prominent genital primordium. What unique biological trait of this nematode enables fatal hyperinfection syndrome in immunocompromised hosts?",
  opts: [
    "Autoinfection cycle where larvae mature into infective filariform stages within the host gut lumen",
    "Direct reproduction of adult worms in the pulmonary alveoli",
    "Obligate transplacental transmission of microfilariae",
    "Requirement for biliary duct transit to complete sexual maturation"
  ],
  ans: 0,
  exp: "Strongyloides stercoralis is unique among intestinal nematodes because it can complete an internal Autoinfection cycle. Non-infective rhabditiform larvae (L1) passed into the intestine by parasitic adult females can rapidly molt within the intestinal lumen into infective filariform larvae (L3). These filariform larvae immediately penetrate the perianal skin or colonic mucosa, entering the venous circulation to migrate through the lungs and back to the small bowel. In immunocompromised patients (especially those on systemic corticosteroids or with HTLV-1 co-infection), this cycle accelerates exponentially, producing Strongyloides Hyperinfection Syndrome. The migrating larvae drag enteric bacteria through bowel walls into the bloodstream, triggering polymicrobial Gram-negative septicemia and meningitis.",
  wrongExp: "• <strong>Option B (Direct reproduction of adult worms in alveoli):</strong> Adult female worms embed and reproduce exclusively within the mucosal epithelium of the duodenum and upper jejunum, not within the alveolar air spaces.<br>• <strong>Option C (Obligate transplacental transmission):</strong> Strongyloides is acquired by percutaneous larval penetration from soil or via internal autoinfection, not transplacentally.<br>• <strong>Option D (Requirement for biliary transit):</strong> Strongyloides does not enter the biliary ductal system; biliary transit is characteristic of liver flukes (Fasciola, Clonorchis) and migrating Ascaris lumbricoides."
}
];
