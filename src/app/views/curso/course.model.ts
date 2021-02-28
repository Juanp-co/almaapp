export interface ICursoContent {
  _id: string;
  title: string | null;
}

export interface ICursoLevels {
  _id: string;
  title: string;
  slug: string;
}

export interface ICursoTemary {
  _id: string;
  title: string;
  description: string | null;
  content: ICursoContent[];
}

export interface ICursoTemarioExtended {
  _id: string;
  title: string;
  description: string | null;
  urlVideo: string | null;
  view: number;
}

export interface ICursoTemarioContent {
  _id: string;
  title: string;
  description: string | null;
  view: number;
  content: ICursoTemarioExtended[];
}

export interface ICursoData {
  _id: string;
  slug: string;
  code: string;
  title: string;
  description: string | null;
  banner: string | null;
  levels: ICursoLevels[];
  speaker: string;
  speakerPosition: string;
  temary: ICursoTemary[];
}

export interface ICursoExamen {
  _id: string;
  title: string;
  description: string | null;
  extra: string | null;
  inputType: string;
  placeholder: string | null;
  require: boolean;
  values: string[] | null;
}

export interface ICursoExamenFinalizado {
  msg: string | null;
  average: number;
  approved: boolean;
}
