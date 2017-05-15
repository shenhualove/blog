/**
 * Created by ex-wangxin on 2017/4/13.
 */
import React from 'react';
import {connect} from 'react-redux';
/*import {siteAppicationHandle} from '../../../actions/helpLoan/qualExam/siteAppication';*/

class selectBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    componentDidMount() {

    }
    optionClick(item,name){
        this.setState({
           show:false
        });
        this.props.callBack(item,name);
    }
    createOption(list){
        let optionList=[];
        //list=[{value:'beijing',name:'北京'},{value:'shanghai',name:'上海'},{value:'guangzhou',name:'广州'}];
        for(var i in list){
            optionList.push(
                <p key={i} onClick={this.optionClick.bind(this, list[i].value ,list[i].name)}>
                    {list[i].name}
                </p>
            )
        }
        return optionList;
    }
    //显示选中项
    showValue(value,list){
        for(let i=0;i<list.length;i++){
            if( list[i].value==value){
                return list[i].name;
            }
        }
    }
    //select 框点击事件
    selectClick(){
        let show=this.state.show;
        if(show){
            this.setState({
                show:false
            })
        }else{
            this.setState({
                show:true
            })
        }
    }
    mouseLeave(){
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div className="select-box-wap role-name" onMouseLeave={this.mouseLeave.bind(this)}>
                <div className="select-top"  onClick={this.selectClick.bind(this)}>
                    {this.showValue(this.props.value,this.props.list)}<i> </i>
                </div>
                <div className="select-option"  style={{display:this.state.show?'block':'none'}}>
                    {this.createOption(this.props.list)}
                </div>
            </div>
        )
    }
}

export default  selectBox;