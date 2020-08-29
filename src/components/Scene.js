import React,{useEffect} from 'react'
import backgr from '../static/images/backsath.png'
import ready from 'domready';
import App from '../scripts/App';
import styles from './scene.module.css'; 

import {sathappan} from '../static/highlights/sathappan';

function Scene(props) {
    useEffect(() => {

        const myNode = document.getElementById("root");
        
        ready(() => {
            
            window.app = new App();
            window.app.init(props.obj.imgs);
            
        })
       
    }, []);

  
    return (
       <div className={styles.personback}>
        
        {
                props.obj.background.map(item => {
                 return <img className={styles.personbackimg} src={item}/>
                })
         }

       </div>
       
    )
}

export default Scene
