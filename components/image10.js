import { useState, useEffect } from 'react'
import cardImages from '../utils/cardsImages';
import Link from "next/link";

function importAll(req) {
    let images = {};
    req.keys().map((item, index) => { images[item.replace('./', '')] = req(item); });
    return images;
}

const CardImages = importAll(
    require.context('../public/images/cards', false, /.jpg$/)
    );

    // console.log('typeof', typeof(CardImages));
    // console.log('isArray', Array.isArray(CardImages));
    // console.log('prototype', Object.prototype.toString.call(CardImages));

function shuffleCards() {
    var num_cards = Object.keys(CardImages).length;
    const _rndIdx = Math.floor(Math.random() * num_cards)
    const randomImage = CardImages[_rndIdx];
    var _rnd_key = Object.keys(CardImages)[_rndIdx];
    var _rnd_src = CardImages[_rnd_key].default.src;
    return _rnd_src;
}

function RndImageWithDescription(props) {
    const getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')

    var num_cards = Object.keys(CardImages).length;
    const _rndIdx = Math.floor(Math.random() * num_cards)
    const randomImage = CardImages[_rndIdx];
    var _rnd_key = Object.keys(CardImages)[_rndIdx];
    var _rnd_src = CardImages[_rnd_key].default.src;

    return (
        <section className="image2 cid-sZpWNRPN3l" id="image2-s" style={{background: "black"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="image-wrapper">
                            <img src={ _rnd_src } alt="Card"  style={{width: "400px"}}/>
                            <p className="sys-description sys-fonts-style mt-2 align-center display-4">
                                {/* Grab form json on IPFS */}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg">
                        <div className="text-wrapper">
                            <h3 className="sys-section-title sys-fonts-style mb-3 display-5">
                                <strong>Questions asked, <em>you ask</em>, that&apos;s it?</strong>
                            </h3>
                            <p className="sys-text sys-fonts-style display-7">
                                Yet, in the flow, they show <em>structure</em>. 
                                The system is a fun game, it&apos;s an exchange game.
                                Wanna play? You pay.
                            </p>
                        </div>
                        <div className="mbr-section-btn mb-4">
                            <Link href="#">
                                <button onClick={() => shuffleCards}
                                className="btn btn-primary display-4"
                                >
                                Feel like playing dice?
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default RndImageWithDescription;
