import { PortableTextBlock } from "sanity"

export type IPage = {
    _id:string,
    _createdAt:Date,
    title:string,
    slug:string,
    content:PortableTextBlock[];
}