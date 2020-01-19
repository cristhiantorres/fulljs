import React, { Component } from 'react'

export default class ContestPreview extends Component { 
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              {this.props.categoryName}
            </div>
            <div className="card-body">
              {this.props.contestName}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
