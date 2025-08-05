// // import React from 'react'

// // const Pricing = () => {
// //   return (
// //     <div>
// //       <h2>Pricing Plans</h2>
// //       <ul>
// //         <li>Basic Plan - $10/month</li>
// //         <li>Pro Plan - $20/month</li>
// //         <li>Enterprise Plan - $30/month</li>
// //       </ul>
// //     </div>
// //   )
// // }

// // export default Pricing;




// import React from 'react';
// import { FaCheck, FaStar, FaRocket, FaHeadset, FaShieldAlt } from 'react-icons/fa';

// const PricingPage = () => {
//   const plans = [
//     {
//       name: "Starter",
//       price: "$0",
//       period: "forever",
//       bestValue: false,
//       features: [
//         "Up to 10 employees",
//         "Basic attendance tracking",
//         "Leave management",
//         "Email support",
//         "1 GB document storage"
//       ],
//       cta: "Get Started"
//     },
//     {
//       name: "Professional",
//       price: "$29",
//       period: "per month",
//       bestValue: true,
//       features: [
//         "Up to 50 employees",
//         "Advanced analytics",
//         "Payroll processing",
//         "Priority support",
//         "10 GB document storage",
//         "Mobile app access",
//         "Task management"
//       ],
//       cta: "Start Free Trial"
//     },
//     {
//       name: "Enterprise",
//       price: "$99",
//       period: "per month",
//       bestValue: false,
//       features: [
//         "Unlimited employees",
//         "AI-powered insights",
//         "Custom workflows",
//         "24/7 dedicated support",
//         "100 GB document storage",
//         "API access",
//         "Single sign-on (SSO)",
//         "HR compliance tools"
//       ],
//       cta: "Contact Sales"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
//             Simple, Transparent Pricing
//           </h1>
//           <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
//             Choose the perfect plan for your business needs
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {plans.map((plan, index) => (
//             <div 
//               key={index} 
//               className={`relative rounded-2xl shadow-xl overflow-hidden ${
//                 plan.bestValue ? "ring-2 ring-blue-500" : "border border-gray-200"
//               }`}
//             >
//               {plan.bestValue && (
//                 <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
//                   <FaStar className="inline mr-1" /> BEST VALUE
//                 </div>
//               )}
              
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
//                 <div className="mt-4 flex items-baseline">
//                   <span className="text-4xl font-extrabold">{plan.price}</span>
//                   <span className="ml-1 text-lg font-medium text-gray-500">/{plan.period}</span>
//                 </div>
//                 <p className="mt-4 text-gray-600">
//                   Perfect for {plan.name === "Starter" ? "small teams" : plan.name === "Professional" ? "growing businesses" : "large organizations"}
//                 </p>
                
//                 <ul className="mt-8 space-y-3">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
//                       <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
//                       <span className="ml-3 text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="px-6 pb-8">
//                 <button
//                   className={`w-full py-3 px-6 rounded-lg font-bold ${
//                     plan.bestValue 
//                       ? "bg-blue-600 hover:bg-blue-700 text-white" 
//                       : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//                   } transition duration-200`}
//                 >
//                   {plan.cta}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Features Comparison */}
//         <div className="mt-24">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             Compare All Features
//           </h2>
          
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="px-6 py-4 text-left font-bold text-gray-900">Features</th>
//                   <th className="px-6 py-4 text-center font-bold text-gray-900">Starter</th>
//                   <th className="px-6 py-4 text-center font-bold text-gray-900">Professional</th>
//                   <th className="px-6 py-4 text-center font-bold text-gray-900">Enterprise</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   "Number of Employees",
//                   "Attendance Tracking",
//                   "Leave Management",
//                   "Payroll Processing",
//                   "Document Storage",
//                   "Mobile App Access",
//                   "Priority Support",
//                   "API Access"
//                 ].map((feature, i) => (
//                   <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
//                     <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
//                     <td className="px-6 py-4 text-center">
//                       {i <= 3 ? <FaCheck className="inline text-green-500" /> : <span className="text-gray-400">—</span>}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {i <= 5 ? <FaCheck className="inline text-green-500" /> : i === 6 ? <FaCheck className="inline text-green-500" /> : <span className="text-gray-400">—</span>}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <FaCheck className="inline text-green-500" />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-24">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             Frequently Asked Questions
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 question: "Can I switch plans later?",
//                 answer: "Yes, you can upgrade or downgrade your plan at any time."
//               },
//               {
//                 question: "Is there a free trial?",
//                 answer: "The Professional plan comes with a 14-day free trial."
//               },
//               {
//                 question: "What payment methods do you accept?",
//                 answer: "We accept all major credit cards, PayPal, and bank transfers."
//               },
//               {
//                 question: "Do you offer discounts for non-profits?",
//                 answer: "Yes, we offer 20% discount for registered non-profit organizations."
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
//                 <p className="mt-2 text-gray-600">{item.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Final CTA */}
//         <div className="mt-24 text-center bg-blue-50 rounded-xl p-8">
//           <FaRocket className="mx-auto h-12 w-12 text-blue-500" />
//           <h2 className="mt-4 text-3xl font-bold text-gray-900">
//             Ready to transform your HR management?
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
//             Join thousands of businesses using our platform to streamline their workforce.
//           </p>
//           <div className="mt-8 flex justify-center space-x-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
//               Start Free Trial
//             </button>
//             <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg border border-gray-300 transition duration-200">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;






import React, { useState } from 'react';
import { FaCheck, FaStar, FaRocket, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PricingPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      bestValue: false,
      features: [
        "Up to 10 employees",
        "Basic attendance tracking",
        "Leave management",
        "Email support",
        "1 GB document storage"
      ],
      cta: "Get Started",
      action: () => handleGetStarted()
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      bestValue: true,
      features: [
        "Up to 50 employees",
        "Advanced analytics",
        "Payroll processing",
        "Priority support",
        "10 GB document storage",
        "Mobile app access",
        "Task management"
      ],
      cta: "Start Free Trial",
      action: () => handleFreeTrial()
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      bestValue: false,
      features: [
        "Unlimited employees",
        "AI-powered insights",
        "Custom workflows",
        "24/7 dedicated support",
        "100 GB document storage",
        "API access",
        "Single sign-on (SSO)",
        "HR compliance tools"
      ],
      cta: "Contact Sales",
      action: () => handleContactSales()
    }
  ];

  const handleGetStarted = () => {
    toast.success('🎉 Successfully signed up for Starter plan!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleFreeTrial = () => {
    window.location.href = '/signup?plan=professional';
  };

  const handleContactSales = () => {
    setShowContactForm(true);
    // Scroll to contact form
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success('📧 Your message has been sent! Our sales team will contact you shortly.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setShowContactForm(false);
    setContactData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl shadow-xl overflow-hidden ${
                plan.bestValue ? "ring-2 ring-blue-500" : "border border-gray-200"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  <FaStar className="inline mr-1" /> BEST VALUE
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-lg font-medium text-gray-500">/{plan.period}</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Perfect for {plan.name === "Starter" ? "small teams" : plan.name === "Professional" ? "growing businesses" : "large organizations"}
                </p>
                
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-8">
                <button
                  onClick={plan.action}
                  className={`w-full py-3 px-6 rounded-lg font-bold ${
                    plan.bestValue 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  } transition duration-200`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form (hidden by default) */}
        {showContactForm && (
          <div id="contact-form" className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Sales Team</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Features Comparison */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Compare All Features
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900">Starter</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900">Professional</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Number of Employees",
                  "Attendance Tracking",
                  "Leave Management",
                  "Payroll Processing",
                  "Document Storage",
                  "Mobile App Access",
                  "Priority Support",
                  "API Access"
                ].map((feature, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                    <td className="px-6 py-4 text-center">
                      {i <= 3 ? <FaCheck className="inline text-green-500" /> : <span className="text-gray-400">—</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {i <= 5 ? <FaCheck className="inline text-green-500" /> : i === 6 ? <FaCheck className="inline text-green-500" /> : <span className="text-gray-400">—</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <FaCheck className="inline text-green-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time."
              },
              {
                question: "Is there a free trial?",
                answer: "The Professional plan comes with a 14-day free trial."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers."
              },
              {
                question: "Do you offer discounts for non-profits?",
                answer: "Yes, we offer 20% discount for registered non-profit organizations."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center bg-blue-50 rounded-xl p-8">
          <FaRocket className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Ready to transform your HR management?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses using our platform to streamline their workforce.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={handleFreeTrial}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              Start Free Trial
            </button>
            <button 
              onClick={handleContactSales}
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg border border-gray-300 transition duration-200"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;