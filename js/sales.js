'use strict';

var seattle = {
  storename: 'seattle',
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
  renderSalesArrayAsUnorderedList: function(){
    var mainElement = document.getElementById('test');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.storename} Sales Data:`;
    mainElement.appendChild(ulElement);
    for (var i = 0; i < this.hourlySalesArray.length; i++){
      var liElement = document.createElement('li');
      liElement.setAttribute('id', `li${i}`);
      ulElement.appendChild(liElement);
      console.log(liElement);
    }
  },
};

seattle.generateRandomSalesData();
seattle.renderSalesArrayAsUnorderedList();

var tokyo = {
  storename: 'tokyo',
  minimumCustomersPerHour: 3,
  maximumCustomersPerHour: 24,
  avgCookieSalesPerCustomer: 1.2,
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

var dubai = {
  storename: 'dubai',
  minimumCustomersPerHour: 11,
  maximumCustomersPerHour: 38,
  avgCookieSalesPerCustomer: 3.7,
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

var paris = {
  storename: 'paris',
  minimumCustomersPerHour: 20,
  maximumCustomersPerHour: 38,
  avgCookieSalesPerCustomer: 2.3,
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

var lima = {
  storename: 'lima',
  minimumCustomersPerHour: 2,
  maximumCustomersPerHour: 16,
  avgCookieSalesPerCustomer: 4.6,
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


