import React from "react";



class SearchBar extends React.Component {

    state = {
        search: ""
    }


handleChange = (e) => {
    this.setState({search: e.target.value})
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateFilter(this.state.search)
    this.setState({search: ""})
}


render () {
    return <div className="searchbar">
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" name="search" value={this.state.search} />
            <input type="submit" />
        </form>
        
        
        </div>
}

}

export default SearchBar