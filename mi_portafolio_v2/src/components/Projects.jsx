import { projects } from "../data/projects.js";
import proyect1 from "../assets/images/projects/project1.jpg"
import proyect2 from "../assets/images/projects/project2.jpg"
import proyect3 from "../assets/images/projects/project3.jpg"
import proyect4 from "../assets/images/projects/project4.jpg"
import MiniProject from "./MiniProject.jsx";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-3 max-sm:mt-88">
        <h2 className="text-4xl font-bold mb-12 max-sm:px-10">Proyects</h2>
        <div className="grid md:grid-cols-2 gap-8 px-10">
          <MiniProject title={"Tip calculator"} hrefImg={proyect1} titleImg= {"Tip calculator"} description={"Esta aplicación web te permite calcular el porcentaje que te gustaría dar de propina en función de tu compra"} link={"https://tip-calculator-app-silk-ten.vercel.app/"}/>
          <MiniProject title={"Weather App"} hrefImg={proyect2} titleImg= {"Weather App"} description={"Mediante el uso de una API meteorológica, este sitio web te permite conocer el tiempo que hace en diferentes ciudades y países"} link={"https://pf3-app-weather.vercel.app/"}/>
          <MiniProject title={"Room Search"} hrefImg={proyect3} titleImg= {"Room Search"} description={"Sitio web permite buscar apartamentos disponibles en diferentes ciudades según el número de personas que deseen alojarse."} link={"https://mp-nivel3.vercel.app/"}/>
          <MiniProject title={"Sunny Side"} hrefImg={proyect4} titleImg= {"Sunny Side"} description={"Diseño web que ayudan a los pequeños proveedores de servicios a centrarse en dar información clara y concisa a sus lectores"} link={"https://tailwind-sunnyside.vercel.app/"}/>
        </div>
      </div>
    </section>
  );
}

export default Projects;
