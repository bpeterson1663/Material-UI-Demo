import React, {Component} from 'react';
import DisplayCard from './DisplayCard/DisplayCard';
import axios from '../../axios';

class DisplayCardContainer extends Component{
    state = {
        data: [],
        loaded: false
    }
    componentDidMount(){
        this.getJSONData();
    }
    getJSONData() {
        axios.get('1efhqo').then((response) => {
            this.setState({
                data: response.data,
                loaded: true
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    render(){
        let displayCards = [];
        if(this.state.loaded){
            displayCards = this.state.data.map((info, i) =>{
                return (
                    <DisplayCard 
                        key={i} 
                        title={info.title} 
                        image={info.image} 
                        description={info.description} />
                )
            });
        }
        
        return displayCards;
    }
}

export default DisplayCardContainer;