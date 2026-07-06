const cases = [
  {
    id: "TE-0001",
    category: "CARDIO",
    patient: {
      date: "06/07/2026",
      name: "Mr. Arthit Makok",
      sexAge: "Male / 67 years",
      weight: "70 kg",
      allergy: "No known drug allergy",
      diagnosis: "Atrial fibrillation with osteoarthritis pain",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "13/07/2026",
      days: "7 days"
    },
    labs: "INR 1.2, Hb 11.2 g/dL, platelets 180,000/uL, AST/ALT 32/28 U/L",
    meds: [
      ["1", "Warfarin 5 mg tablet", "30 tab", "Take 1 tablet orally once daily at bedtime"],
      ["2", "Amiodarone 200 mg tablet", "90 tab", "Take 1 tablet orally three times daily after meals"],
      ["3", "Ibuprofen 400 mg tablet", "30 tab", "Take 1 tablet orally three times daily after meals when joint pain occurs"]
    ],
    answer: {
      summary: "High-risk interaction and quantity mismatch in a patient starting warfarin therapy.",
      errors: [
        "Warfarin plus amiodarone can markedly increase anticoagulant effect. The prescription needs explicit monitoring and likely warfarin dose adjustment.",
        "Ibuprofen with warfarin increases bleeding risk. Prefer a safer analgesic option and counsel on bleeding signs.",
        "Quantity for warfarin is 30 tablets although the follow-up is in 7 days. Dispensing should match the review interval or include a clear rationale.",
        "Baseline INR is subtherapeutic for atrial fibrillation, so follow-up INR monitoring should be specified."
      ],
      safer: [
        "Clarify anticoagulation plan and INR target.",
        "Avoid NSAID unless prescriber confirms risk-benefit and gastroprotection plan.",
        "Dispense a 7-day supply or document why 30 tablets are intended."
      ],
      keywords: ["warfarin", "amiodarone", "ibuprofen", "bleeding", "inr", "quantity", "7 day", "nsaid", "interaction", "drug interaction"]
    }
  },
  {
    id: "TE-0002",
    category: "CARDIO",
    patient: {
      date: "06/07/2026",
      name: "Mrs. Wipha Baikhiao",
      sexAge: "Female / 72 years",
      weight: "52 kg",
      allergy: "No known drug allergy",
      diagnosis: "HFrEF, hypertension, CKD stage 4",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "20/07/2026",
      days: "14 days"
    },
    labs: "Scr 2.1 mg/dL, eGFR 28 mL/min/1.73 m2, K 5.3 mmol/L, Na 136 mmol/L",
    meds: [
      ["1", "Losartan 50 mg tablet", "30 tab", "Take 1 tablet orally once daily"],
      ["2", "Spironolactone 50 mg tablet", "60 tab", "Take 1 tablet orally twice daily"],
      ["3", "Potassium chloride 600 mg tablet", "90 tab", "Take 1 tablet orally three times daily after meals"],
      ["4", "Furosemide 40 mg tablet", "30 tab", "Take 1 tablet orally every morning"]
    ],
    answer: {
      summary: "Hyperkalemia risk is the central issue, with CKD and duplicate potassium-raising therapy.",
      errors: [
        "Potassium is already high at 5.3 mmol/L. Potassium chloride is unsafe unless a very specific correction plan exists.",
        "Losartan plus high-dose spironolactone in CKD increases hyperkalemia risk and requires careful monitoring or dose change.",
        "Spironolactone 50 mg twice daily is high for this patient profile and should be clarified.",
        "Quantity does not match a 14-day supply for several medicines."
      ],
      safer: [
        "Hold potassium supplement and contact prescriber.",
        "Reassess RAAS inhibitor and MRA dosing with K/eGFR.",
        "Plan repeat potassium and renal function testing."
      ],
      keywords: ["potassium", "k 5.3", "hyperkalemia", "spironolactone", "losartan", "ckd", "egfr", "quantity", "renal", "kidney", "interaction"]
    }
  },
  {
    id: "TE-0003",
    category: "CARDIO",
    patient: {
      date: "06/07/2026",
      name: "Mr. Thana Kingmakok",
      sexAge: "Male / 59 years",
      weight: "78 kg",
      allergy: "No known drug allergy",
      diagnosis: "NSTEMI post-PCI with drug-eluting stent; dyspepsia history",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "03/08/2026",
      days: "28 days"
    },
    labs: "Hb 12.4 g/dL, platelets 250,000/uL, Scr 1.0 mg/dL, ALT 35 U/L",
    meds: [
      ["1", "Aspirin 81 mg tablet", "30 tab", "Take 1 tablet orally once daily after meals"],
      ["2", "Clopidogrel 75 mg tablet", "30 tab", "Take 1 tablet orally once daily"],
      ["3", "Omeprazole 20 mg capsule", "30 cap", "Take 1 capsule orally once daily before breakfast"],
      ["4", "Diclofenac 50 mg tablet", "30 tab", "Take 1 tablet orally three times daily after meals when pain occurs"]
    ],
    answer: {
      summary: "Dual antiplatelet therapy is appropriate after PCI, but interaction and bleeding risks need review.",
      errors: [
        "Diclofenac with aspirin and clopidogrel increases GI and bleeding risk after ACS/PCI.",
        "Omeprazole can reduce clopidogrel activation through CYP2C19 inhibition. Consider pantoprazole if PPI is needed.",
        "Diclofenac also carries cardiovascular risk in a recent NSTEMI patient.",
        "Quantities are not aligned with a 28-day follow-up."
      ],
      safer: [
        "Avoid NSAID and choose a safer analgesic plan.",
        "Use a PPI with less clopidogrel interaction if gastroprotection is indicated.",
        "Clarify duration and quantities."
      ],
      keywords: ["diclofenac", "nsaid", "bleeding", "aspirin", "clopidogrel", "omeprazole", "pantoprazole", "pci", "quantity", "interaction", "drug interaction"]
    }
  },
  {
    id: "TE-0004",
    category: "GI",
    patient: {
      date: "06/07/2026",
      name: "Ms. Kan Makokwan",
      sexAge: "Female / 35 years",
      weight: "58 kg",
      allergy: "Penicillin - anaphylaxis",
      diagnosis: "H. pylori-associated gastritis",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "20/07/2026",
      days: "14 days"
    },
    labs: "Urea breath test positive, Hb 12.8 g/dL, Scr 0.7 mg/dL, AST/ALT 24/22 U/L",
    meds: [
      ["1", "Omeprazole 20 mg capsule", "14 cap", "Take 1 capsule orally once daily before breakfast"],
      ["2", "Amoxicillin 1 g tablet", "28 tab", "Take 1 tablet orally twice daily after meals"],
      ["3", "Clarithromycin 500 mg tablet", "56 tab", "Take 1 tablet orally four times daily after meals and bedtime"]
    ],
    answer: {
      summary: "The prescription conflicts with a severe allergy and has H. pylori regimen errors.",
      errors: [
        "Amoxicillin is contraindicated because the allergy history says penicillin anaphylaxis.",
        "PPI frequency is likely inadequate for standard H. pylori eradication regimens.",
        "Clarithromycin four times daily is excessive; common regimens use twice daily dosing.",
        "The quantities do not consistently match a 14-day regimen."
      ],
      safer: [
        "Contact prescriber for a non-penicillin H. pylori regimen.",
        "Correct dose frequency and duration according to local guideline.",
        "Document allergy verification and counseling."
      ],
      keywords: ["penicillin", "anaphylaxis", "amoxicillin", "allergy", "clarithromycin", "four times", "omeprazole", "h pylori", "quantity", "contraindication", "dose", "frequency"]
    }
  },
  {
    id: "TE-0005",
    category: "GI",
    patient: {
      date: "06/07/2026",
      name: "Master Phupha Khiaodi",
      sexAge: "Male / 8 years",
      weight: "24 kg",
      allergy: "No known drug allergy",
      diagnosis: "Acute gastroenteritis with fever 39 C and bloody diarrhea",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "09/07/2026",
      days: "3 days"
    },
    labs: "WBC 15,200/uL, CRP 58 mg/L, Scr 0.4 mg/dL, stool WBC/RBC positive",
    meds: [
      ["1", "Loperamide 2 mg capsule", "20 cap", "Take 1 capsule orally after each loose stool"],
      ["2", "Ciprofloxacin 500 mg tablet", "28 tab", "Take 1 tablet orally twice daily for 14 days"],
      ["3", "ORS sachet", "10 sachet", "Mix with water as labeled and sip when diarrhea occurs"]
    ],
    answer: {
      summary: "This pediatric infectious diarrhea case contains safety, dose, and duration problems.",
      errors: [
        "Loperamide should be avoided in children with fever and bloody diarrhea because invasive infection is suspected.",
        "Ciprofloxacin 500 mg twice daily may be inappropriate for an 8-year-old weighing 24 kg without clear indication and culture guidance.",
        "Antibiotic duration of 14 days is excessive for many acute gastroenteritis scenarios and conflicts with 3-day follow-up.",
        "Quantity of ciprofloxacin does not match the short follow-up and should trigger clarification."
      ],
      safer: [
        "Prioritize hydration with ORS and assess severity.",
        "Avoid antimotility agent in dysentery-like illness.",
        "Clarify antibiotic choice, pediatric dose, and duration with prescriber."
      ],
      keywords: ["loperamide", "bloody", "fever", "child", "pediatric", "ciprofloxacin", "dose", "14 days", "ors", "quantity", "contraindication", "duration", "infection"]
    }
  },
  {
    id: "TE-0006",
    category: "INFECTION",
    patient: {
      date: "10/07/2026",
      name: "Mr. Pakorn Makokngoen",
      sexAge: "Male / 64 years",
      weight: "68 kg",
      allergy: "No known drug allergy",
      diagnosis: "Community-acquired pneumonia; baseline QTc 510 ms",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "17/07/2026",
      days: "7 days"
    },
    labs: "QTc 510 ms, K 3.2 mmol/L, Mg 1.6 mg/dL, Scr 1.1 mg/dL, SpO2 94%",
    meds: [
      ["1", "Azithromycin 500 mg tablet", "14 tab", "Take 1 tablet orally twice daily for 7 days"],
      ["2", "Levofloxacin 750 mg tablet", "7 tab", "Take 1 tablet orally once daily for 7 days"],
      ["3", "Domperidone 10 mg tablet", "30 tab", "Take 1 tablet orally three times daily before meals"]
    ],
    answer: {
      summary: "Multiple QT-prolonging medicines are ordered in a patient with QTc 510 ms and low potassium/magnesium.",
      errors: [
        "QTc 510 ms with low K and Mg makes azithromycin, levofloxacin, and domperidone high risk for torsades de pointes.",
        "Azithromycin 500 mg twice daily for 7 days is an unusually high frequency/dose for common CAP regimens.",
        "Azithromycin plus levofloxacin is antibiotic duplication unless a clear indication exists.",
        "Electrolytes and ECG risk should be corrected/rechecked before dispensing QT-risk medicines."
      ],
      safer: [
        "Consult prescriber before dispensing.",
        "Correct K/Mg and review ECG risk.",
        "Choose an appropriate CAP regimen with lower QT risk and avoid domperidone."
      ],
      keywords: ["qtc", "qt", "azithromycin", "levofloxacin", "domperidone", "potassium", "magnesium", "k 3.2", "mg 1.6", "interaction", "duplication", "dose"]
    }
  },
  {
    id: "TE-0007",
    category: "INFECTION/OB",
    patient: {
      date: "10/07/2026",
      name: "Ms. Sasi Makok-on",
      sexAge: "Female / 28 years",
      weight: "60 kg",
      allergy: "No known drug allergy",
      diagnosis: "Acute cystitis in pregnancy, GA 12 weeks",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "15/07/2026",
      days: "5 days"
    },
    labs: "UA WBC 50-100/HPF, nitrite positive, urine culture pending, Scr 0.6 mg/dL",
    meds: [
      ["1", "Ciprofloxacin 500 mg tablet", "10 tab", "Take 1 tablet orally twice daily for 5 days"],
      ["2", "Trimethoprim/sulfamethoxazole DS tablet", "6 tab", "Take 1 tablet orally twice daily for 3 days"],
      ["3", "Ibuprofen 400 mg tablet", "15 tab", "Take 1 tablet orally three times daily after meals when pain occurs"]
    ],
    answer: {
      summary: "This pregnancy case has antibiotic selection and duplication problems.",
      errors: [
        "Ciprofloxacin is generally not a first-line choice for cystitis in pregnancy.",
        "TMP-SMX at 12 weeks has safety concerns and should be used only when appropriate alternatives are unsuitable.",
        "Two antibiotics are prescribed while culture is pending, without a clear reason for duplication.",
        "Ibuprofen is not the preferred analgesic in pregnancy."
      ],
      safer: [
        "Consult for a pregnancy-appropriate antibiotic based on local guidance.",
        "Follow urine culture and susceptibility.",
        "Use paracetamol if analgesia is needed unless contraindicated."
      ],
      keywords: ["pregnancy", "pregnant", "12 weeks", "ciprofloxacin", "tmp", "sulfamethoxazole", "trimethoprim", "ibuprofen", "duplication", "culture", "safety"]
    }
  },
  {
    id: "TE-0008",
    category: "INFECTION/RENAL",
    patient: {
      date: "10/07/2026",
      name: "Mr. Somkid Baimakok",
      sexAge: "Male / 76 years",
      weight: "62 kg",
      allergy: "No known drug allergy",
      diagnosis: "Cellulitis with CKD stage 5 and type 2 diabetes",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "13/07/2026",
      days: "3 days"
    },
    labs: "Scr 4.2 mg/dL, eGFR 12 mL/min/1.73 m2, K 5.0 mmol/L, WBC 17,000/uL",
    meds: [
      ["1", "Vancomycin 1 g IV", "21 doses", "Give IV every 8 hours for 7 days"],
      ["2", "Gentamicin 80 mg IV", "21 doses", "Give IV every 8 hours for 7 days"],
      ["3", "Metformin 1000 mg tablet", "60 tab", "Take 1 tablet orally twice daily continuously"]
    ],
    answer: {
      summary: "Advanced CKD makes the antibiotic dosing and metformin order unsafe.",
      errors: [
        "eGFR 12 requires renal dosing review for vancomycin and gentamicin, plus therapeutic drug monitoring.",
        "Vancomycin plus gentamicin increases nephrotoxicity risk, especially in CKD stage 5.",
        "Metformin is inappropriate in advanced CKD because of lactic acidosis risk.",
        "The IV antibiotic quantity/duration should be reconciled with the short follow-up and monitoring plan."
      ],
      safer: [
        "Hold dispensing and consult for renal-adjusted antimicrobial plan.",
        "Plan drug-level monitoring and renal/electrolyte follow-up.",
        "Hold or discontinue metformin according to renal function."
      ],
      keywords: ["egfr", "12", "ckd", "renal", "vancomycin", "gentamicin", "nephrotoxicity", "tdm", "metformin", "lactic acidosis", "dose"]
    }
  },
  {
    id: "TE-0009",
    category: "CANCER",
    patient: {
      date: "10/07/2026",
      name: "Miss Mali Makokkaew",
      sexAge: "Female / 10 years",
      weight: "32 kg",
      allergy: "No known drug allergy",
      diagnosis: "Acute lymphoblastic leukemia; scheduled intrathecal chemotherapy today",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "10/07/2026 13:00",
      days: "Chemotherapy today"
    },
    labs: "ANC 800/uL, platelets 45,000/uL, Hb 9.2 g/dL, AST/ALT 48/52 U/L",
    meds: [
      ["1", "Vincristine 2 mg", "1 dose", "Give intrathecal once today"],
      ["2", "Methotrexate 12 mg", "1 dose", "Give IV once today"],
      ["3", "Ondansetron 4 mg tablet", "10 tab", "Take 1 tablet orally every 8 hours when nausea occurs"]
    ],
    answer: {
      summary: "This is a catastrophic chemotherapy route error.",
      errors: [
        "Vincristine must never be given intrathecally. Intrathecal vincristine can be fatal.",
        "Methotrexate route appears swapped with vincristine and must be verified against protocol.",
        "ANC and platelet counts are low, so chemotherapy readiness criteria require protocol review.",
        "Chemotherapy orders require independent double check, route segregation, and clear labeling."
      ],
      safer: [
        "Stop preparation/dispensing immediately.",
        "Notify prescriber and chemotherapy team.",
        "Verify protocol, patient, dose, route, labs, and label vinca alkaloids IV ONLY."
      ],
      keywords: ["vincristine", "intrathecal", "route", "fatal", "methotrexate", "chemo", "chemotherapy", "double check", "platelet", "anc", "iv only"]
    }
  },
  {
    id: "TE-0010",
    category: "CANCER/PSY",
    patient: {
      date: "10/07/2026",
      name: "Mrs. Kingdao Makokthong",
      sexAge: "Female / 54 years",
      weight: "55 kg",
      allergy: "No known drug allergy",
      diagnosis: "ER-positive breast cancer on tamoxifen, depression, cancer pain",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "07/08/2026",
      days: "28 days"
    },
    labs: "QTc 480 ms, AST/ALT 38/41 U/L, Scr 0.8 mg/dL, PHQ-9 score 16",
    meds: [
      ["1", "Tamoxifen 20 mg tablet", "30 tab", "Take 1 tablet orally once daily after breakfast"],
      ["2", "Fluoxetine 20 mg capsule", "30 cap", "Take 1 capsule orally once daily after breakfast"],
      ["3", "Tramadol 50 mg capsule", "30 cap", "Take 1 capsule orally every 6 hours when pain occurs"],
      ["4", "Ondansetron 8 mg tablet", "15 tab", "Take 1 tablet orally three times daily when nausea occurs"]
    ],
    answer: {
      summary: "The main problems are CYP2D6 inhibition, serotonin toxicity risk, and QT risk.",
      errors: [
        "Fluoxetine is a strong CYP2D6 inhibitor and may reduce tamoxifen activation.",
        "Fluoxetine plus tramadol increases serotonin toxicity and seizure risk.",
        "QTc 480 ms with ondansetron and fluoxetine increases QT prolongation concern.",
        "Analgesic and antidepressant choices should be reviewed in the cancer-care context."
      ],
      safer: [
        "Consult for an antidepressant with less CYP2D6 inhibition.",
        "Review analgesic plan and serotonin toxicity risk.",
        "Monitor QT risk and avoid unnecessary QT-prolonging combinations."
      ],
      keywords: ["tamoxifen", "fluoxetine", "cyp2d6", "tramadol", "serotonin", "seizure", "qtc", "qt", "ondansetron", "interaction"]
    }
  },
  {
    id: "TE-0011",
    category: "CARDIO/METABOLIC",
    patient: {
      date: "10/07/2026",
      name: "Mr. Chalit Khiaomakok",
      sexAge: "Male / 61 years",
      weight: "82 kg",
      allergy: "No known drug allergy",
      diagnosis: "Type 2 diabetes, hypertension, dyslipidemia; stable follow-up",
      prescriber: "Dr. Khiao Sawoey",
      followUp: "09/08/2026",
      days: "30 days"
    },
    labs: "HbA1c 8.4%, FPG 168 mg/dL, Scr 0.9 mg/dL, eGFR 86, LDL-C 142 mg/dL, BP 148/86 mmHg, K 4.4 mmol/L",
    meds: [
      ["1", "Metformin 500 mg tablet", "30 tab", "Take 1 tablet orally twice daily after breakfast and dinner"],
      ["2", "Enalapril 5 mg tablet", "30 tab", "Take 1 tablet orally twice daily after breakfast and dinner"],
      ["3", "Atorvastatin 40 mg tablet", "30 tab", "Take 1 tablet orally once daily at bedtime"],
      ["4", "Aspirin EC 81 mg tablet", "15 tab", "Take 1 tablet orally once daily after breakfast"]
    ],
    answer: {
      summary: "This stable refill case hides multiple quantity mismatches and poor risk-control follow-up.",
      errors: [
        "Metformin 30 tablets at twice-daily dosing covers only 15 days, but follow-up is 30 days.",
        "Enalapril 30 tablets at twice-daily dosing covers only 15 days.",
        "Aspirin 15 tablets at once-daily dosing covers only 15 days.",
        "HbA1c, LDL-C, and BP remain above goal, so the plan should include follow-up or therapy review rather than automatic refill only."
      ],
      safer: [
        "Correct quantities: at least 60 tablets for twice-daily 30-day medicines and 30 tablets for once-daily medicines.",
        "Clarify whether a shorter supply was intentional.",
        "Notify prescriber about diabetes, lipid, and BP control."
      ],
      keywords: ["quantity", "30 days", "15 days", "metformin", "enalapril", "aspirin", "bid", "refill", "hba1c", "ldl", "bp"]
    }
  }
];

