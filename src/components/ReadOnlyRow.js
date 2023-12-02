import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function ReadOnlyRow({emp, handleEditClick, handleDeleteclick }) {
    return (
        <div>
            <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>
                    <button onClick={(e) =>handleEditClick(e, emp)}><FaEdit/></button>
                    <button onClick={(e) => handleDeleteclick(e, emp)}><FaTrashAlt/></button>
                </td>
            </tr>
        </div>
    );
}

export default ReadOnlyRow;