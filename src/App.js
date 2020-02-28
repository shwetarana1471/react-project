import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { useState } from 'react/cjs/react.development';

class App extends Component {
  state = {
    persons: [
      { name : 'Shivtaj', age : 28},
      { name : 'Shweta', age : 26},
      { name : 'Ruhanika', age : 1},
    ],
    otherState: 'some other value'
  }

switchNameHandler = (newName) => {
  //console.log('was clicked!');
  // DON'T DO THIS : this.state.persons[0].name = 'Shivtaj Malik';
  this.setState( {
    persons: [
      { name : newName, age : 28},
      { name : 'Shweta', age : 26},
      { name : 'Ruhanika Malik', age : 1}
    ]
  })
}

nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      { name :'Shivtaj' , age : 28},
      { name : event.target.value, age : 26},
      { name : 'Ruhanika Malik', age : 1}
    ]
  })
}

render() {
  const style = {
    backgroundColor: 'white',
    font:'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor:'pointer'
  };

  return (
    <div className="App"> 
      <h1>Hi , I am a React App</h1>
      <p>This is really working !</p>
      {/* <button onClick={this.switchNameHandler.bind(this , 'Shivtaj Malik')}>Switch Name</button> METHOD 1 FOR SETTING VALUE ON CLICKING BUTTON  */}
      {/* ALTERNATIVE METHOD BELOW : */}
      <button 
      style={style}
      onClick={() => this.switchNameHandler('Shivtaj Malik!!')}>Switch Name</button> 
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this , 'Malik!')}
      changed = {this.nameChangedHandler}>My Hobbies: Sketching</Person>
      <Person
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
    </div>
  ); 
}

}

export default App; 

/* NOT TO USE IN PROJECT WE WILL USE CLASS APP FOR BETTER PERFORMANCE
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

export default App; */
