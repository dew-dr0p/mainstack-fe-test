<template>
    <div class="grid gap-8">
        <div class="grid grid-flow-col justify-between pb-6 border-b border-[#EFF1F6]">
            <div>
                <p class="text-[#131316] text-2xl font-bold">{{ transactions?.length }} Transactions</p>
                <p class="text-[#56616B] text-sm font-medium">Your transactions for the last 7 days</p>
            </div>
            <div class="grid grid-flow-col content-center gap-3">
                <button @click="$emit('open')" class="p-3 px-5 bg-[#EFF1F6] text-[#131316] rounded-[6.25rem] flex gap-1">
                    Filter
                    <img src="/images/expand-more.svg" alt="Filter Icon">
                </button>
                <button class="p-3 px-5 bg-[#EFF1F6] text-[#131316] rounded-[6.25rem] flex gap-1">
                    Export list
                    <img src="/images/download.svg" alt="Download Icon">
                </button>
            </div>
        </div>
        <div class="grid gap-6">
            <div v-for="(transaction, index) in transactions" :key="index" class="grid grid-flow-col justify-between capitalize">
                <div class="flex gap-4">
                    <img :src="`/images/arrow-${transaction.type === 'withdrawal' ? 'up' : 'down' }.svg`" alt="Deposit Icon" class="p-4 rounded-full" :class="transaction.type === 'withdrawal' ? 'bg-[#F9E3E0]' : 'bg-[#E3FCF2]'">
                    <div class="grid justify-between">
                        <p class="text-[#131316] font-medium">{{ transaction.type === 'withdrawal' ? 'Cash Withdrawal' : transaction.metadata.product_name }}</p>
                        <p class="text-sm font-medium" :class="transaction.type !== 'withdrawal' ? 'text-[#56616B]' : transaction.status === 'successful' ? 'text-[#0EA163]' : 'text-[#A77A07]'">{{ transaction.type === 'withdrawal'? transaction.status : transaction.metadata.name }}</p>
                    </div>
                </div>
                <div class="grid gap-1 text-right">
                    <p class="text-[#131316] font-bold">USD {{ transaction.amount }}</p>
                    <p class="text-[#56616B] text-sm font-medium">{{ date.transform(transaction.date, 'YYYY-MM-DD', 'MMM DD, YYYY') }}</p>
                </div>
            </div>
            <!-- <div class="grid grid-flow-col justify-between">
                <div class="flex gap-4">
                    <img src="/images/arrow-down.svg" alt="Deposit Icon" class="bg-[#E3FCF2] p-4 rounded-full">
                    <div class="grid justify-between">
                        <p class="text-[#131316] font-medium">Psychology of Money</p>
                        <p class="text-[#56616B] text-sm font-medium">Roy Cash</p>
                    </div>
                </div>
                <div class="grid gap-1 text-right">
                    <p class="text-[#131316] font-bold">USD 600</p>
                    <p class="text-[#56616B] text-sm font-medium">Apr 03,2022</p>
                </div>
            </div>
            <div class="grid grid-flow-col justify-between">
                <div class="flex gap-4">
                    <img src="/images/arrow-down.svg" alt="Deposit Icon" class="bg-[#E3FCF2] p-4 rounded-full">
                    <div class="grid justify-between">
                        <p class="text-[#131316] font-medium">Psychology of Money</p>
                        <p class="text-[#56616B] text-sm font-medium">Roy Cash</p>
                    </div>
                </div>
                <div class="grid gap-1 text-right">
                    <p class="text-[#131316] font-bold">USD 600</p>
                    <p class="text-[#56616B] text-sm font-medium">Apr 03,2022</p>
                </div>
            </div>
            <div class="grid grid-flow-col justify-between">
                <div class="flex gap-4">
                    <img src="/images/arrow-up.svg" alt="Deposit Icon" class="bg-[#F9E3E0] p-4 rounded-full">
                    <div class="grid justify-between">
                        <p class="text-[#131316] font-medium">Cash withdrawal </p>
                        <p class="text-[#0EA163] text-sm font-medium">Successful</p>
                    </div>
                </div>
                <div class="grid gap-1 text-right">
                    <p class="text-[#131316] font-bold">USD 3000.33</p>
                    <p class="text-[#56616B] text-sm font-medium">Apr 01,2022</p>
                </div>
            </div>
            <div class="grid grid-flow-col justify-between">
                <div class="flex gap-4">
                    <img src="/images/arrow-down.svg" alt="Deposit Icon" class="bg-[#E3FCF2] p-4 rounded-full">
                    <div class="grid justify-between">
                        <p class="text-[#131316] font-medium">Psychology of Money</p>
                        <p class="text-[#56616B] text-sm font-medium">Roy Cash</p>
                    </div>
                </div>
                <div class="grid gap-1 text-right">
                    <p class="text-[#131316] font-bold">USD 600</p>
                    <p class="text-[#56616B] text-sm font-medium">Apr 03,2022</p>
                </div>
            </div>
            <div class="grid grid-flow-col justify-between">
                <div class="flex gap-4">
                    <img src="/images/arrow-up.svg" alt="Deposit Icon" class="bg-[#F9E3E0] p-4 rounded-full">
                    <div class="grid justify-between">
                        <p class="text-[#131316] font-medium">Cash withdrawal </p>
                        <p class="text-[#A77A07] text-sm font-medium">Pending</p>
                    </div>
                </div>
                <div class="grid gap-1 text-right">
                    <p class="text-[#131316] font-bold">USD 1004.44</p>
                    <p class="text-[#56616B] text-sm font-medium">Apr 01,2022</p>
                </div>
            </div>
            <div class="grid grid-flow-col justify-between">
                <div class="flex gap-4">
                    <img src="/images/arrow-down.svg" alt="Deposit Icon" class="bg-[#E3FCF2] p-4 rounded-full">
                    <div class="grid justify-between">
                        <p class="text-[#131316] font-medium">Psychology of Money</p>
                        <p class="text-[#56616B] text-sm font-medium">Roy Cash</p>
                    </div>
                </div>
                <div class="grid gap-1 text-right">
                    <p class="text-[#131316] font-bold">USD 600</p>
                    <p class="text-[#56616B] text-sm font-medium">Apr 03,2022</p>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { transactions, getTransactionDetails } from '@/store/store';
import { onMounted } from 'vue';
import date from 'date-and-time';

onMounted(() => {
    getTransactionDetails()
})

defineEmits<{
    (event: 'open'): void
}>()

transactions
</script>