import React, { Component } from 'react'

export default class Myquestion extends Component {
    render() {
      const {text} = this.props;
        return (
            <section>
             {text}
             <br />
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" classname="form-check-input" name="optradio" />1
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" classname="form-check-input" name="optradio" />2
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" classname="form-check-input" name="optradio" />3
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" classname="form-check-input" name="optradio" />4
                </label>
             </div>
             <div className="form-check-inline">
                <label className="form-check-label">
                    <input type="radio" classname="form-check-input" name="optradio" />5
                </label>
             </div>
             </section>
     
        )
    }
}
