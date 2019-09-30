'use strict';

var seattle = {
  storename: 'Seattle',
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
      liElement.textContent = `${this.hourlySalesArray[i]}`;
      ulElement.appendChild(liElement);
    }
  },
};

console.log(seattle.hourlySalesArray);
seattle.generateRandomSalesData();
seattle.renderSalesArrayAsUnorderedList();

var tokyo = {
  storename: 'Tokyo',
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
  renderSalesArrayAsUnorderedList: function(){
    var mainElement = document.getElementById('test');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.storename} Sales Data:`;
    mainElement.appendChild(ulElement);
    for (var i = 0; i < this.hourlySalesArray.length; i++){
      var liElement = document.createElement('li');
      liElement.setAttribute('id', `li${i}`);
      liElement.textContent = `${this.hourlySalesArray[i]}`;
      ulElement.appendChild(liElement);
    }
  },
};
tokyo.generateRandomSalesData();
tokyo.renderSalesArrayAsUnorderedList();

var dubai = {
  storename: 'Dubai',
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
  renderSalesArrayAsUnorderedList: function(){
    var mainElement = document.getElementById('test');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.storename} Sales Data:`;
    mainElement.appendChild(ulElement);
    for (var i = 0; i < this.hourlySalesArray.length; i++){
      var liElement = document.createElement('li');
      liElement.setAttribute('id', `li${i}`);
      liElement.textContent = `${this.hourlySalesArray[i]}`;
      ulElement.appendChild(liElement);
    }
  },
};
dubai.generateRandomSalesData();
dubai.renderSalesArrayAsUnorderedList();

var paris = {
  storename: 'Paris',
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
  renderSalesArrayAsUnorderedList: function(){
    var mainElement = document.getElementById('test');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.storename} Sales Data:`;
    mainElement.appendChild(ulElement);
    for (var i = 0; i < this.hourlySalesArray.length; i++){
      var liElement = document.createElement('li');
      liElement.setAttribute('id', `li${i}`);
      liElement.textContent = `${this.hourlySalesArray[i]}`;
      ulElement.appendChild(liElement);
    }
  },
};
paris.generateRandomSalesData();
paris.renderSalesArrayAsUnorderedList();

var lima = {
  storename: 'Lima',
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
  renderSalesArrayAsUnorderedList: function(){
    var mainElement = document.getElementById('test');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.storename} Sales Data:`;
    mainElement.appendChild(ulElement);
    for (var i = 0; i < this.hourlySalesArray.length; i++){
      var liElement = document.createElement('li');
      liElement.setAttribute('id', `li${i}`);
      liElement.textContent = `${this.hourlySalesArray[i]}`;
      ulElement.appendChild(liElement);
    }
  },
};
lima.generateRandomSalesData();
lima.renderSalesArrayAsUnorderedList();

