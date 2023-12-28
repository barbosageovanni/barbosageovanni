import React from 'react';
import Chart from 'react-google-charts';

const data = [
  ['Trades', 'Resultado em Pontos'],
  // Adicione seus dados aqui. Exemplo:
  ['Trade 1', 1000],
  ['Trade 2', 1170],
  ['Trade 3', 660],
  ['Trade 4', 1030],
];

const options = {
  chart: {
    title: 'Desempenho dos Trades',
    subtitle: 'Resultado em pontos por trade',
  },
};

function MyChartComponent() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default MyChartComponent;
