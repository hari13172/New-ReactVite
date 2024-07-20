import * as React from 'react';
import { ChartContainer, ChartContainerProps } from '@mui/x-charts/ChartContainer';
import {
    LinePlot,
    MarkPlot,
    lineElementClasses,
    markElementClasses,
} from '@mui/x-charts/LineChart';

const pData: number[] = [10, 65, 60, 39, 48, 38, 100];
const xLabels: string[] = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const TinyLineChart: React.FC = () => {
    const handleLineClick: ChartContainerProps['onClick'] = (event, series, index) => {
        // Log the clicked data point to the console
        console.log(`Clicked on ${xLabels[index]}: ${series.data[index]}`);
    };

    return (
        <>
            <div className='border-2 w-fit mt-4 text-center'>
                <ChartContainer
                    width={220}
                    height={150}
                    series={[{ type: 'line', data: pData }]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    sx={{
                        [`& .${lineElementClasses.root}`]: {
                            stroke: '#8884d8',
                            strokeWidth: 3,
                        },
                        [`& .${markElementClasses.root}`]: {
                            stroke: '#8884d8',
                            scale: '0',
                            fill: '',
                            strokeWidth: 0,
                        },
                    }}
                    disableAxisListener
                    onClick={handleLineClick}
                >
                    <LinePlot />
                    <MarkPlot />
                </ChartContainer>
            </div>
        </>
    );
};

export default TinyLineChart;
