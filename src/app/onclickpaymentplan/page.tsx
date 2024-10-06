'use client';
import { useState, useEffect } from 'react';
const PaymentPage = () => {
  const [plan, setPlan] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'incomplete' | null>(null);
  // Fetch the query parameters only on the client side after the component mounts
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const fetchedPlan = searchParams.get('plan');
    const fetchedAmount = searchParams.get('amount');
    setPlan(fetchedPlan);
    setAmount(fetchedAmount);
  }, []); // Empty dependency array to run only on mount

  const checkPaymentStatus = () => {
    // Mock backend call to check if payment is complete
    const mockPaymentAmount = 20000;  // This should come from actual payment verification

    if (Number(amount) === mockPaymentAmount) {
      setPaymentStatus('success');
    } else {
      setPaymentStatus('incomplete');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 rounded-lg bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <p>Plan: {plan ? plan : 'Loading...'}</p>
        <p>Amount: {amount ? `₦${amount}` : 'Loading...'}</p>
        <p>Bank: Opay</p>
        <p>Account Number: 9018944777</p>
        <p>Account Name: Amadi Sixtus Tochukwu</p>

       

      
      </div>
    </div>
  );
};

export default PaymentPage;




