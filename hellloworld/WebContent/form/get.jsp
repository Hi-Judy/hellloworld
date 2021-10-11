<%@page import="co.yedam.common.EmpDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		EmpDAO dao = new EmpDAO();
		
		String id = request.getParameter("employeeID"); //userID=guest
	    String pw = request.getParameter("phone"); //userPW=1234
	    String salary = request.getParameter("salary");
	    
	    dao.updateEmp(id,pw,salary);
	    out.println("<h3>정상적으로 수정</h3>");
	%>
</body>
</html>