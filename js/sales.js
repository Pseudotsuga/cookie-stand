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

// var seattle = {
//   storename: 'Seattle',
//   minimumCustomersPerHour: 23,
//   maximumCustomersPerHour: 65,
//   avgCookieSalesPerCustomer: 6.3,
//   hoursOpen: 14,
//   hoursOpenTitle: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:'],
//   hourlySalesArray: [],
//   initalTotalSales: 0,
//   randomNumberOfCustomers: function(){
//     return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
//   },
//   generateRandomSalesData: function (){
//     for(var i = 0; i < this.hoursOpen; i++){
//       this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
//     }
//     for(var j = 0; j < this.hoursOpen; j++){
//       this.initalTotalSales += this.hourlySalesArray[j];
//     }
//   },
//   renderSalesArrayAsUnorderedList: function(){
//     var mainElement = document.getElementsByTagName('main')[0];
//     var ulElement = document.createElement('ul');
//     ulElement.setAttribute('id',`${this.storename}UL`);
//     ulElement.textContent = `${this.storename} Sales Data:`;
//     mainElement.appendChild(ulElement);
//     for (var i = 0; i < this.hourlySalesArray.length; i++){
//       var liElement = document.createElement('li');
//       liElement.setAttribute('id', `li${i}`);
//       liElement.textContent = `${this.hoursOpenTitle[i]} ${this.hourlySalesArray[i]}`;
//       ulElement.appendChild(liElement);
//     }
//   },
//   renderSalesTotal: function (){
//     var parentElement = document.getElementById(`${this.storename}UL`);
//     var totalLiElement = document.createElement('li');
//     totalLiElement.textContent = `Total: ${this.initalTotalSales}`;
//     parentElement.appendChild(totalLiElement);
//   },
// };
// seattle.generateRandomSalesData();
// seattle.renderSalesArrayAsUnorderedList();
// seattle.renderSalesTotal();

// var tokyo = {
//   storename: 'Tokyo',
//   minimumCustomersPerHour: 3,
//   maximumCustomersPerHour: 24,
//   avgCookieSalesPerCustomer: 1.2,
//   hoursOpen: 14,
//   hoursOpenTitle: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','Total:'],
//   hourlySalesArray: [],
//   initalTotalSales: 0,
//   randomNumberOfCustomers: function(){
//     return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
//   },
//   generateRandomSalesData: function (){
//     for(var i = 0; i < this.hoursOpen; i++){
//       this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
//     }
//     for(var j = 0; j < this.hoursOpen; j++){
//       this.initalTotalSales += this.hourlySalesArray[j];
//     }
//   },
//   renderSalesArrayAsUnorderedList: function(){
//     var mainElement = document.getElementsByTagName('main')[0];
//     var ulElement = document.createElement('ul');
//     ulElement.setAttribute('id',`${this.storename}UL`);
//     ulElement.textContent = `${this.storename} Sales Data:`;
//     mainElement.appendChild(ulElement);
//     for (var i = 0; i < this.hourlySalesArray.length; i++){
//       var liElement = document.createElement('li');
//       liElement.setAttribute('id', `li${i}`);
//       liElement.textContent = `${this.hoursOpenTitle[i]} ${this.hourlySalesArray[i]}`;
//       ulElement.appendChild(liElement);
//     }
//   },
//   renderSalesTotal: function (){
//     var parentElement = document.getElementById(`${this.storename}UL`);
//     var totalLiElement = document.createElement('li');
//     totalLiElement.textContent = `Total: ${this.initalTotalSales}`;
//     parentElement.appendChild(totalLiElement);
//   },
// };
// tokyo.generateRandomSalesData();
// tokyo.renderSalesArrayAsUnorderedList();
// tokyo.renderSalesTotal();

