import React, {Component} from 'react';
import {questionData} from './questionData';
import Myquestion from './components/Myquestion';

class App extends Component {
state = {
  questions: questionData,
  total: 5
};
     
onQuestionChange = (e) => this.setState({
  [e.target.name] : e.target.value
})

  render(){
   const {questions} = this.state;
    const avg = this.state.total / this.state.questions.length;
    return (
      <div >
         {
           questions.map(question => <Myquestion total={this.state.total} key={question.id} text={question.question}></Myquestion>)
         }
  <h3>Your average evaluation score is: {avg}</h3>
      </div>
      
    )
  }
 
}

export default App;
