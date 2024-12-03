import Image from "../assets/image.png";
import ImageTestimonials from "../assets/testimonial-new.svg";
export const Component2 = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center
     text-textCoder md:py-8 "
      >
        <h2 className="text-2xl">Segundo componente:</h2>
        <span className="mt-5 mb-2">
          Imagen de la web oficial en versión móvil 👇
        </span>
        <img src={Image} alt="Imagen de la web oficial" />

        <h3 className="text-xl mt-4">Nuevo Componente👇:</h3>
        <article className="w-full py-6 px-12 gap-12 flex flex-col md:flex-row items-center justify-center">
          <div className="w-2/4 flex justify-center">
            <img
              src={ImageTestimonials}
              alt="Imagen de nuevos testimonios"
              className="pointer-events-none"
            />
          </div>
          <div className="w-2/4 flex flex-col justify-center items-center text-center md:items-start md:text-start">
            <h3
              className="text-2xl lg:text-3xl text-white font-semibold 
                lg:w-2/4 w-3/4 mb-4"
            >
              Nuestros graduados forman parte de las mejores empresas de la
              región
            </h3>
            <button
              className="bg-detailCoder text-black py-2 px-4 rounded-md
                transiton-all duration-300 hover:scale-105 hover:opacity-90"
            >
              Ver opiniones
            </button>
          </div>
        </article>
        <p className="text-center text-textCoder w-2/4">
          Se agregó una vista responsive. Además, se implementó la propiedad
          pointer-events: none para evitar que la imagen sea clickeada o
          arrastrada.
        </p>
      </div>
    </>
  );
};
