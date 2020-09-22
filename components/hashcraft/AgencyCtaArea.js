import React, { Component } from 'react';
import Link from 'next/link';

class AgencyCtaArea extends Component {
    render() {
        return (
            <div className="agency-cta-area ptb-80">
                <div className="container">
                    <div className="agency-cta-content">
                        <h2>Do you have any project?</h2>
                        <p>Don't hesitate to contact us</p>

                        <Link href="/contact#quotes">
                            <a className="btn btn-gradient">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgencyCtaArea;