import React from 'react';
// props 相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中
//
// state组件内的调用，类似组件内共享数据
//
// props是父子组件之间调用，子组件获取父组件的值

class WebSite extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "sirwsl",
            site: "https://www.wslhome.top"
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        );
    }
}
class Name extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}
class Link extends React.Component {
    render() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
}
export default WebSite

