import React from "react";
import "../scss/Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbarContainer">
        <div className="svgDoing">Logo</div>
        <div className="navbarContainerİn">
          <div>Biz&nbsp;Kimiz</div>
          <div>Hizmetler</div>
          <div>Yorumlar</div>
          <div>SSS</div>
          <div>Makaleler</div>
          <div>Yemek&nbsp;Tarifleri</div>
          <div>İletişim</div>
          <div>Dil&nbsp;Seçin</div>
        </div>
        <div className="pointButton">Randevu&nbsp;Alın</div>
      </nav>
    </>
  );
};

export default Navbar;
