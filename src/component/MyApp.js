import React, { Component } from 'react'
import { FormControl,InputLabel,Select } from '@material-ui/core';
import New from './New';

const options = {
  name : ['Pawan','Rahul','Mohit','Amrit'],
  id: ['1','2','3','4']
}
export default class MyApp extends Component {
  constructor(props){
    super();
    this.state = {
      display:'none',
      option:[],
      select:''
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    if(e.target.value !==''){
      if(e.target.value === 'name'){
        this.setState({
          display:'block',
          option:options.name,
          select:'Select Name'
        })
      }
      if(e.target.value === 'id'){
        this.setState({
          display:'block',
          option:options.id,
          select:'Select Id',
        })
      }
    }else {
      this.setState({
        display:'none',
        option:[],
        select:'',
      })
    }
  }
  render() {
    return (
      <div>
        <form>
          <FormControl className="first" >
            <InputLabel >Select Option</InputLabel>
            <Select native style={{width:300}} onChange={this.handleSelect}>
              <option value="" />
              <option value="name">Name</option>
              <option value="id">Id</option>
            </Select>
          </FormControl>
        </form>
        <br/><br/>
        <New display={this.state.display} option={this.state.option} select={this.state.select} />
      </div>
    )
  }
}
