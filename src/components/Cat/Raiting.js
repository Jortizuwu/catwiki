import React, { useState }  from "react";

export const Raiting = ({ cat }) => {
  const [raitin, setRaitin] = useState(true);
  
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

  return (
    <div>
      <div className="cat__raitin-container">
        {uwu.map((a) => {
          return (
            <div className="rating" key={a}>
              <p>{a} :</p>
              <div className="rating__pun">
                <span className={(raitin) ? "cat__raitin raitin" : "cat__raitin"}></span>
                <span className={(raitin) ? "cat__raitin raitin" : "cat__raitin"}></span>
                <span className={(raitin) ? "cat__raitin raitin" : "cat__raitin"}></span>
                <span className={(!raitin) ? "cat__raitin raitin" : "cat__raitin"}></span>
                <span className={(!raitin) ? "cat__raitin raitin" : "cat__raitin"}></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
