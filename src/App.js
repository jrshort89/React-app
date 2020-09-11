import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '123a', name: 'Jake', age: 31 },
      { id: '123b', name: 'Kyle', age: 34 }
    ],
    showPersons: false
  };

  deletePersonHandler(personIndex) {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (charIndex) => {

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p>This is working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
                Toggle Persons 
        </button>
        {persons}
      </div>
    );
    // return React.createElement('h1', null, React.createElement('h2', {className: 'App'}, 'This is the real deal'))
  }
}

export default App;
