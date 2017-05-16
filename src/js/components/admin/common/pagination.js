/**
 * Created by gaolei on 2017/4/1.
 *
 * 公用分页
 * 传入参数 当前页curPage  总条数totalNumber 每页显示多少条pageLimt 分页点击回调 pageClick
 */
import React from 'react';

class Pagination extends React.Component{
    //导航点击
    clickHandle(f,n,p){
           typeof f == "function" && f(n,p);
    }

    pageRender(options){
           let navHtml=[],pageNav=10;
           let totalPage=Math.ceil(options.totalNumber/options.pageLimt);
           //上一页，首页
           navHtml.push(this.firstPrev(options));

           if(totalPage<=pageNav){
               //总页数小于等于导航页码10
               for(let i=1;i<=totalPage;i++){
                   navHtml.push(<span key={i} className={options.curPage==i?'curr':'nav'} onClick={this.clickHandle.bind(this,options.clickCallBack,i,options.pageLimt)}>{i}</span>)
               }
           }else{
               //总页数大于导航页码
               if(options.curPage>6&&options.curPage-5>0){
                   for(let i=options.curPage-5;i<options.curPage;i++){
                       navHtml.push(<span key={i} className='nav'onClick={this.clickHandle.bind(this,options.clickCallBack,i,options.pageLimt)}>{i}</span>)
                   }
               }else{
                   for(let i=1;i<options.curPage;i++){
                       navHtml.push(<span key={i} className='nav'onClick={this.clickHandle.bind(this,options.clickCallBack,i,options.pageLimt)}>{i}</span>)
                   }
               }

               navHtml.push(<span key={options.curPage} className='curr'>{options.curPage}</span>)

               if(options.curPage>6&&options.curPage+4>totalPage){
                   for(let i=options.curPage+1;i<=totalPage;i++){
                       navHtml.push(<span key={i} className='nav'onClick={this.clickHandle.bind(this,options.clickCallBack,i,options.pageLimt)}>{i}</span>)
                   }
               }else{
                   for(let i=options.curPage+1;i<=(options.curPage+4>10?options.curPage+4:10);i++){
                       navHtml.push(<span key={i} className='nav'onClick={this.clickHandle.bind(this,options.clickCallBack,i,options.pageLimt)}>{i}</span>)
                   }
               }

           }

           //下一页尾页
           navHtml.push(this.endNext(options));

           let returnHTml=[];
           //页码信息
           returnHTml.push(this.pageText(options));
           returnHTml.push(<div className="page-show-left" key="div">{navHtml}</div>);
           return returnHTml;
    }

    //上一页首页样式
    firstPrev(options){
          let html=[];
          if(options.curPage==1){
              html.push(<span key="first" className="disable-hover">首页</span>);
              html.push(<span key="prev" className="disable-hover">上一页</span>);
          }else{
              html.push(<span key="first" className="nav" onClick={this.clickHandle.bind(this,options.clickCallBack,1,options.pageLimt)}>首页</span>);
              html.push(<span key="prev" className="nav" onClick={this.clickHandle.bind(this,options.clickCallBack,options.curPage-1,options.pageLimt)}>上一页</span>);
          }
          return html;
    }

    //下一页尾页
    endNext(options){
        let html=[];
        let totalPage=Math.ceil(options.totalNumber/options.pageLimt);
        if(options.curPage==totalPage||totalPage==0){
            html.push(<span key="next" className="disable-hover">下一页</span>);
            html.push(<span key="end" className="disable-hover">尾页</span>);
        }else{
            html.push(<span key="next" className="nav" onClick={this.clickHandle.bind(this,options.clickCallBack,options.curPage+1,options.pageLimt)}>下一页</span>);
            html.push(<span key="end" className="nav" onClick={this.clickHandle.bind(this,options.clickCallBack,totalPage,options.pageLimt)}>尾页</span>);
        }
        return html;
    }

    //页码信息
    pageText(options){
        return <span className="page-info" key="pageText">每页{this.pageSizeSelect(options.pageLimt)}条　　当前{options.curPage}/{Math.ceil(options.totalNumber/options.pageLimt)}页　　共{options.totalNumber}条数据</span>;
    }

    //选择PAGESIZE
    pageSizeSelect(n){
        return <select value={n} onChange={this.selectPage.bind(this)}>
                 <option key={10}  value="10">10</option>
                 <option key={20}  value="20">20</option>
                 <option key={50}  value="50">50</option>
                 <option key={100}  value="100">100</option>
               </select>
    }

    //选择页码事件
    selectPage(e){
        let n=e.target.value;
        this.clickHandle(this.props.pageClick,1,n);
    }

    render(){
        return(
            <div className="pagination-wrap clearfix">
              {this.pageRender({
                  curPage:this.props.curPage?this.props.curPage:1,
                  pageLimt:this.props.pageLimt?this.props.pageLimt:10,
                  totalNumber:this.props.totalNumber?this.props.totalNumber:0,
                  clickCallBack:this.props.pageClick?this.props.pageClick:null
              })}
            </div>
        )
    }
}

export default  Pagination;