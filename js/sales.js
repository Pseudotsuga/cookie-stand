'use strict';
var hoursOpenTitle = ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:'];

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
StoreLocation.prototype.renderSalesData = function(){
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
};

var seattle = new StoreLocation('Seattle', 23, 65, 6.3, 14, [], 0);
seattle.randomNumberOfCustomers();
seattle.randomSalesData();
seattle.renderSalesData();

var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2, 14, [], 0);
tokyo.randomNumberOfCustomers();
tokyo.randomSalesData();
tokyo.renderSalesData();

var dubai = new StoreLocation('Dubai', 11, 38, 3.7, 14, [], 0);
dubai.randomNumberOfCustomers();
dubai.randomSalesData();
dubai.renderSalesData();

var paris = new StoreLocation('Paris', 20, 38, 2.3, 14, [], 0);
paris.randomNumberOfCustomers();
paris.randomSalesData();
paris.renderSalesData();

var lima = new StoreLocation('Lima', 2, 16, 4.6, 14, [], 0);
lima.randomNumberOfCustomers();
lima.randomSalesData();
lima.renderSalesData();

