import React from "react";
import {} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import MaterialTable from 'material-table';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from "@material-ui/core/Button";
import Search from "../Search"
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css'


class StudentHomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(e) {
        this.setState({keywords: e.target.value});
    }
    
    
    render() {  
        return (
            <div>
                <ul className="nav_bar">
                    <li className="nav_item"><a href="">Home</a></li>
                    <Divider orientation="vertical" flexItem="true" />
                    <li className="nav_item"><a href="">Account</a></li>
                    <Divider orientation="vertical" flexItem />
                    <li className="nav_item"><a href="">Profile</a></li>
                    <Divider orientation="vertical" flexItem />
                    <li className="nav_item"><a href="">Application Status</a></li>
                </ul>
                
                <Carousel infiniteLoop={true}
                          autoPlay swipeable={false}
                          showThumbs={false}
                          showStatus={false}
                          interval={3500}>
                    <div className="container">
                        <img src={require('./static/ai2.png')} alt={'researchData.png'}/>
                        <div class="top-left">Check out the newly released<br></br> positions in the AI lab!</div>
                    </div>
                    <div className="container">
                        <img src={require('./static/medical.jpg')} alt={'medical.jpg'}/>
                        <div class="bottom-right">News on Medical Science lab</div>
                    </div>
                    <div className="container">
                        <img src={require('./static/drawing1.jpg')} alt={'drawing2.jpg'}/>
                        <div class="bottom-left">How to get started on researching as an undergraduate student?</div>
                    </div>
                    <div className="container">
                        <img src={require('./static/biology.jpg')} alt={'biology.jpg'}/>
                        <div class="bottom-right">These research <br></br>applications are closing today.</div>
                    </div>
                </Carousel>
                <br></br>
                <div id="search-box"><Search/></div>
                
                

            </div>  
        );
      }
}

export default withRouter(StudentHomePage);