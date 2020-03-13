import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor'); 
  }

  state = {
    persons: [
      { id: '001' , name : 'Shivtaj', age : 28},
      { id: '010' , name : 'Shweta', age : 26},
      { id: '100' , name : 'Ruhanika', age : 1},
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props , state) {
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps , nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

deletePersonHandler = (personIndex) => {
const persons = [...this.state.persons];
persons.splice(personIndex , 1);
this.setState({persons:persons})
};

nameChangedHandler = (event , id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {...this.state.persons[personIndex]};
//(alternative)const person = Object.assign({},this.state.persons[personIndex]);

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

  this.setState((prevState , props) => {
    return {
    persons: persons , 
    changeCounter: prevState.changeCounter + 1
    };
  });
};

togglePersonsHandler = () => {
 const doesShow =  this.state.showPersons;
 this.setState({showPersons: !doesShow});
};

loginHandler = () => {
  this.setState({authenticated: true});
};

render () {
  console.log('[App.js] render');
  let persons = null;

  if (this.state.showPersons){
        persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}
          />;
  }

  return (
    <Aux>
       <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated , login: this.loginHandler}} >
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            // login={this.loginHandler}
          />
        ) : null}
      {persons}
      </AuthContext.Provider>
      </Aux>
  ); 
}

}

export default withClass(App , Classes.App);




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


export default App; 
 */

 /* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this , 'Malik!')}
        changed = {this.nameChangedHandler}>My Hobbies: Sketching</Person>
        <Person
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/> */