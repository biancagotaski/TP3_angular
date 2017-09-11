import angular from 'angular';
import homeModule from './home/home';
import aboutModule from './about/about';
import tarefasModule from './tarefas/tarefas';
import contactsModule from './contacts/contacts';

let componentModule = angular.module('app.components', [
  homeModule,
  aboutModule,
  contactsModule,
  tarefasModule
])

.name;

export default componentModule;
