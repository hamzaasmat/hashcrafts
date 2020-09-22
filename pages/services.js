import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/hashcraft/Header'
import Footer from '../components/hashcraft/Footer'
import GoTop from '../components/hashcraft/GoTop'
import PageTitle from '../components/hashcraft/PageTitle'
import ServicesContent from '../components/hashcraft/Services'
import CtaArea from "../components/hashcraft/AgencyCtaArea";

class Features extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header />
                <PageTitle title='Services'/>
                <ServicesContent />
                <CtaArea />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Features