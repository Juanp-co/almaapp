import { IComments, ILikesAndUnlikes } from '../../../services/global.models';

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
  comments: IComments[];
  likes: ILikesAndUnlikes[];
  unlikes: ILikesAndUnlikes[];
}
