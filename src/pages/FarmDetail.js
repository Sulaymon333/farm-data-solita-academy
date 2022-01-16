import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';

const FarmDetail = () => {
    const { pathname: url } = useLocation();

    const { data, loading } = useFetch(url);

    if (loading) {
        return (
            <div className='center'>
                <p className='loading'>Loading...</p>
            </div>
        );
    }

    return (
        <div className='center'>
            {data && (
                <div className='farm-info'>
                    <h1>Farm Id: {data.farm_id}</h1>
                    <p>Farm Name: {data.name}</p>
                    <p>Farm Location: {data.location}</p>
                    <p>File Name: {data['file-name']}</p>
                    <p>Date Updated: {data.established}</p>
                    <div className='btn-container'>
                        <Link to={`${url}/stats`} className='btn btn-primary'>
                            Farm statistics
                        </Link>
                        <Link to='/' className='btn btn-primary'>
                            back home
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FarmDetail;