let currentIndex = 0;

const formatMeta = {
  "TE-0001": {
    vn: "2568",
    coverage: "Teaching simulation",
    height: "170 cm",
    weighedDate: "06/07/2026",
    time: "09.00 น.",
    previousDate: "01/07/2026",
    previousMeds: [
      ["1", "Warfarin 5 mg tab", "7", "Take 1 tablet orally once daily at bedtime", "□ Consult"],
      ["2", "Paracetamol 500 mg tab", "20", "Take 1 tablet orally every 6 hours when pain occurs", "□ Consult"]
    ]
  },
  "TE-0002": {
    vn: "2568",
    coverage: "Teaching simulation",
    height: "154 cm",
    weighedDate: "06/07/2026",
    time: "10.15 น.",
    previousDate: "22/06/2026",
    previousMeds: [
      ["1", "Losartan 50 mg tab", "14", "Take 1 tablet orally once daily", "□ Consult"],
      ["2", "Furosemide 40 mg tab", "14", "Take 1 tablet orally every morning", "□ Consult"]
    ]
  },
  "TE-0003": {
    vn: "2568",
    coverage: "Teaching simulation",
    height: "172 cm",
    weighedDate: "06/07/2026",
    time: "11.20 น.",
    previousDate: "Discharge",
    previousMeds: [
      ["1", "Aspirin 81 mg tab", "30", "Take 1 tablet orally once daily after meals", "□ Consult"],
      ["2", "Clopidogrel 75 mg tab", "30", "Take 1 tablet orally once daily", "□ Consult"]
    ]
  },
  "TE-0004": {
    vn: "2568",
    coverage: "Teaching simulation",
    height: "160 cm",
    weighedDate: "06/07/2026",
    time: "13.00 น.",
    previousDate: "New case",
    previousMeds: [
      ["1", "Antacid suspension", "1 bottle", "Take 15 mL orally when dyspepsia occurs", "□ Consult"]
    ]
  },
  "TE-0005": {
    vn: "2568",
    coverage: "Teaching simulation",
    height: "128 cm",
    weighedDate: "06/07/2026",
    time: "14.30 น.",
    previousDate: "New case",
    previousMeds: [
      ["1", "ORS sachet", "5", "Mix with water as labeled and sip when diarrhea occurs", "□ Consult"]
    ]
  },
  "TE-0006": {
    vn: "2570-0006",
    coverage: "Teaching simulation",
    height: "168 cm",
    weighedDate: "10/07/2026",
    time: "09.35 น.",
    previousDate: "New case",
    previousMeds: [
      ["1", "Paracetamol 500 mg tab", "20", "Take 1 tablet orally every 6 hours when fever occurs", "□ Consult"],
      ["2", "Salbutamol inhaler", "1", "Inhale 1-2 puffs when wheezing occurs", "□ Consult"]
    ]
  },
  "TE-0007": {
    vn: "2570-0007",
    coverage: "Teaching simulation",
    height: "162 cm",
    weighedDate: "10/07/2026",
    time: "10.05 น.",
    previousDate: "Antenatal visit",
    previousMeds: [
      ["1", "Folic acid 5 mg tab", "30", "Take 1 tablet orally once daily", "□ Consult"],
      ["2", "Prenatal multivitamin", "30", "Take 1 tablet orally once daily", "□ Consult"]
    ]
  },
  "TE-0008": {
    vn: "2570-0008",
    coverage: "Teaching simulation",
    height: "165 cm",
    weighedDate: "10/07/2026",
    time: "11.20 น.",
    previousDate: "01/07/2026",
    previousMeds: [
      ["1", "Metformin 1000 mg tab", "60", "Take 1 tablet orally twice daily", "□ Consult"],
      ["2", "Insulin NPH", "1 vial", "Inject as directed", "□ Consult"]
    ]
  },
  "TE-0009": {
    vn: "2570-0009",
    coverage: "Teaching simulation",
    height: "138 cm",
    weighedDate: "10/07/2026",
    time: "13.00 น.",
    previousDate: "Protocol visit",
    previousMeds: [
      ["1", "Methotrexate intrathecal", "per protocol", "Give only by trained chemotherapy team", "□ Consult"],
      ["2", "Ondansetron 4 mg tab", "10", "Take 1 tablet orally every 8 hours when nausea occurs", "□ Consult"]
    ]
  },
  "TE-0010": {
    vn: "2570-0010",
    coverage: "Teaching simulation",
    height: "158 cm",
    weighedDate: "10/07/2026",
    time: "14.25 น.",
    previousDate: "12/06/2026",
    previousMeds: [
      ["1", "Tamoxifen 20 mg tab", "30", "Take 1 tablet orally once daily after breakfast", "Started 3 months ago"],
      ["2", "Paracetamol 500 mg tab", "20", "Take 1 tablet orally every 6 hours when pain occurs", "Pain not controlled"],
      ["3", "Metoclopramide 10 mg tab", "15", "Take when nausea occurs", "□ Consult"]
    ]
  },
  "TE-0011": {
    vn: "2570-0011",
    coverage: "Teaching simulation",
    height: "171 cm",
    weighedDate: "10/07/2026",
    time: "15.10 น.",
    previousDate: "10/06/2026",
    previousMeds: [
      ["1", "Metformin 500 mg tab", "60", "Take 1 tablet orally twice daily after breakfast and dinner", "30-day supply"],
      ["2", "Enalapril 5 mg tab", "60", "Take 1 tablet orally twice daily after breakfast and dinner", "30-day supply"],
      ["3", "Atorvastatin 40 mg tab", "30", "Take 1 tablet orally once daily at bedtime", "□ Consult"],
      ["4", "Aspirin EC 81 mg tab", "30", "Take 1 tablet orally once daily after breakfast", "□ Consult"]
    ]
  }
};

