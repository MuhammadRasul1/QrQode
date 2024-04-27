import Turkiyaimg from './img/turkiya.jpg';
import Dubia from './img/dubia.jpeg';
import Qatar from './img/Qatar.jpg';
import China from './img/china.jpeg';
import Japan from './img/japan.jpeg';
import Malaysia from './img/malasiya.jpeg';
import Logo from './img/logot.png';
import ImgAir from './img/air.jpg';
import ImgAir2 from './img/air2.jpg';
import ImgAir3 from './img/air3.jpeg';
import { MdRefresh } from 'react-icons/md';
import { CiDollar } from 'react-icons/ci';
import { SiSpringsecurity } from 'react-icons/si';
import cls from './styles.module.scss';

export const Page = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <img width="100px" className={cls.logo} src={Logo} alt="hello travel" />
            </li>
          </ul>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#contact">Blogs</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#contact">News</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className={cls.posationAbsole}>
          <div className={cls.wrapper}>
            <div className={cls.title}>
              <h2>Good Morning!</h2>
              <p>Explore beautiful places in the world with Acenda</p>
            </div>
            <div className={cls.info}>
              <div>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Location
                </p>
                <p class="Add">Add destination</p>
              </div>
              <div>
                <p>
                  <i class="far fa-calendar"></i>
                  Check in
                </p>
                <p class="Add">Add dates</p>
              </div>
              <div>
                <p>
                  <i class="far fa-calendar"></i>
                  Check out
                </p>
                <p class="Add">Add dates</p>
              </div>
              <div>
                <p>
                  <i class="fas fa-user-circle"></i>
                  Guests
                </p>
                <p class="Add">Add Guests</p>
              </div>
            </div>
          </div>
        </section>
        <section id="home" class="home-section">
          <p>WHY CHOOSE US?</p>
          <div className="wrraper">
            <div class="prices">
              <div class="priceicon">
                <CiDollar />
              </div>
              <p>Competitive Prices</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
            <div class="prices">
              <div class="priceicon">
                <SiSpringsecurity />
              </div>
              <p>Secure Booking</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
            <div class="prices">
              <div class="priceicon">
                <MdRefresh />
              </div>
              <p>Seamless Experience </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
        </section>
        <section id="home" class="home-section">
          <p>Our partners</p>
          <div className="wrraper">
            <div class="prices">
              <div class="priceicon">
                <img className="imgAir" src={ImgAir} alt="" />
              </div>
              <p>Uzairways</p>
            </div>
            <div class="prices">
              <div class="priceicon">
                <img className="imgAir" src={ImgAir2} alt="" />
              </div>
              <p>CentrumAir</p>
            </div>
            <div class="prices">
              <div class="priceicon">
                <img className="imgAirb" src={ImgAir3} alt="" />
              </div>
              <p>BatikAir </p>
            </div>
          </div>
        </section>
        <section id="destinations" class="destinations-section">
          <h2>Featured Destinations</h2>

          <div class="destination">
            <div>
              <img src={Turkiyaimg} alt="Destination Image" />
              <h3>Turkey</h3>
              <p>Turkey enjoys a variety of climates</p>
              <a href="#booking" class="btn">
                Book Now
              </a>
            </div>
            <div>
              <img src={Dubia} alt="Destination Image" />
              <h3>Dubai</h3>
              <p>Beautiful beaches, record-breaking attractions </p>
              <a href="#booking" class="btn">
                Book Now
              </a>
            </div>
            <div>
              <img src={Qatar} alt="Destination Image" />
              <h3>Qatar</h3>
              <p>Primarily Qatar is famous for the 2022 World Cup</p>
              <a href="#booking" class="btn">
                Book Now
              </a>
            </div>
          </div>
          <div class="destination">
            <div>
              <img src={China} alt="Destination Image" />
              <h3>China</h3>
              <p>China is known for its rich history,</p>
              <a href="#contact" class="btn">
                Book Now
              </a>
            </div>
            <div>
              <img src={Japan} alt="Destination Image" />
              <h3>China</h3>
              <p>Experience Vincent of the Big river.</p>
              <a href="#contact" class="btn">
                Book Now
              </a>
            </div>
            <div>
              <img src={Malaysia} alt="Destination Image" />
              <h3>Italiya</h3>
              <p>Experience the culture of the country.</p>
              <a href="#contact" class="btn">
                Book Now
              </a>
            </div>
          </div>
        </section>
        <section id="about" class="about-section">
          <h2>About Us</h2>
          <p>
            Enjoy our profitable loyalty program to earn points and use them to pay for bookings. Get special B2B rates
            and low prices to earn even more. Choose a work model, Net or Gross, that works for you. Pay by invoice or
            credit card, or use a credit limit to pay later. Use the Selection tool and Pay by Link option to engage
            with clients and speed up your bookings even more. We offer 24/7 multilingual support and exclusive
            pre-check service to reconfirm each of your bookings.
          </p>
        </section>
        <section id="contact" class="contact-section">
          <h2>Contact Us</h2>
          <p>Email: contact@travelsite.com</p>
          <p>Phone: +998 931916162</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2022 Travel Site. All rights reserved.</p>
      </footer>
    </div>
  );
};