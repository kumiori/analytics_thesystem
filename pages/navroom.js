import React, { useState } from 'react';
import FullHeader from '../components/fullHeader';
// import ImageIntro from '../components/header10';
import { ImageIntroMorvan as ImageIntro } from '../components/header10';
import {ContentMorvan as Content} from '../components/content1';
import { ImageWithDescriptionNavroom as ImageWithDescription } from '../components/image2';
import { GalleryMorvan2 as Gallery } from '../components/gallery2';
import { GalleryMorvan as GalleryM } from '../components/gallery4';
import RndImageWithDescription from '../components/image10';
import {TimelineMorvan as Timeline} from '../components/timeline';
// import TimelineIce from '../components/timeline';
// import Header2 from '../components/header1';
import { HeaderMorvan as Header } from '../components/header1';
import {FeaturesMorvan2 as Features}  from '../components/features11';
import {FeaturesMorvan as Features6} from '../components/features6';
import {FeaturesMorvan3 as Steps} from '../components/features19';
import cardImages from '../utils/cardsImages';
import {Helmet} from "react-helmet";

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
            {/* <Helmet> */}
                {/* <link rel="stylesheet" href="../styles/darkmode.css" /> */}
            {/* </Helmet> */}
            <Header />
            {/* <RndImageWithDescription /> */}
            <ImageIntro />
            <Content />
            <Features />
            <ImageWithDescription />
            <Steps />
            <Gallery />
            {/* <GalleryM /> */}
            {/* <Timeline /> */}

            <Timeline />
            <Features6 />
            {/* <RndImageWithFixedDescription /> */}
        </>
    );
}

function CardGenerator(props) {
    console.log(props.randomImage)
    return <h1>{props.randomImage}</h1>;
}


