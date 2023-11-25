<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
import DashboardView from './components/DashboardView.vue';
import SideWallet from './components/SideWallet.vue';
import TransactionHistory from './components/TransactionHistory.vue';
import SideBar from './components/SideBar.vue';
import FilterCard from './components/FilterCard.vue';
import { ref } from 'vue';


const open = ref(false)
</script>

<template>
  <header class="grid grid-flow-col justify-between items-center m-4 justify-items-center p-3 bg-white rounded-[6.25rem] border-2 border-solid border-white shadow-[0px_2px_4px_0px_rgba(45,_59,_67,_0.05),_0px_2px_6px_0px_rgba(45,_59,_67,_0.06)]">
    <PageHeader/>
  </header>

  <main class="p-36 py-16 grid gap-24 relative">
    <div class="grid justify-between grid-flow-col">
      <DashboardView />
      <SideWallet />
    </div>
    <TransactionHistory @open="open = true" />
    <SideBar />
  </main>

  <FilterCard :is-open="open" @close="open = false" />
</template>
