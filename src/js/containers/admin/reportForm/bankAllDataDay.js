/**
 * Created by gaolei on 2017/4/21.
 *
 * 全辖银行业务常规数据汇总报表-日
 */
import React from 'react';
import {connect} from 'react-redux';
import CenterTopNav from '../../components/public/centerTopNav';
import Pagination from '../../components/public/pagination';
import {dialogHandle} from '../../actions/dialog';
import {reportFormCommonHandle,queryProvince,queryCity,queryCounty,getBankTypeCodes} from '../../actions/reportForm/public/common';
import {bankAllDataDayHandle,bankAllDataDayLoad,bankAllDataDayExport} from '../../actions/reportForm/bankAllDataDay';
import SelectBox from '../../components/public/selectBox';
import ReportFormTable from '../../components/public/reportFormTable';
import Regional from '../../components/reportForm/regional';
import ExportButton from '../../components/reportForm/exportButton';
import ViewSummary from '../../components/reportForm/viewSummary';

class bankAllDataDayMain extends React.Component {

    selectClick(id,val,name){
        switch(id){
            case 1 :
               this.props._bankAllDataDayHandle({
                   province:{val:val,name:name},
                   city:{val:'',name:''},//选中的城市
                   county:{val:'',name:''}//选中的县
               })

               if(val==''){
                  //用户选择全部的情况

                   //重置市县区
                   this.props._reportFormCommonHandle({
                       cityList:[],
                       countyList:[]
                   })
               }else{
                   //重置县区
                   this.props._reportFormCommonHandle({
                       countyList:[]
                   })
                   //更新城市数据
                   this.props._queryCity({
                       provinceCode:val,
                       reportName:"bankbizRoutine"
                   })
               }

               break;
            case 2 :
                this.props._bankAllDataDayHandle({
                    city:{val:val,name:name},
                    county:{val:'',name:''}//选中的县
                })
                if(val==''){
                    //用户选择全部的情况

                    //重置县区
                    this.props._reportFormCommonHandle({
                        countyList:[]
                    })
                }else{
                    //更新县区数据
                    this.props._queryCounty({
                        cityCode:val,
                        reportName:"bankbizRoutine"
                    })
                }

                break;
            case 3 :
                this.props._bankAllDataDayHandle({
                    county:{val:val,name:name}
                })
                break;
            case 4 :
                this.props._bankAllDataDayHandle({
                    bank:val
                })
                break;
            case 5 :
                this.props._bankAllDataDayHandle({
                    summary:val
                })
                break;
            default :
                break;
        }
    }

    showProvince(){
        let arr=[{value:"",name:"全部"}];
        let temp_arr=[];
        this.props.reportFormCommon.provinceList.map((val,key)=>{
             temp_arr.push({value:val.districtCode,name:val.districtName})
        });
        return arr.concat(temp_arr);
    }

    showCity(){
        let arr=[{value:"",name:"全部"}];
        let temp_arr=[];
        this.props.reportFormCommon.cityList.map((val,key)=>{
            temp_arr.push({value:val.districtCode,name:val.cityName})
        });
        return arr.concat(temp_arr);
    }

    showCounty(){
        let arr=[{value:"",name:"全部"}];
        let temp_arr=[];
        this.props.reportFormCommon.countyList.map((val,key)=>{
            temp_arr.push({value:val.districtCode,name:val.countyName})
        });
        return arr.concat(temp_arr);
    }

    showBank(){
        let arr=[{value:"",name:"全部"}];
        let temp_arr=[];
        this.props.reportFormCommon.bankList.map((val,key)=>{
            temp_arr.push({value:val.bankTypeCode,name:val.bankTypeName})
        });
        return arr.concat(temp_arr);
    }

    showSummary(){
        let temp_arr=[
                {value:1,name:"省级"},
                {value:2,name:"市级"},
                {value:3,name:"县级"}
            ];
        if(this.checkIsCity()){
            temp_arr=[
                {value:2,name:"市级"},
                {value:3,name:"县级"}
            ];
        }
        return temp_arr;
    }

