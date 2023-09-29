import { PortableText } from "@portabletext/react";
import { FetchDatas } from "@/app/components/FetchData";
import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;

  const project = await FetchDatas(slug);
  return (
    <div className="">
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
          View Project
        </a>
      </header>
      {/* content goes here */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image goes here */}
      <Image src={urlForImage(project.image).url()} alt={project.name}
      width={1080}
      height={1080}
      className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
    </div>
  );
};

export default Project;
