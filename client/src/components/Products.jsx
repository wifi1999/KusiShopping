import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from 'axios';

const Container = styled.div`
    margin-top: 180px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Products({ cat, filters, sort }) {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async() => {
            try{
                const res = await axios.get(cat ? `http://localhost:8080/api/product?category=${cat}` : "http://localhost:8080/api/product")
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(products.filter(item => Object.entries(filters).every(([key, value]) => 
            item[key].includes(value)
        )))
    }, [products, cat, filters])

    useEffect(() => {
        if(sort === "newest"){
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }else if(sort === "asc"){
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price)) 
        }else{
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <Container>
            { cat 
                ? filteredProducts.map((item, index) => (<Product item={item} key={item.id || index}/>)) 
                : products.slice(0, 8).map((item, index) => (<Product item={item} key={item.id || index}/>))
            }
        </Container>
    )
}
