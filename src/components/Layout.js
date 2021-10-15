import classes from '../Styles/App.css'
import Nav from "./Nav";

export default function Layout({children}){
    return(
        <>
        <Nav></Nav>
        <main className={classes.main}>
            <div className={classes.container}>
                {children}
            </div>
        </main>
        
        </>
    );
}