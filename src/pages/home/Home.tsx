import { useEffect, useState } from "react";

import classNames from "classnames";

import {
  IconMenu,
  IconMenuClose,
  ImageGamingGrowth,
  ImageRetroPcs,
  ImageTopLaptops,
  ImageWeb3Desktop,
  ImageWeb3Mobile,
  Logo,
} from "../../assets/images";
import styles from "./Home.module.scss";

const Home = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showMobileNav]);

  return (
    <main className={styles.main}>
      <nav
        className={classNames({
          [styles.nav]: true,
          [styles.show]: showMobileNav,
        })}
      >
        <div className={styles.backdrop} />
        <img className={styles.logo} src={Logo} alt="logo" />
        <button
          className={styles.menuBtn}
          onClick={() => setShowMobileNav(true)}
        >
          <img src={IconMenu} alt="icon-menu" />
        </button>
        <div className={styles.content}>
          <button
            className={styles.closeBtn}
            onClick={() => setShowMobileNav(false)}
          >
            <img src={IconMenuClose} alt="icon-menu-close" />
          </button>
          <ul className={styles.navItems}>
            <li className={styles.item}>
              <a href="/">Home</a>
            </li>
            <li className={styles.item}>
              <a href="/">New</a>
            </li>
            <li className={styles.item}>
              <a href="/">Popular</a>
            </li>
            <li className={styles.item}>
              <a href="/">Trending</a>
            </li>
            <li className={styles.item}>
              <a href="/">Categories</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className={styles.newsSection}>
        {/* hero-section starts */}
        <img
          className={styles.heroImgDesktop}
          alt="web-3"
          src={ImageWeb3Desktop}
        />
        <img
          className={styles.heroImgMobile}
          src={ImageWeb3Mobile}
          alt="web-3"
        />
        <h1 className={styles.heroTitle}>The Bright Future of Web 3.0?</h1>
        <div className={styles.subHeroContainer}>
          <h2>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </h2>
          <button>
            <span>Read more</span>
          </button>
        </div>
        {/* hero-section ends */}

        {/* new-section starts */}
        <div className={styles.newSection}>
          <span className={styles.header}>New</span>
          <ul className={styles.itemsContainer}>
            <li className={styles.item}>
              <a href="/" className={styles.content}>
                <span className={styles.title}>Hydrogen VS Electric Cars</span>
                <span className={styles.desc}>
                  Will hydrogen-fueled cars ever catch up to EVs?
                </span>
              </a>
              <hr />
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.content}>
                <span className={styles.title}>
                  The Downsides of AI Artistry
                </span>
                <span className={styles.desc}>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </span>
              </a>
              <hr />
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.content}>
                <span className={styles.title}>Is VC Funding Drying Up?</span>
                <span className={styles.desc}>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </span>
              </a>
              <hr />
            </li>
          </ul>
        </div>
        {/* new-section ends */}

        {/* bottom-section starts */}
        <a href="/" className={styles.bottomCard}>
          <div className={styles.imgWrapper}>
            <img src={ImageRetroPcs} alt="retro-pcs" />
          </div>
          <div className={styles.content}>
            <span className={styles.number}>01</span>
            <span className={styles.title}>Reviving Retro PCs</span>
            <span className={styles.desc}>
              What happens when old PCs are given modern upgrades?
            </span>
          </div>
        </a>
        <a href="/" className={styles.bottomCard}>
          <div className={styles.imgWrapper}>
            <img src={ImageTopLaptops} alt="top-laptops" />
          </div>
          <div className={styles.content}>
            <span className={styles.number}>02</span>
            <span className={styles.title}>Top 10 Laptops of 2022</span>
            <span className={styles.desc}>
              Our best picks for various needs and budgets.
            </span>
          </div>
        </a>
        <a href="/" className={styles.bottomCard}>
          <div className={styles.imgWrapper}>
            <img src={ImageGamingGrowth} alt="gaming-growth" />
          </div>
          <div className={styles.content}>
            <span className={styles.number}>03</span>
            <span className={styles.title}>The Growth of Gaming</span>
            <span className={styles.desc}>
              How the pandemic has sparked fresh opportunities.
            </span>
          </div>
        </a>
        {/* bottom-section ends */}
      </section>
    </main>
  );
};

export default Home;
