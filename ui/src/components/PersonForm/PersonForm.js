import React, { Component } from "react";
import { graphql } from "react-apollo";
import FetchPerson from '../../queries/People/allPeople';
import AddPerson from '../../queries/People/CreatePerson';


class PhotoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { name: ''};
        this.state = { personPhoto: ''};
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {    name: this.state.name, 
                            description: this.state.description, 
                            personPhoto: this.state.personPhoto, 
                             },
            refetchQueries: [{ query: FetchPerson }]
        });
        // need to send user back to photolist after added name
    }
    render() {
        return (
            <div>
                
                <h3>Add Person</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Person's name</label>
                    <input 
                        onChange={event => this.setState({ name: event.target.value })}
                        value={this.state.name}
                    />
                        <br></br>
                        <br></br>
                    <label>Person's description</label>

                    <input 
                        onChange={event => this.setState({ description: event.target.value })}
                        value={this.state.description}
                    />
                        <br></br>
                        <br></br>

                    <label>Person's photo link</label>
                    <input 
                        onChange={event => this.setState({ personPhoto: event.target.value })}
                        value={this.state.personPhoto || ''}
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



export default graphql(AddPerson)(PhotoCreate);