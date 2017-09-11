import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tarefasComponent from './tarefas.component';

let tarefasModule = angular.module('tarefas', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('tarefas', {
      url: '/tarefas',
      component: 'tarefas'
    });
})

.component('tarefas', tarefasComponent)

.name;

export default tarefasModule;