// var dubai = {
//   storename: 'Dubai',
//   minimumCustomersPerHour: 11,
//   maximumCustomersPerHour: 38,
//   avgCookieSalesPerCustomer: 3.7,
//   hoursOpen: 14,
//   hoursOpenTitle: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','Total:'],
//   hourlySalesArray: [],
//   initalTotalSales: 0,
//   randomNumberOfCustomers: function(){
//     return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
//   },
//   generateRandomSalesData: function (){
//     for(var i = 0; i < this.hoursOpen; i++){
//       this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
//     }
//     for(var j = 0; j < this.hoursOpen; j++){
//       this.initalTotalSales += this.hourlySalesArray[j];
//     }
//   },
//   renderSalesArrayAsUnorderedList: function(){
//     var mainElement = document.getElementsByTagName('main')[0];
//     var ulElement = document.createElement('ul');
//     ulElement.setAttribute('id',`${this.storename}UL`);
//     ulElement.textContent = `${this.storename} Sales Data:`;
//     mainElement.appendChild(ulElement);
//     for (var i = 0; i < this.hourlySalesArray.length; i++){
//       var liElement = document.createElement('li');
//       liElement.setAttribute('id', `li${i}`);
//       liElement.textContent = `${this.hoursOpenTitle[i]} ${this.hourlySalesArray[i]}`;
//       ulElement.appendChild(liElement);
//     }
//   },
//   renderSalesTotal: function (){
//     var parentElement = document.getElementById(`${this.storename}UL`);
//     var totalLiElement = document.createElement('li');
//     totalLiElement.textContent = `Total: ${this.initalTotalSales}`;
//     parentElement.appendChild(totalLiElement);
//   },
// };
// dubai.generateRandomSalesData();
// dubai.renderSalesArrayAsUnorderedList();
// dubai.renderSalesTotal();

// var paris = {
//   storename: 'Paris',
//   minimumCustomersPerHour: 20,
//   maximumCustomersPerHour: 38,
//   avgCookieSalesPerCustomer: 2.3,
//   hoursOpen: 14,
//   hoursOpenTitle: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','Total:'],
//   hourlySalesArray: [],
//   initalTotalSales: 0,
//   randomNumberOfCustomers: function(){
//     return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
//   },
//   generateRandomSalesData: function (){
//     for(var i = 0; i < this.hoursOpen; i++){
//       this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
//     }
//     for(var j = 0; j < this.hoursOpen; j++){
//       this.initalTotalSales += this.hourlySalesArray[j];
//     }
//   },
//   renderSalesArrayAsUnorderedList: function(){
//     var mainElement = document.getElementsByTagName('main')[0];
//     var ulElement = document.createElement('ul');
//     ulElement.setAttribute('id',`${this.storename}UL`);
//     ulElement.textContent = `${this.storename} Sales Data:`;
//     mainElement.appendChild(ulElement);
//     for (var i = 0; i < this.hourlySalesArray.length; i++){
//       var liElement = document.createElement('li');
//       liElement.setAttribute('id', `li${i}`);
//       liElement.textContent = `${this.hoursOpenTitle[i]} ${this.hourlySalesArray[i]}`;
//       ulElement.appendChild(liElement);
//     }
//   },
//   renderSalesTotal: function (){
//     var parentElement = document.getElementById(`${this.storename}UL`);
//     var totalLiElement = document.createElement('li');
//     totalLiElement.textContent = `Total: ${this.initalTotalSales}`;
//     parentElement.appendChild(totalLiElement);
//   },
// };
// paris.generateRandomSalesData();
// paris.renderSalesArrayAsUnorderedList();
// paris.renderSalesTotal();

// var lima = {
//   storename: 'Lima',
//   minimumCustomersPerHour: 2,
//   maximumCustomersPerHour: 16,
//   avgCookieSalesPerCustomer: 4.6,
//   hoursOpen: 14,
//   hoursOpenTitle: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','Total:'],
//   hourlySalesArray: [],
//   initalTotalSales: 0,
//   randomNumberOfCustomers: function(){
//     return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
//   },
//   generateRandomSalesData: function (){
//     for(var i = 0; i < this.hoursOpen; i++){
//       this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
//     }
//     for(var j = 0; j < this.hoursOpen; j++){
//       this.initalTotalSales += this.hourlySalesArray[j];
//     }
//   },
//   renderSalesArrayAsUnorderedList: function(){
//     var mainElement = document.getElementsByTagName('main')[0];
//     var ulElement = document.createElement('ul');
//     ulElement.setAttribute('id',`${this.storename}UL`);
//     ulElement.textContent = `${this.storename} Sales Data:`;
//     mainElement.appendChild(ulElement);
//     for (var i = 0; i < this.hourlySalesArray.length; i++){
//       var liElement = document.createElement('li');
//       liElement.setAttribute('id', `li${i}`);
//       liElement.textContent = `${this.hoursOpenTitle[i]} ${this.hourlySalesArray[i]}`;
//       ulElement.appendChild(liElement);
//     }
//   },
//   renderSalesTotal: function (){
//     var parentElement = document.getElementById(`${this.storename}UL`);
//     var totalLiElement = document.createElement('li');
//     totalLiElement.textContent = `Total: ${this.initalTotalSales}`;
//     parentElement.appendChild(totalLiElement);
//   },
// };
// lima.generateRandomSalesData();
// lima.renderSalesArrayAsUnorderedList();
// lima.renderSalesTotal();
