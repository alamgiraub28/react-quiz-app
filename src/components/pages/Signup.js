import classes from '../../Styles/Signup.module.css';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';


export default function Signup(){
    
    return(
        <>
            <h1>Create a account</h1>
            <div className="column">
                <Illustration/>
                <Form className=
                {`${classes.signup}`}>
                <TextInput type="text" placeholder="Enter your Name" icon="person"></TextInput>
                <TextInput type="text" placeholder="Enter your email" icon="alternate_email"></TextInput>
                <TextInput type="password" placeholder="Enter Password" icon="lock"></TextInput>
                <TextInput type="password" placeholder="Confirm Password" icon="lock_clock"></TextInput>
                </Form>
            </div>
        </>
    );
}