'use strict';

/**
 * @ngdoc service
 * @name notetakeruiApp.notesService
 * @description
 * # NotesService
 * Service in the notetakeruiApp.
 */
angular.module('notetakeruiApp').service('notesService', ['$http', function ($http) {

  var deleteNote = function (id) {
       return $http.delete('/api/notes/' + id).success(function (data) {
	   });
  }; 

  var getAllNotes = function () {
       return $http.get('/api/notes/').success(function (data) {
       });
  };


  var addNewNote = function (note) {
       return $http.post('/api/notes/add', note, {}).success(function (data, status) {
       });
  };


  return {
    getAllNotes: getAllNotes,
    deleteNote: deleteNote,
    addNewNote: addNewNote
  };

}]);
