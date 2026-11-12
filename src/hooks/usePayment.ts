import { useState } from "react";
import { PaymentService } from "../services/paymentService";
import type { PaymentData } from "../types/PaymentData";
import type { PaymentResult } from "../types/PaymentResult";

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [transactionResult, setTransactionResult] =
    useState<PaymentResult | null>(null);

  const processPayment = async (
    paymentData: PaymentData
  ): Promise<PaymentResult> => {
    setIsProcessing(true);
    setError(null);
    setSuccess(false);
    setTransactionResult(null);

    try {
      const result = await PaymentService.processPayment(paymentData);
      setSuccess(true);
      setTransactionResult(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPayment = (): void => {
    setError(null);
    setSuccess(false);
    setTransactionResult(null);
  };

  return {
    isProcessing,
    error,
    success,
    transactionResult,
    processPayment,
    resetPayment,
  };
};
