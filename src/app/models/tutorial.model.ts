export class FormUi {
    id?: number;
    patientFname?: string;
    patientLname?: string;
    weight?: string;
    height?: string;
    medDrug1?: string;
    medDosage1?: string;
    medMorning1?: boolean;
    medNoon1?: boolean;
    medEvening1?: boolean;
    medNight1?: boolean;
    medDrug2?: string;
    medDosage2?: string;
    medMorning2?: boolean;
    medNoon2?: boolean;
    medEvening2?: boolean;
    medNight2?: boolean;
    medDrug3?: string;
    medDosage3?: string;
    medMorning3?: boolean;
    medNoon3?: boolean;
    medEvening3?: boolean;
    medNight3?: boolean;
    liveAloneNo?: boolean;
    liveAloneYes?: boolean;
    liveAloneLift?: boolean;
    liveAloneFloor?: string;
    obliationsNo?: boolean;
    obliationsYes?: boolean;
    relativeSurname1?: string;
    relativeFname1?: string;
    relativePhone1?: string;
    relativeRel1?: string;
    relativeSurname2?: string;
    relativeFname2?: string;
    relativePhone2?: string;
    relativeRel2?: string;
    relativeSurname3?: string;
    relativeFname3?: string;
    relativePhone3?: string;
    relativeRel3?: string;
    careNo?: boolean;
    careYes?: boolean;
    careDegree1?: boolean;
    careDegree2?: boolean;
    careDegree3?: boolean;
    careDegree4?: boolean;
    careDegree5?: boolean;
    hospitalizedNo?: boolean;
    hospitalizedYes?: boolean;
    hospAbroadPlace?: string;
    hospAbroadTime?: string;
    commNoImpairment?: boolean;
    commForeignLang?: boolean;
    commForeignLangYes?: boolean;
    commForeignLangNo?: boolean;
    commSignLang?: boolean;
    commDisorder?: boolean;
    commTrach?: boolean;
    visionLeft?: boolean;
    visionRight?: boolean;
    blindnessLeft?: boolean;
    blindnessRight?: boolean;
    visualAidLeft?: boolean;
    visualAidRight?: boolean;
    hearingNoImp?: boolean;
    hearingAidRight?: boolean;
    hearingAidLeft?: boolean;
    hearingHardRight?: boolean;
    hearingHardLeft?: boolean;
    deafnessRight?: boolean;
    deafnessLeft?: boolean;
    disorNoImp?: boolean;
    disorTime?: boolean;
    disorPlace?: boolean;
    disorPerson?: boolean;
    understNoImp?: boolean;
    understConfusion?: boolean;
    understNerv?: boolean;
    understAltered?: boolean;
    disabilityNo?: boolean;
    disabilityYes?: boolean;
    disabilityHemiYes?: boolean;
    disabilityHemi?: string;
    disabilityAmputYes?: boolean;
    disabilityAmput?: string;
    disabilityParaYes?: boolean;
    disabilityPara?: string;
    disabilityTetraYes?: boolean;
    disabilityTetra?: string;
    disabilityLimbsYes?: boolean;
    disabilityLimbs?: string;
    disabilityMisalYes?: boolean;
    disabilityMisal?: string;
    disabilityProYes?: boolean;
    disabilityProNo?: boolean;
    sleepNoImp?: boolean;
    sleepDiff?: boolean;
    sleepBreath?: boolean;
    dietWhole?: boolean;
    dietNoSugar?: boolean;
    dietVeg?: boolean;
    dietDiabetic?: boolean;
    ingestOral?: boolean;
    ingestFeed?: boolean;
    ingestParent?: boolean;
    excNoImp?: boolean;
    excIncont?: boolean;
    excIncrease?: boolean;
    excBladder?: boolean;
    bowelNoImp?: boolean;
    bowelIncon?: boolean;
    bowelDiarr?: boolean;
    bowelCons?: boolean;
    bowelPraetor?: boolean;
    bowelLax?: boolean;
    bowelAids?: boolean;
    painNo?: boolean;
    painYes?: boolean;
    painPart1?: string;
    painSide1?: string;
    painState1?: string;
    painRest1?: string;
    painExc1?: string;
    painFreq1?: string;
    painType1?: string;
    painPart2?: string;
    painSide2?: string;
    painState2?: string;
    painRest2?: string;
    painExc2?: string;
    painFreq2?: string;
    painType2?: string;
    painPart3?: string;
    painSide3?: string;
    painState3?: string;
    painRest3?: string;
    painExc3?: string;
    painFreq3?: string;
    painType3?: string;
    substNo?: boolean;
    substYes?: boolean;
    substSmoker?: boolean;
    substSmokerNr?: string;
    substFormer?: boolean;
    substAlcohol?: boolean;
    substAlcoholReg?: boolean;
    substAlcoholOcc?: boolean;
    substNarc?: boolean;
    ulcersNo?: boolean;
    ulcersYes?: boolean;
    ulcersWoundNo?: boolean;
    ulcersWoundYes?: boolean;
    skinNoFind?: boolean;
    skinWithFind?: boolean;
    skinDry?: boolean;
    skinMoist?: boolean;
    skinDerm?: boolean;
    skinParch?: boolean;
    skinHema?: boolean;
    careDressSelf?: boolean;
    careDressSupp?: boolean;
    careFoodSelf?: boolean;
    careFoodSupp?: boolean;
    careExcSelf?: boolean;
    careExcSup?: boolean;
    careWalkSelf?: boolean;
    careWalkSupp?: boolean;
    objNo?: boolean;
    objYes?: boolean;
    objCompress?: boolean;
    objDevice?: boolean;
    objOrtho?: boolean;
    objPros?: boolean;
    objOthers?: string;
    skinIntact?: boolean;
    skinNotInt?: boolean;
    skinNotAsc?: boolean;
    inletsNo?: boolean;
    inletsYes?: boolean;
    inletsPortYes?: boolean;
    inletsPortNo?: boolean;
    inletsProbesYes?: boolean;
    inletsProbesNo?: boolean;
    inletsUrineYes?: boolean;
    inletsUrineNo?: boolean;
    stomataYes?: boolean;
    stomataNo?: boolean;
    fallNo?: boolean;
    fallYes?: boolean;
    fall1x?: boolean;
    fall2x?: boolean;
    fall3x?: boolean;
    fallMore?: boolean;
    drugsNo?: boolean;
    drugsYes?: boolean;
    diagnoseSync?: boolean;
    diagnoseEpil?: boolean;
    diagnoseHunt?: boolean;
    diagnoseDiab?: boolean;
    diagnoseNo?: boolean;
    allergyNo?: boolean;
    allergyYes?: boolean;
    allergyKnown1?: string;
    allergyKnown2?: string;
    allergyKnown3?: string;
    valuablesYes?: boolean;
    valuablesNo?: boolean;
    valuablesRel?: boolean;
    valuablesWard?: boolean;
    informYes?: boolean;
    informNo?: boolean;
  }

  export class FormSummaryDto {
    id?: any;
    content?: string;
    admissionFormFk?: number;
  }

  export class FormSummary {
    id?: any;
    content?: string;
    admissionFormFk?: FormUi;
  }

  export interface SuggestionType {
    summary: string;
  }

  export class TranslateType {
    language?: string;
    summary1?: string;
    summary2?: string;
    summary3?: string;
  }