import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import Classes from './App.module.css';
//import { useState } from 'react/cjs/react.development';


class App extends Component {
  state = {
    persons: [
      { id: '001' , name : 'Shivtaj', age : 28},
      { id: '010' , name : 'Shweta', age : 26},
      { id: '100' , name : 'Ruhanika', age : 1},
    ],
    otherState: 'some other value',
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
const persons = [...this.state.persons];
persons.splice(personIndex , 1);
this.setState({persons:persons})
}

nameChangedHandler = (event , id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {...this.state.persons[personIndex]};
//(alternative)const person = Object.assign({},this.state.persons[personIndex]);

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

  this.setState( {persons: persons});
}

togglePersonsHandler = () => {
 const doesShow =  this.state.showPersons;
 this.setState({showPersons: !doesShow});
}


render () {
  let persons = null;
  let btnClass = '';

  if (this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person , index ) => {
          return (
          <Person 
          click = {() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event , person.id)}/>
          );
        })}
        
      </div>  
    );
    btnClass = Classes.Red;
  }

  let assignedClasses = [];
  if(this.state.persons.length <= 2) {
    assignedClasses.push(Classes.red); //classes = ['red']
  }

  if(this.state.persons.length <= 1) {
    assignedClasses.push(Classes.bold); //classes =['red' , 'bold']
  }

  return (
    
    <div className= {Classes.App}> 
      <h1>Hi , I am a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working !</p>
      {/* <button onClick={this.switchNameHandler.bind(this , 'Shivtaj Malik')}>Switch Name</button> METHOD 1 FOR SETTING VALUE ON CLICKING BUTTON  */}
      {/* ALTERNATIVE METHOD BELOW : */}
      <button className = {btnClass}
      onClick={this.togglePersonsHandler}>Toggle Persons</button> 
      {/* //this.state.showPersons === true ? NOT OPTIMAL METHOD FOR LARGE PROJECTS  */}  
      {persons}
    </div>
  
  ); 
}

}

export default App;




 {/* NOT TO USE IN PROJECT WE WILL USE CLASS APP FOR BETTER PERFORMANCE
const App = (props) => {
  const [personsState , setPersonsState] = useState({
    persons : [
      { name : 'Shivtaj', age : 28},
      { name : 'Shweta', age : 26},
      { name : 'Ruhanika', age : 1},
    ], 
    otherState: 'some other value'
  });

  const [otherState , setOtherState] = useState('some other value');
  console.log(personsState , otherState);

 const switchNameHandler = () => {
    //console.log('was clicked!');
    // DON'T DO THIS : this.state.persons[0].name = 'Shivtaj Malik';
    setPersonsState( {persons:  [
      { name : 'Shivtaj Malik', age : 28},
      { name : 'Shweta', age : 26},
      { name : 'Ruhanika Malik', age : 1},
    ],
    //otherState: personsState.otherState
    } );
    };

    return (
      <div className="App"> 
        <h1>Hi , I am a React App</h1>
        <p>This is really working !</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}
        click = {this.switchNameHandler}>My Hobbies: Sketching</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    ); 
    // BEST PRACTICE TO WRAP EVERYTHING IN ONE ROOT ELEMET SUCH AS HERE IN 'div'
    // WE DON'T USE BELOW METHOD AS IT IS QUITE LENGTHY AND THAT MUCH EFFICIENT AS JSX. 
    // return React.createElement('div' , {className:'App'} , React.createElement( 'h1' ,null, 'Hi , I am a React App !!!'));
}


export default App; 
 */}

 {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this , 'Malik!')}
        changed = {this.nameChangedHandler}>My Hobbies: Sketching</Person>
        <Person
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/> */}