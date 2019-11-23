import React, { Component } from 'react';

import LineGraph from './LineGraph';

class Track extends Component{
    render(){
        return(
            <div className="track">
                <h1 className="dashBoard__title">Exercise Tracking</h1>
                <p className="track__exerciseTitle">Exercise#1</p>
                <LineGraph />
                <p className="track__exerciseTitle">Exercise#2</p>
                <LineGraph />
                <p className="track__exerciseTitle">Exercise#3</p>
                <LineGraph />
            </div>
        )
    }
}

export default Track;