"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Users, Search, Filter, Star, Heart } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function RoomsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const publicRooms = [
    {
      id: 1,
      name: "Marvel Movie Marathon",
      description: "Watching all Marvel movies in chronological order",
      host: "Sarah Chen",
      participants: 234,
      maxParticipants: 500,
      category: "Movies",
      isLive: true,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Action", "Superhero", "Marvel"],
      rating: 4.8,
      language: "English",
    },
    {
      id: 2,
      name: "Anime Night - Attack on Titan",
      description: "Final season watch party with live reactions",
      host: "Mike Johnson",
      participants: 189,
      maxParticipants: 300,
      category: "Anime",
      isLive: true,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Anime", "Action", "Drama"],
      rating: 4.9,
      language: "Japanese",
    },
    {
      id: 3,
      name: "Comedy Central Roast",
      description: "Best comedy specials and roasts",
      host: "Emma Wilson",
      participants: 156,
      maxParticipants: 200,
      category: "Comedy",
      isLive: false,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Comedy", "Stand-up", "Roast"],
      rating: 4.6,
      language: "English",
    },
    {
      id: 4,
      name: "Documentary Deep Dive",
      description: "Exploring nature documentaries",
      host: "Alex Brown",
      participants: 78,
      maxParticipants: 150,
      category: "Documentary",
      isLive: true,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Nature", "Educational", "Wildlife"],
      rating: 4.7,
      language: "English",
    },
  ]

  const categories = [
    { id: "all", name: "All", count: 1247 },
    { id: "movies", name: "Movies", count: 456 },
    { id: "tv-shows", name: "TV Shows", count: 234 },
    { id: "anime", name: "Anime", count: 189 },
    { id: "comedy", name: "Comedy", count: 167 },
    { id: "documentary", name: "Documentary", count: 89 },
    { id: "music", name: "Music", count: 112 },
  ]

  const filteredRooms = publicRooms.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || room.category.toLowerCase() === selectedCategory.replace("-", " ")
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Watchify
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <ThemeToggle />
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
            Discover Public Rooms
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Join thousands of viewers in public watch parties around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search rooms, shows, movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200 dark:border-slate-700"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
              <Link href="/room/create">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Create Room
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Categories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                <div className="text-center">
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs opacity-70">{category.count}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <Card
              key={room.id}
              className="group overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img src={room.thumbnail || "/placeholder.svg"} alt={room.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  {room.isLive && (
                    <Badge className="bg-red-500 text-white border-0">
                      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                      LIVE
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-black/50 text-white border-0">
                    {room.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Button size="icon" variant="ghost" className="w-8 h-8 bg-black/20 hover:bg-black/40 text-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{room.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{room.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href={`/room/${room.id}`}>
                    <Button
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Join Room
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1 line-clamp-1">{room.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-2">{room.description}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span>Hosted by {room.host}</span>
                  <span>{room.language}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {room.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                    <Users className="w-4 h-4" />
                    <span>
                      {room.participants}/{room.maxParticipants}
                    </span>
                  </div>
                  <Link href={`/room/${room.id}`}>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Join
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Rooms
          </Button>
        </div>
      </div>
    </div>
  )
}
