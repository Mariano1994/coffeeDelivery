import React from "react";
import { createContext, useState } from "react";

export const AddressFormContext = createContext();

export const AddressFormContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userId, setUsertId] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userStreetNumber, setUserStreetNumber] = useState("");

  const handlerSetUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlerSetUserId = (event) => {
    setUsertId(event.target.value);
  };

  const handlerSetContact = (event) => {
    setUserContact(event.target.value);
  };

  const handlerSetCity = (event) => {
    setUserCity(event.target.value);
  };

  const handlerSetStreet = (event) => {
    setUserStreet(event.target.value);
  };

  const handlerSetStreetNumber = (event) => {
    setUserStreetNumber(event.target.value);
  };

  const userInfo = {
    userName,
    userId,
    userContact,
    userCity,
    userStreet,
    userStreetNumber,
  };

  return (
    <AddressFormContext.Provider
      value={{
        userInfo,
        handlerSetCity,
        handlerSetContact,
        handlerSetStreet,
        handlerSetStreetNumber,
        handlerSetUserId,
        handlerSetUserName,
      }}
    >
      {children}
    </AddressFormContext.Provider>
  );
};
