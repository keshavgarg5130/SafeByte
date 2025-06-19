'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 px-4">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6">
              SafeByte
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-green-300 mb-8 max-w-2xl mx-auto">
              Secure Your Digital World with Expert Solutions
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-950 transition-all transform hover:scale-105"
              >
                Our Services
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <img
            src="/hacking.gif"
            alt="Cyber Security Animation"
            className="w-96 h-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-16">
              Our Cyber Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <a href="/services/password-manager" className="block h-full">
                <div className="bg-gradient-to-r from-blue-900 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-gray-800 h-full">
                  <div className="text-green-400 text-4xl mb-4 transition-transform duration-300 hover:scale-110">
                    <i className="fas fa-key"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2 transition-colors duration-300 hover:text-green-300">Smart Password Manager</h3>
                  <p className="text-green-300 transition-opacity duration-300 hover:opacity-100">
                    Secure encrypted password manager with local SQLite storage and military-grade encryption. Store, manage, and generate strong passwords with ease.
                  </p>
                  <div className="mt-4 text-green-400 font-medium">Learn more →</div>
                </div>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <a href="/services/malware-detector" className="block h-full">
                <div className="bg-gradient-to-r from-red-900 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-700 hover:to-gray-800 h-full">
                  <div className="text-green-400 text-4xl mb-4 transition-transform duration-300 hover:scale-110">
                    <i className="fas fa-lock"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2 transition-colors duration-300 hover:text-green-300">Malware Detector Tool</h3>
                  <p className="text-green-300 transition-opacity duration-300 hover:opacity-100">
                    Advanced static analysis tool to detect and analyze potential malware with comprehensive reporting. Perfect for small businesses and security enthusiasts.
                  </p>
                  <div className="mt-4 text-green-400 font-medium">Learn more →</div>
                </div>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <a href="/services/vulnerability-assessment" className="block h-full">
                <div className="bg-gradient-to-r from-purple-900 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:to-gray-800 h-full">
                  <div className="text-green-400 text-4xl mb-4 transition-transform duration-300 hover:scale-110">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2 transition-colors duration-300 hover:text-green-300">Vulnerability Assessment Tool</h3>
                  <p className="text-green-300 transition-opacity duration-300 hover:opacity-100">
                    Comprehensive network scanning and vulnerability detection powered by Nmap and the National Vulnerability Database.
                  </p>
                  <div className="mt-4 text-green-400 font-medium">Learn more →</div>
                </div>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <a href="/services/file-crawler" className="block h-full">
                <div className="bg-gradient-to-r from-blue-900 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-gray-800 h-full">
                  <div className="text-green-400 text-4xl mb-4 transition-transform duration-300 hover:scale-110">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2 transition-colors duration-300 hover:text-green-300">File Crawler</h3>
                  <p className="text-green-300 transition-opacity duration-300 hover:opacity-100">
                    Intelligent file scanning system that monitors and analyzes files for suspicious activities and potential threats.
                  </p>
                  <div className="mt-4 text-green-400 font-medium">Learn more →</div>
                </div>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={500}>
              <a href="/services/screen-monitor" className="block h-full">
                <div className="bg-gradient-to-r from-red-900 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-700 hover:to-gray-800 h-full">
                  <div className="text-green-400 text-4xl mb-4 transition-transform duration-300 hover:scale-110">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2 transition-colors duration-300 hover:text-green-300">Screen Monitor</h3>
                  <p className="text-green-300 transition-opacity duration-300 hover:opacity-100">
                    Real-time screen activity monitoring system that detects and alerts on suspicious activities and unauthorized access.
                  </p>
                  <div className="mt-4 text-green-400 font-medium">Learn more →</div>
                </div>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <a href="/services/usb-detector" className="block h-full">
                <div className="bg-gradient-to-r from-purple-900 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:to-gray-800 h-full">
                  <div className="mb-4 transition-transform duration-300 hover:scale-110">
                    <img src="/usb.png" alt="USB Icon" className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2 transition-colors duration-300 hover:text-green-300">USB Detector</h3>
                  <p className="text-green-300 transition-opacity duration-300 hover:opacity-100">
                    Advanced USB device monitoring system that detects and manages USB devices in real-time, preventing unauthorized access.
                  </p>
                  <div className="mt-4 text-green-400 font-medium">Learn more →</div>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              About Us
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-gray-600 mb-8">
                At SafeByte, we're dedicated to protecting your digital assets. Our team of certified security experts provides comprehensive solutions to keep your business safe in an ever-evolving threat landscape.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">20+</h3>
                  <p className="text-gray-600">Months of Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">5+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="">
              <AnimatedSection delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide cutting-edge cybersecurity solutions that empower businesses to operate safely in the digital world.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
        </div>
      </section>

      {/* Book 1:1 Call Section */}
      <section id="book-call" className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-8">
                Personalized Cybersecurity Solutions
              </h2>
              <p className="text-xl text-green-300 mb-8">
                Every business is unique. That's why we offer customized 1:1 consultations to understand your specific needs and provide tailored security solutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-bullseye text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">Custom Assessment</h3>
                    <p className="text-green-300">We analyze your business's unique security needs and threats</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">Tailored Solutions</h3>
                    <p className="text-green-300">We provide customized security strategies for your business</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">Continuous Support</h3>
                    <p className="text-green-300">Ongoing monitoring and updates to keep your security current</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Book Your 1:1 Consultation</h3>
              <ConsultationForm />
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-16">
              What Our Customers Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-400">VG</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Vikrant Gupta</h3>
                  <p className="text-green-300">CEO, TechSecure</p>
                </div>
              </div>
              <p className="text-green-300 italic">
                "SafeByte's Smart Password Manager has revolutionized our security protocols. The OTP-based verification is a game-changer for our team's data protection."
              </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">SB</span>
                  </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Somnath Bhatiya</h3>
                  <p className="text-green-300">CTO, CyberGuard</p>
                </div>
              </div>
              <p className="text-green-300 italic">
                "The Malware Detector Tool from SafeByte is incredibly efficient. It has helped us identify and prevent multiple potential security threats in our network."
              </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">CK</span>
                  </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Dr. Chandan Karfa</h3>
                  <p className="text-green-300">Professor, IIT Guwahati</p>
                </div>
              </div>
              <p className="text-green-300 italic">
                "SafeByte's cybersecurity solutions are cutting-edge and highly effective. Their team's expertise in both theoretical and practical aspects of cybersecurity is truly commendable."
              </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-900 text-green-300 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">SafeByte</h3>
              <p className="text-green-300 mb-6">
                Expert Cyber Security Solutions for Your Business
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/safebyte_team?igsh=ZHRkZXFzeGQ1NTJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://youtube.com/@safebyte-f2i?si=uVjryVxXNgLF-0Yf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/safe-byte-a43a90361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-green-300 hover:text-green-400 transition-colors">
                    Smart Password Manager
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-green-300 hover:text-green-400 transition-colors">
                    Malware Detector Tool
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-green-300 hover:text-green-400 transition-colors">
                    Vulnerability Assessment Tool
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Get In Touch</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-phone text-green-400"></i>
                    <span>+91 89238 17932</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-envelope text-green-400"></i>
                    <span>safebyte@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-green-300 hover:text-green-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-green-300 hover:text-green-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-green-300 hover:text-green-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-green-300 hover:text-green-400 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#book-call" className="text-green-300 hover:text-green-400 transition-colors">
                    Book Consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-500/10 mt-16 pt-8 text-center">
            <p className="text-green-300">
              &copy; {new Date().getFullYear()} SafeByte. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    productDetails: '',
    productList: '1:1 Consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send request');
      }

      const data = await response.json();

      if (response.ok) {
        toast.success('Your consultation request has been sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          productDetails: '',
          productList: '1:1 Consultation'
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to send request. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-3 bg-gray-700 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-green-300"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-gray-700 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-green-300"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-3 bg-gray-700 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-green-300"
          required
        />
      </div>
      <div>
        <textarea
          name="productDetails"
          value={formData.productDetails}
          onChange={handleChange}
          placeholder="Tell us about your business and security needs"
          className="w-full px-4 py-3 bg-gray-700 border border-green-500 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-green-400 text-green-300"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-green-500 to-green-400 text-black py-3 rounded-lg hover:from-green-400 hover:to-green-500 transition-all transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
      </button>
    </form>
  );
}
