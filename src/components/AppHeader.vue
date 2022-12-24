<template>
    <nav class="bg-gray-900">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button"
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!--
            Icon when menu is closed.
            Heroicon name: outline/bars-3
            Menu open: "hidden", Menu closed: "block"
          -->
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <!--
            Icon when menu is open.
            Heroicon name: outline/x-mark
            Menu open: "block", Menu closed: "hidden"
          -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="block h-10 w-auto lg:hidden" src="../assets/enstar_logo.png" alt="ENSTAR">
                        <img class="hidden h-10 w-auto lg:block" src="../assets/enstar_logo.png" alt="ENSTAR">
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                aria-current="page">Dashboard</a>
                            <RouterLink to="/projects"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Projects</RouterLink>
                            <RouterLink to="/wallet"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                My Wallet</RouterLink>
                            <RouterLink to="/projects"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Launch Project</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                        class="bg-gray-50 p-1 text-gray-900 w-40 h-10  rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2"
                        @click="connect_wallet">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    aria-current="page">Dashboard</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
        </div>
    </nav>
</template>
<script>
import { RouterLink } from "vue-router";
import { ethers } from 'ethers';
import Web3Model from 'web3modal';
export default {
    methods: {
        hello: function () {
            console.log("hello")
        },
        connect_wallet: async function () {
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!')
            }
            console.log("connect walleting...")
            const web3Modal = new Web3Model();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            console.log(signer)
            console.log('===============');
            let e = await provider.listAccounts();
            for (let i = 0; i < e.length; i++) {
                let bal = await provider.getBalance(e[i]);
                console.log(ethers.utils.formatEther(bal))
            }
        }
    }
}

</script>