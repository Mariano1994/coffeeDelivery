import React, { useState } from "react";
const Exemple = () => {
  const [isLogin, setIsLogin] = useState("false");

  const hanlderLoginButton = () => {
    setIsLogin((login) => !login);
  };
  return (
    <>
      <h1>My Exemple</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quia
        magni, qui vel ipsa tenetur cupiditate dicta dignissimos laudantium id
        ea fugit nam perspiciatis voluptates alias in porro similique.
        Distinctio.
      </p>
      ;
      <div>
        <button onClick={hanlderLoginButton}>
          {isLogin ? "Login" : "Logout"}
        </button>
      </div>
    </>
  );
};

export default Exemple;
