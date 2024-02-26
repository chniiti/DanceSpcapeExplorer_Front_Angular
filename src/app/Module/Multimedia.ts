export enum FileType{
  VIDEO,
  IMAGE,
}

export class Multimedia{
  mulitimediaId!:number;
  uploadDate!:Date;
  fileType!:FileType;
}
