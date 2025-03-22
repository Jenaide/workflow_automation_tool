"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "@/components/context/cookie-concent";
import { X } from "lucide-react";
import { Button } from "../ui/button";

export default function CookiePreferencesModal() {
  const { consent, preferencesOpen, closePreferences, savePreferences } = useCookieConsent()
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: false,
    functionality: false,
    targeting: false,
  })

  useEffect(() => {
    if (consent) {
      setPreferences(consent)
    }
  }, [consent])

  const handleChange = (category: keyof typeof preferences) => {
    if (category === "essential") return // Essential cookies can't be toggled

    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const handleSave = () => {
    savePreferences(preferences)
  }

  if (!preferencesOpen) return null

  return (
    <AnimatePresence>
      {preferencesOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={closePreferences}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all"
            >
              <div className="absolute right-4 top-4">
                <Button onClick={closePreferences} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Preferences</h3>
                <p className="text-gray-600 mb-6">
                  Manage your cookie preferences. Essential cookies are necessary for the website to function properly
                  and cannot be disabled.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                      <p className="text-sm text-gray-500">
                        These cookies are necessary for the website to function properly.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.essential}
                        disabled
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Performance Cookies</h4>
                      <p className="text-sm text-gray-500">
                        These cookies help us analyze how visitors use our website.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.performance}
                        onChange={() => handleChange("performance")}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Functionality Cookies</h4>
                      <p className="text-sm text-gray-500">
                        These cookies enable personalized features and functionality.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.functionality}
                        onChange={() => handleChange("functionality")}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Targeting Cookies</h4>
                      <p className="text-sm text-gray-500">
                        These cookies are used to deliver relevant ads and marketing campaigns.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.targeting}
                        onChange={() => handleChange("targeting")}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <Button
                    onClick={closePreferences}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}