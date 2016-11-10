
var myApp = angular.module("myApp", ['ui.router','ui.bootstrap']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
		  url: "/home",
		  templateUrl: "templates/home.html",
		  controller:'homeController'
    })
  .state('home.bookform', {
		  	url: "/booking",
		    templateUrl: "templates/booking.html",
			 controller: 'bookingController'
  })
   .state('home.firstpage', {
		  	url: "/main",
		    templateUrl: "templates/firstpage.html",
			 controller: 'bookingController'
  })
 .state('home.bookform.step1', {
		  	url: "/step1",
		    templateUrl: "templates/step1.html",
			 controller: 'bookingController'
  })
   .state('home.bookform.step2', {
		  	url: "/step2",
		    templateUrl: "templates/step2.html",
			 controller: 'bookingController'
  })
   .state('home.bookform.step3', {
		  	url: "/step3",
		    templateUrl: "templates/step3.html",
			 controller: 'bookingController'
  });
  
	$urlRouterProvider.otherwise("/home");
});