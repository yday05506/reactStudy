import logo from './logo.svg';
import './App.css';
import CheckInRecord from './CheckInRecord';

function App() {
  // const name = "Zena";
  // const element = <h1>My name is {name}!!</h1>
  // const element2 = <h1>1 + 1 = {1+1}</h1>
  return (
    <div>
      {/* <h1>Hello, World!</h1>
      {element} 
      {element2} */}
      <h1>오늘의 체크인 기록</h1>
      <div>
      <CheckInRecord name = "제나" score = {4} comment = "오늘 애플스토어를 감"></CheckInRecord>
      <CheckInRecord name = "엘리샤" score = {2} comment = "시험기간이어서 힘듦"/>
      </div>
    </div>  // <div></div> == <div />
  );
}

export default App;
