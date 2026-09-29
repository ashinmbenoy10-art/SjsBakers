"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Recipe, RECIPES } from "@/data/recipes";
import {
  Clock,
  Users,
  BookOpen,
  X,
  Check,
  ChefHat,
  Plus,
  Trash2,
  Sparkles,
  Utensils,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/Button";

const PRESET_IMAGES = [
  { name: "Chocolate Truffle", url: "/images/chocolate-truffle.jpg" },
  { name: "Red Velvet", url: "/images/red-velvet-cake.jpg" },
  { name: "Vanilla Bean", url: "/images/vanilla-cake.jpg" },
  { name: "Birthday Layer", url: "/images/birthday-cake.jpg" },
];

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [category, setCategory] = useState("Chocolate Cakes");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Advanced">("Medium");
  const [image, setImage] = useState(PRESET_IMAGES[0].url);
  const [customImageUrl, setCustomImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [chefTips, setChefTips] = useState("");

  // Dynamic Lists State
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructionInput, setInstructionInput] = useState("");
  const [instructions, setInstructions] = useState<string[]>([]);

  // Notifications
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Load recipes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("sjs_user_recipes");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setRecipes(parsed);
      } catch (e) {
        console.error("Failed to parse saved recipes", e);
        setRecipes(RECIPES);
      }
    } else {
      setRecipes(RECIPES);
    }
  }, []);

  // Save recipes to localStorage on update
  const saveRecipesToStorage = (updatedRecipes: Recipe[]) => {
    setRecipes(updatedRecipes);
    localStorage.setItem("sjs_user_recipes", JSON.stringify(updatedRecipes));
  };

  const handleAddIngredient = () => {
    if (!ingredientInput.trim()) return;
    setIngredients([...ingredients, ingredientInput.trim()]);
    setIngredientInput("");
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleAddInstruction = () => {
    if (!instructionInput.trim()) return;
    setInstructions([...instructions, instructionInput.trim()]);
    setInstructionInput("");
  };

  const handleRemoveInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const handleSubmitRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!title.trim()) {
      setErrorMessage("Please enter a recipe title.");
      return;
    }
    if (ingredients.length === 0) {
      setErrorMessage("Please add at least one ingredient.");
      return;
    }
    if (instructions.length === 0) {
      setErrorMessage("Please add at least one step of instructions.");
      return;
    }

    const finalImage = customImageUrl.trim() ? customImageUrl.trim() : image;

    const newRecipe: Recipe = {
      id: `recipe-${Date.now()}`,
      title: title.trim(),
      authorName: authorName.trim() || "Guest Baker",
      category,
      prepTime: prepTime.trim() || "20 mins",
      cookTime: cookTime.trim() || "30 mins",
      servings: servings.trim() || "8 slices",
      difficulty,
      image: finalImage,
      description: description.trim() || "A delicious homemade recipe created by our community baker.",
      ingredients,
      instructions,
      chefTips: chefTips.trim() || "Preheat oven properly and use fresh quality ingredients for best results.",
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    };

    const updated = [newRecipe, ...recipes];
    saveRecipesToStorage(updated);

    // Reset Form
    setTitle("");
    setAuthorName("");
    setCategory("Chocolate Cakes");
    setPrepTime("");
    setCookTime("");
    setServings("");
    setDifficulty("Medium");
    setDescription("");
    setChefTips("");
    setIngredients([]);
    setInstructions([]);
    setCustomImageUrl("");

    setSuccessMessage("Recipe successfully created and added to the list!");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleDeleteRecipe = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this recipe?")) {
      const updated = recipes.filter((r) => r.id !== id);
      saveRecipesToStorage(updated);
      if (selectedRecipe?.id === id) {
        setSelectedRecipe(null);
      }
    }
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E8] border border-[#E8D4C0] text-[#C47A20] text-xs sm:text-sm font-semibold mb-3">
            <BookOpen className="w-4 h-4 text-[#C47A20]" />
            <span>SJS Community Kitchen</span>
          </div>

          <h1 className="font-serif-header text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A2412] tracking-tight mb-3">
            Bakery Recipes
          </h1>

          <p className="text-base sm:text-lg text-[#7A5C4A]">
            Share your favorite cake recipes or explore creations submitted by fellow bakers.
          </p>
        </div>

        {/* 2-COLUMN MAIN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: USER INPUT FORM */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-bakery border border-[#F3E6D5] sticky top-28">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F3E6D5]">
              <div className="p-3 bg-[#FAF2E8] rounded-2xl text-[#C47A20]">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif-header text-2xl font-bold text-[#4A2412]">
                  Submit Your Recipe
                </h2>
                <p className="text-xs text-[#7A5C4A]">Fill out the details below to publish your recipe</p>
              </div>
            </div>

            {/* Notifications */}
            {successMessage && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-sm flex items-start gap-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmitRecipe} className="space-y-4">
              
              {/* Title & Author */}
              <div>
                <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                  Recipe Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grandma's Spiced Honey Cake"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#C47A20] text-sm text-[#4A2412]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Chef / Baker"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#C47A20] text-sm text-[#4A2412]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="Enter category manually (e.g. Chocolate, Vanilla, Cupcakes...)"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#C47A20] text-sm text-[#4A2412]"
                  />
                </div>
              </div>

              {/* Times & Servings */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                    Prep Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 20 mins"
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#C47A20] text-xs sm:text-sm text-[#4A2412]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                    Cook Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 30 mins"
                    value={cookTime}
                    onChange={(e) => setCookTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#C47A20] text-xs sm:text-sm text-[#4A2412]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                    Servings
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 8 slices"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#C47A20] text-xs sm:text-sm text-[#4A2412]"
                  />
                </div>
              </div>

              {/* Difficulty & Thumbnail Selection */}
              <div>
                <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Easy", "Medium", "Advanced"] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setDifficulty(lvl)}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                        difficulty === lvl
                          ? "bg-[#C47A20] text-white border-[#C47A20]"
                          : "bg-[#FAF2E8] text-[#7A5C4A] border-[#E8D4C0] hover:bg-[#F3E6D5]"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preset Image Chooser */}
              <div>
                <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Recipe Image Cover</span>
                  <span className="text-[10px] text-[#7A5C4A] font-normal">Select preset or paste URL</span>
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {PRESET_IMAGES.map((imgItem) => (
                    <button
                      key={imgItem.name}
                      type="button"
                      onClick={() => {
                        setImage(imgItem.url);
                        setCustomImageUrl("");
                      }}
                      className={`relative h-14 rounded-xl overflow-hidden border-2 transition-all ${
                        image === imgItem.url && !customImageUrl
                          ? "border-[#C47A20] ring-2 ring-[#C47A20]/30 scale-95"
                          : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                    >
                      <Image src={imgItem.url} alt={imgItem.name} fill className="object-cover" />
                    </button>
                  ))}
                </div>

                <input
                  type="url"
                  placeholder="Or paste custom image URL (optional)"
                  value={customImageUrl}
                  onChange={(e) => setCustomImageUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-xs text-[#4A2412] focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your cake creation..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#C47A20] text-sm text-[#4A2412]"
                />
              </div>

              {/* Dynamic Ingredients Input */}
              <div>
                <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                  Ingredients List *
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="e.g. 2 cups flour"
                    value={ingredientInput}
                    onChange={(e) => setIngredientInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddIngredient();
                      }
                    }}
                    className="flex-grow px-3 py-2 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-xs text-[#4A2412] focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                  />
                  <button
                    type="button"
                    onClick={handleAddIngredient}
                    className="px-3 py-2 bg-[#FAF2E8] hover:bg-[#F3E6D5] text-[#C47A20] rounded-xl text-xs font-bold border border-[#E8D4C0] transition-colors"
                  >
                    Add
                  </button>
                </div>
                {ingredients.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 p-2 bg-[#FAF2E8] rounded-xl border border-[#E8D4C0] max-h-32 overflow-y-auto">
                    {ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white text-xs font-medium text-[#4A2412] shadow-xs border border-[#F3E6D5]"
                      >
                        {ing}
                        <button
                          type="button"
                          onClick={() => handleRemoveIngredient(idx)}
                          className="text-[#7A5C4A] hover:text-rose-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Dynamic Instructions Input */}
              <div>
                <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                  Step-by-Step Instructions *
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="e.g. Mix dry ingredients in a large bowl..."
                    value={instructionInput}
                    onChange={(e) => setInstructionInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddInstruction();
                      }
                    }}
                    className="flex-grow px-3 py-2 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-xs text-[#4A2412] focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                  />
                  <button
                    type="button"
                    onClick={handleAddInstruction}
                    className="px-3 py-2 bg-[#FAF2E8] hover:bg-[#F3E6D5] text-[#C47A20] rounded-xl text-xs font-bold border border-[#E8D4C0] transition-colors"
                  >
                    Add Step
                  </button>
                </div>
                {instructions.length > 0 && (
                  <ol className="space-y-1.5 p-2.5 bg-[#FAF2E8] rounded-xl border border-[#E8D4C0] max-h-36 overflow-y-auto text-xs text-[#4A2412]">
                    {instructions.map((step, idx) => (
                      <li key={idx} className="flex items-start justify-between gap-2 bg-white p-2 rounded-lg border border-[#F3E6D5]">
                        <span className="font-semibold text-[#C47A20] shrink-0">{idx + 1}.</span>
                        <span className="flex-grow leading-tight">{step}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveInstruction(idx)}
                          className="text-[#7A5C4A] hover:text-rose-600 shrink-0"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </li>
                    ))}
                  </ol>
                )}
              </div>

              {/* Chef Tips (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#4A2412] uppercase tracking-wider mb-1.5">
                  Baker's Pro Tip (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chill the bowl before whipping cream"
                  value={chefTips}
                  onChange={(e) => setChefTips(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-xs text-[#4A2412] focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button variant="primary" size="md" className="w-full justify-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Publish Recipe
                </Button>
              </div>

            </form>
          </div>

          {/* RIGHT COLUMN: RECIPES FEED */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif-header text-2xl font-bold text-[#4A2412] flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#C47A20]" />
                <span>Submitted Recipes</span>
                <span className="text-sm font-normal text-[#7A5C4A]">({recipes.length})</span>
              </h2>
            </div>

            {recipes.length === 0 ? (
              /* EMPTY STATE */
              <div className="bg-white rounded-3xl p-10 sm:p-12 text-center border-2 border-dashed border-[#E8D4C0] shadow-sm flex flex-col items-center justify-center min-h-[420px]">
                <div className="w-20 h-20 bg-[#FAF2E8] rounded-full flex items-center justify-center text-[#C47A20] mb-4">
                  <ChefHat className="w-10 h-10" />
                </div>
                <h3 className="font-serif-header text-2xl font-bold text-[#4A2412] mb-2">
                  No Recipes Available Yet
                </h3>
                <p className="text-sm text-[#7A5C4A] max-w-md mb-6 leading-relaxed">
                  All previous default cake recipes have been cleared as requested. Use the input column on the left to submit your first cake recipe!
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C47A20] bg-[#FAF2E8] px-4 py-2 rounded-full border border-[#E8D4C0]">
                  <span>👈 Submit your recipe in the form to get started</span>
                </div>
              </div>
            ) : (
              /* RECIPES LIST */
              <div className="space-y-6">
                {recipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-bakery hover:shadow-bakery-hover transition-all duration-300 border border-[#F3E6D5] flex flex-col sm:flex-row group relative"
                  >
                    {/* Delete button */}
                    <button
                      onClick={(e) => handleDeleteRecipe(recipe.id, e)}
                      title="Delete Recipe"
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-rose-50 text-rose-600 hover:text-rose-700 shadow-md transition-colors border border-rose-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    {/* Image Banner */}
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-[#FAF2E8] shrink-0 overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#4A2412] shadow-xs">
                        {recipe.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A5C4A]">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="w-3.5 h-3.5 text-[#C47A20]" />
                            {recipe.prepTime} prep
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <Users className="w-3.5 h-3.5 text-[#C47A20]" />
                            {recipe.servings}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-[#FAF2E8] text-[#4A2412] font-semibold text-[10px] border border-[#E8D4C0]">
                            {recipe.difficulty}
                          </span>
                          {recipe.authorName && (
                            <span className="text-xs text-[#C47A20] font-semibold">
                              by {recipe.authorName}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif-header text-xl font-bold text-[#4A2412] group-hover:text-[#C47A20] transition-colors pr-8">
                          {recipe.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#7A5C4A] line-clamp-2 leading-relaxed">
                          {recipe.description}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-[#FAF2E8]">
                        <span className="text-[11px] text-[#7A5C4A]">
                          {recipe.ingredients.length} ingredients • {recipe.instructions.length} steps
                        </span>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setSelectedRecipe(recipe)}
                        >
                          View Recipe
                        </Button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* RECIPE DETAIL MODAL */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E8D4C0] my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 sm:h-64 bg-[#FAF2E8]">
              <Image
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 text-[#4A2412] hover:bg-white shadow-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#C47A20] text-xs font-semibold rounded-full uppercase tracking-wider">
                    {selectedRecipe.category}
                  </span>
                  {selectedRecipe.authorName && (
                    <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      By {selectedRecipe.authorName}
                    </span>
                  )}
                </div>
                <h3 className="font-serif-header text-2xl sm:text-3xl font-bold">
                  {selectedRecipe.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Meta Info */}
              <div className="grid grid-cols-4 gap-3 bg-[#FAF2E8] p-4 rounded-2xl text-center text-xs sm:text-sm font-semibold text-[#4A2412] border border-[#E8D4C0]">
                <div>
                  <span className="block text-[#7A5C4A] font-normal text-xs">Prep Time</span>
                  {selectedRecipe.prepTime}
                </div>
                <div>
                  <span className="block text-[#7A5C4A] font-normal text-xs">Bake Time</span>
                  {selectedRecipe.cookTime}
                </div>
                <div>
                  <span className="block text-[#7A5C4A] font-normal text-xs">Servings</span>
                  {selectedRecipe.servings}
                </div>
                <div>
                  <span className="block text-[#7A5C4A] font-normal text-xs">Difficulty</span>
                  {selectedRecipe.difficulty}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#7A5C4A] leading-relaxed italic bg-[#FFFDF9] p-4 rounded-xl border border-[#F3E6D5]">
                "{selectedRecipe.description}"
              </p>

              {/* Ingredients */}
              <div>
                <h4 className="font-serif-header text-xl font-bold text-[#4A2412] mb-3">
                  Ingredients Needed
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#4A2412]">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2 bg-[#FFFDF9] p-2.5 rounded-lg border border-[#F3E6D5]">
                      <Check className="w-4 h-4 text-[#C47A20] shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="font-serif-header text-xl font-bold text-[#4A2412] mb-3">
                  Step-by-Step Instructions
                </h4>
                <ol className="space-y-3 text-sm text-[#4A2412]">
                  {selectedRecipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#4A2412] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Baker's Tip */}
              {selectedRecipe.chefTips && (
                <div className="bg-[#F8EBD9] p-4 rounded-2xl border border-[#E8D4C0] flex items-start gap-3 text-sm text-[#4A2412]">
                  <ChefHat className="w-6 h-6 text-[#C47A20] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#4A2412]">Baker's Pro Tip:</h5>
                    <p className="text-[#7A5C4A]">{selectedRecipe.chefTips}</p>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
