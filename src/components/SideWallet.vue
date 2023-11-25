<template>
    <div class="grid gap-8 w-max">
        <div class="grid gap-2.5">
            <div class="flex gap-2 justify-between">
                <p class="text-[#56616B] text-sm font-medium tracking-tight">Ledger Balance</p>
                <img src="/images/info.svg" alt="Info Icon">
            </div>
            <p class="font-bold text-3xl text-[#131316]">USD {{ wallet?.ledger_balance.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
        </div>
        <div class="grid gap-2.5">
            <div class="flex gap-2 justify-between">
                <p class="text-[#56616B] text-sm font-medium tracking-tight">Total Payout</p>
                <img src="/images/info.svg" alt="Info Icon">
            </div>
            <p class="font-bold text-3xl text-[#131316]">USD {{ wallet?.total_payout.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
        </div>
        <div class="grid gap-2.5">
            <div class="flex gap-2 justify-between">
                <p class="text-[#56616B] text-sm font-medium tracking-tight">Total Revenue</p>
                <img src="/images/info.svg" alt="Info Icon">
            </div>
            <p class="font-bold text-3xl text-[#131316]">USD {{ wallet?.total_revenue.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
        </div>
        <div class="grid gap-2.5">
            <div class="flex gap-2 justify-between">
                <p class="text-[#56616B] text-sm font-medium tracking-tight">Pending Payout</p>
                <img src="/images/info.svg" alt="Info Icon">
            </div>
            <p class="font-bold text-3xl text-[#131316]">USD {{ wallet?.pending_payout.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getWalletDetails, wallet } from '@/store/store';

onMounted(() => {
    getWalletDetails()
})
</script>