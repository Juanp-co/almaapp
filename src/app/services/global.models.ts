export interface IUserSimpleInfo {
  _id: string;
  document: string;
  names: string;
  lastNames: string;
  gender: number | null;
}

export interface ILikesAndUnlikes {
  _id: string;
  user: IUserSimpleInfo;
  created_at: string | null;
}

export interface IComments {
  _id: string;
  user: IUserSimpleInfo;
  answer: string | null;
  comment: string | null;
  likes: ILikesAndUnlikes[];
  unlikes: ILikesAndUnlikes[];
  created_at: string | null;
  updated_at: string | null;
}
