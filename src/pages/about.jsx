import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import Icon from '../components/icon';
import Facebook from '../components/icon/facebook.icon';
import Instagram from '../components/icon/instagram.icon';
import Twitter from '../components/icon/twitter.icon';
import AboutSheet from '../components/aboutSheet';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PAGE_TITLE = 'À Propos | Figure Figure';
const ICON_SIZE = 32;
const ICON_COLOR = 'black';

const AboutPage = ({ data }) => {
  const { node } = data.allDataJson.edges[0];
  // const { director, artist, writer } = node.contact;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '100px',
    focusOnSelect: true,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };

  return (
    <main>
      <Helmet title={PAGE_TITLE} />
      <Slider {...settings}>

        <div className="sheet">
          <div className="col-md-8">
            <AboutSheet lines={node.about.presentation} />
            <div className="share-buttons">
              <div id="mc_embed_signup">
                <form action="https://figurefigure.us20.list-manage.com/subscribe/post?u=0e476a01d6e5c29b2f4b5d9f3&amp;id=af50262d4a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate form-inline" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <p>newsletter</p>
                    <div className="input-group">
                      <input type="email" name="EMAIL" className="email form-control" id="mce-EMAIL" placeholder="email" autoComplete="email" required />
                      <div className="d" aria-hidden="true">
                        <input type="text" name="b_0e476a01d6e5c29b2f4b5d9f3_af50262d4a" tabIndex="-1" />
                      </div>
                      <div className="input-group-append">
                        <input type="submit" value="!" name="subscribe" id="mc-embedded-subscribe" className="btn btn-dark" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <a className="btn" href="https://www.instagram.com/figurefigure.fr/" target="_blank" rel="noopener noreferrer">
                <Icon icon={Instagram} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
              </a>
              <a className="btn" href="https://www.facebook.com/figurefigure.fr/" target="_blank" rel="noopener noreferrer">
                <Icon icon={Facebook} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
              </a>
              <a className="btn" href="https://twitter.com/figurefigure_fr" target="_blank" rel="noopener noreferrer">
                <Icon icon={Twitter} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
              </a>
            </div>
          </div>
        </div>

        <div className="sheet sheet--contact sheet-bg">
          <div className="row">
            <div className="col-md-auto font-secondary sheet-title">Équipe</div>
            <div className="col-md">
              {node.contact.map(element => (
                <div key={element.title} className="contact-section">
                  <p className="contact-section__header">{element.title.toUpperCase()}</p>
                  <div className="contact-section__item">
                    {element.names
                      ? element.names.map(name => (
                        <span>
                          {name}
                          <br />
                        </span>
                      ))
                      : element.name
                      }
                  </div>
                  {element.email
                    ? <a className="contact-section__item" href={`mailto:${element.email}`} target="_blank">{element.email}</a>
                    : ''
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slider>
    </main>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          about {
            presentation
          }
          contact {
            title
            name
            names
            email
          }
        }
      }
    }
  }
`;
