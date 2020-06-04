import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
    </div>
  );
};

export default Header;
