import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
	chakra,
	Flex,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import DeleteRecordModal from "../records/deleteRecordModal";
import EditRecordModal from "../records/editRecordModal";
// {
// 				load: "25",
// 				sets: "millimetres (mm)",
// 				reps: 8,
// 				rpe: 10,
// 			},
// 			{
// 				load: "100",
// 				sets: "millimetres (mm)",
// 				reps: 25.4,
// 				rpe: 1,
// 			},
// 			{
// 				load: "2300",
// 				sets: "millimetres (mm)",
// 				reps: 25.4,
// 				rpe: 5,
// 			},
export default function DataTable({ records }: any) {
	const data = useMemo(() => records, []);

	const columns = useMemo(
		() => [
			{
				Header: "Load",
				accessor: "load",
			},
			{
				Header: "Sets",
				accessor: "sets",
			},
			{
				Header: "Reps",
				accessor: "reps",
			},
			{
				Header: "RPE",
				accessor: "rpe",
			},
			{
				Header: "Date",
				accessor: "performedDate",
				// isNumeric: true,
			},
			{
				// Make an expander cell
				Header: () => null, // No header
				id: "expander", // It needs an ID
				Cell: ({ row }) => (
					<Flex>
						<EditRecordModal record={row.original} />
						<DeleteRecordModal record={row.original} />
					</Flex>
				),
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data }, useSortBy);

	return (
		<Table {...getTableProps()}>
			<Thead>
				{headerGroups.map((headerGroup) => (
					<Tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<Th
								{...column.getHeaderProps(
									column.getSortByToggleProps()
								)}
								isNumeric={column.isNumeric}
							>
								{column.render("Header")}
								<chakra.span pl="4">
									{column.isSorted ? (
										column.isSortedDesc ? (
											<TriangleDownIcon aria-label="sorted descending" />
										) : (
											<TriangleUpIcon aria-label="sorted ascending" />
										)
									) : null}
								</chakra.span>
							</Th>
						))}
					</Tr>
				))}
			</Thead>
			<Tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<Tr {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<Td
									{...cell.getCellProps()}
									isNumeric={cell.column.isNumeric}
								>
									{cell.render("Cell")}
								</Td>
							))}
						</Tr>
					);
				})}
			</Tbody>
		</Table>
	);
}
