import React from 'react';
import { constants } from '../../../constants/constants';
import { projects } from '../../data';
import ProjectCard from '../../projects/ProjectCard';

const Projects = () => {
  return (
    <div className={`${constants.layout} bg-gray-200 py-4`}>
      <a
        href="/projects"
        className="font-semibold w-full text-left text-lg px-4 underline mb-4"
      >
        Projects
      </a>
      <div className="w-5/6 h-full  flex-1 flex flex-col md:p-4 md:grid md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-12 md:gap-4 md:gap-y-6 lg:gap-x-4 gap-y-2 justify-between items-center">
        {projects.slice(0, 4).map((item, i) => (
          <ProjectCard project={item} />
        ))}
        <div className="w-full flex flex-row items-center justify-between mb-4"></div>
      </div>

      <a href="/projects" className="text-lg underline">
        View All
      </a>
    </div>
  );
};

export default Projects;
