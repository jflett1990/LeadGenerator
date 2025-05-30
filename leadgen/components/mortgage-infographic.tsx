"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Home,
  Users,
  TrendingDown,
  BarChart3,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Award,
  Calendar,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"

// ... existing code for AnimatedCounter, PolicyCard, BenefitsSection, ComparisonChart ...

function QuizSection({
  quizStep,
  setQuizStep,
  quizAnswers,
  setQuizAnswers,
  quizResult,
  setQuizResult,
  formData,
  setFormData,
  isSubmitting,
  setIsSubmitting,
  isSubmitted,
  setIsSubmitted,
  setCurrentSection,
}: {
  quizStep: number
  setQuizStep: (step: number) => void
  quizAnswers: any
  setQuizAnswers: (answers: any) => void
  quizResult: string
  setQuizResult: (result: string) => void
  formData: any
  setFormData: (data: any) => void
  isSubmitting: boolean
  setIsSubmitting: (isSubmitting: boolean) => void
  isSubmitted: boolean
  setIsSubmitted: (isSubmitted: boolean) => void
  setCurrentSection: (section: string) => void
}) {
  // ... existing code for quiz logic ...
  return (
    <div className="max-w-2xl mx-auto">
      {/* ... quiz steps ... */}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Your Results Are Ready!</h3>
          <p className="mb-4 text-gray-600">Based on your answers, we recommend:</p>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-blue-700 mb-2">{quizResult}</h4>
            <p className="text-gray-600">
              This option best matches your mortgage situation and personal preferences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ36ZMdL_km4qPX3XMsLA4mXcwzyayH_CoeZ_62r6sh_jpQ5cVO2qxWSVHuglYhiaEY_u8xe-MpN",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Call to Learn More
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => setCurrentSection("policies")}
              variant="outline"
              className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              View Policy Details
            </Button>
          </div>
        </motion.div>
      ) : null}
    </div>
  )
}

// ... existing code for MortgageInfographic main component ... 