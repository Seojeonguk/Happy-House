$(document).ready(function() {
	
	// 로그인 상태에 따른 상단 버튼 변화
	var myID = localStorage.getItem('loginID');
	
	if(myID != null) { // 즉 뭔가 값이 있다면 = 로그인 상태면
		// 회원 가입 버튼과 로그인 버튼 없애고
		document.querySelector("#nav-signupBtn").setAttribute("style",
				"display: none ");
		document.querySelector("#nav-loginBtn").setAttribute("style",
				"display: none ");
		// 로그아웃 버튼과 회원정보 버튼 살리기
		document.querySelector("#nav-logoutBtn").setAttribute("style",
				"display: ");
		document.querySelector("#nav-meminfoBtn").setAttribute("style",
				"display: ");
	} else {
		// 회원가입 버튼과 로그인 버튼 살리기
		document.querySelector("#nav-signupBtn")
				.setAttribute("style", "display: ");
		document.querySelector("#nav-loginBtn").setAttribute("style", "display: ");
		// 로그아웃 버튼과 회원정보 버튼 없애기
		document.querySelector("#nav-logoutBtn").setAttribute("style",
				"display: none ");
		document.querySelector("#nav-meminfoBtn").setAttribute("style",
				"display: none ");
	}
	
	// 로그아웃
	$("#nav-logoutBtn").on("click",function() {
		localStorage.removeItem('loginID');
		
		// 회원가입 버튼과 로그인 버튼 살리기
		document.querySelector("#nav-signupBtn")
				.setAttribute("style", "display: ");
		document.querySelector("#nav-loginBtn").setAttribute("style", "display: ");
		// 로그아웃 버튼과 회원정보 버튼 없애기
		document.querySelector("#nav-logoutBtn").setAttribute("style",
				"display: none ");
		document.querySelector("#nav-meminfoBtn").setAttribute("style",
				"display: none ");
	});
	
	
	load_si_data();
	init_gu();
	init_dong();
	$("select[name='si']").change(function() {
		load_gu_data();
	});

	$("select[name='gu']").change(function() {
		load_dong_data();
	});

	$("select[name='dong']").change(function() {
		$("#searching-form").submit();
	});
});