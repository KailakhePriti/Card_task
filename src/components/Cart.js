import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import girl from '../images/girl.png'
import rupee from '../images/rupee.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../css/Card.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
export default function Cart() {
  let card1=1;
  let card2=2;
  let card3=3;
  let card4=4;
  const [myStyle1, setMyStyle1] = useState({
    color: 'black'
  })
  const [myStyle2, setMyStyle2] = useState({
    color: 'black'
  })
  const [myStyle3, setMyStyle3] = useState({
    color: 'black'
  })
  const [myStyle4, setMyStyle4] = useState({
    color: 'black'
  })
  const toggleChangeCard1=()=>{
    
    if(myStyle1.color=='black'){
      setMyStyle1(
        {
          color: 'red'
        }
      )
     console.log("After click:",card1);
    }
    else{
      setMyStyle1(
        {
          color: 'black'
        }
      )
      
    }
  }
  const toggleChangeCard2=()=>{
    if(myStyle2.color=='black'){
      setMyStyle2(
        {
          color: 'red'
        }
      )
      console.log("After click:",card2);
    }
    else{
      setMyStyle2(
        {
          color: 'black'
        }
      )
     
    }
  }
  const toggleChangeCard3=()=>{
    if(myStyle3.color=='black'){
      setMyStyle3(
        {
          color: 'red'
        }
      )
      console.log("After click:",card3);
    }
    else{
      setMyStyle3(
        {
          color: 'black'
        }
       
      )
     
    }
  }
  const toggleChangeCard4=()=>{
    if(myStyle4.color=='black'){
      setMyStyle4(
        {
          color: 'red'
        }
      )
      console.log("After click:",card4);
    }
    else{
      setMyStyle4(
        {
          color: 'black'
        }
      )
      
    }
  }
  
 
  return (
    <div>
      <div className='main_box' >
        <div className="box">
            <Card className="">
                <CardBody>
                <img src={girl} alt=""/>
                <CardTitle tag="h5">Card 1</CardTitle>
                
                <CardText style={{textAlign: 'justify'}}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</CardText>

                        <div className="rupees_block">
                        
                            <span className="rupee_text1">Rs. 999.00</span>
                        </div>
                <Button style={{backgroundColor: 'black ',color: 'white',border: 'none',marginTop: '20px'}}>Show More</Button>
                <FavoriteBorderIcon className="icon" style={myStyle1} onClick={toggleChangeCard1}/>
              </CardBody>
            </Card>
        </div>
        <div className="box">
            <Card className="">
                  <CardBody>
                  <img src={girl} alt=""/>
                  <CardTitle tag="h5">Card 2</CardTitle>
                  
                  <CardText style={{textAlign: 'justify'}}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</CardText>

                          <div className="rupees_block">
                          
                              <span className="rupee_text1">Rs. 999.00</span>
                          </div>
                  <Button style={{backgroundColor: 'black ',color: 'white',border: 'none',marginTop: '20px'}}>Show More</Button>
                  <FavoriteBorderIcon className="icon" style={myStyle2} onClick={toggleChangeCard2}/>
                </CardBody>
              </Card>
        </div> 
        <div className="box">
            <Card className="">
                  <CardBody>
                  <img src={girl} alt=""/>
                  <CardTitle tag="h5">Card 3</CardTitle>
                  
                  <CardText style={{textAlign: 'justify'}}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</CardText>

                  <div className="rupees_block">            
                  <span className="rupee_text1">Rs. 999.00</span>
                  </div>       
                  <Button style={{backgroundColor: 'black ',color: 'white',border: 'none',marginTop: '20px'}}>Show More</Button>
                  <FavoriteBorderIcon className="icon" style={myStyle3} onClick={toggleChangeCard3}/>
                </CardBody>
              </Card>
        </div> 
        <div className="box">
            <Card className="">
                <CardBody>
                <img src={girl} alt=""/>
                <CardTitle tag="h5">Card 4</CardTitle>
                <CardText style={{textAlign: 'justify'}}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</CardText>

                <div className="rupees_block">            
                  <span className="rupee_text1">Rs. 999.00</span>
                </div>
                <Button variant="contained" style={{backgroundColor: 'black ',color: 'white',border: 'none',marginTop: '20px'}}>Show More</Button>
                <FavoriteBorderIcon  className="icon" style={myStyle4} onClick={toggleChangeCard4}/>
                
                </CardBody>
              </Card>
        </div> 
           
      </div>
     
    </div>
  )
}
