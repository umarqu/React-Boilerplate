//import React, {useState,useEffect } from 'react';
import React, {Component} from 'react';
import './customers.css';

class Customers extends Component{
  constructor(){
    super();
    this.state = {
      customers:[]
    }
  }
  componentDidMount(){
    fetch('api/customers')
      .then(res=>res.json())
      .then(customers => this.setState({customers}))
  }

  render(){
    return(
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer=>
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          )}
        </ul>
      </div>
    )
  }
}



// function Customers() {
//   const ApiCall = '/api/customers';
//
//   //state hooks
//   const [customers,setCustomers] = useState();
//
//   useEffect(()=> {
//     fetch(ApiCall)
//       .then(res=>res.json)
//       .then(customers => setCustomers({customers}))
//   });
//
//   return (
//     <div >
//       <h2>customers</h2>
//       <ul>
//      
//       </ul>
//     </div>
//   );
// }

export default Customers;
