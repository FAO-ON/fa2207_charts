// Updated data
const data = [
    { board: 'Halton Catholic DSB', funding: 11729, type: 'English Catholic' },
    { board: 'Halton DSB', funding: 11920, type: 'English Public' },
    { board: 'Durham DSB', funding: 11991, type: 'English Public' },
    { board: 'Waterloo Region DSB', funding: 12071, type: 'English Public' },
    { board: 'Simcoe County DSB', funding: 12346, type: 'English Public' },
    { board: 'York Region DSB', funding: 12354, type: 'English Public' },
    { board: 'Waterloo Catholic DSB', funding: 12419, type: 'English Catholic' },
    { board: 'York Catholic DSB', funding: 12503, type: 'English Catholic' },
    { board: 'Peel DSB', funding: 12512, type: 'English Public' },
    { board: 'Durham Catholic DSB', funding: 12545, type: 'English Catholic' },
    { board: 'Hamilton-Wentworth Cath DSB', funding: 12638, type: 'English Catholic' },
    { board: 'Dufferin-Peel Catholic DSB', funding: 12639, type: 'English Catholic' },
    { board: 'Hamilton-Wentworth DSB', funding: 12660, type: 'English Public' },
    { board: 'Thames Valley DSB', funding: 12664, type: 'English Public' },
    { board: 'Simcoe Muskoka Catholic DSB', funding: 12672, type: 'English Catholic' },
    { board: 'Upper Grand DSB', funding: 12757, type: 'English Public' },
    { board: 'DSB of Niagara', funding: 12763, type: 'English Public' },
    { board: 'Greater Essex County DSB', funding: 12781, type: 'English Public' },
    { board: 'Grand Erie DSB', funding: 12911, type: 'English Public' },
    { board: 'Kawartha Pine Ridge DSB', funding: 12911, type: 'English Public' },
    { board: 'London Dist. Catholic School', funding: 12914, type: 'English Catholic' },
    { board: 'Niagara Catholic DSB', funding: 12991, type: 'English Catholic' },
    { board: 'Ottawa-Carleton DSB', funding: 12998, type: 'English Public' },
    { board: 'Brant Haldimand Norfolk CDSB', funding: 13040, type: 'English Public' },
    { board: 'Windsor-Essex Catholic DSB', funding: 13064, type: 'English Catholic' },
    { board: 'Ottawa Catholic DSB', funding: 13120, type: 'English Catholic' },
    { board: 'PVNC Catholic DSB', funding: 13351, type: 'English Catholic' },
    { board: 'Lambton Kent DSB', funding: 13359, type: 'English Public' },
    { board: 'Toronto DSB', funding: 13428, type: 'English Public' },
    { board: 'Toronto Catholic DSB', funding: 13532, type: 'English Catholic' },
    { board: 'Bluewater DSB', funding: 13550, type: 'English Public' },
    { board: 'Wellington Catholic DSB', funding: 13730, type: 'English Catholic' }, 
    { board: 'Trillium Lakelands DSB', funding: 13796, type: 'English Public' },
    { board: 'St. Clair Catholic DSB', funding: 13809, type: 'English Catholic' },
    { board: 'Avon Maitland DSB', funding: 14053, type: 'English Public' },
    { board: 'Limestone DSB', funding: 14103, type: 'English Public' },
    { board: 'Hastings & Prince Edward DSB', funding: 14283, type: 'English Public' },
    { board: 'Algonquin & Lakeshore Cath DSB', funding: 14425, type: 'English Catholic' },
    { board: 'Upper Canada DSB', funding: 14733, type: 'English Public' },
    { board: 'Bruce-Grey Catholic DSB', funding: 14887, type: 'English Catholic' },
    { board: 'Cath DSB of Eastern Ontario', funding: 15226, type: 'English Catholic' },
    { board: 'Huron-Perth Catholic DSB', funding: 15294, type: 'English Catholic' },
    { board: 'Lakehead DSB', funding: 15369, type: 'English Public' }, 
    { board: "CSD cath. Centre-Est de l'Ont.", funding: 15507, type: 'French Catholic' },
    { board: 'Renfrew County DSB', funding: 15618, type: 'English Public' },
    { board: 'Sudbury Catholic DSB', funding: 15731, type: 'English Catholic' },
    { board: 'Rainbow DSB', funding: 15926, type: 'English Public' }, 
    { board: 'Thunder Bay Catholic DSB', funding: 16195, type: 'English Catholic' },
    { board: "CEP de l&#39Est de l&#39Ontario", funding: 16465, type: 'French Public' },
    { board: 'Renfrew County Catholic DSB', funding: 16469, type: 'English Catholic' },
    { board: 'Near North DSB', funding: 16549, type: 'English Public' },
    { board: 'Algoma DSB', funding: 16757, type: 'English Public' }, 
    { board: 'CSC Providence', funding: 17137, type: 'French Catholic' },
    { board: "CSD cath. de l'Est ontarien", funding: 17468, type: 'French Catholic' },
    { board: 'CSC MonAvenir', funding: 17477, type: 'French Catholic' },
    { board: 'Conseil scolaire Viamonde', funding: 18175, type: 'French Public' },
    { board: 'Huron-Superior Catholic DSB', funding: 18334, type: 'English Catholic' },
    { board: 'Nipissing-Parry Sound Cath DSB', funding: 18826, type: 'English Catholic' },
    { board: 'DSB Ontario North East', funding: 19559, type: 'English Public' }, 
    { board: 'Northeastern Catholic DSB', funding: 20295, type: 'English Catholic' },
    { board: 'CSD cath. du Nouvel-Ontario', funding: 20327, type: 'French Catholic' },
    { board: 'Keewatin-Patricia DSB', funding: 21324, type: 'English Public' },
    { board: 'CSD cath. des Grandes Rivières', funding: 21514, type: 'French Catholic' },
    { board: 'Kenora Catholic DSB', funding: 22874, type: 'English Catholic' },
    { board: 'Northwest Catholic DSB', funding: 22939, type: 'English Catholic' },
    { board: 'CSD catholique Franco-Nord', funding: 23563, type: 'French Catholic' },
    { board: 'Rainy River DSB', funding: 23890, type: 'English Public' },
    { board: 'CSP du Nord-Est de l\'Ontario', funding: 27268, type: 'French Public' },
    { board: 'CSP du Grand Nord de l\'Ontario', funding: 27517, type: 'French Public' },
    { board: 'Superior-Greenstone DSB', funding: 32524, type: 'English Public' },
    { board: 'Superior North Catholic DSB', funding: 33671, type: 'English Catholic' },
    { board: 'CSD cath. des Aurores boréales', funding: 35192, type: 'French Catholic' },
];



