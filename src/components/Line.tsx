// import * as React from 'react';
// import { ChartContainer } from '@mui/x-charts/ChartContainer';
// import {
//   LinePlot,
//   MarkPlot,
//   lineElementClasses,
//   markElementClasses,
// } from '@mui/x-charts/LineChart';

// const pData = [10, 65, 60, 39, 48, 38, 100];
// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];

// export default function TinyLineChart() {
//   return (
//     <ChartContainer
//       width={220}
//       height={150}
//       series={[{ type: 'line', data: pData }]}
//       xAxis={[{ scaleType: 'point', data: xLabels }]}
//       sx={{
//         [`& .${lineElementClasses.root}`]: {
//           stroke: '#8884d8',
//           strokeWidth: 3,
//         },
//         [`& .${markElementClasses.root}`]: {
//           stroke: '#8884d8',
//           scale: '0.6',
//           fill: '#fff',
//           strokeWidth: 2,
//         },
//       }}
//       disableAxisListener
//     >
//       <LinePlot />
//       <MarkPlot />
//     </ChartContainer>
//   );
// }