import React from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import Header from "../components/hashcraft/Header";
import Footer from "../components/hashcraft/Footer";
import GoTop from "../components/hashcraft/GoTop";
import PageTitle from "../components/hashcraft/PageTitle";
import ProjectContent from "../components/hashcraft/portfolio/ProjectContent";
import CtaArea from "../components/hashcraft/AgencyCtaArea";

class Project extends React.Component {
  render() {
    return (
      <Preloader>
        <Placeholder>
          <div className="preloader">
            <div className="spinner"></div>
          </div>
        </Placeholder>
        <Header />
        <PageTitle title="Our Portfolio" />
        <ProjectContent />
        <CtaArea />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </Preloader>
    );
  }
}

export default Project;
