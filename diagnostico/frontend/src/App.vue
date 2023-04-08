<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <h2 class="bg-dark text-center text-white py-3">Datos de backend de Canales</h2>
                <table class="table table-hover">
                    <tr class="bg-info text-white">
                        <th>ID</th> <th>NOMBRE DE CANAL</th>
                    </tr>
                    <tr v-for="(item, index) of canales" :key="index">
                        <td><h3>{{ item.CANAL_ID }}</h3></td>
                        <td><h3>{{ item.CANAL_NAME }}</h3></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    const API = 'http://localhost:4000/api/v1'

    export default {
        data(){
            return { canales: [] }
        },
        async created(){
            axios.get(`${API}/get-canales`)
                .then(resp => {
                    this.canales = resp.data
                }).catch(err => console.log(err.message))
        }
    }
</script>