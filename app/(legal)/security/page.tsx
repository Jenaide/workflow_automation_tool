import type { Metadata } from "next"
import LegalLayout from "@/components/legal/legal-layout"

export const metadata: Metadata = {
  title: "Security Policy | ProductName",
  description: "Learn about our security practices and how we protect your data.",
}

export default function SecurityPage() {
  return (
    <LegalLayout title="Security Policy" lastUpdated="March 22, 2025">
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Our Commitment to Security</h2>
      <p className="mb-4">
        At ProductName, we take the security of your data seriously. We implement industry-standard security measures to
        protect your information from unauthorized access, disclosure, alteration, and destruction.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Data Protection Measures</h2>
      <p className="mb-4">We employ the following security measures to protect your data:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Encryption of data in transit using TLS/SSL protocols</li>
        <li>Encryption of sensitive data at rest</li>
        <li>Regular security assessments and penetration testing</li>
        <li>Multi-factor authentication for access to sensitive systems</li>
        <li>Regular security updates and patches</li>
        <li>Employee security training and awareness programs</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Infrastructure Security</h2>
      <p className="mb-4">
        Our infrastructure is hosted in secure data centers that maintain multiple certifications for security and
        compliance, including:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>ISO 27001</li>
        <li>SOC 1, SOC 2, and SOC 3</li>
        <li>PCI DSS</li>
        <li>GDPR compliance</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Access Controls</h2>
      <p className="mb-4">
        We implement strict access controls to ensure that only authorized personnel can access our systems and your
        data. These controls include:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Role-based access control</li>
        <li>Principle of least privilege</li>
        <li>Regular access reviews</li>
        <li>Secure authentication mechanisms</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Incident Response</h2>
      <p className="mb-4">
        We have a comprehensive incident response plan in place to quickly address any security incidents. Our team is
        trained to:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Identify and contain security incidents</li>
        <li>Investigate the root cause</li>
        <li>Implement corrective actions</li>
        <li>Notify affected parties as required by law</li>
        <li>Learn from incidents to improve our security posture</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Security Compliance</h2>
      <p className="mb-4">
        We regularly review and update our security practices to comply with relevant laws, regulations, and industry
        standards. We also conduct regular security assessments and audits to ensure the effectiveness of our security
        controls.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Reporting Security Concerns</h2>
      <p className="mb-4">
        If you discover a security vulnerability or have concerns about the security of our services, please contact us
        immediately at security@productname.com. We appreciate your help in keeping our platform secure.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Security Policy from time to time. We will notify you of any changes by posting the new
        policy on this page and updating the &quot;Last Updated&quot; date.
      </p>
    </LegalLayout>
  )
}