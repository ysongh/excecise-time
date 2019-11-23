import React, { Component } from 'react';

class DashBoard extends Component{
    state = {
        selectType: "",
        typeList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    onSelect(e){
        const value = e.target.value;
        
        this.setState({ selectType: value });
        this.changetype(value);
    }

    changetype(value){
        if(value === ""){
            this.setState({ typeList: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
        }
        else if(value === "head"){
            this.setState({ typeList: [1, 2, 4, 5, 7, 9] });
        }
        else if(value === "eye"){
            this.setState({ typeList: [5, 9] });
        }
        else if(value === "neck"){
            this.setState({ typeList: [2, 4, 5, 7, 9] });
        }
        else if(value === "shoulder"){
            this.setState({ typeList: [1, 4, 5, 8] });
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
                        <option value="neck">Neck</option>
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