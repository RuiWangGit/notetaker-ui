'use strict';

angular.module('notetakeruiApp')
  .controller('NavCtrl',
    ['$scope', '$location', function ($scope, $location) {

        $scope.gotoList = function () {
            $location.path('/list');
        };

        $scope.gotoNew = function () {
            $location.path('/new');
        };
    }]);

/**
 * @ngdoc function
 * @name notetakeruiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notetakeruiApp
 */
angular.module('notetakeruiApp')
  .controller('MainCtrl', ['$scope', '$http', '$location', '$filter', function ($scope, $http, $location, $filter) {
        $scope.sortField = undefined;
        $scope.reverse = false;

        $scope.sort = function (fieldName) {
            if ($scope.sortField === fieldName) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.sortField = fieldName;
                $scope.reverse = false;
            }
        };

        $scope.isSortUp = function (fieldName) {
            return $scope.sortField === fieldName && !$scope.reverse;
        };
        $scope.isSortDown = function (fieldName) {
            return $scope.sortField === fieldName && $scope.reverse;
        };

        $scope.setSelectedRowId = function (rowId) {
            $scope.selectedRowId = rowId;
        };

        $scope.gotoEdit = function () {

        };

        $scope.deleteNote = function () {
            $http.delete('/api/notes/' + $scope.notes[$scope.selectedRowId].id).success(function (data) {
                $scope.getAllNotes();
            }).error(function (data, status) {
                    $scope.errors = data.errors;
                });
        };

        $scope.cancelNewNoteForm = function () {
            $scope.clearNewNoteFields();
            $location.path("list");
        };

        $scope.clearNewNoteFields = function () {
            $scope.message = '';
            $scope.createdOnDate = '';
            $scope.errors = null;
        };


        $scope.addNewNote = function () {
        	var niceDate = $filter('date')($scope.createdOnDate, 'MM/dd/yyyy');
        	//alert(niceDate);
            var reqData = {"message": $scope.message, "createdOnDate": niceDate};
            $http.post('/api/notes/add', reqData, {}).success(function (data, status) {
                if (status == 200) {
                    $scope.clearNewNoteFields();
                    $location.path("list");
                }
            }).error(function (data, status) {
                    $scope.errors = data.errors;
                });
        };


        $scope.getAllNotes = function () {
            $http.get('/api/notes/').success(function (data) {
                $scope.notes = data;
            }).error(function (data, status) {
            	alert(status);
                });
        };
        $scope.getAllNotes();    
  }]);
