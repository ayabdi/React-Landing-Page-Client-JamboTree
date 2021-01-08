import React from "react";
import TreeSeedling from "../assets/treeseedling.jpg";
import MatureTree from '../assets/treeshowase.jpg'
import VegetableFarm from '../assets/Vegetablefarm.jpg'
import Marigold from '../assets/marigold.jpg'
import HerbsNSpices from '../assets/herbsspices.jpg'
import Vines from '../assets/vines.jpg'
import JsonData from "../data.json";
const ProductDetails = () => {
  return (
    <section className="showcase">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={TreeSeedling} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="showcase-text">
              <h2>{JsonData.Products[0].name}</h2>
              <p>{JsonData.Products[0].text}  </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row" >
          <div className="col-xs-12 col-md-6 order">
            <img src={MatureTree} />
          </div>
          <div className="col-xs-12 col-md-6" >
            <div className="showcase-text">
              <h2>{JsonData.Products[1].name}</h2>
              <p>{JsonData.Products[1].text[0]} <br/><br/> {JsonData.Products[1].text[1]} </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={Vines} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="showcase-text">
              <h2>{JsonData.Products[2].name}</h2>
              <p>{JsonData.Products[2].text[0]} <br/><br/> {JsonData.Products[2].text[1]} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 order" >
            <img src={VegetableFarm} />
          </div>
          <div className="col-xs-12 col-md-6" >
            <div className="showcase-text" >
              <h2>{JsonData.Products[3].name}</h2>
              <p>{JsonData.Products[3].text[0]} <br/><br/> {JsonData.Products[3].text[1]} </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={HerbsNSpices} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="showcase-text">
              <h2>{JsonData.Products[4].name}</h2>
              <p>{JsonData.Products[4].text[0]} <br/><br/> {JsonData.Products[4].text[1]} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
