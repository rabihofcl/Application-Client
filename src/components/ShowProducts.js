import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/product/')
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div>
            <h1>All Products</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                products.map((product, index) => (
                                    <div className="col-md-2" key={index}>
                                        <div className="card">
                                            <img src={product.image} className="card-img-top" alt={product.name}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <h6 className="card-title">{product.category}</h6>
                                                <p className="card-text">{product.description}</p>
                                                <Link to="#" className="btn btn-primary">Product Detail</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShowProducts;