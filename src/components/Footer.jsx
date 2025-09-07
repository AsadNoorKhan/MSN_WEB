import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '@/assets/logo.png';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (email) {
            console.log('Newsletter subscription:', email);
            setEmail('');
        }
    };
    const facebook = "https://www.facebook.com/people/MSN-Academy/61564445365771";
    const instagram = "https://www.instagram.com/msn_academytech";
    const whatsapp = "https://www.whatsapp.com/channel/0029VbB1SmpGJP8B1EltoM13";
    const linkedin = "https://www.linkedin.com/company/msn-academy269";
    const youtube = "https://www.youtube.com/@MSNAcademy-Officials";

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden min-h-[400px]">
            {/* Background geometric design - exact match to image */}
            <div className="absolute inset-0">
                {/* Main red diagonal section */}
                <div
                    className="absolute top-0 right-0 bg-red-600 h-full"
                    style={{
                        width: '45%',
                        clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    }}
                ></div>
                {/* Darker red overlay section */}
                <div
                    className="absolute top-0 right-0 bg-red-700 h-full"
                    style={{
                        width: '30%',
                        clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Logo Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-8">
                            <img
                                src={logo}
                                alt="MSN Academy"
                                className="h-16 sm:h-20 w-auto"
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-white font-medium text-sm mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Our Courses</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Testimonials</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog Posts</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1">
                        <h3 className="text-white font-medium text-sm mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">FAQs</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Events</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Community</a></li>
                        </ul>
                    </div>

                    {/* Stay Updated */}
                    <div className="col-span-1">
                        <h3 className="text-white font-medium text-sm mb-6">Stay Updated</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Newsletter</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Webinars</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Workshops</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Resources</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Feedback</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription - positioned in red area */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 relative z-20">
                        <div className="pl-0 sm:pl-4">
                            <h3 className="text-white font-medium text-sm mb-4">Subscribe</h3>
                            <p className="text-white text-xs mb-6 leading-relaxed max-w-full sm:max-w-48">
                                Join our newsletter for the latest updates and exclusive offers.
                            </p>
                            <div className="space-y-3 max-w-full sm:max-w-48">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 text-sm rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="bg-slate-900 text-white px-6 py-2 text-sm font-medium hover:bg-slate-800 transition-colors rounded w-full sm:w-auto"
                                >
                                    JOIN
                                </button>
                            </div>
                            <p className="text-white text-xs mt-4 leading-relaxed max-w-full sm:max-w-48">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-20 pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-gray-400 text-center sm:text-left">
                            <span>© 2024 MSN Academy. All rights reserved.</span>
                            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8">
                                <a href="#" className="hover:text-white transition-colors underline">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors underline">Terms of Use</a>
                                <a href="#" className="hover:text-white transition-colors underline">Cookie Settings</a>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3">
                                <Facebook 
                                onClick={() => window.open(facebook, '_blank')}
                                className="text-gray-400 hover:text-white transition-colors" size={16} />
                           
                                <Instagram 
                                onClick={() => window.open(instagram, '_blank')}
                                className="text-gray-400 hover:text-white transition-colors" size={16} />
                        
                                <FaWhatsapp 
                                onClick={() => window.open(whatsapp, '_blank')}
                                className="text-gray-400 hover:text-white transition-colors" size={16} />
                        
                                <Linkedin 
                                onClick={() => window.open(linkedin, '_blank')}
                                className="text-gray-400 hover:text-white transition-colors" size={16} />
                           
                                <Youtube size={16}
                                className="text-gray-400 hover:text-white transition-colors" 
                                onClick={() => window.open(youtube, '_blank')} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;