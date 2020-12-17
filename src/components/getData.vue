<template>
    <div>
        <form v-on:submit.prevent="submitForm">
                <div class="form-group">
                    <label for="id">ID</label>
                    <input type="text" class="form-control" id="id" placeholder="Client ID" v-model="form.id">
                </div>
                <div class="form-group">
                        <button class="btn btn-primary">Submit</button>
                </div>

        </form>
        <div>
            <h2>ID: {{id}} </h2>
            <h2>Name: {{name}} </h2>
            <h2>Estado: {{client_isActive}}</h2>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

export default {
    name: 'GetFormAxios',
    data(){
        return{
            form: {
                id: '',
            },
            id: 0,
            name: "",
            client_isActive: false
        }
    },
    methods:{
        submitForm(){
            console.log(this.form)
            axios.get('http://127.0.0.1:8000/clients/'+this.form.id)
                 .then((res) => {
                    console.log(res.data)//Perform Success Action
                    this.id = res.data.id
                    this.name = res.data.name
                    this.client_isActive = res.data.client_isActive
                 })
                 .catch((error) => {
                    // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        }
    }
}
</script>