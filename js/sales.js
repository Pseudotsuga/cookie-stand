'use strict';
// Global Variables Beneath Here
var hoursOpenTitle = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
var additionalStoreDataArray = [];
//Global Functions Go Beneath Here
function renderTableHead(){
  var mainElement = document.getElementById('target');
  var tableElement = document.createElement('table');
  tableElement.setAttribute('id','table');
  mainElement.appendChild(tableElement);

  var captionElement = document.createElement('caption');
  captionElement.textContent = 'Sales Data by Time and Location';
  tableElement.appendChild(captionElement);

  var tableHeadElement = document.createElement('thead');
  tableElement.appendChild(tableHeadElement);

  var tableRowElement = document.createElement('tr');
  tableHeadElement.appendChild(tableRowElement);

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope','col');
  tableHeadingElement.textContent = 'Store';
  tableRowElement.appendChild(tableHeadingElement);

  for(var i = 0; i < hoursOpenTitle.length; i++){
    tableHeadingElement = document.createElement('th');
    tableHeadingElement.setAttribute('scope','col');
    tableHeadingElement.textContent = `${hoursOpenTitle[i]} `;
    tableRowElement.appendChild(tableHeadingElement);
  }
  tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope','col');
  tableHeadingElement.textContent = 'Daily Location Total:';
  tableRowElement.appendChild(tableHeadingElement);
}
function makeObjectFromForm(event){
  event.preventDefault();
  var formObject = new StoreLocation(event.target.storeName.value, event.target.minimumCustomersPerHour.value, event.target.maximumCustomersPerHour.value, event.target.averageCookieSalesPerCustomer.value);
  additionalStoreDataArray.push(formObject);
  console.log(additionalStoreDataArray);
}
console.log(additionalStoreDataArray[0][0]);
// function renderAdditionalStoreData(){
//   var tableElement = document.getElementById('table');
//   var tableBodyElement = document.createElement('tbody');
//   tableBodyElement.setAttribute('id', 'tbody');
//   tableElement.appendChild(tableBodyElement);

//   var tableRowElement = document.createElement('tr');
//   tableBodyElement.appendChild(tableRowElement);

//   var tableHeadingElement = document.createElement('th');
//   tableHeadingElement.setAttribute('scope', 'row')
//   tableHeadingElement.textContent = document.getElementById('storeNameInput').value;
//   tableRowElement.appendChild(tableHeadingElement);

//   for(var i = 0; i < hoursOpenTitle.length; i++){
//     var tableDataElement = document.createElement('td');
//     tableDataElement.setAttribute('class', `${hoursOpenTitle[i]}`)
//     tableElement.textContent =
//   }
// }
function StoreLocation(storename, minimumCustomersPerHour, maximumCustomersPerHour, avgCookieSalesPerCustomer){
  this.storename = storename;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.avgCookieSalesPerCustomer = avgCookieSalesPerCustomer;
}
// var additionalStoreDataArray = [];
// // var starterDataArray = [
// //   ['Seattle', 23, 65, 6.3],
// //   ['Tokyo', 3, 24, 1.2],
// //   ['Dubai', 11, 38, 1.7],
// //   ['Paris', 20, 38, 1.3],
// //   ['Lima', 2, 16, 4.6]
// // ];
// // var hourlySalesArray = [];
// // var initalTotalSales = 0;

// var initialNumberOfStores = 0;
// var initialTotalTotal = 0;
// // var numberofInputs = 4;
// var storeNameNode = document.getElementById('storeNameInput');
// var minimumCustomersPerHourNode = document.getElementById('minimumCustomersPerHourInput');
// var maximumCustomersPerHourNode = document.getElementById('maximumCustomersPerHourInput');
// var averageCookieSalesPerCustomerNode = document.getElementById('averageCookiesSalesPerCustomerInput');
// var hoursOpenNode = document.getElementById('hoursOpenInput');

// function additionalStoreDataArrayPush(){
//   var nestedArray = [];
//   nestedArray.push(storeNameNode.value, minimumCustomersPerHourNode.value, maximumCustomersPerHourNode.value, averageCookieSalesPerCustomerNode.value, hoursOpenNode.value);
//   additionalStoreDataArray.push(nestedArray);
// }
// // function newStoreLocationMaker (storename, minimumCustomersPerHour, maximumCustomersPerHour, avgCookieSalesPerCustomer){
// //   var newStoreLocation = new StoreLocation (storename, minimumCustomersPerHour, maximumCustomersPerHour, avgCookieSalesPerCustomer);
// //   additionalStoreDataArray.push(newStoreLocation);
// // }
// function renderAdditionalStoreData(event){
//   event.preventDefault();
//   additionalStoreDataArrayPush();
//   console.log(additionalStoreDataArray);
// }

// StoreLocation.prototype.randomNumberOfCustomers = function(){
//   return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
// };

// StoreLocation.prototype.randomSalesData = function(){
//   for(var i = 0; i < hoursOpenTitle.length; i++){
//     this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
//     this.initalTotalSales += this.hourlySalesArray[i];
//   }
// };

// StoreLocation.prototype.renderSalesDataAsTableRow = function(){
//   var targetLocationNode = document.getElementById('table');
//   var tableBodyElement = document.createElement('tbody');
//   tableBodyElement.setAttribute('id', 'tbodyID');
//   targetLocationNode.appendChild(tableBodyElement);

//   var tableRowElement = document.createElement('tr');
//   tableBodyElement.appendChild(tableRowElement);

//   var tableHeadingElement = document.createElement('th');
//   tableHeadingElement.setAttribute('scope', 'row');
//   tableHeadingElement.textContent = `${this.storename}: `;
//   tableRowElement.appendChild(tableHeadingElement);

//   for(var i = 0; i < this.hourlySalesArray.length; i++){
//     var tableDataElement = document.createElement('td');
//     tableDataElement.setAttribute('class', `${hoursOpenTitle[i]}`);
//     tableDataElement.textContent = `${this.hourlySalesArray[i]}`;
//     tableRowElement.appendChild(tableDataElement);
//   }

//   tableDataElement = document.createElement('td');
//   tableDataElement.setAttribute('class', 'total');
//   tableDataElement.textContent = this.initalTotalSales;
//   tableRowElement.appendChild(tableDataElement);

//   initialNumberOfStores += 1;
// };


// function renderTableFooter(){
//   var targetLocationNode = document.getElementById('table');
//   var tableFooterElement = document.createElement('tfoot');
//   targetLocationNode.appendChild(tableFooterElement);

//   var tableRowElement = document.createElement('tr');
//   tableRowElement.setAttribute('id','totalTarget');
//   tableFooterElement.appendChild(tableRowElement);

//   var tableHeadingElement = document.createElement('th');
//   tableHeadingElement.textContent = 'Hourly Totals: ';
//   tableHeadingElement.setAttribute('scope', 'row');
//   tableRowElement.appendChild(tableHeadingElement);

//   for(var i = 0; i < hoursOpenTitle.length; i++){
//     var dynamicTotalValue = 0;
//     var hourValues = document.getElementsByClassName(`${hoursOpenTitle[i]}`);
//     for(var j = 0; j < initialNumberOfStores; j++){
//       dynamicTotalValue += parseInt(`${hourValues[j].textContent}`, 10);
//     }
//     var tableDataElement = document.createElement('td');
//     tableDataElement.setAttribute('class', 'hourlyTotal');
//     tableDataElement.textContent = `${dynamicTotalValue}`;
//     tableRowElement.appendChild(tableDataElement);
//   }
//   tableDataElement = document.createElement('td');
//   for(var k = 0; k < initialNumberOfStores; k++){
//     var totalValues = document.getElementsByClassName('total');
//     initialTotalTotal += parseInt(`${totalValues[k].textContent}`, 10);
//   }
//   tableDataElement.textContent = `${initialTotalTotal}`;
//   tableRowElement.appendChild(tableDataElement);
// }

renderTableHead();

// var seattle = new StoreLocation('Seattle', 23, 65, 6.3);
// seattle.randomSalesData();
// seattle.renderSalesDataAsTableRow();

// var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2);
// tokyo.randomSalesData();
// tokyo.renderSalesDataAsTableRow();

// var dubai = new StoreLocation('Dubai', 11, 38, 3.7);
// dubai.randomSalesData();
// dubai.renderSalesDataAsTableRow();

// var paris = new StoreLocation('Paris', 20, 38, 2.3);
// paris.randomSalesData();
// paris.renderSalesDataAsTableRow();

// var lima = new StoreLocation('Lima', 2, 16, 4.6);
// lima.randomSalesData();
// lima.renderSalesDataAsTableRow();


var submitForm = document.getElementById('form');
submitForm.addEventListener('submit', makeObjectFromForm);

// renderTableFooter();
