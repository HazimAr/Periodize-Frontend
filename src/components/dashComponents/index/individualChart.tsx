import { Heading } from "@chakra-ui/react";
import { Lift, Record } from "API";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import parseISO from "date-fns/parseISO";
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
	yAxisPlotLineColor: "WHITE",
	yAxisPlotLineWidth: 0.2,
	yLineWidth: 0.17,
};

export default function IndividualChart({ lift }: { lift: Lift }): JSX.Element {
	const recordsByDate = lift.records.items.sort((a: Record, b: Record) => {
		return Date.parse(b.performedDate) - Date.parse(a.performedDate);
	});

	const data = lift.records.items.map((record: Record) => {
		return [
			formatDistanceToNowStrict(parseISO(record.performedDate)),
			record.load,
		];
	});

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
			lineWidth: 1,
			lineColor: theme.axisLineColors,
			gridLineColor: theme.yAxisPlotLineColor,
			gridLineWidth: theme.yAxisPlotLineWidth,
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
				data: data,
			},
		],
	};

	return (
		<>
			<Heading as="h2" size="lg" mb={3} textAlign="left">
				Top Text
			</Heading>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</>
	);
}
