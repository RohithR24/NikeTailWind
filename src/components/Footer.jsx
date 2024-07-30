import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="info-text max-w-sm mt-10">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-5 mt-8 flex-wrap">
            {socialMedia.map((logo, index) => (
              <a href="/" key={index} className=" bg-white rounded-full p-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={25}
                  height={25}
                  className="m-0"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-10 text-white font-montserrat">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <h4 className="text-xl mb-3">{link.title}</h4>
              <ul className="info-text">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <a href="/">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between py-10 info-text">
        <p className="flex flex-row gap-2 justify-start items-center">
          <a href="/" className=" color-slate-600">
            <img
              src={copyrightSign}
              alt={"copyrightSign"}
              width={20}
              height={20}
              className="m-0 rounded-full"
            />
          </a>
          Copyright. All rights reserved.
        </p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
