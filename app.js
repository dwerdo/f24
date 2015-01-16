angular.module('f24', [])
.controller('GalleryCtrl', function($scope) {
    $scope.numOfRows = populateNumbers(3);
    $scope.numOfCols = populateNumbers(4);
    $scope.columns = "col-md-3";

    $scope.getColumns = function() {
        if ($scope.columns === "col-md-3") {
            $scope.numOfCols = populateNumbers(3);
            $scope.numOfRows = populateNumbers(4);
            return "col-md-4";
        } else {
            $scope.numOfCols = populateNumbers(4);
            $scope.numOfRows = populateNumbers(3);
            return "col-md-3";
        }
    }

    function populateNumbers(x) {
        var numbers = [];
        for(i=0; i < x; i++) {
            numbers[i] = i + 1;
        }
        return numbers;
    }


});