import React, { Component } from 'react';

class DashBoard extends Component{
    state = {
        selectType: ""
    }

    onSelect(e){
        const value = e.target.value;
        
        this.setState({ selectType: value })
    }

    render(){
        return(
            <div className="dashBoard">
                <h1 className="dashBoard__title">Patient AI</h1>
                <div className="dashBoard__inputGroup">
                    <select
                        name="selectType"
                        value={this.state.selectType}
                        className="dashBoard__dropdown"
                        onChange={this.onSelect.bind(this)}
                    >
                        <option value="">All</option>
                        <option value="head">Head</option>
                        <option value="eye">Eye</option>
                        <option value="shoulder">Shoulder</option>
                    </select>
                </div>
                <div className="dashBoard__checkboxArea">
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #1</p>
                        <input
                            type="checkbox"
                            name="checkbox1"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #2</p>
                        <input
                            type="checkbox"
                            name="checkbox2"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #3</p>
                        <input
                            type="checkbox"
                            name="checkbox3"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #4</p>
                        <input
                            type="checkbox"
                            name="checkbox4"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #5</p>
                        <input
                            type="checkbox"
                            name="checkbox5"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #6</p>
                        <input
                            type="checkbox"
                            name="checkbox6"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #7</p>
                        <input
                            type="checkbox"
                            name="checkbox7"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #8</p>
                        <input
                            type="checkbox"
                            name="checkbox8"/>
                    </div>
                    <div className="dashBoard__checkboxGroup">
                        <p>Exercise #9</p>
                        <input
                            type="checkbox"
                            name="checkbox9"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard;