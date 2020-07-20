import React from 'react';
import '../../../assets/styles/sectionInterests.scss';

const SectionInterests = () => {
  return (
    <section id="start" className="interests">
      <div className="panel music" data-aos="fade-right">
        <div className="gradient" />
        <h3>Muzyka</h3>
        <p>
          Jest nierozłącznym elementem mojego życia. Gram na gitarze i trochę na perkusji. Byłem na
          wielu koncertach i na wielu jeszczę pragnę być. W wolnych chwilach sam staram się coś
          skomponować i nagrać w domowych warunkach, ale jeszcze dużo nauki przede mną. Jeżeli coś
          co nagram będzie na tyle dobre to na pewno się z Wami podzielę!
        </p>
      </div>
      <div className="panel codes" data-aos="fade-left">
        <div className="gradient" />
        <h3>Informatyka</h3>
        <p>
          Nie tylko zawodowo, ale prywatnie interesuję się nowościami technologicznymi. Rozwijam się
          w jezykach programowania takich jak Java Script i PHP. Zależy mi na poszerzaniu swoich
          umiejętności w szczególności w kierunku front.
        </p>
      </div>
      <div className="panel travel" data-aos="fade-right">
        <div className="gradient" />
        <h3>Podróże</h3>
        <p>
          I te małe i te większe. Lubię poznawać nowe miejsca. Zwiedzić świat. Koncerty są też
          dobrym pretekstem do ruszenia się z domu. Widziałem już sporo, ale apetyt rośnie na miarę
          jedzenia.
        </p>
      </div>
      <div className="panel psychology" data-aos="fade-left">
        <div className="gradient" />
        <h3>Psychologia</h3>
        <p>
          Nie... nie jestem psychologiem i do niego mi bardzo daleko. Ale lubię czytać, poznawać
          zachowanie człowieka. Poszerzać swoje horyzonty i być otwartym. Głownie interesują mnie
          osobowości człowieka i patrzenie jego na świat.
        </p>
      </div>
    </section>
  );
};
export default SectionInterests;
