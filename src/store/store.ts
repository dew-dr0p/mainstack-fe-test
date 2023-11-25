import axios from 'axios'
import { ref } from 'vue'

const BASE_URL = 'https://fe-task-api.mainstack.io'

const wallet = ref()
const transactions = ref()

async function getWalletDetails () {
    try {
        const response = await axios.get(`${BASE_URL}/wallet`)
        wallet.value = response.data
    } catch (error) {
        console.log(error)
    }
}

async function getTransactionDetails() {
    try {
        const response = await axios.get(`${BASE_URL}/transactions`)
        transactions.value = response.data
    } catch (error) {
        console.log(error)
    }
}

export {
    getWalletDetails,
    getTransactionDetails,
    wallet,
    transactions
}