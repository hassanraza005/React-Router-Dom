import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Products = ({}) => {
  const [isdata, Setdata] = useState([]);

  async function getdata() {
    try {
      const data = await fetch('https://fakestoreapi.com/products');
      const response = await data.json();
      Setdata(response);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdata();
  }, [])
  return (
    <>
      <Navbar />

      <div className='d-flex flex-row justify-content-center flex-wrap gap-2 align-items-center'>
        {
          isdata ? (isdata.map((item, index) => (
            <div className='' key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <Link to={`/Product/${item.id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          ))) : (<div><h1>Loading ....</h1></div>)

        }
      </div>
    </>
        )
}

        export default Products