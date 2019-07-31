import React, {Component} from 'react';
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import {connect} from "react-redux";



class RefreshButton extends Component {

    onHandleClick = () =>
    {
        this.props.onRefresh();
    }

    render() {
        return (
            <IconButton onClick={() => this.onHandleClick()} >
                <RefreshIcon  />
            </IconButton>
        );

    }
}


const mapDispatchToProps = dispatch => {
    return {
        onRefresh: () => dispatch({type: 'REFRESH'})
    };
};


export default connect(null, mapDispatchToProps)(RefreshButton);

