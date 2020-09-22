import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <section className="iot-services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Core Modules</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <Icon.Monitor />
                                </div>

                                <h3>Multiple Dashboard & Databases</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.DownloadCloud /></i>
                                </div>

                                <h3>Import Data & Backup</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.CreditCard /></i>
                                </div>

                                <h3>Income, Expense & Inventory</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.CheckSquare /></i>
                                </div>

                                <h3>Event Management</h3>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.Trello /></i>
                                </div>

                                <h3>Hostel Management</h3>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.BookOpen /></i>
                                </div>

                                <h3>Library Management</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.Truck /></i>
                                </div>

                                <h3>Transport Management</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.Users/></i>
                                </div>

                                <h3>User Management</h3>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.UserPlus/></i>
                                </div>

                                <h3>Online Admission</h3>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.Calendar /></i>
                                </div>

                                <h3>Online Attendance Management</h3>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.DollarSign /></i>
                                </div>

                                <h3>Online Fee Collection</h3>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.Edit3 /></i>
                                </div>

                                <h3>Online Exam Management</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.Share /></i>
                                </div>

                                <h3>Syllabus & Media Shearing</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-repair-services">
                                <div className="icon">
                                    <i><Icon.TrendingUp /></i>
                                </div>

                                <h3>Grading & Promotion System</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
