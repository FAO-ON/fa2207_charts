import { BarChart, ScatterPlot, StackedBarChart } from "./Chart.js";

/*FAO COLORS */
const fao_blue = '#0f60d5';
const white = '#ffffff';
const fao_dark_blue = '#1a2b4a';
const fao_light_blue_1 = '#9ec2f5';
const fao_light_blue_2 = '#bad1f6';
const fao_light_blue_3 = '#d7e4fa';
const fao_light_blue_4 = '#f1f6fd';
const fao_green = '#b2d235';
const fao_pink = '#e23e94';
const fao_light_pink = "#E6C7D8";
const black = '#000000';

const clustered_barchart_padding = 0.3;
const regular_chart_padding = 0.1;

function replaceFig(figId,graphElement){
    //DOCSTRING: Replaces the image with the graph element
    //figId: the id of the figure
    //graphElement: the graph element to replace the image with
    const img = document.querySelector('#' + figId + '-image img');
    img.after(graphElement);
    img.style.display = "none";
}

//3.2



d3.csv("fa2207_chart_csv/master_board.csv").then(d => {
    console.log(d);
    const fig4_1_options = {
        XAxisName: "Board",
        YAxisName: "Per-student Funding ($)",
        legend: [["English Public", "English Catholic", "French Public", "French Catholic"], [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]],
        fill: "System",
        yAxisRange: [0, 40000],
        percent: false,
        padding: clustered_barchart_padding
    }
    const fig4_1 = new BarChart(fig4_1_options, d);
    replaceFig("fig4-1",fig4_1.draw());

    const fig6_4_options = {
        XAxisName: "Board",
        YAxisName: "Per-student Spending ($)",
        legend: [["English Public", "English Catholic", "French Public", "French Catholic"], [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]],
        fill: "System",
        yAxisRange: [0, 45000],
        percent: false,
        padding: clustered_barchart_padding
    }
    const fig6_4 = new BarChart(fig6_4_options, d);
    replaceFig("fig6-4",fig6_4.draw());

    let fig_7_1_data = d.map(d => ({Board: d.Board, "Surplus / (Deficit) as Share of Revenue": +(d["Surplus as Share of Revenue"]*100), System: d.System}));
    console.log(fig_7_1_data);
    const fig7_1_options = {
        XAxisName: "Board",
        YAxisName: "Surplus / (Deficit) as Share of Revenue",
        legend: [["English Public", "English Catholic", "French Public", "French Catholic"], [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]],
        fill: "System",
        yAxisRange: [-4, 6],
        percent: true,
        padding: clustered_barchart_padding
    }
    const fig7_1 = new BarChart(fig7_1_options, fig_7_1_data);
    replaceFig("fig7-1",fig7_1.draw());

    let fig7_3_data = d.map(d => ({Board: d.Board, "Year-End Accumulated Surplus as Share of Revenue": +d["Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"]*100, System: d.System}));
    const fig7_3_options = {
        XAxisName: "Board",
        YAxisName: "Year-End Accumulated Surplus as Share of Revenue",
        legend: [["English Public", "English Catholic", "French Public", "French Catholic"], [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]],
        fill: "System",
        yAxisRange: [-10, 90],
        percent: true,
        padding: clustered_barchart_padding
    }
    const fig7_3 = new BarChart(fig7_3_options, fig7_3_data);
    replaceFig("fig7-3",fig7_3.draw());

    let fig8_2_d = d.map(d => ({Board: d.Board, "EQAO Pass Rate": d["EQAO Pass Rate"]*100, System: d.System}));
    const fig8_2_options = {
        XAxisName: "Board",
        YAxisName: "EQAO Pass Rate",
        legend: [["English Public", "English Catholic", "French Public", "French Catholic"], [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]],
        fill: "System",
        yAxisRange: [0, 100],
        percent: true,
        padding: clustered_barchart_padding
    }
    const fig8_2 = new BarChart(fig8_2_options, fig8_2_d);
    replaceFig("fig8-2",fig8_2.draw());

    let fig8_4_d = d.map(d => ({Board: d.Board, "EQAO Pass Rate": d["EQAO Pass Rate"]*100, Urban: d.Urban, "Lean Urban": d["Lean Urban"], "Leans Rural": d["Leans Rural"], Rural: d.Rural}));
    const fig8_4_options = {
        XAxisName: "Board",
        YAxisName: "EQAO Pass Rate",
        legend: [["Rural", "Leans Rural", "Leans Urban", "Urban"], [fao_pink, fao_light_pink, fao_light_blue_1, fao_blue]],
        fill: "Urban",
        yAxisRange: [0, 100],
        percent: true,
        padding: clustered_barchart_padding
    }
    const fig8_4 = new BarChart(fig8_4_options, fig8_4_d);
    replaceFig("fig8-4",fig8_4.draw());


    let fig8_5_data = d.map(d => ({Board: d.Board, "EQAO Pass Rate": +d["EQAO Pass Rate"]*100, "Per Student Funding": +d["Per-student Funding ($)"]}));
    const fig8_5_options = {
        XAxisName: "Per Student Funding",
        YAxisName: "EQAO Pass Rate",
        marginRight: 26,
        fill: "#1060D5",
        yAxisRange: [40, 85],
        xAxisDomain: [10000, 40000],
        percent: true,
        radius: 5.5,
        padding: clustered_barchart_padding
    }
    const fig8_5 = new ScatterPlot(fig8_5_options, fig8_5_data);
    replaceFig("fig8-5",fig8_5.draw());

})

//fig 5.3
d3.csv("fa2207_chart_csv/fig5.3_data.csv").then(d => {
    let fig5_3_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per-student Revenue ($)": +d[k], System: k, Total: +d['Total']})));
    const fig5_3_options = {
        XAxisName: "Board",
        YAxisName: "Per-student Revenue ($)",
        legend: [["Provincial and Own Source Operating Revenue", "Revenue for Infrastructure Projects", "Federal Transfers Revenue"], [fao_light_blue_1, fao_pink, fao_blue]],
        fill: "System",
        yAxisRange: [0, 45000],
        percent: false,
        padding: clustered_barchart_padding,
        fillInvisible: "Total"
    }
    const fig5_3 = new StackedBarChart(fig5_3_options, fig5_3_tidy);
    replaceFig("fig5-3",fig5_3.draw());

})