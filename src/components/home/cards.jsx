import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="bg-white sm:w-[280px] sm:h-[300px] rounded-2xl mb-5 mx-5 shadow-2xl md:px-7 md:py-5 px-2 py-2">
            <h1 className="font-bold md:font-extrabold text-[14px] sm:text-[20px] text-center mb-2 sm:mb-5">
                {title}
            </h1>
            <p className="text-[10px] sm:text-[16px]">
                {description}
            </p>
        </div>
    );
}

export default Card;
