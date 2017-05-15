/**
 * Created by gaolei on 2017/3/6.
 *
 * 网站首页，根据用户是否登录来加载登录页面还是主页
 */
import React from 'react';
import IndexMain from '../../containers/admin';

class Index extends React.Component{
	render(){
		return(
			<IndexMain children={this.props.children} />
		)
	}
}

export default  Index;