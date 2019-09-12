import React, { Component } from 'react'
import { format } from 'url'

class Messageform extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    handleOnSubmit=(e)=>{
        e.preventDefault();
        
          let username=this.username.value
          let content=this.content.value
          this.props.addMessage({username,content,createAt:new Date()})
    }

    render() {
        return (
          <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                  <label htmlFor="username" className="control-label">User Name</label>
                  <input type="text" className="form-control" ref={x=>this.username=x}/>
              </div>
              <div className="form-group">
                  <label htmlFor="content" className="control-label">Content</label>
                  <input type="text" className="form-control" ref={x=>this.content=x}/>
              </div>
              <div className="form-group text-right"><button className="btn btn-primary">send</button></div>
          </form>
        )
    }
}

export default Messageform
