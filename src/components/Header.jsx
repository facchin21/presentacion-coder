export const Header = () => {
  return (
    <header
      className="flex flex-col justify-center items-center
      text-textCoder gap-1 py-8 text-center"
    >
      <h1 className="text-3xl">Bienvenidos a mi presentacion</h1>
      <h2 className="text-2xl">Me presento soy:</h2>
      <h3 className="text-xl">Fermin Facchin Quiroga</h3>
      <h4 className="text-lg">Front-End Developer</h4>
      <p className="w-2/4 mt-3">
        A continuación, podrán encontrar recomendaciones y sugerencias que
        ofrezco para su web. Quiero dejar en claro que estas propuestas no
        tienen ánimo de ofender.
      </p>
    </header>
  );
};
