import { React , useState } from 'react';
import'./App.css';
import Clients from './Data';

function App(){
    const [ customers , setCustomers ] = useState([
        { name:'Wafaa' , city:'mahalla', age : "22" } ,
        { name:'ahmed' , city:'mansura', age : "23" } ,
        { name:'shahd' , city:'cairo', age : "20" } ,
        { name:'doha' , city:'giza', age : "15" } ,
        { name:'mohamed' , city:'mansura', age : "55" } ,
        { name:'zein' , city:'giza', age : "45" } ,
    ])

    return (
        <div className="section">
            {
                customers.map((customer) => (
                    <Clients key={customer.name} name={customer.name} city={customer.city} age={customer.age} status = "Active"></Clients>
                ))
            }
        </div>
    )
}

export default App;