import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import EmpDetails from './EmpDetails';
import AddEmp from './AddEmp';
import EmpEdit1 from './EmpEdit1';

function Home(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/employee-app' element={<EmpDetails/>}/>
                    <Route path  = '/create' element={<AddEmp/>}/>
                    <Route path  = '/edit' element={<EmpEdit1/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default Home;