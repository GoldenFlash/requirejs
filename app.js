	requirejs.config({
    		baseUrl:'./js',
   			paths: {
        		'jquery': 'lib/jquery'
    		}
		});
	requirejs(['lib/tab'],function(tab,){
		var tabcart = document.querySelector('.tab')
		var cont = document.querySelector('.content')
		tab.init(tabcart,cont)
		// console.log($)
	})