<template>
    <header class="flex justify-between align-center px-5 py-5 bg-gray-900 text-white">
        <Link href="/">
            <img class="h-20" src="../../assets/images/tusecretos2-sinfondo.svg" alt="Logo tus secretos">
        </Link>
        <div class="">
            <div class="flex gap-5">
                <Link href="/secretos" class="flex justify-center items-center px-2 rounded border-solid border-2 border-indigo-800  hover:bg-indigo-800 transition duration-150 ease-out hover:ease-in">Mis Secretos</Link>
                <div v-if="user">
                    <div class="ms-3 relative">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <span class="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-900 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {{ $page.props.auth.user.name }}

                                        <svg
                                            class="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                <DropdownLink :href="route('logout')" method="post" as="button">
                                    Log Out
                                </DropdownLink>
                            </template>
                        </Dropdown>
                    </div>
                </div>
                <div v-else>
                    <Link href="/login">
                        <span class="material-symbols-outlined text-3xl rounded px-1 hover:bg-sky-800 transition duration-150 ease-out hover:ease-in">
                            account_circle
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { Link } from '@inertiajs/vue3';
    import { usePage } from '@inertiajs/vue3';
    import DropdownLink from '@/Components/DropdownLink.vue';
    import Dropdown from '@/Components/Dropdown.vue';

    const { props } = usePage();
    const user = props.auth.user;
</script>