import React,{Component} from "react";
import { connect } from 'react-redux';
import { changeTitle } from '../actions/indexAction';
import {bindActionCreators} from "redux";

 class Header extends Component<any,any>{
  constructor(props:any){
      super(props);
  }
  con(event:any){
    this.props.changeTitle("终于做好了")
  }
  render(){
      return <div onClick={this.con.bind(this)}>{this.props.title||"不知道1"}</div>
  }
}

const mapStateToProps = (state:any, ownProps:any) => {
  return {
    title:state.main.title
  }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
    changeTitle: (name:any) => {
      dispatch(changeTitle(name))
    }
  }
}
/*const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return (
    bindActionCreators({
      changeTitle
    },dispatch)
  )
}*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)