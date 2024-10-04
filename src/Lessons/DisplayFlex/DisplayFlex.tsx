
const body = `
            <div className="learn-box grid content-center">
                <button >grid content-center</button>
            </div>

            <div className="learn-box grid content-center">
                <div><button >grid content-center + button inside a div</button>
                </div>
            </div>

            <div className="learn-box flex content-center ">
                <button >flex content-center</button>
            </div>

            <div className="learn-box flex content-center ">
                <div> <button >flex content-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center">
                <button >flex justify-center</button>
            </div>

            <div className="learn-box flex justify-center ">
                <div><button >flex justify-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center content-center">
                <button >flex justify-center content-center</button>
            </div>

            <div className="learn-box flex justify-center content-center ">
                <div><button >flex justify-center content-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center items-center ">
                <div><button >flex justify-center items-center + button inside a div</button></div>
            </div>
`;


const DisplayFlex = () => {

    
    return (<div className='flex'>

        <div className="learn-section">

            <div className="learn-box grid content-center">
                <button >grid content-center</button>
            </div>

            <div className="learn-box grid content-center">
                <div><button >grid content-center + button inside a div</button>
                </div>
            </div>

            <div className="learn-box flex content-center ">
                <button >flex content-center</button>
            </div>

            <div className="learn-box flex content-center ">
                <div> <button >flex content-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center">
                <button >flex justify-center</button>
            </div>

            <div className="learn-box flex justify-center ">
                <div><button >flex justify-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center content-center">
                <button >flex justify-center content-center</button>
            </div>

            <div className="learn-box flex justify-center content-center ">
                <div><button >flex justify-center content-center + button inside a div</button></div>
            </div>

            <div className="learn-box flex justify-center items-center ">
                <div><button >flex justify-center items-center + button inside a div</button></div>
            </div>

        </div>

        <div className='w-[50%]'>{body}</div>
    </div>
    )
}

export default DisplayFlex
