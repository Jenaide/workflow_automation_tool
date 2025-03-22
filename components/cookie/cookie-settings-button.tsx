"use client";

import { useCookieConsent } from "@/components/context/cookie-concent";
import { Button } from "../ui/button";

export default function CookieSettingsButton() {
  const { openPreferences } = useCookieConsent()

  return (
    <Button onClick={openPreferences} className="text-gray-400 hover:text-gray-500 text-sm">
      Cookie Settings
    </Button>
  )
}

