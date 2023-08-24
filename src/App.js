import { Card } from 'react-bootstrap';
import './App.css';
import Formulario from './components/form';
import DataTable from './components/table';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <div className="App">
        <Card body className='w-50'>
          <div className='row'>
            <div className='col-12 offset-sm-1 col-sm-10'>
              <div className='text-center mt-1'>
                <h1 className='title'>Task Manager</h1>
              </div>
              <div className='mt-5'>
                <Formulario data={data} setData={setData} />
              </div>
              <div className='mt-5'>
                <DataTable data={data} setData={setData} />
              </div>
              <div className='text-center mt-5'>
                <strong>Design by:</strong> 
                <span> Steven Torres</span> y <span>Daimer Márquez</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
