'use strict';
var hoursOpenTitle = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
var initialNumberOfStores = 0;

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
  tableHeadingElement.textContent = 'Daily Location Total: ';
  tableRowElement.appendChild(tableHeadingElement);
}

function renderTableFooter(){
  var targetLocationNode = document.getElementsByTagName('table')[0];
  var tableFooterElement = document.createElement('tfoot');
  targetLocationNode.appendChild(tableFooterElement);

  var tableRowElement = document.createElement('tr');
  tableRowElement.setAttribute('id','totalTarget');
  tableFooterElement.appendChild(tableRowElement);

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.textContent = 'Hourly Totals: ';
  tableHeadingElement.setAttribute('scope', 'row');
  tableRowElement.appendChild(tableHeadingElement);

  for(var i = 0; i < hoursOpenTitle.length; i++){
    var dynamicTotalValue = 0;
    var hourValues = document.getElementsByClassName(`${hoursOpenTitle[i]}`);
    for(var j = 0; j < initialNumberOfStores; j++){
      dynamicTotalValue += parseInt(`${hourValues[j].textContent}`, 10);
    }
    var tableDataElement = document.createElement('td');
    tableDataElement.setAttribute('class', 'hourlyTotal');
    tableDataElement.textContent = `${dynamicTotalValue}`;
    tableRowElement.appendChild(tableDataElement);
  }
  tableDataElement = document.createElement('td');
  for(var k = 0; k < initialNumberOfStores; k++){
    var initialTotalTotal = 0;
    var totalValues = document.getElementsByClassName('total');
    initialTotalTotal += parseInt(`${totalValues[k].textContent}`, 10);
    console.log(initialTotalTotal);
  }
  tableDataElement.textContent = `${initialTotalTotal}`;
  tableRowElement.appendChild(tableDataElement);
}
function StoreLocation(storename, minimumCustomersPerHour, maximumCustomersPerHour, avgCookieSalesPerCustomer, hoursOpen, hourlySalesArray, initalTotalSales){
  this.storename = storename;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.avgCookieSalesPerCustomer = avgCookieSalesPerCustomer;
  this.hoursOpen = hoursOpen;
  this.hourlySalesArray = hourlySalesArray;
  this.initalTotalSales = initalTotalSales;
}

StoreLocation.prototype.randomNumberOfCustomers = function(){
  return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
};

StoreLocation.prototype.randomSalesData = function(){
  for(var i = 0; i < this.hoursOpen; i++){
    this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
    this.initalTotalSales += this.hourlySalesArray[i];
  }
};

//consider establishing function parameters than can specify parent and child nodes to increase legibility.
StoreLocation.prototype.renderSalesDataAsList = function(){
  var mainElement = document.getElementById('target');
  var ulElement = document.createElement('ul');
  ulElement.setAttribute('id',`${this.storename}UL`);
  ulElement.textContent = `${this.storename} Sales Data:`;
  mainElement.appendChild(ulElement);
  for (var i = 0; i < this.hourlySalesArray.length; i++){
    var liElement = document.createElement('li');
    liElement.setAttribute('id', `${this.storename}li${i}`);
    liElement.textContent = `${hoursOpenTitle[i]} ${this.hourlySalesArray[i]}`;
    ulElement.appendChild(liElement);
  }
  var parentElement = document.getElementById(`${this.storename}UL`);
  var totalLiElement = document.createElement('li');
  totalLiElement.textContent = `Total: ${this.initalTotalSales}`;
  parentElement.appendChild(totalLiElement);
  initialNumberOfStores += 1;
};

StoreLocation.prototype.renderSalesDataAsTableRow = function(){
  var targetLocationNode = document.getElementById('table');
  var tableRowElement = document.createElement('tr');
  targetLocationNode.appendChild(tableRowElement);

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope', 'row');
  tableHeadingElement.textContent = `${this.storename}: `;
  tableRowElement.appendChild(tableHeadingElement);

  for(var i = 0; i < this.hourlySalesArray.length; i++){
    var tableDataElement = document.createElement('td');
    tableDataElement.setAttribute('class', `${hoursOpenTitle[i]}`);
    tableDataElement.textContent = `${this.hourlySalesArray[i]}`;
    tableRowElement.appendChild(tableDataElement);
  }

  tableDataElement = document.createElement('td');
  tableDataElement.setAttribute('class', 'total');
  tableDataElement.textContent = this.initalTotalSales;
  tableRowElement.appendChild(tableDataElement);

  initialNumberOfStores += 1;
};

renderTableHead();

var seattle = new StoreLocation('Seattle', 23, 65, 6.3, 14, [], 0);
seattle.randomNumberOfCustomers();
seattle.randomSalesData();
seattle.renderSalesDataAsTableRow();

var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2, 14, [], 0);
tokyo.randomNumberOfCustomers();
tokyo.randomSalesData();
tokyo.renderSalesDataAsTableRow();

var dubai = new StoreLocation('Dubai', 11, 38, 3.7, 14, [], 0);
dubai.randomNumberOfCustomers();
dubai.randomSalesData();
dubai.renderSalesDataAsTableRow();

var paris = new StoreLocation('Paris', 20, 38, 2.3, 14, [], 0);
paris.randomNumberOfCustomers();
paris.randomSalesData();
paris.renderSalesDataAsTableRow();

var lima = new StoreLocation('Lima', 2, 16, 4.6, 14, [], 0);
lima.randomNumberOfCustomers();
lima.randomSalesData();
lima.renderSalesDataAsTableRow();

renderTableFooter();
