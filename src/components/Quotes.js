import React from "react";


export default function Quotes({quote}) {
    return (
        <div>
            <div className="container mx-auto h-auto justify-center flex flex-row gap-16">
                <div className="bg-rectangle h-auto w-2"></div>
                <div className="flex flex-col">
                    <q className="text-black w-[600px] text-2xl leading-10 align-middle">{quote.quoteText}</q>
                </div>
            </div> 
            
        </div>
    )
}