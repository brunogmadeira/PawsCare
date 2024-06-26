import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext'; // Certifique-se de que o caminho está correto

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const { user, updateUser } = useContext(UserContext); // Obtém o usuário e a função de atualização do contexto de usuário

  const [animals, setAnimals] = useState(user.animais || []); // Estado inicial recebe os animais do usuário ou um array vazio

  useEffect(() => {
    setAnimals(user.animais || []);
  }, [user]);

  const addAnimal = (animal) => {
    const updatedAnimals = [...animals, animal];
    setAnimals(updatedAnimals);
    updateUser({ ...user, animais: updatedAnimals }); // Atualiza o contexto de usuário com a lista de animais atualizada
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
