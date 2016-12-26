;(function($){
	function init(){
		username.focus();
		bind()
		
	}
	function bind(){
		$("#username").on("input",inputIsNull)
		$("#pwd").on("input",inputIsNull)
		$("#btn").on("touchend",verifyInput)
	}
	function inputIsNull(){
		var username = $("#username").val(),
			pwd = $("#pwd").val(),
			$btn = $("#btn");
			console.log(username)
		if(username.length == 0 || pwd.length == 0){
			$btn.removeClass("login-color")
		}else{
			$btn.addClass("login-color")
		}
	}
	function verifyInput(){
		var username = $("#username").val(),
			pwd = $("#pwd").val(),
			$btn = $("#btn");
		var r1=/^1[34578]\d{9}$/,
			r2=/^\w+\.?@[a-z0-9]+\.(com|cn|net|com.cn|org|edu)$/;
			if(pwd.length >= 6){
				if(r1.test(username) || r2.test(username)){
					location.href="index.html";
				}else{
					var txt2 = "您的用户名和密码不匹配";
						myAlert(txt2)
				}
			}else{
				var txt = "请您输入您的密码";
				myAlert(txt)
				$("#pwd").focus();
			}
		

	}
	function myAlert(txt){
		var str="",
			str2="";
		str += '<div class="mask"></div>';
		$("body").append(str);
		str2 += '<div class="myAl">'+
					'<p>'+txt+'</p>'+
					'<span>确定</span>'+
				'</div>';
		$(".mask").append(str2);
		$(".myAl").on("touchend","span",function(){
			$(".myAl").remove();
			$(".mask").remove();
		})
	}
	init()
})(Zepto);