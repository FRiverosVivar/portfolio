import React from 'react';

const Card = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-xl">
            {children}
        </div>
    );
};

export default Card;
