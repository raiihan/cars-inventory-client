import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const InventoryTableBody = ({ product, handleDeleteItem }) => {
    const { _id, name, img, price, quantity, supplier, description } = product;
    return (
        <tr class="border-b">

            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {name}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img src={img} width={80} alt="" />
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {quantity}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ${price}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer">
                <FaRegTrashAlt
                    onClick={() => handleDeleteItem(_id)}
                    size={35}
                    color={'red'} />
            </td>
        </tr>
    );
};

export default InventoryTableBody;


/* 


*/