export interface ICarouselCard {
  name: string;
  picture: string;
  flag: string;
  experience: string;
  skills: string[];
}

export interface ICarouselData {
  data: ICarouselCard[];
}
