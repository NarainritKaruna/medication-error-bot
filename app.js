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
    labs: "INR 1.2, Hb 11.2 g/dL, Platelets 180,000/µL, AST/ALT 32/28 U/L",
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
    labs: "Hb 12.4 g/dL, Platelets 250,000/µL, Scr 1.0 mg/dL, ALT 35 U/L",
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
    labs: "WBC 15,200/µL, CRP 58 mg/L, Scr 0.4 mg/dL, stool WBC/RBC positive",
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
    labs: "Scr 4.2 mg/dL, eGFR 12 mL/min/1.73 m2, K 5.0 mmol/L, WBC 17,000/µL",
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
    labs: "ANC 800/µL, Platelets 45,000/µL, Hb 9.2 g/dL, AST/ALT 48/52 U/L",
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

const caseReferences = {
  "TE-0001": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: warfarin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=warfarin"],
    ["DailyMed official label search: amiodarone", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amiodarone"],
    ["DailyMed official label search: ibuprofen", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ibuprofen"]
  ],
  "TE-0002": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: losartan", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=losartan"],
    ["DailyMed official label search: spironolactone", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=spironolactone"],
    ["DailyMed official label search: potassium chloride", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=potassium%20chloride"]
  ],
  "TE-0003": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: clopidogrel", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=clopidogrel"],
    ["DailyMed official label search: omeprazole", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazole"],
    ["DailyMed official label search: diclofenac", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=diclofenac"]
  ],
  "TE-0004": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: amoxicillin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amoxicillin"],
    ["DailyMed official label search: clarithromycin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=clarithromycin"],
    ["DailyMed official label search: omeprazole", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazole"]
  ],
  "TE-0005": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: loperamide", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=loperamide"],
    ["DailyMed official label search: ciprofloxacin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ciprofloxacin"],
    ["CDC: diarrhea treatment and dehydration", "https://www.cdc.gov/healthywater/hygiene/disease/diarrhea.html"]
  ],
  "TE-0006": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: azithromycin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=azithromycin"],
    ["DailyMed official label search: levofloxacin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=levofloxacin"],
    ["EMA: domperidone safety restrictions", "https://www.ema.europa.eu/en/medicines/human/referrals/domperidone-containing-medicines"]
  ],
  "TE-0007": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["ACOG: urinary tract infections in pregnant individuals", "https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals"],
    ["DailyMed official label search: ciprofloxacin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ciprofloxacin"],
    ["DailyMed official label search: trimethoprim sulfamethoxazole", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trimethoprim%20sulfamethoxazole"]
  ],
  "TE-0008": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: vancomycin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=vancomycin"],
    ["DailyMed official label search: gentamicin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=gentamicin"],
    ["FDA: metformin kidney function warning update", "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-revises-warnings-regarding-use-diabetes-medicine-metformin"]
  ],
  "TE-0009": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: vincristine", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=vincristine"],
    ["DailyMed official label search: methotrexate", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methotrexate"],
    ["ISMP: vinca alkaloid safety", "https://www.ismp.org/"]
  ],
  "TE-0010": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: tamoxifen", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tamoxifen"],
    ["DailyMed official label search: fluoxetine", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=fluoxetine"],
    ["DailyMed official label search: tramadol", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tramadol"],
    ["DailyMed official label search: ondansetron", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ondansetron"]
  ],
  "TE-0011": [
    ["Medscape Drug Interaction Checker", "https://reference.medscape.com/drug-interactionchecker"],
    ["MIMS drug reference", "https://www.mims.com/"],
    ["DailyMed official label search: metformin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metformin"],
    ["DailyMed official label search: enalapril", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=enalapril"],
    ["DailyMed official label search: atorvastatin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=atorvastatin"],
    ["DailyMed official label search: aspirin", "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=aspirin"]
  ]
};

const generateBtn = document.querySelector("#generateBtn");
const deleteCaseBtn = document.querySelector("#deleteCaseBtn");
const caseUploadInput = document.querySelector("#caseUploadInput");
const backupImportInput = document.querySelector("#backupImportInput");
const exportBackupBtn = document.querySelector("#exportBackupBtn");
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

const builtinCaseIds = new Set(cases.map((item) => item.id));
const customCaseIds = new Set();
const deletedBuiltinCaseIds = new Set();
const CUSTOM_CASES_KEY = "medical-error-bot-custom-cases";
const DELETED_CASES_KEY = "medical-error-bot-deleted-builtin-cases";

function makeField(label, value) {
  return `<div class="patient-field"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char];
  });
}

function safeUrl(value) {
  const url = String(value ?? "");
  if (url.startsWith("https://") || url.startsWith("http://")) return url;
  return "#";
}

function renderCase(index) {
  if (!cases.length) {
    resetFeedback("Empty", "No cases available. Upload a case template to continue.");
    return;
  }
  currentIndex = index;
  const selectedCase = cases[index];
  const p = selectedCase.patient;
  const meta = formatMeta[selectedCase.id] || buildDefaultMeta(selectedCase);
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
  labCells.innerHTML = selectedCase.labs.split(/,\s+/).map((lab) => {
    return `<div class="lab-cell">${escapeHtml(lab.trim())}</div>`;
  }).join("");
  doctorLine.textContent = `แพทย์ ${p.prescriber}     นัดติดตาม ${p.followUp}     Clinic Teaching OPD     จำนวนวันถึงนัด ${p.days}`;
  medRows.innerHTML = selectedCase.meds.map((med) => {
    return `<tr><td>${escapeHtml(med[0])}</td><td>${escapeHtml(med[1])}</td><td>${escapeHtml(med[2])}</td><td>${escapeHtml(med[3])}</td><td>□ Consult</td></tr>`;
  }).join("");
  previousRows.innerHTML = meta.previousMeds.map((med) => {
    return `<tr><td>${escapeHtml(med[0])}</td><td>${escapeHtml(med[1])}</td><td>${escapeHtml(med[2])}</td><td>${escapeHtml(med[3])}</td><td>${escapeHtml(med[4])}</td></tr>`;
  }).join("");

  pharmacistNote.textContent = "Pending review";
  answerPanel.hidden = true;
  updateCaseButtons();
  resetFeedback("Ready", "Student can review this prescription now.");
}

function updateCaseButtons() {
  caseStrip.innerHTML = cases.map((item, index) => {
    const active = index === currentIndex ? " active" : "";
    const caseType = customCaseIds.has(item.id) ? "uploaded-case" : "standard-case";
    const caseLabel = customCaseIds.has(item.id) ? "uploaded" : "standard";
    return `<button class="case-pill ${caseType}${active}" type="button" data-index="${index}" aria-label="Open ${caseLabel} case ${index + 1}">Case ${index + 1}</button>`;
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
  const refs = selectedCase.references || caseReferences[selectedCase.id] || [];
  answerContent.innerHTML = `
    <p><strong>${escapeHtml(answer.summary)}</strong></p>
    <h3>Likely medical errors</h3>
    <ul>${answer.errors.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <h3>Safer correction</h3>
    <ul>${answer.safer.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <h3>Teaching tags</h3>
    <div>${answer.keywords.slice(0, 8).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>
    <h3>Drug interaction / official references</h3>
    <div class="reference-list">${refs.map((item) => `<a href="${safeUrl(item[1])}" target="_blank" rel="noopener noreferrer">${escapeHtml(item[0])}</a>`).join("")}</div>
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

function buildDefaultMeta(selectedCase) {
  return {
    vn: "New",
    coverage: "Teaching simulation",
    height: "-",
    weighedDate: selectedCase.patient?.date || "-",
    time: "-",
    previousDate: "New case",
    previousMeds: [["1", "No previous medication documented", "-", "-", "□ Consult"]]
  };
}

function validateCasePack(pack) {
  const nextCase = pack.case || pack;
  const required = [nextCase.id, nextCase.category, nextCase.patient, nextCase.labs, nextCase.meds, nextCase.answer];
  if (required.some((item) => !item)) {
    throw new Error("Template must include case.id, category, patient, labs, meds, and answer.");
  }
  if (!Array.isArray(nextCase.meds) || !Array.isArray(nextCase.answer.errors) || !Array.isArray(nextCase.answer.safer)) {
    throw new Error("meds, answer.errors, and answer.safer must be arrays.");
  }
  if (!Array.isArray(nextCase.answer.keywords)) nextCase.answer.keywords = [];
  if (pack.references && !Array.isArray(pack.references)) {
    throw new Error("references must be an array of [label, url] pairs.");
  }
  nextCase.references = pack.references || nextCase.references || [];
  return {
    case: nextCase,
    formatMeta: pack.formatMeta || pack.meta || buildDefaultMeta(nextCase)
  };
}

function addCasePack(pack, persist = true) {
  const parsed = validateCasePack(pack);
  const existingIndex = cases.findIndex((item) => item.id === parsed.case.id);
  if (existingIndex >= 0 && persist && !window.confirm(`Case ${parsed.case.id} already exists. Replace it?`)) return false;
  if (existingIndex >= 0) cases.splice(existingIndex, 1, parsed.case);
  else cases.push(parsed.case);
  formatMeta[parsed.case.id] = parsed.formatMeta;
  customCaseIds.add(parsed.case.id);
  deletedBuiltinCaseIds.delete(parsed.case.id);
  if (persist) saveCaseState();
  updateCaseButtons();
  renderCase(cases.findIndex((item) => item.id === parsed.case.id));
  return true;
}

function getCustomCasePacks() {
  return cases
    .filter((item) => customCaseIds.has(item.id))
    .map((item) => ({
      schemaVersion: 1,
      case: item,
      formatMeta: formatMeta[item.id] || buildDefaultMeta(item),
      references: item.references || []
    }));
}

function saveCaseState() {
  const customPacks = getCustomCasePacks();
  localStorage.setItem(CUSTOM_CASES_KEY, JSON.stringify(customPacks));
  localStorage.setItem(DELETED_CASES_KEY, JSON.stringify([...deletedBuiltinCaseIds]));
}

function loadCaseState() {
  try {
    const deletedIds = JSON.parse(localStorage.getItem(DELETED_CASES_KEY) || "[]");
    deletedIds.forEach((id) => {
      deletedBuiltinCaseIds.add(id);
      const index = cases.findIndex((item) => item.id === id);
      if (index >= 0) cases.splice(index, 1);
    });
    const customPacks = JSON.parse(localStorage.getItem(CUSTOM_CASES_KEY) || "[]");
    customPacks.forEach((pack) => addCasePack(pack, false));
  } catch (error) {
    console.warn("Could not load saved cases", error);
  }
}

function deleteCurrentCase() {
  if (cases.length <= 1) {
    window.alert("At least one case must remain. Upload another case before deleting this one.");
    return;
  }
  const selectedCase = cases[currentIndex];
  if (!window.confirm(`Delete ${selectedCase.id} from this browser?`)) return;
  if (builtinCaseIds.has(selectedCase.id)) deletedBuiltinCaseIds.add(selectedCase.id);
  customCaseIds.delete(selectedCase.id);
  cases.splice(currentIndex, 1);
  saveCaseState();
  renderCase(Math.min(currentIndex, cases.length - 1));
}

function handleCaseUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (file.name.toLowerCase().endsWith(".xlsx")) {
    handleWorkbookUpload(file);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const pack = JSON.parse(reader.result);
      addCasePack(pack, true);
      resetFeedback("Uploaded", `${file.name} was added to this browser.`);
    } catch (error) {
      window.alert(`Could not upload case: ${error.message}`);
    } finally {
      caseUploadInput.value = "";
    }
  };
  reader.readAsText(file);
}

function downloadJsonFile(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportCaseBackup() {
  const customCases = getCustomCasePacks();
  const deletedIds = [...deletedBuiltinCaseIds];
  const payload = {
    schemaVersion: 1,
    app: "medication-error-teaching-bot",
    exportedAt: new Date().toISOString(),
    customCases,
    deletedBuiltinCaseIds: deletedIds
  };
  const dateStamp = new Date().toISOString().slice(0, 10);
  downloadJsonFile(`medical-error-bot-backup-${dateStamp}.json`, payload);
  resetFeedback("Exported", `Backup downloaded with ${customCases.length} uploaded case(s).`);
}

function packsFromBackupPayload(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") {
    throw new Error("Backup file must contain a JSON object or array.");
  }
  if (Array.isArray(payload.customCases)) return payload.customCases;
  if (Array.isArray(payload.cases)) return payload.cases;
  if (payload.case) return [payload];
  throw new Error("Backup file must contain customCases, cases, or one case pack.");
}

function applyBackupPayload(payload) {
  const packs = packsFromBackupPayload(payload);
  const deletedIds = Array.isArray(payload.deletedBuiltinCaseIds) ? payload.deletedBuiltinCaseIds : [];
  if (!packs.length && !deletedIds.length) {
    throw new Error("Backup has no cases to import.");
  }
  const confirmed = window.confirm(`Import ${packs.length} uploaded case(s) from backup? Existing matching case IDs will be replaced.`);
  if (!confirmed) return;

  deletedIds.forEach((id) => {
    deletedBuiltinCaseIds.add(id);
    const index = cases.findIndex((item) => item.id === id);
    if (index >= 0) cases.splice(index, 1);
  });
  packs.forEach((pack) => addCasePack(pack, false));
  saveCaseState();
  renderCase(Math.max(0, cases.length - 1));
  resetFeedback("Imported", `${packs.length} backup case(s) restored to this browser.`);
}

function handleBackupImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      applyBackupPayload(JSON.parse(reader.result));
    } catch (error) {
      window.alert(`Could not import backup: ${error.message}`);
    } finally {
      backupImportInput.value = "";
    }
  };
  reader.readAsText(file);
}

function readWorkbookRows(workbook, sheetName) {
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) throw new Error(`Missing sheet: ${sheetName}`);
  return XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
}

