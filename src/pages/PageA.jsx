import React from 'react';
import styles from './pageA.scss';

function PageA() {
    return (
        <div className={styles['page-a']}>
            我是一段文字11
            {/* <p className="paragraph">我是另一段文字22</p> */}
        </div>
    );
}

export default PageA;
