/**
 * Created by shenhua
 *
 * 列表页
 */
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/user/list';

class ListMain extends React.Component {

    getData(){
        //获取数据
        if(this.props.list.listData.length>0){
            return this.props.list.listData.map((val,key)=>{
                return(
                    <article key={key}>
                        <div className="focus">
                            <Link to={"/page/"+val.id} state={val.title} className="thumbnail"><img src={"/images/upload/admin/"+val.imgUrl} alt={val.title} data-bd-imgshare-binded="1" /></Link>
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
        console.log(this.props);
        this.props._getList(18,this.props.list.page,this.props.list.pageSize);
    }//组件加载后

    componentDidUpdate (prevProps) {
        let oldId = prevProps.params.id;
        let newId = this.props.params.id;
        if (newId !== oldId){
            this.props._getList(1,this.props.list.page,this.props.list.pageSize);
        }
    }//组件更新

    render(){
        return (
            <div className="content-left">
                <div className="new-push column-list">
                    <h2>{this.props.list.title}</h2>
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
        _getList:(id,page,pageSize)=>{
            dispatch(actions.getList(id,page,pageSize));
        }
    }
}

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMain)

export default List;