'use strict';

var seattle = {
  minimumCustomersPerHour: 23,
  maximumCustomersPerHour: 65,
  avgCookieSalesPerCustomer: 6.3,
  hoursOpen: 14,
  hourlySalesArray: [],
  randomNumberOfCustomers: function(){
    return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
  },
  generateRandomSalesData: function (){
    for(var i = 0; i < this.hoursOpen; i++){
      this.hourlySalesArray.push(Math.floor(this.randomNumberOfCustomers() * this.avgCookieSalesPerCustomer));
    }
  },
};
seattle.generateRandomSalesData();
console.log(seattle.hourlySalesArray);

var tokyo = {
  minimumCustomersPerHour: 3,
  maximumCustomersPerHour: 24,
  avgCookieSalesPerCustomer: 1.2,
  hoursOpen: 14,
  hourlySalesArray: [],
  randomNumberOfCustomers: function(){
    return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
  },
};
var dubai = {
  minimumCustomersPerHour: 11,
  maximumCustomersPerHour: 38,
  avgCookieSalesPerCustomer: 3.7,
  hoursOpen: 14,
  hourlySalesArray: [],
  randomNumberOfCustomers: function(){
    return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
  },
};
var paris = {
  minimumCustomersPerHour: 20,
  maximumCustomersPerHour: 38,
  avgCookieSalesPerCustomer: 2.3,
  hoursOpen: 14,
  hourlySalesArray: [],
  randomNumberOfCustomers: function(){
    return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
  },
};
var lima = {
  minimumCustomersPerHour: 2,
  maximumCustomersPerHour: 16,
  avgCookieSalesPerCustomer: 4.6,
  hoursOpen: 14,
  hourlySalesArray: [],
  randomNumberOfCustomers: function(){
    return Math.floor((Math.random()) * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
  },
};
