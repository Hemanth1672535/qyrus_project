"use client"

import { useState } from "react"
import {
  ChevronDown,
  Globe,
  Smartphone,
  Settings,
  Brain,
  Database,
  Component,
  FileText,
  Calendar,
  Video,
  Users,
  Shield,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M400,50 Q600,100 700,200 Q750,300 650,400 Q550,500 400,450 Q250,400 200,300 Q150,200 300,150 Q350,100 400,50"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              opacity="0.8"
            />
            <path
              d="M450,80 Q650,130 750,230 Q800,330 700,430 Q600,530 450,480 Q300,430 250,330 Q200,230 350,180 Q400,130 450,80"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M500,110 Q700,160 800,260 Q850,360 750,460 Q650,560 500,510 Q350,460 300,360 Q250,260 400,210 Q450,160 500,110"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-4 py-4 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-white text-xl font-bold">QYRUS</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {/* Platform Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("platform")}
                className="flex items-center space-x-1 text-white hover:text-green-400 transition-colors"
              >
                <span>Platform</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "platform" && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Qyrus Enterprise</h3>
                      <p className="text-sm text-gray-600">Qyrus- Your one stop solution for all your testing needs</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">qAPI</h3>
                      <p className="text-sm text-gray-600">qAPI-The complete End-To-End API testing tool</p>
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 bg-green-100 p-2 rounded">Solutions</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                        <Globe className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">Web Testing</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                        <Smartphone className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">Mobile Testing</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                        <Settings className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">API Testing</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                        <Brain className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">AI</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                        <Database className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">SAP Testing</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                        <Component className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">Component</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="bg-slate-900 text-white p-4 rounded-lg">
                    <h3 className="text-green-400 font-semibold mb-2">Testing APIs</h3>
                    <h4 className="text-lg font-bold mb-2">Has Never Been This Easy</h4>
                    <div className="text-green-400 text-sm mb-4">{">>> Think Ahead <<<"}</div>
                    <p className="text-xs text-gray-300 mb-4">
                      Experience firsthand how qAPI can help you catch bugs 70% faster
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white">Start Free Trial</Button>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("resources")}
                className="flex items-center space-x-1 text-white hover:text-green-400 transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Blogs</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">News</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Reports</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Events</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Video className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Videos</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Webinars</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-white hover:text-green-400 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              About
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">Try Now</Button>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-full bg-transparent"
            >
              Sign In
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Only Software Testing Platform You'll Ever Need.
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-green-400 mb-8">No Code. AI-driven.</h2>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full">
              Start Free Trial Now!
            </Button>
          </div>
        </div>
      </main>

      {/* Click outside to close dropdowns */}
      {activeDropdown && <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />}
    </div>
  )
}
