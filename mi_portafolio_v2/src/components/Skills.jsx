import { skills } from "../data/skills.js";
import MiniSkills from "./MiniSkills.jsx";
import html from "../assets/icons/html5.svg"
import css from "../assets/icons/css3.svg"
import js from "../assets/icons/js.svg"
import react from "../assets/icons/react.svg"
import tailwind from "../assets/icons/tailwindcss.svg"
import nodejs from "../assets/icons/nodejs.svg"
import express from "../assets/icons/express-js.svg"
import mongodb from "../assets/icons/mongodb.svg"
import mysql from "../assets/icons/mysql_icon.svg"


function Skills() {
  return (
    <section id="technologies" className="max-h-screen flex items-center py-16">
      {/* <div className="mx-auto px-3 "> */}
      {/* <div className="max-w-7xl p-10 mx-auto  border border-b-olive-600 max-sm:p-1 max-w-sm:py-16 max-w-sm:max-w-full "> */}
      <div className="max-w-6xl mx-auto px-3 max-sm:mt-88">
        <h2 className="text-4xl font-bold mb-8">Technologies</h2>
        <div className="  flex flex-wrap gap-4 p-8">
          <MiniSkills name={"Html"} image={html}/>
          <MiniSkills name={"Css"} image={css}/>
          <MiniSkills name={"JavaScript"} image={js}/>
          <MiniSkills name={"React"} image={react}/>
          <MiniSkills name={"Tailwind"} image={tailwind}/>
          <MiniSkills name={"Node.js"} image={nodejs}/>
          <MiniSkills name={"Express"} image={express}/>
          <MiniSkills name={"MongoDB"} image={mongodb}/>
          <MiniSkills name={"MySql"} image={mysql}/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
