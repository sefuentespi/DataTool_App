<template>
 <div id="app">
  <div class="header">
    <h1>DataTool</h1>
    <nav>
      <button v-on:click="getData"> Consultar </button>
      <button v-on:click="updateData"> Actualizar </button>
      <button v-on:click="createData"> Crear </button>
    </nav>
  </div>

  <div class="main-component">
    <router-view></router-view>
  </div>

  <div class="footer">
    <h2>Misión TIC 2022</h2>
  </div>
 </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false  
    }
},

  methods: {
    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{username:username}})
      }
    },
    getData: function(){
      if(this.$route.name != "getData"){
        let user_name = localStorage.getItem("current_username")
        this.$router.push({ name:"getData"
        })
      }
    },
    updateData: function(){
      if(this.$router.name != "updateData"){
        let user_name =  localStorage.getItem("current_username")
        this.$router.push({ name:"updateData" })
      }
    },
    beforeCreate: function(){
      localStorage.setItem('current_username', 'sefuentespi')
      localStorage.setItem('isAuth', true)
      this.$router.push({name:"user",params:{username:'sefuentespi'}})
    },
    create: function(){
      this.is_auth = localStorage.getItem('isAuth') || false
      console.log(this.is_auth)
      if(this.$route.name == "root")
        this.$router.push({name:"user"})
    }
  }
}
</script>
<style>
  body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
  }

  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }

  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747;
    color: #E5E7E9;
  }

  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>