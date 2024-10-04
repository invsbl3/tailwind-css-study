import React, { Suspense, useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Context } from '../ContextProvider/ContextProvider';

const Lesson = () => {
    const study = useParams().lesson;
    console.log(study);

    const { studies } = useContext(Context);

    console.log(studies, study);

    const thisStudy = studies.filter(item => item.name === study)[0];

    const componentPath = thisStudy.path;
    const Component = React.lazy(() => import(componentPath));

    return (<>
        <div className='flex items-center gap-4 m-2'>
            <h1><strong>Study:</strong> {thisStudy.name}</h1>
            <Link to='/'><button >Back to Menu</button></Link>
        
        </div>
        <Suspense fallback={<div>You won't see this, but, just in case, it's Loading...</div>}>
            <Component />
        </Suspense>
    </>
    )

}



export default Lesson