    pageNavClick(curPage,pageSize,options){

        if(curPage==Math.ceil(this.props.bankAllDataDay.totalSize/pageSize)){
            //当前是最后一页
            this.props._bankAllDataDayHandle({
                showTotal:true
            });
        }else{
            this.props._bankAllDataDayHandle({
                showTotal:false
            });
        }
        this.getData(curPage,pageSize,options?options:this.props.bankAllDataDay.temp_options);
    }

    //请求数据
    getData(curPage,pageSize,options){
        this.props._bankAllDataDayHandle({
            curPage:curPage,
            pageSize:pageSize
        });

        this.props._bankAllDataDayLoad({
            curPage:curPage,
            pageSize:pageSize,
            reportDate:options.selectDate,
            reportType:0,
            provinceName:options.province.name=='全部'?'':options.province.name,
            cityName:options.city.name=='全部'?'':options.city.name,
            countyName:options.county.name=='全部'?'':options.county.name,
            bankTypeCode:options.bank=='全部'?'':options.bank,
            groupByClause:options.summary
        })
    }

    //重置数据
    resetData(bool){
       let summary=this.checkIsCity()?2:1;
       if(bool===true){
           let options={
               selectDate:moment().subtract(1,"days").format('YYYY-MM-DD'),//默认日期
               province:{val:'',name:''},//选中的省
               city:{val:'',name:''},//选中的城市
               county:{val:'',name:''},//选中的县
               bank:"",//选中的银行
               summary:summary
           }
           //初次进入页面，所有参数初始化
           this.props._bankAllDataDayHandle({
               selectDate:moment().subtract(1,"days").format('YYYY-MM-DD'),//默认日期
               province:{val:'',name:''},//选中的省
               city:{val:'',name:''},//选中的城市
               county:{val:'',name:''},//选中的县
               bank:"",//选中的银行
               summary:summary,
               temp_options:options
           });
           //进入页面发起默认请求加载数据
           this.pageNavClick(1,10,options);
       }else{
           //页面未离开，用户正常重置查询条件
           this.props._bankAllDataDayHandle({
               selectDate:moment().subtract(1,"days").format('YYYY-MM-DD'),//默认日期
               province:{val:'',name:''},//选中的省
               city:{val:'',name:''},//选中的城市
               county:{val:'',name:''},//选中的县
               bank:"",//选中的银行
               summary:summary
           });
       }
       this.selectClick(1,'','');
    }

    //是否是市长
    checkIsCity(){
       if(this.props.login.employ.title=='CITY'){
           return true;
       }else{
           return false;
       }
    }

    //查询数据
    submitClick(){
        if(this.props.bankAllDataDay.status=='loading'){
            this.props._dialogHandle({
                type: "tips",
                time: 2000,
                content: "正在查询中，请耐心等待！",
                tipsType: "warning",
                show: true
            })
        }else{
            let options={
                selectDate:this.props.bankAllDataDay.selectDate,//默认日期
                province:this.props.bankAllDataDay.province,//选中的省
                city:this.props.bankAllDataDay.city,//选中的城市
                county:this.props.bankAllDataDay.county,//选中的县
                bank:this.props.bankAllDataDay.bank,//选中的银行
                summary:this.props.bankAllDataDay.summary
            }
            this.props._bankAllDataDayHandle({
                temp_options:options
            });
            this.getData(1,this.props.bankAllDataDay.pageSize,options);
        }
    }

    //导出报表
    exportExcel(){
        let options=this.props.bankAllDataDay.temp_options;
        this.props._bankAllDataDayExport({
            reportType:0,
            reportDate:options.selectDate,
            provinceName:options.province.name=='全部'?'':options.province.name,
            cityName:options.city.name=='全部'?'':options.city.name,
            countyName:options.county.name=='全部'?'':options.county.name,
            bankTypeCode:options.bank=='全部'?'':options.bank,
            groupByClause:options.summary
        });
    }

