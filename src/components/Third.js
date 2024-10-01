import React from 'react';

const Third = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-50 text-center">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-lg text-gray-600">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Share team inboxes</h3>
          <p className="text-gray-600">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Deliver instant answers</h3>
          <p className="text-gray-600">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Manage your team with reports</h3>
          <p className="text-gray-600">
            Measure what matters with easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">💬</div>
          <h3 className="text-xl font-semibold mb-2">Connect with customers</h3>
          <p className="text-gray-600">
            Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">⌨️</div>
          <h3 className="text-xl font-semibold mb-2">Connect the tools you already use</h3>
          <p className="text-gray-600">
            Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold mb-2">Our people make the difference</h3>
          <p className="text-gray-600">
            We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Third;

