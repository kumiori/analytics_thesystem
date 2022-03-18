import React, { useState } from 'react';
import FullHeader from '../components/fullHeader';
import ImageIntro from '../components/header10';
import Content1 from '../components/content1';
import ImageWithDescription from '../components/image2';
import RndImageWithFixedDescription from '../components/imageRnd';
import Map from '../components/video2';
import Timeline from '../components/timeline';
import Header1 from '../components/header1';
import Features from '../components/features11';
import cardImages from '../utils/cardsImages';
import {Helmet} from "react-helmet";

const MathJax = require('react-mathjax')
const tex = `f(x) \\forall = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`


export default function Info() {
    function componentDidMount() {
        document.body.style.backgroundColor = "red"
    }
    return (
        
        <>
            {/* <Helmet>
                <link rel="stylesheet" href="../styles/darkmode.css" />
            </Helmet> */}
            {/* <FullHeader /> */}
            <Header1 />
            <RndImageWithFixedDescription />
            <Map />
        </>
    );
}

function CardGenerator(props) {
    return <h1>{props.randomImage}</h1>;
}


