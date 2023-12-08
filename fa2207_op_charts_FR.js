////////////////////////////////////////////////////////////////////////
// FA2207 - Ontario Public School Boards Interactive Charts ////////////
// Created By: Rishabh Kumar Chowdhary /////////////////////////////////
// Last Updated: 2023-12-04 ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
const scriptVersion = 1.1
console.log('loaded fa2207_op_charts_FR.js v',scriptVersion);

//Constant Definitions
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

const stroke_options = {stroke: white, strokeWidth: 3, strokeOpacity: 0};
const chart_options = {width: 800, padding: 0.3, className: "sb-chart", marginLeft: 80, marginBottom: 50, marginRight: 0};
const csv_dir_url = 'fa2207_chart_csv_FR/';
// const csv_dir_url = '/web/default/files/publications/FA2207%20School%20Board%20Funding/fa2207_chart_csv/';



function replaceFig(figId,graphElement){
  //DOCSTRING: Replaces the image with the graph element
  //figId: the id of the figure
  //graphElement: the graph element to replace the image with
  const img = document.querySelector('#' + figId + '-image img');
  img.after(graphElement);
  img.style.display = "none";
}


function parseAllocationString(board, allocation){
  //DOCSTRING: parses the string for tooltip allocation
  //board: array of all the schoolboards
  //allocation: array of each allocation to parse to the string
  let allocationString = "";
  for(let i = 0; i < allocation.length; i++){
    if(allocation[i].includes(board)){
      for(let j = 0; j < allocation[i].length; j++){
        if(allocation[i][j] != board){
          if(typeof allocation[i][j] == "number"){
            allocation[i][j] = Intl.NumberFormat('fr-CA').format(Math.round(allocation[i][j]));
          }
          if(j == 1){
            allocationString += allocation[i][j] + " : ";
          }
          //add comma after the allocation
          else if(j == allocation[i].length - 1){
            allocationString += allocation[i][j] + " $\n";
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
  //DOCSTRING: parses the string shown to the tooltip with each grant
  //board: an array of all the school boards
  //grant: an array of each grant to parse to the string
  let grantString = "";
  for(let i = 0; i < grant.length; i++){
    if(grant[i].includes(board)){
      for(let j = 0; j < grant[i].length; j++){
        if(grant[i][j] != board){
          if(typeof grant[i][j] == "number"){
            grant[i][j] = Intl.NumberFormat('fr-CA').format(Math.round(grant[i][j]));
          }
          if(j == 1){
            grantString += grant[i][j] + " : ";
          }
          //add comma after the allocation
          else if(j == grant[i].length - 1){
            grantString += grant[i][j] + " $\n";
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
d3.csv(csv_dir_url + "master_board_FR.csv").then( d => {
  console.log(d);
  // FIG 4.1  / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  const fig4_1 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    //center the plot
    x:{label: "Conseil scolaires", nice: true,
      tickFormat: d => null,
    },
    y:{label: "Financement par élève (en dollars)", nice: true, domain:[0,40000]},
    marks: [
      Plot.barY(d, 
        {x: "Conseil scolaire", y: "Financement par élève (en dollars)", 
        fill: "Système scolaire", 
        channels:{'Financement par élève (en dollars)': "Financement par élève (en dollars)"},
        sort: {x: "Financement par élève (en dollars)"},
        //use stroke_options object to set stroke, stroke width, and stroke opacity
        stroke: stroke_options.stroke,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
        }),   
      Plot.ruleY([13364], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
      Plot.text(["Moyenne , 13 364"], {y: 14000, dy: -10, dx: -300, textAnchor: "start", fontSize: 12, text: d => d}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
      
      Plot.tip(d, Plot.pointerX({
        x: "Conseil scolaire",
        y: "Financement par élève (en dollars)",
        title: (d) => "Conseil scolaire : " + `${d["Conseil scolaire"]}` + "\nFinancement par élève : " + `${Intl.NumberFormat('fr-CA').format(Math.round(d["Financement par élève (en dollars)"]))}` + " $" + "\nSystème scolaire : " + `${d["Système scolaire"]}`,
        lineWidth: 1000,
      })),
    ],
    color:{
        legend:true,
        domain:['Public anglais','Catholique anglais','Public français','Catholique français'],
        range:['#1060D5','#90B7F2','#E43D96','#E6C7D8'],
    }
  });
  replaceFig("fig4-1",fig4_1);


  // FIG 6.4 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  // bar chart
  const fig6_4 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{label: "Dépenses par élève (en dollars)", nice: true, domain: [0, 45000]},
    marks:[
      Plot.barY(d,{
        x: "Conseil scolaire",
        y: "Dépenses par élève (en dollars)",
        fill: "Système scolaire",
        channels: {"Dépenses par élève (en dollars)": "Dépenses par élève (en dollars)"},
        sort: {x: "Dépenses par élève (en dollars)"},
        stroke: white,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.ruleY([14426], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 14 426"], {y: 15500, dx: -200, fontWeight: "bold"}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
      Plot.tip(d, Plot.pointerX({
        x: "Conseil scolaire",
        y: "Dépenses par élève (en dollars)",
        title: (d) => "Conseil scolaire : " + `${d["Conseil scolaire"]}` + "\nDépenses par élève : " + `${Intl.NumberFormat('fr-CA').format(Math.round(d["Dépenses par élève (en dollars)"]))}` + " $" + "\nType de conseil scolaire : " + `${d["Système scolaire"]}`,
        lineWidth: 1000,
      })),
    ],
    color: {legend: true, domain:['Public anglais','Catholique anglais','Public français','Catholique français'], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]},
  })
  replaceFig("fig6-4",fig6_4);


  // FIG 7.1 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  // bar chart
  let fig_7_1_data = d.map(d => ({Board: d["Conseil scolaire"], "Surplus as Share of Revenue": +d["Excédent/(déficit) en proportion des revenus"], System: d["Système scolaire"]}));
  console.log(fig_7_1_data);
  const fig_7_1 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    //add percent to the Y axis
    y:{percent: true, domain:[-4, 6], label: "Excédent/(déficit) en proportion des revenus", tickFormat: d => d + "%"},
    marks:[
      Plot.barY(fig_7_1_data,{
        x: "Board",
        y: "Surplus as Share of Revenue",
        fill: "System",
        //tip: true,
        channels: {"Surplus as Share of Revenue": "Surplus as Share of Revenue"},
        sort: {x: "Surplus as Share of Revenue"},
        stroke: white,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.ruleY([0.005], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 0.5%"], {y: 0.008, dx: -230, fontWeight: "bold"}),
      //make the X axis start as 0 and be dashed
      //Plot.ruleY([0], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toFixed(1) + " %" }),
      Plot.tip(fig_7_1_data, Plot.pointerX({
        x: "Board",
        y: "Surplus as Share of Revenue",
        title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nExcédent/(déficit) en proportion des revenus : " + `${(Math.round((+d["Surplus as Share of Revenue"]*100) * 10) / 10).toFixed(1)}` + " %\nType de conseil scolaire : " + `${d.System}`,
        lineWidth: 1000,
      }))
    ],
    color: {legend: true, domain:['Public anglais','Catholique anglais','Public français','Catholique français'], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]},
  })
  replaceFig("fig7-1",fig_7_1);


  // FIG 7.3 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  // bar chart
  let fig7_3_data = d.map(d => ({Board: d["Conseil scolaire"], "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)": d["Excédent cumulé en fin d’année/(déficit) en proportion des revenus (au 31 août 2022)"]*100, System: d["Système scolaire"]}));
  console.log(fig7_3_data);
  const fig7_3 = Plot.plot({
    width: chart_options.width,
    padding: 0,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{domain: [-10, 90], label: "Excédent/(déficit) cumulé en proportion des revenus", tickFormat: d => d + "%"},
    marks:[
      Plot.barY(fig7_3_data,{
        x: "Board",
        y: "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)",
        fill: "System",
        //tip: true,
        channels: {"Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)": "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"},
        sort: {x: "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"},
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
      }),
      Plot.ruleY([22.6], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 22.6%"], {y: 26.5, dx: -180, fontWeight: "bold"}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA') + " %" }),
      Plot.tip(fig7_3_data, Plot.pointerX({
        x: "Board",
        y: "Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)",
        title: (d) => "Conseil scolaire : " + `${d.Board},` + "\nSystème scolaire : " + `${d.System},` + "\nExcédent/(déficit) cumulé en proportion des dépenses : " + `${(Math.round(+d["Year-End Accumulated Surplus as Share of Revenue (August 31, 2022)"]*10)/10).toFixed(1)}` + " %",
        lineWidth: 1000,
      }))
    ],
    color: {legend: true, domain:['Public anglais','Catholique anglais','Public français','Catholique français'], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]},
  })
  replaceFig("fig7-3",fig7_3);
  const fig7_4_bars = document.querySelectorAll('#fig7-3-image g[aria-label="bar"] rect');
  fig7_4_bars.forEach(bar => {
    if(bar.getAttribute('height') < 10) {
      bar.setAttribute('height', 10);
    }
  });


  // FIG 8.2 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  // bar chart
  //let fig_33_d have the eqao pass rate as a percentage (so multiply the value by 100)
  let fig8_2_d = d.map(d => ({Board: d["Conseil scolaire"], "EQAO Pass Rate": d["Taux de réussite OQRE moyen"]*100, System: d["Système scolaire"]}));
  const fig8_2 = Plot.plot({
    width: chart_options.width,
    padding: 0,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{label: "Taux de réussite OQRE (%)", nice: true, domain: [0, 100], tickFormat: d => d + "%"},
    marks: [
      Plot.barY(fig8_2_d, {
        x: "Board",
        y: "EQAO Pass Rate",
        fill: "System",
        //tip: true,
        channels: {"EQAO Pass Rate": "EQAO Pass Rate"},
        sort: {x: "EQAO Pass Rate"},
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
      }),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA') + " %"  }),
      Plot.ruleY([67.7], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 67.7%"], {y: 70, dx: -50, fontWeight: "bold"}),  
      Plot.tip(fig8_2_d, Plot.pointerX({
        x: "Board",
        y: "EQAO Pass Rate",
        title: (d) => "Conseil scolaire : " + `${d.Board},` + "\nSystème scolaire: " + `${d.System},` + "\nTaux de réussite OQRE moyen : " + `${(Math.round(+d["EQAO Pass Rate"]*10)/10).toFixed(1)}` + "%",
        lineWidth: 1000,
        //anchor: "bottom"
        //make
      }))
    ],
    color: {legend: true, domain:['Public anglais','Catholique anglais','Public français','Catholique français'], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_pink]},
  })
  replaceFig("fig8-2",fig8_2);


  // FIG 8.4 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  // bar chart
  const fig8_4 = Plot.plot({
    width: chart_options.width,    
    padding: 0,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    y:{percent: true, label: "Taux de réussite OQRE (%)",domain:[0, 100]},
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    marks:[
      Plot.barY(d,{
        x: "Conseil scolaire",
        y: "Taux de réussite OQRE moyen",
        fill: "Urbain",
        //tip: true,
        channels: {"Taux de réussite OQRE moyen": "Taux de réussite OQRE moyen"},
        sort: {x: "Taux de réussite OQRE moyen"},
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
      }),
      Plot.ruleY([.677], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 67.7%"], {y: .70, dx: -30, fontWeight: "bold"}),  
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA') + " %"  }),
      Plot.tip(d, Plot.pointerX({
        x: "Conseil scolaire",
        y: "Taux de réussite OQRE moyen",
        title: (d) => "Conseil scolaire : " + `${d["Conseil scolaire"]}` + "\nTaux de réussite OQRE moyen : " + `${(Math.round(((+d["Taux de réussite OQRE moyen"]*100)*10))/10).toFixed(1)}` + "%\nFacteur urbain : " + `${d["Urbain"]}`,
        lineWidth: 1000,
      }))
    ],
    color: {legend: true, domain: ["Rural", "Moins rural", "Moins urbain", "Urbain"], range: ["#E43D96", "#FAD8EA", "#93BBF7", "#1060D5"]}
  })
  replaceFig("fig8-4",fig8_4);


  // FIG 8.5 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  // scatter plot
  let fig8_5_data = d.map(d => ({Board: d["Conseil scolaire"], "EQAO Pass Rate": +d["Taux de réussite OQRE moyen"]*100, "Per Student Funding": +d["Financement par élève (en dollars)"]}));
  const fig8_5 = Plot.plot({
    width: chart_options.width,
    padding: 0,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: 26,
    y:{domain:[40, 85], fy: 5, label: "Taux de réussite OQRE moyen (%)"},
    x:{domain:[10000,40000], label: "Financement par élève (en dollars)", nice: true, tickFormat: d => d.toLocaleString('fr-CA')},
    marks:[
      Plot.dot(fig8_5_data, {
        x: "Per Student Funding",
        y: "EQAO Pass Rate",
        tip: true,
        title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nTaux de réussite OQRE moyen : " + `${(Math.round((+d["EQAO Pass Rate"]*10))/10).toFixed(1)}` + " %\nFinancement par élève : " +  `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per Student Funding"]))}` + " $",
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
      Plot.ruleY([40], {stroke: "#BFBFBF",  weight: 1}),
      Plot.ruleX([10000], {stroke: "#BFBFBF", weight: 1}),
      Plot.text(["Taux de réussite\n moyen : 67,7 %"], {y: 70, dx: 260,}),
      Plot.text(["Financement par élève\n moyen : 13 364 $"], {y: 82, dx: -190}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA') + " %" }),
      Plot.axisX({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
    ],
  })
  replaceFig("fig8-5",fig8_5);
})







// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
//Figure 4.3
d3.csv(csv_dir_url + "fig4.3_data_FR.csv").then(d =>{
  let fig4_3_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d["Conseil scolair"], Grant: k, Value: +d[k], Total: +d['Total']})));
  //remove Total and Average : from Grant
  fig4_3_tidy_invisible = fig4_3_tidy.filter(d => (d.Grant == 'Average'));
  fig4_3_tidy = fig4_3_tidy.filter(d => d.Grant != 'Total' && d.Grant != 'Average');
  grants = [];
  for(let i = 0; i < fig4_3_tidy.length; i++){
    //don't add the total to the allocations array
    if(fig4_3_tidy[i].Grant != "Total" && fig4_3_tidy[i].Grant != "Average"){
      grants.push([fig4_3_tidy[i].Board ,fig4_3_tidy[i].Grant , +fig4_3_tidy[i].Value]);
    }
  }
  const fig4_3 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{domain: [0, 35000], label: "Financement par élève (en dollars)", nice: true},
    marks: [
      Plot.barY(fig4_3_tidy, {
        x: "Board", 
        y: "Value", 
        fill: 'Grant', 
        //tip: true,
        channels: {'Total': 'Total'},
        sort: {x: "Total"},
        stroke: white,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      //Make an invisible bar to make the tooltip work
      Plot.barY(fig4_3_tidy_invisible, {
        x: "Board",
        y: "Total",
        //tip: true,
        fill: "transparent",
        //title should display the board, all the grants and their values, and the total
        //make the bar transparent
        channels: {"Total": "Total"},
        sort: {x: "Total"},
        stroke: white,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
      Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 12 701"], {y: 13950, dx: -150, fontWeight: "bold"}),
      Plot.tip(fig4_3_tidy_invisible, Plot.pointerX({
        x: "Board",
        y: "Total",
        title: (d) => "Conseil scolaire: " + `${d.Board}` + "\nTotal : " + `${Intl.NumberFormat('fr-CA').format(Math.round(d.Total))}` + " $" + "\n" + parseGrantString(d.Board, grants),
        lineWidth: 1000,
      })),
    ],
    color: {legend: true, domain: ["Subvention de base pour les élèves", "Subvention pour l’éducation de l’enfance en difficulté", "Subvention pour raisons d’ordre géographique", "Subvention pour l’enseignement des langues", "Toutes les autres subventions"], range: ["#1060D5", "#E43D96", "#B2D235","#93BBF7","#BFBFBF"]}
  });
  replaceFig("fig4-3",fig4_3);
})



// FIG 4.4 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv(csv_dir_url + "fig4.4_data_FR.csv").then(d => {
  //console.log(d);
  let fig4_4_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d["Conseil scolaire"], "Per-student Funding ($)": +d[k], Size: k})));
  fig4_4_tidy = fig4_4_tidy.filter(d => d.Size != 'Average');
  //remove the boards that have no per student funding
  for(let i = 0; i < fig4_4_tidy.length; i++){
    //if the per student funding is "" then remove it
    if(fig4_4_tidy[i]["Per-student Funding ($)"] == 0){
      fig4_4_tidy.splice(i, 1);
      i--;
    }
  }
  console.log(fig4_4_tidy);
  const fig4_4 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x: {label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y: {label: "Financement par élève (en dollars)", nice: true, domain: [0, 35000]},
    marks:[
    Plot.barY(fig4_4_tidy,{
      x: "Board",
      y: "Per-student Funding ($)",
      fill: "Size",
      channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
      sort: {x: "Per-student Funding ($)"},
      stroke: stroke_options.stroke,
      strokeWidth: stroke_options.strokeWidth,
      strokeOpacity: stroke_options.strokeOpacity,
    }),
    Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Moyenne , 12 701"], {y: 13950, dx: -150, fontWeight: "bold"}),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
    Plot.tip(fig4_4_tidy, Plot.pointerX({
      x: "Board",
      y: "Per-student Funding ($)",
      title: (d) => "Conseil scolaire: " + `${d.Board}` + "\nFinancement par élève: " +  `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per-student Funding ($)"]))}` + " $" + "\nTaille: " + `${d.Size}`,
      lineWidth: 1000,
    })),
    ],
    color:{legend: true, domain: ["Petit", "Moyen", "Grand"], range: ["#93BBF7", "#1060D5", "#E23C94"]},
  })
  replaceFig("fig4-4",fig4_4);
})



// FIG 4.5 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv(csv_dir_url + "fig4.5_data_FR.csv").then(d => {
  let fig4_5_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d["Conseil scolaire"], "Per-student Funding ($)": +d[k], Dispersion: k})));
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
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y: {label: "Financement par élève (en dollars)", nice: true, domain: [0, 35000]},
    marks:[
    Plot.barY(fig4_5_tidy,{
      x: "Board",
      y: "Per-student Funding ($)",
      fill: "Dispersion",
      channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
      sort: {x: "Per-student Funding ($)"},
      stroke: stroke_options.stroke,
      strokeWidth: stroke_options.strokeWidth,
      strokeOpacity: stroke_options.strokeOpacity,
    }),
    Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Moyenne , 12 701"], {y: 13950, dx: -150, fontWeight: "bold"}),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
    Plot.tip(fig4_5_tidy, Plot.pointerX({
      x: "Board",
      y: "Per-student Funding ($)",
      title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nFinancement par élève : "  + `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per-student Funding ($)"]))}` + " $" + "\nDispersion: " + `${d.Dispersion}`,
      lineWidth: 1000,
    })),
    ],
    color: {legend: true, domain: ["Dispersion faible", "Dispersion moyenne", "Dispersion élevée"], range: [fao_light_blue_1, fao_blue, fao_pink]}
  })
  replaceFig("fig4-5",fig4_5);
})



// FIG 4.6 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv(csv_dir_url + "fig4.6_data_FR.csv").then(d => {
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
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{label: "Financement par élève (en dollars)", nice: true, domain: [0, 35000]},
    marks:[
      Plot.barY(fig4_6_tidy, {
        x: "Board",
        y: "Per-student Funding ($)",
        fill: "Remote",
        channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
        sort: {x: "Per-student Funding ($)"},
        stroke: stroke_options.stroke,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 12 701"], {y: 13950, dx: -150, fontWeight: "bold"}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
      Plot.tip(fig4_6_tidy, Plot.pointerX({
        x: "Board",
        y: "Per-student Funding ($)",
        title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nFinancement par élève : " + `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per-student Funding ($)"]))}` + "$" + "\nIsolement: " + `${d.Remote}`,
        lineWidth: 1000,
      })),
    ],
    color: {legend: true, domain: ["Isolement faible", "Isolement moyen", "Isolement élevé"], range: ["#93BBF7", "#1060D5", "#E23C94"]}
  })
  replaceFig("fig4-6",fig4_6);
})



