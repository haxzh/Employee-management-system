
// const Features = () => {
//   return (
//     <div>
//       <h2>Features</h2>
//       <ul>
//         <li>Feature 1</li>
//         <li>Feature 2</li>
//         <li>Feature 3</li>
//       </ul>
//     </div>
//   )
// }

// export default Features;



import React from 'react';
import { FaUsers, FaClock, FaMoneyBillWave, FaTasks, FaChartLine, FaFileAlt, FaRobot, FaMobileAlt, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import { IoMdDocument } from 'react-icons/io';
import { BsGraphUp, BsChatSquareText } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi';

const FeaturesPage = () => {
  const features = [
    {
      icon: <FaUsers size={40} className="text-blue-500" />,
      title: "Employee Directory",
      desc: "Searchable database of all employees with filters and export options."
    },
    {
      icon: <FaClock size={40} className="text-green-500" />,
      title: "Attendance Tracking",
      desc: "Clock-in/out with GPS tracking, timesheets, and overtime calculations."
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-purple-500" />,
      title: "Payroll Management",
      desc: "Automated salary processing, tax deductions, and payslip generation."
    },
    {
      icon: <FaTasks size={40} className="text-orange-500" />,
      title: "Task Management",
      desc: "Assign tasks, track progress, and set deadlines with reminders."
    },
    {
      icon: <FaChartLine size={40} className="text-red-500" />,
      title: "Performance Analytics",
      desc: "Track KPIs, employee reviews, and 360-degree feedback."
    },
    {
      icon: <IoMdDocument size={40} className="text-indigo-500" />,
      title: "Document Management",
      desc: "Secure storage for contracts, resumes, and digital signatures."
    },
    {
      icon: <FaRobot size={40} className="text-teal-500" />,
      title: "AI HR Assistant",
      desc: "Chatbot for employee queries and automated onboarding."
    },
    {
      icon: <FaMobileAlt size={40} className="text-pink-500" />,
      title: "Mobile App",
      desc: "iOS/Android app for attendance, leave requests, and notifications."
    },
    {
      icon: <FaTrophy size={40} className="text-yellow-500" />,
      title: "Gamification",
      desc: "Rewards, badges, and Employee of the Month recognition."
    },
    {
      icon: <FaCalendarAlt size={40} className="text-blue-400" />,
      title: "Shift Scheduling",
      desc: "Create, assign, and swap shifts with conflict detection."
    },
    {
      icon: <BsGraphUp size={40} className="text-green-400" />,
      title: "Workforce Analytics",
      desc: "Visual reports on productivity, turnover, and department performance."
    },
    {
      icon: <BsChatSquareText size={40} className="text-purple-400" />,
      title: "Employee Engagement",
      desc: "Surveys, feedback forms, and mood tracking."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Powerful Features
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Everything you need to manage your workforce efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your HR Management?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Join thousands of businesses already using our platform.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;