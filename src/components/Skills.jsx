import React from 'react'
import {  FaCss3Alt, FaHtml5,FaSass } from "react-icons/fa";
import { SiTailwindcss,SiNextdotjs ,SiFirebase, SiNodedotjs, SiRedux, SiMongodb, SiJavascript, SiAppwrite, SiChakraui, SiFramer, SiDocker, SiGithub, SiPostman} from "react-icons/si";
import { FaReact } from "react-icons/fa6";


const Skills = () => {
  return (
    <div id='skills'>
        <section>
            <h2>SKILLS</h2>
            <div>
            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'><FaHtml5 /></a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'><FaCss3Alt /></a>
            <a href="https://sass-lang.com/" target='_blank'><FaSass /></a>
            <a href="https://tailwindcss.com/docs/installation" target='_blank'><SiTailwindcss/></a>
            <a href="https://chakra-ui.com/getting-started" target='_blank'><SiChakraui/></a>
            <a href="https://www.framer.com/motion/" target='_blank'><SiFramer/></a>
            <a href="" target='_blank'><SiJavascript /></a>
            <a href="https://legacy.reactjs.org/docs/getting-started.html" target='_blank'><FaReact /></a>
            <a href="https://nextjs.org/docs" target='_blank'><SiNextdotjs/></a>
            <a href="https://console.firebase.google.com/?fb_gclid=Cj0KCQiA2KitBhCIARIsAPPMEhLG2qT5SukvrgrwHAzKgPGWvsDDyjN6wD1G0_QmgC3KiqOT3qlDVfgaAtGaEALw_wcB&_gl=1*163bdh8*_ga*MTE4MDM5NjE0LjE3MDU2NjE2ODE.*_ga_CW55HF8NVT*MTcwNTY2MTY4MS4xLjAuMTcwNTY2MTY4My41OC4wLjA.&pli=1" target='_blank'><SiFirebase /></a>
            <a href="https://appwrite.io/" target='_blank'><SiAppwrite /></a>
            <a href="https://nodejs.org/docs/latest/api/" target='_blank'><SiNodedotjs /></a>
            <a href="https://redux.js.org/redux-toolkit/overview" target='_blank'><SiRedux /></a>
            <a href="https://www.mongodb.com/docs/" target='_blank'><SiMongodb /></a>
            <a href="https://docs.docker.com/guides/get-started/" target='_blank'><SiDocker /></a>
            <a href="https://github.com/sankalpbarriar" target='_blank'><SiGithub /></a>
            <a href="https://learning.postman.com/docs/introduction/overview/" target='_blank'><SiPostman /></a>
            </div>
        </section>
    </div>
  )
}

export default Skills