import React from 'react';
import Barchart from '../Recharts/Barchart';
import Linechart from '../Recharts/Linechart';
import Piechart from '../Recharts/Piechart';
import RadialBarchart from '../Recharts/RadialBarchart';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='bar-line-chart'>
            <Barchart />
            <Linechart />
            <RadialBarchart />
            <Piechart />
        </div>

    );
};

export default DashBoard;