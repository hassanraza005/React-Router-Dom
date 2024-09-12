import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'

const Productdetail = () => {
    const { id } = useParams();
    const [isdata, Setdata] = useState({});
    const navigate = useNavigate();
    function backpage() {
        navigate("/Products")
    }
    async function getdata() {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`);
            const response = await data.json();
            Setdata(response);
            console.log(isdata)
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

            {
                isdata && (
                    <div className='d-flex justify-content-center align-items-center gap-2 mt-5'>
                        <div className='image-div'> <img src={isdata.image} height={300} alt="" /></div>
                        <div className='title-div'>  <h1>{isdata.title}</h1>
                            <p>{isdata.description}</p></div>
                        <button onClick={backpage}>Go to Products</button>
                    </div>

                )
            }
        </>
    )
}

export default Productdetail