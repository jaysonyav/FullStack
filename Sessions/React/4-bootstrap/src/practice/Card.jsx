import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <img className="card-img-top" src={this.props.user.picture.large}
           alt={this.props.user.name.first} />
          <div className="card-body">
            <h5 className="card-title">{this.props.user.name.first}{this.props.user.name.last}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-danger" onClick={()=>this.props.onDelete(this.props.user.id.value)} >Delete</button>
          </div>
        </div>

        {/* <h1>{this.props.user.name.first}</h1> */}
      </div>
    );
  }
}

export default Card;
