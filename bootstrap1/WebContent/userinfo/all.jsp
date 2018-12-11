<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- bootStrap常规样式 -->
<link rel="stylesheet" href="${pageContext.request.contextPath }/css/bootstrap.min.css" type="text/css"></link>
<!-- 列表插件样式 -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap-editable.css" type="text/css"></link>
<link rel="stylesheet" href="${pageContext.request.contextPath }/css/bootstrap-table.css" type="text/css"></link>

<!-- bootStrap常用js -->
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.2.1.min.js"></script>
<script src="${pageContext.request.contextPath }/js/bootstrap.min.js"></script>
<!-- 列表插件js -->
<script src="${pageContext.request.contextPath }/js/bootstrap-table.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-editable.min.js"></script>
<script src="${pageContext.request.contextPath }/js/bootstrap-table-zh-CN.js"></script>

<!-- layui及自己定义的js -->
<script src="${pageContext.request.contextPath }/layui/layui.all.js"></script>
<script src="${pageContext.request.contextPath }/js/userinfo/all.js"></script>
<title>Insert title here</title>
</head>
<body>
<input type="hidden" name="sex" id="sex" value="男">
    <input type="hidden" name="age" id="age" value="20">
    
    
     <div class="panel panel-default">
            <div class="panel-heading">查询条件</div>
            <div class="panel-body">
                <form id="formSearch" class="form-horizontal">
                    <div class="form-group" style="margin-top:15px">
                        <label class="control-label col-sm-1" for="txt_search_departmentname">部门名称</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" id="txt_search_departmentname">
                        </div>
                        <label class="control-label col-sm-1" for="txt_search_statu">状态</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" id="txt_search_statu">
                        </div>
                        <div class="col-sm-4" style="text-align:left;">
                            <button type="button" style="margin-left:50px" id="btn_query" class="btn btn-primary">查询</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>       
    
    
    
    
    <!-- 菜单  -->
    <div id="toolbar" class="btn-group">
            <button id="btn_add" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
            </button>
            <button id="btn_edit" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
            </button>
            <button id="btn_delete" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
            </button>
    </div>
    <!-- 菜单结束 -->
    
    
    <input type="hidden"   id="path" value="${pageContext.request.contextPath }/">
    <table id="tab"></table>  
</body>
</html>