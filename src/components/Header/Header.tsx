import React from "react";
import { ArrowBack } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {
  headerText: string,
  hasHistory: boolean
}

export const Header: React.FC<HeaderProps> = ({ headerText, hasHistory }) => {
  let navigate = useNavigate();

  return (
    <header className="header">
      {
        hasHistory &&
        <button className="header__button-back" type="button" onClick={() => { navigate(-1) }}>
          <ArrowBack />
        </button>
      }
      <h1 className="header__title">{headerText}</h1>
    </header>
  )
}