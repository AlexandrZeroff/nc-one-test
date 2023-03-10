import "./AppScreen.scss";
import React from "react";
import Favorites from "../favorites/Favorites";
import GoodsList from "../goodsList/GoodsList";


const AppScreen = () => {
  return (
    <section id="screen">
      <div className="p-default grid grid-cols-4 gap-x-2 screen-wrapper">
        <Favorites />
        <GoodsList styles="col-span-3" />
      </div>
    </section>
  );
};

export default AppScreen;
