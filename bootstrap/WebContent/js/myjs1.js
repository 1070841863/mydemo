var path = "";
$(function() {

	path = $("#path").val();
	// 分页并查询
	getAllByPage();
	// 增加
	myadd();
	// 修改
	myupp();
	// 删除
	mydel();
	// 行内修改(姓名)
	getChangeName();
	// 行内修改部门
	getChangePart();
	// 行内修改性别
	getChangeSex();
	//修改爱好
	getChangeHob();
});


/****************************变文本框修改(姓名列)**********************************/
function getChangeName() {
	$("body").on("click", "#tb_departments .xname", function() {

		// 得到人要修改的的编号
		var id = $(this).parent().parent().find("td:eq(1)").text();
		// 修改
		$(this).editable({
			type : "text", // 编辑框的类型。支持text|textarea|select|date|checklist等
			title : "用户名", // 编辑框的标题
			disabled : false, // 是否禁用编辑
			emptytext : "空文本", // 空值的默认文本
			mode : "popup", // 编辑框的模式：支持popup和inline两种模式，默认是popup
			validate : function(value) { // 字段验证
				if (!$.trim(value)) {
					return '不能为空';
				} else {
					$.ajax({
						url : path + 'emp.do?method=uppname',
						dataType : 'json',
						data : {
							ename : value,
							eid : id
						},
						type : 'post',
						success : function(mydata) {
							if (mydata == 1) {
								layer.msg('修改成功!!', {
									icon : 1
								});
							}
						}
					});
				}
			}
		});

	});
}


//把字符串变变成json格式
function strToJson(str){
	var json = eval('(' + str + ')');
	return json;
} 



/**************************修改所在部门(下拉框)************************************/ 
function getChangePart() {

	$("body").on("click", "#tb_departments .xpname", function() {
		// 得到人要修改的的编号
		var id = $(this).parent().parent().find("td:eq(1)").text();
		
	   //得到下拉框
		$.ajax({
			url:path+'emp.do?method=alldept',
			dataType:'json',
			data:'',
			type:'post',
			success:function(mydata)
			{
				 var xdata="";
				 var str='';
				 str+="[";
				 $.each(mydata,function(index,xx){
					str+="{ value: "+xx.value+", text:\""+xx.text+"\"},";
				 });	
				 xdata=str.substring(0,str.length-1);
			     xdata+="]";
			     $("#dept").val(xdata);
			}
		});
		
		// 变下拉框修改
		$(this).editable({
			type : "select", // 编辑框的类型。支持text|textarea|select|date|checklist等
			title : "所在部门", // 编辑框的标题
			disabled : false, // 是否禁用编辑
			emptytext : "空文本", // 空值的默认文本
			source: strToJson($("#dept").val()), //动态形成下拉框
			mode : "popup", // 编辑框的模式：支持popup和inline两种模式，默认是popup
			validate : function(value) { // 字段验证
				if (!$.trim(value)) {
					return '不能为空';
				} else {
					
					
					$.ajax({
						url : path + 'emp.do?method=uppdept',
						dataType : 'json',
						data : {
							pid : value,
							eid : id
						},
						type : 'post',
						success : function(mydata) {
							if (mydata == 1) {
								layer.msg('修改成功!!', {icon : 1});
							}
						}
					});
				}
			}
		});
	});
}


/****************************修改性别（下拉框）*******************************************/
function getChangeSex() {

	$("body").on("click", "#tb_departments .xsex", function() {
		// 得到人要修改的的编号
		var id = $(this).parent().parent().find("td:eq(1)").text();
	
		// 变下拉框修改
		$(this).editable({
			type : "select", // 编辑框的类型。支持text|textarea|select|date|checklist等
			title : "性别", // 编辑框的标题
			disabled : false, // 是否禁用编辑
			emptytext : "空文本", // 空值的默认文本
			source: [{value:1,text:"男"},{value:0,text:"女"}], //动态形成下拉框
			mode : "popup", // 编辑框的模式：支持popup和inline两种模式，默认是popup
			validate : function(value) { // 字段验证
				if (!$.trim(value)) {
					return '不能为空';
				} else {
					
					$.ajax({
						url : path + 'emp.do?method=uppsex',
						dataType : 'json',
						data : {
							esex : value,
							eid : id
						},
						type : 'post',
						success : function(mydata) {
							if (mydata == 1) {
								layer.msg('修改成功!!', {icon : 1});
							}
						}
					});
				}
			}
		});
	});
}





