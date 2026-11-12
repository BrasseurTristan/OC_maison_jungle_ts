export interface PaymentData {
    amount: number
    cardNumber: string
    expiryDate: string
    cvv: string
    cardholderName: string
}

export type PaymentMethod = Pick<PaymentData, 'cardNumber' | 'expiryDate' | 'cvv'>
