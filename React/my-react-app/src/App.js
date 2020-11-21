import './App.css';
import { Component } from 'react';
import Nav from './Components/Nav';
import Subject from './Components/Subject'
import Content from './Components/Content'

class App extends Component {
  //render보다 먼저 실행되면서 컴포넌트를 초기화 시켜주는 코드
  constructor(props){
    super(props);
    //state의 값을 초기화
    this.state={
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML',desc:'Html is HyperText MarkUp Language'},
        {id:2, title:'CSS',desc:'Html is HyperText MarkUp Language'},
        {id:3, title:'JavaScript',desc:'Html is HyperText MarkUp Language'}
      ]
      
    }
  }

  render(){
    return (
      //jsx . 페이스북이 만든 자바스크립트언어
      // 이거를 create-react-app이 자바스크립트로 해준다.
      <div className="App">
        <Subject title={this.state.subject.title}
         sub={this.state.subject.sub}></Subject>
        <Nav data={this.state.contents}></Nav>
        <Content></Content>
      </div>
      //props는 사용자에게 컴포넌트를 사용할 수 있게끔 해주는 애들
      //state는 컴포넌트안에서 props에 따라 내부에서 컴포넌트를 구현하는 
      //둘이 만나 양쪽의 편의성을 극대화시킨다.
    );
  }
}

export default App;
