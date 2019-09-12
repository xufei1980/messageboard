import React, { Component } from 'react'
import Messagelist from './messagelist'
import Messageform from './messageform'


class Messagebox extends Component {
    constructor(props) {
        super(props)

        this.state = {
              messages:[{username:'Mike',content:'Today is the due of the paper',createAt:new Date()}] 
        }
    }
    addMessage=(message)=>{
            let messages=[...this.state.messages,message]
            this.setState({messages})
    }
    removeMessage=(index)=>{
       this.state.messages.splice(index,1)
       this.setState({
           messages:[...this.state.messages]
       })
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="card">
                            <div className="card-header">
                                <h2 className='text-center'>Message Board</h2>
                            </div>
                            <div className="card-body">
                               <Messagelist messages={this.state.messages} removeMessage={this.removeMessage}></Messagelist>
                            </div>
                            <div className="card-footer">
                                <Messageform addMessage={this.addMessage}></Messageform>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Messagebox
