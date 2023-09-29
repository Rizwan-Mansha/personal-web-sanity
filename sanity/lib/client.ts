import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { Image } from "sanity";
import config from "../config/client-config";



 export  const client = createClient(config);

    // interface IProducts {
    //   _id:string,
    //   _createdAt:string,
    //   name:string,
    //   slug:string,
    //   image: Image
    // }


    // export const getProducts = async() => {
    // const res =  await client.fetch(
    //     `*[_type == "product"]{
    //       _id,
    //       _createdAt,
    //       name,
    //       "slug":slug.current,
    //       "image":image.asset->url,
    //     }`
    //   );
    //   return res;

    // }

    
    
    
    


