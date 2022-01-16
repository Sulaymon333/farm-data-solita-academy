import MUIDataTable from 'mui-datatables';
import React from 'react';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

const Table = ({ data, tableType }) => {
    let columns = [];
    if (tableType === 'farms') {
        columns = [
            { label: 'Farm Id', name: 'farm_id', options: { filterOptions: { fullWidth: true } } },
            { label: 'Name', name: 'name' },
            { label: 'Location', name: 'location' },
            { label: 'View', name: 'view' },
        ];
    } else if (tableType === 'measurements') {
        columns = [
            { label: 'Sensor Type', name: 'sensor_type', options: { filterOptions: { fullWidth: true } } },
            { label: 'Value', name: 'value' },
            { label: 'Date Updated', name: 'datetime' },
        ];
    }

    const options = {
        print: false,
        rowsPerPageOptions: [5, 10, 25, 50, 75, 100],
        filterType: 'dropdown',
        responsive: 'vertical',
        selectableRows: 'none',
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <FormControl></FormControl>
            <MUIDataTable title={'Farm Data - Solita Academy'} data={data} columns={columns} options={options} />
        </ThemeProvider>
    );
};

export default Table;
