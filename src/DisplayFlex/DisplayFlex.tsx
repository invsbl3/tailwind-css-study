import React from 'react';

const body = `
        <div className="grid h-40 content-center rounded bg-red-500">
            <button className="bg-blue-500">BUTTON</button>
        </div>

        <div className="flex h-40 content-center rounded bg-green-500">
            <button className="bg-blue-500">BUTTON</button>
        </div>

        <div className="flex h-40 justify-center rounded bg-red-500">
            <button className="bg-blue-500">BUTTON</button>
        </div>

        <div className="flex h-40 justify-center rounded bg-green-500">
            <div><button className="bg-black text-white">BUTTON</button></div>
        </div>
        <div className="flex h-40 justify-center items-center rounded bg-red-500">
            <div><button className="bg-black text-white">BUTTON</button></div>
        </div>

        <div className="flex h-40 justify-center content-center rounded bg-green-500">
            <button className="bg-black text-white">BUTTON</button>
        </div>
`;


const DisplayFlex = () => {

    const populateData = async () => {


    }


    return (<div className='flex'>

        <div className="learn-section">

            <div className="learn-box grid content-center">
                <button className="bg-blue-500">grid content-center</button>
            </div>

            <div className="learn-box grid content-center">
                <div><button className="bg-blue-500">grid content-center + button inside a div</button>
                </div>
            </div>

            <div className="learn-box flex content-center ">
                <button className="bg-blue-500">flex content-center</button>
            </div>

            <div className="learn-box flex content-center ">
                <div> <button className="bg-blue-500">flex content-center + button inside a div</button></div>
            </div>


            <div className="learn-box flex justify-center">
                <button className="bg-blue-500">flex justify-center</button>
            </div>

            <div className="learn-box flex justify-center ">
                <div><button className="bg-black text-white">flex justify-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center content-center">
                <button className="bg-black text-white">flex justify-center content-center</button>
            </div>

            <div className="learn-box flex justify-center content-center ">
                <div><button className="bg-black text-white">flex justify-center content-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center items-center ">
                <div><button className="bg-black text-white">flex justify-center items-center + button inside a div</button></div>
            </div>

        </div>

    </div>
    )
}

export default DisplayFlex
