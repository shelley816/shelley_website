"use client";

import { useState } from "react";
import { motion } from  "motion/react"

import Image from "next/image";

import Wrap from "./ui/Wrap";

const projectData = [
  {
    id: "product01",
    title: "Project 1",
    description: "Project 1 description",
    image: "/assets/project_01.jpg",
    label: [
      { sort: "React", color: "bg-gray-500", textColor: "text-white" },
      {
        sort: "Next.js",
        color: "bg-white",
        textColor: "text-black",
      },
      { sort: "Tailwind CSS", color: "bg-blue-600", textColor: "text-white" },
      {
        sort: "Framer Motion",
        color: "bg-[#F8ED2E]",
        textColor: "text-black",
      },
      {
        sort: "Vercel",
        color: "bg-black",
        textColor: "text-white",
      },
    ],
    detail: (
      <div className="w-full h-full p-4">
        <h4>Project 1 title</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla
          <br />
          vel ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam nisi
          nisl sit amet nisl. Sed tristique, nulla vel ultrices ultricies, nisi
          nisl tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla vel
          <br />
          ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam nisi nisl
          sit amet nisl. Sed tristique, nulla vel ultrices ultricies, nisi nisl
          tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed tristique,
          nulla vel ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam
          nisi nisl sit amet nisl. Sed tristique, nulla vel ultrices ultricies,
          nisi nisl tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla vel.
          <br />
          ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam nisi nisl
          sit amet nisl. Sed tristique, nulla vel ultrices ultricies, nisi nisl
          tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed tristique,
          nulla vel ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam
          nisi nisl sit amet nisl. Sed tristique, nulla vel ultrices ultricies,
          nisi nisl tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla vel.
          <br />
          ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam nisi nisl
          sit amet nisl. Sed tristique, nulla vel ultrices ultricies, nisi nisl
          tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed tristique,
          nulla vel ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam
          nisi nisl sit amet nisl. Sed tristique, nulla vel ultrices ultricies,
          nisi nisl tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla vel.
          <br />
          ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam nisi nisl
          sit amet nisl. Sed tristique, nulla vel ultrices ultricies, nisi nisl
          tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed tristique,
          nulla vel ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam
          nisi nisl sit amet nisl. Sed tristique, nulla vel ultrices ultricies,
          nisi nisl tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla vel.
        </p>
      </div>
    ),
  },
  {
    id: "product02",
    title: "Project 2",
    description: "Project 1 description",
    image: "/assets/project_01.jpg",
    label: [
      { sort: "React", color: "bg-gray-500", textColor: "text-white" },
      {
        sort: "Redux",
        color: "bg-purple-600",
        textColor: "text-white",
      },
      {
        sort: "React Router",
        color: "bg-red-600",
        textColor: "text-white",
      },
      { sort: "Tailwind CSS", color: "bg-blue-600", textColor: "text-white" },
      {
        sort: "Firebase",
        color: "bg-amber-500",
        textColor: "text-black",
      },
    ],
    detail: (
      <div className="w-full h-full p-4">
        <h4>Project 1 title</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla
          <br />
          vel ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam nisi
          nisl sit amet nisl. Sed tristique, nulla vel ultrices ultricies, nisi
          nisl tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla vel
          <br />
          ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam nisi nisl
          sit amet nisl. Sed tristique, nulla vel ultrices ultricies, nisi nisl
          tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed tristique,
          nulla vel ultrices ultricies, nisi nisl tincidunt lectus, vel aliquam
          nisi nisl sit amet nisl. Sed tristique, nulla vel ultrices ultricies,
          nisi nisl tincidunt lectus, vel aliquam nisi nisl sit amet nisl. Sed
          tristique, nulla vel ultrices ultricies, nisi nisl tincidunt lectus,
          vel aliquam nisi nisl sit amet nisl. Sed tristique, nulla vel.
        </p>
      </div>
    ),
  },
  {
    id: "product03",
    title: "Project 3",
    description: "Project 1 description",
    image: "/assets/project_01.jpg",
    label: [
      { sort: "React", color: "bg-gray-500", textColor: "text-white" },
      {
        sort: "Next.js",
        color: "bg-[var(--background-secondary)]",
        textColor: "",
      },
    ],
    detail: null,
  },
  {
    id: "product04",
    title: "Project 4",
    description: "Project 1 description",
    image: "/assets/project_01.jpg",
    label: [
      { sort: "React", color: "bg-gray-500", textColor: "text-white" },
      {
        sort: "Next.js",
        color: "bg-[var(--background-secondary)]",
        textColor: "",
      },
    ],
    detail: null,
  },
  {
    id: "product05",
    title: "Project 5",
    description: "Project 1 description",
    image: "/assets/project_01.jpg",
    label: [
      { sort: "React", color: "bg-gray-500", textColor: "text-white" },
      {
        sort: "Next.js",
        color: "bg-[var(--background-secondary)]",
        textColor: "",
      },
      { sort: "Tailwind CSS", color: "bg-blue-600", textColor: "text-white" },
    ],
    detail: null,
  },
];

const projectCard =
  "relative w-full h-78 rounded-md flex flex-col justify-end overflow-hidden bg-center bg-no-repeat bg-cover";
const projectHw =
  "w-full h-78 rounded-md flex flex-col justify-start overflow-hidden bg-center bg-no-repeat bg-cover bg-[var(--background-secondary)]/30";
const projectPopover =
  "fixed top-0 left-0 z-80 w-full h-full flex justify-center items-center bg-[var(--foreground)]/60";

export default function Projects() {
  const [showPopover, setShowPopover] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handlePopoverClick(item) {
    setSelectedProject(item);
    setShowPopover(true);
  }
  return (
    <>
      <Wrap areaLink="projectsSection">
        {showPopover && selectedProject && (
          <div className={projectPopover} onClick={() => setShowPopover(false)}>
            <div
              className="w-full max-w-120 max-h-160 mx-6 overflow-scroll bg-[var(--background-secondary)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[360px] flex flex-col justify-end">
                <Image
                  fill
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
                <div className="relative z-11 w-full min-h-18 p-4 bg-[var(--background-secondary)]/60">
                  <h3 className="mb-3 text-lg font-medium">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.label.map((label, index) => (
                      <span
                        key={index}
                        className={`text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.color}`}
                      >
                        {label.sort}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {selectedProject.detail}
            </div>
          </div>
        )}

        <div className="w-full h-auto md:h-screen px-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl mt-20 md:mt-0 md:text-3xl text-center">
            Projects
          </h2>
          <div className="w-11/12 mt-10 flex flex-col md:flex-row justify-between gap-5 lg:gap-10 items-center">
            {projectData.slice(0, 2).map((item, index) => (
              <div
                key={item.id + index}
                className={projectCard}
                onClick={() => handlePopoverClick(item)}
              >
                <Image fill src={item.image} alt={item.title} />
                <div className="relative z-11 w-full min-h-18 p-4 bg-[var(--background-secondary)]/60">
                  <h3 className="mb-3 text-lg font-medium">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.label.map((label, labelIndex) => (
                      <span
                        key={labelIndex}
                        className={`text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.color}`}
                      >
                        {label.sort}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className={projectHw}>
              {projectData.slice(2).map((item, index) => (
                <div
                  key={item.id + index}
                  className="relative flex justify-start items-center bg-[var(--background-secondary)]/60"
                  onClick={() => handlePopoverClick(item)}
                >
                  <div className="relative m-3 size-20 rounded-sm overflow-hidden">
                    <Image fill src={item.image} alt={item.title} />
                  </div>
                  <div className="">
                    <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
}
