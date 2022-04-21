import {FC, useRef} from "react";
import backArrow from '../../assets/icons/backArrow.svg'
import {Link} from "react-router-dom";

export const LoginScreen: FC = () => {
    const ref = useRef<HTMLFormElement>(null);
    return(
        <div className={'AuthPage'}>
            <Link className={'BackButton'} to={'/'}>
                <img style={{width:'inherit', height:'inherit'}} src={backArrow}/>
            </Link>
            <h1>Log in</h1>
            <form style={{width: '100%'}} onSubmit={()=>{}} ref={ref}>
                {/*todo: set function*/}
                <input required placeholder={'enter your e-mail'} type={'email'} name={'email'} />
                <input required placeholder={'enter your password'} type={'password'} name={'password'} />
            </form>
            <button type={"submit"} className={'AuthButton'}>LOG IN</button>

        </div>
    );
}