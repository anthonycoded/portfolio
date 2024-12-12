import React from 'react';
import { constants } from '../../constants/constants';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import ProjectCard from './ProjectCard';
import { ProjectType } from '../../types';

const Projects = () => {
  return (
    <div className={`${constants.layout} bg-gray-200 px-1`}>
      <h1 className="font-semibold w-full text-left text-lg px-4 mb-4">
        Projects
      </h1>
      <div className="w-4/5 md:w-full h-full  flex-1 flex flex-col md:p-4 md:grid md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-12 md:gap-4 md:gap-y-6 lg:gap-x-4 gap-y-2 justify-between items-center">
        {projects.map((item, i) => (
          <ProjectCard project={item} />
        ))}
        <div className="w-full flex flex-row items-center justify-between mb-4"></div>
      </div>
    </div>
  );
};

export default Projects;
