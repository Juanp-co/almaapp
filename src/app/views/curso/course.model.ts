import { IComments, ILikesAndUnlikes } from '../../services/global.models';

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

export interface ICursoData {
  _id: string;
  slug: string;
  code: string;
  title: string;
  description: string | null;
  banner: string | null;
  levels: ICursoLevels[];
  speaker: string;
  speakerPosition: number | null;
  temary: ICursoTemary[];
  comments: IComments[];
  likes: ILikesAndUnlikes[];
  unlikes: ILikesAndUnlikes[];
}

// export interface ICursoUserData {
//   approved: boolean;
//   created_at: string;
//   temary: string | null;
//   updated_at: string | null;
//   _id: string;
// }

// export interface ICurso {
//   course: ICursoData;
//   dataCourseUser: ICursoUserData | null;
// }
