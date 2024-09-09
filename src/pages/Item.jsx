import React from 'react'
import { useParams } from 'react-router'
import { useProductById } from '../hooks/useProductById';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';

export const Item = () => {
    const { id } = useParams();

    const { product, loading } = useProductById(id);
    return <ItemDetailContainer product={product} />
}
