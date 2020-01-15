//Method Binding w/ arrow function
//https://reactjs.org/docs/handling-events.html
 // Binding using arrow function callback
        //   <button onClick={(e) => this.handleRemoveAll(e)}>Remove All</button>
        //   The problem with this syntax is that a different callback is created each time the handleRemoveAll button renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.
import React from 'react';
import ReactDOM from 'react-dom';
class IndecisionApp extends React.Component {
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
      const options = ['Thing one', 'Thing two', 'Thing four'];
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action />
          <Options options={options} />
          <AddOption />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    handlePick() {
      alert('handlePick');
    }
    render() {
      return (
        <div>
          <button onClick={this.handlePick}>What should I do?</button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
   
    handleRemoveAll() {
      console.log(this.props.options);
      // alert('handleRemoveAll');
    }
    render() {
      return (
         
        <div>
          <button onClick={(e) => this.handleRemoveAll(e)}>Remove All</button>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
          {this.props.optionText}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
  
      if (option) {
        alert(option);
      }
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  