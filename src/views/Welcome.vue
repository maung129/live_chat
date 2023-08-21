<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>Not a member yet? Do you want to <span @click="showLoginForm=!showLoginForm"> create account</span>?</p>
    </div>
    <div v-else>
      <Signup></Signup>
      <p>Already member? <span @click="showLoginForm=!showLoginForm"> Login your Account</span>!</p>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import Signup from '../components/Signup'
import {useRouter} from 'vue-router'
export default {
  components: {
    Login, Signup },
  setup(){
    let router = useRouter();
    let showLoginForm=ref(true);
    
    let enterChatroom=()=>{
      router.push({name:"chatroom"});
    }




    return {showLoginForm,enterChatroom}
  }

}
</script>

<style>
    .welcome{
        text-align:center;
        padding: 20px 0;
    }
    .welcome form{
      width: 300px;
      margin: 20px auto;
    }
    .welcome label {
      display: block;
      margin: 20px 0 10px;
    }

    .welcome input{
      width:100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #eee;
      outline: none;
      color: #999;
      margin: 10px auto;

    }
    .welcome span{
      font-weight: bold;
      text-decoration: underline;
      cursor:pointer;

    }
    .welcome button {
      margin: 20px auto;

    }
</style>