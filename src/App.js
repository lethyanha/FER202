import logo from './logo.svg';
import './App.css';

function App() {
  let greet = (name, timeOfDate) => {
    return `Good ${timeOfDate},${name}!`;
  };
  greet('Alice', 'morning');
  greet('Bob','evening');
  let square = num => {
    return num*num;
  }
  let sayHello = () => {
    return "Hello World!"
  }
  let person = {
    name: "Ha",
    age: 20,
    show: function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {greet('Ha', 'afternoon')};
          {square(5)};
          {sayHello()};
          {person.show()};
          </div>
      </header>
    </div>
  );
}

export default App;
