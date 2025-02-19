import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 '>
            <p className='text-yellow-500 text-center mb-2 '>---{subHeading}---</p>
            <h3 className='text-4xl font-semibold text-center uppercase border-y-4 py-4 mb-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;