    componentDidMount(){
        this.resetData(true);
        var _that=this;
        $(function() {
            $( "#datepicker" ).datepicker({
                maxDate:-1,
                dateFormat:"yy-mm-dd",
                changeYear: true,          // 年下拉菜单
                changeMonth: true,             // 月下拉菜单
                onSelect: function (date) {
                    _that.props._bankAllDataDayHandle({
                        selectDate: date
                    });
                }
            });
        });
        this.props._queryProvince({
            reportName:"bankbizRoutine"
        });
        this.props._getBankTypeCodes({
            reportName:"bankbizRoutine"
        });
    }

    render() {
        return (
            <div className="height100p">
                <CenterTopNav title="全辖银行业务常规数据汇总日报" parentList={[{name:"数据报表"},{name:"银行业务日报"}]} />
                <div className="height100pY plr26">
					{/*form content begin*/}
                    <div className="pub-form-top clearfix">
                        <ul>
                            <li>
                                <span>数据日期:</span>
                                <input type="text" readOnly id="datepicker" value={this.props.bankAllDataDay.selectDate} />
                            </li>
                            <Regional
                                selectClick={this.selectClick.bind(this)}
                                provinceVal={this.props.bankAllDataDay.province.val}
                                cityVal={this.props.bankAllDataDay.city.val}
                                countyVal={this.props.bankAllDataDay.county.val}
                                provinceList={this.showProvince()}
                                cityList={this.showCity()}
                                countyList={this.showCounty()}
                            />
                        </ul>
                        <ul>
                            <li>
                                <span>合作银行:</span>
                                <SelectBox
                                    callBack={this.selectClick.bind(this,4)}
                                    value={this.props.bankAllDataDay.bank}
                                    list={this.showBank()}
                                />
                            </li>
                            <ViewSummary
                               selectClick={this.selectClick.bind(this)}
                               value={this.props.bankAllDataDay.summary}
                               list={this.showSummary()}
                            />
                        </ul>
                        <div className="pub-form-btns clearfix">
                            <div className="left">
                                <button onClick={this.submitClick.bind(this)}>查询</button>
                                <button onClick={this.resetData.bind(this)}>重置</button>
                            </div>
                            <ExportButton
                               data={this.props.login.Jurisdiction.ReportForm.btns.bankAllDataDay}
                               clickBack={this.exportExcel.bind(this)}
                            />
                        </div>

                    </div>
					{/*form content end*/}

					{/*content begin*/}
                    <div className="form-content-wrap">
                        <div className="form-table-wrap">
                            <ReportFormTable width="140%" colspan={16}
                                showTotal={this.props.bankAllDataDay.showTotal}
                                status={this.props.bankAllDataDay.status}
                                totalData={this.props.bankAllDataDay.totalData}
                                totalTitle={this.props.bankAllDataDay.totalTitle}
                                dataList={this.props.bankAllDataDay.listData}
                                titleList={this.props.bankAllDataDay.titleList} />
                        </div>
                        <Pagination
                            curPage={this.props.bankAllDataDay.curPage}
                            totalNumber={this.props.bankAllDataDay.totalSize}
                            pageLimt={this.props.bankAllDataDay.pageSize}
                            pageClick={this.pageNavClick.bind(this)}
                        />
                    </div>
					{/*content end*/}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {
        _bankAllDataDayHandle:(options)=>{
            dispatch(bankAllDataDayHandle(options));
        },
        _bankAllDataDayLoad:(options)=>{
            dispatch(bankAllDataDayLoad(options));
        },
        _queryProvince:(options)=>{
            dispatch(queryProvince(options));
        },
        _queryCity:(options)=>{
            dispatch(queryCity(options));
        },
        _queryCounty:(options)=>{
            dispatch(queryCounty(options));
        },
        _getBankTypeCodes:(options)=>{
            dispatch(getBankTypeCodes(options));
        },
        _reportFormCommonHandle:(options)=>{
            dispatch(reportFormCommonHandle(options));
        },
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options));
        },
        _bankAllDataDayExport:(options)=>{
            dispatch(bankAllDataDayExport(options));
        }
    }
}

const bankAllDataDay = connect(
    mapStateToProps,
    mapDispatchToProps
)(bankAllDataDayMain);


export default  bankAllDataDay;