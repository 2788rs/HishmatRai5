import React from "react";
import {connect} from 'react-redux'
function Blog (props){
    return(
        <div>
            <h1>Blog</h1>
            <ul>
                <li>{props.data.name}</li>
                <li>{props.data.address}</li>
                <li>{props.data.url}</li>
            </ul>
        </div>
    )
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        data : state
    }
}
export default connect(mapStateToProps,null) (Blog)