import React from 'react';
import { useFetch } from '../hooks/fetch';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Table from '../components/FarmDataTable';

const FarmInfo = () => {
    let baseUrl = `v1/farms`;
    const { data, loading } = useFetch(baseUrl);
    const modifiedData =
        data &&
        data.map((item) => {
            return {
                ...item,
                view: (
                    <Link className='btn' to={`/${baseUrl}/${item.farm_id}`}>
                        View
                    </Link>
                ),
            };
        });

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='center'>
            <Table data={modifiedData} tableType='farms' />
        </div>
    );
};

export default FarmInfo;
