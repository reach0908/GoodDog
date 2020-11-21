import './App.css';
import { Component } from 'react';
import Nav from './Components/Nav';
import Subject from './Components/Subject'
import Content from './Components/Content'

class App extends Component {
  render(){
    return (
      //jsx . 페이스북이 만든 자바스크립트언어
      // 이거를 create-react-app이 자바스크립트로 해준다.
      <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <Nav></Nav>
        <Content title="HTML" desc="Html is HyperText MarkUp Language"></Content>
      </div>
    );
  }
}

export default App;
