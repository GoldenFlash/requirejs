define(function(){
	var tabC = function(tab,cont){
		that =this
		this.index =1
		this.tab = tab
		this.tabCart = tab.getElementsByTagName('li')
		this.content = cont
		this.contentCart = this.content.getElementsByTagName('li')
		this.tab.addEventListener('click',function(e){
			console.log(that.tabCart.length)
			
			// 找到点击项的索引值
			that.index = [].indexOf.apply(that.tabCart,[e.target])
			console.log(that.index)
			// for(var i=0;i<tabCart.length;i++){
			// 	if(e.target==tabCart[i]){
			// 		index = i
			// 	}
			// }
			// 给点击项加上active类
			that.tabCart[that.index].classList.add("active")
			// 去除其他选项上的active类
			for(var i=0;i<that.tabCart.length;i++){
				if(that.tabCart[i] != that.tabCart[that.index]){
					that.tabCart[i].classList.remove("active")
					// console.log(1)
				}
			}
				// 给点击项相应的内容加上current类
			that.contentCart[that.index].classList.add("current")
			// 去除其他选项上的current类
			for(var i=0;i<that.contentCart.length;i++){
				if(that.contentCart[i] != that.contentCart[that.index]){
					that.contentCart[i].classList.remove("current")
					
				}
			}
		})
	}
	var tabInit = (function(){
		return{
			init:function(tab,content){
				new tabC(tab,content)
			}
		}
	})()
	return tabInit
})
