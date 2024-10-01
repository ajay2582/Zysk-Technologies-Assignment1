import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <a href="#" className="text-purple-600 hover:underline flex items-center">
        Learn more <span className="ml-1">→</span>
      </a>
    </div>
  );
};

const Fifth2 = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon="🔔"
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <FeatureCard
          icon="⚡"
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        />
        <FeatureCard
          icon="📊"
          title="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
        />
      </div>
    </div>
  );
};

export default Fifth2;


