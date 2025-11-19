import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Search, Plus, Trash2, TrendingUp, Target, Flame, Drumstick, Wheat, Droplet, Info, Loader2 } from 'lucide-react'
import { Progress } from '@/components/ui/progress.jsx'

function MacroTracker() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [trackedFoods, setTrackedFoods] = useState([])
  const [dailyGoals, setDailyGoals] = useState({
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 65
  })

  // Load tracked foods from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('trackedFoods')
    if (saved) {
      setTrackedFoods(JSON.parse(saved))
    }
    const savedGoals = localStorage.getItem('dailyGoals')
    if (savedGoals) {
      setDailyGoals(JSON.parse(savedGoals))
    }
  }, [])

  // Save tracked foods to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('trackedFoods', JSON.stringify(trackedFoods))
  }, [trackedFoods])

  // Save goals to localStorage
  useEffect(() => {
    localStorage.setItem('dailyGoals', JSON.stringify(dailyGoals))
  }, [dailyGoals])

  // Search USDA FoodData Central API
  const searchFoods = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)
    try {
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${encodeURIComponent(searchQuery)}&pageSize=20`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )

      if (!response.ok) {
        throw new Error('Failed to fetch foods')
      }

      const data = await response.json()
      setSearchResults(data.foods || [])
    } catch (error) {
      console.error('Error searching foods:', error)
      alert('Error searching foods. Please try again.')
    } finally {
      setIsSearching(false)
    }
  }

  // Extract macros from food data
  const extractMacros = (food) => {
    const nutrients = food.foodNutrients || []
    
    const getNumericValue = (nutrientName) => {
      const nutrient = nutrients.find(n => 
        n.nutrientName && n.nutrientName.toLowerCase().includes(nutrientName.toLowerCase())
      )
      return nutrient ? parseFloat(nutrient.value) || 0 : 0
    }

    return {
      calories: getNumericValue('Energy'),
      protein: getNumericValue('Protein'),
      carbs: getNumericValue('Carbohydrate'),
      fat: getNumericValue('Total lipid')
    }
  }

  // Add food to tracked list
  const addFood = (food) => {
    const macros = extractMacros(food)
    const trackedFood = {
      id: Date.now(),
      name: food.description || food.brandName || 'Unknown Food',
      brand: food.brandOwner || food.brandName || '',
      servingSize: food.servingSize || 100,
      servingSizeUnit: food.servingSizeUnit || 'g',
      amount: 1,
      macros: macros
    }
    setTrackedFoods([...trackedFoods, trackedFood])
    setSearchQuery('')
    setSearchResults([])
  }

  // Remove food from tracked list
  const removeFood = (id) => {
    setTrackedFoods(trackedFoods.filter(food => food.id !== id))
  }

  // Update food amount
  const updateFoodAmount = (id, newAmount) => {
    setTrackedFoods(trackedFoods.map(food => 
      food.id === id ? { ...food, amount: parseFloat(newAmount) || 0 } : food
    ))
  }

  // Calculate totals
  const calculateTotals = () => {
    return trackedFoods.reduce((totals, food) => {
      const multiplier = food.amount
      return {
        calories: totals.calories + (food.macros.calories * multiplier),
        protein: totals.protein + (food.macros.protein * multiplier),
        carbs: totals.carbs + (food.macros.carbs * multiplier),
        fat: totals.fat + (food.macros.fat * multiplier)
      }
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 })
  }

  const totals = calculateTotals()

  // Calculate percentages
  const getPercentage = (current, goal) => {
    return Math.min((current / goal) * 100, 100)
  }

  // Clear all tracked foods
  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all tracked foods?')) {
      setTrackedFoods([])
    }
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
          Macro Tracker
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4 max-w-3xl mx-auto">
          Track your nutrition with access to 350,000+ foods from the USDA database
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Info className="h-4 w-4" />
          <span>All data stored locally in your browser. No registration required.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Search and Results */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-600" />
                Search Foods
              </CardTitle>
              <CardDescription>
                Search the USDA FoodData Central database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Search for foods (e.g., chicken breast, banana, oatmeal)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && searchFoods()}
                  className="flex-1"
                />
                <Button 
                  onClick={searchFoods} 
                  disabled={isSearching || !searchQuery.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </>
                  )}
                </Button>
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
                  {searchResults.map((food, index) => {
                    const macros = extractMacros(food)
                    return (
                      <div
                        key={index}
                        className="p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">
                              {food.description || food.brandName || 'Unknown Food'}
                            </h4>
                            {food.brandOwner && (
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {food.brandOwner}
                              </p>
                            )}
                            <div className="flex gap-4 mt-2 text-xs text-slate-600 dark:text-slate-400">
                              <span>{Math.round(macros.calories)} cal</span>
                              <span>P: {Math.round(macros.protein)}g</span>
                              <span>C: {Math.round(macros.carbs)}g</span>
                              <span>F: {Math.round(macros.fat)}g</span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => addFood(food)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tracked Foods Card */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Today's Foods</CardTitle>
                  <CardDescription>
                    {trackedFoods.length} item{trackedFoods.length !== 1 ? 's' : ''} tracked
                  </CardDescription>
                </div>
                {trackedFoods.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearAll}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {trackedFoods.length === 0 ? (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  <Drumstick className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No foods tracked yet. Search and add foods to get started!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {trackedFoods.map((food) => (
                    <div
                      key={food.id}
                      className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800/50"
                    >
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold">{food.name}</h4>
                          {food.brand && (
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {food.brand}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFood(food.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Label htmlFor={`amount-${food.id}`} className="text-xs whitespace-nowrap">
                            Servings:
                          </Label>
                          <Input
                            id={`amount-${food.id}`}
                            type="number"
                            min="0"
                            step="0.5"
                            value={food.amount}
                            onChange={(e) => updateFoodAmount(food.id, e.target.value)}
                            className="w-20 h-8 text-sm"
                          />
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          ({food.servingSize}{food.servingSizeUnit} per serving)
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-2 mt-3 text-xs">
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded">
                          <div className="font-semibold text-orange-600">
                            {Math.round(food.macros.calories * food.amount)}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400">cal</div>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded">
                          <div className="font-semibold text-red-600">
                            {Math.round(food.macros.protein * food.amount)}g
                          </div>
                          <div className="text-slate-500 dark:text-slate-400">protein</div>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded">
                          <div className="font-semibold text-blue-600">
                            {Math.round(food.macros.carbs * food.amount)}g
                          </div>
                          <div className="text-slate-500 dark:text-slate-400">carbs</div>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded">
                          <div className="font-semibold text-yellow-600">
                            {Math.round(food.macros.fat * food.amount)}g
                          </div>
                          <div className="text-slate-500 dark:text-slate-400">fat</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Daily Summary */}
        <div className="space-y-6">
          {/* Daily Goals Card */}
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Daily Goals
              </CardTitle>
              <CardDescription>Set your daily macro targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="goal-calories" className="text-xs">Calories</Label>
                <Input
                  id="goal-calories"
                  type="number"
                  value={dailyGoals.calories}
                  onChange={(e) => setDailyGoals({...dailyGoals, calories: parseInt(e.target.value) || 0})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="goal-protein" className="text-xs">Protein (g)</Label>
                <Input
                  id="goal-protein"
                  type="number"
                  value={dailyGoals.protein}
                  onChange={(e) => setDailyGoals({...dailyGoals, protein: parseInt(e.target.value) || 0})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="goal-carbs" className="text-xs">Carbs (g)</Label>
                <Input
                  id="goal-carbs"
                  type="number"
                  value={dailyGoals.carbs}
                  onChange={(e) => setDailyGoals({...dailyGoals, carbs: parseInt(e.target.value) || 0})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="goal-fat" className="text-xs">Fat (g)</Label>
                <Input
                  id="goal-fat"
                  type="number"
                  value={dailyGoals.fat}
                  onChange={(e) => setDailyGoals({...dailyGoals, fat: parseInt(e.target.value) || 0})}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Daily Summary Card */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Today's Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Calories */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-orange-600" />
                    <span className="font-semibold">Calories</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {Math.round(totals.calories)} / {dailyGoals.calories}
                  </span>
                </div>
                <Progress 
                  value={getPercentage(totals.calories, dailyGoals.calories)} 
                  className="h-2"
                />
              </div>

              {/* Protein */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Drumstick className="h-4 w-4 text-red-600" />
                    <span className="font-semibold">Protein</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {Math.round(totals.protein)}g / {dailyGoals.protein}g
                  </span>
                </div>
                <Progress 
                  value={getPercentage(totals.protein, dailyGoals.protein)} 
                  className="h-2"
                />
              </div>

              {/* Carbs */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Wheat className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold">Carbs</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {Math.round(totals.carbs)}g / {dailyGoals.carbs}g
                  </span>
                </div>
                <Progress 
                  value={getPercentage(totals.carbs, dailyGoals.carbs)} 
                  className="h-2"
                />
              </div>

              {/* Fat */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-yellow-600" />
                    <span className="font-semibold">Fat</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {Math.round(totals.fat)}g / {dailyGoals.fat}g
                  </span>
                </div>
                <Progress 
                  value={getPercentage(totals.fat, dailyGoals.fat)} 
                  className="h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MacroTracker

