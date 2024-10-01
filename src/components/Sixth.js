import React, { useState } from 'react';

import img1 from "../images/Ajayimage.jpg";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="text-gray-500 mt-2">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    { question: 'Can I change my plan later?', answer: '' },
    { question: 'What is your cancellation policy?', answer: '' },
    { question: 'Can other info be added to an invoice?', answer: '' },
    { question: 'How does billing work?', answer: '' },
    { question: 'How do I change my account email?', answer: '' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently asked questions</h2>
      <p className="text-center text-gray-500 mb-8">
        Everything you need to know about the product and billing.
      </p>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center  mb-4">
          {/* Example avatars */}
          <img 
            src={img1}
            alt="Avatar 1"
            className="w-12 h-12 rounded-full mt-2"
          />
          <img
            src={img1}
            alt="Avatar 2"
            className="w-12 h-12 rounded-full -ml-4  "
          />
          <img
            src={img1}
            alt="Avatar 3"
            className="w-12 h-12 rounded-full  -ml-4  mt-2"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
        <p className="text-gray-500 mb-6">
          Can’t find the answer you’re looking for? Please chat with our friendly team.
        </p>
        <a
          href="#"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

const Sixth = () => {
  return (
    <div>
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Sixth;