// Set up legend colors
const legendColors = {
    'English Public': 'steelblue',
    'English Catholic': '#ED7D31',
    'French Public': 'grey',
    'French Catholic': '#F9C000',
};

// Set up the chart dimensions
const margin = { top: 30, right: 30, bottom: 50, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create SVG container
const svg = d3.select('#bar-chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// Create scales
const xScale = d3.scaleBand()
    .domain(data.map(d => d.board))
    .range([0, width])
    .padding(0.5)

//make yScale max be 40000
const yScale = d3.scaleLinear()
    .domain([0, 40000])
    .range([height, 0]);

// Create bars
svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.board))
    .attr('y', d => yScale(d.funding))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.funding))
    .attr('fill', d => legendColors[d.type])
    .attr('class', d => d.type.toLowerCase().replace(' ', '-'))
    //Make it so when the mouse is over the bar, or when you click on the bar, the name of the school board appears
    .on('mouseover', function (d) {
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip.html('School Board: ' + d.board + '<br>' + 'Funding: ' + d.funding + '<br>')
            //Code that makes the tooltip appear next to the mouse, and improves accuracy of the tooltip
            .style('left', `${d3.event.pageX - svg.node().getBoundingClientRect().left}px`)
            .style('top', `${d3.event.pageY - svg.node().getBoundingClientRect().top}px`);
    })
    .on('mousemove', function (d) {
        //Constantly updating the position of the tooltip
        tooltip.style('left', `${d3.event.pageX - svg.node().getBoundingClientRect().left}px`)
            .style('top', `${d3.event.pageY - svg.node().getBoundingClientRect().top}px`);
    })
    .on('mouseout', function (d) {
        tooltip.transition().duration(200).style('opacity', 0);
    }
    );
    /*
    .on('mouseover', function (d) {
        tooltip.transition().duration(500).style('opacity', 0.9);
        tooltip.html(d.board)
            .style('left', `${d3.event.pageX}px`)
            .style('top', `${d3.event.pageY - 28}px`);
    })
    .on('mouseout', function (d) {
        tooltip.transition().duration(800).style('opacity', 0);
    });
    */


// Create axes
const yAxis = d3.axisLeft(yScale);

svg.append('text')
    .attr('x', width / 2)
    .attr('y', height + margin.top + 20)
    .attr('text-anchor', 'middle')
    .text('School Boards');

svg.append('g')
    .call(yAxis)
    .classed('axis-y', true);
//Name the y axis "Funding"
svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -margin.left + 10)
    .attr('text-anchor', 'middle')
    .text('Per-Student Funding($)');

// Display the name of the school board when the user hovers over the bar

// Create tooltip to display the name of the school board and its fund 
const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

const legendItems = ['english-public', 'english-catholic', 'french-public', 'french-catholic'];

legendItems.forEach(item => {
    const legendItem = d3.select(`#legend-${item}`);
    
    legendItem.on('click', function () {
        const selectedClass = legendItem.attr('class');
        const isSelected = selectedClass.includes('selected');
        
        if (isSelected) {
            // Remove the 'selected' class
            legendItem.attr('class', selectedClass.replace(' selected', ''));
            // Hide the corresponding bars
            svg.selectAll(`rect.${item}`).style('display', 'none');
        } else {
            // Add the 'selected' class
            legendItem.attr('class', `${selectedClass} selected`);
            // Show the corresponding bars
            svg.selectAll(`rect.${item}`).style('display', null);
        }
    });
});


svg.selectAll('rect')

