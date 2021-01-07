import React from 'react';
import NitroImage from '../nitro.jpg';

import TurboImage from '../turbo.jpg';

const About = () => {
    return (
        <main className=" bg-light">

        <section className="container">
                
                <h3 className="text-center">About Me!</h3>
                <hr />
                <p>As a full stack developer for the last 10+ years I have worked with product managers and owners
                    to developer fully functioning high quality websites. I have been fortunate to work on commercial software
                    products as well as internal tools to help businesses grow and succeed. 
                </p>
                <p>I enjoy working with all types of technology and try to spend my free time reading books, taking courses
                    and practicing various coding skills. The purpose of this site is to serve as a bit of a playground for 
                    things I would like to learn and get better at. Much of my php code remains at work and therefore is private.

                </p>
                <p>Personally, I am a mom to two boys, one of which is planning on studying Computer Science and the other, 
                    is leaning towards military for a few years. I have two amazing dogs Nitro (lab) 
                    and Turbo (chihuahua). My husband Tanner is a <a href="http://www.wightmaninspectiongroup.com">home inspector</a> in the Charlotte NC area. In our spare time we
                     love to golf.
                </p>
                <div className="row justify-content-md-center mb-3"> 
                    <div className="col-md-auto">
                        <img className="rounded" height="250px" src={NitroImage} />
                    </div>
                    <div className="col-md-auto">
                     <img className="rounded" height="250px" src={TurboImage} />
                    </div>
                </div>
                
                <p className="text-primary">Tech Used to develop this site: React, Redux, Webpack, Bootstrap, Github pages</p>
            </section>
                
                
            <section className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Server Side</th>
                            <th>Client Side</th>
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PHP<br />
                                Symfony<br />
                                Api Platform<br />
                               
                                Redis<br />
                                PHPUnit<br />
                                .NET (limited)<br />
                                Node (limited)<br />
                                Python (educationally)
                                </td>
                            <td>Javascript (ES6)<br />
                                JQuery<br />
                                React<br />
                                Angular<br />
                                Bootstrap<br />
                                Functional Testing<br />
                            </td>
                            <td>Rest API <br />
                                ElasticSearch<br />
                                WebPack<br />
                                Azure Cloud<br />
                                Git<br />
                                Jira<br /></td>
                        </tr>

                    </tbody>
                </table>
            </section>
            <section className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Previous Roles</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className="font-weight-bold">Backend Developer</p>
                                <p>Developed new features, fixed bugs, implemented unit tests.
                                    Deployed code using bamboo. Created and conusumed REST api's.
                                </p>
                                <p className="font-weight-bold">Frontend Developer</p>
                                <p>Worked on multiple teams writing code in Angular / React. Using designs from the UX teams
                                    html / css was implemented.
                                </p>
                               
                                <p className="font-weight-bold">Lead Developer</p>
                                <p>Worked with project managers to plan and execute new features.</p>
                             
                                <p className="font-weight-bold">Scrum Master</p>
                                <p>Helped manange the backlog and worked with the team to provide estimates, plan sprints and run standups.</p>

                            </td>
                        </tr>


                    </tbody>
                </table>
            </section>
            <section className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Education</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                B.S. Computer Science, George Mason University 1999<br />
                                M.S. Computer Science, East Carolina Universty - In Progress
                </td>
                        </tr>
                        <tr>
                            <td>Other Courses Taken:<br />
                                ES6 Javascript: The Complete Developers Guide - Stephen Grider<br />
                                Mastering React - Mosh Hamedani<br />
                                The Ultimate Redux Course - Mosh Hamedani<br />
                                The Complete Node.js Course
                </td>
                        </tr>

                    </tbody>
                </table>
            </section>


        </main>
    );
}

export default About;