/**
 * Created by gaolei on 2017/4/21.
 *
 * 报表公共表格生成组件
 *
 * 传入表头，数据源DATA，
 *
 *
 *
 * width 可以设置表格宽度,默认100%，可以不传
 *
 * status 设置表格数据加载状态，默认为加载中,必传
 *
 * colspan 设置加载状态占满多少个表格行，否则默认1行，样式不美观，必传
 *
 * dataList 类型 array  例如[{name:'11'},{name:222}]
 *
 * titleList 类型 array  例如 [{title:"名称",type:"name",addClass:["red","blue"],htmlType:"button"},{title:"城市",type:'city'}]
 * 参数说明
 * {
 *  title:"名称",//标题名称，必传
 *  type:"name",//标题对应的KEY，必传
 *  addClass:["red","blue"],//TD的CLASS，为数组类型，默认可以不传
 *  htmlType:[{type:"a",text:"",addClass:[],callBack:null,param:key,bindType:key}],//标签类型，默认为文字，可不传
 *  type指定标签类型,a,button,span,
 *  text指定标签是否含有文字
 *  addClass指定标签是否含有CLASS
 *  callBack指定回调函数
 *  param指定回调函数里返回的参数
 *  bindType给标签 增加属性，这个属性的值，为该行的td的某个值，
 *  format:"" //格式化单位，针对数字千分位，金额千分位等  提供2种方法(number|money)，如需增加方法，可以自己添加
 *  parent:"站点类型"//是否有父标题，默认可以不传,
 *  colspan:1,//设置列,非必传
 *  rowspan:1,//设置行，非必传
 *  }
 *
 * 如果需要一个表头合并多个标题  [{name:"名称",parent:"站点类型"},{city:"城市",parent:"站点类型"}]
 * titleList 每个KEY 对应的值，会去对应dataList里每个KEY，这样才能一一对应生成标题对应所在单元格的值，请勿顺序传错
 */
import React from 'react';
import PlugTableLoading from './plugTableLoading';


class Table extends React.Component{
    //渲染表头
    creatHead(){
        let title=this.props.titleList;
        let isHasParent=false;
        let html=[],childrenHtml=[],temp_title='';

        for(let i=0;i<title.length;i++){
            let name=title[i].title;
            //判断是否含有父标题
            if(title[i].parent){
                isHasParent=true;
                name=title[i].parent;
                //判断单元格父标提是否一样，一样不输出TH
                if(temp_title==title[i].parent){
                    continue;
                }else{
                    temp_title=title[i].parent;
                }
            }else{
                temp_title='';
            }
            //如果传有colspan或rowspan 设置
            if(title[i].colspan){
                html.push(<th className="text-c" colSpan={title[i].colspan} key={i}>{name}</th>);
            }else if(title[i].rowspan){
                html.push(<th rowSpan={title[i].rowspan} key={i}>{name}</th>);
            }else{
                html.push(<th key={i}>{name}</th>);
            }
        }

        if(isHasParent){
            for(let i=0;i<title.length;i++){
                //判断是否含有父标题
                if(title[i].parent){
                    childrenHtml.push(<th key={i}>{title[i].title}</th>);
                }
            }
        }

        if(childrenHtml.length>0){
            return <thead><tr>{html}</tr><tr>{childrenHtml}</tr></thead>;
        }else{
            return <thead><tr>{html}</tr></thead>;
        }

    }
    //渲染内容
    creatBody(){
        let data=this.props.dataList;
        let html=[];
        for(let i=0;i<data.length;i++){
            html.push(<tr key={i}>{this.getData(data[i])}</tr>)
        }
        //如果有合计数据 并且 showTotal为true显示
        if(this.props.totalData&&this.props.showTotal){
            html.push(<tr key="total"><td>合计</td>{this.getTotal()}</tr>)
        }
        return html;
    }
    //生成合计 样式数据
    getTotal(){
        let html=[];
        for(let i=0;i<this.props.totalTitle.length;i++){
            html.push(<td className="text-r" key={i}>{this.props.totalTitle[i].type?(this.props.totalTitle[i].format?this.format(this.props.totalTitle[i].format,this.props.totalData[this.props.totalTitle[i].type]):this.props.totalData[this.props.totalTitle[i].type]):''}</td>)
        }
        return html;
    }
    //根据TITLE里的KEY，生成对应的TD值
    getData(data){
        let title=this.props.titleList;
        let html=[];
        for(let i=0;i<title.length;i++){
            if(title[i].htmlType){
                html.push(<td key={i} className={title[i].addClass&&this.getClass(title[i].addClass)}>{this.getChildrenTd(title[i],data)}</td>)
            }else{
                html.push(<td key={i} data-show={data[title[i].type]} className={title[i].addClass&&this.getClass(title[i].addClass)}>{title[i].format?this.format(title[i].format,data[title[i].type]):data[title[i].type]}</td>)
            }
        }
        return html;
    }

    //根据htmlType生成对应的标签按钮
    getChildrenTd(arr,data){
        let html=[];
        for(let i=0;i<arr.htmlType.length;i++){
            if(typeof arr.htmlType[i].callBack !='function'){
                arr.htmlType[i].callBack=function(){}
            }
            switch (arr.htmlType[i].type){
                case "a":
                    html.push(<a key={i} data-show={arr.htmlType[i].bindType?data[arr.htmlType[i].bindType]:''} onClick={arr.htmlType[i].callBack.bind(this,data[arr.htmlType[i].param])} className={arr.htmlType[i].addClass&&this.getClass(arr.htmlType[i].addClass)}>
                        {arr.htmlType[i].text?arr.htmlType[i].text:''}
                    </a>);
                    break;
                case "button":
                    html.push(<button key={i} data-show={arr.htmlType[i].bindType?data[arr.htmlType[i].bindType]:''} onClick={arr.htmlType[i].callBack.bind(this,data[arr.htmlType[i].param])} className={arr.htmlType[i].addClass&&this.getClass(arr.htmlType[i].addClass)}>
                        {arr.htmlType[i].text?arr.htmlType[i].text:''}
                    </button>);
                    break;
                case "span":
                    html.push(<span key={i} data-show={arr.htmlType[i].bindType?data[arr.htmlType[i].bindType]:''} onClick={arr.htmlType[i].callBack.bind(this,data[arr.htmlType[i].param])} className={arr.htmlType[i].addClass&&this.getClass(arr.htmlType[i].addClass)}>
                     {arr.htmlType[i].text?arr.htmlType[i].text:''}
                    </span>);
                    break;
                default :
                    break;
            }
        }
        return html;
    }

    //返回TD CLASS
    getClass(val){
        if(val){
            return val.join(' ');
        }
    }

    render(){
        return(
            <table style={{width:this.props.width?this.props.width:"100%"}}>
                {this.creatHead()}
                <tbody>
                {this.props.status!="success"?<PlugTableLoading colSpanCount={this.props.colspan} status={this.props.status} />:this.creatBody()}
                </tbody>
            </table>
        )
    }
}

export default Table;