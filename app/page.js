"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import Head from "next/head";
import Experience from "./components/Experience.js"
import Project from "./components/Project.js"

export default function Home() {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <div className={darkmode ? "dark" : ""}>
      <main className="dark:bg-slate-300">
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
                I am a skilled software engineer, seeking valuable experience, that is poised to tackle diverse challenges and create innovative solutions.
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
              <h1 className="text-2xl pb-3">
                ABOUT
              </h1>

              <p>
                Complex problem-solver with an analytical and driven mindset.
                Dedicated to achieving demanding development objectives according to
                tight schedules while producing impeccable code. Driven student leveraging
                studies in Computer Science seeking real-world experience as a Software Developer.
              </p>
            </div>

            <div id="about-container" className="py-2 px-10">
              <h1 className="text-2xl pb-1">
                EDUCATION
              </h1>
              <h3 className="text-lg">
                University of Waterloo
              </h3>
              <h4 className="text-md pb-3">
                Honours Bachelor of Computer Science
              </h4>
            </div>

            <div id="experience-container" className="p-10">
              <h1 className="text-2xl pb-3">
                EXPERIENCE
              </h1>

              <div id="experience-list" className="flex flex-col space-between gap-4">
                <Experience
                  date="JUNE 2023 to PRESENT"
                  position="Full-Stack Software Engineer"
                  company="SerbLink"
                  employmentType="Part-Time"
                  description="
                  Created and consistently adding features to backend in NodeJs, ExpressJS, and MongoDB for database use.
                  Maintaining frontend of website built with Angular.
                  Focused on containerizing with Docker for deployment with Github Actions and pipelines.
                  "
                  skills={["MongoDB", "Angular", "NodeJS", "ExpressJS", "Docker", "Git DevOps"]}
                />

                <Experience
                  date="SEPT 2022 to PRESENT"
                  position="Software Engineer in Test"
                  company="IMAX"
                  employmentType="Coop Full-Time, Part-Time from JAN 2023"
                  description="
                  Created Slack bot to report daily integration test runs.
                  Created script to automate the TestRail reporting process when running test cases.
                  Created several other automation scripts to ease software testing and development throughout the team.
                  Maintained several areas of testing including regression, integration, and validation.
                  Reworked entire areas of testing for better automativity, documentation, and thoroughness."
                  skills={["Python", "TestRail API", "Slack API"]}
                />

                <Experience
                  date="AUG 2019 to PRESENT"
                  position="Head of Technology"
                  company="JV P&C Solutions"
                  employmentType="Part-Time"
                  description="
                  Created and currently maintaining company website.
                  Configuration of several different machines for office use.
                  Domain, licensing, and accounts maintenance with Azure DevOps.
                  "
                  skills={["PHP", "Windows", "Azure DevOps"]}
                />

                <Experience
                  date="MAY 2023 to JUNE 2023"
                  position="Software Engineer in Test"
                  company="Siemens"
                  employmentType="Coop Full-Time"
                  description="
                  Created android emulator in Java to speed up acceptance testing by up to 2500%.
                  Emulator had company-impact as it was distributed to other teams internationally.
                  Automated test cases from the ground for an entire new product yet to be released.
                  Used a BDD (Behaviour Driven Development) apporoach with the help of Gherkin to maximize test coverage and accuracy.
                  Maintained several areas of automated testing in Python including acceptance, validation, sanity, and performance."
                  skills={["Python", "Java", "Gherkin", "BDD"]}
                />
              </div>
            </div>

            <div id="projects-container" className="p-10">
              <h1 className="text-2xl pb-3">
                PROJECTS
              </h1>

              <div id="projects-list" className="flex flex-col">
                <Project
                  title="Watopoly"
                  description="Terminal based Monopoly game supporting 2-8 players."
                  skills={["C++", "Bash"]}
                />

                <Project
                  title="Personal Website"
                  description="My personal website outlining my different software development experiences through different work experiences and projects."
                  skills={["NextJS", "ReactJS", "Tailwind CSS"]}
                  link="petarvico.com"
                />

                <Project
                  title="Tena's Treats Wesbite"
                  description="A website for a customized sweet treats local business."
                  skills={["Angular", "Tailwind CSS"]}
                  link="tenastreats.com"
                />

                <Project
                  title="JV P&C Solutions Website"
                  description="A website for an electrical engineering company focused in relay protection, maintenance, and control."
                  skills={["PHP"]}
                  link="jvpcs.com"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
