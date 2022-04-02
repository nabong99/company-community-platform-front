<template lang="">
 	<!-- 컨텐츠 영역 -->
	<div id="contentWrap">
		<div id="topVisualWrap">
			<div class="topVisual">
				<p class="tit01">고객 중심 xx서비스 제공을 위한</p>
				<p class="tit02">인공지능 클라우드 XXX 플랫폼 <span></span></p>
			</div>
		</div>

		<!-- 컨텐츠영역 -->
		<div id="Content">
			<h2>
				<span><b>로그인</b></span>
			</h2>
			<div class="login_box">
				<div class="login_area_wrap">	
					<div class="login_area">
						<div class="login_inp id">
							<label for="inp_id">아이디</label>
							<span class="input_txt">
								<input type="text" id="inp_id" class="ime_en" v-model="userParams.userId">
							</span>
						</div>

						<div class="login_inp">
							<label for="inp_pw">패스워드</label>
							<span class="input_txt">
								<input type="password" id="inp_pw" v-model="userParams.userPassword">
							</span>
						</div>
											
						<a href="javascript:void(0)" @click="doLogin"  class="btn_orange login_btn">로그인</a> 
									
						<div class="btm_cont"> 
								<div class="link_area">
									<router-link to="searchUserInfo"> 
										<a class="list_link">아이디/비번찾기</a>
									</router-link>
									<a href="" @click="signUp" class="list_link">회원가입</a>
								</div>
						</div>

					</div>
				</div>				
			</div>
		</div><!-- //Content -->      





	</div><!-- //contentWrap -->
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {login} from "@/api/user"
const userStore = 'userStore';

export default {
	name : "LoginPage",
	data(){
		return{
				// userId : '',
				// userPassword : ''
				userParams : {
					userId : '',
				    userPassword : ''
				},
		}
	},
	

	methods :{
		//...mapActions(userStore, ['login', 'getInfo']),
		doLogin() {
			const userInfo = {
				userId : this.userId,
				userPassword : this.userPassword
			}
			//this.login(userInfo)
			login(this.userParams)
			.then(response => {
				console.log("response.data.devInquryRegist", response.data.result);
				alert(response.data.result);
				if(response.data.result=="200"){
					alert("로그인 되었습니다.");
				}else if(response.data.result=="worng_password"){
					alert("비밀번호가 올바르지 않습니다.");
				}else if(response.data.result=="no_id"){
					alert("아이디를 찾을 수 없습니다.");
				}

				
				
				//alert("inqury >>"+response.data.vo.resultSn);
				
				//this.goView(response.data.resultSn);
			}).catch(error => {
				alert("로그인이 실패하였습니다.\r\n관리자에게 문의하여주시기 바랍니다.");
				alert(this.userParams.userId);
				alert(this.userParams.userPassword);
				
			});
		},
		signUp(){
			this.$router.push({
				path: "/user/UserRegist",
				query: {
				
				}
			});
		}
		
	}
}


</script>
<style lang="">
    
</style>