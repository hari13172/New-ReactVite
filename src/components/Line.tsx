import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
    type: "line",
    width: 200,
    height: 100,
    series: [
        {
            name: "",
            data: [300, 300, 300, 300, 300, 300, 300],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#020617"],
        stroke: {
            lineCap: "",
            curve: "smooth",
        },
        markers: {
            size: 0,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "",
                    fontWeight: 400,
                },
            },
            // categories: [
            //     "Apr",
            //     "May",
            //     "Jun",
            //     "Jul",
            //     "Aug",
            //     "Sep",
            //     "Oct",
            //     "Nov",
            //     "Dec",
            // ],
        },


        yaxis: {
            labels: {
                show: false,
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },


        grid: {
            show: false,
            borderColor: "",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            // padding: {
            //     top: 5,
            //     right: 20,
            // },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

export default function Example() {
    return (
        <Card className='bg-transparent w-0 '>
            <CardBody className="">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}
