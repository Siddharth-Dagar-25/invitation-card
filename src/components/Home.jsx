import React from 'react'
import frontImage from "../utils/WhatsApp Image 2024-01-26 at 20.17.18.jpeg";

const Home = () => {
    return (
        <div className=" bg-zinc-900 h-lvh ">
            <div>
                {/* <img
                    className="absolute left-0 top-0 w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    src={frontImage}
                    alt="App screenshot"
                    width={1824}
                    height={1080}
                /> */}
                <h1 className='text-white '>Welcome to 10th-E REUNION HOUSE PARTY 🎉 </h1>
                <br>
                </br>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.185724814421!2d77.31746249999999!3d28.7139951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbceb7a02b2d%3A0x22624082bfa37bc9!2sMELARAM%20FARM%20GATE%20NO-%204!5e0!3m2!1sen!2sin!4v1706287371328!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};
export default Home