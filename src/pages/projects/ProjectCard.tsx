import React, { useState } from 'react';
import { ProjectType } from '../../types';

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  const [showBack, setShowBack] = useState(false);

  const flipCard = () => {
    setShowBack(!showBack);
  };

  const FrontOfCard = () => (
    <div className="" onClick={flipCard}>
      <div className="bg-black w-full h-[200px] relative border">
        <p className="absolute z-10 right-4 top-4 bg-material-purple rounded-md text-white px-2 py-1 ">
          {project.stackType}
        </p>
        <img
          src={project.images[0]}
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-start p-4 relative">
        <h2 className="font-semibold text-lg mb-2 w-full text-center">
          {project.title}
        </h2>
        <p className=" text-wrap text-clip text-sm mb-4 h-32">
          {project.description}
        </p>
        <div className="w-full flex flex-row items-end justify-around">
          {project.tags?.map((item, i) => (
            <p
              key={i}
              className="font-semibold text-xs text-center bg-gray-300 hover:bg-gray-100 rounded-full px-3 py-1"
            >
              #{item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  const BackOfCard = () => (
    <div className="flex flex-col w-full relative h-full">
      <div
        onClick={flipCard}
        className="w-full h-full  flex flex-col p-4 relative"
      >
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
      </div>
      <div className=" flex-1 flex flex-row items-end justify-end absolute bottom-4 right-4 ">
        <button className="bg-material-purple text-white py-1 px-4 rounded-md shadow-md font-semibold">
          Open Project
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-[450px] flex flex-col items-center justify-start bg-white mb-4 md:mb-0 md:col-span-6 overflow-hidden shadow-md rounded-md lg:col-span-3  transition-all duration-200">
      {showBack ? <BackOfCard /> : <FrontOfCard />}
    </div>
  );
};

export default ProjectCard;
