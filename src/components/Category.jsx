import React from "react";
import "./Category.css";
import group from "../assets/Group.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import rectangle from "../assets/Rectangle.png"
import boxshadow from "../assets/box-shadow.png"
import redshape from "../assets/redshape.png"

const Category = () => {
  return (
    <section className="category-section">
        <img className="group" src={group} alt="" />
      <div className="category">
        <h2 className="category-subtitle">CATEGORY</h2>
        <h1 className="category-title">We Offer Best Services</h1>
        <div className="category-container">

          <div className="card">
            <img className="card-img1" src={icon1} alt="image of icon1" />
            <img src={rectangle} alt="reactangle image for back" className="rectangle" />
            <h3 className="card-title">Calculated Weather</h3>
            <p className="card-contents">
              Built Wicket longer admire do barton vantity itself do in it.{" "}
            </p>
           
          </div>

          <div className="special">
          <div className="card">
            <img className="card-img2" src={icon2} alt="image of icon2" />
            <img src={rectangle} alt="reactangle image for back" className="rectangle" />
            <h3 className="card-title">Calculated Weather</h3>
            <p className="card-contents">
              Built Wicket longer admire do barton vantity itself do in it.{" "}
            </p>
          </div>
          <img src={boxshadow} className="box-shadow" alt="box-shadow" />
          <img src={redshape} className="redshape" alt="red shape for left bottom" />
          </div>

          <div className="card">
            <img className="card-img3" src={icon3} alt="image of icon3" />
            <img src={rectangle} alt="reactangle image for back" className="rectangle" />
            <h3 className="card-title">Calculated Weather</h3>
            <p className="card-contents">
              Built Wicket longer admire do barton vantity itself do in it.{" "}
            </p>
          </div>

          <div className="card">
            <img className="card-img4" src={icon4} alt="image of icon4" />
            <img src={rectangle} alt="reactangle image for back" className="rectangle" />
            <h3 className="card-title">Calculated Weather</h3>
            <p className="card-contents">
              Built Wicket longer admire do barton vantity itself do in it.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
