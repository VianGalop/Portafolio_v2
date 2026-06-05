/* function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">VianGalop.dev</h1>

        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; */

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <h1 className="font-bold text-xl">VianeyGL.dev</h1> */}
        <img
          className="h-10 w-10 rounded-s-3xl"
          src="../../public/icons/avatar.svg"
          alt="Vian"
          loading="lazy"
        />
        <div className="flex gap-6 items-center">
          <ul className="flex gap-6">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
