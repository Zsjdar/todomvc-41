;(function () {
	const todos = [
		{
			id: 1,
			title: '吃饭1',
			done: true
		},
		{
			id: 2,
			title: '吃饭2',
			done: false
		},
		{
			id: 3,
			title: '吃饭3',
			done: true
		},
		{
			id: 4,
			title: '吃饭4',
			done: false
		}
	]
  new Vue({
	  el: '#todoapp',
	  data: {
		  todos,
		  inputText: '',
		  currentEdit: null,
          backTitle: ''
	  },
	  methods: {
        addTodo (e) {
			//拿到文本框中数据
			const {inputText,todos} = this
			//非空校验
			
			
			if(this.inputText.trim().length === 0){
				return
			}
			//处理获取唯一的id
			const lastItem = todos[todos.length - 1]
			const id = lastItem?lastItem.id + 1:1
			//添加到数组中
			this.todos.push({
				id,
				title: this.inputText,
				done: false
			})
			//清空文本框
			this.inputText = ''
		},
		removeTodo(index){
			this.todos.splice(index,1)
		},
		getEditing(item){
			//将currentEdit赋值为当前双击的任务项
			this.currentEdit = item
			this.backTitle = item.title
		},
		saveEdit(item,index){
			//判断是否为空
			if(item.title.trim().length === 0){
              this.todos.splice(index,1)
			}else{
				this.currentEdit = null
			}
		},
		//ESC取消编辑
		//取消编辑的时候同时触发了失去焦点的事件了
		cancelEdit(){
			//让任务项的title回归原始数据
			//去除编辑样式
			//这里一旦去除样式，则会导致blur的事件触发
			this.currentEdit.title = this.backTitle
			this.currentEdit = null
		}
	  }
  })   
})();
