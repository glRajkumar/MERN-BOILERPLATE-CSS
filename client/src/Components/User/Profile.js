import React, { useContext, useState } from 'react'
import { AuthContext } from '../State/Auth/AuthContextProvider'
import ImageUpload from './ImageUpload'
import NewPass from './NewPass'

function Profile() {
    const { name, email, img, headers, updatePic, logout, deleteAcc } = useContext(AuthContext)
    const [ pass, setPass ] = useState(false)
    
    const updatePass = () => setPass(prev => !prev)

    return (
        <div className="profile">
            <h2> Profile Page </h2>

            { img ? 
                <img src={`/upload/${img}`} alt={name} /> :
                <div className="img-upload-form">
                    <ImageUpload headers={headers} updatePic={updatePic} />
                </div>
            }

            <h3> <strong> { name } </strong> </h3>
            <h4> <strong> { email } </strong> </h4>
                
            <p>Change your password</p>
            
            { pass ? 
                <NewPass headers={headers} updatePass={updatePass} /> : 
                <button onClick={()=> setPass(true)}>
                    Change
                </button>
            }
            
            <h5> <strong> Delete your account : </strong> </h5>  
            <button onClick={deleteAcc}>
                    Delete 
            </button>
            
            <button onClick={logout}>
                    Log Out
            </button>
        </div>
    )
}

export default Profile