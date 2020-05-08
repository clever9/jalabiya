<template>
  <f7-app :params="f7params" >

  <!-- Left panel with cover effect-->
  <f7-panel left cover theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-block>Left panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Right panel with reveal effect-->
  <f7-panel right reveal theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Right Panel"></f7-navbar>
        <f7-block>Right panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/"></f7-view>


    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="login-view" >
      
      <f7-view style="position:relative">

        <f7-page login-screen style="padding: 15px;margin: 0px; font-family: cairo;">
        <f7-link login-screen-close="#login-view"  style="background-color: #af9a82;border-radius: 25px;width: 40px; height: 40px;border: 3px solid #eee;position: absolute;top: 0px; right: 15px; left:10px" >
          <!-- <p style="font-size: 24px;color: #fff;margin: 20% 35%;font-family: cairo">x</p> -->
          <i class="f7-icons" style="margin: 3px 0px;color: #eee;font-size: 23px">multiply</i>
          <!-- <i class="f7-icons" style="font-size: 24px;color: #fff;margin: 20% 35%;font-family: cairo">person_fill</i> -->
        </f7-link>
        <br>
        <br>
          <f7-login-screen-title style="">
            <img  src="/static/logo.PNG" style="text-align: center" width="100" height="100"/><br>
            <p style="line-height: 0px;font-size: 20px;color: #6a767a">تسجيل الدخول</p>
          </f7-login-screen-title><br>
        <br>
          <f7-list style="padding: 0px;margin: 0px auto" dir="rtl">
            <f7-list-input
              type="text"
              name="username"
              placeholder="أدخل إسم المستخدم"
              :value="username"
              @input="username = $event.target.value"
            >
              <f7-icon  slot="media" style="text-align: center" ><i class="f7-icons" style="color: #af9a82;padding: 10px;font-size: 28px" dir="rtl">person_fill</i></f7-icon>
            </f7-list-input>
            <f7-list-input
              type="text"
              name="username"
              placeholder="أدخل كلمة المرور"
              :value="username"
              @input="username = $event.target.value"
            >
              <f7-icon  slot="media" style="text-align: center" ><i class="f7-icons" style="color: #af9a82;padding: 10px;font-size: 28px" dir="rtl">lock_fill</i></f7-icon>
            </f7-list-input>
          </f7-list>
          <f7-list>
            <f7-button title="Sign In" @click="alertLoginData" fill large round style="margin: 0px 25px">دخول</f7-button><br>
            <!-- <f7-block-footer> -->
              <f7-button title="Sign In" @click="openReset" fill large round style="margin: 5px 25px;background-color: #1f4068">نسيت كلمة المرور</f7-button>
              <f7-button title="Sign In" @click="openRegister" fill large round style="margin: 5px 25px;background-color: #1f4068">إنشاء حساب جديد</f7-button>
            <!-- </f7-block-footer> -->
          </f7-list>
          <br>
          <br>
        </f7-page>
      </f7-view>
    </f7-login-screen>
    <!-- register view -->
    <f7-login-screen id="register-view" >
      
      <f7-view style="position:relative">

        <f7-page login-screen style="padding: 15px;margin: 0px; font-family: cairo;">
        <f7-link login-screen-close="#register-view"  style="background-color: #af9a82;border-radius: 25px;width: 40px; height: 40px;border: 3px solid #eee;position: absolute;top: 0px; right: 15px; left:10px" >
          <!-- <p style="font-size: 24px;color: #fff;margin: 20% 35%;font-family: cairo">x</p> -->
          <i class="f7-icons" style="margin: 3px 0px;color: #eee;font-size: 23px">multiply</i>
          <!-- <i class="f7-icons" style="font-size: 24px;color: #fff;margin: 20% 35%;font-family: cairo">person_fill</i> -->
        </f7-link>
        <br>
        <br>
          <f7-login-screen-title style="">
            <img  src="/static/logo.PNG" style="text-align: center" width="100" height="100"/><br>
            <p style="line-height: 0px;font-size: 20px;color: #6a767a">تسجيل جديد</p>
          </f7-login-screen-title><br>
          <!-- <p style="text-align: center;color: #d63447;font-family: cairo-bold">Username & Password are incorrect</p> -->
        <br>
          <f7-list style="padding: 0px;margin: 0px auto" dir="rtl">
            <f7-list-input
              type="text"
              name="username"
              placeholder="أدخل إسم المستخدم"
              :value="username"
              @input="username = $event.target.value"
            >
              <f7-icon  slot="media" style="text-align: center" ><i class="f7-icons" style="color: #af9a82;padding: 10px;font-size: 28px" dir="rtl">person_fill</i></f7-icon>
            </f7-list-input>
            <f7-list-input
              type="text"
              name="username"
              placeholder="أدخل البريد الإلكتروني"
              :value="username"
              @input="username = $event.target.value"
            >
              <f7-icon  slot="media" style="text-align: center" ><i class="f7-icons" style="color: #af9a82;padding: 10px;font-size: 28px" dir="rtl">at</i></f7-icon>
            </f7-list-input>
            <f7-list-input
              type="password"
              name="username"
              placeholder="أدخل كلمة المرور"
              :value="username"
              @input="username = $event.target.value"
            >
              <f7-icon  slot="media" style="text-align: center" ><i class="f7-icons" style="color: #af9a82;padding: 10px;font-size: 28px" dir="rtl">lock_fill</i></f7-icon>
            </f7-list-input>
            <f7-list-input
              type="password"
              name="username"
              placeholder="تأكيد كلمة المرور"
              :value="username"
              @input="username = $event.target.value"
            >
              <f7-icon  slot="media" style="text-align: center" ><i class="f7-icons" style="color: #af9a82;padding: 10px;font-size: 28px" dir="rtl">lock_fill</i></f7-icon>
            </f7-list-input>
          </f7-list>
          <f7-list>
            <f7-button title="Sign In" @click="alertLoginData" fill large round style="margin: 0px 25px">تسجيل</f7-button><br>
            <!-- <f7-block-footer> -->
              <f7-button title="Sign In" @click="backToLogin" fill large round style="margin: 5px 25px;background-color: #1f4068">الرجوع لتسجيل الدخول</f7-button>
            <!-- </f7-block-footer> -->
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
    <!-- end of register view -->
    <!-- start of reset-view -->
        <f7-login-screen id="reset-view" >
      
      <f7-view style="position:relative">

        <f7-page login-screen style="padding: 15px;margin: 0px; font-family: cairo;">
        <f7-link login-screen-close="#reset-view"  style="background-color: #af9a82;border-radius: 25px;width: 40px; height: 40px;border: 3px solid #eee;position: absolute;top: 0px; right: 15px; left:10px" >
          <!-- <p style="font-size: 24px;color: #fff;margin: 20% 35%;font-family: cairo">x</p> -->
          <i class="f7-icons" style="margin: 3px 0px;color: #eee;font-size: 23px">multiply</i>
          <!-- <i class="f7-icons" style="font-size: 24px;color: #fff;margin: 20% 35%;font-family: cairo">person_fill</i> -->
        </f7-link>
        <br>
        <br>
          <f7-login-screen-title style="">
            <img  src="/static/logo.PNG" style="text-align: center" width="100" height="100"/><br>
            <p style="line-height: 0px;font-size: 20px;color: #6a767a">إستعادة كلمةالمرور</p>
          </f7-login-screen-title><br>
          <!-- <p style="text-align: center;color: #d63447;font-family: cairo-bold">Username & Password are incorrect</p> -->
        <br>
          <f7-list style="padding: 0px;margin: 0px auto" dir="rtl">
            <f7-list-input
              type="text"
              name="username"
              placeholder="أدخل البريد الإلكتروني"
              :value="username"
              @input="username = $event.target.value"
            >
              <f7-icon  slot="media" style="text-align: center" ><i class="f7-icons" style="color: #af9a82;padding: 10px;font-size: 28px" dir="rtl">at</i></f7-icon>
            </f7-list-input>
          </f7-list>
          <f7-list>
            <f7-button title="Sign In" @click="alertLoginData" fill large round style="margin: 0px 25px">استعادة</f7-button><br>
            <!-- <f7-block-footer> -->
              <f7-button title="Sign In" @click="backToLogin" fill large round style="margin: 5px 25px;background-color: #1f4068">الرجوع لتسجيل الدخول</f7-button>
            <!-- </f7-block-footer> -->
          </f7-list>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </f7-page>
      </f7-view>
    </f7-login-screen>
    <!-- end of reset-view -->
  </f7-app>
</template>
<script>

  import routes from '../js/routes.js';

  export default {
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          name: 'jalabiya', // App name
          theme: 'md', // Automatic theme detection
          navbar: {
            hideOnPageScroll: true,
            mdCenterTitle: true
          },
          // App routes
          routes: routes,
        },
        // Login screen data
        username: '',
        password: '',
      }
    },
    methods: {
      alertLoginData: function() {
        // this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password, () => {
           this.$f7.preloader.show();
          setTimeout(() => {
            this.$f7.preloader.hide();
            this.$f7.loginScreen.close('#login-view');
          }, 3000)
          
        // });
      },
      openRegister: function() {
        this.$f7.loginScreen.close('#login-view');
        this.$f7.loginScreen.open('#register-view');
      },
      openReset: function() {
        this.$f7.loginScreen.close('#login-view');
        this.$f7.loginScreen.open('#reset-view');
      },
      backToLogin: function() {
        this.$f7.loginScreen.close();
        this.$f7.loginScreen.open('#login-view');
      },
      closeLogin: function() {
        // this.$f7.loginScreen.close('#login-view');
        this.$f7.loginScreen.close();
      }
    },
    mounted() {
      this.$f7ready((f7) => {

        // Call F7 APIs here
      });
    }
  }
</script>