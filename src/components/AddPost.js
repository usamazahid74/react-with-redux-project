import React, { Component } from "react";

export class AddPost extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="col-sm-5">
              <div className="form-group">
                <label>Enter Post Title</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group">
                <label>Enter Post Title</label>
                <textarea type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-2">
              <input
                type="submit"
                value="Add Post"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
