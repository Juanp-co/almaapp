export interface IEscuela {
  _id: string;
  speaker: string;
  speakerPosition: string | null;
  title: string;
  slug: string;
  description: string | null;
  level: number;
  enable: boolean;
}
