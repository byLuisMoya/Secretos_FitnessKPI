<template>
    <Head title="Secretos" />
    <Header />
    <main class="min-h-screen bg-slate-700 text-white text-center">
        <div class="prose mx-auto p-6 space-y-6">
            <h1 class="text-3xl font-bold underline">Tus Secretos</h1>
            <div class="flex justify-start">
                <button @click="openModal" class="flex justify-center items-center text-xl py-1 px-2 rounded border-solid border-2 border-gray-900 bg-gray-900 hover:bg-slate-700 transition duration-150 ease-out hover:ease-in">Nuevo Secreto 
                    <span class="text-xl material-symbols-outlined">
                        add
                    </span>
                </button>
            </div>
            <div id="Content">

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

const showModal = ref(false);
const secret = ref('');

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

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
        console.log(response.data);
        closeModal();
    } catch (error) {
        console.error(error);
    }
};
</script>
