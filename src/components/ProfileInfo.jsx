import React from 'react';
import "../styles/components/ProfileInfo.css"

class ProfileInfo extends React.Component{
    render(){
        return(
            <div className="profileContainer">
                <div className="profileBgImg" src="" alt="" />
                <img className="profileImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt=""/>
                <div className="profileData">
                    <h3>Facundo Gimenez </h3>
                    <span>Software </span>
                </div>
                <h5>+</h5>
            </div>
        )
    }
}

export default ProfileInfo