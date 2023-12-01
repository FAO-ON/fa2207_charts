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

function replaceFig(figId,graphElement){
    const img = document.querySelector('#' + figId + '-image img');
    img.after(graphElement);
    img.style.display = "none";

}

function parseAllocationString(board, allocation){
    let allocationString = "";
    for(let i = 0; i < allocation.length; i++){
        //console.log(allocation[i]);
        if(allocation[i].includes(board)){
            for(let j = 0; j < allocation[i].length; j++){
                if(allocation[i][j] != board){
                    if(typeof allocation[i][j] == "number"){
                        allocation[i][j] = Math.round(allocation[i][j]);
                    }
                    if(j == 1){
                        allocationString += allocation[i][j] + ": $";
                    }
                    //add comma after the allocation
                    else if(j == allocation[i].length - 1){
                        allocationString += allocation[i][j] + "\n";
                    }
                    else{
                        allocationString += allocation[i][j] + ", ";
                    }
                }
            }
        }
    }
    return allocationString;
}

function parseGrantString(board, grant){
    let grantString = "";
    for(let i = 0; i < grant.length; i++){
        //console.log(allocation[i]);
        if(grant[i].includes(board)){
            for(let j = 0; j < grant[i].length; j++){
                if(grant[i][j] != board){
                    if(typeof grant[i][j] == "number"){
                        grant[i][j] = Math.round(grant[i][j]);
                    }
                    if(j == 1){
                        grantString += grant[i][j] + ": $";
                    }
                    //add comma after the allocation
                    else if(j == grant[i].length - 1){
                        grantString += grant[i][j] + "\n";
                    }
                    else{
                        grantString += grant[i][j] + ", ";
                    }
                }
            }
        }
    }
    return grantString;
}


