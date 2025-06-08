import "./title.css";
import Card from "../Card/Card1_3";
import React from "react";
import LinksCard from "../Links/LinksCard";
import Header from "./Header";

const Title = (props) => {
  return (
    <div className="container">
      <Header></Header>

      <section className="section_One">
        <p className="wiredHeadPhones">Наушники</p>
        <div className="CardTovar">
          <div className="Card-1-3">
            {props.costs.map((cost) => (
              <Card
                costsbutton={cost}
                key={cost.id}
                src={cost.img}
                cardTitle={cost.title}
                cardPrice={cost.price}
                cardRate={cost.rate}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section_Twoo">
        
          <h1 className="headPhonesText">Беспроводные Наушники</h1>
          <div className="Card-1-3">
            {props.wcosts.map((cost) => (
              <Card
                costsbutton={cost}
                key={cost.id}
                src={cost.img}
                cardTitle={cost.title}
                cardPrice={cost.price}
                cardRate={cost.rate}
              />
            ))}
          </div>
        
      </section>
      <footer>
        <LinksCard></LinksCard>
      </footer>
    </div>
  );
};
export default Title;
