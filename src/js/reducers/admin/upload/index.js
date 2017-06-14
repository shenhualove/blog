/**
 * Created by apple on 17/6/13.
 */
//初始化state
const initalize={
    viewUrl:'',//预览图片的URl
    fileUrl:'',//上传图片的成功的地址
    load:false,//上传状态
}

function upload (state = initalize,action) {
    switch (action.type) {
        case "UPLOAD_HANDLE":
            return Object.assign({},state,action.data);
        default :
            return state;
    }
}

export default upload;