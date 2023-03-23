import './general.css';
import './queries.css';
import './style.css';

const PageMain = () => {
  return (
    <>
      <header class="header">
        <a href="#">

        </a>

        <nav class="main-nav">
          <ul class="main-nav-list">
            <li><a class="main-nav-link" href="#how">How it works</a></li>
            <li>
              <a class="main-nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li><a class="main-nav-link" href="#features">Features</a></li>
            <li><a class="main-nav-link" href="#contact">Contact</a></li>
            <li><a class="main-nav-link nav-cta" href="#cta">Try it now </a></li>
          </ul>
        </nav>

        <button class="btn-mobile-nav">
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>

      <main>
        <section class="section-hero">
          <div class="hero">
            <div class="hero-text-box">
              <h1 class="heading-primary">
                Enriching agriculture one click at a time
              </h1>
              <p class="hero-description">
                Trying to make the process of agriculture smoother from start to finish all over the year, all over India.
              </p>
              <a href="#cta" class="btn btn--full margin-right-sm "
              >Start farmenience </a
              >

              <a href="#how" class="btn btn--outline">Learn more &darr;</a>
              <div class="delivered-meals">
                <div class="delivered-imgs">
                  <img src="/img/customers/customer-1.jpg" alt="Customer photo" />
                  <img src="/img/customers/customer-2.jpg" alt="Customer photo" />
                  <img src="/img/customers/customer-3.jpg" alt="Customer photo" />
                  <img src="/img/customers/customer-4.jpg" alt="Customer photo" />
                  <img src="/img/customers/customer-5.jpg" alt="Customer photo" />
                  <img src="/img/customers/customer-6.jpg" alt="Customer photo" />
                </div>
                <p class="delivered-text">
                  <span>250,000+</span>  have already used!
                </p>
              </div>
            </div>
            <div class="hero-img-box">
              <picture>

                <img
                  src="/img/hero-img.jpg"
                  class="hero-img"
                  alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                />
              </picture>
            </div>
          </div>
        </section>


        <section class="section-featured">
          <div class="container">
            <h2 class="heading-featured-in">As featured in</h2>
            <div class="logos">
              <img src="/img/logos/klogo_white.png" alt="Kuruckshetra logo" />
              <img
                src="/img/logos/ctf_full.png"
                alt="CTF logo"

              />
              <img
                src="/img/logos/ceg.png"
                alt="CEG logo"

              />

              <img src="/img/logos/xceed_logo.png" alt="Xceed logo" />
            </div>
          </div>
        </section>

        <section class="section-how" id="how">
          <div class="container">
            <span class="subheading">How it works</span>
            <h2 class="heading-secondary">
              Components of the website in 2 simple steps
            </h2>
          </div>

          <div class="container grid grid--2-cols grid--center-v">

            <div class="step-text-box">
              <p class="step-number">01</p>
              <h3 class="heading-tertiary">
                Market

              </h3>
              <p class="step-description">
                Got a product to enrich the lives of the masses, make use of the technological genie which would grant you the wish of connecting to the client who is exactly in need of very thing which would guerdon you for your hardwork. Don’t think just click to get one step closer to reap your reward.

              </p>
            </div>

            <div class="step-img-box">
              <img
                src="/img/app/lap-screen-1.png"
                class="step-img"
                alt="iPhone app
            preferences selection screen"
              />
            </div>

            <div class="step-img-box">
              <img
                src="/img/app/lap-screen-2.png"
                class="step-img"
                alt="iPhone app
            meal approving plan screen"
              />
            </div>
            <div class="step-text-box">
              <p class="step-number">02</p>
              <h3 class="heading-tertiary">
                NGO

              </h3>
              <p class="step-description">
                Worried that queries cant be taken across the distance where it can be addressed, no worries drop them in the e-sack which will be delivered to right hands through our lightning fast modern wheelcart.

              </p>
            </div>


          </div>
        </section>



        <section class="section-testimonials" id="testimonials">
          <div class="testimonials-container">
            <span class="subheading">Testimonials</span>
            <h2 class="heading-secondary">Once you try it, you can't go back</h2>

            <div class="testimonials">
              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Dave Bryson"
                  src="/img/customers/dave.jpg"
                />
                <blockquote class="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.
                </blockquote>
                <p class="testimonial-name">&mdash; Dave Bryson</p>
              </figure>

              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Ben Hadley"
                  src="/img/customers/ben.jpg"
                />
                <blockquote class="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.
                </blockquote>
                <p class="testimonial-name">&mdash; Ben Hadley</p>
              </figure>

              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Steve Miller"
                  src="/img/customers/steve.jpg"
                />
                <blockquote class="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.
                </blockquote>
                <p class="testimonial-name">&mdash; Steve Miller</p>
              </figure>

              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Hannah Smith"
                  src="/img/customers/hannah.jpg"
                />
                <blockquote class="testimonial-text">
                  Aliquam faucibus purus in massa tempor nec. Quam vulputate dignissim suspendisse in est ante in.

                </blockquote>
                <p class="testimonial-name">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>

          <div class="gallery">
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-13.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-14.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-15.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-16.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-17.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-18.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-19.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-24.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-20.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-21.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-22.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
            <figure class="gallery-item">
              <img
                src="/img/collage/collage-23.jpg"
                alt="Photo of beautifully
            arranged food"
              />
            </figure>
          </div>
        </section>

        <section class="section-pricing" id="features">


          <div class="container grid grid--3-cols">
            <div class="feature">
              <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
              <p class="feature-title">
                Farmer
              </p>
              <p class="feature-text">
                He/she can sell their produce to the best markets around them as well as contact NGOs for any suggestions or clarifications and schedule meetings
              </p>
            </div>
            <div class="feature">
              <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>
              <p class="feature-title">
                Retailer
              </p>
              <p class="feature-text">
                He/she can purchase fresh produce from the farmer directly at reasonable prices.
              </p>
            </div>
            <div class="feature">
              <ion-icon class="feature-icon" name="pause-outline"></ion-icon>
              <p class="feature-title">
                NGO Representative

              </p>
              <p class="feature-text">
                He/she can reply back to the queries of farmers as well as confirm the scheduled meet with farmers

              </p>
            </div>
          </div>
        </section>


        <section class="section-cta" id="cta">
          <div class="container">
            <div class="cta">
              <div class="cta-text-box">
                <h2 class="heading-secondary">Get your first trial right now!</h2>
                <p class="cta-text">
                  Farmenience is a website that is built to make farming convenient and economical for the farmers. We are providing solutions to the existing problems in the field of agriculture to make India a healthier economy.

                </p>

                <form class="cta-form" name="sign-up" netlify>


                  <a href="#" class="btn btn--form sign-link">Sign up now </a>
                  <a href="#" class="btn btn--outline sign-link">Sign in </a>
                </form>
              </div>
              <div
                class="cta-img-box"
                role="img"
                aria-label="Woman enjoying food"
              ></div>
            </div>
          </div>
        </section>
      </main>

      <section id="contact">
        <footer class="footer">
          <div class="container grid grid--footer">
            <div class="logo-col">
              <a href="#" class="footer-logo">
                <h1>FARMENIENCE</h1>
              </a>

              <ul class="social-links">
                <li>
                  <a class="footer-link" href="https://www.instagram.com/"
                  ><ion-icon class="social-icon" name="logo-instagram"></ion-icon></a>
                </li>
                <li>
                  <a class="footer-link" href="https://www.facebook.com/"
                  ><ion-icon class="social-icon" name="logo-facebook"></ion-icon></a>
                </li>
                <li>
                  <a class="footer-link" href="https://www.twitter.com/"
                  ><ion-icon class="social-icon" name="logo-twitter"></ion-icon></a>
                </li>
                <li>
                  <a class="footer-link" href="https://www.linkedin.com/"
                  ><ion-icon class="social-icon" name="logo-linkedin"></ion-icon></a>
                </li>
              </ul>

              <p class="copyright">
                Copyright &copy; <span class="year">2027</span> by Farmenience, Inc.
                All rights reserved.
              </p>
            </div>

            <div class="address-col">
              <p class="footer-heading">Contact us</p>
              <address class="contacts">
                <p class="address">
                  Sardar Patel Road, Guindy, Chennai, Tamilnadu, India, Pincode: 600025
                </p>
                <p>
                  <a class="footer-link" href="tel:+91 99999 99999">+91 99999 99999</a
                  ><br />
                  <a class="footer-link" href="mailto:farmenience23@gmail.com">farmenience23@gmail.com</a>
                </p>
              </address>
            </div>

            <nav class="nav-col">
              <p class="footer-heading">Account</p>
              <ul class="footer-nav">
                <li><a class="footer-link" href="#">Create account</a></li>
                <li><a class="footer-link" href="#">Sign in</a></li>
                <li><a class="footer-link" href="#">iOS app</a></li>
                <li><a class="footer-link" href="#">Android app</a></li>
              </ul>
            </nav>

            <nav class="nav-col">
              <p class="footer-heading">Company</p>
              <ul class="footer-nav">
                <li><a class="footer-link" href="#">About Farmenience</a></li>
                <li><a class="footer-link" href="#">For NGOs</a></li>
                <li><a class="footer-link" href="#">For Consumers</a></li>
                <li><a class="footer-link" href="#">Contribute</a></li>
              </ul>
            </nav>

            <nav class="nav-col">
              <p class="footer-heading">Resources</p>
              <ul class="footer-nav">
                <li><a class="footer-link" href="#">Farmenience directory </a></li>
                <li><a class="footer-link" href="#">Help center</a></li>
                <li><a class="footer-link" href="#">Privacy & terms</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </section>
    </>
  )
}

export default PageMain;