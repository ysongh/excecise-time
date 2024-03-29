import React, { Component } from 'react';

import Patient from '../component/Patient';
import { allType } from '../data';

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
        else{
            let newType = [];
            allType.forEach(type => {
                if(type.type === value){
                    newType.push(type);
                }
            });

            this.setState({ typeList: newType });
        }
    }

    onChecked(id){
        let newType = this.state.typeList;
        newType.forEach(type => {
            if(type.id === id){
                type.checked = !type.checked;
            }
        });
        this.setState({ typeList: newType });
    }

    render(){

        return(
            <div className="dashBoard">
                <h1 className="dashBoard__title">Exercise Assignment</h1>
                <Patient />
                <div className="dashBoard__inputGroup mt-2">
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
                                    <div className="dashBoard__checkbox">
                                        {type.checked ? <i className="fas fa-check"></i> : <i className="fas fa-check noColor"></i>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        name="checkbox1"
                                        onClick={() => this.onChecked(type.id)}
                                        className="hidden"/>
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