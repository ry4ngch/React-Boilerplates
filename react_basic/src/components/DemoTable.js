import React, {useState} from "react";
import Table, {TableRow} from '../utils/Salient/components/Table/Table';
import withPagination from "../utils/Salient/components/Pagination/withPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DemoTable = (props) => {
    return (
        <Table draggable={true} showColToggleUI={true} columns={["Type", "Name", "Description", "Tags", "Last Viewed", "Expiration"]}>
            {props.items.map((row, index) => (
                <TableRow key={index}>
                    <td data-field="Type"><FontAwesomeIcon icon={"file-"+row.Type}></FontAwesomeIcon></td>
                    <td data-field="Name">{row.Name} app</td>
                    <td data-field="Description">{row.Description}</td>
                    <td data-field="Tags">{row.Tags}</td>
                    <td data-field="Last Viewed">{row.LastViewed}</td>
                    <td data-field="Expiration">{row.Expiration}</td>
                </TableRow>
            ))}
        </Table>
    )
}

const PaginatedTable = withPagination(DemoTable);

export default PaginatedTable;