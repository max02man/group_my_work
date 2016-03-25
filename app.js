(function(){
  var app = angular.module('dStore', []);

  app.controller('StoreController', function() {
    this.details = det;
  });
    app.controller('StoreController2', function() {
    this.details = det2;
  });
  
    app.controller("contactController", function(){

    this.review = {};

    this.addReview = function(contact){
      contact.reviews.push(this.review);
      this.review = {};
    };
  });
    app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
  
  
var det =[{
heading:'JSON HW5',
detail: "Using JQuery, BootStrap, and Angular.js to build a page.",
url: "http://max02man.github.io/hw5"},
{ heading: 'Node.js HW6',
detail: "Whats Node.js??",
url:"http://max02man.github.io/hw6"},
{heading:'Azure Website',
detail: "How to make .net by using Visual Studio 2015 and upload it to azure ",
url:"http://alaahawsawi.azurewebsites.net/"},
{heading:'MVC5',
detail: "Builded a website by using MVC5 and Publiched on Azure",
url:"http://mvchw8.azurewebsites.net/"},
{heading:'heading',
detail: "These are designs only … it’s a rough idea of what it should look like. You have full liberty to mess with this. Include any navigation you like."},
{heading:'heading',
detail: "These are designs only … it’s a rough idea of what it should look like. You have full liberty to mess with this. Include any navigation you like."}
];
var det2 =[{
heading:'Food',
detail: "These are designs only … it’s a rough idea of what it should look like. You have full liberty to mess with this. Include any navigation you like."},
{ heading: 'Drinks',
detail: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem."},
{heading:'Cars',
detail: "These are designs only … it’s a rough idea of what it should look like. You have full liberty to mess with this. Include any navigation you like."}

];
})();