import React from 'react';

export default function Search() {
    state = {
        added:[],
        searched:[]
    }

    textInput = () => {
        fetch("https://api.github.com/search/users?q="+this.state.currentSearch+"&per_page=9")
        .then(res=>res.json())
        .then(data=>this.setState({userData:data.items}))
    };

    render() {
        return(
            <div>
                
            </div>            
        );
    }
}

export default Search;
