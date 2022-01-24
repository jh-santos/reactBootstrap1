// obrigatorios
import React from 'react';
// base
import Menu from './components/menu/menu';
import Rodape from './components/rodape/rodape';
// modulos do projeto
import Banner from './components/banner/banner';
import Modulo1 from './components/modulo-1';
import Modulo2 from './components/modulo-2';

// function App() {
//   return (
//     <div>
//       <h1>
//         Bootstrap React Projeto 1
//       </h1>
//     </div>
//   );
// }
// // // // ou
class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>React com Bootstrap</h1>
        <Menu />
        <Banner />
        <Modulo1 />
        <Modulo2 />
        <Rodape />
      </div>
    )
  }
}
export default App;
