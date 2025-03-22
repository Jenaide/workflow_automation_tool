"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type CookieConsent = {
  essential: boolean
  performance: boolean
  functionality: boolean
  targeting: boolean
}

type CookieConsentContextType = {
  consent: CookieConsent | null
  showBanner: boolean
  acceptAll: () => void
  denyAll: () => void
  savePreferences: (preferences: CookieConsent) => void
  openPreferences: () => void
  closePreferences: () => void
  preferencesOpen: boolean
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const storedConsent = localStorage.getItem("cookie_consent")

    if (storedConsent) {
      setConsent(JSON.parse(storedConsent))
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const fullConsent: CookieConsent = {
      essential: true,
      performance: true,
      functionality: true,
      targeting: true,
    }
    setConsent(fullConsent)
    setShowBanner(false)
    setPreferencesOpen(false)
    if (isClient) {
      localStorage.setItem("cookie_consent", JSON.stringify(fullConsent))
    }
  }

  const denyAll = () => {
    const minimalConsent: CookieConsent = {
      essential: true,
      performance: false,
      functionality: false,
      targeting: false,
    }
    setConsent(minimalConsent)
    setShowBanner(false)
    setPreferencesOpen(false)
    if (isClient) {
      localStorage.setItem("cookie_consent", JSON.stringify(minimalConsent))
    }
  }

  const savePreferences = (preferences: CookieConsent) => {
    // Essential cookies are always required
    const updatedPreferences = { ...preferences, essential: true }
    setConsent(updatedPreferences)
    setShowBanner(false)
    setPreferencesOpen(false)
    if (isClient) {
      localStorage.setItem("cookie_consent", JSON.stringify(updatedPreferences))
    }
  }

  const openPreferences = () => {
    setPreferencesOpen(true)
  }

  const closePreferences = () => {
    setPreferencesOpen(false)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        acceptAll,
        denyAll,
        savePreferences,
        openPreferences,
        closePreferences,
        preferencesOpen,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}