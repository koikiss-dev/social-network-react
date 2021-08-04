import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ name, social, analytics, today, followers }) => {
  return (
    <div className="card_container fl_center">
      <div className="cont_top_container">
        <img src={social} alt="social" />
        <span>{name}</span>
      </div>
      <div className="cant_follower_container">
        <h2>{followers}</h2>
        <span>Followers</span>
      </div>
      <div className="cant_today_container">
        <img className="mg" src={analytics} alt="followers_data" />
        <aside
          className={
            analytics === "/static/media/up.359200b2.svg" ? "green" : "red"
          }
        >
          {today}
        </aside>
      </div>
    </div>
  );
};

Card.propTypes = {
  social: PropTypes.string,
  name: PropTypes.string,
  analytics: PropTypes.string,
  today: PropTypes.string,
  followers: PropTypes.string,
};

export default Card;
