<template>
    
    <Head title="Inicio" />
    <Header />
    <main class="min-h-screen bg-slate-700 text-white text-center">
        <div class="prose mx-auto p-6 space-y-6 flex flex-col items-center">
            <div class="relative w-full">
                <img src="../../assets/images/diario-foto.jpg" loading="lazy" alt="foto de un diario" class="mx-auto my-4 rounded shadow-lg filter brightness-40 w-full h-52 object-cover">
                <h1 class="text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 underline">Bienvenido a TuSecretos</h1>
            </div>
            <p class="text-xl">
                <strong>"TuSecretos"</strong> es un proyecto <b>único</b> diseñado para ofrecerte un espacio seguro y privado donde puedes guardar tus secretos más preciados. Sabemos que cada secreto es valioso y merece ser protegido, por eso hemos creado este espacio especialmente para ti.
            </p>
            <div class="flex flex-col items-center md:flex-row md:justify-center px-5 py-3 border border-gray-900 bg-gray-900 rounded-xl shadow-xl">
                <p class="md:flex-initial md:w-1/3 text-xl md:text-start">
                    Aquí, los usuarios pueden registrarse y guardar sus secretos de manera segura. Cada secreto que guardes en <strong>"TuSecretos"</strong> estará completamente seguro y solo será accesible para ti.
                    <br/>Pero eso no es todo. Hemos implementado una característica especial para garantizar la seguridad de tus secretos. Cuando decidas ver uno de tus secretos, este será visible durante solo 5 segundos. Después de este tiempo, <b>el secreto se eliminará automáticamente</b>. De esta manera, nos aseguramos de que tus secretos estén seguros, incluso si olvidas cerrar la página o tu dispositivo cae en manos equivocadas.
                </p>
                <img src="../../assets/images/undraw_undraw_notebook.svg" loading="lazy" alt="foto de un diario" class="sm:flex-initial w-1/3 mx-auto my-4">
            </div>
            <div class="flex flex-col items-center lg:flex-row-reverse w-4/5 gap-5">
                <p class="text-2xl">
                    En <strong>"TuSecretos"</strong>, tu privacidad es nuestra prioridad. Te invitamos a experimentar la tranquilidad de saber que tus secretos están seguros con nosotros.
                </p>
                <img src="../../assets/images/diario.jpg" loading="lazy" alt="imagen diario" class="mx-auto my-4 w-2/4 rounded shadow-lg">
        
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