import { useContext, useEffect, useState, useRef } from 'react';

export const CustomAuthComponnts = {
  Header: () => {
    return (
      <div className="flex justify-center items-center my-10">
        <img
          src="https://docs.amplify.aws/assets/logo-dark.svg"
          alt="Amplify logo"
        />
      </div>
    );
  },

  Footer: () => {
    return (
      <div className="flex justify-center items-center my-10">
        <p>&copy; All Rights Reserved</p>
      </div>
    );
  },
};
