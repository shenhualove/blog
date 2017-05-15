/**
 * Created by gaolei on 2017/5/5.
 *
 * 报表导出按钮权限功能按钮
 */
import React from 'react';

class  ExportBotton extends React.Component{

    returnBtn(){
        if(this.props.data){
            return <button onClick={this.props.clickBack.bind(this)}>导出</button>
        }
    }

    render(){
        return(
            <div className="right">
                {this.returnBtn()}
            </div>
        )
    }
}

export default ExportBotton;