import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import Classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render () { 
    console.log('[Person.js] rendering.....');
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated !</p> : <p>Please Log In</p>}
        </AuthContext.Consumer>
        
        <p key ="01" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key ="02" >{this.props.children}</p>
        <input  
        key ="03" 
        //ref = {(inputEl) => {this.inputElement = inputEl}} //to focus or highlight
        ref = {this.inputElementRef}
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} 
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person , Classes.Person);

