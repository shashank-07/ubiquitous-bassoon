import React,{useState,useEffect} from 'react'
import styles from './scene.module.css'; 
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {sathappan} from '../static/highlights/sathappan'
import {shashank} from '../static/highlights/shashank'
import {akshaya} from '../static/highlights/akshaya'
import {arun} from '../static/highlights/arun'
import {bhargava} from '../static/highlights/bhargava'
import {prakhar} from '../static/highlights/prakhar'
import {raj} from '../static/highlights/raj'
import {rohan} from '../static/highlights/rohan'
import {rutvik} from '../static/highlights/rutvik'
import {sachinC} from '../static/highlights/sachinC'
import {sachinT} from '../static/highlights/sachinT'
import {santosh} from '../static/highlights/santosh'
import {shiv} from '../static/highlights/shiv'


function Login(props) {
    const [name, setname] = useState("");
    const clear=()=>{
        let obj=null;
        switch(name){
            case 'Aksh@ya': obj=akshaya;break;
            case 'AruN': obj=arun;break;
            case 'Bharg@va': obj=bhargava;break;
            case 'Prakh@r': obj=prakhar;break;
            case 'R@j': obj=raj;break;
            case 'Roh@N': obj=rohan;break;
            case 'RutviK': obj=rutvik;break;
            case 'S@chin': obj=sachinC;break;
            case 'SachiN':obj=sachinT;break;
            case 'SaNtosh':obj=santosh;break;
            case '$ath@ppan': obj=sathappan;break;
            case '$hivaranjani':obj=shiv;break;
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
