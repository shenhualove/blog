/**
 * Created by shenhua on 16/10/27.
 *
 * 首页
 */
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {indexHandle} from '../../actions/user';
import * as actions from '../../actions/user/home';

class HomeMain extends React.Component {

    getData(){
        if(this.props.home.listData.length>0){
            return this.props.home.listData.map((val,key)=>{
                        return(
                            <article key={key}>
                                <div className="focus">
                                    <Link to={"/page/"+val.id}  className="thumbnail"><img src={"/images/upload/admin/"+val.imgUrl} alt={val.title} data-bd-imgshare-binded="1" /></Link>
                                </div>
                                <header>
                                    <h3><Link to={"/page/"+val.id} state={val.title}>{val.title}</Link></h3>
                                </header>
                                <p className="note">
                                    {val.caption}
                                </p>
                                <p>
                                    <span className="muted"><i className="fa fa-user"></i> {val.author}</span>
                                    <span className="muted"><i className="fa fa-clock-o"></i> {val.time}</span>
                                    <span className="muted"><i className="fa fa-eye"></i> {val.totalViews}浏览</span>
                                </p>
                            </article>
                        )
                    });
        }else{
            return <article>暂无数据</article>
        }
    }

    componentDidMount(){
        this.props._indexHandle('');
        this.props._getNew(this.props.home.page,this.props.home.pageSize);
    }//组件加载后

    render(){

        return (

                 <div className="content-left">
                      <div className="new-push">
                          <h2>最新发布</h2>
                          {this.getData()}
                      </div>
                 </div>

        );
    }

}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getNew:(page,pageSize)=>{
            dispatch(actions.getNew(page,pageSize));
        },
        _indexHandle:(id)=>{
            dispatch(indexHandle("GET_NAV_ID",id));
        }
    }
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeMain)

export default Home;