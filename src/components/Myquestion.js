import React, { Component } from 'react'

export default class Myquestion extends Component {
state = {
selectedOption: '',
runningTotal: 0
}


handleRating = (e) => {
// const runningTotal = 0;
//  const runningTotal =+ e.target.value;
//  return runningTotal;
}

    render() {
      const {text} = this.props;
     const {selectedOption} = this.state;
      const {total} = this.props;
        return (
            <section>
             {text}
             <br />
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" checked={selectedOption === '1'} onChange={this.handleRating} value="1" name="optradio" />1
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" checked={selectedOption === '2'} onChange={this.handleRating} value="2" name="optradio" />2
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" checked={selectedOption === '3'} onChange={this.handleRating} value="3" name="optradio" />3
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" checked={selectedOption === '4'} onChange={this.handleRating} value="4" name="optradio" />4
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" checked={selectedOption === '5'} onChange={this.handleRating} value="5" name="optradio" />5
                </label>
             </div>
             </section>
     
        )
    }
}
