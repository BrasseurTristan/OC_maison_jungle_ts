export interface PaymentData {
    amount: number
    cardNumber: string
    expiryDate: string
    cvv: string
    cardholderName: string
}

export type PaymentMethod = Pick<PaymentData, 'cardNumber' | 'expiryDate' | 'cvv'>

export type PaymentFormData = Omit<PaymentData, 'amount'>

export type PaymentFieldName = keyof PaymentFormData

export type PaymentFormErrors = Partial<Record<PaymentFieldName, string | null>>
