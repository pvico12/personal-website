"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import Head from "next/head";
import Experience from "./components/Experience.js"

export default function Home() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>
      <main className="dark:bg-slate-500 dark:text-white">
        <div id="two-sided-pane" className="flex justify-center flex-pane">
          <div id="main-info-container" className="max-w-lg lg:w-1/3 lg:sticky lg:top-0 lg:h-fit p-10">
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

            <div id="social-links" className="flex flex-row">
              <a href="https://ca.linkedin.com/in/petar-vico-6ba2b6217" target="_blank" rel="noopener noreferrer" className="text-3xl pr-2">
                <FaLinkedin />
              </a>
              <a href="https://github.com/pvico12/" target="_blank" rel="noopener noreferrer" className="text-3xl px-2">
                <FaGithub />
              </a>
              <a href="mailto:petarvico3@outlook.com" target="_blank" rel="noopener noreferrer" className="text-3xl px-2">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div id="personal-sections" className="max-w-3xl lg:w-2/3">
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

              <div id="experience-list" className="flex flex-col space-between gap-4">
                <Experience
                  date="JUNE 2023 - NOW"
                  position="Full-Stack Engineer"
                  company="SerbLink"
                  description="Creating and maintaining website built with MongoDB, ExpressJS, NodeJS, and Angular."
                  skills="Many"
                />

                <Experience
                  date="SEPT 2022 - NOW"
                  position="Software Engineer in Test"
                  company="IMAX"
                  description="
                  Created Slack bot to report daily integration test runs with lots of responsiveness.
                  Created script to automate the TestRail reporting process when running test cases.
                  Created several other automation scripts to ease software testing and development throughout the team.
                  Maintained several areas of testing including regression, integration, and validation.
                  Obtained experience working with RestAPIs, MySQL databases, and product deployment.
                  Reworked entire areas of testing for better automativity, documentation, and thoroughness.
                  Fast-pased work environent applying agile methodologies using technologies like GitHub and JIRA."
                  skills="Many"
                />

                <Experience
                  date="JUNE 2023 - NOW"
                  position="Software Engineer in Test"
                  company="Siemens"
                  description="
                  Created android emulator in Java to speed up acceptance testing by up to 2500%.
                  Company-wide emulator impact as it was packaged and distributed to other teams.
                  Created tools for cloud deployment of emulators.
                  Automated test cases from the ground for an entire new product yet to be released.
                  Used a BDD (Behaviour Driven Development) apporoach with the help of Gherkin to maximize test coverage and accuracy.
                  Maintained several areas of automated testing in Python including acceptance, validation, sanity, and performance."
                  skills="Many"
                />
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
                    <a
                    href="https://www.tenastreats.com" 
                    target="_blank" rel="noopener noreferrer"
                    className="text-md pr-2 underline">
                      tenastreats.com
                    </a>
                  </div>

                  <div className="pb-2">
                    <h3>JV P&C Solutions</h3>
                    <a
                    href="https://www.jvpcs.com"
                    target="_blank" rel="noopener noreferrer"
                    className="text-md pr-2 underline">
                      jvpcs.com
                    </a>
                  </div>

                  <div>
                    <h3>M&N Windows And Doors</h3>
                    <a
                    href="https://www.mnwindowsdoors.com"
                    target="_blank" rel="noopener noreferrer"
                    className="text-3md pr-2 underline">
                      mnwindowsdoors.com
                    </a>
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
