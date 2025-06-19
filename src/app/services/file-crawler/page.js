import { FaSearch, FaSitemap, FaWindows, FaFileAlt, FaDatabase, FaBug } from 'react-icons/fa';

export default function FileCrawler() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/file-crawlerbanner.jpg"
            alt="File Crawler Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-400">File System Crawler</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive tool that maps and documents your system's file structure for security, backup, and audit purposes.
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
                icon: <FaSearch className="text-4xl mb-4 text-green-400" />,
                title: "File Search",
                desc: "Scans and indexes all files in your system, including hidden and system files."
              },
              {
                icon: <FaSitemap className="text-4xl mb-4 text-green-400" />,
                title: "System Mapping",
                desc: "Creates a detailed tree structure of your file system for easy navigation and reporting."
              },
              {
                icon: <FaWindows className="text-4xl mb-4 text-green-400" />,
                title: "Windows Compatible",
                desc: "Built specifically to support all versions of Windows with maximum compatibility."
              },
              {
                icon: <FaFileAlt className="text-4xl mb-4 text-green-400" />,
                title: "Text & CSV Reports",
                desc: "Export results to structured text and CSV for documentation or audit."
              },
              {
                icon: <FaDatabase className="text-4xl mb-4 text-green-400" />,
                title: "Offline Operation",
                desc: "Works completely offline in secure environments without internet access."
              },
              {
                icon: <FaBug className="text-4xl mb-4 text-green-400" />,
                title: "Error Logging",
                desc: "Tracks inaccessible paths or permission issues for thorough diagnostics."
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

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-400">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                title: "1. Launch the Tool",
                desc: "Open File System Crawler and choose your scan parameters such as root path, depth, and report type."
              },
              {
                title: "2. Scan the System",
                desc: "It crawls through directories recursively, identifying files, directories, sizes, and permissions."
              },
              {
                title: "3. View Results",
                desc: "Get a live summary of total files, types, and space occupied with visual directory depth insights."
              },
              {
                title: "4. Export Report",
                desc: "Download CSV or text reports to share with teams or keep for compliance purposes."
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-green-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Map Your File System?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start using the File System Crawler to document, audit, and organize your local storage infrastructure.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300">
            Download Now
          </button>
        </div>
      </section>
    </div>
  );
}
