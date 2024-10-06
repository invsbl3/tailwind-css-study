import React, { useEffect, useState } from "react";




const LayoutPatterns = () => {
    const [windowDimensions, setwindowDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    console.log(windowDimensions);
    const handleResize = () => {
        setwindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }
    React.useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    const smDimension = 640;

    const rows = [];
    for (let i = 0; i < 12; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<div key={i} className="col-span-1 min-h-[50px] rounded-lg border-gray-400 border-2 p-2 max-sm:hidden">
            <div className="text-[10px] h-[90%] content-center ">col-span-1</div>
        </div>);
    }



    const cont = '<div className="m-4 grid sm:grid-cols-12 w-[90vw] gap-2">'
    const div1 = '<div className="bg-red-500 min-h-[100px] sm:col-span-2 rounded-lg"></div>';
    const div2 = '<div className="bg-blue-500 min-h-[100px] sm:col-span-8 rounded-lg"></div>';
    const div3 = '<div className="bg-green-500 hidden min-h-[100px] sm:col-span-2 sm:block rounded-lg"></div>';
    return (<>
        <div className="m-5">
            <h1>Layout Patterns</h1>
            <p>Tailwind is "Smaller Design First" oriented.<br />
                A good way to study is trying to copy layouts and their behaviours with device/screen size changes.</p>
            <h1>Tailwind Docs Design</h1>
            <p>
                The design pattern above is used on Tailwind Documentation Page!<br />
                3 layout components, the right one ~disapears~ in smaller screens</p>
        </div>

        <div className="m-4"><strong>Container Code:</strong>                     {(windowDimensions.width < smDimension) ? "grid (no grid-cols, so only one col, so one element per line)" : "grid sm:grid-cols-12"}
        </div>
        <div className="m-4 grid sm:grid-cols-12 w-[90vw] gap-2">
            {rows}
            <div className="bg-red-500 min-h-[100px] sm:col-span-2 rounded-lg p-4">
                <div className="text-sm h-[90%] content-center">
                    {(windowDimensions.width < smDimension) ? "(no code, so take all width of column)" : "sm:cols-span-2"}

                </div>

            </div>
            <div className="bg-blue-500 min-h-[100px] sm:col-span-8 rounded-lg p-4">
                <div className="text-sm h-[90%] content-center">
                    {(windowDimensions.width < smDimension) ? "(no code, so take all width of column)" : "sm:cols-span-8"}
                </div>
            </div>
            <div className="bg-green-500 hidden min-h-[100px] sm:col-span-2 sm:block rounded-lg p-4">
                <div className="text-sm h-[90%] content-center">                    {(windowDimensions.width < smDimension) ? "(hidden, so you shouldn't see this message :D)" : "sm:cols-span-2"}</div>
            </div>
        </div>

        <div className="m-4 w-[90vw] grid grid-cols-1 sm:grid-cols-2">
            <div className={"col-span-1 m-4 p-4 border-2 border-gray-400 rounded-lg".concat((windowDimensions.width < smDimension) ? "" : " border-transparent")}>
                <h1>When in small screens (sm) or above:</h1>
                <p>
                    container is a grid with 12 spaces: "grid-cols-12"<br />
                    first element takes 2 spaces: "col-span-2"<br />
                    second element takes 8 spaces: "col-span-8" <br />
                    third element takes the 2 avaiable spaces: "col-span-2" <br />
                </p>
            </div>


            <div className={"col-span-1 m-4 p-4 pt-0 border-2 border-gray-400 rounded-lg".concat((windowDimensions.width < smDimension) ? " border-transparent" : "")}>

                <h1>When in very small screens (less than sm size):</h1>
                <p> container is a grid (with no other commands, so the default is "grid-cols-1", or "one single column" which means "one element per line"<br />
                    third element (in green) is "hidden"</p>
            </div>
        </div>


        <div className="m-4"><h1>The "entire code"</h1>        </div>
        <div className="m-4"><strong>Container Code:</strong> {cont}</div>
        <div className="m-4 grid sm:grid-cols-12 w-[90vw] gap-2">
            <div className="bg-red-500 min-h-[100px] sm:col-span-2 rounded-lg p-4">
                <div className="text-sm h-[90%] content-center">{div1}</div>
            </div>
            <div className="bg-blue-500 min-h-[100px] sm:col-span-8 rounded-lg p-4">
                <div className="text-sm h-[90%] content-center">{div2}</div>
            </div>
            <div className="bg-green-500 hidden min-h-[100px] sm:col-span-2 sm:block rounded-lg p-4">
                <div className="text-sm h-[90%] content-center">{div3}</div>
            </div>
        </div>

    </>)
}

export default LayoutPatterns
