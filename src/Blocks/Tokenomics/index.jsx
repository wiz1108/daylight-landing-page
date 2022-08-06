import React from "react";
import Icon from "../../components/Icon";
import "./style.css";
import icon1 from "../../assets/img/icons/stone1.svg";
import icon6 from "../../assets/img/icons/stone6.svg";
import icon7 from "../../assets/img/icons/stone7.svg";
import robotArm from "../../assets/img/icons/robotArm.svg";
import security from "../../assets/img/icons/security.svg";
import Button from "../../components/Button";
import Card from "./Card";

const Tokenomics = () => {
  return (
    <div className="tokenomics-container aic" id="tokenomics">
      <div className="tokenomics--left aic">
        <Icon
          imgsrc={icon1}
          classnamestyle="tokenomics--left-img aic"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        />
        <div
          className="tokenomics--left-title"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          Tokenomics
        </div>
        <div
          className="tokenomics--left-description"
          data-aos="fade-up-down"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          $DAYLIGHT is an elastic supply token that runs on the Avalanche chain
          and rewards holders through conventional, sustained positive rebases,
          with an APY of 160,589.28%. Interest rewards are compounded every 30
          minutes for every web3 wallet holding any $DAYLIGHT tokens.
        </div>
        <Button
          style={{ width: "100%" }}
          data-aos="fade-up-down"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
        >
          Buy Now
        </Button>
      </div>
      <div className="tokenomics--right aic">
        <Card
          img={icon6}
          title="Liquidity First"
          desc="To boost token liquidity and lower price volatility, swaps with dynamic fees are included. The sustainability of our rewards and mission is significantly increased as a result."
        />
        <Card
          img={icon7}
          title="Treasury"
          desc="The Treasury contract is a simple vault implementation holding all the funds collected by the protocol. If for instance a user purchases a token amount, the token amount swapped is fully taken in by the treasury and converted to stable-coin into the Treasury. New tokens will be minted based on the RFV of the treasury assets."
        />
        <Card
          img={robotArm}
          title="Ecosystem Evolution"
          desc="Daylight Protocol is a decentralized auto-staking ecosystem with incentivized extensions that has been strategically created to disrupt decentralized earning and propel freedom of financial limitations, while rewarding users for contributions to the ecosystem with an appreciated earning over time. "
        />
        <Card
          img={security}
          title="Risk Free Value"
          desc="Risk Free Value – is a standalone vault that collects funds to support and stabilize the Liquidity pool. This is particularly utilized in the event of a sharp sell-off that might drain the Daylight liquidity pool. The RFV provides a liquidity reserve and prevents this from happening during a sharp sell-off."
        />
      </div>
    </div>
  );
};

export default Tokenomics;
