import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {    

    render()
    {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">ChessMe</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="nav-item nav-link" to="/game-history">Game History</Link>
                <Link className="nav-item nav-link" to="/create-game">Create Game</Link>
                <Link className="nav-item nav-link" to="/configuration">Configuration</Link>
                <Link className="nav-item nav-link" to="/login" onClick={this.props.handleClick}>{this.props.loggedIn ? "Logout" : "Login"}</Link>
                <Link className="nav-item nav-link" to="/About">About</Link>
            </div>
        </nav>
        )
    }   
}



export default Header;