import { FaLock, FaDatabase, FaShieldAlt, FaKey, FaSearch, FaDownload } from 'react-icons/fa';

export default function PasswordManager() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cyber-security-and-security-password-login-online-concept-hands-typing-and-touch-id-username-and-password-of-social-media-log-in-with-computer-to-online-important-information-data-protection-hacker-photo.jpg"
            alt="Cyber Security Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-400">Password Manager</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Secure your digital life with our encrypted password manager, built with military-grade encryption and local storage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Download Now
              </button>
              <button className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-400">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLock className="text-4xl mb-4 text-green-400" />,
                title: "Military-Grade Encryption",
                desc: "AES-256 encryption keeps your passwords secure with industry-leading protection."
              },
              {
                icon: <FaDatabase className="text-4xl mb-4 text-green-400" />,
                title: "Local Storage",
                desc: "Your data stays on your device with secure SQLite database storage."
              },
              {
                icon: <FaShieldAlt className="text-4xl mb-4 text-green-400" />,
                title: "Zero-Knowledge Architecture",
                desc: "We never store or access your master password or encrypted data."
              },
              {
                icon: <FaKey className="text-4xl mb-4 text-green-400" />,
                title: "Password Generator",
                desc: "Create strong, unique passwords with our built-in generator."
              },
              {
                icon: <FaSearch className="text-4xl mb-4 text-green-400" />,
                title: "Easy Search",
                desc: "Quickly find your credentials with our intuitive search functionality."
              },
              {
                icon: <FaDownload className="text-4xl mb-4 text-green-400" />,
                title: "Auto-Fill",
                desc: "Automatically fill login forms with a single click."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-400">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  title: "1. Create Your Vault",
                  desc: "Set up your secure vault with a master password. This password is never stored anywhere."
                },
                {
                  title: "2. Add Your Credentials",
                  desc: "Store usernames, passwords, and notes for all your online accounts."
                },
                {
                  title: "3. Access Anywhere",
                  desc: "Your encrypted data syncs securely across all your devices."
                },
                {
                  title: "4. Stay Secure",
                  desc: "Get alerts for weak, reused, or compromised passwords."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="bg-green-500/20 text-green-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-green-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Digital Life?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download SafeByte Password Manager today and take control of your online security.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300">
            Get Started - It's Free
          </button>
        </div>
      </section>
    </div>
  );
}