// load data from CSV
d3.csv("fa2207_chart_csv/master_board.csv").then( d => {
console.log(d);

// FIG 4.1  / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
const fig4_1 = Plot.plot({
                width: 800,
                padding: 0.3,
                className: "sb-chart",
                marginLeft: 75,
                //center the plot
                x:{label: "School Board", nice: true,
                    tickFormat: d => null,
                },
                y:{label: "Per Student Funding ($)", nice: true, domain:[0,40000]},
                marks: [
                    Plot.barY(d, 
                        {x: "Board", y: "Per-student Funding ($)", 
                        fill: "System", 
                        /*
                        tip: true,
                        */
                        channels:{'Per-student Funding ($)': "Per-student Funding ($)"},
                        sort: {x: "Per-student Funding ($)"},
                        stroke: white,
                        strokeWidth: 3,
                        strokeOpacity: 0,
                        }),
                    
                    //Plot a line that indicates the average
                    Plot.ruleY([13364], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
                    //sit above the line
                    Plot.text(["Average, 13,364"], {y: 14000, dy: -10, dx: -300, textAnchor: "start",  fontWeight: "bold", fontSize: 12, text: d => d}),
                    
                    Plot.tip(d, Plot.pointerX({
                        x: "Board",
                        y: "Per-student Funding ($)",
                        title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per-student Funding ($)"])}` + "\nSystem: " + `${d.System}`,
                        lineWidth: 1000,
                        //anchor: "bottom"
                        //make
                    })),
                    Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
                    
                    
                ],
                
                color:{
                    legend:true,
                    //center the legend
                    domain:['English Public','English Catholic','French Public','French Catholic'],
                    range:['#1060D5','#90B7F2','#E43D96','#E6C7D8'],
                }
            });
const fig4_1_div = document.querySelector("#fig4_1-image img");
replaceFig("fig4_1",fig4_1);


// FIG 4.4 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv("fa2207_chart_csv/fig4.4_data.csv").then(d => {
    let fig4_4_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per-student Funding ($)": +d[k], Size: k})));
    fig4_4_tidy = fig4_4_tidy.filter(d => d.Size != 'Average');
    //remove the boards that have no per student funding
    for(let i = 0; i < fig4_4_tidy.length; i++){
        //if the per student funding is "" then remove it
        if(fig4_4_tidy[i]["Per-student Funding ($)"] == 0){
            fig4_4_tidy.splice(i, 1);
            i--;
        }
    }
    const fig4_4 = Plot.plot({
        width: 800,
        padding: 0.3,
        marginLeft: 75,
        className: "sb-chart",
        x: {label: "School Board", nice: true, tickFormat: d => null},
        y: {label: "Per Student Funding ($)", nice: true, domain: [0, 35000]},
        marks:[
        Plot.barY(fig4_4_tidy,{
            x: "Board",
            y: "Per-student Funding ($)",
            //tip: true,
            fill: "Size",
            channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
            sort: {x: "Per-student Funding ($)"},
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        }),
        Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
        Plot.text(["Average, 12,701"], {y: 13950, dx: -150, fontWeight: "bold"}),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
        Plot.tip(fig4_4_tidy, Plot.pointerX({
            x: "Board",
            y: "Per-student Funding ($)",
            title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per-student Funding ($)"])}` + "\nSize: " + `${d.Size}`,
            lineWidth: 1000,
            //anchor: "bottom"
            //make
        })),
        ],
        color:{legend: true, domain: ["Small", "Medium", "Large"], range: ["#93BBF7", "#1060D5", "#E23C94"]},

    })
    const fig4_4_div = document.querySelector("#fig4_4-image img");
    replaceFig("fig4_4",fig4_4);
})

// FIG 4.5 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart

d3.csv("fa2207_chart_csv/fig4.5_data.csv").then(d => {
    let fig4_5_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per-student Funding ($)": +d[k], Dispersion: k})));
    fig4_5_tidy = fig4_5_tidy.filter(d => d.Dispersion != 'Average');
    //remove the boards that have no per student funding
    for(let i = 0; i < fig4_5_tidy.length; i++){
        //if the per student funding is "" then remove it
        if(fig4_5_tidy[i]["Per-student Funding ($)"] == 0){
            fig4_5_tidy.splice(i, 1);
            i--;
        }
    }
    const fig4_5 = Plot.plot({
        width: 800,
        padding: 0.3,
        marginLeft: 75,
        className: "sb-chart",
        x:{label: "School Board", nice: true, tickFormat: d => null},
        y: {label: "Per Student Funding ($)", nice: true, domain: [0, 35000]},
        marks:[
        Plot.barY(fig4_5_tidy,{
            x: "Board",
            y: "Per-student Funding ($)",
            fill: "Dispersion",
            channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
            sort: {x: "Per-student Funding ($)"},
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        }),
        Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
        Plot.text(["Average, 12,701"], {y: 13950, dx: -150, fontWeight: "bold"}),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
        Plot.tip(fig4_5_tidy, Plot.pointerX({
            x: "Board",
            y: "Per-student Funding ($)",
            title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per-student Funding ($)"])}` + "\nDispersion: " + `${d.Dispersion}`,
            lineWidth: 1000,
            //anchor: "bottom"
            //make
        })),
        ],
        color: {legend: true, domain: ["Low Dispersion", "Medium Dispersion", "High Dispersion"], range: [fao_light_blue_1, fao_blue, fao_pink]}
    })
    const fig4_5_div = document.querySelector("#fig4_5-image img");
    replaceFig("fig4_5",fig4_5);
})

// FIG 4.6 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv("fa2207_chart_csv/fig4.6_data.csv").then(d => {
    let fig4_6_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per-student Funding ($)": +d[k], Remote: k})));
    fig4_6_tidy = fig4_6_tidy.filter(d => d.Remote != 'Average');
    //remove the boards that have no per student funding
    for(let i = 0; i < fig4_6_tidy.length; i++){
        //if the per student funding is "" then remove it
        if(fig4_6_tidy[i]["Per-student Funding ($)"] == 0){
            fig4_6_tidy.splice(i, 1);
            i--;
        }
    }
    const fig4_6 = Plot.plot({
        width: 800,
        padding: 0.3,
        marginLeft: 75,
        className: "sb-chart",
        x:{label: "School Board", nice: true, tickFormat: d => null},
        marks:[
        Plot.barY(fig4_6_tidy, {
            x: "Board",
            y: "Per-student Funding ($)",
            tip: true,
            title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per-student Funding ($)"])}` + "\nRemoteness: " + `${d.Remote}`,
            fill: "Remote",
            channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
            sort: {x: "Per-student Funding ($)"},
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        }),
        Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
        Plot.text(["Average, 12,701"], {y: 13950, dx: -150, fontWeight: "bold"}),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
        ],
        color: {legend: true, domain: ["Least Remote", "Medium Remote", "Most Remote"], range: ["#93BBF7", "#1060D5", "#E23C94"]}
    })
    const fig4_6_div = document.querySelector("#fig4_6-image img");
    replaceFig("fig4_6",fig4_6);
})