// FIG 4.7 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv(csv_dir_url + "fig4.7_data_FR.csv").then(d => {
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
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{label: "Financement par élève (en dollars)", nice: true, domain: [0, 35000]},
    marks: [
    Plot.barY(fig4_7_tidy, {
      x: "Board", 
      y: "Per-student Funding ($)",
      fill: "Urban",
      channels: {"Per-student Funding ($)": "Per-student Funding ($)"},
      sort: {x: "Per-student Funding ($)"},
      stroke: stroke_options.stroke,
      strokeWidth: stroke_options.strokeWidth,
      strokeOpacity: stroke_options.strokeOpacity,
    }),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA') }),
    Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
    Plot.text(["Moyenne , 12 701"], {y: 13950, dx: -150, fontWeight: "bold"}),
    Plot.tip(fig4_7_tidy, Plot.pointerX({
      x: "Board",
      y: "Per-student Funding ($)",
      title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nFinancement par élève : " +  `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per-student Funding ($)"]))}` + " $" + "\nFacture urbaine: " + `${d.Urban}`,
      lineWidth: 1000,
    })),
    ],
    color: {legend: true, domain: ["Rural", "Moins rural", "Moins urbain", "Urbain"], range: ["#E43D96", "#FAD8EA", "#93BBF7", "#1060D5"]}
  })
  replaceFig("fig4-7",fig4_7);
})



// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
//figure 4.8
d3.csv(csv_dir_url + "fig4.8_data_FR.csv").then(d =>{
  let fig4_8_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Funding ($)": +d[k], Language: k})));
  //Get rid of any sub array that has a per student funding of 0
  fig4_8_tidy = fig4_8_tidy.filter(d => d.Language != ' Average ');
  for(let i = 0; i < fig4_8_tidy.length; i++){
    //if the per student funding is "" then remove it
    if(fig4_8_tidy[i]["Per Student Funding ($)"] == 0){
      fig4_8_tidy.splice(i, 1);
      i--;
    }
  }
  const fig4_8 = Plot.plot({
    width: chart_options.width,
    padding: 0,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{domain: [0, 35000], label: "Financement par élève (en dollars)", nice: true},
    marks: [
      Plot.barY(fig4_8_tidy, {
        x: "Board", 
        y: "Per Student Funding ($)", 
        fill: 'Language', 
        //tip: true,
        channels: {'Per Student Funding ($)': 'Per Student Funding ($)'},
        sort: {x: "Per Student Funding ($)"},
        stroke: white,
        strokeWidth: 2,
        strokeOpacity: 1,
        r: 5.5,
      }),
      Plot.ruleY([12701], {stroke: "black", strokeDasharray: "6,6", weight: 1}),
      Plot.text(["Moyenne , 12 701"], {y: 13950, dx: -150, fontWeight: "bold"}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
      Plot.tip(fig4_8_tidy, Plot.pointerX({
        x: "Board",
        y: "Per Student Funding ($)",
        title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nFinancement par élève : "  + `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per Student Funding ($)"]))}` + "$" + "\nType de conseil scolaire : " + `${d.Language}`,
        lineWidth: 1000,
        //anchor: "bottom"
        //make
      })),
    ],
    color: {legend: true, domain:["Conseil scolaire de langue anglaise", "Conseil scolaire de langue française"], range: ["#1060D5", "#E43D96"]}
  });
  replaceFig("fig4-8",fig4_8);
})



