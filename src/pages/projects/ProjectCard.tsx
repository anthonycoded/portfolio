import React, { useState } from 'react';
import { ProjectType } from '../../types';

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  const [showBack, setShowBack] = useState(true);

  const flipCard = () => {
    setShowBack(!showBack);
  };

  console.log(showBack);

  const FrontOfCard = () => (
    <>
      <div className="bg-black w-full h-[200px] p-2 relative">
        <p className="absolute right-2 top-2 bg-material-purple text-white px-2 py-1 rounded">
          {project.stackType}
        </p>
        <img
          src={project.images[0]}
          className="w-full h-full rounded-md object-contain"
        />
      </div>
      <div className="w-full flex-1 flex flex-col items-center justify-start p-4 relative">
        <h2 className="font-semibold text-lg mb-2 w-full">{project.title}</h2>
        <p className=" text-wrap text-clip text-sm mb-4">
          {project.description}
        </p>
        <div className="w-full flex-1 flex flex-row items-end justify-around">
          {project.tags?.map((item, i) => (
            <p
              key={i}
              className="font-semibold text-xs bg-gray-300 hover:bg-gray-100 rounded-full px-3 py-1"
            >
              #{item}
            </p>
          ))}
        </div>
      </div>
    </>
  );

  const BackOfCard = () => (
    <div className="w-full h-full  flex flex-col p-4 relative">
      <h2 className="mb-4 font-semibold text-lg">{project.name}</h2>
      <p className="w-full text-left font-semibold">Frontend:</p>
      <div className="px-4 mb-8 flex flex-col">
        <div className="flex w-full items-center justify-between">
          <p className="text-nowrap">Framework: </p>
          <p>React/NextJS </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-nowrap">Styles: </p>
          <p>TailwindCSS </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-nowrap">Hosting: </p>
          <p>Vercel </p>
        </div>
      </div>
      <p className="w-full text-left font-semibold">Backend:</p>
      <div className="px-4 flex flex-col ">
        <div className="flex w-full items-center justify-between">
          <p className="text-nowrap ">Language: </p>
          <p>Python </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-nowrap">Framework: </p>
          <p>Django Rest Framework</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-nowrap">Database: </p>
          <p>PostgreSQL</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-nowrap">Hosting: </p>
          <p>Google Cloud Platform </p>
        </div>
      </div>

      <div className=" flex-1 flex flex-row items-end justify-end ">
        <button className="bg-material-purple text-white py-1 px-4 rounded-md shadow-md font-semibold">
          Open Project
        </button>
      </div>
    </div>
  );

  return (
    <button
      onClick={flipCard}
      className="w-full h-[450px] flex flex-col items-center justify-start bg-white border border-gray-400 mb-4 md:mb-0 md:col-span-6 overflow-hidden shadow-sm rounded-md lg:col-span-3  transition-all duration-200"
    >
      {showBack ? <BackOfCard /> : <FrontOfCard />}
    </button>
  );
};

export default ProjectCard;
