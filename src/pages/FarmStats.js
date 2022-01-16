import React from 'react';
import { useFetch } from '../hooks/fetch';
import { useLocation, Link } from 'react-router-dom';

import Loading from '../components/Loading';
import Table from '../components/FarmDataTable';

const FarmStats = () => {
    const { pathname: url } = useLocation();

    const { data, loading } = useFetch(url);
    const farmLocations = ['Metsola', 'Viikki', 'Tampere', 'Eteläesplanadi'];

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='center'>
            <div className='flex'>
                <div className='farm-info'>
                    <h1>Farm Id: {data.measurements[0].farm_id}</h1>
                    <p>Farm Name: {data.measurements[0].location}</p>
                    <p>Farm Location: {farmLocations[Number(data.measurements[0].farm_id) - 1]}</p>
                    <div className='btn-container'>
                        <Link to='/' className='btn'>
                            Back home
                        </Link>
                    </div>
                </div>
                <Table data={data.measurements} tableType='measurements' />
            </div>
        </div>
    );
};

export default FarmStats;
