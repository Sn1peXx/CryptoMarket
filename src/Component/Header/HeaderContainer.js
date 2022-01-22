import Header from "./Header";
import {connect} from "react-redux";
import {removeUserData} from "../../Redux/LoginReducer";

const HeaderContainer = (props) => {

    return (
        <Header isAuth={props.isAuth} removeUserData={props.removeUserData}/>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.LoginPage.isAuth
    }
}

export default connect(mapStateToProps, {removeUserData})(HeaderContainer);