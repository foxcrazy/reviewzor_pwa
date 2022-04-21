import {FC} from "react";
import {Link} from "react-router-dom";

export const StartScreen: FC = () => {

    return(
        <>
            <div className={'StartFilled'}>
                <h1>Reviewzor</h1>
            </div>
            <div className={'StartBottom'}>
                <Link to={'/login'} className={'StartButton'}>LOG IN</Link>
                <Link to={'/register'} className={'StartButton__Black'}>REGISTER</Link>
            </div>
        </>
    );
}