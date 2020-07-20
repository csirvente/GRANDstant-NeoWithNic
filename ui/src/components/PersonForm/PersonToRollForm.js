import React, { Component } from "react";
import { graphql } from "react-apollo";
import FetchRolls from '../../queries/People/allRolls';
import FetchPerson from '../../queries/People/allPeople';
import AddPersonRoll from '../../queries/People/AddPersonRoll';


class PersonToRollCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { name: ''};
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {    
                            from : this.state.PersonInput,
                            to : this.state.RollInput
                             },
            refetchQueries: [{ query: FetchPerson }],
            refetchQueries: [{ query: FetchRolls }]
        });
        // need to send user back to Rolllist & PersonList after added relationship
    }
    render() {
        return (
            <div>
                {/* <Link to="/Rolllist">Back</Link> */}
                <h3>Add Person to roll relationship</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Person's name</label>
                    <input 
                        onChange={event => this.setState({ PersonInput: event.target.value })}
                        value={this.state.PersonInput  || ''}
                    />
                        <br></br>
                        <br></br>
                    <label>Roll name</label>
                    <input 
                        onChange={event => this.setState({ RollInput: event.target.value })}
                        value={this.state.RollInput  || ''}
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



export default graphql(AddPersonRoll)(PersonToRollCreate);