import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div id="main-info-container" className="p-10">
        <div id="basic-info" className="pb-6">
          <h1 id="full-name" className="text-5xl pb-2">
            Petar Vico
          </h1>
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
      <div id="about-container" className="p-10">
        <h1>ABOUT</h1>
      </div>
    </main>
  )
}
