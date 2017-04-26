<template>
  <div class="log">
    <transition name="move">
      <i-form v-if="logCard" :key="logCard" class="login" ref="logIn" :model="logIn" :rules="logInRules">
        <Form-item>
          <Button class="to-log-in" type="primary" @click="logCard = false">注  册</Button>
          <br>
          <span class="go-other">若已经有账号，请点击切换注册</span>
        </Form-item>
        <div class="divider"></div>
        <Form-item prop="user">
          <p class="user-name">用户名：</p>
          <i-input type="text" v-model="logIn.user" placeholder="用户名"></i-input>
        </Form-item>
        <Form-item prop="password">
          <p class="user-name">密码：</p>
          <i-input type="password" v-model="logIn.password" placeholder="密码"></i-input>
        </Form-item>
        <Form-item class="foot">
          <Checkbox v-model="logIn.remember"><span class="remember-me">记住我</span></Checkbox>
          <Button class="register" type="primary" @click="logInSubmit('logIn')"></Button>
        </Form-item>

        <span @click="closeIn" class="close">
          <Icon type="ios-close-outline"></Icon>
        </span>
      </i-form>

      <i-form v-else :key="logCard" class="signup" ref="signup" :model="signup" :rules="signupRules">
        <Form-item>
          <Button class="to-log-in" type="primary" @click="logCard = true">登  录</Button>
          <br>
          <span class="go-other">若已经有账号，请点击切换登录</span>
        </Form-item>
        <div class="divider"></div>
        <Form-item  prop="user">
          <p class="user-name">用户名：</p>
          <i-input type="text" v-model="signup.user" placeholder="用户名"></i-input>
        </Form-item>
        <Form-item prop="password">
          <p class="user-name">密码：</p>
          <i-input type="password" v-model="signup.password" placeholder="密码"></i-input>
        </Form-item>
        <Form-item prop="passwordCheck">
          <p class="user-name">重复密码：</p>
          <i-input type="password" v-model="signup.passwordCheck" placeholder="重复密码"></i-input>
        </Form-item>
        <Form-item class="foot">
          <Checkbox v-model="signup.remember"><span class="remember-me">记住我</span></Checkbox>
          <Button class="register" type="primary" @click="signupSubmit('signup')"><span></span></Button>
        </Form-item>

        <span @click="closeIn" class="close">
          <Icon type="ios-close-outline"></Icon>
        </span>
      </i-form>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      const validatePassCheck = (rule, value, callback) => {
        if (value !== this.signup.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        logCard: true,
        logIn: {
          user: '',
          password: '',
          remember: false
        },
        logInRules: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'},
            {type: 'string', min: 2, max: 12, message: '用户名2到12位', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, max: 16, message: '密码6到16位', trigger: 'blur'}
          ]
        },
        signup: {
          user: '',
          password: '',
          passwordCheck: '',
          remember: false
        },
        signupRules: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'},
            {type: 'string', min: 2, max: 12, message: '用户名2到12位', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, max: 16, message: '密码6到16位', trigger: 'blur'}
          ],
          passwordCheck: [
            {required: true, message: '请重复密码', trigger: 'blur'},
            {type: 'string', min: 6, max: 16, message: '密码6到16位', trigger: 'blur'},
            {validator: validatePassCheck, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      logInSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
//              这里进行后台数据处理
            this.$Message.success('登录成功!');
            this.$emit('getUser', this.logIn);
            if (this.logIn.remember === true) {
              window.localStorage.setItem('emotionuser', JSON.stringify(this.logIn));
            }
          } else {
            this.$Message.error('登录失败!');
          }
        });
      },
      signupSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('注册成功!');
            this.$emit('getUser', this.signup);
            if (this.signup.remember === true) {
              window.localStorage.setItem('emotionuser', JSON.stringify(this.signup));
            }
          } else {
            this.$Message.error('注册失败!');
          }
        });
      },
      closeIn() {
          this.$emit('closeLog');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .log
    .close
      position absolute
      right 12px
      top 12px
      font-size 24px
      line-height 24px
      color #fc8fc3
      cursor pointer
      transition all 0.3s
      &:hover
        color #000
    .login,.signup
      border-radius 4px
      position absolute
      left -60px
      top 0
      margin 0
      padding 20px 30px 70px 30px
      width 400px
      text-align left
      background #fff
      transition all 0.6s ease
      .to-log-in
        background none
        border none
        line-height 30px
        font-size 24px
        color #fc8fc3
        padding 0
        font-family "华文宋体"
      .go-other
        font-size 14px
      .divider
        height 1px
        background rgba(153, 153, 153, 0.2)
        position absolute
        left 0
        margin-top -15px
        width 100%
      .user-name
        color #000
        font-size 16px
        letter-spacing 0.2em
      .ivu-input
        height 40px
        font-size 14px
        &:focus
          border-color #fc8fc3
          box-shadow 0 0 1px 4px rgba(252, 143, 195, 0.15)
      .register
        float right
        width 115px
        height 66px
        border none
        font-size 16px
        padding 0
        margin-top -15px
        span
          text-shadow 2px 2px 4px rgba(0, 0, 0, 1) inset
      .foot
        background url('./footer.jpg')
        background-size contain
        position absolute
        width 100%
        bottom 0
        left 0
        height 68px
        margin 0
        border-top 1px solid rgba(192, 192, 192, 0.25)
        padding 10px 20px 0 20px
        border-bottom-right-radius 10px
        border-bottom-left-radius 10px
    .login
      .register
        background url("./btn-log.png")
        background-size contain
    .signup
      .register
        background url("./btn-reg.png")
        background-size contain
    .move-enter,.move-leave-active
      margin-top 60px
      opacity 0
    .move-enter
      margin-top -60px

</style>
