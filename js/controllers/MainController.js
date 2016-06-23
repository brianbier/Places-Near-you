app.controller('MainController',['$scope','places',function($scope, places){
    $scope.mapCenter = {
        lat: 40.856279, 
        lng: -73.937328,
        zoom: 17
    }
    
    // Calls the places service success function, and once it receives the data, places it into the $scope.geodata variable, which can then be used in the view.
    places.success(function(data) {
        $scope.geodata = data;
        // The geodataToMarkers function comes from the leaflet-directive module. We included that as a module in app.js
        $scope.mapMarkers = geodataToMarkers($scope.geodata);
    });
}]);
