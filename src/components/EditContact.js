import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class EditContact extends Component {
  constructor(props){
    super(props)
    const {id, name, email} = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
    
  }

  update = (e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email ===""){
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""});
    
  };

  render(){
    return (
      <div className='ui main'>
        <br />
        <br />
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className='field'>
            <label>Name</label>
            <input type="text" name='name' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div className='field'>
            <label>Email</label>
            <input type="email" name='email' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
          </div>
          <button className='ui button blue'>Add</button>
          
        </form>
      </div>
    )
  }
 
}

export default EditContact;