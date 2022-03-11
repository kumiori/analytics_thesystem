import { useState, useEffect } from 'react'
import cardImages from '../utils/cardsImages';

function importAll(req) {
    let images = {};
    req.keys().map((item, index) => { images[item.replace('./', '')] = req(item); });
    return images;
}

const CardImages = importAll(
    require.context('../public/images/cards', false, /.jpg$/));

console.log('typeof', typeof(CardImages));
console.log('isArray', Array.isArray(CardImages));
console.log('prototype', Object.prototype.toString.call(CardImages));
function RndImageWithDescription(props) {
    const getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')
    console.log('getMethods', getMethods(CardImages));
    console.log(CardImages);
    console.log('Object.keys length', Object.keys(CardImages).length);


    // const [myState, setMyCard] = useState({
    //     myCard: "0"
    // });

    var num_cards = Object.keys(CardImages).length;
    const _rndIdx = Math.floor(Math.random() * num_cards)
    const randomImage = CardImages[_rndIdx];
    console.log('_rndIdx', _rndIdx);
    console.log('keys', Object.keys(CardImages));
    var _rnd_key = Object.keys(CardImages)[_rndIdx];
    var _rnd_src = CardImages[_rnd_key].default.src;
    console.log('rnd key', Object.keys(CardImages)[_rndIdx]);
    console.log('values', Object.values(CardImages));
    console.log('rnd img', CardImages[_rnd_key].default.src);
    console.log('rnd src', _rnd_src);

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
                                <strong>Cards, that's it.</strong>
                            </h3>
                            <p className="sys-text sys-fonts-style display-7">
                                Yet, in the flow, they show <em>structure</em>. 
                                The system is a fun game, it's an exchange game.
                                Wanna play? You pay.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default RndImageWithDescription;
