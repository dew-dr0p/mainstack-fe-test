<template>
    <div class="absolute w-screen h-screen top-0 left-0 p-4 bg-[#EFF1F6] bg-opacity-75 z-40" :class="isOpen ? 'grid' : 'hidden' ">
        <div class="rounded-[1.25rem] z-50 justify-self-end w-fit h-full grid justify-between bg-white shadow-[0px_8px_16px_4px_rgba(188,_196,_204,_0.10),_0px_12px_24px_0px_rgba(219,_222,_229,_0.10),_0px_16px_32px_0px_rgba(219,_222,_229,_0.10)]">
            <div>
                <div class="p-5 px-6 rounded-t-[1.25rem] h-fit flex justify-between text-[#131316] ">
                    <p class="font-bold text-2xl">Filter</p>
                    <button @click="$emit('close')" class="flex items-center"><img src="/images/close.svg" alt="Close Icon"></button>
                </div>
                <div class="grid gap-7 mx-6 mt-8">
                    <div class="grid grid-flow-col gap-3">
                        <button class="p-2.5 px-4 border border-[#EFF1F6] rounded-[6.5rem] text-[#131316] bg-white text-sm font-semibold">Today</button>
                        <button class="p-2.5 px-4 border border-[#EFF1F6] rounded-[6.5rem] text-[#131316] bg-white text-sm font-semibold">Last 7 days</button>
                        <button class="p-2.5 px-4 border border-[#EFF1F6] rounded-[6.5rem] text-[#131316] bg-white text-sm font-semibold">This month</button>
                        <button class="p-2.5 px-4 border border-[#EFF1F6] rounded-[6.5rem] text-[#131316] bg-white text-sm font-semibold">Last 3 months</button>
                    </div>
                    <div class="grid gap-6">
                        <div class="grid grid-flow-col gap-1.5">
                            <div class="grid gap-3 text-[#131316]">
                                <p class="font-semibold">Date Range</p>
                                <button class="p-4 py-3.5 w-full rounded-xl border border-[#EFF1F6] bg-[#EFF1F6] flex justify-between items-center">
                                    <p class="text-sm font-medium">17 Jul 2023</p>
                                    <img src="/images/expand-more.svg" alt="Expand More Icon">
                                </button>
                            </div>
                            <div class="grid gap-3 text-[#131316]">
                                <p class="font-semibold invisible">Date Range</p>
                                <button class="p-4 py-3.5 w-full rounded-xl border border-[#EFF1F6] bg-[#EFF1F6] flex justify-between items-center">
                                    <p class="text-sm font-medium">17 Jul 2023</p>
                                    <img src="/images/expand-more.svg" alt="Expand More Icon">
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-flow-col gap-1.5">
                            <div class="grid gap-3 text-[#131316]">
                                <p class="font-semibold">Transaction Type</p>
                                <div class="relative">
                                    <button 
                                        class="p-4 py-3.5 w-full rounded-xl border border-[#EFF1F6] flex justify-between items-center"
                                        :class="isTypeOpen ? 'ring-[3px] ring-[#131316]' : 'bg-[#EFF1F6]' "
                                        role="combobox"
                                        aria-labelledby="Transaction Type"
                                        aria-haspopup="listbox"
                                        :aria-expanded="isTypeOpen"
                                        aria-controls="type-dropdown" 
                                        @click="selectType"
                                    >
                                        <span class="text-sm font-medium capitalize">{{ transactionType.join(', ') }}</span>
                                        <img src="/images/expand-more.svg" alt="Expand More Icon" :class="isTypeOpen ? 'rotate-180' : '' ">
                                    </button>
                                    <ul role="listbox" id="type-dropdown" class="absolute z-50 hidden mt-1 bg-white shadow-[0px_6px_12px_0px_rgba(92,_115,_131,_0.08),_0px_4px_8px_0px_rgba(92,_115,_131,_0.08)] w-full p-2 gap-0.5 rounded-xl">
                                        <li v-for="(type, index) in transactionTypeList" :key="index" role="option" class="p-3.5 text-[#131316] font-semibold rounded-lg hover:bg-[#EFF1F6] focus-within:bg-[#EFF1F6]">
                                            <label :for="type.id" class="w-full flex gap-3">
                                                <input type="checkbox" name="transaction-type" :id="type.id" :value="type.value" v-model="transactionType" class="accent-[#131316] focus:outline-none">
                                                {{ type.text }}
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-flow-col gap-1.5">
                            <div class="grid gap-3 text-[#131316]">
                                <p class="font-semibold">Transaction Status</p>
                                <div class="relative">
                                    <button 
                                        class="p-4 py-3.5 w-full rounded-xl border border-[#EFF1F6] flex justify-between items-center"
                                        :class="isStatusOpen ? 'ring-[3px] ring-[#131316]' : 'bg-[#EFF1F6]' "
                                        role="combobox"
                                        aria-labelledby="Transaction Status"
                                        aria-haspopup="listbox"
                                        :aria-expanded="isStatusOpen"
                                        aria-controls="status-dropdown" 
                                        @click="selectStatus"
                                    >
                                        <span class="text-sm font-medium capitalize">{{ transactionStatus.join(', ') }}</span>
                                        <img src="/images/expand-more.svg" alt="Expand More Icon" :class="isStatusOpen ? 'rotate-180' : '' ">
                                    </button>
                                    <ul role="listbox" id="status-dropdown" class="absolute hidden mt-1 bg-white shadow-[0px_6px_12px_0px_rgba(92,_115,_131,_0.08),_0px_4px_8px_0px_rgba(92,_115,_131,_0.08)] w-full p-2 gap-0.5 rounded-xl">
                                        <li v-for="(status, index) in transactionStatusList" :key="index" role="option" class="p-3.5 text-[#131316] font-semibold rounded-lg hover:bg-[#EFF1F6] focus-within:bg-[#EFF1F6]">
                                            <label :for="status.id" class="w-full flex gap-3">
                                                <input type="checkbox" name="transaction-status" :id="status.id" :value="status.value" v-model="transactionStatus" class="accent-[#131316] focus:outline-none">
                                                {{ status.text }}
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-flow-col gap-3 self-end p-5 px-6">
                <button class="p-3 px-6 text-[#131316] bg-white border border-[#EFF1F6] rounded-[6.5rem]">Clear</button>
                <button class="p-3 px-6 text-white bg-[#DBDEE5] rounded-[6.5rem]">Clear</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    isOpen: boolean
}>()
defineEmits<{
    (event: 'close'): void
}>()

