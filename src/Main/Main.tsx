import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    const studies = ['display-flex-grid', 'other-study-in-near-future'];



    return (<>
        <div>
            Main Peige
        </div>
        <div className="h-100 w-[50%] m-10 bg-red-500 grid">
            {studies.map((study, index) => (
                <Link to={study} key={index}>
                    <div className="w-40 m-2 p-2 text-center content-center bg-green-400">
                        {study}
                    </div>
                </Link>
            ))}
        </div>
    </>
    )
};

export default Main;
