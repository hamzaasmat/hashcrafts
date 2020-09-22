import React from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import NoSSR from "react-no-ssr";
import Header from "../components/hashcraft/Header";
import MainBanner from "../components/hashcraft/MainBanner";
import BoxArea from "../components/hashcraft/BoxArea";
import ServicesArea from "../components/hashcraft/ServicesArea";
import Features from "../components/hashcraft/Features";
import RecentWork from "../components/hashcraft/RecentWork";
import Feedback from "../components/hashcraft/Feedback";
import Funfacts from "../components/hashcraft/Funfacts";
import CtaArea from "../components/hashcraft/AgencyCtaArea";
import Footer from "../components/hashcraft/Footer";
import GoTop from "../components/hashcraft/GoTop";

const Index = () => {
  return (
    <NoSSR>
      <Preloader>
        <Placeholder>
          <div className="preloader">
            <div className="spinner"></div>
          </div>
        </Placeholder>
        <Header />
        <MainBanner />
        <BoxArea />
        <ServicesArea />
        <Features />
        <Funfacts />
        <RecentWork />
        <Feedback />
        <CtaArea />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </Preloader>
    </NoSSR>
  );
};

export default Index;

// "start": "NODE_ENV=production node server.js -p $PORT"
