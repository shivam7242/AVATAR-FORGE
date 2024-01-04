import React, { useContext, useEffect, useState } from 'react'
import { SpeakContext } from './context/SpeakContext'
import Qr from './Qr'

function Reservation() {
    const [showQr,setShowQr] =useState(false);
    const {toSpeak, nextToSpeak} = useContext(SpeakContext)
    useEffect(()=>{
        nextToSpeak("For Reservations : Would you like to book a room or check availability for specific dates? Here are some rooms Available for upcoming dates.")
    },[toSpeak])
  return (
    <div className='bg-neutral-500 p-2 flex flex-col w-[450px]'>
        <div className='bg-white p-2'><p>Would you like to book a room or check availability for specific dates?</p></div>
        <div className='bg-white p-2'><p>Here are some rooms Available for upcoming dates.</p></div>
        <div className='flex bg-white p-2 mt-1'>
            <div><img className='w-[200px]' src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww" alt='image'/></div>
            <div className='p-2'>
                <div className='p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente illo ex inventore oluta ape.</div>
                <div className='flex'>
                <div>
                    <p>Price - ₹120</p>
                    <p>Rating - 4★</p>
                    </div>
                    <div onClick={()=>{setShowQr(true)}} className='m-auto'><button className='m-1 bg-red-600'> Book</button></div>
                    {
                        showQr ? <Qr/> : ""
                    }
                </div>
            </div>
        </div>
        <div className='flex bg-white p-2 mt-1'>
            <div><img className='w-[200px]' src="https://cyberviewresort.com/wp-content/uploads/sites/52/2023/11/PHOTO-2023-11-08-13-18-08-002.jpg" alt='image'/></div>
            <div className='p-2'>
                <div className='p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente illo ex inventore oluta ape.</div>
                <div className='flex'>
                <div>
                    <p>Price - ₹120</p>
                    <p>Rating - 4★</p>
                    </div>
                    <div className='m-auto'><button className='m-1 bg-red-600'> Book</button></div>

                </div>
            </div>
        </div>
        <div className='flex bg-white p-2 mt-1'>
            <div><img className='w-[200px]' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg" alt='image'/></div>
            <div className='p-2'>
                <div className='p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente illo ex inventore oluta ape.</div>
                <div className='flex'>
                <div>
                    <p>Price - ₹120</p>
                    <p>Rating - 4★</p>
                    </div>
                    <div className='m-auto'><button className='m-1 bg-red-600'> Book</button></div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Reservation