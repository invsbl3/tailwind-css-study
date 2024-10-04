import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../ContextProvider/ContextProvider';



const Main = () => {

    const context: any = useContext(Context); 
    const studies = context.studies;


    return (<>
        <div>
            Main Peige with All the Studies:
        </div>
        <div className="w-[100%] pt-4 pb-4 pl-2 bg-red-500 grid">
            {studies.map((study: any, index: number) => (
                <Link to={study.name} key={index} >
                        <button>{study.name}</button>
                </Link>
            ))}
        </div>
    </>
    )
};

export default Main;
