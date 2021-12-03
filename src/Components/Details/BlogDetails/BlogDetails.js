import React from 'react';
import './BlogDetails.css';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent';
import NavBar from '../../Shared/NavBar/NavBar';
import MockInterview from '../../../images/mock-interview.jpeg';
import HtmlCssInterview from '../../../images/html & css question.jpeg';
import REACT from '../../../images/REACT.png'
import ReactInterview from '../../../images/REACTinterview.jpeg';
import Router from '../../../images/Router.png';
import Javascript from '../../../images/javascript-summary.png';
import JavascriptCoding from '../../../images/javascript-coding-interview.jpeg';
import JavaScriptTricks from '../../../images/javascript-tricks.jpeg';
import JavaScriptCore1 from '../../../images/javascript-core-topic-1.jpeg';
import JavaScriptCore2 from '../../../images/javascript-core-topic-2.png';
import JavaScriptInterview1 from '../../../images/javascript-interview-question-1.jpeg';
import JavaScriptInterview2 from '../../../images/javascript-interview-question-2.jpeg';


const BlogDetails = () => {
    return (
        <section className="blog-background container">
            {/* navbar */}
            <NavBar />

            {/* All-Blogs */}
            <main className="mb-5 mt-2">
                <h3 className="blog-title text-white mb-5"> MY BLOGS</h3>

                {/* Blog-Card-Start */}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3">
                    {/* javaScript */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/javascript-summary-a48033ba2ee5" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={Javascript} className="card-img-top img-fluid" alt="Javascript" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Introduction To javaScript
                                    </h5>
                                    <p className="card-text">JavaScript is a single thread, prototype based programming  language that support multiple programming.
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                        </div>
                                        <div>
                                            <small>August 30 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* REACT */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/introduction-to-react-js-d39e1b00c443" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={REACT} className="card-img-top img-fluid" alt="REACT" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Introduction To React
                                    </h5>
                                    <p className="card-text">React is a free and open-source front-end JavaScript library for building user interfaces or UI components...
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>React.js</span>
                                        </div>
                                        <div>
                                            <small>May 07 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Router */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/getting-started-with-react-router-64d052bbdc17" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={Router} className="card-img-top img-fluid" alt="Router" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Introduction React Route
                                    </h5>
                                    <p className="card-text">What you will know from this article : What is React Router, Install and configure React Router, Static Routing..
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between  text-white">
                                        <div className="technology">
                                            <span>React Router</span>
                                        </div>
                                        <div >
                                            <small>August 31 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* 2ND-card-section*/}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3">


                    {/* 10-react-interview-questions */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/top-10-react-interview-questions-27e570c094ec?source=friends_link&sk=e2c1728d62092d32b5e2b62870561124" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={ReactInterview} className="card-img-top img-fluid" alt="ReactInterview" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Top 10 React interview Questions
                                    </h5>
                                    <p className="card-text">What are the major features of React, What are the advantages of React..
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>React.js</span>
                                        </div>
                                        <div>
                                            <small>October 23 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/* MockInterview */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/the-top-10-questions-asked-to-me-in-front-end-mock-interview-c04e9211d98c?source=friends_link&sk=04aeb95716a06444fed3b99301472baa" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={MockInterview} className="card-img-top img-fluid" alt="MockInterview" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        The top 10 questions asked to me in Front-end mock interview
                                    </h5>
                                    <p className="card-text">How Event Handler work in javaScript, What is difference between Regular function and arrow function...
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                            <span>React.js</span>
                                        </div>
                                        <div>
                                            <small>November 29 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/* HtmlCssInterview */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/top-10-html-css-interview-questions-31824c2e8a25?source=friends_link&sk=556268eacdd1e4b83e98f80ebf7d274b" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={HtmlCssInterview} className="card-img-top img-fluid" alt="HtmlCssInterview" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Top 10 HTML, CSS interview Questions
                                    </h5>
                                    <p className="card-text">Define Semantic elements, Why meta tags are used in HTML..
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between  text-white">
                                        <div className="technology">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                        </div>
                                        <div >
                                            <small>October 02 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>


                {/* 3rd-Card-Section */}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3">

                    {/* JavaScriptInterview1 */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/top-10-javascript-interview-question-9cf79f8e4557" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={JavaScriptInterview1} className="card-img-top img-fluid" alt="JavaScriptInterview1" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Top 10 JavaScript Interview Questions — Part -1
                                    </h5>
                                    <p className="card-text">What are differences between == and === , Explain Event Bubbling..
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                        </div>
                                        <div>
                                            <small>October 14 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/* JavaScriptInterview2 */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/top-10-javascript-interview-questions-part-2-379477654aa6" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={JavaScriptInterview2} className="card-img-top img-fluid" alt="JavaScriptInterview2" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Top 10 JavaScript Interview Questions — Part -2
                                    </h5>
                                    <p className="card-text">What is the 'strict' mode in javascript, How do you Check if an object is an array or not...
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                        </div>
                                        <div>
                                            <small>November 16 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/* JavascriptCoding */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/common-javascript-interview-coding-challenge-55df1adabc47" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={JavascriptCoding} className="card-img-top img-fluid" alt="JavascriptCoding" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Common JavaScript Interview Coding Challenge
                                    </h5>
                                    <p className="card-text">Make a function that take two string as argument and determine these are Anagram or not..
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between  text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                        </div>
                                        <div >
                                            <small>November 01 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* 4th-Card-Section */}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3">

                    {/* JavaScriptTricks */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/10-tricky-things-of-javascript-b4db795aba93" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={JavaScriptTricks} className="card-img-top img-fluid" alt="JavaScriptTricks" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        10 Tricky things of JavaScript
                                    </h5>
                                    <p className="card-text">Find the largest elemnt of an array, Explain how to Remove duplicate item from an array..
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                        </div>
                                        <div>
                                            <small>May 08 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/* JavaScriptCore1 */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/10-javascript-core-topics-that-you-should-know-9091a3b0ad79" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={JavaScriptCore1} className="card-img-top img-fluid" alt="JavaScriptCore1" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        10 JavaScript core topics__Part-1
                                    </h5>
                                    <p className="card-text">Today I am going to talk about 10 JavaScript tricky topics that you must know for better learning JavaScript..
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                        </div>
                                        <div>
                                            <small>May 05 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/* JavaScriptCore2 */}
                    <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/10-javascript-core-topics-that-you-should-know-part-2-8ff444810c4" target="_blank">
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark">
                                <div className="inner">
                                    <img src={JavaScriptCore2} className="card-img-top img-fluid" alt="JavaScriptCore2" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        10 JavaScript core topics__Part-2
                                    </h5>
                                    <p className="card-text">Hello, I am here to share with you some important topics of JavaScript that you should know as a JavaScript developer. So, let’s start...
                                    </p>
                                    <div className="card-footer d-flex align-content-center justify-content-between  text-white">
                                        <div className="technology">
                                            <span>JavaScript</span>
                                        </div>
                                        <div >
                                            <small>May 06 2021</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </main>



            {/* footer */}
            <FooterDifferent />

        </section>
    );
};

export default BlogDetails;