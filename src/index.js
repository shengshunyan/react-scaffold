import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import('./person').then(function (person) {
    // 渲染页面
    person.sayHello()
})

class Component extends React.PureComponent {
    componentDidMount() {
        axios.get('/api/datasource')
            .then(function (res) {
                console.log(res);
            })
    }

    render() {
        return (
            <div>Hello Parcel</div>
        );
    }
}

ReactDOM.render(<Component />, document.getElementById('root'));