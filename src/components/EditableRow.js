import React from 'react';
import {FaSave} from 'react-icons/fa';

function EditableRow(props) {
    return (
        <tr>
            <td>
                <input 
                    type='text'
                    required='required'
                    placeholder='Enter Name'
                    name='name'
                    value={''}
                    onChange={''}
                    />

            </td>

            <td>
                <input 
                    type='number'
                    required='required'
                    placeholder='Enter Age'
                    name='age'
                    value={''}
                    onChange={''}
                    />

            </td>

            <td>
                <button type='submit'>
                    <FaSave />
                </button>

            </td>
        </tr>
    );
}

export default EditableRow;