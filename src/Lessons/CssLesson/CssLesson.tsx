import React from 'react'

const boxStyle = {
    backgroundColor: 'blue',
    width: '100%',
    height: '200px',
    alignContent: 'center',
    textAlign: 'center',
    color: 'white'
};


const CssLesson = () => {
    return (
        <div className='grid grid-col-1 gap-2 w-[90%] ml-[5%]'>
            <div style={boxStyle}>JS Object imported into component</div>
            <div style={{
                backgroundColor: 'blue',
                width: '100%',
                height: '200px',
                alignContent: 'center',
                textAlign: 'center',
                color: 'white'
            }}> JS Object direct into component</div>
            <div className='w-[100%] h-[200px] bg-[#0000ff] text-white text-center content-center'>
                Tailwind CSS Div
            </div>
        </div>
    )
}

export default CssLesson
