import React, {Component} from 'react';
import {questionData} from './questionData';
import Myquestion from './components/Myquestion';

class App extends Component {
state = {
  questions: questionData
};
     
onQuestionChange = (e) => this.setState({
  [e.target.name] : e.target.value
})

  render(){
   const {questions} = this.state;

    return (
      <div >
         {
           questions.map(question => <Myquestion key={question.id} text={question.question}></Myquestion>)
         }
      </div>
      
    )
  }
 
}

export default App;
