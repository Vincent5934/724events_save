export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// après modification dans le fichier slider, une erreur de mois restait présente
// en effet le tableau ne démarre pas à 0 ==> ajout +1 à la propriété Months pour corriger 
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
