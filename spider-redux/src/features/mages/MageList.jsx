import { useSelector, useDispatch } from "react-redux";
import { selectAllMages, fetchMages } from "./magesSlice";
// import PostsExcerpt from "./PostsExcerpt";
import { useState, useEffect } from "react";

import DataTable from "react-data-table-component";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import SortIcon from "@mui/icons-material/ArrowDownward";


const MageList = () => {
    const dispatch = useDispatch()
    const mages = useSelector(selectAllMages);
    useEffect(() => {    
        if (mages === undefined || mages.length == 0) {
            dispatch(fetchMages())
        }
    }, [])
    let content = [];
    if (mages.length != 0) {
        content =mages
        console.log(content)
    }

    const columns = [
        {
          name: "Name",
          selector: "name",
          sortable: true
        },
        {
          name: "Power",
          selector: "power",
          sortable: true
        },
      ];
      
            
        const isIndeterminate = (indeterminate) => indeterminate;
        const selectableRowsComponentProps = { indeterminate: isIndeterminate };
    return (
        <div>
            {/* {content.map(mage => <div>{mage.name} </div>)}
            <div style={{ height: 400, width: '100%' }}> */}

            <Paper>
        <DataTable
          title="Mages"
          columns={columns}
          data={content}
          defaultSortField="name"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          selectableRowsComponent={Checkbox}
          selectableRowsComponentProps={selectableRowsComponentProps}
        />
      </Paper>

        </div>
    )
}
export default MageList