const transactionStatus = ref(['successful', 'pending', 'failed'])
const transactionType = ref(['store transactions', 'get tipped', 'withdrawals', 'chargebacks', 'cashbacks', 'refer & earn'] )

const isStatusOpen = ref(false)
const isTypeOpen = ref(false)

const transactionStatusList = [
    {
        id: 'success',
        value: 'successful',
        text: 'Successful'
    },
    {
        id: 'pending',
        value: 'pending',
        text: 'Pending'
    },
    {
        id: 'failed',
        value: 'failed',
        text: 'Failed'
    }
]
const transactionTypeList = [
    {
        id: 'store_transactions',
        value: 'store transactions',
        text: 'Store Transactions'
    },
    {
        id: 'get_tipped',
        value: 'get tipped',
        text: 'Get Tipped'
    },
    {
        id: 'withdrawals',
        value: 'withdrawals',
        text: 'Withdrawals'
    },
    {
        id: 'chargebacks',
        value: 'chargebacks',
        text: 'Chargebacks'
    },
    {
        id: 'cashbacks',
        value: 'cashbacks',
        text: 'Cashbacks'
    },
    {
        id: 'refer_and_earn',
        value: 'refer & earn',
        text: 'Refer & Earn'
    }
]

const selectStatus = () => {
    isStatusOpen.value = !isStatusOpen.value
    if (isStatusOpen.value) {
        document.querySelector('ul#status-dropdown')?.classList.remove('hidden')
        document.querySelector('ul#status-dropdown')?.classList.add('grid')
    } else {
        document.querySelector('ul#status-dropdown')?.classList.remove('grid')
        document.querySelector('ul#status-dropdown')?.classList.add('hidden')
    }
}

const selectType = () => {
    isTypeOpen.value = !isTypeOpen.value
    if (isTypeOpen.value) {
        document.querySelector('ul#type-dropdown')?.classList.remove('hidden')
        document.querySelector('ul#type-dropdown')?.classList.add('grid')
    } else {
        document.querySelector('ul#type-dropdown')?.classList.remove('grid')
        document.querySelector('ul#type-dropdown')?.classList.add('hidden')
    }
}

</script>