import React from 'react';
import "../styles/pages/Home.css"
import ProfileInfo from '../components/ProfileInfo'
class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <ProfileInfo/>
            </div>
        )
    }
}

export default Home