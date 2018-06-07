import React from 'react';
import ReactDom from 'react-dom';
import { fn2 } from './util';

import '../style/index.less';

class Demo extends React.Component{
    render(){
        fn2();
        return (
            <div className='box'>{this.props.test}</div>
        )
    }
}

ReactDom.render(
    <Demo test="This is a text" />,
    document.querySelector('.container')
)