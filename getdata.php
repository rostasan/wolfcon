<!DOCTYPE html>
<html ng-app="myInsured">
<head>
<title>Example to display JSON data in a Table using AngularJS?</title>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.0/angular.min.js"></script>
<script type="text/javascript">
var myInsured = angular.module('myInsured', []);
myInsured.controller('recordCtrl', function($scope, $http) {
$http.get("data.php").success(function (response) {
/*After Successfully fetch the data from JSON file assigning these data to $scope object variable*/
$scope.members = response.records;
});
});
</script>
<style type="text/css">
/*Style for Table*/
table, th , td {
border: 1px solid grey;
border-collapse: collapse;
padding: 4px;
font-family: arial;
}
/*Style for Table Header*/
th {
background: darkblue;
color: white;
text-align: left;
}
/*Style for Alternate Rows*/
table tr:nth-child(odd) {
background-color: #C2EBC3;
}
table tr:nth-child(even) {
background-color: #FFFFFF;
}
</style>
</head>
<body ng-controller="recordCtrl">
<table>
<tr>
<th>Name</th>
<th>Relationship</th>
</tr>
<tr ng-repeat="indivisual in members">
<td>{{ indivisual.LName }}</td>
<td>{{ indivisual.City }}</td>
</tr>
</table>
</body>
</html>