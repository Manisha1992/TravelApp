myApp.service('myService', function() {
    var data = [];
    return {
        getData: function () {
            return data;
        },
        setData: function (info) {
            data.push(info);
        },
    };
});

myApp.controller("bookingController", function ($scope,$http, myService) {
  $scope.details = [];
  $scope.content = [];
 $scope.curDate ={};
  $scope.errMessage = '';
    $scope.addinfo = function (info) {
        $scope.details.push();
        myService.setData($scope.details);
        var show = myService.getData();  
    };
       $scope.content = myService.getData();  
       //var endDate=$scope.content[1].rdt;   
       // console.log('end', $scope.endDate);
		$scope.location = {
		    options: [
		      'Boston',
		      'New	York',
		      'Chicago',
		      'San	Francisco'
		    ],
		    selected: 'Boston'
		  };
  
    // To validate date

      $scope.dateOptions = {
     dateDisabled: disabled,
     formatYear: 'yy',
     maxDate: new Date(2020, 5, 22),
     minDate: new Date(),
     startingDay: 1
     };
     $scope.open1 = function() {
     $scope.popup1.opened = true;
     };
     function disabled(data) {
     var date = data.date
     };
   

    $scope.mail=function(){
        $http({
            method: 'GET',
            url: 'http://localhost:4000/postEmail?email='+$scope.content[0].mail+
            '&fName='+$scope.content[0].frstName+
            '&lName='+$scope.content[0].lastName+
            '&location='+$scope.content[1].city+
            '&startdt='+$scope.content[1].ddt+
            '&returndt='+$scope.content[1].rdt+
            '&mobile='+$scope.content[0].phno
        })
    };

$scope.checkErr = function(startDate,endDate){
    console.log('start', startDate);
    $scope.errMessage = '';
    $scope.curDate = new Date();
    console.log('end', $scope.endDate);
    if(startDate > endDate){
      $scope.errMessage = 'Return Date should be greater than Departure date';
       console.log('true');
      return false;
    }
    /*if(startDate < curDate){
       $scope.errMessage = 'Start date should not be before today.';
       return false;
    }*/

  };
});