import React, { Component } from 'react';

class PersonBox extends Component {
    render() {
        return (
            <div className="color-box">
              <img className="img-contain__Person" src={`${this.props.personPhoto}`} alt={`${this.props.name}`} />
                <div className> <br />
                    <h3 className="actor">{this.props.name}</h3>
                    <p className="playing">as {this.props.roll}</p>
                </div>
            </div>
        );
    }
};

export default PersonBox;