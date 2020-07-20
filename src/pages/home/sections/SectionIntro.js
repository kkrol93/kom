import React from 'react';
import '../styles/SectionIntro.scss';
import imageIntro from '../images/header.jpg';

const SectionIntro = () => {
  return (
    <section className="intro">
      <div className="intro__image">
        <img src={imageIntro} alt="" />
      </div>
      <div className="intro__text">
        <h2>Hello!</h2>
        <p>
          Mam na imię Krzysiek! Jestem wygadanym człowiekiem, który nie umie usiedzieć w jednym
          miejscu. Prywatnie pasjonata muzyki różnych gatunków jak rock/metal, muzyka klasyczna,
          alternatywna czy czasem nawet jazz. Lubię odkrywać nowe zespoły jak i sam w domowym
          zaciszu skomponować. Hobbistycznie uczę się homerecordingu, ale ze względu na małą ilość
          wolnego czasu jeszcze długa droga przede mną, abym coś wrzucił swojego.
        </p>
        <p>
          Zawodowo inżynier informatyki. Rozwijam się w tworzeniu stron internetowych głównie w
          FRONT-END. Swoja przygodę w programowaniu zacząłem niecały rok temu i cały czas rozwijam
          swoje umiejętności. Niemniej jednak znalazłem w tym swoją drogę i dążę do bycia jak
          najlepszym
        </p>
        <p>
          Postanowiłem stworzyć swoją stronę w celu podzielenia się z Wami nowościami muzycznymi,
          relacjami z koncertów, dlatego zapraszam do zakładki blog :)
        </p>
      </div>
    </section>
  );
};
export default SectionIntro;
