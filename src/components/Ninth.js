import React from 'react';
import { BsFillCaretRightSquareFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="  flext  justify-center items-center  bg-gray-100 text-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Product</h3>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Releases</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Media Kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Help centre</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Use Cases</h3>
            <ul>
              <li><a href="#">Startups</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Government</a></li>
              <li><a href="#">SaaS centre</a></li>
              <li><a href="#">Marketplaces</a></li>
              <li><a href="#">Ecommerce</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Social</h3>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">AngelList</a></li>
              <li><a href="#">Dribbble</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Legal</h3>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* <div className="text-center mt-4">
          <p>&copy; 2077 Untitled UI. All rights reserved.</p>
        </div> */}











    <footer className="bg-gray-100 text-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 mt-4 mr[-3]"> <BsFillCaretRightSquareFill /> </div>
            <h3 className="font-bold">Untitled UI</h3>
          </div>
          <p>&copy; 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>













      </div>
    </footer>
  );
}

export default Footer;