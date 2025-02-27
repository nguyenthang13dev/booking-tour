"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="site-header header-primary">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-none d-lg-block">
              <div className="header-contact-info">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-phone-alt"></i> 0888822368
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:bookingtour@gmail.com">
                      <i className="fas fa-envelope"></i> bookingtourvn@gmail.vn
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 173 Thái Hà, Đống Đa, Hà Nội
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
              <div className="header-social social-links">
                <ul>
                  <li>
                    <Link href="" target="_blank">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-search-icon">
                <button className="search-icon">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="site-identity">
            <h1 className="site-title">
              <Link href="/">
                <img
                  className="white-logo"
                  src={"/assets/images/logo_bookingtour.vn"}
                  alt="logo"
                  width={150}
                  height={50}
                />
                <img
                  className="black-logo"
                  src="https://bookingtour.vn/templates/themes/images/bookingtour-logo.png?v1"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </Link>
            </h1>
          </div>
          <div className="main-navigation d-none d-lg-block">
            <nav id="navigation" className="navigation">
              <ul>
                <li className="menu-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link href="/tour">Tour</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="/destination/trung-quoc">Tour Trung Quốc</Link>
                  <ul>
                    <li>
                      <Link href="/destination">Bắc Kinh</Link>
                    </li>
                    <li>
                      <Link href="/tour-packages">Thượng Hải</Link>
                    </li>
                    <li>
                      <Link href="/package-offer">Lệ Giang</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="/destination">Điểm đến</Link>
                </li>
                <li className="menu-item">
                  <Link href="/visa">VISA</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn">
            <Link href="/booking" className="button-primary">
              ĐẶT TOUR
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
