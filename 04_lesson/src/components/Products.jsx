import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const initialProducts = [
    {
        name: 'eggs',
        cost: 2.99
    },
    {
        name: 'beets',
        cost: 3.22
    }
]


export const Products = () => {
    const [products] = useState(initialProducts);

    const filterBy = useSelector(
        (state) => state.productFilter.filter
    );
    return (
        <div style={{background: 'orange'}}>
            {products
            .filter((product) => 
                filterBy ? product.name.includes(filterBy): true
            )
            .map((product) => (
                <div key={product.name}>
                {product.name} @ {product.cost}

                </div>
            ))}
    </div>
    )
}