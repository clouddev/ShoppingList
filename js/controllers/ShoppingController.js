var app = angular.module("myShoppingList", []); 

app.controller("ShoppingController", function($scope) {

    $scope.products = ["Yogurt", "Milk", "Onions"];

    $scope.addItem = function () {

        $scope.errortext = "";

        if (!$scope.addMe) {return;}        

        if ($scope.products.indexOf($scope.addMe) == -1) {

            $scope.products.push($scope.addMe);
            $scope.addMe = "";

        } else {

            $scope.errortext = "The item is already in your shopping list.";

        }

    }

    $scope.removeItem = function (x) {

        $scope.errortext = "";    

        $scope.products.splice(x, 1);

    }

});