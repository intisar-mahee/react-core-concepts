import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const nayoks = ['Alamgir', 'Bulbul', 'Salman', 'Jafor']
      const products = [
        {name:'Photoshop', price:'$99'},
        {name:'Lightroom', price:'$90'},
        {name:'epub-reader', price:'$9'}
      ]
    
     const nayokNames = nayoks.map(nayok=>nayok);
     
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p className="style">Getting Started wth REACT</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
          

          {products.map(product => <li>{product.name}</li>)}

          {products.map(product => <Product product={product}></Product>)}
          
        </ul>
      </header>
    </div>
  );
}

function Counter(){
  const[count, setCount] = useState(20);
  
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'yellow',
    height: '350px',
    width: '350px',
    float: 'left',
    color: 'black'
  }

  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>
      {name}
      </h2>
      <h3>{price}</h3>
      
      <button>Buy Now</button>
    </div>
  )
}


export default App;
