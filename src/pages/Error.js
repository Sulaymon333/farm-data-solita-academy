import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='center'>
            <h1>Oops! it's a Dead End</h1>
            <Link to='/' className='btn btn-primary'>
                back home
            </Link>
        </div>
    );
};
export default Error;
