import React from 'react';
import './index.css';
import './customStyle2.css';

class Objected2 extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      showResults : false , 
      style : "center" , 
      first:"blue" , second:"white" , third:"white"
    };
  }
  temp = 0;
  componentDidMount() {
    if( this.props.level == 1 ) {
      this.setState( { style : "top" } );
    }
    if( this.props.level == 3 ) {
      this.setState( { style : "bottom" } );
    }

  }
  
  onClick = () => {
    if ( this.state.showResults == true )
      this.setState( { showResults : false } );
    else
      this.setState( { showResults : true } );
  }
  render() {
    return (
      <React.StrictMode>

        <div className="flexMenuOffset2"> 
          <div className={ this.state.style }>
            <a href="#">{this.props.name}</a>
            <a>
              <div>
                <div><b>Hitchhicker</b></div>
                <div><b>{this.props.colorArg1}: </b>{this.props.colorArg2}</div>
                <div style={{position: "relative" , textAlign: "left"}}>{this.props.colorArg3.split("-")
                                                                          .map( (item) => 
                                                                            <div style={{ textAlign: "left" , left: "0px" , display: "block" }}>
                                                                              - {item}<br></br>
                                                                            </div> 
                                                                          )}
                </div>
                {/* <div style={{backgroundColor : "green" , position: "relative" , textAlign: "left"}}>
                  <p>
                    {this.props.colorArg3.split(" - ")
                      .map( 
                        (item) => <>- {item} <br></br></>
                      )
                    }
                  </p>
                </div> */}
              </div>
            </a>
            <button style={{color: '#fff' , backgroundColor: "green" , borderColor: 'green'}} className="dispButton" onClick={this.onClick}>Read More</button>
            <div></div>
            { this.state.showResults ?  this.props.additional.split("-")
                                        .map( (item) =>
                                          <div>
                                            - {item}
                                          </div> 
                                        ) : null }
            {/* { this.state.showResults ? <div style={{backgroundColor : "green" , position: "relative" }}>
                  <p>{this.props.additional.split(" - ").map( (item) => <>- {item} <br></br></> ) }
                  </p>
                </div> : null } */}
            
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
  
class Alternate2 extends React.Component {
  constructor(props){
    super(props);
    this.state = { showResults : 1 ,
      paramSwitch : false };
    this.onClick0 = this.onClick0.bind(this);
  }

  componentDidMount() {

    this.setState( { first : "activeButton" , second : "inactiveButton" , third : "inactiveButton" , showResults : 1 ,
                     firstBottom : "activeButtonBottom" , secondBottom : "inactiveButtonBottom" , thirdBottom : "inactiveButtonBottom" } );
  }
  
  func1() {
    
    let links1 = (<Objected2 
            name="2D Gravity" 
            id="1" 
            colorArg1="blue" 
            colorArg1="Machin Truck Muche" 
            colorArg2="Stuff"  
            colorArg3="
            Additional Long Text -
            Truck -
            Track -
            Truck" 
            level="1" 
            additional="Biduly - Bidulou - Awesome - Stuff - Code"/>);
    let links2 = (<Objected2 name="BLU 2" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="2" additional="Added Text"/>);
    let links3 = (<Objected2 name="BLU 3" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="3" additional="Added Text"/>);
  
    return ( <div><div>{links1}</div><div>{links2}</div><div>{links3}</div></div> );
  }
  
  func2() {
    
    let links1 = (<Objected2 name="BINGO 1" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="1" additional="Added Text"/>);
    let links2 = (<Objected2 name="BINGO 2" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="2" additional="Added Text"/>);
    let links3 = (<Objected2 name="BINGO 3" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="3" additional="Added Text"/>);
  
    return ( <div><div>{links1}</div><div>{links2}</div><div>{links3}</div></div> );
  }
  func3() {
    
    let links1 = (<Objected2 name="Text 1" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="1" additional="Added Text"/>);
    let links2 = (<Objected2 name="Text 2" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="2" additional="Added Text"/>);
    let links3 = (<Objected2 name="Text 3" id="1" colorArg1="blue" colorArg1="'The Hitchhicker's Guide To The Galaxie's Button"  colorArg3="Additional" level="3" additional="Added Text"/>);
    
    return ( <div><div>{links1}</div><div>{links2}</div><div>{links3}</div></div> );
  }
  
  onClick0 = param => e => {
    // param is the argument you passed to the function
    // e is the event object that returned
    let nextval = e.target.value;
    console.log(nextval);
    this.setState( { showResults : nextval } );
  };
  onClick1 = () => {
    this.setState( { first : "activeButton" , second : "inactiveButton" , third : "inactiveButton" , showResults : 1 ,
                     firstBottom : "activeButtonBottom" , secondBottom : "inactiveButtonBottom" , thirdBottom : "inactiveButtonBottom" } );
  }
  onClick2 = () => {
    this.setState( { first : "inactiveButton" , second : "activeButton" , third : "inactiveButton" , showResults : 2 ,
                     firstBottom : "inactiveButtonBottom" , secondBottom : "activeButtonBottom" , thirdBottom : "inactiveButtonBottom" } );
  }
  onClick3 = () => {
    this.setState( { first : "inactiveButton" , second : "inactiveButton" , third : "activeButton" , showResults : 3 ,
                     firstBottom : "inactiveButtonBottom" , secondBottom : "inactiveButtonBottom" , thirdBottom : "activeButtonBottom" } );
  }


  render() {
    return (
        <div style={{textAlign: "center"}}>

          <button className={this.state.first} onClick={this.onClick1} >Menu Slider 1</button>
          <button className={this.state.second} onClick={this.onClick2} >Menu Slider 2</button>
          <button className={this.state.third} onClick={this.onClick3} >Menu Slider 3</button>
          
          { this.state.showResults == 1 ? this.func1() : null }
          { this.state.showResults == 2 ? this.func2() : null }
          { this.state.showResults == 3 ? this.func3() : null }

          <button className={this.state.firstBottom}  onClick={this.onClick1} >Menu Slider 1</button>
          <button className={this.state.secondBottom} onClick={this.onClick2} >Menu Slider 2</button>
          <button className={this.state.thirdBottom} onClick={this.onClick3} >Menu Slider 3</button>

        </div>
       
    );
  }
}
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default Alternate2;
