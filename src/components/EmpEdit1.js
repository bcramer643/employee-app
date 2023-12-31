import React, { useEffect, useState } from 'react';
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';

function EmpEdit1(props) {

    const[name, setName] = useState('')   //refactor the state to an object
    const[age, setAge] = useState('')
    const[id, setId] = useState('')
    // const[emp, setEmp] = useState({
    //     name: "",
    //     age: ""
    // })

    let navigate = useNavigate();
    var index = Employees.findIndex(element=>element.id == id)
    const handleClick = (e)=>{
        e.preventDefault();
        let emp = Employees[index]
        emp.name = name
        emp.age = age
        navigate('/employee-app')
    }

    useEffect(()=>{
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setId(localStorage.getItem('id'))
    },[])

    return (
        <div>
            <label>Information Edit Page</label>
            
            <form>
                <input 
                    type='text' 
                    placeholder='Enter name' 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}/><br/>
                <input 
                    type='number' 
                    placeholder='Enter Age' 
                    value={age}
                    onChange={(e)=>{setAge(e.target.value)}}/><br/>
                    <button onClick={handleClick}>Update</button>  
            </form>
        </div>
    );
}

export default EmpEdit1;
