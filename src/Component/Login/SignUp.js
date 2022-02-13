import {connect} from "react-redux";
import {setUserData} from "../../Redux/LoginReducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form/Form";
import {useHistory} from "react-router-dom";
import handleGoogleLogin from "../../Common/Helper/loginWithGoogle";
// import {getDatabase, ref, set} from "firebase/database";

const SignUp = (props) => {

    const addBalance = () => {
        // const db = getDatabase();
        // const userId = JSON.parse(localStorage.getItem("user"))[2];

        // const {balance} = props
        //
        // set(ref(db, 'Balance/' + userId), {
        //     balance
        // });
    }

    const history = useHistory()

    const handleLogin = (email, pass) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                props.setUserData(user.email, user.accessToken, user.uid);
                // addBalance()
            })
            .then(() => history.push('/'))
            .catch(console.error)
    }

    return (
        <Form title={"Регистрация"} handleClick={handleLogin} handleGoogleLogin={() => handleGoogleLogin(props.setUserData, history.push)} />
    )
}

const mapStateToProps = state => {
    return {
        balance: state.TradePage.balance
    }
}

export default connect(mapStateToProps, {setUserData})(SignUp);