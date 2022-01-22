import {connect} from "react-redux";
import {setUserData} from "../../Redux/LoginReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form/Form";
import {useHistory} from "react-router-dom";

const Login = (props) => {

    const {push} = useHistory();

    const handleLogin = (email, pass) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                props.setUserData(user.email, user.accessToken, user.uid);
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form title={"Войти"} handleClick={handleLogin} />
    )
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {setUserData})(Login);