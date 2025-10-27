import React, { useState } from 'react'
import Loader from './Loader';

const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The harder the conflict, the greater the triumph.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals."
];

const Home = () => {

    const [quote, setQuote] = useState("Hey How are You want a Quote ")
    const [loading, setLoading] = useState(false)

    const createQuote = async () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    const onSubmitHandler = async () => {
        setLoading(true)
        setTimeout(() => {
            const newQuote = createQuote();
            setQuote(newQuote)
            setLoading(false)
        }, 1500);
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 p-5 gap-10">
                <div className='text-7xl font-extrabold text-white text-center p-2 '>Quote Generator</div>
                <div className='flex flex-col gap-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg py-18 md:py-15 w-full max-w-190'>
                    {loading ?(
                        <div className='flex justify-center h-15 items-center m-8'><Loader /></div>
                    ):( 
                        <p className='text-white text-center text-2xl p-2 italic mb-4 animate-fade-in'>{quote}</p>
                    )}
                    <div className='w-80 flex justify-center w-full'>
                        <button
                            className='py-2 px-6 text-lg italic bg-green-700 backdrop-blur-md shadow-lg rounded-lg text-white hover:scale-105 hover:bg-green-600/90 transition-all'
                            onClick={onSubmitHandler}
                        >
                            Generate Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home