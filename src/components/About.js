import React from "react";
import "./css/About.scss";
import aboutimage from '../assets/aboutphoto.png'
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={aboutimage} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Jambo Tree is a woman-led, leading grower and exporter of high
                quality, tree seedlings, plants & flowers, herbs, exotic fruits
                and vegetables from Kenya. We specialize in growing and
                conserving African indigenous tree species such as the Acacias &
                Adansonias. We have sold tree seedlings and mature trees to
                various clients across the world to create African themed parks
                and Garden landscapes.<br/> <br/>
                Our Farms are located at the foothills of
                Mount Kilimanjaro, an area inhabited by the Masaai Tribe. We are
                an Ethical and fair-trade company that creates local employment
                for the most vulnerable members of the local community such as
                the women, youth and the disabled. <br/> <br/>
                All of our products undergo vert strict quality checks and compliance of all required international standards. We observe high degree of hygiene standards in all our processes that includes,  production, packaging, and transportation. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
