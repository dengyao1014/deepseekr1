'use client'

import { useState } from 'react'
import { Cpu, Github, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) {
      toast.error('Please enter a prompt')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!res.ok) throw new Error('Failed to generate response')

      const data = await res.json()
      setResponse(data.response)
      toast.success('Response generated successfully!')
    } catch (error) {
      toast.error('Failed to generate response')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">deepseekr1.site</span>
            </div>
            <a
              href="https://github.com/deepseek-ai/DeepSeek-LLM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="h-6 w-6" />
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DeepSeek R1 Free API Platform
          </h1>
          <p className="text-xl text-gray-600">
            Access the powerful DeepSeek R1 model through our free API at deepseekr1.site
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                Enter your prompt
              </label>
              <textarea
                id="prompt"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="What would you like to know?"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? (
                'Generating...'
              ) : (
                <>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Generate Response
                </>
              )}
            </button>
          </form>

          {response && (
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Response:</h2>
              <div className="bg-gray-50 rounded-md p-4">
                <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">API Documentation</h2>
            <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
              <code>{`fetch('https://deepseekr1.site/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'Your prompt here'
  })
})`}</code>
            </pre>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Rate Limits</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 10 requests per minute</li>
              <li>• 1000 tokens per request</li>
              <li>• No authentication required</li>
              <li>• Free for non-commercial use</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 deepseekr1.site - Free DeepSeek R1 API Platform
          </p>
        </div>
      </footer>
    </main>
  )
}