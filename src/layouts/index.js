import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';
import Helmet from 'react-helmet';

import '../../sass/style.scss';

const WEBSITE_DESCRIPTION = "Figure Figure est une revue digitale qui donne la parole aux artistes émergents. Raphaël Fabre, Aurore Le Duc, Thomas Guillemet, Alice Guittard, Marie Hazard, Morgan Courtois, Tyler Eash, Julien Creuzet, Marie Munk, Valentin Dommanget, Ben Elliot...";
const WEBSITE_TITLE = "Figure Figure";

const DEFAULT_IMAGE_URL = "https://figurefigure.fr/images/socials_img.jpg";
const DEFAULT_URL = "https://figurefigure.fr/";

const TemplateWrapper = ({ children }) => (
    <div className="page-container">
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Orbitron:400,900|Raleway" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" />

            <link rel="canonical" href={DEFAULT_URL} />

            <meta name="description" content={WEBSITE_DESCRIPTION} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="figurefigure_fr" />
            <meta name="twitter:image" content={DEFAULT_IMAGE_URL} />

            <meta property="og:description" content={WEBSITE_DESCRIPTION} />
            <meta property="og:site_name" content="Figure Figure" />
            <meta property="og:title" content={WEBSITE_TITLE} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={DEFAULT_URL} />
            <meta property="og:image" content={DEFAULT_IMAGE_URL} />
            <meta property="og:image:alt" content={WEBSITE_TITLE} />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Helmet>

        <Header/>

        {children()}

        <Footer/>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