// FIG 4.7 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv("fa2207_chart_csv/fig4.7_data.csv").then(d => {
    let fig4_7_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per-student Funding ($)": +d[k], Urban: k})));
    fig4_7_tidy = fig4_7_tidy.filter(d => d.Urban != 'Average');
    //remove the boards that have no per student funding
    for(let i = 0; i < fig4_7_tidy.length; i++){
        //if the per student funding is "" then remove it
        if(fig4_7_tidy[i]["Per-student Funding ($)"] == 0){
            fig4_7_tidy.splice(i, 1);
            i--;
        }
    }
    const fig4_7 = Plot.plot({
        width: 800,
        padding: 0.3,
        marginLeft: 75,
        className: "sb-chart",
        x:{label: "School Board", nice: true, tickFormat: d => null},
        y:{label: "Per Student Funding ($)", nice: true, domain: [0, 35000]},
        marks: [
        Plot.barY(fig4_7_tidy, {
            x: "Board", 
            y: "Per-student Funding ($)",
            //tip: true,
            //title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + `${d["Per-student Funding ($)"]}`,
            fill: "Urban",
            channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
            sort: {x: "Per-student Funding ($)"},
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        }),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
        Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
        Plot.text(["Average, 12,701"], {y: 13950, dx: -150, fontWeight: "bold"}),
        Plot.tip(fig4_7_tidy, Plot.pointerX({
            x: "Board",
            y: "Per-student Funding ($)",
            title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per-student Funding ($)"])}` + "\nUrban Factor: " + `${d.Urban}`,
            lineWidth: 1000,
            //anchor: "bottom"
            //make
        })),
        ],
        color: {legend: true, domain: ["Rural", "Leans Rural", "Leans Urban", "Urban"], range: ["#E43D96", "#FAD8EA", "#93BBF7", "#1060D5"]}
    })
    const fig4_7_div = document.querySelector("#fig4_7-image img");
    replaceFig("fig4_7",fig4_7);
})


// FIG 4.9 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv("fa2207_chart_csv/fig4.9_data.csv").then(d => {
    let fig4_9_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Funding": +d[k], System: k})));
    fig4_9_tidy = fig4_9_tidy.filter(d => d.System != 'Average');
    for(let i = 0; i < fig4_9_tidy.length; i++){
    //if the per student funding is "" then remove it
        if(fig4_9_tidy[i]["Per Student Funding"] == 0){
            fig4_9_tidy.splice(i, 1);
            i--;
        }
    }
    console.log(fig4_9_tidy);
    const fig4_9 = Plot.plot({
    width: 800,
    padding: 0.3,
    marginLeft: 75,
    className: "sb-chart",
    x:{label: "School Board", nice: true, tickFormat: d => null},
    y:{domain: [0, 4500], label: "Per Student Funding ($)", nice: true},
    marks: [
        Plot.barY(fig4_9_tidy, {
        x: "Board", 
        y: "Per Student Funding", 
        fill: 'System', 
        tip: true,
        title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per Student Funding"])}` + "\nSystem: " + `${d.System}`,
        channels: {'Per Student Funding': 'Per Student Funding'},
        sort: {x: "Per Student Funding"},
        stroke: white,
        strokeWidth: 3,
        strokeOpacity: 0,
        }),
        Plot.ruleY([652], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
        Plot.text(["Average, 652"], {y: 700, dx: -200, dy: -10, textAnchor: "start",  fontSize: 12, fontWeight:"bold",text: d => d}),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
    color: {legend: true, domain: ["English Public", "English Catholic", "French Public", "French Catholic"], range: ["#1060D5", "#90B7F2", "#E43D96", "#E6C7D8"]}
    });
    const fig4_9_div = document.querySelector("#fig4_9-image img");
    replaceFig("fig4_9",fig4_9);
})

