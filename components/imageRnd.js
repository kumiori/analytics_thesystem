import { useState, useEffect } from 'react'
import cardImages from '../utils/cardsImages';
import Link from "next/link";

function importAll(req) {
    let images = {};
    req.keys().map((item, index) => { images[item.replace('./', '')] = req(item); });
    return images;
}

function shuffleCards(rnd, cards) {
    console.log('this.cards', cards)
    var num_cards = Object.keys(cards).length;
    const _rndIdx = Math.floor(rnd * num_cards)
    var _rnd_key = Object.keys(cards)[_rndIdx];
    var random = cards[_rnd_key].default.src;

    return random;
}

function RndImageWithFixedDescription(props) {
    const cards = importAll(
        require.context('../public/images/cards', false, /.jpg$/)
        );

    const [card, setCard] = useState(() => {
        console.log(cards);
        return shuffleCards(Math.random(), cards);
    });    

    // console.log('rndSrc', rndSrc);
    
    return (
        <section className="image2 cid-sZpWNRPN3l" id="image2-s" style={{background: "black"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="image-wrapper">
                            <img src={ card } alt="Card"  style={{width: "400px"}}/>
                            <p className="sys-description sys-fonts-style mt-2 align-center display-4">
                                Check the constant (C).
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg">
                        <div className="text-wrapper">
                            <h3 className="sys-section-title sys-fonts-style display-5">
                                <strong>Cards, that&apos;s it.</strong>
                            </h3>
                            <h4 className="sys-section-subtitle sys-fonts-style mb-3 display-6">
                                Yet, in the flow, they show <em>structure</em>. 
                            </h4>
                            <p className="sys-text sys-fonts-style display-7">
                                The system is a fun game, seen from the outside.
                                An exchange game, give or take: is that all it is?
                            </p>
                            <p className="sys-text sys-fonts-style display-7">
                                Rules are never clear, <br /> laws don&apos;t necessarily intersect.
                            </p>
                            <p className="sys-text sys-fonts-style display-7">
                                We dissect and serve bullets sharper than silver.
                            </p>

                            <p className="sys-text sys-fonts-style display-7">
                                You are here to play.
                            </p>
                            <div className="sys-section-btn mb-4">
                                {/* <button onClick={ e => shuffleCards(e) } className="btn btn-primary display-4"> */}
                                <button onClick={ e => { 
                                    // console.log('caca', cards);
                                    // console.log('card', card);
                                    const rndSrc = shuffleCards(Math.random(), cards);
                                    // console.log('rndSrc', rndSrc);
                                    setCard(rndSrc);
                                } 
                                } className="btn btn-primary display-4">
                                Roll your dice. Who you play?
                                {/* 0#####----------------> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default RndImageWithFixedDescription;
