import React from 'react';
import ReactDOM from 'react-dom';
import '../src/home.css';
// import 'antd/dist/antd.css';
// import { Row, Col, Button, Modal } from 'antd';

export default class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      inputtext: '',
      inputnumber: '',
      Father:'',
      email:'',
      Mother:'',
      Month:'',
      Dob:'',
      file:'',
      divdisplay: 'none',
      Classdisplay: 'block',
      Editthandler: 'none'
    };
  }

  Editthandler = e => {
    console.log('handle change', e.target.value);
    this.setState({
      divdisplay: 'none',
      Classdisplay: 'block'
    });
  };
  submithandler = e => {
    console.log('handle change', e.target.value);
    this.setState({ divdisplay: 'block', Classdisplay: 'none' });
  };

  numberhandler = e => {
    this.setState({ inputnumber: e.target.value });
    console.log('age.change', e.target.value);
  };
  Namehandler = e => {
    this.setState({ inputtext: e.target.value });
    console.log('Name.change', e.target.value);
  };
  Fatherhandler = e =>{
    this.setState({Father:e.target.value});
    console.log('Father.change',e.target.value);
  };
  Motherhandler = e =>{
    this.setState({Mother:e.target.value});
    console.log('Mother.change',e.target.value);
  };
  Dobhandler = e=>{
    this.setState({Dob:e.target.value});
    console.log('Dob.change',e.target.value);
  };
  emailhandler =e =>{
    this.setState({email:e.target.value});
  console.log('email.change',e.target.value);
};
filehandler =e=>{
    this.setState({file:e.target.value}); 
console.log('file.change',e.target.value);
};
Monthhandler=e=>{
  this.setState({month:e.target.value});
  
  console.log('Month.change,e.target.value')
}

  render() {
    return (
      <div className="head">
        <div style={{ display: this.state.Classdisplay }}>
          <div>
            <p> Name :</p>
            <input
              className="inputfeild"
              type="text"
              onChange={this.Namehandler}
            />
          </div>
          <div>
            <p>age :</p>
            <input
              className="inputfeild"
              type="number"
              onChange={this.numberhandler}
            />
          </div>
          <div>
            <p>Father:</p>
            <input
              className="inputfeild"
              type="father"
              onChange={this.Fatherhandler}
            />
          </div>
          <div>
            <p>MotherName:</p>
            <input
              className="inputfeild"
              type="Mother"
              onChange={this.Motherhandler}
            />
          </div>
          <div>
            <p>email:</p>
            <input
              className="inputfeild"
              type="email"
              onChange={this.emailhandler}
            />
          </div>
          <div>
            <p>file:</p>
            <input
              className="inputfeild"
              type="file"
              onChange={this.filehandler}
            />
          </div>
          <div>
            <p>Dob:</p>
            <input
              className="inputfeild"
              type="date"
              onChange={this.Dobhandler}
            />
          </div>
          <div>
            <p>Month:</p>
            <input
              className="inputfeild"
              type="month"
              onChange={this.Monthhandler}
            />
          </div>
          

          <div>
            <button
              type="primary"
              htmlType="submit"
              onClick={this.submithandler}
            >
              Submit
            </button>
          </div>
        </div>
        <div style={{ display: this.state.divdisplay }}>
          <p>{this.state.inputtext}</p>
          <p> {this.state.inputnumber} </p>
          <p>{this.state.email}</p>
          <p>{this.state.Father}</p>
          <p>{this.state.Mother}</p>
          <p>{this.state.Dob}</p>
          <p>{this.state.file}</p>
          <p> {this.state.month}</p>
          <button type="primary" htmlType="Edit" onClick={this.Editthandler}>
            Edit
          </button>
        </div>
      </div>
    );
  }
}
