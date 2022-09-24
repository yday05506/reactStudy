import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  const name = "Zena";
  const element = <h1>My name is {name}!!</h1>
  const element2 = <h1>1 + 1 = {1+1}</h1>
  return (
    <div>
      <h1>Hello, World!</h1>
      {element} 
      {element2}
      <MyComponent name = "양다연"></MyComponent>
    </div>
  );
}

export default App;
