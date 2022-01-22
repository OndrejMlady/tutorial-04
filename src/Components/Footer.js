import React from "react";
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa"; 

const Footer = ({ width }) => {
  return (
    <footer>
            {width < 768 ? <FaMobileAlt className="iconStyles"/>
        : width < 992 ? <FaTabletAlt className="iconStyles"/>
          : <FaLaptop className="iconStyles"/> 
      }
    </footer>
  );
};

export default Footer;
