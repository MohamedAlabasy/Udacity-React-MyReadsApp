import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import Book from '../components/Book'
import { search } from '../utils/BooksAPI'
import { BiSearchAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";


export default function Search() {
    const [booksData, setBooksData] = useState([]);
    const [searchInput, setSearchInput] = useState('');



    const handelSearch = (e) => {
        setSearchInput(e.target.value)
    }

    const searchResult = async (e) => {
        const result = await search(searchInput, 9)
        setBooksData(result)
    }


    return (
        <>
            <div className="container-fluid mt-5 col-9 text-center">
                <div className="btn-group w-92" role="group" aria-label="Basic example">
                    <div className="input-group" >
                        <div className="form-outline" style={{ width: '760px' }} >
                            <input onChange={(e) => handelSearch(e)} type="search" className="form-control" placeholder='Search by title, author, or ISBN' />
                        </div>
                        <button className="btn btn-dark" onClick={(e) => { searchResult(e) }}>
                            <BiSearchAlt style={{ width: '20px', height: '20px', color: 'white' }} />
                        </button>
                    </div>

                </div>

                <Link to={"/"} className="btn btn-dark ms-3 " style={{ width: '150px' }}>
                    <FaHome style={{ width: '20px', height: '20px', color: 'white' }} />
                </Link>

                <div className="row d-flex mt-3 justify-content-center text-center">
                    {booksData.map((bookData) => {
                        return <Book key={bookData.id} bookData={bookData} />
                    })
                    }
                </div>
            </div >
        </>
    )
}