const generateBtn = document.querySelector("#generateBtn");
const resetBtn = document.querySelector("#resetBtn");
const printBtn = document.querySelector("#printBtn");
const caseStrip = document.querySelector("#caseStrip");
const studentAnswer = document.querySelector("#studentAnswer");
const checkBtn = document.querySelector("#checkBtn");
const showBtn = document.querySelector("#showBtn");
const hideAnswerBtn = document.querySelector("#hideAnswerBtn");
const answerPanel = document.querySelector("#answerPanel");
const answerContent = document.querySelector("#answerContent");
const patientGrid = document.querySelector("#patientGrid");
const diagnosisText = document.querySelector("#diagnosisText");
const labCells = document.querySelector("#labCells");
const doctorLine = document.querySelector("#doctorLine");
const medRows = document.querySelector("#medRows");
const previousRows = document.querySelector("#previousRows");
const formCaseTitle = document.querySelector("#formCaseTitle");
const scoreBadge = document.querySelector("#scoreBadge");
const scoreText = document.querySelector("#scoreText");
const feedbackList = document.querySelector("#feedbackList");
const pharmacistNote = document.querySelector("#pharmacistNote");

function makeField(label, value) {
  return `<div class="patient-field"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderCase(index) {
  currentIndex = index;
  const selectedCase = cases[index];
  const p = selectedCase.patient;
  const meta = formatMeta[selectedCase.id];
  const [sex, age] = p.sexAge.split(" / ");

  formCaseTitle.textContent = `ใบสั่งยาที่ ${index + 1}`;
  patientGrid.innerHTML = [
    makeField("HN", selectedCase.id),
    makeField("VN", meta.vn),
    makeField("ชื่อ", p.name),
    makeField("เพศ / อายุ", `${sex || "-"} / ${age || "-"}`),
    makeField("สิทธิการรักษา", meta.coverage),
    makeField("วันที่ / Time", `${p.date} / ${meta.time}`),
    makeField("แพ้ยา [ALG]", p.allergy),
    makeField("น้ำหนัก / ส่วนสูง", `${p.weight} / ${meta.height}`),
    makeField("วันที่ชั่งล่าสุด", meta.weighedDate),
    makeField("Category", selectedCase.category)
  ].join("");

  diagnosisText.textContent = p.diagnosis;
  labCells.innerHTML = selectedCase.labs.split(",").map((lab) => {
    return `<div class="lab-cell">${lab.trim()}</div>`;
  }).join("");
  doctorLine.textContent = `แพทย์ ${p.prescriber}     นัดติดตาม ${p.followUp}     Clinic Teaching OPD     จำนวนวันถึงนัด ${p.days}`;
  medRows.innerHTML = selectedCase.meds.map((med) => {
    return `<tr><td>${med[0]}</td><td>${med[1]}</td><td>${med[2]}</td><td>${med[3]}</td><td>□ Consult</td></tr>`;
  }).join("");
  previousRows.innerHTML = meta.previousMeds.map((med) => {
    return `<tr><td>${med[0]}</td><td>${med[1]}</td><td>${med[2]}</td><td>${med[3]}</td><td>${med[4]}</td></tr>`;
  }).join("");

  pharmacistNote.textContent = "Pending review";
  answerPanel.hidden = true;
  updateCaseButtons();
  resetFeedback("Ready", "Student can review this prescription now.");
}

function updateCaseButtons() {
  caseStrip.innerHTML = cases.map((item, index) => {
    const active = index === currentIndex ? " active" : "";
    return `<button class="case-pill${active}" type="button" data-index="${index}" aria-label="Open case ${index + 1}">Case ${index + 1}</button>`;
  }).join("");
}

function resetFeedback(label = "Ready", message = "Generate a prescription to begin.") {
  scoreBadge.textContent = label;
  scoreText.textContent = message;
  feedbackList.innerHTML = "";
}

function checkAnswer() {
  const selectedCase = cases[currentIndex];
  const text = studentAnswer.value.toLowerCase();
  const hits = selectedCase.answer.keywords.filter((keyword) => text.includes(keyword.toLowerCase()));
  const uniqueHits = [...new Set(hits)];
  const score = Math.min(100, Math.round((uniqueHits.length / 6) * 100));

  if (!text.trim()) {
    resetFeedback("Empty", "Ask the student to write an answer before checking.");
    return;
  }

  scoreBadge.textContent = `${score}%`;
  if (score >= 70) {
    scoreText.textContent = "Strong answer. The student found several important safety clues.";
  } else if (score > 0) {
    scoreText.textContent = "Partial answer. Ask the student to name the exact drug, lab, or quantity problem.";
  } else {
    scoreText.textContent = "Needs review. Prompt the student to inspect allergies, labs, quantities, and interactions.";
  }

  const foundMarkup = uniqueHits.length
    ? `<li>Detected concepts: ${uniqueHits.join(", ")}.</li>`
    : "<li>No expected keywords detected yet.</li>";
  feedbackList.innerHTML = [
    foundMarkup,
    "<li>This is a teaching aid, so the instructor should still judge clinical reasoning manually.</li>"
  ].join("");
}

function showAnswer() {
  const selectedCase = cases[currentIndex];
  const answer = selectedCase.answer;
  answerContent.innerHTML = `
    <p><strong>${answer.summary}</strong></p>
    <h3>Likely medical errors</h3>
    <ul>${answer.errors.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>Safer correction</h3>
    <ul>${answer.safer.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>Teaching tags</h3>
    <div>${answer.keywords.slice(0, 8).map((item) => `<span class="tag">${item}</span>`).join("")}</div>
  `;
  answerPanel.hidden = false;
  pharmacistNote.textContent = "Teaching answer revealed";
}

function resetStudentWork() {
  studentAnswer.value = "";
  answerPanel.hidden = true;
  pharmacistNote.textContent = "Pending review";
  resetFeedback("Reset", "Student answer cleared.");
}

function generateRandomCase() {
  const next = Math.floor(Math.random() * cases.length);
  renderCase(next);
  studentAnswer.value = "";
}

generateBtn.addEventListener("click", generateRandomCase);
resetBtn.addEventListener("click", resetStudentWork);
printBtn.addEventListener("click", () => window.print());
checkBtn.addEventListener("click", checkAnswer);
showBtn.addEventListener("click", showAnswer);
hideAnswerBtn.addEventListener("click", () => {
  answerPanel.hidden = true;
});
caseStrip.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  renderCase(Number(button.dataset.index));
  studentAnswer.value = "";
});

renderCase(0);
