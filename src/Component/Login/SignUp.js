import {connect} from "react-redux";
import {setUserData} from "../../Redux/LoginReducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form/Form";
import {useHistory} from "react-router-dom";

const SignUp = (props) => {

    const {push} = useHistory();

    const handleLogin = (email, pass) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                console.log(user);
                props.setUserData(user.email, user.accessToken, user.uid);
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form title={"Регистрация"} handleClick={handleLogin} />
    )
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {setUserData})(SignUp);