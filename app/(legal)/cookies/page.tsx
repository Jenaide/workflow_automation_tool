import type { Metadata } from "next"
import LegalLayout from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy | ProductName",
  description: "Learn about how we use cookies and similar technologies on our website.",
}

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="March 22, 2025">
      <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies</h2>
      <p className="mb-4">
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They
        are widely used to make websites work more efficiently and provide information to the website owners.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
      <p className="mb-4">We use cookies for the following purposes:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly and
          cannot be switched off in our systems.
        </li>
        <li>
          <strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources so we can
          measure and improve the performance of our site.
        </li>
        <li>
          <strong>Functionality cookies:</strong> These cookies enable the website to provide enhanced functionality and
          personalization.
        </li>
        <li>
          <strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners to
          build a profile of your interests and show you relevant ads on other sites.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
      <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Essential Cookies</h3>
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Cookie Name</th>
            <th className="border p-2 text-left">Purpose</th>
            <th className="border p-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">session_id</td>
            <td className="border p-2">Maintains your session</td>
            <td className="border p-2">Session</td>
          </tr>
          <tr>
            <td className="border p-2">csrf_token</td>
            <td className="border p-2">Prevents cross-site request forgery</td>
            <td className="border p-2">Session</td>
          </tr>
          <tr>
            <td className="border p-2">cookie_consent</td>
            <td className="border p-2">Stores your cookie preferences</td>
            <td className="border p-2">1 year</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Performance Cookies</h3>
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Cookie Name</th>
            <th className="border p-2 text-left">Purpose</th>
            <th className="border p-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">_ga</td>
            <td className="border p-2">Google Analytics - Distinguishes users</td>
            <td className="border p-2">2 years</td>
          </tr>
          <tr>
            <td className="border p-2">_gid</td>
            <td className="border p-2">Google Analytics - Distinguishes users</td>
            <td className="border p-2">24 hours</td>
          </tr>
          <tr>
            <td className="border p-2">_gat</td>
            <td className="border p-2">Google Analytics - Throttles request rate</td>
            <td className="border p-2">1 minute</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Managing Cookies</h2>
      <p className="mb-4">You can control and manage cookies in various ways. You can:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Use our cookie consent tool to manage your preferences</li>
        <li>Modify your browser settings to accept or reject cookies</li>
        <li>Delete cookies that have already been stored on your device</li>
      </ul>
      <p className="mb-4">Please note that disabling certain cookies may affect the functionality of our website.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Cookies</h2>
      <p className="mb-4">
        Some cookies are placed by third parties on our website. These third parties may include analytics providers,
        advertising networks, and social media platforms. We do not control these third-party cookies and recommend that
        you check the privacy policies of these third parties for information about their cookies.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy
        on this page and updating the &quot;Last Updated&quot; date.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
      <p className="mb-4">If you have any questions about our Cookie Policy, please contact us at:</p>
      <p className="mb-4">
        Email: privacy@productname.com
        <br />
        Address: 123 Product Street, Suite 456, San Francisco, CA 94103
      </p>
    </LegalLayout>
  )
}