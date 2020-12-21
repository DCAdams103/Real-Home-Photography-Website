import React from 'react'
import Image1 from '../../images/image1.JPG'
import Image2 from '../../images/image2.JPG'
import styles from '../../styles/MainContent.module.css';

function Welcome(props)
{
    return <img className={styles.image} src={props.src} alt="" />;
}

function MainContent()
{
    return (
        <div className={styles.middiv}>

            <Welcome src={Image1} />
            <Welcome src={Image2} />

        </div>
    )
}

export default MainContent;