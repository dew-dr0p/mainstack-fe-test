<template>
    <div class="grid gap-5">
        <div class="grid grid-flow-col gap-16 w-fit items-center">
            <div class="grid gap-2">
                <p class="text-[#56616B] text-sm font-medium">Available Balance</p>
                <p class="text-[#131316] text-4xl font-bold">USD {{ (wallet?.total_revenue - wallet?.total_payout - wallet?.ledger_balance)?.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '120,500.00' }}</p>
            </div>
            <button class="p-7 py-3.5 rounded-[6.5rem] text-white bg-[#131316]">Withdraw</button>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="767" height="178" viewBox="0 0 767 178" fill="none">
              <path d="M1 177L166.916 21.336C211.748 -20.7264 285.462 6.79004 292.871 67.8171V67.8171C293.287 71.2484 293.981 74.6685 294.939 77.9895V77.9895C308.165 123.839 364.75 140.125 400.326 108.322L480.44 36.7048C538.095 -14.8352 627.475 -6.14781 674.126 55.5303L766 177" stroke="#FF5403" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="pt-4 border-t border-[#DBDEE5] flex items-center justify-between text-[#56616B] text-sm font-medium">
            <p>Apr 1 ,  2022</p>
            <p class="text-base">Apr 30 ,  2022</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { wallet } from '@/store/store';

</script>