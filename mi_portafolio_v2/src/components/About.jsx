function About() {
  return (
    <section id="about" className="max-h-screen flex items-center py-16">
      <div className="max-w-6xl p-10 mx-auto flex justify-center max-sm:flex-col-reverse max-sm:max-w-screen">
        <div className="min-w-1/4 py-4 max-sm:mt-20 mx-10 rounded-4xl shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] dark:shadow-[1.95px_1.95px_2.6px_rgba(27,31,35,0.15)]">
          <img
            className="h-96 w-96 rounded-2xl"
            src="../../public/icons/avatar.svg"
            alt="Vian"
            loading="lazy"
          />
        </div>
        <div className="min-w-3/4 w-5xl px-5 max-sm:w-2xs">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-gray-400 leading-8 ">
            Soy desarrollador web especializado en crear aplicaciones modernas
            con React, JavaScript y Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
