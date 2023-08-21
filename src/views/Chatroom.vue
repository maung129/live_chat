<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatroom></NewChatroom>
    
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatroom from '../components/NewChatroom'
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
export default {
  components: {
    ChatWindow,
    NewChatroom, Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
      if(!user.value){
        router.push("/");
      }
    })
  }
}
</script>

<style>
  
</style>