import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./products.css"

function Products() {

    const [products, setProducts] = useState([])

    const loadProduct = async () => {
        await axios.get("http://localhost:4000/api/products").then((res) => {
            setProducts(res.data)
            console.log(res.data)

        })

    }

    useEffect(() => {

        loadProduct()
    }, [])

    return (
        <div className='products-all'>
            {
                products.map((p, i) => {

                    function displayIndividualItem() {
                        alert(p.name)

                    }
                    return (

                        <div id="myBtn" key={i} className="card" onClick={displayIndividualItem}>
                            <img src={`${p.imgurl}`} alt="Avatar" style={{ width: '100%' }} />
                            <div className="container">
                                <h4><b>{p.name}</b></h4>
                                <p>Price ${p.price}</p>
                            </div>
                        </div>
                    )


                })
            }

        </div>
    )
}

export default Products