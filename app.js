	requirejs.config({
    		baseUrl:'./js',//加载模块的基础路径
   			paths: {
        		'jquery': 'lib/jquery'
    		}
		});
	requirejs(['jquery','lib/tab'],function($,tab){
		var tabcart = document.querySelector('.tab')
		var cont = document.querySelector('.content')
		tab.init(tabcart,cont)
		// console.log($)
	})