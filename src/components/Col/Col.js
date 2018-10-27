import React from 'react';

const Col = ({ size, children }) => (
    <div className={`col ${size.split(' ').map(size => `${size}`).join(' ')}`}>{children}</div>
);

export default Col;