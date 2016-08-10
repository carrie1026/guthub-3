
angular.module("todoApp", [])
	.controller("ToDoCtrl", function ($scope) {

	$scope.list = [
		{
			"title":"111",
			"imgs": [
				{
					"detailId": 81,
					"id": 51
				}
			]
		},
		{
			"title":"222",
			"imgs": [
				{
					"detailId": 82,
					"id": 52,
					"imageUrl":"adfafjlujl"
				}
			]
		},
		{
			"title":"333",
			"imgs": [
				{
					"detailId": 83,
					"id": 53,
					"imageUrl":"adfafjlujl"
				}
			]
		}
	];
		
		$scope.temp = [];

		$scope.list.forEach(function(val){
			$scope.temp.push(val.imgs[0]);
		});
		/*$scope.list2 = angular.copy($scope.list).filter(function (val) {
			return val.imgs
		});*/

		$scope.temp2 = angular.copy($scope.temp).filter(function(val){
			return val.imageUrl;
		})


});

