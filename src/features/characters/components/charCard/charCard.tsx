/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from "react";
import { CharApiRepo } from "../../services/char.api.repo";
import { UseChars } from "../../hooks/use.characters";
import "./charCard.css";
export const CharCard = () => {
  const repo = useMemo(() => new CharApiRepo(), []);
  const { chars } = UseChars(repo);
  return (
    <ul className="characters-list row list-unstyled">
      {chars.map((item) => (
        <li className="character col">
          <div className="card character__card">
            <img
              src={item.img}
              alt="Nombre y familia del personaje"
              className="character__picture card-img-top"
            />
            <div className="card-body">
              <h2 className="character__name card-title h4">
                Nombre: {item.name}
                Familia: {item.bloodline}
              </h2>
              <div className="character__info">
                <ul className="list-unstyled">
                  <li>Edad: {item.age} años</li>
                  <li>
                    Estado: {item.category}
                    <i className="fas fa-thumbs-down"></i>
                    <i className="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div className="character__overlay">
                <ul className="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div className="character__actions">
                  <button className="character__action btn">habla</button>
                  <button className="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i className="emoji"></i>
          </div>
        </li>
      ))}
    </ul>
  );
};
