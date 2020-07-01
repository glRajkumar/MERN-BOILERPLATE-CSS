import React, { useContext, useState } from 'react'
import { AuthContext } from '../State/Auth/AuthContextProvider'
import { Link } from 'react-router-dom'
import ProfileImg from '../../Img/Profile.png'

const NavBar = ({auth}) =>{
    const { name, email, img, logout } = useContext(AuthContext)
    const [ open, setOpen ] = useState(false)

    const toggleOpen = () => setOpen(prev => !prev)

    const LogOut = () => {
        logout()
        toggleOpen()
    }
    
    const MiniProfile = () => (
    <div className="miniProfile">
        <ul>
            <li>
                { 
                img ? 
                <img src={`/upload/${img}`} alt="profile" /> :
                <img src={ProfileImg} alt="profile" /> 
                }
            </li>

            <li> {email} </li>
            
            <li>
                <Link to="/profile">  
                    <button onClick={toggleOpen} >
                        My Page
                    </button> 
                </Link>
            </li>
            
            <li>
                <button onClick={LogOut} >
                    Log Out
                </button>
            </li>
        </ul>
    </div>
    )

    return(
    <>    
    <nav>
        <Link className="" to="/">
            Your App Name
        </Link>
    
        <div style={{textAlign: "right"}}>
            { 
            auth ?  <button onClick={toggleOpen}> { name } </button>
            : null 
            }
            
            { open ? <MiniProfile /> : null }
        </div>
    </nav>
    </>
)
}

export default NavBar