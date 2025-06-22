"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Play,
  Plus,
  Users,
  Clock,
  Search,
  Filter,
  Bell,
  Video,
  Lock,
  Globe,
  Star,
  Trash2,
  Edit,
  Copy,
  Sparkles,
  TrendingUp,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const myRooms = [
    {
      id: 1,
      name: "Marvel Movie Marathon",
      description: "Watching all MCU movies in chronological order",
      participants: 12,
      maxParticipants: 15,
      isPrivate: true,
      lastActive: "2 hours ago",
      thumbnail: "/placeholder.svg?height=200&width=300",
      status: "active",
      gradient: "from-red-500 to-yellow-500",
    },
    {
      id: 2,
      name: "Anime Night Sessions",
      description: "Weekly anime watch parties with friends",
      participants: 8,
      maxParticipants: 12,
      isPrivate: false,
      lastActive: "1 day ago",
      thumbnail: "/placeholder.svg?height=200&width=300",
      status: "paused",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Documentary Deep Dive",
      description: "Exploring nature and science documentaries",
      participants: 6,
      maxParticipants: 10,
      isPrivate: true,
      lastActive: "3 days ago",
      thumbnail: "/placeholder.svg?height=200&width=300",
      status: "scheduled",
      gradient: "from-green-500 to-teal-500",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      user: "Sarah Chen",
      action: "joined your room",
      room: "Marvel Movie Marathon",
      time: "5 minutes ago",
      avatar: "/placeholder.svg?height=32&width=32",
      type: "join",
    },
    {
      id: 2,
      user: "Mike Johnson",
      action: "started watching",
      room: "Anime Night Sessions",
      time: "1 hour ago",
      avatar: "/placeholder.svg?height=32&width=32",
      type: "watch",
    },
    {
      id: 3,
      user: "Emma Wilson",
      action: "left a comment in",
      room: "Documentary Deep Dive",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32",
      type: "comment",
    },
  ]

  const stats = [
    {
      label: "Total Rooms",
      value: "12",
      icon: Video,
      gradient: "from-purple-500 to-blue-500",
      change: "+3 this week",
    },
    {
      label: "Hours Watched",
      value: "156",
      icon: Clock,
      gradient: "from-blue-500 to-teal-500",
      change: "+24 this week",
    },
    {
      label: "Friends",
      value: "48",
      icon: Users,
      gradient: "from-teal-500 to-green-500",
      change: "+5 this week",
    },
    {
      label: "Favorites",
      value: "23",
      icon: Star,
      gradient: "from-yellow-500 to-orange-500",
      change: "+2 this week",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-xl"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Watchify
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></span>
              </Button>
              <ThemeToggle />
              <Avatar className="w-10 h-10 ring-2 ring-purple-200 dark:ring-purple-800">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Welcome back, John!
            </h1>
            <div className="flex space-x-1">
              <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
              <Heart className="w-6 h-6 text-red-500 animate-pulse delay-300" />
            </div>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400">Ready to create some magical movie moments?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-6 relative">
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full -mr-10 -mt-10`}
                ></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1 font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">{stat.change}</p>
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-purple-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/room/create">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Plus className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Create Room</h3>
                        <p className="text-sm opacity-90">Start a new watch party</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/rooms">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-green-600 p-6 text-white hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Search className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Browse Rooms</h3>
                        <p className="text-sm opacity-90">Discover public rooms</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* My Rooms */}
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                  <Video className="w-6 h-6 mr-2 text-blue-500" />
                  My Rooms
                </CardTitle>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      placeholder="Search rooms..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64 bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myRooms.map((room) => (
                    <div
                      key={room.id}
                      className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${room.gradient} opacity-5 rounded-full -mr-16 -mt-16`}
                      ></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className="relative">
                          <img
                            src={room.thumbnail || "/placeholder.svg"}
                            alt={room.name}
                            className="w-24 h-16 rounded-xl object-cover shadow-lg"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          <div
                            className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${room.gradient} rounded-full flex items-center justify-center`}
                          >
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 truncate">
                                {room.name}
                              </h3>
                              <p className="text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">{room.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                                <div className="flex items-center space-x-1">
                                  <Users className="w-4 h-4" />
                                  <span className="font-medium">
                                    {room.participants}/{room.maxParticipants}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {room.isPrivate ? <Lock className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                                  <span>{room.isPrivate ? "Private" : "Public"}</span>
                                </div>
                                <span>Active {room.lastActive}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge
                                className={`${
                                  room.status === "active"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                    : room.status === "paused"
                                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                                      : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                } border-0 font-medium`}
                              >
                                {room.status}
                              </Badge>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="w-8 h-8 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="w-8 h-8 hover:bg-green-50 dark:hover:bg-green-900/20"
                                >
                                  <Copy className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="w-8 h-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Avatar className="w-10 h-10 ring-2 ring-purple-200 dark:ring-purple-800">
                        <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold">
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900 dark:text-white">
                          <span className="font-bold">{activity.user}</span>{" "}
                          <span className="text-slate-600 dark:text-slate-400">{activity.action}</span>{" "}
                          <span className="font-medium text-purple-600 dark:text-purple-400">{activity.room}</span>
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Rooms */}
            <Card className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white border-0 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Trending Rooms
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {[
                    {
                      name: "Marvel Movie Marathon",
                      viewers: 234,
                      category: "Movies",
                      gradient: "from-red-500 to-yellow-500",
                    },
                    { name: "Anime Night", viewers: 189, category: "Anime", gradient: "from-pink-500 to-purple-500" },
                    {
                      name: "Comedy Central",
                      viewers: 156,
                      category: "Comedy",
                      gradient: "from-green-500 to-teal-500",
                    },
                  ].map((room, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${room.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <Play className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm">{room.name}</p>
                          <p className="text-xs text-white/70">{room.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-white">{room.viewers}</p>
                        <p className="text-xs text-white/70">watching</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">Watch Time</span>
                    </div>
                    <span className="font-bold text-purple-600 dark:text-purple-400">24h</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">New Friends</span>
                    </div>
                    <span className="font-bold text-teal-600 dark:text-teal-400">5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">Reactions</span>
                    </div>
                    <span className="font-bold text-yellow-600 dark:text-yellow-400">127</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
