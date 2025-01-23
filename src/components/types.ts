export interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  likes: number;
  user: { first_name: string; last_name: string };
}
