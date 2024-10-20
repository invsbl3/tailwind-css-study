import { createContext } from 'react'



export const Context = createContext({});


const ContextProvider = (props: any) => {

  const studiess = [

    {
      name: 'display-flex-grid',
      component: 'DisplayFlex'
    }, {
      name: "layout-patterns",
      component: "LayoutPatterns"
    },
    {
      name: 'other-lesson',
      component: 'OtherLesson'
    },
    {
      name: "CSS in JS, line-code, external file and tailwind",
      component: "CssLesson"
    }
  ];

  const studies = studiess.map(item => ({ ...item, path: '../Lessons/'.concat(item.component, '/', item.component, '.tsx') }));

  console.log(studies);


  const contextValue = { studies }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
