import React, { useState } from 'react';
import FullHeader from '../components/fullHeader';
import ImageIntro from '../components/header10';
import Content1 from '../components/content1';
import ImageWithDescription from '../components/image2';
import Timeline from '../components/timeline';
import Header1 from '../components/header1';
import cardImages from '../utils/cardsImages';

const MathJax = require('react-mathjax')
const tex = `f(x) \\forall = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`


export default function Info() {
    const randomImage = cardImages[Math.floor(Math.random() * cardImages.length)];
    console.log(randomImage);

    return (
        <>
            <FullHeader />
            {/* <MathJax.Provider> */}
                {/* <div> */}
                    {/* This is an inline math formula:  */}
                    {/* <MathJax.Node inline formula={'a = b'} /> */}
                    {/* And a block one: */}
                {/* <MathJax.Node formula={tex} /> */}
                {/* </div> */}
            {/* </MathJax.Provider> */}
            <div>
                <p>Food</p>
                <CardGenerator randomImage={randomImage} />
            </div>
            <Header1 />
            <ImageIntro />
            <Content1 />
            <ImageWithDescription  source={randomImage} />
            <Timeline />
        </>
    );
}

const CardGenerator = props => <h1>{props.randomImage}</h1>;
