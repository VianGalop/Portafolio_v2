import fondoImagen from "../assets/images/fondo2.jpg"

function Hero() {
  return (
    <section className="max-h-screen flex items-center py-25" id="hero">
      <div className="mx-auto px-3  rounded-4xl flex bg-cover bg-center bg-linear-to-65 from-gray-900 to-gray-500 max-w-sm:max-w-screen" style={{ backgroundImage: `url(${fondoImagen})` }}>
        <div className="w-5xl p-10 max-sm:w-screen max-md-w-screen">
          <p className="text-blue-800 mb-4">Hello, I am </p>
          <h1 className="text-6xl font-bold mb-4">Vianey Galicia </h1>
          <h2 className="text-4xl text-gray-300 mb-6">Frontend Developer</h2>
          <p className="max-w-lg text-white-400 mb-8 text-2xl ">
            Construyendo interfaces modernas, rápidas y profesionales orientado a 
            resultados que impulsan tu éxito.
          </p>

          <div className="flex gap-4 my-5">
            <a
              href="#projects"
              className="bg-zinc-400 text-white-300 px-6 py-3 rounded-lg dark:bg-white dark:text-black"
            >
              See projects
            </a>

            <a
              href="#contact"
              className="border border-black px-6 py-3 rounded-lg dark:border dark:border-white "
            >
              Contact
            </a>
          </div>
        </div>
        {/* <div className="min-w-1/4 py-4 max-sm:mt-20">
          <img
            className="h-96 w-96 rounded-2xl"
            src="../../public/icons/avatar.svg"
            alt="Vian"
            loading="lazy"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
