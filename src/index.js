import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//documet.getElementById(‘root’)是获取public文件夹下的index.html文件中id为root的节点
const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render是用来渲染的, 它将对应的元素插入到相应的节点中。
// 变量表示dom
// const element = <h1 >this is a demo=>fuck you</h1>;
// 函数表示dom,可以封装到文件再引入进来
function Hello() {
    return <h1>Hello World!</h1>;
}
function Name(props) {
    return <h1>姓名：{props.name}</h1>;
}
function Age(props){
    return <h1>年龄：{props.age}</h1>
}
function Sex(props){
    return <h1>性别：{props.temp}</h1>
}
// 使用类的方式构建dom,constructor是构造器，初始化的数据一般都在这，render()是将这个类中所有要渲染的东西都放在这里渲染、返回
class Index extends React.Component{
    //构造器
    constructor() {
        super();
        this.state = {count : 2};//state表示这个组件的状态，他可以在初始化时保存一些值，其他时间修改会触发渲染机制
    }

    render() {
        return <h1>count:{this.state.count}</h1>
    }
}


root.render(
  <React.StrictMode>
      {/*每个插件的目的都是写虚拟dom,操作请求后数据渲染到虚拟dom最后来到这里进行最终加工成真实dom*/}
      {/*加入element后下列hello失效*/}
      {/*    <h1>hello world</h1>,*/}
      <Hello></Hello>
      <Name name='sirwsl'/>
      <Age age='24'/>
      <Sex temp= '男'/>
      <Index></Index>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
