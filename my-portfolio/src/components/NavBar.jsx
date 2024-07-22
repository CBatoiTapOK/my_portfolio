import { useState } from 'react';
import React from 'react'
import styles from './NavBar.module.css'
import { getImageUrl } from '../utils';
import MenuIcon from "../../assets/nav/menuBtn.svg?react";


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <a className ={styles.title} href="/">Home</a>
        <div className={styles.menu}>
            <MenuIcon className={styles.MenuIcon}/>
            <ul className={styles.menuitems}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact" className={styles.buttonlink}>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
