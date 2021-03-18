import React from 'react';
import Link from 'next/link';
import styles from'../../../styles/Navstyles.module.css'; 


const NavLink = ({items, cur}) => {
    
    if (!items || !items.length) {
        return null
    }
    let clas, idname;
    if(items[0].parentid == 0){
        clas = styles.MainNavDiv;
        idname = "Parentelem";       
    }else{
        clas = styles.NavDiv;
        idname = "childelem";
    }
    

    const Navcomponent = items.map(item => {
        if(!item.children || !item.children.length){
            return(
            <ul key={item._id} className={clas} id={idname}>
                <Link href={cur + "/" +  item.url} key={item._id} className={styles.NavLink}>
                        <li className={styles.NavDiv}>
                            <a>{item.name}</a>
                            <a className={styles.arrowed}>+</a>
                        </li>
                </Link>
            </ul>)
        }else{
            return(
            <ul key={item._id} className={clas}>
                <li className={styles.NavDiv}>
                    <a>{item.name}</a>
                    <a className={styles.arrowed}>+</a>
                </li>
                <NavLink items={item.children} cur={cur + "/" + item.url}> {item.name} </NavLink>
            </ul>)
        }
    })

    return( 
        <>
            {Navcomponent}
        </>
    )
}

export default NavLink