import React from "react";
import {
  Navbar,
  Hero,
  Memory,
  Explore,
  Advertise,
  Pricings,
  Banner,
  Footer,
  Newslatter,
} from "./components/CompExport";
import {
  navlinks,
  hero,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./data/travelData";

const App = () => {
  // console.log(placesAPI);
  // console.log(navlinks);

  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty Of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
