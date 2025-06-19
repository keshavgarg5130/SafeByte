import {
  FaCamera,
  FaCameraRetro,
  FaDatabase,
  FaEyeSlash,
  FaRegFileAlt,
  FaClock,
} from 'react-icons/fa';

export default function ScreenMonitor() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/screen-monitorbanner.jpg"
            alt="Screen Monitor Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-400">
              Silent Screen Monitor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              A discreet screen monitoring tool that silently captures and stores screenshots for audits, security, or parental control.
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
          <h2 className="text-3xl font-bold text-center mb-16 text-green-400">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCamera className="text-4xl mb-4 text-green-400" />,
                title: 'Auto Screenshots',
                desc: 'Captures screenshots at regular intervals without any user interaction.',
              },
              {
                icon: <FaEyeSlash className="text-4xl mb-4 text-green-400" />,
                title: 'Runs Silently',
                desc: 'Stealth operation — no icons, popups, or process windows visible to users.',
              },
              {
                icon: <FaDatabase className="text-4xl mb-4 text-green-400" />,
                title: 'Offline Storage',
                desc: 'Stores screenshots locally in encrypted folders, ideal for secure environments.',
              },
              {
                icon: <FaRegFileAlt className="text-4xl mb-4 text-green-400" />,
                title: 'Easy Review',
                desc: 'Screenshots are sorted by date and time for fast manual inspection.',
              },
              {
                icon: <FaClock className="text-4xl mb-4 text-green-400" />,
                title: 'Custom Intervals',
                desc: 'Set screenshot frequency — every 5s, 10s, 30s, or manually triggered.',
              },
              {
                icon: <FaCameraRetro className="text-4xl mb-4 text-green-400" />,
                title: 'High-Quality Captures',
                desc: 'Captures lossless screen output for clarity in reviews and investigations.',
              },
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
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                title: '1. Configure Your Settings',
                desc: 'Choose capture interval, folder path, and whether to enable encryption.',
              },
              {
                title: '2. Start Monitoring',
                desc: 'Once enabled, the tool starts capturing silently in the background.',
              },
              {
                title: '3. View Screenshots',
                desc: 'Open the folder to see captured images, sorted by date and time.',
              },
              {
                title: '4. Export or Archive',
                desc: 'Export selected screenshots for audit or archive purposes in secure formats.',
              },
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-green-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Monitor Screens Silently?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download the Silent Screen Monitor to ensure visibility, compliance, and control in sensitive workspaces.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300">
            Download Now
          </button>
        </div>
      </section>
    </div>
  );
}
