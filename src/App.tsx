import React from 'react';
import { Github, Cpu, Zap, Code2, BarChart2, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">DeepSeek R1</span>
            </div>
            <div className="flex space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#specs" className="text-gray-600 hover:text-gray-900">Specifications</a>
              <a href="#compare" className="text-gray-600 hover:text-gray-900">Comparisons</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">DeepSeek R1</span>
              <span className="block text-blue-600">Open Source AI Revolution</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover the next generation of open-source AI language models. DeepSeek R1 combines powerful capabilities with open accessibility.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="https://github.com/deepseek-ai/DeepSeek-LLM" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600">Advanced capabilities that set DeepSeek R1 apart</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-blue-600" />}
              title="High Performance"
              description="Superior performance in coding, reasoning, and general language understanding tasks"
            />
            <FeatureCard
              icon={<Code2 className="h-6 w-6 text-blue-600" />}
              title="Code Generation"
              description="Advanced code generation and understanding across multiple programming languages"
            />
            <FeatureCard
              icon={<BookOpen className="h-6 w-6 text-blue-600" />}
              title="Open Source"
              description="Fully open-source architecture allowing customization and transparency"
            />
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Technical Specifications</h2>
            <p className="mt-4 text-xl text-gray-600">Detailed specifications and architecture</p>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <SpecItem title="Model Architecture" value="Transformer-based" />
                <SpecItem title="Parameter Count" value="7B/13B variants" />
                <SpecItem title="Training Data" value="High-quality filtered dataset" />
                <SpecItem title="Context Length" value="4096 tokens" />
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Model Comparison</h2>
            <p className="mt-4 text-xl text-gray-600">How DeepSeek R1 compares to other models</p>
          </div>

          <div className="mt-12 relative">
            <div className="max-w-full overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DeepSeek R1</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Other Open Models</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <ComparisonRow feature="Code Generation" deepseek="Superior" others="Variable" />
                  <ComparisonRow feature="Reasoning Capabilities" deepseek="Advanced" others="Basic to Intermediate" />
                  <ComparisonRow feature="License" deepseek="Open Source" others="Mixed" />
                  <ComparisonRow feature="Community Support" deepseek="Active" others="Varies" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/deepseek-ai/DeepSeek-LLM" className="text-gray-400 hover:text-gray-300">
              <Github className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 DeepSeek R1 Documentation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div>
        <div className="absolute h-12 w-12 flex items-center justify-center rounded-md bg-blue-50">
          {icon}
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
      </div>
      <div className="mt-4 ml-16 text-base text-gray-500">
        {description}
      </div>
    </div>
  );
}

function SpecItem({ title, value }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-lg font-semibold text-gray-900">{value}</dd>
    </div>
  );
}

function ComparisonRow({ feature, deepseek, others }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deepseek}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{others}</td>
    </tr>
  );
}

export default App;