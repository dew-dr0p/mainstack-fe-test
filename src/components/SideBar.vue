<template>
    <div class="absolute left-4 top-60 grid-flow-col grid gap-1.5">
        <div class="shadow-[0px_6px_12px_0px_rgba(92,_115,_131,_0.08),_0px_4px_8px_0px_rgba(92,_115,_131,_0.08)] bg-white rounded-[6.5rem] gap-2 grid p-1">
            <button class="flex items-center button"><img src="/images/product-links.svg" alt="Colourful Link Icon" class="p-2 mix-blend-luminosity hover:mix-blend-normal"></button>
            <button class="flex items-center button"><img src="/images/store.svg" alt="Colourful Link Icon" class="p-2 mix-blend-luminosity hover:mix-blend-normal"></button>
            <button class="flex items-center button"><img src="/images/media.svg" alt="Colourful Link Icon" class="p-2 mix-blend-luminosity hover:mix-blend-normal"></button>
            <button class="flex items-center button"><img src="/images/invoice.svg" alt="Colourful Link Icon" class="p-2 mix-blend-luminosity hover:mix-blend-normal"></button>
        </div>
        <div class="pt-1 grid">
            <div class="links items-center invisible flex">
                <img src="/images/union.svg" alt="">
                <div class="p-3 py-2 -ml-2 text-white text-lg font-medium bg-[#131316] rounded-lg">
                    <p>Link in Bio</p>
                </div>
            </div>
            <div class="links items-center invisible flex">
                <img src="/images/union.svg" alt="">
                <div class="p-3 py-2 -ml-2 text-white text-lg font-medium bg-[#131316] rounded-lg">
                    <p>Store</p>
                </div>
            </div>
            <div class="links items-center invisible flex">
                <img src="/images/union.svg" alt="">
                <div class="p-3 py-2 -ml-2 text-white text-lg font-medium bg-[#131316] rounded-lg">
                    <p>Media Kit</p>
                </div>
            </div>
            <div class="links items-center invisible flex">
                <img src="/images/union.svg" alt="">
                <div class="p-3 py-2 -ml-2 text-white text-lg font-medium bg-[#131316] rounded-lg">
                    <p>Invoicing</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const SideLinks = document.getElementsByClassName('button')
const LinkTexts = document.getElementsByClassName('links')

onMounted(() => {
    for (let index = 0; index < SideLinks.length; index++) {
        const element = SideLinks.item(index);
        const elementText = LinkTexts.item(index)
        element?.addEventListener('mouseover', () => {
            elementText?.classList.remove('invisible')
        })
        element?.addEventListener('mouseout', () => {
            elementText?.classList.add('invisible')
        })
    }
})
</script>