import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import Book from '../components/Book'
import { search } from '../utils/BooksAPI'
import { BiSearchAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import empty from '../assets/images/empty.png'

export default function Search() {
    const [booksData, setBooksData] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const handelSearch = (e) => {
        setSearchInput(e.target.value)
    }

    const searchResult = async () => {
        setShowLoader(true)
        await search(searchInput, 9)
            .then((data) => {
                setBooksData(data)
                setShowLoader(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const onUpdate = (bookID, bookShelf) => {
        setBooksData(
            booksData.map((bookData) => {
                if (bookData.id === bookID) {
                    bookData.shelf = bookShelf
                }
                return bookData
            })
        )
    }

    return (
        <>
            <div className="container-fluid mt-5 col-9 text-center">
                <div className="btn-group w-92" role="group" aria-label="Basic example">
                    <div className="input-group" >
                        <div className="form-outline" style={{ width: '760px' }} >
                            <input onChange={(e) => handelSearch(e)} type="search" className="form-control" placeholder='Search by title, author, or ISBN' />
                        </div>
                        <button className="btn btn-dark" onClick={() => { searchResult() }}>
                            <BiSearchAlt style={{ width: '20px', height: '20px', color: 'white' }} />
                        </button>
                    </div>

                </div>

                <Link to={"/"} className="btn btn-dark ms-3 " style={{ width: '150px' }}>
                    <FaHome style={{ width: '20px', height: '20px', color: 'white' }} />
                </Link>


                {showLoader && <div className="mt-5 d-flex justify-content-center text-center">
                    <div className='loader text-center' />
                </div>}


                <div className="row d-flex mt-3 justify-content-center text-center">
                    {booksData.length > 0 ? booksData.map((bookData) => {
                        return <Book key={bookData.id} bookData={bookData} onUpdate={onUpdate} />
                    }) : <div className='container text-center align-items-center pb-2'>
                        {!showLoader && <div >
                            <img src={empty} alt="there is no data to show" />
                        </div>}
                    </div>
                    }
                </div>
            </div >
        </>
    )
}
