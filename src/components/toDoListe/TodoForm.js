import React, {Component} from 'react';
import List from './List';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            term: '',
            items: []
        };
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
    }
    onChange = (event) => {
        this.setState({term: event.target.value});
    }
render(){
        return(
            <div>
            <form onSubmit={this.onSubmit}>
                <input value={this.state.term} type='text' onChange={this.onChange}/>
                <button >Ajouter</button>
                </form>
            
                <List items={this.state.items}/>
                
            </div>
        )
    }
}

export default TodoForm;