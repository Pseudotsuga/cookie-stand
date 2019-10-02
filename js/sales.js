'use strict';

var additionalStoreDataArray = [];
var hoursOpenTitle = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
var initialNumberOfStores = 0;
var initialTotalTotal = 0;
var numberofInputs = 4;
var submitForm = document.getElementById('formID');
var storeNameNode = document.getElementById('storeNameInput');
var minimumCustomersPerHourNode = document.getElementById('minimumCustomersPerHourInput');
var maximumCustomersPerHourNode = document.getElementById('maximumCustomersPerHourInput');
var averageCookieSalesPerCustomerNode = document.getElementById('averageCookiesSalesPerCustomerInput');
var hoursOpenNode = document.getElementById('hoursOpenInput');

function additionalStoreDataArrayPush(){
  var nestedArray = [];
  nestedArray.push(storeNameNode.value, minimumCustomersPerHourNode.value, maximumCustomersPerHourNode.value, averageCookieSalesPerCustomerNode.value, hoursOpenNode.value);
  additionalStoreDataArray.push(nestedArray);
}

function renderAdditionalStoreData(event){
  event.preventDefault();
  additionalStoreDataArrayPush();
  for(var i = 0; i < additionalStoreDataArray.length; i++){
    console.log(additionalStoreDataArray[i]);
  }
}

function NewStoreLocation(storename, minimumCustomersPerHour, maximumCustomersPerHour, avgCookieSalesPerCustomer, hourlySalesArray, initalTotalSales){
  this.storename = storename;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.avgCookieSalesPerCustomer = avgCookieSalesPerCustomer;
  this.hourlySalesArray = hourlySalesArray;
  this.initalTotalSales = initalTotalSales;
}

NewStoreLocation.prototype.randomNumberOfCustomers = function(){
  return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
};

NewStoreLocation.prototype.randomSalesData = function(){
  for(var i = 0; i < hoursOpenTitle.length; i++){
    this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
    this.initalTotalSales += this.hourlySalesArray[i];
  }
};

NewStoreLocation.prototype.renderSalesDataAsList = function(){
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

NewStoreLocation.prototype.renderSalesDataAsTableRow = function(){
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

function renderTableFooter(){
  //consider changing method below to getElementById, you did give the table an id after all.
  var targetLocationNode = document.getElementById('table');
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
    var totalValues = document.getElementsByClassName('total');
    initialTotalTotal += parseInt(`${totalValues[k].textContent}`, 10);
  }
  tableDataElement.textContent = `${initialTotalTotal}`;
  tableRowElement.appendChild(tableDataElement);
}

renderTableHead();

var seattle = new NewStoreLocation('Seattle', 23, 65, 6.3, [], 0);
seattle.randomSalesData();
seattle.renderSalesDataAsTableRow();

var tokyo = new NewStoreLocation('Tokyo', 3, 24, 1.2, [], 0);
tokyo.randomSalesData();
tokyo.renderSalesDataAsTableRow();

var dubai = new NewStoreLocation('Dubai', 11, 38, 3.7, [], 0);
dubai.randomSalesData();
dubai.renderSalesDataAsTableRow();

var paris = new NewStoreLocation('Paris', 20, 38, 2.3, [], 0);
paris.randomSalesData();
paris.renderSalesDataAsTableRow();

var lima = new NewStoreLocation('Lima', 2, 16, 4.6, [], 0);
lima.randomSalesData();
lima.renderSalesDataAsTableRow();

submitForm.addEventListener('submit', renderAdditionalStoreData);

renderTableFooter();

