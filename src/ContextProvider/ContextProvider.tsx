import {createContext} from 'react'



export const Context = createContext({});


const ContextProvider = (props) => {

  const studiess = [
        
    {
        name:'display-flex-grid',
        component: 'DisplayFlex'
    },
    {
      name:'other-lesson',
      component: 'OtherLesson'
  }
        ];

  const studies = studiess.map(item=> ({...item, path: '../Lessons/'.concat(item.component, '/', item.component, '.tsx')}));

  console.log(studies);


  const contextValue = { studies }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
