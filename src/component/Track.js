import React, { Component } from 'react';

import Patient from '../component/Patient';
import LineGraph from './LineGraph';
import { ex1Data, ex2Data, ex3Data } from '../data';

class Track extends Component{
    render(){
        return(
            <div className="track">
                <h1 className="dashBoard__title">Exercise Tracking</h1>
                <Patient />
                <div className="mt-2"></div>
                <p className="track__exerciseTitle">Exercise #1</p>
                <LineGraph data={ex1Data} />
                <p className="track__exerciseTitle">Exercise #3</p>
                <LineGraph data={ex2Data} />
                <p className="track__exerciseTitle">Exercise #7</p>
                <LineGraph data={ex3Data} />
            </div>
        )
    }
}

export default Track;