import React, {Component} from 'react';

class PlusMoins extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks:0,
            show:true
        };
    }
    ajoutNombre = () => {
        this.setState({clicks: this.state.clicks +1});
    }
    enlevNombre = () => {
        this.setState({clicks: this.state.clicks -1});
        
    }
    montreNbr = () => {
        this.setState({show : !this.state.show});
    }
    render(){
        return(
<div>
            <h1>Balek</h1>
            <button onClick={this.ajoutNombre}>ajout +1</button>
            <button onClick={this.enlevNombre}>eleve -1</button>
            <button onClick={this.montreNbr}> {this.state.show ? 'Hide Number' : 'Show number'}</button>
            {this.state.show ? <h2>{this.state.clicks}</h2>: ''}

</div>
        );
    }
}
export default PlusMoins;