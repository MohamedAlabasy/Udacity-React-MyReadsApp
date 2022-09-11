import React from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
    return (
        <>
            <div className='container text-center align-items-center pb-2'>
                <div>Search</div>
                <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
            </div>
        </>
    )
}