// FIG 4.9 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv(csv_dir_url + "fig4.9_data_FR.csv").then(d => {
  let fig4_9_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Funding": +d[k], System: k})));
  fig4_9_tidy = fig4_9_tidy.filter(d => d.System != 'Average');
  for(let i = 0; i < fig4_9_tidy.length; i++){
    //if the per student funding is "" then remove it
    if(fig4_9_tidy[i]["Per Student Funding"] == 0){
      fig4_9_tidy.splice(i, 1);
      i--;
    }
  }
  const fig4_9 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
  x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
  y:{domain: [0, 4500], label: "Financement par élève (en dollars)", nice: true},
  marks: [
    Plot.barY(fig4_9_tidy, {
    x: "Board", 
    y: "Per Student Funding", 
    fill: 'System', 
    channels: {'Per Student Funding': 'Per Student Funding'},
    sort: {x: "Per Student Funding"},
    stroke: stroke_options.stroke,
    strokeWidth: stroke_options.strokeWidth,
    strokeOpacity: stroke_options.strokeOpacity,
    }),
    Plot.ruleY([652], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
    Plot.text(["Moyenne , 652"], {y: 700, dx: -200, dy: -10, textAnchor: "start",  fontSize: 12, fontWeight:"bold",text: d => d}),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
    Plot.tip(fig4_9_tidy, Plot.pointerX({
      x: "Board",
      y: "Per Student Funding",
      title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nFinancement par élève : " +  `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per Student Funding"]))}`+  " $" + "\nSystème scolaire : " + `${d.System}`,
      lineWidth: 1000,
    }))
],
  color: {legend: true, domain: ["Public anglais", "Catholique anglais", "Public français", "Catholique français"], range: ["#1060D5", "#90B7F2", "#E43D96", "#E6C7D8"]}
  });
  replaceFig("fig4-9",fig4_9);
})



//FIG 4.10 / / / / / / / / / /
// Stacked
d3.csv(csv_dir_url + "fig4.10_data_FR.csv").then(d => {
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
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{domain: [0, 4500], label: "Financement par élève (en dollars)", nice: true},
    marks: [
      Plot.barY(fig4_10_tidy, {
      x: "Board", 
      y: "Per Student Funding", 
      fill: 'Allocation', 
      channels: {'Total': 'Total'},
      sort: {x: "Total"},
      stroke: stroke_options.stroke,
      strokeWidth: stroke_options.strokeWidth,
      strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.barY(fig4_10_invisible, {
        x: "Board",
        y: "Total",
        fill: "transparent",
        //tip: true,
        channels: {"Total": "Total"},
        sort: {x: "Total"},
        stroke: stroke_options.stroke,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.ruleY([652], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
      Plot.text(["Moyenne , 652"], {y: 700, dx: -200, dy: -10, textAnchor: "start",  fontWeight: "bold", fontSize: 12, text: d => d}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
      Plot.tip(fig4_10_invisible, Plot.pointerX({
        x: "Board",
        y: "Total",
          //list all the allocation and their values in the title
        title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nTotal : " +  `${Intl.NumberFormat('fr-CA').format(Math.round(d.Total))}` +  " $" + "\n" + parseAllocationString(d.Board, allocations),
        lineWidth: 1000,
      }))
    ],
    color: {legend: true, domain: ["Associé au COVID", "Soutien pour le tutorat", "Soutien et évaluation de la lecture", "Tous les autres"], range: [fao_blue, fao_light_blue_1, fao_pink, fao_light_blue_2]}
  });
  replaceFig("fig4-10",fig4_10);
})



// FIG 4.11 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv(csv_dir_url + "fig4.11_data_FR.csv").then(d=>{
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
  const fig4_11 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires", nice: true, tickFormat: d => null},
    y:{domain: [0, 600], label: "Financement par élève (en dollars)", nice: true},
    marks:[
    Plot.barY(fig4_11_tidy, {
      x: "Board",
      y: "Per Student Funding",
      fill: "Language",
      channels: {"Per Student Funding": "Per Student Funding"},
      sort: {x: "Per Student Funding"},
      stroke: stroke_options.stroke,
      strokeWidth: stroke_options.strokeWidth,
      strokeOpacity: stroke_options.strokeOpacity,
    }),
    Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
    Plot.tip(fig4_11_tidy, Plot.pointerX({
      x: "Board",
      y: "Per Student Funding",
      title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nFinancement par élève : " +  `${Math.round(d["Per Student Funding"])}` + " $" + "\nType de conseil scolaire : " + `${d.Language}`,
      lineWidth: 1000,
    })),
    ],
    color: {legend: true, domain: ["Conseil scolaire de langue anglaise", "Conseil scolaire de langue française"], range: [fao_blue, fao_pink]}
  })
  replaceFig("fig4-11",fig4_11);
})



// FIG 5.3 / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
// bar chart
d3.csv(csv_dir_url + "fig5.3_data_FR.csv").then(d => {
  let fig5_3_tidy = d.flatMap(d => Object.keys(d).slice(1).map(k => ({Board: d.Board, "Per Student Revenue": +d[k], System: k, Total: +d['Total']})));
  fig5_3_tidy = fig5_3_tidy.filter(d => d.System != 'Average');
  for(let i = 0; i < fig5_3_tidy.length; i++){
    //if the per student funding is "" then remove it
    if(fig5_3_tidy[i]["Per Student Revenue"] == ""){
      fig5_3_tidy.splice(i, 1);
      i--;
    }
  }
  let allocations = [];
  for(let i = 0; i < fig5_3_tidy.length; i++){
    //don't add the total to the allocations array
    if(fig5_3_tidy[i].System != "Total"){
      allocations.push([fig5_3_tidy[i].Board ,fig5_3_tidy[i].System , +fig5_3_tidy[i]["Per Student Revenue"]]);
    }
  }
  //fig 5.3 invisible should just have board and total
  let fig5_3_invisible = [];
  for(let i = 0; i < fig5_3_tidy.length; i++){
      if(fig5_3_tidy[i].System == "Total"){
          fig5_3_invisible.push(fig5_3_tidy[i]);
      }
  }

  console.log(fig5_3_tidy);

  const fig5_3 = Plot.plot({
    width: chart_options.width,
    padding: chart_options.padding.padding,
    className: chart_options.className,
    marginLeft: chart_options.marginLeft,
    marginBottom: chart_options.marginBottom,
    marginRight: chart_options.marginRight,
    x:{label: "Conseil scolaires",nice: true, tickFormat: d => null},
    y:{domain: [0, 45000], label: "Revenus par élève (en dollars)", nice: true},
    marks: [
      Plot.barY(fig5_3_tidy, {
        x: "Board", 
        y: "Per Student Revenue", 
        fill: 'System', 
        channels: {'Per Student Revenue': 'Per Student Revenue'},
        sort: {x: "Per Student Revenue"},
        stroke: stroke_options.stroke,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.barY(fig5_3_invisible, {
        x: "Board",
        y: "Per Student Revenue",
        fill: "transparent",
        channels: {"Per Student Revenue": "Per Student Revenue"},
        sort: {x: "Per Student Revenue"},
        stroke: stroke_options.stroke,
        strokeWidth: stroke_options.strokeWidth,
        strokeOpacity: stroke_options.strokeOpacity,
      }),
      Plot.ruleY([14501], {stroke: "black", strokeDasharray: "4,4", weight: 4}),
      Plot.text(["Moyenne , 14 501"], {y: 15500, dx: -200, fontWeight: "bold"}),
      Plot.axisY({ labelAnchor: "center", labelArrow: "none", tickFormat: d=> d.toLocaleString('fr-CA')  }),
      Plot.tip(fig5_3_invisible, Plot.pointerX({
        x: "Board",
        y: "Per Student Revenue",
        title: (d) => "Conseil scolaire : " + `${d.Board}` + "\nRevenus par élève : "  + `${Intl.NumberFormat('fr-CA').format(Math.round(d["Per Student Revenue"]))}` + " $" + "\nSystème scolaire : " + parseAllocationString(d.Board, allocations) + "Total : " + `${Intl.NumberFormat('fr-CA').format(Math.round(d.Total))}` + " $",
        lineWidth: 1000,
      }))
    ],
    color: {legend: true, domain: ["Revenus pour projets d’infrastructure", "Revenus de fonctionnement provinciaux et de source propre", "Revenus des transferts de fonctionnement fédéraux"], range: [fao_light_blue_1, fao_pink, fao_blue]}
  });
  replaceFig("fig5-3",fig5_3);
})



