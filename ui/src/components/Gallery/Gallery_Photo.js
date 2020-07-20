import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Gallery_Photo extends Component {
    render() {
        return (
            // <div className={`gallery__item--${this.props.size}`}>
                <> 
                    <img className="gallery__img" 
                        src={`${this.props.file}`} 
                        alt={`${this.props.alt}`} >
                    </img>
                </>
                //  <p>{this.props.file}  {this.props.location} {this.props.size}</p>
                // <p>{this.props.id}</p> 
            //  </div>
        )
    }
};

export default Gallery_Photo;
