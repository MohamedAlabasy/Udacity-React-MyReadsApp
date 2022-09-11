import React from 'react'
import empty from '../assets/images/empty.png'

export default function Book() {
    return (
        <div className="container-fluid mt-3" v-if="isWatchListVisible==false">
            <div className="row d-flex justify-content-around text-center ">
                <div key="book.id" style={{ width: '15rem', margin: '0.2rem' }}

                    className="card p-0 mb-3 border border-1 border-danger border-success "
                >
                    <img src={empty} style={{ maxHeight: '350px' }} className="card-img-top" alt='image2' />
                    <div className="card-footer fs-6 font-weight-bold border border-bottom-2 text-center">
                        book name
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
                        <button className="btn btn-dark" >Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
