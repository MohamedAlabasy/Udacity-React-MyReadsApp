import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi";

import { getAll } from '../../utils/BooksAPI'
import Book from '../../components/Book'

export default function Home() {
    const [booksData, setBooksData] = useState([]);
    const [shelfBook, setShelfBook] = useState([]);
    const [isAllBook, setIsAllBook] = useState('true');

    const [searchColor, setSearchColor] = useState('black');

    useEffect(() => {
        const getAllBooksData = async () => {
            const booksAPIData = await getAll()
            setBooksData(booksAPIData)
        }
        getAllBooksData()
    }, [])


    const showShelfBook = (shelf) => {
        setIsAllBook(false)
        const shelfData = booksData.filter((bookData) => {
            return bookData.shelf === shelf
        })
        setShelfBook(shelfData)
    }

    return (
        <>
            <div className="container-fluid mt-5 col-9 text-center">

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={() => { setIsAllBook(true) }} className="btn btn-outline-secondary">All</button>
                    <button type="button" onClick={() => { showShelfBook('wantToRead') }} className="btn btn-outline-danger">Want to Read</button>
                    <button type="button" onClick={() => { showShelfBook('currentlyReading') }} className="btn btn-outline-success">Currently Reading</button>
                    <button type="button" onClick={() => { showShelfBook('read') }} className="btn btn-outline-primary">Read</button>
                    <button type="button"
                        onMouseEnter={() => setSearchColor('white')}
                        className="btn btn-outline-dark books"
                        onMouseLeave={() => setSearchColor('black')}>
                        <Link to="/search" title="search" onClick={() => { }}>
                            <BiSearchAlt style={{ width: '30px', height: '30px', color: searchColor }} />
                        </Link>
                    </button >
                </div>

                <div className="row d-flex mt-3 justify-content-center text-center">
                    {(isAllBook) ? booksData.map((bookData) => {
                        return <Book key={bookData.id} bookData={bookData} />
                    }) :
                        shelfBook.map((bookData) => {
                            return <Book key={bookData.id} bookData={bookData} />
                        })
                    }
                </div>
            </div >
        </>
    )
}
