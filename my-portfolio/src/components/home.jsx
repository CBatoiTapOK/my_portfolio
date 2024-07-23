import React from 'react'
import { getImageUrl } from '../utils';
import styles from './home.module.css'
import CubeIcon from "../../assets/home/cube.svg?react";
import PyramidIcon from "../../assets/home/pyramid.svg?react";
import CodeIcon from "../../assets/home/code.svg?react";
import PointerIcon from "../../assets/home/pointer.svg?react"


const Home = () => {
  return (
    <section className={styles.home}>
        <div className={styles.content}>
            <div className={styles.text}>
                <h1 className={styles.title}>Hello World,<br />I'm Alexey</h1>
                <p className={styles.discription}>
                    I'm a beginner python developer.<br />I study machine learning and<br />also a lot of
                    other interesting skills
                </p>
                <a className={styles.aboutBtn} href="#about">About me
                    <PointerIcon className={styles.PointerIcon} />
                </a>
            </div>
            <img className={styles.deskimage} src={getImageUrl('home/desk.png')} alt="deskimage"/>
        </div>
        <CubeIcon className={styles.CubeIcon} />
        <PyramidIcon className={styles.PyramidIcon} />
        <CodeIcon className={styles.CodeIcon} />
    </section>
  );
}

export default Home
