import React from "react";
import "../scss/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbarContainer">
        <div>Logo</div>
        <div className="navbarContainerİn">
          <div>Biz Kimiz</div>
          <div>Hizmetler</div>
          <div>Yorumlar</div>
          <div>SSS</div>
          <div>Makaleler</div>
          <div>Yemek Tarifleri</div>
          <div>İletişim</div>
        </div>
        <div>Randevu Alın</div>
      </nav>
    </>
  );
};

export default Navbar;
