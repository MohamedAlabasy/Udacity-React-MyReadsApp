import React from 'react'
import { Link } from 'react-router-dom'
import { BiShowAlt } from "react-icons/bi";

import { update } from '../utils/BooksAPI'
import { showBook } from './alerts'

export default function Book({ bookData, onUpdate }) {

    const updateBook = async (e) => {
        await update(bookData, e.target.value)
        if (onUpdate) {
            onUpdate(bookData.id, e.target.value)
        }
    }
    return (
        <div style={{ width: '18rem', margin: '0.4rem' }}
            className={['card p-0 mb-3 border-1', (bookData.shelf === 'read') ? 'border border-success' : (bookData.shelf === 'wantToRead') ? 'border border-danger' : 'border border-primary']}>
            <img src={bookData.imageLinks.smallThumbnail} style={{ maxHeight: '350px' }} className="card-img-top" alt='image2' />
            <div style={{ height: '70px' }} className="card-footer fs-6 font-weight-bold border border-bottom-2 text-center">
                {bookData.title}
            </div>
            <div className="card-body py-0 ">
                <div className="book-content ">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12">
                            <span>Author </span> : {bookData.authors}
                        </div>

                        <div className="col-12">
                            <div style={{
                                display: 'block', width: 600, paddingLeft: 30
                            }}>
                            </div>
                            <span>Rate </span> : {bookData.averageRating ? <span style={{ color: (bookData.averageRating) <= 2.5 ? 'red' : 'green' }}>{bookData.averageRating}</span> : '0'}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="book-shelf-changer" style={{ backgroundColor: (bookData.shelf === 'read') ? '#28a745' : (bookData.shelf === 'wantToRead') ? '#dc3545' : '#007bff' }}>
                    <select id='beso' onChange={(e) => { updateBook(e) }}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="none">None</option>
                        <option value="currentlyReading"> Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                </div>
                <div className='col-5'>
                    <Link to="#" onClick={() => { showBook(bookData) }} title="show"><BiShowAlt className={(bookData.shelf === 'read') ? 'text-success' : (bookData.shelf === 'wantToRead') ? 'text-danger' : 'text-primary'} style={{ width: '40px', height: '40px' }} /></Link>
                </div>
            </div>
        </div >
    )
}

