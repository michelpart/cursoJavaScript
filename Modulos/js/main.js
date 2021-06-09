// como foi exportada como default, posso usar qq nome.
import lista from './components/list';
import helloworld from './components/helloworld';
import { agrupaPorMaiorOuMenor, maiorDeIdade } from './modules/utils';
import pessoas from './mock/pessoas.js';

//console.log(helloworld2('Programador a bordo!'));
console.log(maiorDeIdade(10));
const { maiores, menores } = agrupaPorMaiorOuMenor(pessoas);

const html = `
  ${helloworld('Programador a bordo!')}
  <h3>Maiores</h3>
  ${lista(maiores)}
  <h3>Menores</h3>
  ${lista(menores)}`;

document.querySelector('#app').innerHTML = html;