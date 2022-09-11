import React from 'react'
import empty from '../assets/images/empty.png'

import { Link } from 'react-router-dom'
import { BiShowAlt } from "react-icons/bi";
import { showBook } from './alerts'

export default function Book({ bookData }) {
    console.log(bookData);
    return (
        <div style={{ width: '18rem', margin: '0.4rem' }}
            className={['card p-0 mb-3 border-1', (bookData.shelf === 'read') ? 'border border-success' : (bookData.shelf === 'wantToRead') ? 'border border-danger' : 'border border-primary']}>
            <img src={empty} style={{ maxHeight: '350px' }} className="card-img-top" alt='image2' />
            <div className="card-footer fs-6 font-weight-bold border border-bottom-2 text-center">
                {bookData.title}
            </div>
            <div className="card-body py-0">
                <div className="book-content">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12">
                            <span>Category </span> :
                            book category
                        </div>
                        <div className="col-12">
                            <span>Author </span> :
                            book author
                        </div>
                        <div className="col-12">
                            <span>Pages </span> :
                            <span className="book.pages<50?'less':'more'">book pages</span>
                        </div>
                        <div className=" col-12">
                            <span>Price </span> :
                            book price.value
                        </div>
                        <div className="col-12">
                            <span>ISBN </span> :
                            book.ISBN
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="book-shelf-changer" style={{ backgroundColor: (bookData.shelf === 'read') ? '#28a745' : (bookData.shelf === 'wantToRead') ? '#dc3545' : '#007bff' }}>
                    <select>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                <div className='col-5'>
                    <Link to="#" onClick={() => { showBook(bookData) }} title="show"><BiShowAlt className={(bookData.shelf === 'read') ? 'text-success' : (bookData.shelf === 'wantToRead') ? 'text-danger' : 'text-primary'} style={style.iconShow} /></Link>
                </div>
            </div>
        </div >
    )
}

const style = {
    container: {
        height: '100%',
        alignItems: 'center',
    },

    iconShow: {
        width: '40px',
        height: '40px',
    }
}