import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Context } from '../ContextProvider/ContextProvider';



const importView = (lesson: any) =>
    React.lazy(() =>
        import(lesson.path).catch(() =>
            import('../Lessons/NullLesson/NullLesson.tsx')
        )
    );



const Lesson = () => {
    const study = useParams().lesson;
    console.log('param from url: ', study);

    const context: any = useContext(Context);
    const studies = context.studies;

    const thisStudy = studies.filter((item: any) => item.name === study)[0];
    console.log(thisStudy);

    const [views, setViews] = useState<Array<any> | null>([]);

    useEffect(() => {
        async function loadViews() {
            const componentPromises =
                studies.map(async (lesson: any) => {
                    if (lesson.name === thisStudy.name) {
                        const View = await importView(lesson);
                        console.log(lesson);
                        return <View key={lesson.name} />;
                    }
                });

            Promise.all(componentPromises).then(setViews);
        }

        loadViews();
    }, [studies]);












    console.log(studies, study);

    const ThisStudy = studies.filter((item: any) => (item.name === study))[0];
    const Component = [ThisStudy.component];
    console.log(Component);
    return (<>
        <div className='flex items-center gap-4 m-2'>
            <h1><strong>Study:</strong> {ThisStudy.name}</h1>
            <Link to='/'><button >Back to Menu</button></Link>

        </div>
        <Suspense fallback={<div>You won't see this, but, just in case, it's Loading...</div>}>
            <div className="container">{views}</div>
        </Suspense>
    </>
    )

}



export default Lesson