import React from 'react';
import '../assets/styles/Header.scss';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <div className="header__dark"></div>
      <div
        className="header__title"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
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
          FRONT-END. Swoja przygodę w programowaniu zacząłem dwa lata temu i cały czas rozwijam
          swoje umiejętności. Niemniej jednak znalazłem w tym swoją drogę i dążę do bycia jak
          najlepszym
        </p>
      </div>
      <Link to="start" smooth={true} offset={-70}>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </header>
  );
};
export default Header;
