import React, { useState, useEffect } from 'react'
import Axios from "axios"



function FilterBook() {
    const [books, setBooks] = useState([])
    const [filter, setFilter] = useState(books)
    const [loading, setLoading] = useState(false)

    const getBooks = async () => {
        setLoading(true)
        const result = await Axios.get("http://localhost:2000/admin/getallbook")
        setBooks(result.data)
        setFilter(result.data)
        setLoading(false)
    }
    
    useEffect(() => {
        getBooks()
    }, [])

    const filterBooks = (item) => {
        const updatedList = books.filter((x) => x.category === item)
        setFilter(updatedList)
    }

    if (loading && books.length === 0) {
        return <h2>Loading ...</h2>
    }

    return (
        <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-outline-dark me-2' onClick={() => setFilter(books)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Comedy")}>Comedy</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Sastra")}>Sastra</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Romance")}>Romance</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Business")}>Business</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Puisi")}>Puisi</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Motivation")}>Motivation</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Self Healing")}>Self Healing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Kids")}>Kids</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Fiction")}>Fiction</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterBooks("Religion")}>Religion</button>
            </div>
            {filter.map((product) => {
                return (
                    <>
                    <div className="filter-books  col-md-3 mb-4">
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                            <div class="card-body">
                                <h5 class="card-title mb-0">{product.title}</h5>
                                <p class="card-text lead fw-bold">{product.publishDate}</p>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </>
    )
}

export default FilterBook