//FIG 4.10 / / / / / / / / / /
// Stacked
d3.csv("fa2207_chart_csv/fig4.10_data.csv").then(d => {
    let fig4_10_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Funding": d[k], Allocation: k, Total: +d['Total']})));
    for(let i = 0; i < fig4_10_tidy.length; i++){
    //if the per student funding is "" then remove it
        if(fig4_10_tidy[i]["Per Student Funding"] == ""){
            fig4_10_tidy.splice(i, 1);
            i--;
        }
    }
    let allocations = [];
    for(let i = 0; i < fig4_10_tidy.length; i++){
        //don't add the total to the allocations array
        if(fig4_10_tidy[i].Allocation != "Total" && fig4_10_tidy[i].Allocation != "Average"){
            allocations.push([fig4_10_tidy[i].Board ,fig4_10_tidy[i].Allocation , +fig4_10_tidy[i]["Per Student Funding"]]);
        }
    }



    fig4_10_tidy = fig4_10_tidy.filter(d => d.Allocation != 'Average');


    //fig4_10_invisble should just have board and total
    let fig4_10_invisible = [];
    for(let i = 0; i < fig4_10_tidy.length; i++){
        if(fig4_10_tidy[i].Allocation == "Total"){
            fig4_10_invisible.push(fig4_10_tidy[i]);
        }
    }
    const fig4_10 = Plot.plot({
    width: 800,
    padding: 0.3,
    className: "sb-chart",
    marginLeft: 75,
    x:{label: "School Board", nice: true, tickFormat: d => null},
    y:{domain: [0, 4500], label: "Per Student Funding ($)", nice: true},
    marks: [
        Plot.barY(fig4_10_tidy, {
        x: "Board", 
        y: "Per Student Funding", 
        fill: 'Allocation', 
        //tip: true,
        //list all the allocation and their values in the title
        //title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per Student Funding"])}`  + "\nTotal: " + "$" + `${Math.round(d.Total)}` ,
        channels: {'Total': 'Total'},
        sort: {x: "Total"},
        stroke: white,
        strokeWidth: 3,
        strokeOpacity: 0,
        }),
        Plot.ruleY([652], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
        Plot.text(["Average, 652"], {y: 700, dx: -200, dy: -10, textAnchor: "start",  fontSize: 12, text: d => d}),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),

        Plot.barY(fig4_10_invisible, {
            x: "Board",
            y: "Total",
            fill: "transparent",
            tip: true,
            title: (d) => "School Board: " + `${d.Board}` + "\nTotal: " + "$" + `${Math.round(d.Total)}` + "\n" + parseAllocationString(d.Board, allocations),
            channels: {"Total": "Total"},
            sort: {x: "Total"},
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        })   
        
    ],
    color: {legend: true, domain: ["COVID-related", "Tutoring Supports", "Reading Supports & Assessments", "All Other"], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_blue_2]}
    });
    const fig4_10_div = document.querySelector("#fig4_10-image img");
    replaceFig("fig4_10",fig4_10);
})

// FIG 4.11 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv("fa2207_chart_csv/fig4.11_data.csv").then(d=>{
    let fig4_11_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Funding": d[k], Language: k})));
    //get rid of duplicate boards
    for(let i = 0; i < fig4_11_tidy.length; i++){
    //cast each Per Student Funding to a number
    fig4_11_tidy[i]["Per Student Funding"] = +fig4_11_tidy[i]["Per Student Funding"];
    //if the per student funding is "" then remove it
    if(fig4_11_tidy[i]["Per Student Funding"] == ""){
        fig4_11_tidy.splice(i, 1);
        i--;
    }
    }
    console.log(fig4_11_tidy);
    const fig4_11 =
    Plot.plot({
        width: 800,
        padding: 0.3,
        className: "sb-chart",
        marginLeft: 75,
        x:{label: "School Board", nice: true, tickFormat: d => null},
        y:{domain: [0, 600], label: "Per Student Funding ($)", nice: true},
        marks:[
        Plot.barY(fig4_11_tidy, {
            x: "Board",
            y: "Per Student Funding",
            fill: "Language",
            channels: {"Per Student Funding": "Per Student Funding"},
            sort: {x: "Per Student Funding"},
            //tip: true,
            //title: (d) => "School Board: " + `${d.Board},  "\nSchool Board Language:" ${d.Language}` + "\nPer Student Funding: " + `${d["Per Student Funding"]}`,
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        }),
        Plot.tip(fig4_11_tidy, Plot.pointerX({
            x: "Board",
            y: "Per Student Funding",
            title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per Student Funding"])}` + "\nSchool Board Type: " + `${d.Language}`,
            lineWidth: 1000,
            //anchor: "bottom"
            //make
        })),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
        ],
        color: {legend: true, domain: ["English-language School Board", "French-language School Board"], range: [fao_blue, fao_pink]}
    })
    const fig4_11_div = document.querySelector("#fig4_11-image img");
    replaceFig("fig4_11",fig4_11);
})


// FIG 5.3 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart

d3.csv("fa2207_chart_csv/fig5.3_data.csv").then(d => {
    let fig5_3_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Revenue": +d[k], System: k, Total: +d['Total']})));
    fig5_3_tidy = fig5_3_tidy.filter(d => d.System != 'Average');
    const fig5_3 = Plot.plot({
    width: 800,
    padding: 0.3,
    marginLeft: 75,
    className: "sb-chart",
    x:{label: "School Board",nice: true, tickFormat: d => null},
    y:{domain: [0, 45000], label: "Per Student Revenue ($)", nice: true},
    marks: [
        Plot.barY(fig5_3_tidy, {
        x: "Board", 
        y: "Per Student Revenue", 
        fill: 'System', 
        tip: true,
        title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Revenue: " + "$" + `${Math.round(d["Per Student Revenue"])}` + "\nSystem: " + `${d.System}` + "\nTotal: $" + `${Math.round(d.Total)}`,
        channels: {'Per Student Revenue': 'Per Student Revenue'},
        sort: {x: "Per Student Revenue"},
        stroke: white,
        strokeWidth: 3,
        strokeOpacity: 0,
        }),
        Plot.ruleY([14501], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
        Plot.text(["Average, 14,501"], {y: 15500, dx: -200, fontWeight: "bold"}),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  })
    ],
    color: {legend: true, domain: ["Provincial and Own Source Operating Revenue", "Revenue for Infrastructure Projects", "Federal Transfers Revenue"], range: [fao_light_blue_1, fao_pink, fao_blue]}
    });
    const fig5_3_div = document.querySelector("#fig5_3-image img");
    replaceFig("fig5_3",fig5_3);
})


// FIG 6.4 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart

