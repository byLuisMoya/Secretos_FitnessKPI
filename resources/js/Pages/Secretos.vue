<template>
    <Head title="Secretos" />
    <Header />
    <main class="min-h-screen bg-slate-700 text-white text-center">
        <div class="prose mx-auto p-6 space-y-6">
            <h1 class="text-3xl font-bold underline">Tus Secretos</h1>
            <div class="flex justify-start">
                <button class="flex justify-center items-center text-xl px-2 rounded border-solid border-2 border-gray-900 bg-gray-900 hover:bg-slate-700 transition duration-150 ease-out hover:ease-in">Nuevo Secreto 
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
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '../Components/Header.vue';
import Footer from '../Components/Footer.vue';
</script>