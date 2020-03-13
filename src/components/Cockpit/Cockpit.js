import React , {useEffect, useRef} from 'react';
import Classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit  = (props) => {
    const toggleButtonRef = useRef(null);
    // toggleButtonRef.current.click();

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request ... 
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        //   }, 1000);
        toggleButtonRef.current.click();
          return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
          };
        }, []);

        useEffect(() => {
          console.log('[Cockpit.js] 2nd useEffect');
          return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
          };
    });

    // useEffect();

    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = Classes.Red;
    }
    

    if(props.personsLength <= 2) {
        assignedClasses.push(Classes.red); //classes = ['red']
    }

    if(props.personsLength <= 1) {
        assignedClasses.push(Classes.bold); //classes =['red' , 'bold']
    }


    return (
        <div className = {Classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working !</p>
            <button ref = {toggleButtonRef} className = {btnClass} onClick={props.clicked}>
              Toggle Persons
            </button> 
            <AuthContext.Consumer>
              {context => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(Cockpit);