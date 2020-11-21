import './App.css';
import { Component } from 'react';

class Subject extends Component{
  //펑션 생략가능
  render(){
    return (
      //하나의 최상위 태그로 컴포넌트 시작
      <header>
        <h1>WEB</h1>
        World wide web!
      </header>
    );
  }
}

class Nav extends Component{
  render(){
    return(
      <nav>
            <ul>
                <li>
                    <a href="1.html">HTML</a>
                </li>
                <li>
                    <a href="2.html">CSS</a>
                </li>
                <li>
                    <a href="3.html">JavaScript</a>
                </li>
            </ul>
        </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        Html is HyperText MarkUp Language
      </article>
    );
  }
}

class App extends Component {
  render(){
    return (
      //jsx . 페이스북이 만든 자바스크립트언어
      // 이거를 create-react-app이 자바스크립트로 해준다.
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
        <Content></Content>
      </div>
    );
  }
}

export default App;
