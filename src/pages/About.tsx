import React from 'react';
import { constants } from '../constants/constants';
import avatar from '../assets/avatar.jpg';

type Props = {};

const About = (props: Props) => {
  return (
    <div className={`${constants['layout']}`}>
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-400">
        {/* Intro */}
        <div className="mb-12 text-center w-full items-center flex flex-col">
          <img
            src={avatar}
            alt=""
            className="rounded-full h-48 w-48 mb-4 shadow-lg"
          ></img>
          <h1 className="text-4xl font-bold mb-4 ">👋 About Me</h1>
          <p className="text-lg leading-relaxed text-gray-800">
            Hi, I’m <span className=" font-semibold">Shawn Barbel</span> — a
            passionate <span className="">Software Developer</span> who
            specializes in <span className="">Frontend Development</span> and{' '}
            <span className="">Artificial Intelligence</span>. I love turning
            complex ideas into sleek, high-performance digital experiences that
            make technology feel effortless.
          </p>
        </div>

        {/* Professional Summary */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold  flex items-center gap-2">
            💼 Professional Summary
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I have hands-on experience in both <strong>web</strong> and{' '}
            <strong>mobile app development</strong>, working closely with
            cross-functional teams to deliver scalable, user-centric solutions.
            My focus is on crafting smooth interfaces, building robust
            architectures, and optimizing performance for real-world impact.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-semibold  flex items-center gap-2">
            🧩 Work Experience
          </h2>

          <div>
            <h3 className="text-xl font-semibold ">
              Frontend Software Engineer – Worldwide Interactive Services
            </h3>
            <p className="text-gray-500 text-sm">
              Orlando, FL | Aug 2020 – 2024
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>
                Developed and deployed a{' '}
                <strong>global banking platform</strong> with a collaborative
                team of developers and QA engineers.
              </li>
              <li>
                Created reusable UI components and improved frontend
                performance.
              </li>
              <li>
                Integrated third-party APIs and enhanced the overall app
                scalability.
              </li>
              <li>
                <strong>Tech Stack:</strong> React, React Native, Java
                (Android), Swift, Objective-C, Redux.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold ">Web Developer – NobelX</h3>
            <p className="text-gray-500 text-sm">
              Tampa, FL | Jan 2017 – Present
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>
                Led development of <strong>e-commerce</strong> and{' '}
                <strong>social media platforms</strong> from design to
                deployment.
              </li>
              <li>
                Built <strong>authentication</strong> and{' '}
                <strong>payment processing systems</strong> for secure
                transactions.
              </li>
              <li>
                Oversaw full project lifecycles, ensuring on-time delivery and
                performance optimization.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold ">Government Projects</h3>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>
                Designed prototypes and wireframes for bids with state agencies,
                including:
              </li>
              <ul className="list-disc list-inside ml-6">
                <li>Alabama Department of Human Resources</li>
                <li>Florida Department of Children and Families</li>
              </ul>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold  flex items-center gap-2">
            ⚙️ Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-400">
            <div>
              <h4 className=" font-semibold mb-1">Frontend Development</h4>
              <p>
                React, React Native, TypeScript, Redux, JavaScript, Swift,
                Objective-C
              </p>
            </div>
            <div>
              <h4 className=" font-semibold mb-1">Backend & Full-Stack</h4>
              <p>Node.js, Express, REST APIs, Python</p>
            </div>
            <div>
              <h4 className=" font-semibold mb-1">Machine Learning</h4>
              <p>TensorFlow, Keras, Image Recognition & Classification</p>
            </div>
            <div>
              <h4 className=" font-semibold mb-1">Database</h4>
              <p>SQL, MongoDB</p>
            </div>
            <div>
              <h4 className=" font-semibold mb-1">UI/UX</h4>
              <p>Prototyping, Wireframing, Performance Optimization</p>
            </div>
            <div>
              <h4 className=" font-semibold mb-1">Version Control</h4>
              <p>Git, GitHub</p>
            </div>
          </div>
        </div>

        {/* Personal */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold  flex items-center gap-2">
            🌱 Beyond the Code
          </h2>
          <p className="text-gray-400 leading-relaxed">
            When I’m not developing, I’m usually exploring the outdoors or
            tinkering with creative projects. I love <strong>gardening</strong>{' '}
            and hiking the local trails around <strong>Tampa</strong>. For an
            adrenaline rush, you’ll find me
            <strong> dirt bike riding</strong> or at <strong>car meets</strong>,
            enjoying the automotive scene.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I’m also a big fan of <strong>DIY science and tech projects</strong>
            , often experimenting with <strong>3D printing</strong>. When it’s
            time to unwind, I dive into <strong>anime</strong> or sharpen my
            reflexes as a <strong>pro Call of Duty player</strong>.
          </p>
        </div>

        {/* Closing */}
        <div className="text-center w-full">
          <h2 className="text-2xl font-semibold  mb-4 w-full text-left">
            🚀 Always Building. Always Learning.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Every project I take on is an opportunity to grow, create, and make
            something meaningful. Whether it’s designing user interfaces,
            optimizing backend logic, or experimenting with AI, I’m always
            pushing the boundaries of what’s possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
