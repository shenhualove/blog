/**
 * Created by shenhua on 16/10/27.
 *
 * 首页
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
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
        this.props._getNew(this.props.home.page,this.props.home.pageSize);
    }//组件加载后

    render(){

        return (

                 <div className="content-left">
                      <div className="hot-read">
                          <h2>推荐集合</h2>
                          <ul>
                             <li>
                                 <a href="#">
                                     <img src="../../../images/reception/d8.jpg" alt="移动端界面设计之尺寸篇" data-bd-imgshare-binded="1" />
                                     <h3>移动端布局单位之rem篇</h3>
                                     <p class="muted">彻底弄懂移动端布局单位，完美自适应移动手机的分辨率，搞定设计MM的PSD~！...</p>
                                 </a>
                             </li>
                              <li>
                                  <a href="#">
                                      <img src="../../../images/reception/d8.jpg" alt="移动端界面设计之尺寸篇" data-bd-imgshare-binded="1" />
                                      <h3>JQUERY插件封装入门篇</h3>
                                      <p class="muted">学了JQ，岂能不会封装插件，还怎么混，赶快跟哥一起来学如何封装，入门级必备~！...</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <img src="../../../images/reception/d8.jpg" alt="移动端界面设计之尺寸篇" data-bd-imgshare-binded="1" />
                                      <h3>react入门开发篇</h3>
                                      <p class="muted">在这个前端爆炸的年代，不会react还想涨薪！手把手教你入门react做个SPA项目~！...</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <img src="../../../images/reception/d8.jpg" alt="移动端界面设计之尺寸篇" data-bd-imgshare-binded="1" />
                                      <h3>Node.js全栈开发入门篇</h3>
                                      <p class="muted">只会前端远远不够，老司机贴身教你使用node.js+express+mysql搭建自己的博客...</p>
                                  </a>
                              </li>
                          </ul>
                      </div>
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
        }
    }
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeMain)

export default Home;