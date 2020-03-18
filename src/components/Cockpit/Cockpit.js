import React from 'react';
import Classes from './Cockpit.module.css';
import Aux from '../../hoc/Auxiliary';

const  cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = Classes.Button;

  if (props.showPersons) {
    btnClass = [Classes.Button, Classes.Red].join( ' ' );
  }
      
  if(props.personsLength <= 2) {
    assignedClasses.push(Classes.red); //classes = ['red']
  }
  
  if(props.personsLength <= 1) {
    assignedClasses.push(Classes.bold); //classes =['red' , 'bold']
  }

  return (
    <Aux>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join( ' ' )}>This is really working!</p>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
    </Aux>
);
}

export default cockpit;

