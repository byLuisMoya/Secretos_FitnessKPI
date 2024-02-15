<template>
    <div>
        <header class="flex justify-between px-5 py-5 bg-gray-900 text-white">
            <router-link to="/">
                <h1 class="text-3xl font-bold underline">{{ title }}</h1>
            </router-link>
            <div class="flex gap-5">
                <router-link to="/secretos" class="flex justify-center items-center px-2 rounded border-solid border-2 border-indigo-800  hover:bg-indigo-800 transition duration-150 ease-out hover:ease-in">Mis Secretos</router-link>
                <router-link to="/#">
                    <span class="material-symbols-outlined text-3xl rounded px-1 hover:bg-sky-800 transition duration-150 ease-out hover:ease-in">
                        account_circle
                    </span>
                </router-link>
                
            </div>
        </header>
        <!-- <hr> -->
        <main class="min-h-screen bg-slate-700 text-white">
            <!-- <router-link to="/">Inicio</router-link> |
            <router-link to="/secretos">Secretos</router-link> -->
            <router-view></router-view>
        </main>
        <footer class="flex justify-around py-5 bg-gray-900 text-white">
            <p>© 2024</p>
            <p><b>Made By:</b> Luis Moya Prados</p>
        </footer>
    </div>
</template>

<script setup>
    const title = "Logo";
</script>

<style scoped>
    div{
        text-align: center;
    }
</style>