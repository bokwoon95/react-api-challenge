import React from 'react';

class Card extends Component {
    state = {
        name:"",
        handle:"",
        country:"",
        followers:0,
        following:0,
        repos:0,
        dp:null
    }

    render() {
        return(
            <div>
                <h5 className="name">{this.state.name}</h5>
                <p className="handle">@{this.state.handle}</p>
                <p className="location">{this.state.location}</p>
                <p className="follow">Followers: {this.state.followers}, Following: {this.state.following}, Repos: {this.state.repos},</p>
            </div>
        )
    }
}

export default Card