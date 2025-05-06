import React from 'react';
import Detect from './Detect';
import react from './logoicons/react.png';
import tf from './logoicons/tf.png';
import keras from './logoicons/keras.png';
import colab from './logoicons/colab.png';
import './style/modern-header.css';
import './style/modern-hero.css';
import './style/modern-features.css';
import './style/modern-demo.css';
import './style/modern-tech.css';
import './style/modern-footer.css';

const Landing = () => {
    return (
        <div className="App">
        <div id="overlayer"></div>

        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>

          <header className="site-navbar py-4 js-sticky-header site-navbar-target modern-header" role="banner">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <div className="site-branding">

                  <div className="site-title">
                    <h3>WildEye</h3>
                    <span className="site-tagline">Wildlife Detection AI</span>
                  </div>
                </div>

                <div className="nav-container">
                  <nav className="site-navigation position-relative" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav d-none d-xl-flex">
                      <li><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                      <li><a href="#features-section" className="nav-link"><span>Features</span></a></li>
                      <li><a href="#demo-section" className="nav-link"><span>Demo</span></a></li>
                    </ul>
                  </nav>
                </div>

                <div className="ml-auto">
                  <a href="#demo-section" className="btn-try-now">
                    <span>Try Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a href="/#" className="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right">
                    <span className="icon-menu h3"></span>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="modern-hero-section" id="home-section">
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 hero-content" data-aos="fade-up">
                  <div className="hero-badge">AI-Powered Wildlife Detection</div>
                  <h1 className="hero-title">Identify Wildlife Species in Real-Time</h1>
                  <p className="hero-description">
                    WildEye is an advanced AI-powered wildlife detection and classification system designed to assist researchers, conservationists, and nature enthusiasts in identifying and tracking wildlife in real-time. Using the latest GoogleNet model, WildEye can accurately detect multiple animal species in images and videos, helping in wildlife monitoring, conservation efforts, and biodiversity studies.
                  </p>
                  <div className="hero-features">
                    <div className="hero-feature">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>High Accuracy Detection</span>
                    </div>
                    <div className="hero-feature">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Real-Time Processing</span>
                    </div>
                    <div className="hero-feature">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      <span>Multiple Species Detection</span>
                    </div>
                  </div>
                  <div className="hero-cta">
                    <a href="#demo-section" className="btn-primary">Try Demo</a>
                    <a href="#features-section" className="btn-secondary">Learn More</a>
                  </div>
                </div>

                <div className="col-lg-6 hero-image-container" data-aos="fade-up" data-aos-delay="100">
                  <div className="hero-image-wrapper">
                    <div className="hero-image-slider">
                      <img src={process.env.PUBLIC_URL +"/imgs/slide1.png"} alt="Wildlife Detection" className="hero-image active"/>
                      <img src={process.env.PUBLIC_URL +"/imgs/slide2.png"} alt="YOLO Detection" className="hero-image"/>
                      <img src={process.env.PUBLIC_URL +"/imgs/slide3.png"} alt="YOLOv8 Detection" className="hero-image"/>
                      <img src={process.env.PUBLIC_URL +"/imgs/slide4.png"} alt="YOLOv8n Detection" className="hero-image"/>
                    </div>
                    <div className="hero-image-controls">
                      <button className="hero-control prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      <div className="hero-indicators">
                        <span className="hero-indicator active"></span>
                        <span className="hero-indicator"></span>
                        <span className="hero-indicator"></span>
                        <span className="hero-indicator"></span>
                      </div>
                      <button className="hero-control next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br/><br/><br/><br/><br/>

          <div className="site-section section-1">
            <div className="container">
              <div className="row">

                <div className="col-lg-5 mr-auto mb-5">
                  <img src={process.env.PUBLIC_URL +"/imgs/Identification.png"} alt="Project" className="img-fluid"/>
                </div>

                <div className="col-lg-5 mr-auto mb-5"  data-aos="fade-up">
                  <div className="mb-5">
                    <h2 className="section-title">Real-time Wildlife Detection using Deep Learning</h2>
                    <p className="black-text">Real-time Wildlife Detection using Deep Learning is a wildlife species identification and offence registration web app.<br/>In the Project system, images captured by cameras or other devices are passed as input to the GoogleNet algorithm for object detection and recognition. By feeding the images through the trained GoogleNet model, Project can identify and localize wildlife species present in the images.</p>
                    <ul className="ul-check list-unstyled success">
                      <li className="black-text">Ease Of Use</li>
                      <li className="black-text">Saves Manual Labour</li>
                      <li className="black-text">Brilliant Accuracy</li>
                      <li className="black-text">Fully Automatic Animal Spotting System</li>
                      <li className="black-text">Species Identification</li>
                      <li className="black-text">Offence Registration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modern-features-section" id="features-section" data-aos="fade">
            <div className="container">
              <div className="section-header">
                <div className="section-badge">Powerful Capabilities</div>
                <h2 className="section-title">Key Features</h2>
                <p className="section-subtitle">Discover what makes WildEye the leading solution for wildlife detection and monitoring</p>
              </div>

              <div className="features-grid">
                <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="feature-icon">
                    <img src={process.env.PUBLIC_URL +"/icons/ease-of-use.png"} alt="Ease-Of-Use-Icon" />
                  </div>
                  <h3>Intuitive Interface</h3>
                  <p>Simple, elegant and mobile-compatible interface designed for researchers and enthusiasts alike.</p>
                  <div className="feature-hover">
                    <span className="learn-more">Learn More</span>
                  </div>
                </div>

                <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon">
                    <img src={process.env.PUBLIC_URL +"/icons/saves-manual-labour.png"} alt="Saves-Manual-Labour-Icon" />
                  </div>
                  <h3>Time-Saving Automation</h3>
                  <p>Saves tremendous time for biology researchers by automating the labeling process, dramatically reducing the cost of gathering valuable information from wild habitats.</p>
                  <div className="feature-hover">
                    <span className="learn-more">Learn More</span>
                  </div>
                </div>

                <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-icon">
                    <img src={process.env.PUBLIC_URL +"/icons/accuracy.png"} alt="Accuracy-Icon" />
                  </div>
                  <h3>High Accuracy</h3>
                  <p>Identifies animals in images with precise bounding boxes, achieving an impressive 88% accuracy rate using advanced AI algorithms.</p>
                  <div className="feature-hover">
                    <span className="learn-more">Learn More</span>
                  </div>
                </div>

                <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
                  <div className="feature-icon">
                    <img src={process.env.PUBLIC_URL +"/icons/animal-spotting.png"} alt="Fully-Automatic-Animal-Spotting-System-Icon" />
                  </div>
                  <h3>Real-Time Detection</h3>
                  <p>Automatically identifies species of animals in input images and delivers truly real-time results for immediate analysis and action.</p>
                  <div className="feature-hover">
                    <span className="learn-more">Learn More</span>
                  </div>
                </div>

                <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
                  <div className="feature-icon">
                    <img src={process.env.PUBLIC_URL +"/icons/species-identification.png"} alt="Species-Identification-Icon" />
                  </div>
                  <h3>Multi-Species Recognition</h3>
                  <p>Identifies 11 different species including Butterfly, Elephant, Tiger, Lion, Horse, Panda, Bear, Monkey, Dog, Deer and Human with high precision.</p>
                  <div className="feature-hover">
                    <span className="learn-more">Learn More</span>
                  </div>
                </div>

                <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
                  <div className="feature-icon">
                    <img src={process.env.PUBLIC_URL +"/icons/offence-registration.png"} alt="Offence-Registration-Icon" />
                  </div>
                  <h3>Incident Reporting</h3>
                  <p>Users can register wildlife incidents by uploading an image, geo-location, or both, contributing to conservation efforts and wildlife protection.</p>
                  <div className="feature-hover">
                    <span className="learn-more">Learn More</span>
                  </div>
                </div>
              </div>

              <div className="features-cta">
                <a href="#demo-section" className="btn-primary">Try the Demo</a>
              </div>
            </div>
          </div>

          <div className="site-section" id="glance-section"  data-aos="fade">

        {/* <div style={{ marginBottom: '50px' }} className="container">

          <div className="row align-items-center">
            <div className="col-md-5 order-1 order-md-2 mb-5 mb-md-0">
              <video src={process.env.PUBLIC_URL +"/demo/demo.mp4"} className="img-fluid" controls loop />
            </div>

            <div className="col-md-6 mr-auto order-2 order-md-1">
              <h2 className="section-title mb-3">At a Glance</h2>
              <p className="black-text mb-5">In this captivating demo of our project, we showcase the incredible capabilities of our system by using a video that features mesmerizing footage of zebras and graceful giraffes. The results we achieved are nothing short of remarkable, as our advanced model demonstrates its exceptional ability to detect and classify these magnificent creatures with utmost accuracy.</p>
              <p style={{ fontWeight: '500', color: '#C3073F' }} className="mb-5">Note: Model can only identify the animals on which it is trained on.</p>
            </div>
          </div>
        </div>    */}


        <div className="modern-demo-section" id="demo-section" data-aos="fade">
            <div className="container">
              <div className="demo-header">
                <div className="section-badge">Interactive Experience</div>
                <h2 className="section-title">Try WildEye in Action</h2>
                <p className="section-subtitle">Experience the power of our AI-driven wildlife detection system with your own images, videos, or camera</p>
              </div>

              <div className="demo-content">
                <Detect/>
              </div>

              <div className="demo-info">
                <div className="info-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3>Powered by GoogleNet</h3>
                  <p>Our system utilizes the advanced GoogleNet architecture for accurate and efficient wildlife detection.</p>
                </div>

                <div className="info-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <h3>Real-Time Processing</h3>
                  <p>Experience instant results with our optimized algorithms that process data in real-time.</p>
                </div>

                <div className="info-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3>Multiple Detection Modes</h3>
                  <p>Choose between image upload, video upload, or real-time camera detection based on your needs.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="modern-tech-section">
          <div className="container">
            <div className="tech-header">
              <div className="section-badge">Cutting-Edge Technology</div>
              <h2 className="section-title">Powered By</h2>
              <p className="section-subtitle">WildEye leverages the latest technologies to deliver accurate and efficient wildlife detection</p>
            </div>

            <div className="tech-grid">
              <div className="tech-card" data-aos="fade-up" data-aos-delay="100">
                <div className="tech-icon">
                  <img src={react} alt="React" />
                </div>
                <h3>React</h3>
                <p>Modern, responsive user interface built with React for a seamless experience</p>
              </div>

              <div className="tech-card" data-aos="fade-up" data-aos-delay="200">
                <div className="tech-icon">
                  <img src={tf} alt="TensorFlow" />
                </div>
                <h3>TensorFlow</h3>
                <p>Powerful machine learning framework for training and deploying AI models</p>
              </div>

              <div className="tech-card" data-aos="fade-up" data-aos-delay="300">
                <div className="tech-icon">
                  <img src={keras} alt="Keras" />
                </div>
                <h3>Keras</h3>
                <p>High-level neural networks API for fast experimentation and model development</p>
              </div>

              <div className="tech-card" data-aos="fade-up" data-aos-delay="400">
                <div className="tech-icon">
                  <img src={colab} alt="Google Colab" />
                </div>
                <h3>Google Colab</h3>
                <p>Cloud-based platform for training and testing machine learning models</p>
              </div>
            </div>
          </div>
        </div>
      </div>

          <footer className="modern-footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 footer-info">
                    <div className="footer-logo">
                      <img src={process.env.PUBLIC_URL +"/imgs/Logo1.png"} alt="WildEye-Logo" height="60" width="60"/>
                      <h3>WildEye</h3>
                    </div>
                    <p>Advanced wildlife detection and species identification using AI and deep learning technology. Helping researchers, conservationists, and nature enthusiasts identify and track wildlife in real-time.</p>
                    <div className="social-links">
                      <a href="#" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Navigation</h4>
                    <ul>
                      <li><a href="#home-section">Home</a></li>
                      <li><a href="#features-section">Features</a></li>
                      <li><a href="#demo-section">Demo</a></li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                      <strong>Email:</strong> info@wildeye.com<br>
                      </br>
                      <strong>Phone:</strong> +1 234 567 8900<br>
                      </br>
                    </p>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-newsletter">
                    <h4>About Us</h4>
                    <p>We are Group 5 of CSAI from VIT PUNE BIBWEWADI. This project was developed as part of our SEM 6 curriculum.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="container">
                <div className="copyright">
                  &copy; {new Date().getFullYear()} <strong>WildEye</strong>. All Rights Reserved
                </div>
                <div className="credits">
                  Designed with <span className="heart">❤</span> by Group 5
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}

export default Landing;