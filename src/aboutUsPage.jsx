import React from "react";
import "./css/style.css";
import "./css/queries.css";
import "./css/general.css";
import abtImg1 from "./images/illustrations/abtImg-1.png";
import abtImg2 from "./images/illustrations/abtImg-2.png";
import abtImg3 from "./images/illustrations/abtImg-3.png";
import abtImg4 from "./images/illustrations/abtImg-4.jpg";
import abtImg5 from "./images/illustrations/abtImg-5.jpg";


const AboutUsPage = () => {
  return (
    <div  className="about-hero about-img-box" role="img"
    aria-label="Woman enjoying food">


    <main  className="about-section">
      <section  >
        <div  >

          
            <h1 className="heading-primary" style={{textAlign:"center" , color:"#000"}}>
              About Farmenience
            </h1>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis nunc eget lorem. At erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc eget lorem dolor sed viverra ipsum. Sed faucibus turpis in eu mi bibendum neque egestas congue. Scelerisque purus semper eget duis. Ac felis donec et odio pellentesque diam volutpat. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Neque aliquam vestibulum morbi blandit cursus risus. Quam viverra orci sagittis eu volutpat odio facilisis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Sed elementum tempus egestas sed. Id aliquet lectus proin nibh nisl condimentum id. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Amet dictum sit amet justo donec enim diam vulputate. Venenatis a condimentum vitae sapien pellentesque. Et egestas quis ipsum suspendisse.
            </p>
            
            <p className="about-description">
            Enim ut sem viverra aliquet eget sit. At imperdiet dui accumsan sit amet nulla facilisi. Velit ut tortor pretium viverra suspendisse potenti. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Mi eget mauris pharetra et ultrices neque. Massa tincidunt dui ut ornare lectus sit amet est placerat. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Morbi leo urna molestie at. Odio pellentesque diam volutpat commodo sed. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Aenean sed adipiscing diam donec adipiscing tristique. Urna molestie at elementum eu. Dui ut ornare lectus sit amet est placerat in egestas. Est pellentesque elit ullamcorper dignissim cras. Feugiat nisl pretium fusce id.
            </p>
            
            <p className="about-description">
            Commodo odio aenean sed adipiscing diam donec. Fermentum leo vel orci porta non pulvinar neque laoreet. Tellus id interdum velit laoreet id. Elementum nibh tellus molestie nunc non. Mauris nunc congue nisi vitae suscipit. Sed felis eget velit aliquet sagittis id consectetur purus ut. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Quis blandit turpis cursus in. Aliquam malesuada bibendum arcu vitae. Tellus cras adipiscing enim eu turpis egestas. Velit dignissim sodales ut eu sem integer vitae justo. Risus pretium quam vulputate dignissim suspendisse in est ante. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Nullam non nisi est sit amet facilisis magna. Enim diam vulputate ut pharetra sit amet aliquam. Orci sagittis eu volutpat odio facilisis mauris sit. Pretium vulputate sapien nec sagittis aliquam malesuada.
            </p>

          
        </div>
      </section>

      

      {/* <section className="section-featured">
        <div className="container">
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
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            Components of the website in 2 simple steps
          </h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          
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

       TESTIMONIALS  

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

      <section className="section-pricing" id="features">

         FEATURE COMPONENT  

        <div className="container grid grid--3-cols">
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

      <!-- SIGN IN COMPONENT  -->

      <section className="section-cta" id="cta">
        <div className="container">
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
            </section> */}
    </main>

     {/* <!-- FOOTER  --> 

    <section id="contact">
    <footer className="footer">
      <div className="container grid grid--footer">
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
      </section> */}
    </div>
  );
};

export default AboutUsPage;
