export interface ITemarioContent {
  _id: string;
  title: string;
  description: string | null;
  urlVideo: string | null;
  view: number;
}

export interface ITemario {
  _id: string;
  title: string;
  description: string | null;
  view: number;
  content: ITemarioContent[];
}

export interface IExamen {
  _id: string;
  title: string;
  description: string | null;
  extra: string | null;
  inputType: string;
  placeholder: string | null;
  require: boolean;
  values: string[] | null;
}

export interface IExamenFinalizado {
  msg: string | null;
  average: number;
  approved: boolean;
}

