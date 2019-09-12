import React, { Component } from 'react'
import './messagebox.css'

class Messagelist extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <ul className='list-group'>
                                    {
                                        this.props.messages.map((message,index)=>(
                                         <li key={index} className='list-group-item'>
                                         {message.username}:{message.content}
                                         <button className='btn btn-sm btn-danger' onClick={()=>this.props.removeMessage(index)}>delete</button>
                                         <span className='offset-2'>{message.createAt.toLocaleString()}</span>
                                        
                                         </li>
                                        ))
                                    }
           </ul>
        )
    }
}

export default Messagelist
