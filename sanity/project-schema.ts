// import { defineType, defineField } from "sanity";



export const project = {
  name: "project",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};







// import { defineType, defineField } from "sanity";

// export const Product = defineType({
//   name: "product",
//   type: "document",
//   title: "Product",
//   fields: [
//     defineField({
//       name: "title",
//       title: "Product Title",
//       type: "string",
//     }),
//     defineField({
//       name: "description",
//       title: "Product Description",
//       type: "string",
//     }),
//     defineField({
//       name: "price",
//       title: "Product Price",
//       type: "number",
//     }),
//     defineField({
//       name: "image",
//       title: "Product Image",
//       type: "image",
//     }),
    
//   ],
// });

