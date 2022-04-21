import {FC, useRef} from "react";
import backArrow from '../../assets/icons/backArrow.svg'
import {Link} from "react-router-dom";
import {AuthData, RegisterResponse, request} from "../api/api";



export const RegisterScreen: FC = () => {
    const ref = useRef<HTMLFormElement>(null);
    const onSubmit = async (formData: AuthData) => {
        const url = '/seeend/';
        const data = await request<RegisterResponse>(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        });
        if (!data || !data.responseStatus){

        } else {

        }
    }
    return(
        <div className={'AuthPage'}>
            <Link className={'BackButton'} to={'/'}>
                <img style={{width:'inherit', height:'inherit'}} src={backArrow}/>
            </Link>
            <h1>Register</h1>
            <form style={{width: '100%'}} onSubmit={()=>{}} ref={ref}>
                {/*todo: set function*/}
                <input required placeholder={'enter your e-mail'} type={'email'} name={'email'} />
                <input required placeholder={'enter your password'} type={'password'} name={'password'} />
            </form>
            <button type={"submit"} className={'AuthButton'}>NEXT</button>

        </div>
    );
}