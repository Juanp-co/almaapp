export interface IExamenFinalizado {
  msg: string | null;
  average: number;
  approved: boolean;
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
