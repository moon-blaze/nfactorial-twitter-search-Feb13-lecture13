import React from "react"
import './styles.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stringToSearch: ""
        }
    }

    onChangeStringToSearch = (e) => {
        this.setState ({
            stringToSearch: e.target.value
        },
        () => {
            this.props.handleData(this.state.stringToSearch);
        });
    };

    render () {
        return (
            <div className="p-3">
                <input placeholder='Search Twitter' onChange={this.onChangeStringToSearch} value={this.state.stringToSearch} className="search" />
            </div>
        )
    }
}

export default Search;