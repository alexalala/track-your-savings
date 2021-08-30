import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';

import { Account } from '../../types';

interface populatedColTypes {
    date?: string;
    accounts?: Account[];
    total?: number;
};

interface graphProps {
    months: string[];
    values: populatedColTypes[];
}

const Graph = ({months, values}: graphProps) => {
    const [totals, setTotals] = useState<number[]>([]);

    useEffect(() => {
        let totalsArray: number[] = [];

        values.forEach((value: populatedColTypes) => {
            totalsArray.push(value.total || 0);
        });

        setTotals(totalsArray);
    }, [values])

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Monthly Totals',
                data: totals,
                fill: false,
                backgroundColor: '#56ae96',
                borderColor: '#56ae96',
            },
        ],
    };

    const options = {
        animations: {
            tension: {
            duration: 10000,
            easing: 'easeInSine',
            from: 1,
            to: 0,
            loop: true
            }
        },
    }

    return (
        <Line data={data} options={options} />
    )
};

export default Graph; 