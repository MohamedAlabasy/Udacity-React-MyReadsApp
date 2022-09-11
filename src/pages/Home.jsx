import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi";

import { getAll } from '../utils/BooksAPI'
import Book from '../components/Book'

export default function Home() {
    const [booksData, setBooksData] = useState([]);
    const [searchColor, setSearchColor] = useState('black');

    useEffect(() => {
        const getAllBooksData = async () => {
            const booksAPIData = await getAll()
            setBooksData(booksAPIData)
        }
        getAllBooksData()
    }, [])


    return (
        <>
            <div className="container-fluid mt-5 col-9 text-center">

                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-danger">Want to Read</button>
                    <button type="button" className="btn btn-outline-success">Currently Reading</button>
                    <button type="button" className="btn btn-outline-primary">Read</button>
                    <button type="button"
                        onMouseEnter={() => setSearchColor('white')}
                        className="btn btn-outline-dark books"
                        onMouseLeave={() => setSearchColor('black')}>
                        <Link to="#" title="search" onClick={() => { }}>
                            <BiSearchAlt style={{ width: '30px', height: '30px', color: searchColor }} />
                        </Link>
                    </button >
                </div>

                <div className="row d-flex mt-3 justify-content-center text-center">
                    {booksData.map((bookData) => {
                        return <Book key={bookData.id} bookData={bookData} />
                    })}
                </div>
            </div >
        </>
    )
}
