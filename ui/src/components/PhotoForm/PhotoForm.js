import React, { Component } from "react";
import { graphql } from "react-apollo";
import FetchPhotos from '../../queries/Gallery/allPhotos';
import AddPhoto from '../../queries/Gallery/addPhoto';


class PhotoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { file: ''};
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {    file: this.state.file, 
                            alt: this.state.alt, 
                            location: this.state.location, 
                            size: this.state.size, 
                             },
            refetchQueries: [{ query: FetchPhotos }]
        });
        // need to send user back to photolist after added file
    }
    render() {
        return (
            <div>
                {/* <Link to="/photolist">Back</Link> */}
                <h3>Add photo</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Photo file</label>
                    <input 
                        onChange={event => this.setState({ file: event.target.value })}
                        value={this.state.file}
                    />
                        <br></br>
                        <br></br>
                    <label>Photo alt</label>
                    <input 
                        onChange={event => this.setState({ alt: event.target.value })}
                        value={this.state.alt}
                    />
                        <br></br>
                        <br></br>
                    <label>Photo location</label>
                    <input 
                        onChange={event => this.setState({ location: event.target.value })}
                        value={this.state.location}
                    />
                        <br></br>
                        <br></br>
                    <label>Photo size</label>
                    <input 
                        onChange={event => this.setState({ size: event.target.value })}
                        value={this.state.size}
                    />
                        <br></br>
                        <br></br>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}



export default graphql(AddPhoto)(PhotoCreate);