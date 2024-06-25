import React, { createContext, useState } from 'react';

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState([]);

  const addAnimal = (animal) => {
    setAnimals([...animals, animal]);
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
