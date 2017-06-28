/**
 * Created by apple on 17/6/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/admin/upload';
import {dialogHandle} from '../../../actions/admin/dialog';


class Main extends React.Component{

    showUpload(e){
       if(e.target.files.length>0){
           console.log(e.target.value)
           var file = e.target.files[0];
           var reader = new FileReader();
           reader.onload=(ev)=>{
               this.props._handle({
                   viewUrl:ev.target.result
               })
           }
           reader.readAsDataURL(file);
       }
    }

    closeUpload(){

    }

    upload(){
       if(this.props.upload.load){
           return;
       }
       let data = new FormData();
       data.append('file',this.refs.fileUpload.files[0]);
       this.props._uploadFile({
            data,
            success:this.props.uploadCallBack
       })
    }

    render(){
        return(
           <div className="upload-file-wrap">
               <form id="articleUploadForm"  method="post" enctype="multipart/form-data">
                   <input style={{display: "none"}} ref="fileUpload" onChange={this.showUpload.bind(this)} name="fileimg" id="articleImgUpload" placeholder="上传文章缩略图" accept=".png,.gif,.jpg,.jpeg" type="file" />
                   <label htmlFor="articleImgUpload"  className="lable-upload-btn">点击选择图片</label>
               </form>
               <div id="uploadImgWrap" >
                   <img width="160" height="160" src={this.props.upload.viewUrl} />
                   <p id="uploadImgOk">
                       <span className="uploadAssign" onClick={this.upload.bind(this)}>确定上传</span>
                       <span className="uploadCancel" onClick={this.closeUpload.bind(this)}>关闭预览</span>
                   </p>
               </div>
           </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {
        _handle:(options)=>{
            dispatch(actions.handle(options))
        },
        _uploadFile:(options)=>{
            dispatch(actions.uploadFile(options))
        },
        _dialogHandle :(options)=>{
            dispatch(dialogHandle(options));
        }
    }
}

const Upload = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default  Upload;