import React  from "react";

export const Raiting = ({ cat }) => {
  // const [raitin, setRaitin] = useState(false);
  // const num1 = 4;
  const uwu = [
    "Adaptability",
    "Affection level",
    "Child friendly",
    "Grooming",
    "Intelligence",
    "Social needs",
    "Stranger friendly",
    "Hairless",
  ];

  // const Ncolor = () => {};
  return (
    <div>
      <div className="cat__raitin-container">
        {uwu.map((a) => {
          return (
            <div className="rating" key={a}>
              <p>{a} :</p>
              <span className="cat__raitin"></span>
              <span className="cat__raitin"></span>
              <span className="cat__raitin"></span>
              <span className="cat__raitin"></span>
              <span className="cat__raitin"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
