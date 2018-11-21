import React, { Component } from 'react'
import { FormControl,InputLabel,Select } from '@material-ui/core';
import Chart from './Chart';

export default class MyApp extends Component {
  constructor(props){
    super();
    this.state = {
      displayChart:"none",
      name:''
    }
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(e){
    const value = e.target.value;
    if(value !==''){
      this.setState({
        displayChart:"block",
        name:value,
      })
    }else {
      this.setState({
        displayChart:"none",
        name:value,
      })
    }
  }
  render() {
    let data;
    if(this.state.displayChart === 'block'){
      data = 
      <Chart name={this.state.name} displayChart={this.state.displayChart}/>
    }
    const {option,display,select} = this.props;
    const optionList = option.map(element => {
      return (
        <option key={element} value={element}>{element}</option>
      )
    })
    return (
      <div >
        <form>
        <FormControl className="second" style={{display:display}} >
          <InputLabel >{select}</InputLabel>
          <Select native style={{width:300}} onChange={this.handleSelect}>
            <option value=""/>
            {optionList}
          </Select>
        </FormControl>
        </form>
        <div className="Chart">
          {data}
        </div>
      </div>
    )
  }
}
