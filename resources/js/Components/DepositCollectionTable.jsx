import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { CSVLink} from 'react-csv';

export default function DepositCollectionTable({items, action}) {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(items);

    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Name of Requestor",
            selector: row => row.requestor_name,
        },
        {
            name: "Office Address",
            selector: row => row.office_address,
            maxWidth: "100%"
        },
        {
            name: "Contact",
            selector: row => row.designated_contact_person,
       
        },
        {
            name: "Name of Agency",
            selector: row => row.name_of_agency,
            sortable: true,
            grow: 2
        },
        {
            name: "Action",
            cell: (row) => (
                <a href={route(action, row.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
            )
        },
     
    ];

    const tableCustomStyles = {
        headCells: {
          style: {
            fontSize: '15px',
            fontWeight: 'bold',
            paddingLeft: '10px',
            marginTop: "10px",
            backgroundColor: '#007bff'
          },
        },
        rows: {
            style: {
                fontSize: '15px',
                marginTop: "10px",
            },
        },
       

      }


      useEffect(()=>{
        const result= items.filter((item)=>{
         return item.requestor_name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search]);

  return (
    <React.Fragment>
        <DataTable 
        columns={columns}
        data={filter}
        striped={true}
        pagination
        selectableRows
        selectableRowsHighlight
        customStyles={tableCustomStyles}
        actions={<CSVLink  data={ items} filename="pmr"  className="mb-3 mt-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Export</CSVLink>}
        subHeader
            subHeaderComponent={<input type="text" className="form-control" placeholder="search.." value= {search} onChange={ (e) => setSearch(e.target.value)}/>}
        />
    </React.Fragment>
  )
}