const fig6_4 = Plot.plot({
    width: 800,
    padding:0.3,
    marginLeft: 75,
    className: "sb-chart",
    x:{label: "School Board", nice: true, tickFormat: d => null},
    y:{label: "Per Student Spending ($)", nice: true, domain: [0, 45000]},
    marks:[
    Plot.barY(d,{
        x: "Board",
        y: "Per-student Spending ($)",
        fill: "System",
        tip: true,
        title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Spending: " + "$" + `${Math.round(d["Per-student Spending ($)"])}` + "\nSchool Board Type: " + `${d.System}`,
        channels: {"Per-student Spending ($)": "Per-student Spending ($)"},
        sort: {x: "Per-student Spending ($)"},
        stroke: white,
        strokeWidth: 3,
        strokeOpacity: 0,
    }),
    Plot.ruleY([14426], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Average, 14,426"], {y: 15500, dx: -200, fontWeight: "bold"}),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
    color: {legend: true, domain: ["English Public", "English Catholic", "French Public", "French Catholic"], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]},
})
const fig6_4_div = document.querySelector("#fig6_4-image img");
replaceFig("fig6_4",fig6_4);

// FIG 7.1 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart

let fig_7_1_data = d.map(d => ({Board: d.Board, "Surplus as Share of Revenue": +d["Surplus as Share of Revenue"], System: d.System}));

const fig_7_1 = Plot.plot({
    width: 800,
    padding: 0.3,
    className: "sb-chart",
    marginLeft: 75,
    x:{label: "School Board", nice: true, tickFormat: d => null},
    //add percent to the Y axis
    y:{percent: true, domain:[-4, 6], label: "Surplus as Share of Revenue (%)", tickFormat: d => d + "%"},
    marks:[
    Plot.barY(fig_7_1_data,{
        x: "Board",
        y: "Surplus as Share of Revenue",
        fill: "System",
        tip: true,
        title: (d) => "School Board: " + `${d.Board}` + "\nSurplus as Share of Revenue: " + `${Math.round((+d["Surplus as Share of Revenue"]*100) * 100) / 100}` + "%\nSchool Board Type: " + `${d.System}`,
        channels: {"Surplus as Share of Revenue": "Surplus as Share of Revenue"},
        sort: {x: "Surplus as Share of Revenue"},
        stroke: white,
        strokeWidth: 3,
        strokeOpacity: 0,
    }),
    Plot.ruleY([0.005], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Average, 0.5%"], {y: 0.008, dx: -230}),
    //make the X axis start as 0 and be dashed
    //Plot.ruleY([0], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
    color:{legend: true, domain: ["English Public", "English Catholic", "French Public", "French Catholic"], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]}
})
const fig_7_1_div = document.querySelector("#fig7_1-image img");
replaceFig("fig7_1",fig_7_1);

// FIG 7.3 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
let fig7_3_data = d.map(d => ({Board: d.Board, "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)": d["Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"]*100, System: d.System}));
const fig7_3 = Plot.plot({
    width: 800,
    padding: 0,
    marginLeft: 75,
    className: "sb-chart",
    x:{label: "School Board", nice: true, tickFormat: d => null},
    y:{domain: [-10, 90], label: "Year-End Accumulated Surplus as Share of Expenses", tickFormat: d => d + "%"},
    marks:[
    Plot.barY(fig7_3_data,{
        x: "Board",
        y: "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)",
        fill: "System",
        tip: true,
        channels: {"Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)": "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"},
        sort: {x: "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"},
        title: (d) => "School Board: " + `${d.Board},` + "\nSchool System: " + `${d.System},` + "\nYear-End Accumulated Surplus as Share of Revenue: " + `${Math.round(+d["Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"]*100)/100}`,
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
    }),
    Plot.ruleY([22.6], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Average, 22.6%"], {y: 26.5, dx: -180, fontWeight: "bold"}),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
    color: {legend: true, domain: ["English Public", "English Catholic", "French Public", "French Catholic"], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]}
    //color:{legend: true, domain: ["Small", "Medium", "Large"], range: [fao_blue, fao_light_blue_1, fao_pink], marginLeft: 250}
})
const fig7_3_div = document.querySelector("#fig7_3-image img");
replaceFig("fig7_3",fig7_3);

// FIG 8.2 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
//let fig_33_d have the eqao pass rate as a percentage (so multiply the value by 100)
let fig8_2_d = d.map(d => ({Board: d.Board, "EQAO Pass Rate": d["EQAO Pass Rate"]*100, System: d.System}));
const fig8_2 = Plot.plot({
    width: 800,
    padding: 0,
    marginLeft: 75,
    className: "sb-chart",
    x:{label: "School Board", nice: true, tickFormat: d => null},
    y:{label: "EQAO Pass Rate (%)", nice: true, domain: [0, 100], tickFormat: d => d + "%"},
    marks: [
    Plot.barY(fig8_2_d, {
        x: "Board",
        y: "EQAO Pass Rate",
        fill: "System",
        tip: true,
        channels: {"EQAO Pass Rate": "EQAO Pass Rate"},
        sort: {x: "EQAO Pass Rate"},
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
        title: (d) => "School Board: " + `${d.Board},` + "\nSchool System: " + `${d.System},` + "\nEQAO Pass Rate: " + `${Math.round(+d["EQAO Pass Rate"]*100)/100}` + "%",
    }),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    Plot.ruleY([67.7], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Average, 67.7%"], {y: 70, dx: -50, fontWeight: "bold"}),  
    ],
    color: {legend: true, domain: ["English Public", "English Catholic", "French Public", "French Catholic"], range: ["#1060D5", "#90B7F2", "#E43D96", "#E6C7D8"]}
})

const fig8_2_div = document.querySelector("#fig8_2-image img");
replaceFig("fig8_2",fig8_2);

// FIG 8.4 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart

const fig8_4 = Plot.plot({
    width: 800,
    padding: 0,
    className: "sb-chart",
    marginLeft: 75,
    y:{percent: true, label: "EQAO Pass Rate (%)",domain:[0, 100]},
    x:{label: "School Board", nice: true, tickFormat: d => null},
    marks:[
    Plot.barY(d,{
        x: "Board",
        y: "EQAO Pass Rate",
        fill: "Urban",
        tip: true,
        title: (d) => "School Board: " + `${d.Board}` + "\nEQAO Pass Rate: " + `${Math.round(((+d["EQAO Pass Rate"]*100)*100))/100}` + "%\nUrban Factor: " + `${d.Urban}`,
        channels: {"EQAO Pass Rate": "EQAO Pass Rate"},
        sort: {x: "EQAO Pass Rate"},
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
    }),
    Plot.ruleY([.677], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Average, 67.7%"], {y: .70, dx: -30, fontWeight: "bold"}),  
    Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
    color: {legend: true, domain: ["Rural", "Leans Rural", "Leans Urban", "Urban"], range: ["#E43D96", "#FAD8EA", "#93BBF7", "#1060D5"]}
})
const fig8_4_div = document.querySelector("#fig8_4-image img");
replaceFig("fig8_4",fig8_4);


// FIG 8.5 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// scatter plot
let fig8_5_data = d.map(d => ({Board: d.Board, "EQAO Pass Rate": +d["EQAO Pass Rate"]*100, "Per Student Funding": +d["Per-student Funding ($)"]}));
const fig8_5 = Plot.plot({
    width: 800,
    padding: 0,
    className: "sb-chart",
    marginLeft: 75,
    y:{domain:[40, 85], fy: 5, label: "EQAO Pass Rate (%)"},
    x:{domain:[10000,40000]},
    marks:[
    Plot.dot(fig8_5_data, {
        x: "Per Student Funding",
        y: "EQAO Pass Rate",
        tip: true,
        title: (d) => "School Board: " + `${d.Board}` + "\nEQAO Pass Rate: " + `${Math.round((+d["EQAO Pass Rate"]*100))/100}` + "%\nPer Student Funding: " + "$" + `${Math.round(d["Per Student Funding"])}`,
        fill: "#1060D5",
        channels: {"EQAO Pass Rate": "EQAO Pass Rate", "Per Student Funding": "Per Student Funding"},
        sort: {x: "Per Student Funding"},
        r: 5.5,
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
    }),
    Plot.ruleX([13364], {stroke: "blue", strokeDasharray: "6,6", weight: 1}),
    Plot.ruleY([67.7], {stroke: "blue", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Average pass \nrate 67.7%"], {y: 70, dx: 350}),
    Plot.text(["Average per \nstudent funding \n$13,364"], {y: 82, dx: -220}),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
})
const fig8_5_div = document.querySelector("#fig8_5-image img");
replaceFig("fig8_5",fig8_5);

})

//Figure 4.3
d3.csv("fa2207_chart_csv/fig4.3_data.csv").then(d =>{
    console.log(d);
    let fig4_3_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, Grant: k, Value: d[k], Total: d['Total']})));
    //remove Total and Average from Grant
    fig4_3_tidy_invisible = fig4_3_tidy.filter(d => d.Grant == 'Average');
    fig4_3_tidy = fig4_3_tidy.filter(d => d.Grant != 'Total' && d.Grant != 'Average');
    grants = [];
    for(let i = 0; i < fig4_3_tidy.length; i++){
        //don't add the total to the allocations array
        if(fig4_3_tidy[i].Grant != "Total" && fig4_3_tidy[i].Grant != "Average"){
            grants.push([fig4_3_tidy[i].Board ,fig4_3_tidy[i].Grant , +fig4_3_tidy[i].Value]);
        }
    }
    console.log(fig4_3_tidy);
    const fig4_3 = Plot.plot({
    width: 800,
    padding: 0.3,
    className: "sb-chart",
    marginLeft: 75,
    x:{label: "School Board", nice: true, tickFormat: d => null},
    y:{domain: [0, 35000], label: "Per Student Funding ($)", nice: true},
    marks: [
        //Make an invisible bar to make the tooltip work
       
        Plot.barY(fig4_3_tidy, {
            x: "Board", 
            y: "Value", 
            fill: 'Grant', 
            //tip: true,
            channels: {'Total': 'Total'},
            sort: {x: "Total"},
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        }),
        Plot.barY(fig4_3_tidy_invisible, {
            x: "Board",
            y: "Total",
            tip: true,
            //title should display the board, all the grants and their values, and the total
            title: (d) => "School Board: " + `${d.Board}` + "\nTotal: " + "$" + `${Math.round(d.Total)}` + "\n" + parseGrantString(d.Board, grants),
            //make the bar transparent
            fill: "transparent",
            channels: {"Total": "Total"},
            sort: {x: "Total"},
            stroke: white,
            strokeWidth: 3,
            strokeOpacity: 0,
        }),
        
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
    color: {legend: true, domain: ["Pupil Foundation Grant", "Special Education Grant", "Geographic Circumstances Grant", "Language Grant", "All Other Grants"], range: ["#1060D5", "#E43D96", "#B2D235","#93BBF7","#BFBFBF"]}
    });
    const fig4_3_div = document.querySelector("#fig4_3-image img");
    replaceFig("fig4_3",fig4_3);
})


//figure 4.8
d3.csv("fa2207_chart_csv/fig4.8_data.csv").then(d =>{
    let fig4_8_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Funding": d[k], Language: k})));
    //filter out Average
    fig4_8_tidy = fig4_8_tidy.filter(d => d.Language != ' Average ');
    //remove Total and Average from Grant
    const fig4_8 = Plot.plot({
    width: 800,
    padding: 0,
    marginLeft: 75,
    className: "sb-chart",
    x:{label: "School Board", nice: true, tickFormat: d => null},
    y:{domain: [0, 35000], label: "Per Student Funding ($)", nice: true},
    marks: [
        Plot.barY(fig4_8_tidy, {
        x: "Board", 
        y: "Per Student Funding", 
        fill: 'Language', 
        tip: true,
        title: (d) => "School Board: " + `${d.Board}` + "\nPer Student Funding: " + "$" + `${Math.round(d["Per Student Funding"])}` + "\nSchool Board Type: " + `${d.Language}`,
        channels: {'Per Student Funding': 'Per Student Funding'},
        sort: {x: "Per Student Funding"},
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
        r: 5.5,
        }),
        Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
        Plot.text(["Average, 12,701"], {y: 13950, dx: -150, fontWeight: "bold"}),
        Plot.axisY({ labelAnchor: "center", labelArrow: "none",  }),
    ],
    color: {legend: true, domain:["English-language School Board", "French-language School Board"], range: ["#1060D5", "#E43D96"]}
    });
    const fig4_8_div = document.querySelector("#fig4_8-image img");
    replaceFig("fig4_8",fig4_8);
})

