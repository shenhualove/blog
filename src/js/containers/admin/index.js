/**
 * Created by apple on 17/3/30.
 *
 * 网站首页，根据用户是否登录来加载登录页面还是主页
 */
import React from 'react';
import {connect} from 'react-redux';
import UserLogin from './login';
import TopMenu from './public/top';
import Dialog from './public/dialog';

class Index extends React.Component{
    render(){
        if(!this.props.login.isLogin){
            return (
                <div className="h100">
                    <UserLogin />
                    <Dialog />
                </div>
            )
        }else{
            return(
                <div className="h100">
                    <TopMenu  />
                    {/*Main*/}
                    <div className="contioner">
                        <div className="center-content" >
                            <div className="show-content" >
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <Dialog />
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {

    }
}

const IndexMain = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

export default  IndexMain;