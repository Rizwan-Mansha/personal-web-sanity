import { Image, PortableTextBlock } from "sanity";

export interface IProject {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: Image;
  alt:string,
  url: string;
  content: PortableTextBlock[];
}
