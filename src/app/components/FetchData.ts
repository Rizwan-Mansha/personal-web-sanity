import { client } from "../../../sanity/lib/client";
import { IProject } from "./types/TypeProject";
import { IPage } from "./types/Page";

const FetchData = async (): Promise<IProject[]> => {
  const res = await client.fetch(`*[_type == "project"]{
          _id,
          _createdAt,
          name,
          "slug":slug.current,
          image,
          alt,
          url,
          content
        }`);
  return res;
};

export default FetchData;

export const FetchDatas = async (slug: string): Promise<IProject> => {
  const res = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          "slug":slug.current,
          image,
          alt,
          url,
          content
        }`,
    { slug }
  );
  return res;
};

export const getPages = async (): Promise<IPage[]> => {
  const res = await client.fetch(
    `*[_type == "page"]{
          _id,
          _createdAt,
          title,
          "slug":slug.current,
          
        }`
  );
  return res;
};

export const getPage = async (slug: string): Promise<IPage> => {
  const res = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
           _id,
          _createdAt,
          title,
          "slug":slug.current,
          content
        }`,
    { slug }
  );
  return res;
};

