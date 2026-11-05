export type Currency = 'EUR'

export interface PaymentResult {
    success: boolean
    transactionId: string
    amount: number 
    currency: Currency
    status: "succeeded"
    timestamp: string
}