var pirateApp = angular.module('PirateApp', ['ngAnimate']);

PRODUCT = {
  "1": {
      "name": "StarWars Episode IV",
      "type": "DVD",
      "cost": 20,
      "discount": 0.1
  },
  "2": {
      "name": "StarWars Episode V",
      "type": "DVD",
      "cost": 20,
      "discount": 0.1
  },
  "3": {
      "name": "StarWars Episode VI",
      "type": "DVD",
      "cost": 20,
      "discount": 0.1
  },
  "4": {
      "name": "StarWars Episode IV",
      "type": "Blu-Ray",
      "cost": 25,
      "discount": 0.15
  },
  "5": {
      "name": "StarWars Episode IV",
      "type": "Blu-Ray",
      "cost": 25,
      "discount": 0.15
  },
  "6": {
      "name": "StarWars Episode IV",
      "type": "Blu-Ray",
      "cost": 25,
      "discount": 0.15
  }
};

DVD = 'DVD';
BLURAY = 'Blu-Ray';
TOTAL_DISCOUNT = 0.05;


pirateApp.controller('MainController', function($scope){
  var productJson = PRODUCT;
  $scope.products = productJson;

  $scope.quantity = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0
  };

  $scope.shouldShowCart = {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false
  };

  $scope.discount = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0
  };

  $scope.totalAmt = 0;
  $scope.totalDiscount = 0;


  function manageCart(){
    var totalCost = 0;
    var dvdTotal = 0;
    var bluRayTotal = 0;
    var dvdDiscount = false;
    var bluRayDiscount = false;
    $scope.totalDiscount = 0;

    for(var item in $scope.quantity){

      if($scope.quantity[item] > 0 && $scope.products[item].type == DVD){
        dvdTotal++;
      }

      if($scope.quantity[item] > 0 && $scope.products[item].type == BLURAY){
        bluRayTotal++;
      }

    }

    if(dvdTotal > 2){
      dvdDiscount = true;
    }

    if(bluRayTotal > 2){
      bluRayDiscount = true;
    }

    for(var ele in $scope.quantity){
      totalCost += $scope.quantity[ele] * $scope.products[ele].cost;
      if($scope.quantity[ele] > 0 && $scope.products[ele].type == DVD){
        if(dvdDiscount){
          $scope.discount[ele] = $scope.quantity[ele] * $scope.products[ele].cost * $scope.products[ele].discount;
          $scope.totalDiscount += $scope.discount[ele];
          totalCost -= $scope.discount[ele];
        }else{
          $scope.discount[ele] = 0;
        }
      }
      if($scope.quantity[ele] > 0 && $scope.products[ele].type == BLURAY){
        if(bluRayDiscount){
          $scope.discount[ele] = $scope.quantity[ele] * $scope.products[ele].cost * $scope.products[ele].discount;
          $scope.totalDiscount += $scope.discount[ele];
          totalCost -= $scope.discount[ele];
        }else{
          $scope.discount[ele] = 0;
        }
      }
    }

    $scope.totalAmt = totalCost;
  }


  $scope.addItemToCart = function(productID, quantity){
    if(($scope.quantity[productID] == 0)){
      $scope.quantity[productID] = 1;
      $scope.shouldShowCart[productID] = true;
    }else{
      console.log("Item already exists");
    }

    manageCart();
  };

  $scope.removeItemFromCart = function(productID){
    $scope.quantity[productID] = 0;
    $scope.shouldShowCart[productID] = false;
    manageCart();
  };

  $scope.updateCart = function(){
    manageCart();
  };

  $scope.resetCart = function(){
    for(var element in $scope.quantity){
      $scope.quantity[element] = 0;
      $scope.discount[element] = 0;
      $scope.shouldShowCart[element] = false;
      $scope.totalAmt = 0;
    }
  };

});
