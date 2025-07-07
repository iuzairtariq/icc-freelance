// src/components/Dashboard.js
import React, { useState } from 'react';
// import { FiChevronDown, , FiCheck,  , FiCalendar, FiShoppingBag } from 'react-icons/fi';
// import StarBorderIcon from '@mui/icons-material/StarBorder'; // FiStar
// import AccessTimeIcon from '@mui/icons-material/AccessTime'; // FiClock
// import CachedIcon from '@mui/icons-material/Cached'; // FiRepeat
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; // FiShoppingBag
// import StarIcon from '@mui/icons-material/Star';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';

const Dashboard = () => {
    const [selectedPackage, setSelectedPackage] = useState('basic');
    const [orderFrequency, setOrderFrequency] = useState('single');
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-xl my-6">
            {/* Header Navigation */}
            {/* <div className="flex flex-wrap items-center justify-between border-b pb-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <div className="flex space-x-6 mt-2 sm:mt-0">
                    <button className="font-medium text-blue-600 hover:text-blue-800">Orders</button>
                    <button className="font-medium text-gray-600 hover:text-gray-800">Messages</button>
                    <button className="font-medium text-gray-600 hover:text-gray-800">Jobs</button>
                </div>
            </div> */}

            {/* Trending Section */}
            {/* <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Trending</h2>
                <div className="flex flex-wrap gap-2">
                    {['Graphics & Design', 'Programming & Tech', 'Digital Marketing', 'Video & Animation'].map((item, index) => (
                        <span key={index} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                            {item}
                        </span>
                    ))}
                </div>
            </div> */}

            {/* <div className="border-t border-gray-200 pt-6 mb-8"></div> */}

            {/* Service Title */}
            {/* <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                    I will create figma ui ux design website mockup and figma website design
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                        <div className="ml-3">
                            <div className="font-medium text-gray-900">Saba Akbar</div>
                            <div className="flex items-center">
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mr-2">Level 2</span>
                                <span className="text-xs text-gray-600">7 orders in queue</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-600 mr-2">UI designer</span>
                        <div className="flex text-yellow-400">
                            <FiStar className="fill-current" />
                            <FiStar className="fill-current" />
                            <FiStar className="fill-current" />
                            <FiStar className="fill-current" />
                            <FiStar />
                        </div>
                        <span className="ml-1 text-sm text-gray-700">4.7 (USB reviews)</span>
                    </div>
                </div>
            </div> */}

            {/* Satisfaction Banner */}
            {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-5 mb-8 text-center">
                <h2 className="text-2xl font-bold text-white">FIGMA WEBSITE UI UX DESIGN 100% SATISFACTION</h2>
            </div> */}

            {/* Reviews Section */}
            {/* <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">What people loved about this freelancer</h3>
                    <button className="text-blue-600 font-medium flex items-center">
                        See all reviews <FiChevronDown className="ml-1" />
                    </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="font-medium text-gray-900">tbliss44</div>
                            <div className="text-sm text-gray-600">United States</div>
                        </div>
                        <div className="flex text-yellow-400">
                            <FiCheck className="text-green-500 bg-green-100 rounded-full p-0.5 mr-1" />
                            <FiCheck className="text-green-500 bg-green-100 rounded-full p-0.5 mr-1" />
                            <FiCheck className="text-green-500 bg-green-100 rounded-full p-0.5 mr-1" />
                            <FiCheck className="text-green-500 bg-green-100 rounded-full p-0.5 mr-1" />
                            <FiCheck className="text-green-500 bg-green-100 rounded-full p-0.5" />
                        </div>
                    </div>
                    <p className="text-gray-700 mb-2">
                        Saba exceeded all expectations! Saba understood my vision perfectly and created a website far beyond what I had envisioned. I'm recommending Saba to everyone... <span className="text-blue-600">See more</span>
                    </p>
                    <div className="text-sm text-gray-500">2 months ago</div>
                </div>
            </div> */}

            {/* Order Options */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Order options</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Basic Package */}
                    <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${selectedPackage === 'basic'
                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                : 'border-gray-300 hover:border-blue-300'
                            }`}
                        onClick={() => setSelectedPackage('basic')}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-bold text-gray-900">Basic</h4>
                                <div className="text-xl font-bold text-gray-900">PKR 2,980</div>
                            </div>
                            {selectedPackage === 'basic' && (
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                    <CheckIcon className="text-white text-sm" />
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Single page I will create figma ui ux design website mockup and figma website design</p>
                    </div>

                    {/* Standard Package */}
                    <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${selectedPackage === 'standard'
                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                : 'border-gray-300 hover:border-blue-300'
                            }`}
                        onClick={() => setSelectedPackage('standard')}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-bold text-gray-900">Standard</h4>
                                <div className="text-xl font-bold text-gray-900">PKR 5,980</div>
                            </div>
                            {selectedPackage === 'standard' && (
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                    <CheckIcon className="text-white text-sm" />
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Multi-page design with responsive layouts and basic interactions</p>
                    </div>

                    {/* Premium Package */}
                    <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${selectedPackage === 'premium'
                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                : 'border-gray-300 hover:border-blue-300'
                            }`}
                        onClick={() => setSelectedPackage('premium')}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-bold text-gray-900">Premium</h4>
                                <div className="text-xl font-bold text-gray-900">PKR 9,980</div>
                            </div>
                            {selectedPackage === 'premium' && (
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                    <CheckIcon className="text-white text-sm" />
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Complete website design with prototypes, interactions, and style guide</p>
                    </div>
                </div>
            </div>

            {/* Order Frequency */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">How often do you need this order?</h3>

                <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Delivery Options</th>
                                <th className="text-right py-3 px-4 font-medium text-gray-700">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className={`border-b border-gray-200 cursor-pointer hover:bg-blue-50 ${orderFrequency === 'single' ? 'bg-blue-50' : ''
                                    }`}
                                onClick={() => setOrderFrequency('single')}
                            >
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        {orderFrequency === 'single' && (
                                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                                                <CheckIcon className="text-white text-xs" />
                                            </div>
                                        )}
                                        <span className="font-medium">Single order</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-right font-medium">PKR 2,980</td>
                            </tr>
                            <tr
                                className={`cursor-pointer hover:bg-blue-50 ${orderFrequency === 'subscription' ? 'bg-blue-50' : ''
                                    }`}
                                onClick={() => setOrderFrequency('subscription')}
                            >
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        {orderFrequency === 'subscription' && (
                                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                                                <CheckIcon className="text-white text-xs" />
                                            </div>
                                        )}
                                        <span className="font-medium">Subscribe to Save</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-right">
                                    <div className="text-green-600 font-medium">Save 5%-10%</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {orderFrequency === 'subscription' && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                            <li>Save time & effort with automatic monthly orders</li>
                            <li>No commitment—cancel anytime</li>
                            <li>Work long-term with your seller for best results</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-700">Gig Quantity</div>
                <div className="flex items-center">
                    <button
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        onClick={decreaseQuantity}
                    >
                        -
                    </button>
                    <span className="mx-4 font-medium text-gray-900">{quantity}</span>
                    <button
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-bold text-gray-900">PKR 2,980</div>
                    <div className="text-gray-700">Single order</div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center mb-2">
                        <ShoppingBagIcon className="text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">Basic package</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <ShoppingBagIcon className="text-blue-600 mr-2" />
                        <span className="text-gray-600">3-day delivery</span>
                    </div>
                    <div className="flex items-center">
                        <ShoppingBagIcon className="text-blue-600 mr-2" />
                        <span className="text-gray-600">Unlimited revisions</span>
                    </div>
                </div>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                Continue
            </button>

            <div className="text-center text-gray-500 text-sm mt-4">
                You won't be charged yet
            </div>
        </div>
    );
};

export default Dashboard;