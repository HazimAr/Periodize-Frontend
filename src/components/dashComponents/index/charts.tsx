import { Lift } from "API";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
	lifts: Lift[];
}

const theme = {
	// Blue Theme
	bg: "#072F5F",
	lineColor: {
		linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
		stops: [
			[0, "#1261A0"],
			[0.5, "#3895D3"],
			[1, "#58CCED"],
		],
	},
	axisLabelColors: "#3895D3",
	axisLineColors: "WHITE",
	daysAgoColor: "#58CCED",
	YaxisPlotLineColor: "WHITE",
	YaxisPlotLineWidth: 0.2,
	YlineWidth: 0.17,
};

const options = {
	chart: {
		type: "spline",
		backgroundColor: theme.bg,

		margin: [20, 25, 25, 70],
		spacing: [60, 15, 60, 90],
	},
	title: { text: "" },
	subtitle: { text: "" },
	yAxis: {
		allowDecimals: false,
		lineWidth: 1,
		lineColor: theme.axisLineColors,
		gridLineColor: theme.YaxisPlotLineColor,
		gridLineWidth: theme.YaxisPlotLineWidth,
		tickWidth: 0,
		title: { text: "" },
		labels: {
			// The Tick Values
			enabled: true,
			allowOverlap: true,
			overflow: "allow",
			style: {
				color: theme.axisLabelColors,
				fontSize: 18,
			},
		},
	},
	xAxis: {
		lineWidth: 1,
		lineColor: theme.axisLineColors,
		gridLineWidth: 0,
		reversed: true,
		tickWidth: 0,
		title: { text: "" },
		labels: {
			// The Tick Values
			enabled: true,
			allowOverlap: true,
			overflow: "allow",
			style: {
				color: theme.axisLabelColors,
				fontSize: 18,
			},
		},
	},
	legend: { itemStyle: { color: "#CFD8DC" } },
	plotOptions: {
		series: {
			marker: { enabled: false },

			lineColor: theme.lineColor,
			lineWidth: 3.5,
			name: false,
		},
	},

	credits: false,

	series: [
		{
			showInLegend: false,
			data: [
				[6, 100],
				[5, 105],
				[4, 105],
				[3, 110],
				[2, 110],
				[1, 115],
				[0, 115],
			],
		},
	],
};

export default function charts(): JSX.Element {
	return <HighchartsReact highcharts={Highcharts} options={options} />;
}
