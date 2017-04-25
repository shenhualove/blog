/**
 * Created by shenhua
 *
 * 内容页
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/user/page';

class PageMain extends React.Component {

    getData() {
        //获取数据
        if (this.props.page.data.length > 0) {
            return this.props.page.data.map((val, key)=> {
                return (
                    <div className="page-content">
                        <header>
                            <h1 className="article-title">{val.title}</h1>

                            <div className="meta">
                                <span className="muted"><i className="fa fa-user"></i> {val.author}</span>
                                <span className="muted"><i className="fa fa-clock-o"></i> {val.time}</span>
                                <span className="muted"><i className="fa fa-eye"></i> {val.totalViews}浏览</span>
                            </div>
                        </header>
                        <article className="article-content">

                            <div dangerouslySetInnerHTML={{__html:val.content}}/>

                        </article>
                        <div className="article-talk">

                        </div>
                    </div>
                )
            });
        } else {
            return <div className="page-content"><article className="article-content">暂无数据</article></div>
        }
    }

    componentDidMount(){
        this.props._getPage(1);
    }//组件加载后

    render(){

        return (
            <div className="content-left">
                 {this.getData()}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getPage:(id)=>{
            dispatch(actions.getPage(id));
        }
    }
}

const Page = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageMain)

export default Page;