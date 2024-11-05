import React from "react";
import "../Service/Service.scss";
import service1 from "../images/service-1.png";
import service2 from "../images/service-2.png";
import service3 from "../images/service-3.png";
import service4 from "../images/service-4.png";

function Service() {
  return (
    <div className="service-container-style">
      <div className="row service-section-box">
        <div className="col-6 col-md-3 service-section-item">
          <img src={service1} alt="service1" width={100} height={100} />
          <p className="service-section-item-step">
            <span>Step 1</span>
          </p>
          <h3>Filter</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell your NFTs for money
          </p>
        </div>
        <div className="col-6 col-md-3 service-section-item">
          <img src={service2} alt="service2" width={100} height={100} />
          <p className="service-section-item-step">
            <span>Step 2</span>
          </p>
          <h3>Discover</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell your NFTs for money
          </p>
        </div>
        <div className="col-6 col-md-3 service-section-item">
          <img src={service3} alt="service3" width={100} height={100} />
          <p className="service-section-item-step">
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell your NFTs for money
          </p>
        </div>
        <div className="col-6 col-md-3 service-section-item">
          <img src={service4} alt="service4" width={100} height={100} />
          <p className="service-section-item-step">
            <span>Step 4</span>
          </p>
          <h3>Start Trading</h3>
          <p>
            Connect with wallet, discover, buy NFTs, sell your NFTs for money
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