//修改爱好
function getChangeHob() {

	$("body").on("click", "#tb_departments .xhob", function() {
		// 得到人要修改的的编号
		var id = $(this).parent().parent().find("td:eq(1)").text();
	
		// 变下拉框修改
		$(this).editable({
			type : "checklist", // 编辑框的类型。支持text|textarea|select|date|checklist等
			title : "爱好", // 编辑框的标题
			disabled : false, // 是否禁用编辑
			emptytext : "空文本", // 空值的默认文本
			separator:",",
			source: [{value:"上网",text:"上网"},{value:"聊天",text:"聊天"},{value:"睡觉",text:"睡觉"},{value:"看书",text:"看书"}], //动态形成下拉框
			mode : "popup", // 编辑框的模式：支持popup和inline两种模式，默认是popup
			validate : function(value) { // 字段验证
				if (!$.trim(value)) {
					return '不能为空';
				} else {
					var s="";
					var t=value;
					for(var i=0;i<t.length;i++)
						{
						   s+=t[i]+"、";
						}
					
					$.ajax({
						url : path + 'emp.do?method=uppmyhob',
						dataType : 'json',
						data : {
							ehob : s,
							eid : id
						},
						type : 'post',
						success : function(mydata) {
							if (mydata == 1) {
								layer.msg('修改成功!!', {icon : 1});
							}
						}
					});
					
				}
			}
		});
	});
}




function getAllByPage() {
	$('#tb_departments').bootstrapTable(
			{
				url : path + 'emp.do?method=all', // 请求后台的URL（*）
				method : 'get', // 请求方式（*）
				dataType : 'json',
				toolbar : '#toolbar', // 工具按钮用哪个容器
				striped : true, // 是否显示行间隔色
				pagination : true, // 是否显示分页（*）

				queryParams : function(params) {
					var temp = { // 这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
						limit : params.limit, // 页面大小(每一页要显示多少条)
						offset : params.offset
					// 从数据库第几条记录开始
					};
					return temp;
				},// 传递参数（*）

				sidePagination : "server", // 分页方式：client客户端分页，server服务端分页（*）
				pageNumber : 1, // 初始化加载第一页，默认第一页
				pageSize : 5, // 每页的记录行数（*）
				pageList : [ 5, 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
				showColumns : true, // 是否显示所有的列
				showRefresh : true, // 是否显示刷新按钮
				minimumCountColumns : 1, // 最少允许的列数
				clickToSelect : true, // 是否启用点击选中行

				height : $(window).height() - 100, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
				uniqueId : "eid", // 每一行的唯一标识，一般为主键列
				showToggle : true, // 是否显示详细视图和列表视图的切换按钮
				cardView : false, // 是否显示详细视图
				detailView : false, // 是否显示父子表
				columns : [
						{
							checkbox : true
						},
						{
							field : 'eid',
							title : '员工编号'
						},
						{
							field : 'ename',
							title : '员工姓名',
							formatter : function(value, row, index) {
								var e = '<span class="xname">' + value
										+ '</span>';
								return e;
							}
						},
						{
							field : 'pname',
							title : '所在部门',
							formatter : function(value, row, index) {
								var e = '<span class="xpname">' + value
										+ '</span>';
								return e;
							}
						},
						{
							field : 'sex',
							title : '性别',
							formatter : function(value, row, index) {
								var e = '<span class="xsex">' + value
										+ '</span>';
								return e;
							}
						},

						{
							field : 'ehob',
							title : '爱好',
							formatter : function(value, row, index) {
									var e = '<span class="xhob">' + value
											+ '</span>';
									return e;
							}
						},
						{
							title : '操作',
							field : 'eid',
							align : 'center',
							formatter : function(value, row, index) {
								var e = '<a href="#"  onclick="edit(\'' + value
										+ '\')">编辑</a> ';
								var d = '<a href="#"  onclick="del(\'' + value
										+ '\')">删除</a> ';
								return e + d;
							}
						} ]
			});
}

function edit(obj) {
	alert(obj);
}

function del(obj) {
	alert(obj);
}

function myadd() {
	$("#btn_add").click(function() {
		alert("增加动作");
	});

}

function myupp() {
	$("#btn_edit").click(
			function() {
				// 得到你要修改的记录的编号(数组)！
				var tt = $.map($('#tb_departments').bootstrapTable(
						'getSelections'), function(row) {
					return row.uid;
				});
				if (tt.length > 1) {
					alert("每次只能修改一个");
				} else if (tt.length == 0) {
					alert("请选择一个你要修改的对象");
				} else {
					alert(tt[0]);
					alert("修改对象");
				}

			});

}

function mydel() {
	$("#btn_delete").click(
			function() {

				// 得到你要删除的记录的编号(数组)！
				var tt = $.map($('#tb_departments').bootstrapTable(
						'getSelections'), function(row) {
					return row.uid;
				});
				if (tt.length <= 0) {
					alert("请选择一个你要删除的对象");
				} else {
					alert(tt);
					alert("删除动作");
				}

			});

}
