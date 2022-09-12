import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiShowAlt } from "react-icons/bi";

import { update } from '../utils/BooksAPI'
import { showBook, successAlert, failedAlert } from './alerts'
import defaultImage from '../assets/images/default.png'

export default function Book({ bookData, onUpdate }) {

    const [booksShelfState, setBooksShelfState] = useState(bookData.shelf);

    const updateBook = async (e) => {
        await update(bookData, e.target.value)
            .then((data) => {
                setBooksShelfState(e.target.value)
                successAlert()
            }).catch((error) => {
                failedAlert()
            })

        onUpdate(bookData.id, e.target.value)
    }
    return (
        <div style={{ width: '18rem', margin: '0.4rem' }}
            className={['card p-0 mb-3 border-1', (bookData.shelf === 'read') ? 'border border-success' : (bookData.shelf === 'wantToRead') ? 'border border-danger' : (bookData.shelf === 'currentlyReading') ? 'border border-primary' : 'border border-dark']}>
            <img src={bookData?.imageLinks?.smallThumbnail || defaultImage} style={{ maxHeight: '350px' }} className="card-img-top" alt='image2' />
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
                <div className="book-shelf-changer" style={{ backgroundColor: (bookData.shelf === 'read') ? '#28a745' : (bookData.shelf === 'wantToRead') ? '#dc3545' : (bookData.shelf === 'currentlyReading') ? '#007bff' : '#212529' }}>
                    <select id='beso' value={booksShelfState.shelf} onChange={(e) => { updateBook(e) }}>
                        <option value="disabled" disabled>
                            Move to...
                        </option>
                        <option value="none">None</option>
                        <option value="currentlyReading"> Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                </div>
                <div className='col-5'>
                    <Link to="#" onClick={() => { showBook(bookData) }} title="show"><BiShowAlt className={(bookData.shelf === 'read') ? 'text-success' : (bookData.shelf === 'wantToRead') ? 'text-danger' : (bookData.shelf === 'currentlyReading') ? 'text-primary' : 'text-dark'} style={{ width: '40px', height: '40px' }} /></Link>
                </div>
            </div>
        </div >
    )
}

