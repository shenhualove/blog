/**
 * Created by gaolei on 2017/4/12.
 *
 * 弹窗组件
 */
import React from 'react';
import {connect} from 'react-redux';
import {dialogHandle} from '../../../actions/admin/dialog';

let timeHandle;

class ReactDialog extends React.Component{
    //子弹窗确定
    childrenSuccessAction(){
        if(this.props.dialog.childrenSuccess()){
            this.childrenHide();
        }
    }

    //子弹窗取消
    childrenFailAction(){
        this.props.dialog.childrenFail();
        this.childrenHide();
    }

    //子弹窗隐藏
    childrenHide(){
        this.props._dialogHandle({
            children:false,//是否显示子弹窗，通常用于弹窗里的表单交互，在弹窗提示信息错误之类,
            childrenType:'warning',//子弹窗的类型,默认为操作警告,仅限于children=true的时候才有效果 success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
            childrenContent:"",//子弹窗的内容
            childrenFail:function(){},//子弹窗的关闭回调函数
            childrenSuccess:function(){return true},//子弹窗的成功回调函数
        });
    }

    //点击确定
    successAction(){
         clearTimeout(timeHandle);
         //回调返回TRUE，则进行关闭弹窗
         if(this.props.dialog.success()){
             this.hideAction();
         }
    }

    //点击取消
    failAction(){
        clearTimeout(timeHandle);
        this.props.dialog.fail();
        this.hideAction();
    }

    //弹窗消失
    hideAction(){
        this.props.dialog.hide();
        //弹窗消失并且初始化
        this.props._dialogHandle({
            show    :false, //默认是关闭弹窗 true打开弹窗
            children:false,//是否显示子弹窗，通常用于弹窗里的表单交互，在弹窗提示信息错误之类,
            childrenType:'warning',//子弹窗的类型,默认为操作警告,仅限于children=true的时候才有效果 success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
            childrenContent:"",//子弹窗的内容
            childrenFail:function(){},//子弹窗的关闭回调函数
            childrenSuccess:function(){return true},//子弹窗的成功回调函数
            title   :'',    //弹窗标题
            type    :'confirm', //弹窗类型  confirm / loading / tips / box
            tipsType:'success', //仅限于type=tips有效果  success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
            content :'',    //弹窗内容
            time    :0, //弹窗消失时间
            width   :"",//弹窗宽度
            height  :"",//弹窗高度
            bgRemove:false,//遮罩层点击是否移除弹窗
            success :function(){return true},//弹窗确定回调函数
            fail    :function(){},//弹窗取消回调函数
            hide    :function(){},//遮罩层消失回调函数
            successBtn:true,//是否显示确定按钮  默认为显示
            failBtn:true,//是否显示取消按钮  默认为显示
            successText:"提交",//确定按钮文字
            failText:"关闭"//取消按钮文字
        });
    }

    //children
    viewChildren(){
        let content='';
        switch (this.props.dialog.childrenType){
            case 'success':
                content=<p key={this.props.dialog.childrenType} className="msg-type success">{this.props.dialog.childrenContent?this.props.dialog.childrenContent:'操作成功!'}</p>;
                break;
            case 'fail'   :
                content=<p key={this.props.dialog.childrenType} className="msg-type fail">{this.props.dialog.childrenContent?this.props.dialog.childrenContent:'操作失败!'}</p>;
                break;
            case 'confirm':
                content=<p key={this.props.dialog.childrenType} className="msg-type doubt">{this.props.dialog.childrenContent?this.props.dialog.childrenContent:'确定要提交申请吗!'}</p>;
                break;
            case 'warning':
                content=<p key={this.props.dialog.childrenType} className="msg-type warning">{this.props.dialog.childrenContent?this.props.dialog.childrenContent:'请选择数据进行操作!'}</p>;
                break;
            default :
                break;
        }
        return(
            <div className="dialog-wrap dialog-box-wrap type-mesg" style={{display: "block"}}>
                <div className="dialog-header">
                    <div className="close"><i className="yypt-icon-close" onClick={this.childrenFailAction.bind(this)}></i></div>
                </div>

                <div className="dialog-body">
                   {content}
                </div>

                <div className="dialog-foot mb30"><button onClick={this.childrenSuccessAction.bind(this)} className="btn-submit">确定</button></div>
            </div>
        )
    }


    //confirm
    viewConfirm(){
       return (
           <div className="dialog-wrap type-cont" style={{width:this.props.dialog.width?this.props.dialog.width:'700px',height:this.props.dialog.height?this.props.dialog.height:'450px'}}>
               <div className="dialog-header dialog-title">
                   <p>{this.props.dialog.title}</p>
                   <div className="close colse-fff"><i onClick={this.failAction.bind(this)} className="yypt-icon-close"></i></div>
               </div>

               <div className="dialog-body">
                   {this.props.dialog.content}
               </div>

               <div className="dialog-foot">
                   {this.props.dialog.failBtn?<button className="btn-close" onClick={this.failAction.bind(this)}>{this.props.dialog.failText}</button>:''}
                   {this.props.dialog.successBtn?<button className="btn-submit" onClick={this.successAction.bind(this)}>{this.props.dialog.successText}</button>:''}
               </div>
               {this.props.dialog.children?this.viewChildren():''}
           </div>
       )
    }

    //tips
    viewTips(){
        let content='';
        switch (this.props.dialog.tipsType){
            case 'success':
                content=<p key={this.props.dialog.tipsType} className="msg-type success">{this.props.dialog.content?this.props.dialog.content:'操作成功!'}</p>;
                break;
            case 'fail'   :
                content=<p key={this.props.dialog.tipsType} className="msg-type fail">{this.props.dialog.content?this.props.dialog.content:'操作失败!'}</p>;
                break;
            case 'confirm':
                content=<p key={this.props.dialog.tipsType} className="msg-type doubt">{this.props.dialog.content?this.props.dialog.content:'确定要提交申请吗!'}</p>;
                break;
            case 'warning':
                content=<p key={this.props.dialog.tipsType} className="msg-type warning">{this.props.dialog.content?this.props.dialog.content:'请选择数据进行操作!'}</p>;
                break;
            default :
                break;
        }

        return (
            <div className="dialog-wrap type-mesg" style={{height:'260px',width:"300px"}}>
                <div className="dialog-header">
                    <div className="close"><i onClick={this.failAction.bind(this)} className="yypt-icon-close"></i></div>
                </div>

                <div className="dialog-body">
                    {content}
                </div>

                <div className="dialog-foot"><button className="btn-submit" onClick={this.successAction.bind(this)}>确定</button></div>
            </div>
        )
    }

    //根据弹窗类型渲染不同的VIEW
    renderType(type){
        if(this.props.dialog.time>0){
            timeHandle=setTimeout(()=>{ this.failAction()},this.props.dialog.time);
        }
        switch(type){
            case 'confirm':
                return this.viewConfirm();
            case 'loading':
                return (
                    <div className="dialog-loading"><div className="dialog-loading-icon"><div className="dialog-loading-content">{this.props.dialog.content}</div></div></div>
                )
            case 'tips'   :
                return this.viewTips();
            default :
                return '';
        }
    }

    render(){
        return(
            <div id="react-dialog" className="new-dialog-bg" style={{display:this.props.dialog.show?'block':'none'}}>
                {this.renderType(this.props.dialog.type)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return state;
}

function mapDispatchToProps(dispatch){
    return {
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options));
        }
    }
}

const Dialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactDialog);

export default  Dialog;