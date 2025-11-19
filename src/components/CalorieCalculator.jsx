import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Calculator, TrendingUp, Target, Flame } from 'lucide-react'

function CalorieCalculator() {
  const [unitSystem, setUnitSystem] = useState('metric') // 'metric' or 'imperial'
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: '',
    formula: 'mifflin'
  })
  const [results, setResults] = useState(null)

  const activityLevels = {
    sedentary: { label: 'Sedentary (little/no exercise)', multiplier: 1.2 },
    light: { label: 'Light (exercise 1-3 days/week)', multiplier: 1.375 },
    moderate: { label: 'Moderate (exercise 3-5 days/week)', multiplier: 1.55 },
    active: { label: 'Active (intense exercise 6-7 days/week)', multiplier: 1.725 },
    veryActive: { label: 'Very Active (very intense exercise, physical job)', multiplier: 1.9 }
  }

  const goals = {
    lose: { label: 'Lose Weight', adjustment: -500 },
    maintain: { label: 'Maintain Weight', adjustment: 0 },
    gain: { label: 'Gain Weight', adjustment: 500 }
  }

  const formulas = {
    mifflin: { label: 'Mifflin-St Jeor (Standard - Most Accurate)', value: 'mifflin' },
    katch: { label: 'Katch-McArdle (For Athletes)', value: 'katch' },
    adjusted: { label: 'Adjusted for Obesity', value: 'adjusted' }
  }

  // Convert imperial to metric
  const convertToMetric = (weight, height) => {
    if (unitSystem === 'imperial') {
      return {
        weight: weight * 0.453592, // lbs to kg
        height: height * 2.54 // inches to cm
      }
    }
    return { weight, height }
  }

  // Calculate BMR using Mifflin-St Jeor
  const calculateMifflinBMR = (weight, height, age, gender) => {
    const { weight: weightKg, height: heightCm } = convertToMetric(weight, height)
    
    if (gender === 'male') {
      return (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
    } else {
      return (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161
    }
  }

  // Calculate BMR using Katch-McArdle (requires body fat %, we'll estimate)
  const calculateKatchBMR = (weight, height, age, gender) => {
    const { weight: weightKg } = convertToMetric(weight, height)
    // Estimate lean body mass (simplified)
    const estimatedBF = gender === 'male' ? 0.15 : 0.25
    const leanMass = weightKg * (1 - estimatedBF)
    return 370 + (21.6 * leanMass)
  }

  // Calculate adjusted BMR for obesity
  const calculateAdjustedBMR = (weight, height, age, gender) => {
    const { weight: weightKg, height: heightCm } = convertToMetric(weight, height)
    const bmi = weightKg / Math.pow(heightCm / 100, 2)
    
    let bmr = calculateMifflinBMR(weight, height, age, gender)
    
    // Adjust for obesity (BMI > 30)
    if (bmi > 30) {
      bmr = bmr * 0.95 // Reduce by 5% for obesity
    }
    
    return bmr
  }

  const calculateCalories = () => {
    const { age, gender, weight, height, activityLevel, goal, formula } = formData

    if (!age || !gender || !weight || !height || !activityLevel || !goal) {
      alert('Please fill in all fields')
      return
    }

    let bmr
    switch (formula) {
      case 'katch':
        bmr = calculateKatchBMR(parseFloat(weight), parseFloat(height), parseInt(age), gender)
        break
      case 'adjusted':
        bmr = calculateAdjustedBMR(parseFloat(weight), parseFloat(height), parseInt(age), gender)
        break
      default:
        bmr = calculateMifflinBMR(parseFloat(weight), parseFloat(height), parseInt(age), gender)
    }

    const tdee = bmr * activityLevels[activityLevel].multiplier
    const targetCalories = tdee + goals[goal].adjustment

    // Calculate macros
    const protein = (targetCalories * 0.30) / 4 // 30% protein, 4 cal/g
    const carbs = (targetCalories * 0.40) / 4   // 40% carbs, 4 cal/g
    const fat = (targetCalories * 0.30) / 9     // 30% fat, 9 cal/g

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: Math.round(targetCalories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat)
    })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Free Tool
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Calorie & Macro Calculator
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4 max-w-3xl mx-auto">
          Get personalized nutrition targets based on your goals and body composition
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calculator Form */}
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-5 w-5 text-blue-600" />
                <CardTitle>Calorie & Macro Calculator</CardTitle>
              </div>
              <CardDescription>
                Get personalized nutrition targets based on your goals and body composition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Unit System Toggle */}
              <div>
                <Label className="mb-3 block">Measurement System</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    onClick={() => setUnitSystem('metric')}
                    className={unitSystem === 'metric' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}
                  >
                    Metric (kg, cm)
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setUnitSystem('imperial')}
                    className={unitSystem === 'imperial' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}
                  >
                    Imperial (lbs, ft)
                  </Button>
                </div>
              </div>

              {/* Age and Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Weight and Height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight">
                    Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder={unitSystem === 'metric' ? '70' : '154'}
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="height">
                    Height ({unitSystem === 'metric' ? 'cm' : 'inches'})
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder={unitSystem === 'metric' ? '175' : '69'}
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <Label htmlFor="activity">Activity Level</Label>
                <select
                  id="activity"
                  value={formData.activityLevel}
                  onChange={(e) => handleInputChange('activityLevel', e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select activity level</option>
                  {Object.entries(activityLevels).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Goal */}
              <div>
                <Label htmlFor="goal">Goal</Label>
                <select
                  id="goal"
                  value={formData.goal}
                  onChange={(e) => handleInputChange('goal', e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select your goal</option>
                  {Object.entries(goals).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Formula */}
              <div>
                <Label htmlFor="formula">Calculation Formula</Label>
                <select
                  id="formula"
                  value={formData.formula}
                  onChange={(e) => handleInputChange('formula', e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {Object.entries(formulas).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                <p className="text-xs text-slate-500 mt-1">Recommended for most people</p>
              </div>

              {/* Calculate Button */}
              <Button
                onClick={calculateCalories}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6"
              >
                Calculate Macros
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {results ? (
            <>
              {/* Daily Calories */}
              <Card className="border-2 border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-orange-600" />
                    <CardTitle>Daily Calories</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {results.targetCalories}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    calories per day
                  </p>
                  <div className="mt-4 pt-4 border-t space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">BMR:</span>
                      <span className="font-semibold">{results.bmr} cal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">TDEE:</span>
                      <span className="font-semibold">{results.tdee} cal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Macros */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    <CardTitle>Macro Targets</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Protein</span>
                      <span className="text-sm font-bold text-red-600">{results.protein}g</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Carbs</span>
                      <span className="text-sm font-bold text-blue-600">{results.carbs}g</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Fat</span>
                      <span className="text-sm font-bold text-yellow-600">{results.fat}g</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      <p className="font-semibold mb-1">Track Your Progress</p>
                      <p>Use the Macro Tracker to log your daily food intake and stay on target!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="bg-slate-50 dark:bg-slate-800">
              <CardContent className="p-12 text-center">
                <Calculator className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400">
                  Fill in your information and click "Calculate Macros" to see your personalized nutrition targets
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default CalorieCalculator
