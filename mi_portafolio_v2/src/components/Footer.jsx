import linkedin from "../assets/linkedin-ico.png";
import github from "../assets/github-ico.png";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex justify-around">
        <p className="text-gray-500">©2026 Vianey Galicia </p>
        <div className="flex gap-4">
          <a
            className="bg-zinc-400 rounded-full dark:bg-transparent"
            href={"https://github.com/VianGalop"}
          >
            <img
              src={github}
              alt="linkedin"
              loading="lazy"
              className="w-10 h-10"
            />
          </a>
          <a
            className="bg-zinc-400 rounded-full dark:bg-transparent"
            href={"https://www.linkedin.com/in/vianey-galicia-1073692b3/"}
          >
            <img
              src={linkedin}
              alt="linkedin"
              loading="lazy"
              className="w-10 h-10"
            />
            {/*  <i className="fa fa-linkedin-square" aria-hidden="true"></i> */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
