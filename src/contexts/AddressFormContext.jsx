import React from "react";
import { createContext, useState } from "react";

export const AddressFormContext = createContext();

export const AddressFormContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userId: "",
    userContact: "",
    userAddress: {
      city: "",
      street: "",
      streetNumber: "",
    },
  });

  const handlerSetUserName = (event) => {
    setUserInfo({ ...userInfo, userName: event.target.valeu });
  };

  const handlerSetUserId = (event) => {
    setUserInfo({ ...userInfo, userId: event.target.valeu });
  };

  const handlerSetContact = (event) => {
    setUserInfo({ ...userInfo, userContact: event.target.valeu });
  };

  const handlerSetCity = (event) => {
    setUserInfo({ ...userInfo, userAddress: { city: event.target.valeu } });
  };

  const handlerSetStreet = (event) => {
    setUserInfo({ ...userInfo, userAddress: { street: event.target.valeu } });
  };

  const handlerSetStreetNumber = (event) => {
    setUserInfo({
      ...userInfo,
      userAddress: { streetNumber: event.target.valeu },
    });
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
