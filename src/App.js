import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jake', age: 31 },
      { name: 'Kyle', age: 34 }
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'Jacob';
    this.setState({persons: [
      { name: 'Jacob', age: 31 },
      { name: 'Kyle', age: 34 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p>This is working!</p>
        <button onClick={this.switchNameHandler}>
                Switch name 
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Skateboarding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Biking</Person>
      </div>
    );
    // return React.createElement('h1', null, React.createElement('h2', {className: 'App'}, 'This is the real deal'))
  }
}

export default App;
