import React from "react";
import Layout from "../components/layout";
import aboutStyle from "../styles/about.styles.css";

const About = () => {
  return (
    <Layout>
      <h2>My name is Joseph, nice to meet you!</h2>

      <div className={aboutStyle.main}>
        <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}>

          </div>
        </div>
        <div className={aboutStyle.derecha}>
          <p>I am a self-taught developer in Development.</p>
          <p>Currently I create websites as a
            freelancer whenever I have the opportunity.</p>
          <p>I am active member of the #DEVcommunity online, and I write weekly
            blog posts about topics I am
            learning or experiences I had.</p>
          <p>When I am not coding, you can find me tweeting to #100DaysOfCoding
            or watching Nat Geo Wild.</p>

          <div className={aboutStyle.socialContainer}>
            <h3>Some of the tech I like</h3>
            <img alt="javascript" className="logo" src="./logos/javascript.svg" />
            <img alt="Gatsby" className="logo" src="./logos/gatsby.svg" />
            <img alt="GraphQl" className="logo" src="./logos/graphql.svg" />
            <img alt="React" className="logo" src="./logos/react.svg" />
            <img alt="nodeJs" className="logo" src="./logos/nodejs-icon.svg" />
            <img alt="Mongo" className="logo" src="./logos/mongodb.png" />
            <img alt="Sass" className="logo" src="./logos/sass-1.svg" />
            <img alt="Laravel" className="logo" src="./logos/laravel.png" />
            <img alt="Mysql" className="logo" src="./logos/mysql.png" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;