function Hero() {
  return (
    <section className="max-h-screen flex items-center py-25">
      <div className=" mx-auto px-3  rounded-4xl flex  bg-[url(../../public/img/fondo2.jpg)] bg-cover bg-center bg-linear-to-65 from-gray-900 to-gray-500 max-w-sm:max-w-screen">
        <div className="w-5xl p-10 max-sm:w-screen max-md-w-screen">
          <p className="text-green-400 mb-4">Hello, I am </p>
          <h1 className="text-6xl font-bold mb-4">Vianey Galicia </h1>
          <h2 className="text-4xl text-gray-400 mb-6">Frontend Developer</h2>
          <p className="max-w-xl text-gray-500 mb-8S">
            Construyo interfaces modernas, rápidas Sy profesionales usandoS
            React.
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
