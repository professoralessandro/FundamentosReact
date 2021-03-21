import { React } from 'react';
import './App.css';
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) =>
  <div className="App">
    <Card titulo="#01 - Primeiro componente">
      <Primeiro />
    </Card>

    <Card titulo="#02 - Componente com parametro">
      <ComParametro titulo="1" subTitulo="2" />
    </Card>

    <Card titulo="#03 - Componente com filho">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Ana</li>
          <li>Ana</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#04 - Repeticao">
      <Repeticao />
    </Card>

    <Card titulo="#05 - Condicional V1">
      <Condicional numero={11} />
    </Card>

    <Card titulo="#06 - Condicional V2">
      <CondicionalComIf numero={6} />
    </Card>

    <Card titulo="#07 - Condicional V1">
      <Condicional numero={10} />
    </Card>
  </div>