import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Patient extends Component{
    state = {
        date: ""
    }

    onSetDate(date) {
        this.setState({
            date: date
        });
    }

    render(){
        return(
            <div className="patient">
                <div className="patient__information">
                    <p>John Doe</p>
                    <p>#10</p>
                </div>
                <DatePicker
                    className="patient__date"
                    placeholderText="11/23/2019"
                    selected={this.state.date}
                    onChange={this.onSetDate.bind(this)} 
                    dateFormat="MM/dd/yyyy" />
                
            </div>
        )
    }
}

export default Patient;