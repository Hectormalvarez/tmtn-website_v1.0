import React from "react";

const Header = () => {
  return (
    <header className="text-gray-900 pt-8 lg:pt-16 capitalize text-center lg:flex lg:align-middle justify-center mx-4">
      <div className="my-auto lg:grow">
        <p className="text-4xl lg:text-5xl">hector alvarez</p>
        <p className="text-lg">full stack development & UX \ UI</p>
      </div>
      <img src="/tmtn.png" alt="TMTN logo" className="max-w-md m-auto w-full" />
    </header>
  );
};

export default Header;
