"use client"

import { useState } from "react"

export default function RoomPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([80])
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(7200) // 2 hours in seconds
  const [message, setMessage] = useState('')
  const [showReactions, setShowReactions] = useState(false)
  const [isMicOn, setIsMicOn] = useState(false)
  const [isCameraOn, setIsCameraOn] = useState(false)

  const participants = [
    { id: 1, name: "John Doe", avatar: "/placeholder.svg?height=32&width=32", isHost: true, isOnline: true },
    { id: 2, name: "Sarah Chen", avatar: "/placeholder.svg?height=32&width=32", isHost: false, isOnline: true },
    { id: 3, name: "Mike Johnson", avatar: "/placeholder.svg?height=32&width=32", isHost: false, isOnline: true },
    { id: 4, name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32", isHost: false, isOnline: false },
    { id: 5, name: "Alex Brown", avatar: "/placeholder.svg?height=32&width=32", isHost: false, isOnline: true },
  ]

  const chatMessages = [
    { id: 1, user: "Sarah Chen", message: "This movie is amazing! 🍿", time: "2:34 PM", avatar: "/placeholder.svg?height=24&width=24" },
    { id: 2, user: "Mike Johnson", message: "I love this scene!", time: "2:35 PM", avatar: "/placeholder.svg?height=24&width=24" },
    { id: 3, user: "Emma Wilson", message: "Can we rewind a bit? I missed something", time: "2:36 PM", avatar: "/placeholder.svg?height=24&width=24" },
    { id: 4, user: "Alex Brown", message: "The cinematography is incredible", time: "4:34 PM"}
  ]
}