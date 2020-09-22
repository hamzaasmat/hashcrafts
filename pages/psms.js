import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/hashcraft/Header'
import Footer from '../components/hashcraft/Footer'
import GoTop from '../components/hashcraft/GoTop'
import PageTitle from '../components/hashcraft/PageTitle'
import DetailsBody from '../components/hashcraft/portfolio/sms/DetailsBody'
import CtaArea from "../components/hashcraft/AgencyCtaArea";

export default () => (
    <Preloader>
        <Placeholder>
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        </Placeholder>
        <Header />
        <PageTitle title='School Information System'/>
        <DetailsBody />
        <CtaArea />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </Preloader>
)
