import React from "react";
import Cardsgrid from "./Cardsgrid";
import instagram from "../instagram.svg";
import twitter from "../twitter.svg";
import facebook from "../facebook.svg";
import youtube from "../youtube.svg";
import up from "../up.svg";
import down from "../down.svg";
const Cardg = () => {
  const dataGrid = [
    {
      title: "Page Views",
      constTitle: "87",
      logo: facebook,
      arrow: up,
      dataNow: "3%",
    },
    {
      title: "Likes",
      constTitle: "52",
      logo: facebook,
      arrow: down,
      dataNow: "2%",
    },
    {
      title: "Likes",
      constTitle: "5462",
      logo: instagram,
      arrow: up,
      dataNow: "2257%",
    },
    {
      title: "Profile Views",
      constTitle: "52k",
      logo: instagram,
      arrow: up,
      dataNow: "1375%",
    },
    {
      title: "Retweets",
      constTitle: "117",
      logo: twitter,
      arrow: up,
      dataNow: "303%",
    },
    {
      title: "Likes",
      constTitle: "507",
      logo: twitter,
      arrow: up,
      dataNow: "553%",
    },
    {
      title: "Likes",
      constTitle: "107",
      logo: youtube,
      arrow: down,
      dataNow: "19%",
    },
    {
      title: "Total Views",
      constTitle: "1407",
      logo: youtube,
      arrow: down,
      dataNow: "12%",
    },
  ];
  return (
    <>
      {dataGrid.map(({ title, constTitle, logo, arrow, dataNow }) => {
        return (
          <Cardsgrid
            title={title}
            contTitle={constTitle}
            logo={logo}
            arrow={arrow}
            dataNow={dataNow}
          />
        );
      })}
    </>
  );
};
export default Cardg;
