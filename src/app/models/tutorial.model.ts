export class FormUi {
    id?: number;
    patientFname?: string;
    patientLname?: string;
    weight?: string;
    height?: string;
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
    summary1: string;
    summary2: string;
    summary3: string;
  }