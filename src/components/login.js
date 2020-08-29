import React,{useState,useEffect} from 'react'
import styles from './scene.module.css'; 
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {sathappan} from '../static/highlights/sathappan'
import {shashank} from '../static/highlights/shashank'

function Login(props) {
    const [name, setname] = useState("");
    const clear=()=>{
        let obj=null;
        switch(name){
            case '$ath@ppan': obj=sathappan;break;
            case 'sample':obj=shashank;break;
        }
        if(obj!==null){
            props.setName(obj);
            props.setScene(true);
    
        }else{
            alert('Invalid ID!');
        }
        
    }
  
    return (
        <div className={styles.maback}>
    <Form className={styles.loginform} onSubmit={()=>clear()}>
    <Form.Control className={styles.login} onChange={e=>setname(e.target.value)} placeholder="Enter your ID" />

    </Form>
    <Button className={styles.butto} variant="warning" size="lg"  onClick={()=>clear()}>Login</Button>

   
        </div>
    );
    
}

export default Login
