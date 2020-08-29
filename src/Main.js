import React,{useState} from 'react'
import Scene from './components/Scene'
import styles from './mystyle.module.css'; 
import Login from './components/login'


export default function Main() {

    const [scene, setScene] = useState(false);
    const [name, setname] = useState({});
    const clea=()=>{
        setScene(false);
    }
    return (
            
       
        <div className={styles.maback}>
            
                {scene===true?<Scene obj={name}/>:  <Login setName={setname} setScene={setScene}/>}

              
  
        </div>
    )
}
