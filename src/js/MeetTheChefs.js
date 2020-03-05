import React from "react";
// import secretSuppersBackground from "../img/backgorund-secret-suppers.jpg";
// import secretSuppersLockup from "../img/lockups/secret-suppers-lockup--white.png";
import ButtonPrimary from "./components/ButtonPrimary";

const MeetTheChefs = () => {
  return (
    <section className="MeetTheChefs">
      <div className="container2">
        <div className="content">
          <div className="image-holder content-cover">
            {/* <img src={secretSuppersBackground} alt="Red Rock Deli, Secret Suppers" /> */}
            <div className="gradient-overlay" />
          </div>

          {/* <img className="lockup" src={secretSuppersLockup} alt="Red Rock Deli, Secret Suppers" /> */}

          <div class="copy">
            <h2>MEET THE CHEFS</h2>
            <p>
              A series of dining experiences hosted by some of Australia's most loved chefs with specially crafted menus
              inspired by Red Rock Deli unique flavour combinations.
            </p>
          </div>
          <ButtonPrimary buttonText="Primary CTA Button" />
        </div>
      </div>
    </section>
  );
};

export default MeetTheChefs;
