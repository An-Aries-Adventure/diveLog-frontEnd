import React, { Component } from "react"
import '../app.css'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import GetDives from './GetDives'


class DiveCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
        total:  [],
        loading: true,
        }  
    };
    
    componentDidMount(){
     this.getData();
    }
   

      
    getData = async function(){
        var res = await GetDives();
            this.setState({
                total: res.data,
                loading: false
            })
    console.log('total from card', res.data)
    };
    

    diverLevel(){
        if(this.state.total[this.state.total.length -1].diveNumber < 50){
          return <h3>Dive Level: Sardine</h3>
        }
        else if(this.state.total[this.state.total.length -1].diveNumber >= 50 < 100){
          return <h3>Dive Level: Starfish</h3>
        }
        else if(this.state.total[this.state.total.length -1].diveNumber >= 100 < 150){
          return <h3>Dive Level: Trumpet Fish</h3>
        }
        else if(this.state.total[this.state.total.length -1].diveNumber >= 150 < 200){
          return <h3>Dive Level: Stingray</h3>
        }  
    }



    render() {
        return(
        (this.state.loading) ? <div>Getting Data</div> :
        
            
            <Container>
                <div>
                    {this.diverLevel()}
                </div>
                <div>
                    <h3>Total Dives to Date: {this.state.total[this.state.total.length -1].diveNumber}</h3>
                </div>
                <div>
                    <h3>Total Minutes Underwater: {this.state.total[this.state.total.length -1].totalBottomTime}</h3>
                </div>
            </Container>
          
        )
        
    };
        
  
};


export default DiveCard