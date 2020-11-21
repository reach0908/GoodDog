import { Component } from 'react';

class Subject extends Component{
    //펑션 생략가능
    render(){
      return (
        //하나의 최상위 태그로 컴포넌트 시작
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    } 
}

export default Subject;