var global=global||{}   //存储为全局变量
console.log(global)
$(function(){
    //pagestart  页数  pagesize  每页的条数  count 总条数
	$("#listMore").click(function(){
		pageStart++
		if(pageStart<global.page){
			getList()
		}else{
			$("#listMore").hide()
		}
		
	})
	//跳转详情页  
	$("#articleList").delegate(".content_one","click",function(){
		var articleId=$(this).attr("articleid")  
		window.location="article.html?articleId="+articleId
	})
   getList()
})
var pageStart=0   //页数
function getList(){

	//  $.ajax({
	// 	 url:"1.json",
	// 	 type:"get",
	// 	 async:false,
	// 	 dataType:"json",
	//      data:{

	// 	 },
	//  }).done(function(result){

	//  })
	//  console.log(listData)
	 var result=listData["listData0"+pageStart]
	 global.count=result.data.count
	 var pageSize=result.data.pageSize
	 var list=result.data.list
	 if(pageStart==0){
		 $("#articleList").html("")
	 }
	 console.log(result)
	 for(var i=0;i<list.length;i++){
		 // 拿到模板里面的所有节点
		 var htmlmodel=$("#itemHtml").html()
		 htmlmodel=htmlmodel.replace("$articleId$",list[i].sysId)
		 htmlmodel=htmlmodel.replace("images/list_img01.jpg",list[i].coverImg)
		 htmlmodel=htmlmodel.replace("$articleTitle$",list[i].title)
		 htmlmodel=htmlmodel.replace("$updateTime$",list[i].creatAt)
		 htmlmodel=htmlmodel.replace("$describe$",list[i].describe)
		 $("#articleList").append(htmlmodel)
		}
		
		global.page=Math.ceil(global.count/pageSize)
		
		
}