import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import PersonBox from './PersonBox';
import RollStar from '../../queries/People/RollStar';

class Person extends Component {
    
    renderPerson() {
        
        return this.props.data.Roll.map( star => {
            //added condition to avoid undefined
            if(star.person[0] !==undefined){
            return(
                
                <div key={star.id}>
                    
                    <PersonBox  
                        roll={star.name}
                        name={star.person[0].name}
                        personPhoto={star.person[0].personPhoto}
                        />
                </div>
            )
        }
        return(
                
            <div key={star.id}>
                
                <PersonBox  
                    roll={star.name}
                    />
            </div>
        )
    
    });
    
    }
    
    render() {
        console.log(this.props);
        if (this.props.data.loading) { return <div>Loading...</div>; } 
        return (
            
            <div>
                <article className="section__koko center-text">
                <h2 className="section-headers">Starring</h2> 
                <br /> <br />
                    <div className="grid-3 wrap" >
                        {this.renderPerson()}
                    </div>
                </article>
            </div>
        );
    }
}

export default graphql(RollStar)(Person);