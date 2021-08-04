import React from "react";
import Card from "./Card";
import instagram from "../instagram.svg";
import twitter from "../twitter.svg";
import facebook from "../facebook.svg";
import youtube from "../youtube.svg";
import up from "../up.svg";
import down from "../down.svg";

const Cards = () => {
  const data = [
    {
      nombre: "@nathanf",
      url: facebook,
      analytics: up,
      analyticsInfo: "12 Today",
      followers: 1987,
    },
    {
      nombre: "@nathanf",
      url: twitter,
      analytics: up,
      analyticsInfo: "99 Today",
      followers: 1044,
    },
    {
      nombre: "@realnathanf",
      url: instagram,
      analytics: up,
      analyticsInfo: "1099 Today",
      followers: "11k",
    },
    {
      nombre: "Nathan f.",
      url: youtube,
      analytics: down,
      analyticsInfo: "144 Today",
      followers: 8239,
    },
  ];

  return (
    <>
      {data.map(({ url, nombre, analytics, analyticsInfo, followers }) => {
        return (
          <Card
            name={nombre}
            social={url}
            analytics={analytics}
            followers={followers}
            today={analyticsInfo}
          />
        );
      })}
    </>
  );
};

export default Cards;
