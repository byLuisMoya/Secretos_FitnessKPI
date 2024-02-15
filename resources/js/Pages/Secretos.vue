<template>
    <Head title="Secretos" />
    <Header />
    <main class="min-h-screen bg-slate-700 text-white text-center">
        <div class="prose mx-auto p-6 space-y-6">
            <h1 class="text-3xl font-bold underline">Tus Secretos</h1>
            <div class="flex justify-between">
                <div class="flex justify-start">
                    <button @click="openModal" class="flex justify-center items-center text-xl py-1 px-2 rounded border-solid border-2 border-gray-900 bg-gray-900 hover:bg-slate-700 transition duration-150 ease-out hover:ease-in">Nuevo Secreto 
                        <span class="text-xl material-symbols-outlined">
                            add
                        </span>
                    </button>
                </div>
                <div class="flex justify-end">
                    <p>"Cuando abras un Secreto tendrás 5 segundos para leerlo"</p>
                </div>
            </div>
            <div id="Content" class="flex flex-wrap justify-center">

                <!-- Aqui se muestra una imagen si el resultado de la longitud del GET es 0 -->
                <div v-if="secrets.length === 0" class="m-3 w-64 h-52">
                    <img class="h-96 w-auto object-contain" src="../../assets/images/blankstate.svg" alt="Imagen cuando no hay secretos">
                    <p class="text-sm mt-3">Ahora mismo no hay ningún secreto. <br><b>¡Crea tu primer Secreto!</b></p>
                </div>

                <!-- Aqui se muestra los secretos mediant un for -->
                <div v-else v-for="secret in secrets" :key="secret.id" @click="toggleSecret(secret.id)" class="m-3 bg-gray-900 text-white rounded-lg shadow-lg cursor-pointer w-64 h-52 hover:bg-gray-950 transition duration-150 ease-out hover:ease-in">
                    <img v-if="!secret.showContent" class="h-full w-full object-contain" src="../../assets/images/tusecretos2-sinfondo.svg" alt="Imagen de la tarjeta">
                    <div v-else class="p-6 overflow-y-auto h-full">
                        <p class="text-xl font-semibold">{{ secret.secret }}</p>
            
                        <p class="text-sm mt-5">En 5 segs. este secreto se autodestruirá</p>
                    </div>
                </div>

            </div>
        </div>
    </main>
    <Footer />

    <!-- Modal -->
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <p class="text-xs">200 carácteres max.</p>
                    <textarea v-model="secret" class="w-full h-20 p-2 border rounded" maxlength="200"></textarea>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click="saveSecret" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                        Guardar
                    </button>
                    <button @click="closeModal" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '../Components/Header.vue';
import Footer from '../Components/Footer.vue';
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

let secrets = ref([]);

// obtiene los secretos cuando se carga la página
onMounted(async () => {
    try {
        const response = await axios.get('/api/secrets');
        secrets.value = response.data.map(secret => ({ ...secret, showContent: false }));
    } catch (error) {
        console.error(error);
    }
});

// borra el secreto
const deleteSecret = async (id) => {
    try {
        await axios.delete(`/api/secrets/${id}`);
        secrets.value = secrets.value.filter(secret => secret.id !== id);
    } catch (error) {
        console.error(error);
    }
};

// muestra el contenido del secreto y a los 5 segs lo borra
const toggleSecret = (id) => {
    const secret = secrets.value.find(secret => secret.id === id);
    if (secret) {
        secret.showContent = true;

        if(secret.showContent) {
            setTimeout(() => {
                // console.log('Borrando secreto', secret.id);
                deleteSecret(secret.id)
            }, 5000);
        }
    }
};

const showModal = ref(false);
const secret = ref('');

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

// guarda el secreto y vuelve a hacer una peticion GET
const saveSecret = async () => {
    if(secret.value.length > 200) {
        alert('El secreto no puede tener más de 200 caracteres');
        return;
    }
    if(secret.value.length === 0) {
        alert('El secreto no puede estar vacío');
        return;
    }

    try {
        
        axios.defaults.withCredentials = true;
        const response = await axios.post('/api/secrets', { secret: secret.value});
        // console.log(response.data);
        closeModal();

        const secretsResponse = await axios.get('/api/secrets');
        secrets.value = secretsResponse.data;
    } catch (error) {
        console.error(error);
    }
};
</script>
