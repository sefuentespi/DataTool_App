<template>
    <div>
        <form v-on:submit.prevent="submitForm">
                <div class="form-group">
                    <label for="id">ID</label>
                    <input type="text" class="form-control" id="id" placeholder="Client ID" v-model="form.id">
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Client Name" v-model="form.name">
                </div>
                <div class="form-group">
                    <label for="formControlRange">Cliente Activo</label><br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="client_isActive" id="client_isActive" value="true"
                            v-model="form.client_isActive">
                        <label class="form-check-label" for="client_isActive">true</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="client_isActive" id="client_isActive" value="false"
                            v-model="form.client_isActive">
                        <label class="form-check-label" for="client_isActive">false</label>
                    </div>
                </div>
                <div class="form-group">
                        <button class="btn btn-primary">Submit</button>
                </div>

        </form>
        <div>
            <h2>State: {{mensaje}} </h2>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

export default {
    name: 'PostFormAxios',
    data(){
        return{
            form: {
                id: '',
                name: '',
                client_isActive: '',           
            },
            mensaje: 'muestra el estado',
        }
    },
    methods:{
        submitForm(){
            console.log(this.form)
            axios.post('https://datatool-back.herokuapp.com/clients/',this.form)
                 .then((res) => {
                    console.log(res.data)//Perform Success Action
                    this.mensaje = "Registro Exitoso"
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