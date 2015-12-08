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
  .controller('MainCtrl', ['notesService', '$scope', '$http', '$location', '$filter', function (notesService, $scope, $http, $location, $filter) {
        $scope.sortField = undefined;
        $scope.reverse = false;
        $scope.status = "";

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
            var id = $scope.notes[$scope.selectedRowId].id;
            notesService.deleteNote(id).success(function (data) {
                $scope.getAllNotes();
            })
            .error(function (error) {
                $scope.status = 'Unable to delete note: ' + id;
            });            
            // $http.delete('/api/notes/' + $scope.notes[$scope.selectedRowId].id).success(function (data) {
            //     $scope.getAllNotes();
            // }).error(function (data, status) {
            //         $scope.errors = data.errors;
            // });
        };

        $scope.cancelNewNoteForm = function () {
            $scope.clearNewNoteFields();
            $location.path("list");
        };

        $scope.clearNewNoteFields = function () {
            $scope.message = '';
            $scope.createdOnDate = '';
            $scope.errors = null;
            $scope.status = "";
        };


        $scope.addNewNote = function () {
        	var niceDate = $filter('date')($scope.createdOnDate, 'MM/dd/yyyy');
            var newNote = {"message": $scope.message, "createdOnDate": niceDate};
            notesService.addNewNote(newNote).success(function (data) {
                $scope.cancelNewNoteForm();
            })
            .error(function (error) {
                $scope.status = 'Unable to add new note: ' + error.message;
            });

            // $http.post('/api/notes/add', reqData, {}).success(function (data, status) {
            //     if (status === 200) {
            //         $scope.clearNewNoteFields();
            //         $location.path("list");
            //     }
            // }).error(function (data, status) {
            //         $scope.errors = data.errors;
            // });
        };


        $scope.getAllNotes = function () {
            notesService.getAllNotes().success(function (data) {
                $scope.notes = data.notes;
                $scope.quote = data.quote;
            })
            .error(function (error) {
                $scope.status = 'Unable to retrieve notes: ' + error.message;
            });
            // $http.get('/api/notes/').success(function (data) {
            //     $scope.notes = data;
            // }).error(function (data, status) {
            // 	alert(status);
            // });
        };
        $scope.getAllNotes();    
  }]);
