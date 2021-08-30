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
                label: 'Total',
                data: totals,
                fill: false,
                backgroundColor: '#6092ae',
                borderColor: '#6092ae',
            },
        ],
    };

    return (
        <Line data={data} />
    )
};

export default Graph; 