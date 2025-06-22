"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, MessageCircle, Zap, Shield, Globe, ArrowRight, Star, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Play,
      title: "Perfect Sync",
      description: "Watch together in perfect harmony with millisecond precision across all devices",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: MessageCircle,
      title: "Live Reactions",
      description: "Express yourself with real-time chat, emojis, and voice reactions",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Users,
      title: "Secure",
      description: "Connect with users with securely",
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Movie Enthusiast",
      content: "Watchify transformed our long-distance movie nights. It's like being in the same room!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Content Creator",
      content: "The sync is flawless and the community features are incredible. Best platform ever!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Film Student",
      content: "Perfect for study groups and film analysis sessions. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Watchify
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="hidden sm:inline-flex hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 dark:from-purple-900 dark:to-blue-900 dark:text-purple-300 border-0 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />🎉 Now with 4K streaming & AI recommendations
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent">
                  Watch Anything
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Together, Anywhere
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Experience the magic of synchronized entertainment with friends and family across the globe. Chat,
                react, and create memories together in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Start Watching Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/rooms">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 dark:border-purple-700 dark:hover:border-purple-600 dark:hover:bg-purple-900/20 transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Explore Rooms
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    1M+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Watch Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Visual */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                {/* Main Video Player Mockup */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-1">
                  <div className="bg-black rounded-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-30"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Play className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-lg font-medium">The Avengers: Endgame</p>
                        <p className="text-sm opacity-75">2:34:15 remaining</p>
                      </div>

                      {/* Floating User Avatars */}
                      <div className="absolute top-4 right-4 flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                          >
                            {i}
                          </div>
                        ))}
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                          +8
                        </div>
                      </div>

                      {/* Chat Bubble */}
                      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-2xl p-3 text-white max-w-xs">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium">Sarah</span>
                        </div>
                        <p className="text-sm">This scene gives me chills every time! 🔥</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-teal-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-teal-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 dark:from-purple-900 dark:to-blue-900 dark:text-purple-300 border-0">
              ✨ Powered by Advanced Technology
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Why Choose Watchify?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Experience entertainment like never before with cutting-edge synchronization technology and community
              features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 border-0 overflow-hidden ${
                  activeFeature === index ? "shadow-2xl -translate-y-2" : ""
                } ${feature.bgColor}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-white to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-white to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-full opacity-30"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Sub-second sync", color: "from-yellow-500 to-orange-500" },
              {
                icon: Shield,
                title: "Secure & Private",
                desc: "End-to-end encryption",
                color: "from-green-500 to-teal-500",
              },
              { icon: Globe, title: "Global Reach", desc: "Worldwide CDN", color: "from-blue-500 to-indigo-500" },
              {
                icon: Star,
                title: "User Friendly",
                desc: "Semless Interaction",
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Loved by Millions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              See what our community has to say about their Watchify experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-gradient-to-r from-purple-500 to-blue-500"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Transform Movie Night?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions creating unforgettable shared entertainment experiences. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-slate-100 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Today
              </Button>
            </Link>
            <Link href="/rooms">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

 {/* Footer */}
    <footer className="bg-white text-black dark:bg-slate-900 dark:text-white py-16 border-t border-gray-300 dark:border-slate-800">
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Logo & Links */}
    <div className="flex flex-col items-center space-y-6 mb-12">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
          <Play className="w-5 h-5 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          teleport
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
        <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
      </div>
    </div>

    {/* Divider */}
    <hr className="border-t border-slate-700 my-10" />

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
      <p>&copy; 2024 TeleportHQ. All rights reserved.</p>
      <div className="flex space-x-6">
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        <Link href="/cookies" className="hover:text-white transition-colors">Cookies Policy</Link>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
