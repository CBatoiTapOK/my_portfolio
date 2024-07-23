import { useState } from 'react';
import React from 'react'
import styles from './NavBar.module.css'
import { getImageUrl } from '../utils';
import MenuIcon from "../../assets/nav/menuBtn.svg?react";


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <a className ={styles.title} href="#home">Home</a>
        <div className={styles.menu}>
                <a href="#contact" className={styles.contactbtn}>Contact</a>
        </div>
    </nav>
  )
}

export default NavBar
