/**
 * Created by gaolei on 2017/5/9.
 *
 * 显示汇总，省长 能查看 省市县，市长只能查看市县,
 */
import React from 'react';
import SelectBox from '../public/selectBox';

class ViewSummary extends React.Component{
    render(){
        return(
            <li>
                <span>汇总层级:</span>
                <SelectBox
                    callBack={this.props.selectClick.bind(this,5)}
                    value={this.props.value}
                    list={this.props.list}
                />
            </li>
        )
    }
}

export default ViewSummary;