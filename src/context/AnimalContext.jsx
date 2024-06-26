import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext'; 

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const { user, updateUser } = useContext(UserContext);

  const [animals, setAnimals] = useState(user.animais || []);

  useEffect(() => {
    setAnimals(user.animais || []);
  }, [user]);

  const addAnimal = (animal) => {
    const updatedAnimals = [...animals, animal];
    setAnimals(updatedAnimals);
    updateUser({ ...user, animais: updatedAnimals }); 
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
