import { FaUsb, FaShieldAlt, FaBell, FaTools, FaBug, FaEye } from 'react-icons/fa';

export default function UsbDetector() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/usbBanner2.jpg"
            alt="USB Detector Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-400">USB Detection Tool</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Advanced USB monitoring system designed for environments where USB devices are restricted.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                View Demo
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
                icon: <FaUsb className="text-4xl mb-4 text-green-400" />,
                title: "USB Monitoring",
                desc: "Monitors USB ports for any device connection attempts."
              },
              {
                icon: <FaBell className="text-4xl mb-4 text-green-400" />,
                title: "Real-time Alerts",
                desc: "Instant notifications when unauthorized USB devices are detected."
              },
              {
                icon: <FaShieldAlt className="text-4xl mb-4 text-green-400" />,
                title: "Restricted Environments",
                desc: "Perfect for institutions where USB use is prohibited or sensitive."
              },
              {
                icon: <FaTools className="text-4xl mb-4 text-green-400" />,
                title: "Customizable Rules",
                desc: "Whitelist/blacklist devices and control permissions flexibly."
              },
              {
                icon: <FaEye className="text-4xl mb-4 text-green-400" />,
                title: "Stealth Mode",
                desc: "Runs silently in the background with minimal system footprint."
              },
              {
                icon: <FaBug className="text-4xl mb-4 text-green-400" />,
                title: "Event Logging",
                desc: "Logs all activity and generates reports for auditing purposes."
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
                  title: "1. Install & Configure",
                  desc: "Set up the USB Detector with initial preferences and whitelisted devices."
                },
                {
                  title: "2. Monitor in Real-Time",
                  desc: "The system runs in the background, scanning for USB plug-in or removal events."
                },
                {
                  title: "3. Get Alerts & Logs",
                  desc: "Admins are notified instantly, and all actions are logged for review."
                },
                {
                  title: "4. Stay Protected",
                  desc: "Prevent data theft or malware injection through unknown USB devices."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Monitor and Secure Your System?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download the SafeByte USB Detector now and prevent unauthorized access with real-time protection.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300">
            Get Started - It's Free
          </button>
        </div>
      </section>
    </div>
  );
}
