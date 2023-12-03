import React, { useState } from 'react';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import './emp.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function EmpDetails(props) {

    const[employees, setEmployees] = useState(Employees)
    const[searchVal, setSearchVal] = useState('')

    let navigate = useNavigate();

    const handleEdit = ((id, name, age) =>{
       // console.log(id+":"+name+":"+age)
        localStorage.setItem('id', id);
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
    })

    const handleDelete = (id => {
        var index = Employees.findIndex(element=>element.id == id)
        Employees.splice(index, 1)
        navigate('/employee-app')
    })

    function handleSearch(e){
        e.preventDefault();
        console.log(searchVal)

        if(containsNumber(searchVal)){
            setEmployees(Employees.filter(emp=>{
                return emp.id == searchVal
            }))
        }
        else{
            setEmployees(Employees.filter(emp=>{
                return emp.name.includes(searchVal)
            }))
        }
        navigate('/')
    }
    
    function containsNumber(str){
        return /\d/.test(str)
    }

    return (
        
        <div className='App'>
            <label>Employee Management Application</label>
            <br/><br/>
            <form>
                <input class='search'
                    type ='text'
                    placeholder ='Search for id or name'
                    onChange ={(e)=>{setSearchVal(e.target.value)}}/>
                <button onClick={handleSearch}>Search</button>

                <table class='center'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th colSpan={2}>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        employees.map((emp)=>{
                            return(
                                <tr key={emp.id}>
                                    <td>{emp.name}</td>
                                    <td>{emp.age}</td>
                                    <td>
                                        <Link to = '/edit'>
                                            <button onClick={()=>handleEdit(emp.id, emp.name, emp.age)}>
                                                <FaEdit /> Edit
                                            </button>
                                        </Link>
                                        &nbsp;
                                        <button onClick={()=>handleDelete(emp.id)}>
                                            <FaTrashAlt /> Delete
                                        </button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                    </tbody>
                </table>
            </form>
            <br/>
            <Link to = '/create'>
                <button>Add Employee</button>
            </Link>
        </div>
    );
}

export default EmpDetails;