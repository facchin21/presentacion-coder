import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import ImageHero from '../assets/home-hero-desktopV2.png';

export const Component1 = () => {
  return (
    <div className="flex flex-col justify-center items-center text-textCoder">
        <h2 className="text-2xl">Primer componente:</h2>
        <div className="md:ml-28">
          <CardContainer>
            {/* Card Body: Imagen u otros elementos principales */}
            <CardBody>
              <CardItem
                className="w-64 sm:w-96 md:w-[45rem] h-full bg-no-repeat bg-contain rounded-t-lg"
                translateZ={20}
                style={{
                  backgroundImage: `url(${ImageHero})`,
                }}
              />
            </CardBody>
          </CardContainer>
        </div>
          <p className="text-center w-2/4">Imagen tomada del Hero de la web oficial. Se añadió una animación sutil para mejorar la experiencia visual.</p>
      </div>
  )
}
