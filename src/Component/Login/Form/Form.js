import {useFormik} from "formik";
import * as Yup from "yup";

import './Form.css'

const Form = ({title, handleClick, handleGoogleLogin}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().min(5, "Минимум 5 символов" ).required("Обязательное поле"),
            password: Yup.string().min(6, "Минимум 6 символов").required("Обязательное поле"),
        }),
        onSubmit: values => {
            handleClick(values.email, values.password)
        }
    })

    return (
       <div className="form_main">
           <button type='submit' onClick={handleGoogleLogin} className="form_google">
               <i className="fab fa-google" style={{fontSize: '20px'}} /> Войти через Google
           </button>
           <form onSubmit={formik.handleSubmit}>
               <div className="form_flex">
                   <h2 className="form_enter">Или</h2>
                   <input
                       type="email"
                       name="email"
                       value={formik.values.email}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       className="form_input"
                       placeholder="Введите почту"
                   />
                   {formik.errors.email && formik.touched.email ? <div className="form_error">{formik.errors.email}</div> : null}
                   <br/>
                   <input
                       type="password"
                       name={"password"}
                       value={formik.values.password}
                       onChange={formik.handleChange}
                       className="form_input"
                       onBlur={formik.handleBlur}
                       placeholder="Введите пароль"
                   />
                   {formik.errors.password && formik.touched.password ? <div className="form_error">{formik.errors.password}</div> : null}
                   <br/>

                   <button type='submit' className="form_button">
                       {title}
                   </button>
               </div>
           </form>
       </div>
    )
}

export default Form;