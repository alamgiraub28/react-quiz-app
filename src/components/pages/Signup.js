import classes from '../../Styles/Signup.module.css';
import Form from '../Form';
import Illustration from '../Illustration';


export default function Signup(){
    
    return(
        <>
        <h1>Create a account</h1>
        <div className="column">
            <Illustration/>
            <Form className=
            {`${classes.signup}`}/>
        </div>
        </>
    );
}