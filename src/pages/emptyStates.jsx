import { Link } from 'react-router-dom'
import empty from '../assets/images/empty.png'
import { FaHome } from "react-icons/fa";
export default function NotFound() {
    return (
        <div className='container text-center align-items-center pb-2'>
            <div >
                <img src={empty} alt="there is no data to show" />
            </div>
            <Link to={"/"} className="btn btn-dark ms-3 " style={{ width: '150px' }}>
                <FaHome style={{ width: '20px', height: '20px', color: 'white' }} />
            </Link>
        </div>

    )
}
