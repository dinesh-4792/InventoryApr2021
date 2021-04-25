<template>
<!-- Must have one division for the outer section -->
 <div class="h-screen w-screen flex">
      <div class="my-auto mx-auto w-1/3">
        <input-element
          labelName="Email" 
          labelId="email" 
          inputType="email"
          :model="email" 
          @input="email = $event" 
        />
        <input-element 
          labelName="Password" 
          labelId="password" 
          inputType="password"
          :model="password" 
          @input="password = $event" 
        />
        <button type="button" class="py-2 px-4 bg-blue-500 text-white w-full" @click="login">Login</button>
      </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  computed:{
    ...mapState({
      //Check user login stat (default:false - not logged in)
      isLoggedIn: state => state.auth.isLoggedIn,
    })
  },
  data: function(){
        return{
            email: "",
            password: ""
        }
  },
  methods:{
    login: function(){
      //login with email and password
      this.emailLogin({email:this.email, password:this.password})
    },
    ...mapActions({
      emailLogin: "auth/firebaseLogin", // store/auth.js - login with email & pass
      getIdToken: "auth/getIdToken" //store,auth.js - get token from firebase
    })
  },
  mounted(){
    if(this.isLoggedIn){ //if user already login
      this.getIdToken(); //get auth token from firebase again
      this.$router.push("/product") //redirect user to login page
    }
  },
}
</script>

<style>

</style>