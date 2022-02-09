// 'use strict';

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

// let data = MOUNTAINS;

function buildTable(data) {
    var headers = Object.keys(data[0]);
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');

    // Header Row
    headers.forEach(function(header){
        var headerEl = document.createElement('th');
        headerEl.textContent = header;
        headerRow.appendChild(headerEl);
    })
    table.appendChild(headerRow);
    
    // Main Rows
    data.forEach(function(index){
        var row = document.createElement('tr');
        for (attribute in index) {
            var element = document.createElement('td');
            if (typeof index[attribute] === 'number') {
                element.style.textAlign = "right";
            }
            element.textContent = index[attribute];
            row.appendChild(element);
        }
        table.appendChild(row);
    })
    return table;
}
document.body.appendChild(buildTable(MOUNTAINS));


// Wrap this stuff below in a function for more fun!
// if (!!data && data.length > 1) {
//     const headers = parseHeader(data);
//     const tableElement = generateTable(headers, data);

//     const element = document.getElementById('output');
//     removeAllChildNodes(output);
//     output.appendChild(tableElement);
// }

// function parseHeader(data) {
//     let headers = [];
//     for (const [key, value] of Object.entries(data[0])) {
//       headers.push({ name: key, type: typeof value });
//     }
//     return headers;
//   }
  
//   function generateTable(headers, data) {
//     const tableElement = document.createElement('table');
//     tableElement.classList.add('a');
  
//     addTableStyles(headers);
  
//     generateHeader(headers, tableElement);
//     generateRows(data, tableElement);
  
//     return tableElement;
//   }
  
//   function generateHeader(headers, tableElement) {
//     const rowElement = document.createElement('tr');
//     tableElement.appendChild(rowElement);
  
//     headers.forEach((header) => {
//       const cellElement = document.createElement('th');
//       rowElement.appendChild(cellElement);
//       cellElement.setAttribute('onclick', `sortColumn(this)`);
//       const textNode = document.createTextNode(header.name);
//       cellElement.appendChild(textNode);
//     });
//   }
  
//   function generateRows(data, tableElement) {
//     data.forEach((dataRow) => {
//       const rowElement = document.createElement('tr');
//       tableElement.appendChild(rowElement);
//       for (const [, value] of Object.entries(dataRow)) {
//         const cellElement = document.createElement('td');
//         rowElement.appendChild(cellElement);
//         const textNode = document.createTextNode(value);
//         cellElement.appendChild(textNode);
//       }
//     });
//   }