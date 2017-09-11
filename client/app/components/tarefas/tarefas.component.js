import template from './tarefas.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './tarefas.controller';
import './tarefas.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let tarefasComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default tarefasComponent;
