import Chart from "react-apexcharts";
import React from 'react';

class LineGraph extends React.Component {
    state = {
        options: {
            chart: {
                id: "basic-line"
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            },
            yaxis: {
                min: -45,
                max: 45
            }
        },
        series: [
            {
                name: "Time",
                data: [-20, -20, 20, 20, 21, -10, -10, -10, 40, 40, 5, 5, 10, 25, 30]
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