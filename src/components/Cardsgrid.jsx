import React from "react";
import PropTypes from "prop-types";
import "./card_grid.css";
const Cardsgrid = ({ title, contTitle, logo, arrow, dataNow }) => {
  return (
    <div className="grid_container">
      <div className="cont_top">
        <p>{title}</p>
        <img src={logo} alt="social" />
      </div>
      <div className="cont_down">
        <p>{contTitle}</p>
        <div className="data">
          <img className="mg" src={arrow} alt="arrow" />
          <aside
            className={
              arrow === "/static/media/up.359200b2.svg" ? "green" : "red"
            }
          >
            {dataNow}{" "}
          </aside>
        </div>
      </div>
    </div>
  );
};

Cardsgrid.propTypes = {
  title: PropTypes.string,
  contTitle: PropTypes.string,
  logo: PropTypes.string,
  arrow: PropTypes.string,
  dataNow: PropTypes.string,
};

export default Cardsgrid;
