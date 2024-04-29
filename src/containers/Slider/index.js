import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>

  // opérateur logique poistionner en ordre croissant alors qu'il doit être en ordre décroissant  
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    setTimeout(
      // supression de la "slide blanche" en incrtémentant l'index de "+1" et on vérifie sir bydatedesc existe en ajoutant "?"
      () => setIndex(index +1 < byDateDesc?.length ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">   
      {/* Suppresion des <></> qui encapsulait 2 éléments différents */}   
      {byDateDesc?.map((event, idx) => (
        // Changement de la key pour qu'elle soit unique pour chaque slide
        <div key={event.date}>
          <div            
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            {/* Attribut alt modifié pour avoir les données correspondants à l'image */}
            <img src={event.cover} alt={event.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((focus, radioIdx) => (
                <input
                  // Changement de la key pour qu'elle corresponde à la slide en cours
                  key={focus.date}
                  type="radio"
                  name="radio-button"
                  /*
                    Remplacement de idx par index pour indiquer sur quelle image on se trouve 
                  */
                  checked={index === radioIdx}
                  // Ajout de readOnly pour retirer erreur console
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

