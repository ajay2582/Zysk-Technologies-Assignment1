import React from 'react';
import img1 from "../images/kenny-eliason-h0rXrHzhFXU-unsplash.jpg";

import img2 from "../images/sam-mcghee-4siwRamtFAk-unsplash.jpg";
import img3 from "../images/sam-mcghee-KieCLNzKoBo-unsplash.jpg";
import img4 from "../images/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg";
import img5 from "../images/tim-gouw-bwki71ap-y8-unsplash.jpg";
import img6 from "../images/vanilla-bear-films-JEwNQerg3Hs-unsplash.jpg";

const BlogCard = ({ image, category, title, description, author, date, authorImage }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <img src={img2} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-purple-600 text-sm font-medium">{category}</span>
        <h3 className="text-lg font-semibold mt-2">
          <a href="#" className="hover:underline">
            {title}
          </a>
          <span className="ml-2 text-xl">↗</span>
        </h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="flex items-center mt-4">
          <img src={img4} alt={author} className="w-8 h-8 rounded-full" />
          <div className="ml-3">
            <p className="text-sm font-medium">{author}</p>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Seventh = () => {
  const blogPosts = [
    {
      image: {img1},
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      authorImage: {img2},
    },
    {
      image: 'https://via.placeholder.com/300',
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      authorImage: 'https://via.placeholder.com/40',
    },
    {
      image: 'https://via.placeholder.com/300',
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      authorImage: 'https://via.placeholder.com/40',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Lastest blog posts</h2>
          <p className="text-gray-500">Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <a
          href="#"
          className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          View all posts
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
            authorImage={post.authorImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Seventh;
