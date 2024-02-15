<template>
    
    <Head title="Inicio" />
    <Header />
    <main class="min-h-screen bg-slate-700 text-white text-center">
        <div class="prose mx-auto p-6 space-y-6">
            <h1 class="text-3xl font-bold">Bienvenido a Tus Secretos</h1>
            <p>
                "Tus Secretos" es un proyecto único diseñado para ofrecerte un espacio seguro y privado donde puedes guardar tus secretos más preciados. Sabemos que cada secreto es valioso y merece ser protegido, por eso hemos creado este espacio especialmente para ti.
            </p>
            <p>
                Aquí, los usuarios pueden registrarse y guardar sus secretos de manera segura. Cada secreto que guardes en "Tus Secretos" estará completamente seguro y solo será accesible para ti.
            </p>
            <p>
                Pero eso no es todo. Hemos implementado una característica especial para garantizar la seguridad de tus secretos. Cuando decidas ver uno de tus secretos, este será visible durante solo 5 segundos. Después de este tiempo, el secreto se eliminará automáticamente. De esta manera, nos aseguramos de que tus secretos estén seguros, incluso si olvidas cerrar la página o tu dispositivo cae en manos equivocadas.
            </p>
            <img src="../../assets/images/diario-foto.jpg" alt="foto de un diario" class="mx-auto my-4 rounded shadow-lg">

            <p>
                En "Tus Secretos", tu privacidad es nuestra prioridad. Te invitamos a experimentar la tranquilidad de saber que tus secretos están seguros con nosotros.
            </p>
            <img src="../../assets/images/diario.jpg" alt="imagen diario" class="mx-auto my-4 rounded shadow-lg">
        </div>
    </main>
    <Footer />
</template>


<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '../Components/Header.vue';
import Footer from '../Components/Footer.vue';
</script>