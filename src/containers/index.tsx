import * as React from 'react';

import {abc as abc1} from "../actions/index";

import { bindActionCreators } from 'redux';

import {connect } from 'react-redux';

interface AppProp{
    abc:string,
    abc1:(txt:string)=>void
}

interface AppState{
    abc:string
}
class Index extends React.Component<AppProp,AppState>{
    constructor(props:any){
        super(props);
        this.state={
            abc:this.props.abc
        }
    }
    change(event:any){
        console.log(event.target.value);
        //this.props.abc1("哈哈")
        this.setState({
            abc:event.target.value
        })
    }
    updata(event:any){
        event.preventDefault();
        this.props.abc1(this.state.abc+"我是提交的数据");
    }
    render(){
        return(
           <form action="" onSubmit={this.updata.bind(this)}>
            <input type="text" onInput={this.change.bind(this)} value={this.state.abc}/>
            <button>提交</button>
           </form>
        )
    }
}
function MapstatetoProps(state:any){
    console.log(state)
    return ({
            abc:state.abc
    })
}
function MapdispathtoProps(dispath:any){
    return (bindActionCreators({abc1},dispath))
}

export default connect<any,any,any>(MapstatetoProps,MapdispathtoProps)(Index)