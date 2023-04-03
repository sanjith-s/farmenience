import React from "react";
import "./css/style.css";
import "./css/queries.css";
import "./css/general.css";
import customer1 from "./images/customers/customer-1.jpg";
import customer2 from "./images/customers/customer-2.jpg";
import customer3 from "./images/customers/customer-3.jpg";
import customer4 from "./images/customers/customer-4.jpg";
import customer5 from "./images/customers/customer-5.jpg";
import customer6 from "./images/customers/customer-6.jpg";
import heroImg from "./images/hero-img.jpg";
import kLogoWhite from "./images/logos/klogo_white.png";
import ctfLogo from "./images/logos/ctf_full.png";
import cegLogo from "./images/logos/ceg.png";
import xceedLogo from "./images/logos/xceed_logo.png";
import lap1 from "./images/app/lap-screen-1.png";
import lap2 from "./images/app/lap-screen-2.png";
import dave from "./images/customers/dave.jpg";
import hannah from "./images/customers/hannah.jpg";
import steve from "./images/customers/steve.jpg";
import ben from "./images/customers/ben.jpg";
import collage1 from "./images/collage/collage-13.jpg";
import collage2 from "./images/collage/collage-14.jpg";
import collage3 from "./images/collage/collage-15.jpg";
import collage4 from "./images/collage/collage-16.jpg";
import collage5 from "./images/collage/collage-17.jpg";
import collage6 from "./images/collage/collage-18.jpg";
import collage7 from "./images/collage/collage-19.jpg";
import collage8 from "./images/collage/collage-20.jpg";
import collage9 from "./images/collage/collage-21.jpg";
import collage10 from "./images/collage/collage-22.jpg";
import collage11 from "./images/collage/collage-23.jpg";
import collage12 from "./images/collage/collage-24.jpg";

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <a href="#">
        </a>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li><a className="main-nav-link" href="#how">How it works</a></li>
            <li>
              <a className="main-nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li><a className="main-nav-link" href="#features">Features</a></li>
            <li><a className="main-nav-link" href="#contact">Contact</a></li>
            <li><a className="main-nav-link nav-cta" href="#cta">Try it now </a></li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>

      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                Enriching agriculture one click at a time
              </h1>
              <p className="hero-description">
                Trying to make the process of agriculture smoother from start to finish all over the year, all over India.
              </p>
              <a href="#cta" className="btn btn--full margin-right-sm "
              >Start farmenience </a
              >

              <a href="#how" className="btn btn--outline">Learn more &darr;</a>
              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <img src={customer1} alt="Customer photo" />
                  <img src={customer2} alt="Customer photo" />
                  <img src={customer3} alt="Customer photo" />
                  <img src={customer4} alt="Customer photo" />
                  <img src={customer5} alt="Customer photo" />
                  <img src={customer6} alt="Customer photo" />
                </div>
                <p className="delivered-text">
                  <span>250,000+</span>  have already used!
                </p>
              </div>
            </div>
            <div className="hero-img-box">
              <picture>


                <img
                  src={heroImg}
                  className="hero-img"
                  alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                />
              </picture>
            </div>
          </div>
        </section>

        {/* <!-- SECTION FEATURED  --> */}

        <section className="section-featured">
          <div className="container1">
            <h2 className="heading-featured-in">As featured in</h2>
            <div className="logos">
              <img src={kLogoWhite} alt="Kuruckshetra logo" />
              <img
                src={ctfLogo}
                alt="CTF logo"

              />
              <img
                src={cegLogo}
                alt="CEG logo"

              />
              <img src={xceedLogo} alt="Xceed logo" />
            </div>
            </div>
        </section>

        <section className="section-how" id="how">
          <div style={{textAlign:"center"}}>
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">
              Components of the website in 2 simple steps
            </h2>
            </div>
          <div className="grid grid--2-cols grid--center-v" style={{margin:"auto",width:"80%"}}>
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">
                Market

              </h3>
              <p className="step-description">
                Got a product to enrich the lives of the masses, make use of the technological genie which would grant you the wish of connecting to the client who is exactly in need of very thing which would guerdon you for your hardwork. Don’t think just click to get one step closer to reap your reward.

              </p>
            </div>

            <div className="step-img-box">
              <img
                src={lap1}
                className="step-img"
                alt="iPhone app
            preferences selection screen"
              />
            </div>

            <div className="step-img-box">
              <img
                src={lap2}
                className="step-img"
                alt="iPhone app
            meal approving plan screen"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">
                NGO
              </h3>
              <p className="step-description">
                Worried that queries cant be taken across the distance where it can be addressed, no worries drop them in the e-sack which will be delivered to right hands through our lightning fast modern wheelcart.

              </p>
            </div>
          </div>
        </section>

        {/* <!-- TESTIMONIALS  --> */}

        <section className="section-testimonials" id="testimonials">
          <div className="testimonials-container">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">Once you try it, you can't go back</h2>

            <div className="testimonials">
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Dave Bryson"
                  src={dave}
                />
                <blockquote className="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.

                </blockquote>
                <p className="testimonial-name">&mdash; Dave Bryson</p>
              </figure>

              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Ben Hadley"
                  src={ben}
                />
                <blockquote className="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.

                </blockquote>
                <p className="testimonial-name">&mdash; Ben Hadley</p>
              </figure>

              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Steve Miller"
                  src={steve}
                />
                <blockquote className="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.

                </blockquote>
                <p className="testimonial-name">&mdash; Steve Miller</p>
              </figure>

              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Hannah Smith"
                  src={hannah}
                />
                <blockquote className="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.

                </blockquote>
                <p className="testimonial-name">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>

          <div className="gallery">
            <figure className="gallery-item">
              <img
                src={collage1}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage2}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage3}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage4}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage5}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage6}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage7}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage8}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage9}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage10}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage11}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src={collage12}
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
          </div>
        </section>
          {/* <!-- FEATURE COMPONENT  --> */}


        <section className="section-pricing" id="features">

          <div className="grid grid--3-cols" style={{margin:"auto",width:"80%"}}>
            <div className="feature">
              <ion-icon className="feature-icon" name="leaf-outline"></ion-icon>
              <p className="feature-title">
                Farmer

              </p>
              <p className="feature-text">
                He/she can sell their produce to the best markets around them as well as contact NGOs for any suggestions or clarifications and schedule meetings

              </p>
            </div>

            <div className="feature">
              <ion-icon className="feature-icon" name="infinite-outline"></ion-icon>
              <p className="feature-title">
                Retailer
              </p>
              <p className="feature-text">
                He/she can purchase fresh produce from the farmer directly at reasonable prices.

              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="pause-outline"></ion-icon>
              <p className="feature-title">
                NGO Representative
              </p>
              <p className="feature-text">
                He/she can reply back to the queries of farmers as well as confirm the scheduled meet with farmers

              </p>
            </div>
          </div>
        </section>

        {/* <!-- SIGN IN COMPONENT  --> */}

        <section className="section-cta" id="cta">
          <div className="container1">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">Get your first trial right now!</h2>
                <p className="cta-text">
                  Farmenience is a website that is built to make farming convenient and economical for the farmers. We are providing solutions to the existing problems in the field of agriculture to make India a healthier economy.

                </p>

                <form className="cta-form" name="sign-up" netlify>

                  <a href="#" className="btn btn--form sign-link">Sign up now </a>
                  <a href="#" className="btn btn--outline sign-link">Sign in </a>

                </form>
              </div>
              <div
                className="cta-img-box"
                role="img"
                aria-label="Woman enjoying food"
              ></div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- FOOTER  --> */}

      <section id="contact">
        <footer className="footer">
          <div className="container1 grid grid--footer">
            <div className="logo-col">
              <a href="#" className="footer-logo">
                <h1>FARMENIENCE</h1>
              </a>

              <ul className="social-links">
                <li>
                  <a className="footer-link" href="https://www.instagram.com/"
                  ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
                  ></a>
                </li>
                <li>
                  <a className="footer-link" href="https://www.facebook.com/"
                  ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
                  ></a>
                </li>
                <li>
                  <a className="footer-link" href="https://www.twitter.com/"
                  ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
                  ></a>
                </li>
                <li>
                  <a className="footer-link" href="https://www.linkedin.com/"
                  ><ion-icon className="social-icon" name="logo-linkedin"></ion-icon
                  ></a>
                </li>
              </ul>

              <p className="copyright">
                Copyright &copy; <span className="year">2027</span> by Farmenience, Inc.
                All rights reserved.
              </p>
            </div>

            <div className="address-col">
              <p className="footer-heading">Contact us</p>
              <address className="contacts">
                <p className="address">
                  Sardar Patel Road, Guindy, Chennai, Tamilnadu, India, Pincode: 600025
                </p>
                <p>
                  <a className="footer-link" href="tel:+91 99999 99999">+91 99999 99999</a
                  ><br />
                  <a className="footer-link" href="mailto:farmenience23@gmail.com"
                  >farmenience23@gmail.com</a
                  >
                </p>
              </address>
            </div>

            <nav className="nav-col">
              <p className="footer-heading">Account</p>
              <ul className="footer-nav">
                <li><a className="footer-link" href="#">Create account</a></li>
                <li><a className="footer-link" href="#">Sign in</a></li>
                <li><a className="footer-link" href="#">iOS app</a></li>
                <li><a className="footer-link" href="#">Android app</a></li>
              </ul>
            </nav>

            <nav className="nav-col">
              <p className="footer-heading">Company</p>
              <ul className="footer-nav">
                <li><a className="footer-link" href="#">About Farmenience</a></li>
                <li><a className="footer-link" href="#">For NGOs</a></li>
                <li><a className="footer-link" href="#">For Consumers</a></li>
                <li><a className="footer-link" href="#">Contribute</a></li>
              </ul>
            </nav>

            <nav className="nav-col">
              <p className="footer-heading">Resources</p>
              <ul className="footer-nav">
                <li><a className="footer-link" href="#">Farmenience directory </a></li>
                <li><a className="footer-link" href="#">Help center</a></li>
                <li><a className="footer-link" href="#">Privacy & terms</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </section>
    </div>
  )
};

export default LandingPage;
