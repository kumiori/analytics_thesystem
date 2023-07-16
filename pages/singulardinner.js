import React, { useState } from 'react';
import FullHeader from '../components/fullHeader';
import { ImageIntroHSBC as ImageIntro } from '../components/header10';
import {ContentHSBC as Content} from '../components/content1';
import { ImageWithDescriptionHSBC as ImageWithDescription } from '../components/image2';
import { GalleryHSBC as Gallery } from '../components/gallery2';
import {TimelineHSBC as Timeline} from '../components/timeline';
import { HeaderHSBC as Header } from '../components/header1';
import {FeaturesHSBC2 as Features}  from '../components/features11';
import {FeaturesHSBC22 as Features2}  from '../components/features11';
import {FeaturesMorvan as Features6} from '../components/features6';
import {FeaturesHSBC3 as Steps} from '../components/features19';

import { GalleryMorvan as GalleryM } from '../components/gallery4';
import RndImageWithDescription from '../components/image10';

// const MathJax = require('react-mathjax')
// const tex = `f(x) \\forall = \\int_{-\\infty}^\\infty
//     \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
//     \\,d\\xi`


export default function Info() {
    function componentDidMount() {
        document.body.style.backgroundColor = "red"
    }
    return (
        
        <>
            <Header />
            <ImageIntro />
            <Content />
            <Features />
            <ImageWithDescription />
            <Features2 />
            <Steps />
            <Gallery />
            
            <Timeline />
            <Features6 />



            {/* <Helmet> */}
                {/* <link rel="stylesheet" href="../styles/darkmode.css" /> */}
            {/* </Helmet> */}
            {/* <GalleryM /> */}
            {/* <Timeline /> */}
            {/* <RndImageWithDescription /> */}
            {/* <RndImageWithFixedDescription /> */}
        </>
    );
}

function CardGenerator(props) {
    console.log(props.randomImage)
    return <h1>{props.randomImage}</h1>;
}


