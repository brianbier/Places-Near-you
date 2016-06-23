app.factory('places', ['$http', function($http) {
    // Uses $http.jsonp to get data from wikipedia. Once it has received the data, it returns it. This can be called in a controller with: places.success(function(data){ ..do stuff with data here.. });
    return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=9000&gscoord=40.856279%7C-73.937328&gslimit=50&format=json&callback=JSON_CALLBACK')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
