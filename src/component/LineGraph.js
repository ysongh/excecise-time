import Chart from "react-apexcharts";
import React from 'react';

class LineGraph extends React.Component {
    state = {
        options: {
            chart: {
                id: "basic-line"
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        },
        series: [
            {
                name: "Time",
                data: [30, 40, 55, 50, 49, 34, 70, 51]
            }
        ]
    };

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            height="250"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default LineGraph; 