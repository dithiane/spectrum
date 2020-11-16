
import React from "react";
import TableHeaderSearch from "./tableHeaderSearch"
import TableHeaderDropdown from "./tableHeaderDropdown"

function TableHeader() {
    return (
        <div className="table_header">
            <TableHeaderSearch />
            <TableHeaderDropdown />
        </div>
    );
}



export default TableHeader;