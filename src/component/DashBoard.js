import React, { Component } from 'react';

import { allType, headType, eyeType, handType, bodyType } from '../data';

class DashBoard extends Component{
    state = {
        selectType: "",
        typeList: allType
    }

    onSelect(e){
        const value = e.target.value;
        
        this.setState({ selectType: value });
        this.changetype(value);
    }

    changetype(value){
        if(value === ""){
            this.setState({ typeList: allType });
        }
        else if(value === "head"){
            this.setState({ typeList: headType });
        }
        else if(value === "eye"){
            this.setState({ typeList: eyeType });
        }
        else if(value === "hand"){
            this.setState({ typeList: handType });
        }
        else if(value === "body"){
            this.setState({ typeList: bodyType });
        }
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
                        <option value="hand">Hand</option>
                        <option value="body">Body</option>
                    </select>
                </div>
                <div className="dashBoard__checkboxArea">
                    {this.state.typeList.map(type => {
                        return (
                            <div className="dashBoard__checkboxGroup" key={type.id}>
                                <i className={type.icon}></i>
                                <p>Exercise #{type.id}</p>
                                <label>
                                    <div></div>
                                    <input
                                        type="checkbox"
                                        name="checkbox1"
                                        className=""/>
                                </label>
                            </div>
                        )})
                    }
                </div>
            </div>
        )
    }
}

export default DashBoard;