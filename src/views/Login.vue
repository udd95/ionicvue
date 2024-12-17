<template>
    <ion-page>
      <ion-content :fullscreen="true" class="no-scroll">
        <div class="main-bg">
          <img src="../assets/main-bg.jpeg" alt="">
          <ion-button expand="block" color="warning" class="login-btn" @click="kakaoLogin"><ion-icon :icon="chatbubble"></ion-icon>
            카카오톡 로그인</ion-button>
        </div>
      </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonButton, IonContent ,IonIcon } from '@ionic/vue';
import { chatbubble } from 'ionicons/icons';
import router from "@/router";

// 카카오 로그인 함수
const kakaoLogin = () => {
  if (window.Kakao) {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image",
      success: () => {
        getKakaoAccount();
        router.push("/tabs/");
      },
      fail: (error) => {
        console.error("카카오 로그인 실패:", error);
      },
    });
  } else {
    console.error("카카오 SDK가 로드되지 않았습니다.");
  }
};

// 카카오 계정 정보 가져오기
const getKakaoAccount = () => {
  if (window.Kakao) {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: (res) => {
        const kakao_account = res.kakao_account;
        const nickname = kakao_account.profile.nickname;
        const profile_image = kakao_account.profile_image;
        console.log("닉네임:", nickname);
        console.log("이미지:", profile_image);

        // 로그인 처리 구현
        alert("로그인 성공!");
      },
      fail: (error) => {
        console.error("카카오 계정 정보 가져오기 실패:", error);
      },
    });
  }
};

// 카카오 로그아웃
const kakaoLogout = () => {
  if (window.Kakao) {
    window.Kakao.Auth.logout((res) => {
      console.log("로그아웃 성공:", res);
    });
  }
};
</script>
<style lang="scss">
.no-scroll {
  --overflow: hidden;
  .main-bg {
    position: relative;
    img {
      width: 100vw;
      height: 100vh
    }
    .login-btn {
      width: 60%;
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%); /* 가운데 정렬 */
      z-index: 99;
      --background: #ccc;
      font-weight: 400;
      --ion-color-contrast :#53271c !important;
      .md {
        margin-right: 8px;
        color: #53271c;
      }
    }
  }
}

</style>
  