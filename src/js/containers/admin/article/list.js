/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';



class List extends React.Component{
    render(){
        return(
            <div className="height100p">

            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {

    }
}

const articleList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default articleList;