import { useState, useEffect } from 'react'
import cardImages from '../utils/cardsImages';
import Link from "next/link";

function importAll(req) {
    let images = {};
    req.keys().map((item, index) => { images[item.replace('./', '')] = req(item); });
    return images;
}

function shuffleQuestions(rnd, list) {
    var num_list = Object.keys(list).length;
    const _rndIdx = Math.floor(rnd * num_list)
    var _rnd_key = Object.keys(list)[_rndIdx];
    var random = list[_rnd_key];

    return random;
}

function RndImageWithFixedDescription(props) {
    // const cards = importAll(
    //     require.context('../public/images/cards', false, /.jpg$/));
    //     console.log('RndImageWithFixedDescription', cards);
    const questions = ["Facts matter less than logic. T/F?",
    "Would you like to join Y (A) vs.  N (∀)",
    "What do you see most in society? Positive + (A) or Negative - (∀)",
    "Think of energy. Do you feel high (A) or low (∀)?",
    "Think of a problem. is it .. or neg.",
    "Think of a crack. is it pos. or neg.",
    "Think of a catastrophe picturing something. Is it positive (∀) or negative (A)?",
    "The world lives on a sphere ** ... OK A / wTF (∀)",
    "The world is a ball ... T/F",
    "The system is a game/would you like to play? Y/N",
    "Do you feel online A  or offline ()",
    "one way or return tickets?  ... A/ZZ",
    "Social inequalities are a priority for us all",
    "Social inequalities are a priority for me",
    "Social inequalities are a priority for many",
    "Poverty and hunger are a priority",
    "The environment a priority for me",
    "Quality education a priority for me",
    "Good health and well-being a priority for me",
    "Gender equality a priority for me",
    "If I made more than my teacher I would listen",
    "If I made more than my teacher I would not listen",
    "I have experienced infinity, Yes (A) or No (∀)?",
    "I have experienced pure bliss, Yes (A) or No (∀)?",
    "I had access to quality education,  Yes (A) or No (∀)",
    "A change in the distribution of the resources is necessary,  Yes (A) or No (∀)",
    "Do you think the ~system can change,  Yes (A) or No (∀)",
    "Politics are giving me enough space to give my contribution,  True (A) or False (∀)",
    "Politics are giving me enough space to express my ideas,  True (A) or False (∀)",
    "Women and men should earn the same amount for equal job position, True (A) or False (∀)",
    "Men and women should earn the same amount for equal job position, True (A) or False (∀)",
    "Women and men are equal",
    "Men and women are equal",
    "Power relations should be reversed, Y/N",
    "Power relations should are being reversed, Y/N",
    "Climate change is real",
    "I speak more than one language ",
    "I really like tobacco ",
    "I really like alcohol ",
    "I read natural signs",
    "I need time",
    "I need calm",
    "I like the current state if the World",
    "I know what Sustainable Development Goals are",
    "I know all available information",
    "I have a dream?",
    "I feel you may give more to the society around you",
    "I feel work is eating me alive",
    "I am frustrated not to be able to have a concrete impact in my society?",
    "I am frustrated not to be able to have a concrete impact in Our society?",
    "Am I safe?",
    "Am I feeling safe?",
    "Do you feel safe?",
    "Do you feel free?",
    "Do you feel free-er?",
    "Am I feeling free?",
    "I have lost my memory", 
    "I care about hunger",
    "I am hungry",
    "Poverty is an issue",
    "Everyone should have access to quality education, True (A) or False (∀)",
    "Everyone is entitled to good health and well-being, True (A) or False (∀)",
    "Our societies are unequal, True (A) or False (∀)",
    "The world needs to undergo notable changes to be a good place, True (A) or False (∀)",
    "Allocation of resources in the world is fair, True (A) or False (∀)",
    "I am satisfied with the work of my political representatives at national level,  True (A) or False (∀)",
    "Do enjoy your childhood?*,  True (A) or False (∀) ",
    "We need to radically change our lifestyle to safeguard the environment,  True (A) or False (∀)",
    "Would you say: I am feeling fine? Yes (A) or No (∀)",
    "I-and-you feel...connected? Yes (A) or No (∀)",
    "I feel...connected, Yes (A) or No (∀)",
    "I am afraid of death, True (A) or False (∀)",
    "(lift questions from kata course)",
    "... would I like to share?, Yes (A) or No (∀)",
    "I wish a role in crafting Our future - in my present, Yes (A) or No (∀)",
    // sparo domande
    "I know which direction to take, True (A) or False (∀)",
    "I find answers by my-Self, True (A) or False (∀)",
];


    questions.push("We shall serve food. ------- -- Would you rather like to feed your belly (A) or your spirit (∀)");
    questions.push("How are you feeling. ------- -- A or ∀");
    
    console.log(questions);

    const [question, setQuestion] = useState(() => {
        return shuffleQuestions(Math.random(), questions);
    });    

    // console.log('rndSrc', rndSrc);
    
    return (
        <section className="image2 cid-sZpWNRPN3l" id="image2-s" style={{background: "black"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-6">
                        <div className="image-wrapper align-center">
                            <h3 className="sys-section-title sys-fonts-style display-5" style={{width: "400px"}}>¿ { question }?</h3>
                            <button onClick={ e => { 
                                    const rndQuestion = shuffleQuestions(Math.random(), questions);
                                    setQuestion(rndQuestion);} 
                                } className="btn btn-primary display-4  btn-lg">
                                A
                            </button>
                            <button onClick={ e => { 
                                    const rndQuestion = shuffleQuestions(Math.random(), questions);
                                    setQuestion(rndQuestion);} 
                                } className="btn btn-primary display-4  btn-lg">
                                ∀
                            </button>
                            
                            <p className="sys-description sys-fonts-style mt-2 align-center display-4">
                                Sharing questions full capacity on the web2 at ~800Tbps.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm col-lg">
                        <div className="text-wrapper">
                            <p className="sys-text sys-fonts-style display-7">
                                {/* We dissected one  complicated issue. We now serve question bullets sharper than silver, */}
                                {/* swiftly deployed on a public blockchain. */}
                                Facts without logic are factoids. Facts with logic are arguments. 
                                Arguments with a content lead to concepts. Concepts open doors, never to be closed. 
                            </p>

                            <p className="sys-text sys-fonts-style display-7">
                                ...and sharing is caring about one’s expanding boundaries,                                
                                {/* Our questions and your attention turn a cocktail - old fashion - into a sonic glow. Drink it slow, */}
                                {/* pay attention: an explosive mix. */}
                                {/* Tricks? Forget: its essence is nowhere fixed. */}
                                {/* : transforms an analcoholic beverage into a spirit fertiliser.  */}
                            </p>
                            <p className="sys-text sys-fonts-style display-7">For you, yourself, and all the rest.</p>

                            <p className="sys-text sys-fonts-style display-7">
                                You are here to play.
                            </p>
                            <div className="sys-section-btn mb-4">
                                {/* <button onClick={ e => shuffleQuestions(e) } className="btn btn-primary display-4"> */}
                                <button onClick={ e => { 
                                    // console.log('caca', cards);
                                    // console.log('questions', questions);
                                    const rndQuestion = shuffleQuestions(Math.random(), questions);
                                    // console.log('rndQuestion', rndQuestion);
                                    setQuestion(rndQuestion);
                                } 
                                } className="btn btn-primary display-4">
                                Roll your dice. We ask.
                                {/* 0#####----------------> */}
                                </button>
                            </div>
                            <p className="sys-text sys-fonts-style display-7">
                                Let's <em>play</em>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default RndImageWithFixedDescription;
