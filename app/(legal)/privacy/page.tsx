import type { Metadata } from "next"
import LegalLayout from "@/components/legal/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy | ProductName",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 22, 2025">
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">
        This Privacy Policy explains how ProductName (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your personal
        information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
      <p className="mb-4">
        We collect information that you provide directly to us, such as when you create an account, subscribe to our
        newsletter, or contact us for support.
      </p>
      <p className="mb-4">This information may include:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Your name, email address, and contact details</li>
        <li>Account credentials</li>
        <li>Payment information</li>
        <li>Communications with us</li>
        <li>Any other information you choose to provide</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Provide, maintain, and improve our services</li>
        <li>Process transactions and send related information</li>
        <li>Send you technical notices, updates, security alerts, and support messages</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Communicate with you about products, services, offers, and events</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing of Information</h2>
      <p className="mb-4">We may share your personal information with:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Service providers who perform services on our behalf</li>
        <li>Professional advisors, such as lawyers, auditors, and insurers</li>
        <li>Regulatory authorities, law enforcement agencies, and others as required by law</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal information against unauthorized access,
        alteration, disclosure, or destruction.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have certain rights regarding your personal information, such as:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Access to your personal information</li>
        <li>Correction of inaccurate or incomplete information</li>
        <li>Deletion of your personal information</li>
        <li>Restriction or objection to processing</li>
        <li>Data portability</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
        Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
      <p className="mb-4">
        Email: privacy@productname.com
        <br />
        Address: 123 Product Street, Suite 456, San Francisco, CA 94103
      </p>
    </LegalLayout>
  )
}