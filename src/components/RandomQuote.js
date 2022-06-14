import React from "react";
import {MdAutorenew} from "react-icons/md";
import axios from "axios";
import {BsArrowRight} from "react-icons/bs";
import Quotes from "./Quotes";

const base = "https://quote-garden.herokuapp.com/api/v3/quotes";

export default function RandomQuote(){
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState([]);
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        getRandom();
    }, []);

    const getRandom = async () => {
        await axios.get(`${base}/random`).then((res) => {
            setQuote(res.data.data[0]);
        });
        setAuthor([]);
        setShow(true);
    };

    const authorPage = async (x) => {
        const data = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${x}`);
        const res = await data.json();
        setAuthor(res.data);
    }

    return (
        <div className="flex flex-col gap-16 mx-10 font-raleway">
                <div className="flex mt-4 justify-end">
                    <button onClick={() => {
                        getRandom();
                    }} 
                    className="flex gap-2">
                        <p>random</p>
                        <i className="mt-1"><MdAutorenew/></i>
                    </button>
                </div>
                {show? (
                    <div className="container mx-auto h-auto justify-center flex flex-row gap-16">
                        <div className="bg-rectangle h-auto w-2"></div>
                        <div className="flex flex-col gap-20">
                            <q className="text-black w-[600px] text-2xl leading-10 align-middle">{quote.quoteText}</q>
                            <button className="group hover:bg-hoverbg mx-auto w-full p-6" onClick={() => 
                                {
                                    setShow(false);
                                    authorPage(quote.quoteAuthor);
                                }}>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-smallText font-bold group-hover:text-white">{quote.quoteAuthor}</p>
                                        <p className="text-sm text-reallySmall text-left group-hover:text-titlehover mr-4">{quote.quoteGenre}</p>
                                    </div>
                                    <i className="mt-2 invisible group-hover:visible"><BsArrowRight color="white"/></i>
                                </div>
                            </button>
                        </div>
                    
                    </div> 
                ) : 
                (
                    <div className="flex flex-col gap-8">
                        <div className="text-2xl font-bold">{quote.quoteAuthor}</div>
                        {author.map((x) => {
                                return <Quotes key={x.id} quote={x}/>
                            })} 
                        
                    </div>
                )}
            </div>  
    )
}

export {base};
