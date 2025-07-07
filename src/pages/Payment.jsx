import React, { useEffect, useRef, useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';   // instead of FaCcVisa
import PaymentIcon from '@mui/icons-material/Payment';      // instead of FaCcMastercard / FaCcAmex / FaCcDiscover
import LockIcon from '@mui/icons-material/Lock';         // instead of FaLock
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DoneIcon from '@mui/icons-material/Done';
import figmathumbnail from '../assets/figmathumbnail.jpg'

const Payment = () => {
    const [method, setMethod] = useState('card');
    const cardRef = useRef(null);
    const paypalRef = useRef(null);
    const [cardHeight, setCardHeight] = useState('0px');
    const [paypalHeight, setPaypalHeight] = useState('0px');

    useEffect(() => {
        setCardHeight(method === 'card' ? `${cardRef.current.scrollHeight}px` : '0px');
        setPaypalHeight(method === 'paypal' ? `${paypalRef.current.scrollHeight}px` : '0px');
    }, [method]);

    return (
        <div className="flex flex-col md:flex-row justify-center gap-10 lg:gap-20 py-4">
            <div className="flex flex-col gap-5 w-full md:w-3/5 lg:w-2/3">
                {/* Left Form */}
                <div className="w-full border border-gray-200">
                    <div className='bg-gray-50 border-b border-gray-300 px-3 py-2'>
                        <h2 className="text-start text-lg text-gray-800 font-semibold">Payment Options</h2>
                    </div>
                    {/* Card Option */}
                    <div className="border-b border-gray-300 overflow-hidden">
                        <button
                            onClick={() => setMethod('card')}
                            className="cursor-pointer w-full flex justify-between items-center px-4 py-3 bg-white"
                        >
                            <label className="cursor-pointer flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={method === 'card'}
                                    onChange={() => setMethod('card')}
                                    className="form-radio text-blue-600 h-5 w-5 cursor-pointer"
                                />
                                <span className="pl-2 text-lg text-gray-800">Credit & Debit Cards</span>
                            </label>
                            {method === 'card' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </button>
                        <div
                            ref={cardRef}
                            style={{ maxHeight: cardHeight }}
                            className="bg-gray-100 transition-all duration-300 overflow-hidden"
                        >
                            <form className="space-y-4 bg-gray-50 p-8">
                                {/* Card number */}
                                <div>
                                    <label className="text-start text-gray-700 block text-sm font-medium mb-1">
                                        Card number
                                    </label>
                                    <div className="relative">
                                        <CreditCardIcon className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full border border-gray-400 rounded-lg text-sm pl-12 py-3 focus:outline-red-500"
                                        />
                                        <PaymentIcon className="absolute right-3 top-3 text-gray-400" />
                                    </div>
                                </div>
                                {/* Expiration and security code */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-start text-gray-700 block text-sm font-medium mb-1">
                                            Expiration date
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="MM / YY"
                                            className="w-full border border-gray-400 rounded-lg text-sm px-4 py-3 focus:outline-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-start text-gray-700 block text-sm font-medium mb-1">
                                            Security code <span className="text-gray-700" title="What's this?">?</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            className="w-full border border-gray-400 rounded-lg text-sm px-4 py-3 focus:outline-red-500"
                                        />
                                    </div>
                                </div>
                                {/* Cardholder and display name */}
                                <div>
                                    <label className="text-start text-gray-700 block text-sm font-medium mb-1">
                                        Cardholder's name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="As written on card"
                                        className="w-full border border-gray-400 rounded-lg text-sm px-4 py-3 focus:outline-red-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-start text-gray-700 block text-sm font-medium mb-1">
                                        Card display name <span className="text-gray-700">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Marketing card, Legal team card…"
                                        className="w-full border border-gray-400 rounded-lg text-sm px-4 py-3 focus:outline-red-500"
                                        maxLength={30}
                                    />
                                    <div className="text-right text-xs text-gray-500">0/30</div>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4" />
                                    <label className="ml-2 text-sm">Save this card for future payments</label>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* PayPal Option */}
                    <div className="border-b border-gray-300 overflow-hidden">
                        <button
                            onClick={() => setMethod('paypal')}
                            className="w-full flex justify-between items-center px-4 py-3 bg-white cursor-pointer"
                        >
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="paypal"
                                    checked={method === 'paypal'}
                                    onChange={() => setMethod('paypal')}
                                    className="form-radio text-blue-600 h-5 w-5 cursor-pointer"
                                />
                                <span className="pl-2 text-lg text-gray-800 cursor-pointer">PayPal</span>
                            </label>
                            {method === 'paypal' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </button>
                        <div
                            ref={paypalRef}
                            style={{ maxHeight: paypalHeight }}
                            className="bg-gray-50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-4 text-base text-gray-700">
                                Redirect to PayPal for payment.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Billing Info */}
                <div className="w-full border border-gray-200">
                    <div className='bg-gray-50 border-b border-gray-300 px-3 py-2'>
                        <h2 className="text-start text-lg text-gray-800 font-semibold">Billing Information</h2>
                    </div>
                    <div className='p-6'>
                        <div className='flex justify-between gap-2 items-center space-y-1'>
                            <p className='text-base text-start'>Your invoice will be issued according to the details listed here.</p>
                            <button className='shrink-0 text-base border px-3 py-1 cursor-pointer hover:bg-gray-50'>Add details</button>
                        </div>
                        <div>
                            <p className='text-base text-start font-semibold'>butt1997</p>
                            <p className='text-base text-start'>Pakistan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right summary */}
            <div className="w-full md:w-2/5 lg:w-1/3">
                <div className='border border-gray-200 bg-gray-50 py-3 px-5'>
                    <div className="flex gap-5 items-center mb-3">
                        <img src={figmathumbnail} alt="Figma thumbnail" className="w-32 h-16 object-cover rounded" />
                        <div className="">
                            <p className="text-xs text-gray-800 text-start font-medium">I will create figma ui ux design website mockup and figma website design</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className='text-sm font-semibold text-gray-800'>Single page</span>
                            <span className='text-sm font-semibold text-gray-800'>PKR 2,979.41</span>
                        </div>
                        <ul className="text-start text-sm space-y-1 text-gray-700">
                            <li><DoneIcon fontSize="small" /> 1 page</li>
                            <li><DoneIcon fontSize="small" /> Responsive design</li>
                            <li><DoneIcon fontSize="small" /> Source file</li>
                            <li><DoneIcon fontSize="small" /> Unlimited revisions</li>
                        </ul>
                    </div>
                </div>
                <div className="text-start py-3 px-5 border-b border-x border-gray-200">
                    <p className="text-sm text-gray-800">Enter promo code <span className="text-gray-800">?</span></p>
                </div>
                <div className="flex justify-between py-3 px-5 text-sm border-b border-x border-gray-200">
                    <span>Service fee <span className="text-gray-800">?</span></span>
                    <span>PKR 1,206.66</span>
                </div>
                <div className='px-5 border-x border-gray-200 border-b'>
                    <div className="pt-3 flex justify-between font-semibold">
                        <span className='text-base text-gray-800'>Total</span>
                        <span className='text-base text-gray-800'>PKR 4,186.07</span>
                    </div>
                    <p className="text-xs text-gray-800 text-start pt-2">Total delivery time 4 days</p>
                    <p className='text-xs text-start text-gray-800 py-3'>By clicking the button, you agree to Fiverr's <span className='underline'>Terms of Service</span> and <span className='underline'>Payment Terms</span></p>
                    <button className="w-full py-2 bg-black text-white font-medium rounded hover:opacity-90 mb-2 text-base">Confirm & Pay</button>
                    <div className="flex items-center justify-center text-sm font-medium text-gray-800">
                        <LockIcon className="mr-1" fontSize="small" /> SSL Secure Payment
                    </div>
                    <p className="px-5 pt-2 pb-4 text-xs text-start text-gray-800 mt-2 border-gray-200">You will be charged PKR 4,186.07. Total amount includes currency conversion fees.</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;
