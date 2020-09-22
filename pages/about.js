import React from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import NoSSR from "react-no-ssr";
import Header from "../components/hashcraft/Header";
import Funfacts from "../components/hashcraft/Funfacts";
import Footer from "../components/hashcraft/Footer";
import GoTop from "../components/hashcraft/GoTop";
import PageTitle from "../components/hashcraft/PageTitle";
import AboutArea from "../components/hashcraft/AboutArea";
import WhyChoose from "../components/hashcraft/WhyChoose";
import CtaArea from "../components/hashcraft/AgencyCtaArea";

const About = () => {
  return (
    <NoSSR>
      <Preloader>
        <Placeholder>
          <div className="preloader">
            <div className="spinner"></div>
          </div>
        </Placeholder>
        <Header />
        <PageTitle title="About Us" />
        <AboutArea />
        <WhyChoose />
        <Funfacts />
        <CtaArea />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </Preloader>
    </NoSSR>
  );
};

export default About;
