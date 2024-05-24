export interface AllCarData {
  id: number;
  price: string;
  photo: string;
  name: string;
  km: string;
  brand: string;
  model: string;
  plate: string;
  ubication: string;
  viewCount: number;
}

export interface Comment {
  id?: number;
  content: string;
  date: string;
  username: string;
  like: number;
  dislike: number;
  carId: number;
}
