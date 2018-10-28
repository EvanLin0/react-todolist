
import React,{Component} from 'react';

import '../assets/css/index.css';

import storage from '../model/storage'; // 引入自定义模块

class Todolist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg:'Todolist.js',
            list:[]
               
           
        }
    }
   addData=(e)=>{
        let title = this.refs.title.value;
        let tempList = this.state.list;
       // 按回车才添加
       if (e.keyCode === 13 && title !== '') {
        tempList.push({
            title:title,
            checked:false
        })
        this.setState({
            list:tempList
        })
        // localStorage.setItem('todolist',JSON.stringify(tempList));
        storage.set('todolist',tempList);

        this.refs.title.value=''; //完成后表单置空
       }
   }
   checkboxChange=(key)=>{
     let tempList = this.state.list;
     tempList[key].checked = !tempList[key].checked;
     this.setState({
         list:tempList
     })
    //  localStorage.setItem('todolist',JSON.stringify(tempList))
    storage.set('todolist',tempList);

   }
   removeData=(key)=>{
       let tempList = this.state.list;
        tempList.splice(key,1)
        this.setState({
            list:tempList
        })
        // localStorage.setItem('todolist',JSON.stringify(tempList));
        storage.set('todolist',tempList);

   }
   componentDidMount(){
    //  let todolist = JSON.parse(localStorage.getItem('todolist'));
        let todolist =  storage.get('todolist');

       if (todolist) {
           this.setState({
               list:todolist
           })
       }
   }
    render () {
        return (
            <div className="todolist-wrap">
               <header className="title">Todolist:<input type="text" ref="title" onKeyUp={this.addData}/></header>
               <h2>待办事项</h2>
               <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if (!value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                        {value.title}
                                        ----<button onClick={this.removeData.bind(this,key)}>删除</button>


                                    </li>
                                )
                            }
                            
                        })
                    }
                </ul>
               <h2>已完成事项</h2>
               <hr/>
               <ul>
                   {
                       this.state.list.map((value,key)=> {
                           if (value.checked) {
                               return (
                                   <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                        {value.title}
                                        ----<button onClick={this.removeData.bind(this,key)}>删除</button>

                                   </li>
                               )
                           }
                       })
                   }
               </ul>
            </div>
        )
    }
}

export default Todolist;