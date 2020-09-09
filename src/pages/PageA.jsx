import React from 'react';
import styles from './pageA.scss';

function PageA() {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };

    console.log(obj2);

    return (
        <div className={styles['page-a']}>
            我是一段文字11
            {/* <p className="paragraph">我是另一段文字22</p> */}
        </div>
    );
}

export default PageA;
