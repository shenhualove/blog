/**
 * Created by gaolei on 2017/5/3.
 *
 * 根据权限来展示地区选项
 *
 * 如果是员工，则不能查看任何选项，如果是市长，只能查看市，县，省长和其他职位则是全部都能看到省市区县
 */
import React from 'react';
import SelectBox from '../public/selectBox';

class Regional extends React.Component{
    getHtml(){
        let html=[];
        switch (this.props.identity){

            //省长以及以上，还有没职位的都可以看到所有选项
             default :
                 html.push(
                    <li key="provinceList">
                        <span>省份:</span>
                        <SelectBox
                            callBack={this.props.selectClick.bind(this,1)}
                            value={this.props.provinceVal}
                            list={this.props.provinceList}
                        />
                    </li>
                 );
                 html.push(
                     <li key="cityList">
                         <span>市:</span>
                         <SelectBox
                             callBack={this.props.selectClick.bind(this,2)}
                             value={this.props.cityVal}
                             list={this.props.cityList}
                         />
                     </li>
                 );
                 html.push(
                     <li key="countyList">
                         <span>区县:</span>
                         <SelectBox
                             callBack={this.props.selectClick.bind(this,3)}
                             value={this.props.countyVal}
                             list={this.props.countyList}
                         />
                     </li>
                 );
                break;
        }
        return html;
    }
    render(){
        return(
            <div>
              {this.getHtml()}
            </div>
        )
    }
}

export default  Regional;