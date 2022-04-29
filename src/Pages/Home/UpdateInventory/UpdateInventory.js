import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            {inventoryId}
        </div>
    );
};

export default UpdateInventory;