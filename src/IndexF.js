import React from 'react';

class IndexF extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <h2>我是Index(父亲)要给儿子传值</h2>
            <Demo value={123}/>
        </>
    }
}
class Demo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {indexValue:this.props.value};
    }

    render() {
        return <>
            <h1>这是父亲给我的值:{this.state.indexValue}</h1>
        </>
    }
}

export default IndexF;