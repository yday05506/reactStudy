import logo from './logo.svg';
import './App.css';
import Student from './Student.js';
import CheckInRecord from './CheckInRecord';  // 뒤에 확장자를 안 씀 → 기본적으로 js
import './App.css'; // 모듈이 있는 게 아니라 굳이 모듈 이름을 정해주지 않음

function App() {
  // const name = "Zena";
  // const element = <h1>My name is {name}!!</h1>
  // const element2 = <h1>1 + 1 = {1+1}</h1>
  return (
    <div>
      {/* <h1>Hello, World!</h1>
      {element} 
      {element2} */}
      {/* <h1 style={{color : 'blueviolet'}}>오늘의 체크인 기록</h1> */}
      <h1 id = "title1" className='title'>오늘의 체크인 기록</h1>
      <div>
      <CheckInRecord name = "제나" score = {4} comment = "오늘 애플스토어를 감"></CheckInRecord>
      <CheckInRecord name = "엘리샤" score = {2} comment = "시험기간이어서 힘듦"/>
      <h1 className='title'>학생 목록</h1>
      <Student name = "양다연"/>
      <Student name = "최자윤"/>
      <h1 className='title'>제목 3</h1>
      <h1>제목 4</h1>
      <h1>제목 5</h1>
      </div>
    </div>  // <div></div> == <div />
  );
}

export default App;
