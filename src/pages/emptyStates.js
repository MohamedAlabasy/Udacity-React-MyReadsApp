import { Link } from 'react-router-dom'
import empty from '../assets/images/empty.png'

export default function NotFound() {
    return (


        <div className='container text-center align-items-center pb-2'>
            <div >
                <img src={empty} alt="there is no data to show" />
            </div>
            <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
        </div>

    )
}
