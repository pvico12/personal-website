"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>
      <main className="dark:bg-slate-500">
        <div id="two-sided-pane" className="flex justify-center flex-pane">
          <div id="main-info-container" className="max-w-lg lg:w-1/2 lg:sticky lg:top-0 lg:h-fit p-10">
            <div id="basic-info" className="pb-6">
              <div id="darkmode-name" className="flex items-center space-between gap-5">
                <h1 id="full-name" className="text-5xl pb-2">
                  Petar Vico
                </h1>
                <FaLightbulb className="text-2xl" onClick={() => {setDarkmode(!darkmode)}}/>
              </div>
              <h3 id="career-title" className="text-xl pb-2">
                Software Engineering Professional
              </h3>
              <h4 id="short-description" className="text-md">
                One-sentence description
              </h4>
            </div>

            <ul className="flex flex-row">
              <li className="text-3xl pr-2">
                <FaLinkedin />
              </li>
              <li className="text-3xl px-2">
                <FaGithub />
              </li>
              <li className="text-3xl px-2">
                <FaEnvelope />
              </li>
            </ul>
          </div>

          <div id="personal-sections" className="max-w-3xl lg:w-1/2">
            <div id="about-container" className="p-10">
              <h1 className="pb-3">
                ABOUT
              </h1>

              <p>
                Complex problem-solver with an analytical and driven mindset.
                Dedicated to achieving demanding development objectives according to
                tight schedules while producing impeccable code. Driven student leveraging
                studies in Computer Science seeking real-world experience as a Software Developer.
              </p>
            </div>

            <div id="experience-container" className="p-10">
              <h1 className="pb-3">
                EXPERIENCE
              </h1>

              <div id="experience-list" className="flex flex-col">
                <div className="pb-4">
                  <h4>JUNE 2023 - PRESENT</h4>
                  <h2>Full-Stack Engineer - SerbLink</h2>
                  <p>
                    Description of position
                  </p>
                </div>

                <div className="pb-4">
                  <h4>SEPT 2022 - PRESENT</h4>
                  <h2>Software Engineer in Test - IMAX</h2>
                  <p>
                    Description of position
                  </p>
                </div>

                <div className="pb-4">
                  <h4>MAY 2023 - AUG 2023</h4>
                  <h2>Software Engineer in Test - Siemens</h2>
                  <p>
                    Description of position
                  </p>
                </div>
              </div>
            </div>

            <div id="projects-container" className="p-10">
              <h1 className="pb-3">
                PROJECTS
              </h1>

              <div id="projects-list" className="flex flex-col">
                <div className="pb-4">
                  <h4>Watopoly</h4>
                  <p>
                    Description of project
                  </p>
                </div>

                <div id="websites-list" className="pb-4">
                  <h4>Websites</h4>

                  <div className="py-2">
                    <h3>Tena's Treats</h3>
                    <h5>https://www.tenastreats.com</h5>
                  </div>

                  <div className="pb-2">
                    <h3>JV P&C Solutions</h3>
                    <h5>https://www.jvpcs.com</h5>
                  </div>

                  <div>
                    <h3>M&N Windows And Doors</h3>
                    <h5>https://www.mnwindowsdoors.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
