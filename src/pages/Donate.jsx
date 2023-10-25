
import React from 'react'
import momo from '../images/momo.jpg';
const Donations = () => {

    return (
        <>
            <div className="w-full max-w-full max-h-full overflow-auto scrollbar-hide md:scrollbar-default">
            <div className="w-30 sm:w-30">
                <img className='w-30 sm:w-30' src={momo} alt="" />
            </div>
            </div>
        </>
    )
}

export default Donations