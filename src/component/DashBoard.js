import React, { Component } from 'react';

class DashBoard extends Component{
    state = {
        selectType: "",
        typeList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    onSelect(e){
        const value = e.target.value;
        
        this.setState({ selectType: value });
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
                    {this.state.typeList.map(type => {
                        return <div className="dashBoard__checkboxGroup">
                            <p>Exercise #{type}</p>
                                <input
                                    type="checkbox"
                                    name="checkbox1"/>
                            </div>
                    })}
                </div>
            </div>
        )
    }
}

export default DashBoard;