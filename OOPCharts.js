import { BarChart } from "./Chart.js";

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

function replaceFig(figId,graphElement){
    //DOCSTRING: Replaces the image with the graph element
    //figId: the id of the figure
    //graphElement: the graph element to replace the image with
    const img = document.querySelector('#' + figId + '-image img');
    img.after(graphElement);
    img.style.display = "none";
}

d3.csv("fa2207_chart_csv/master_board.csv").then(d => {
    console.log(d);
    const fig4_1_options = {
        XAxisName: "Board",
        YAxisName: "Per-student Funding ($)",
        legend: [["English Public", "English Catholic", "French Public", "French Catholic"], [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]],
        fill: "System",
    }
    const fig4_1 = new BarChart(fig4_1_options, d);
    replaceFig("fig4-1",fig4_1.draw());

    const fig6_4_options = {
        XAxisName: "Board",
        YAxisName: "Per-student Spending ($)",
        legend: [["English Public", "English Catholic", "French Public", "French Catholic"], [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]],
        fill: "System",
    }
    const fig6_4 = new BarChart(fig6_4_options, d);
    replaceFig("fig6-4",fig6_4.draw());
})