function keyValueFromRows(rows) {
  const values = {};
  rows.forEach((row) => {
    const key = String(row[0] ?? "").trim();
    if (!key || key.includes("fields")) return;
    values[key] = String(row[1] ?? "").trim();
  });
  return values;
}

function tableFromRows(rows, requiredFirstHeader) {
  const headerIndex = rows.findIndex((row) => String(row[0] ?? "").trim() === requiredFirstHeader);
  if (headerIndex < 0) throw new Error(`Could not find ${requiredFirstHeader} header row.`);
  return rows.slice(headerIndex + 1).filter((row) => row.some((cell) => String(cell ?? "").trim()));
}

function packFromWorkbook(workbook) {
  const caseFields = keyValueFromRows(readWorkbookRows(workbook, "Case"));
  const medRows = tableFromRows(readWorkbookRows(workbook, "Medications"), "No");
  const previousRows = tableFromRows(readWorkbookRows(workbook, "Previous Meds"), "No");
  const answerRows = tableFromRows(readWorkbookRows(workbook, "Answer"), "Type");
  const referenceRows = tableFromRows(readWorkbookRows(workbook, "References"), "Label");

  const errors = [];
  const safer = [];
  let summary = "";
  let keywords = [];
  answerRows.forEach((row) => {
    const type = String(row[0] ?? "").trim().toLowerCase();
    const text = String(row[1] ?? "").trim();
    if (!text) return;
    if (type === "summary") summary = text;
    if (type === "error") errors.push(text);
    if (type === "safer") safer.push(text);
    if (type === "keywords") keywords = text.split(",").map((item) => item.trim()).filter(Boolean);
  });

  return {
    schemaVersion: 1,
    case: {
      id: caseFields.id,
      category: caseFields.category,
      patient: {
        date: caseFields.date,
        name: caseFields.name,
        sexAge: caseFields.sexAge,
        weight: caseFields.weight,
        allergy: caseFields.allergy,
        diagnosis: caseFields.diagnosis,
        prescriber: caseFields.prescriber,
        followUp: caseFields.followUp,
        days: caseFields.days
      },
      labs: caseFields.labs,
      meds: medRows.map((row) => [
        String(row[0] ?? "").trim(),
        String(row[1] ?? "").trim(),
        String(row[2] ?? "").trim(),
        String(row[3] ?? "").trim()
      ]),
      answer: { summary, errors, safer, keywords }
    },
    formatMeta: {
      vn: caseFields.vn,
      coverage: caseFields.coverage,
      height: caseFields.height,
      weighedDate: caseFields.weighedDate,
      time: caseFields.time,
      previousDate: caseFields.previousDate,
      previousMeds: previousRows.map((row) => [
        String(row[0] ?? "").trim(),
        String(row[1] ?? "").trim(),
        String(row[2] ?? "").trim(),
        String(row[3] ?? "").trim(),
        String(row[4] ?? "").trim()
      ])
    },
    references: referenceRows.map((row) => [
      String(row[0] ?? "").trim(),
      String(row[1] ?? "").trim()
    ]).filter((row) => row[0] || row[1])
  };
}

function handleWorkbookUpload(file) {
  if (!window.XLSX) {
    window.alert("Excel upload library is still loading. Please refresh the page and try again.");
    caseUploadInput.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const workbook = XLSX.read(new Uint8Array(reader.result), { type: "array" });
      const pack = packFromWorkbook(workbook);
      addCasePack(pack, true);
      resetFeedback("Uploaded", `${file.name} was converted from Excel and added to this browser.`);
    } catch (error) {
      window.alert(`Could not upload Excel case: ${error.message}`);
    } finally {
      caseUploadInput.value = "";
    }
  };
  reader.readAsArrayBuffer(file);
}

generateBtn.addEventListener("click", generateRandomCase);
deleteCaseBtn.addEventListener("click", deleteCurrentCase);
caseUploadInput.addEventListener("change", handleCaseUpload);
backupImportInput.addEventListener("change", handleBackupImport);
exportBackupBtn.addEventListener("click", exportCaseBackup);
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

loadCaseState();
renderCase(0);
