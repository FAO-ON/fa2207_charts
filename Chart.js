export class Chart{
    options;
    data;
    stroke_options = {stroke: "#ffffff", strokeWidth: 3, strokeOpacity: 0};
    //confides to OOP Principles
    constructor(options, data) {
        this.options = options;
        this.data = data;
    }

    sendStrokeOptions() {
        return this.stroke_options;
    }
}
export class BarChart extends Chart {
    barchart_options = {width: 800, padding: 0.3, className: "sb-chart", marginLeft: 80, marginBottom: 50, marginRight: 0};
    constructor(options, data) {
        super(options, data);
        this.options = options;
    }

    draw() {
        let yName = this.options.YAxisName;
        let xName = this.options.XAxisName;
        let d = this.data;
        let expandedXName = ((this.options.XAxisName == "Board") ? "School Boards" : this.options.XAxisName);
        if (this.options && this.options.XAxisName && this.options.YAxisName) {
            console.log("Drawing bar chart");
            let svg = 
                    Plot.plot({
                        width: this.barchart_options.width,
                        height: this.barchart_options.height,
                        className: this.barchart_options.className,
                        marginTop: this.barchart_options.marginTop,
                        marginBottom: this.barchart_options.marginBottom,
                        marginLeft: this.barchart_options.marginLeft,
                        marginRight: this.barchart_options.marginRight,
                        padding: this.barchart_options.padding,
                        x: {label: ((this.options.XAxisName == "Board") ? "School Boards" : this.options.XAxisName), tickFormat: d => null},
                        y: {label: this.options.YAxisName, range: this.options.YAxisRange},
                        marks: [
                            Plot.barY(d, { 
                                x: xName, 
                                y: yName,
                                channels: {"y": yName},
                                sort: {x: "y"},
                                fill: this.options.fill,
                                stroke: super.sendStrokeOptions().stroke,
                                strokeWidth: super.sendStrokeOptions().strokeWidth,
                                strokeOpacity: super.sendStrokeOptions().strokeOpacity,
                                tip: true,
                                title: (d) => expandedXName + " " + `${d[xName]}` + "\n" + yName +  `${Intl.NumberFormat('en-US').format(Math.round(d[yName]))}`  + "\n" + `${d[this.options.fill]}`,
                            }),
                            Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
                        ],
                        color: {legend: true, domain: [this.options.legend[0][0], this.options.legend[0][1], this.options.legend[0][2], this.options.legend[0][3]], range: [this.options.legend[1][0], this.options.legend[1][1], this.options.legend[1][2], this.options.legend[1][3]]}
                    });
            return svg;
        }
        else {
            // Handle missing or undefined options
            console.error("Options are missing or incorrect.");
        }

    }
    
}