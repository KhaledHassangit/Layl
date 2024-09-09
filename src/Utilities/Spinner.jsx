import React from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-start" style={{ height: '100vh' }}>
            <BootstrapSpinner animation="border" variant="light" />
        </div>
    );
}

export default Spinner;
