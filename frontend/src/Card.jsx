import React from 'react';

class Card extends Component {
    state = {
        name:"",
        handle:"",
        location:"",
        followers:0,
        following:0,
        repos:0,
        avatar:null
    }

    componentDidMount() {
        console.log(this.props.url)
        fetch(this.props.url)
        .then(res=>res.json())
        .then(data=>this.setState({
            name:data.name,
            handle:data.login,
            location:data.location,
            followers:data.followers,
            following:data.following,
            repos:data.public_repos,
            avatar:data.avatar_url
        }))
    }

    render() {
        return(
            <div>
                <div className="card-body container-fluid">
                    <div className="row">
                        <div className="col w-25">
                            <button className="btn btn-success btn-sm" style={{borderRadius: "50%"}}>+</button>
                            <img src={this.state.avatar} className="w-100" style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="col">
                            <h5 className="name">{this.state.name}</h5>
                            <p className="handle">@{this.state.handle}</p>
                            <p className="location">{this.state.location}</p>
                            <p className="follow">Followers: {this.state.followers}, Following: {this.state.following}, Repos: {this.state.repos},</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card