"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Lock, Globe, Upload, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CreateRoomPage() {
  const [roomName, setRoomName] = useState("")
  const [description, setDescription] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [maxParticipants, setMaxParticipants] = useState("50")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim()) && tags.length < 5) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate room creation
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/room/123"
    }, 2000)
  }

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
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
            Create a New Room
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Set up your watch party and invite friends to join you</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Room Details */}
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">Room Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="roomName" className="text-slate-700 dark:text-slate-300">
                    Room Name *
                  </Label>
                  <Input
                    id="roomName"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter room name"
                    className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-slate-700 dark:text-slate-300">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what you'll be watching..."
                    className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-slate-700 dark:text-slate-300">
                    Category *
                  </Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="movies">Movies</SelectItem>
                      <SelectItem value="tv-shows">TV Shows</SelectItem>
                      <SelectItem value="anime">Anime</SelectItem>
                      <SelectItem value="comedy">Comedy</SelectItem>
                      <SelectItem value="documentary">Documentary</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 dark:text-slate-300">Tags</Label>
                  <div className="flex space-x-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                    />
                    <Button type="button" onClick={handleAddTag} variant="outline">
                      Add
                    </Button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                          <span>{tag}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1 hover:text-red-500"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Room Settings */}
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">Room Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-slate-700 dark:text-slate-300">Privacy</Label>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {isPrivate ? "Only invited users can join" : "Anyone can discover and join"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className={`w-4 h-4 ${!isPrivate ? "text-green-500" : "text-slate-400"}`} />
                    <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
                    <Lock className={`w-4 h-4 ${isPrivate ? "text-blue-500" : "text-slate-400"}`} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxParticipants" className="text-slate-700 dark:text-slate-300">
                    Maximum Participants
                  </Label>
                  <Select value={maxParticipants} onValueChange={setMaxParticipants}>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 participants</SelectItem>
                      <SelectItem value="25">25 participants</SelectItem>
                      <SelectItem value="50">50 participants</SelectItem>
                      <SelectItem value="100">100 participants</SelectItem>
                      <SelectItem value="250">250 participants</SelectItem>
                      <SelectItem value="500">500 participants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="videoUrl" className="text-slate-700 dark:text-slate-300">
                    Video URL (Optional)
                  </Label>
                  <Input
                    id="videoUrl"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Supports YouTube, Vimeo, and direct video links
                  </p>
                </div>

                <div className="p-4 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-center">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Upload a thumbnail image</p>
                  <Button type="button" variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                <div className="w-20 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{roomName || "Your Room Name"}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {description || "Your room description will appear here"}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>0/{maxParticipants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {isPrivate ? <Lock className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                      <span>{isPrivate ? "Private" : "Public"}</span>
                    </div>
                    {category && (
                      <Badge variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Link href="/dashboard">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              disabled={isLoading || !roomName || !category}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Creating Room...</span>
                </div>
              ) : (
                "Create Room"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
