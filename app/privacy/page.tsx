import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-banana-600 hover:text-banana-700 mb-8"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-4xl">🍌</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                ImageEditor ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online image editing service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Account information (if you create an account): email address, name</li>
                <li>Images you upload for editing</li>
                <li>Payment information (processed securely through our payment provider, Creem)</li>
                <li>Support communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>IP address and location data (general geographic area)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your image editing requests</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send you service-related communications</li>
                <li>Respond to your support requests</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Image Processing and Storage</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Privacy-First Approach:</strong> We prioritize your privacy when processing images:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Images are processed using AI models (Gemini 2.5 Flash Image) for generation and editing</li>
                <li>We do not store your images permanently unless you explicitly save them to your account</li>
                <li>Images processed in your browser may be stored temporarily in your browser's local storage</li>
                <li>We do not use your images for training AI models or any other purpose beyond providing the service</li>
                <li>You can delete your images at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> With third-party service providers who help us operate our service (e.g., payment processors, hosting providers)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us at{' '}
                <a
                  href="mailto:fufu@nanobananaco.online"
                  className="text-banana-600 hover:text-banana-700 font-semibold"
                >
                  fufu@nanobananaco.online
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage, and assist with marketing efforts. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our service, you consent to the transfer of your information to these countries.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a
                  href="mailto:fufu@nanobananaco.online"
                  className="text-banana-600 hover:text-banana-700 font-semibold"
                >
                  fufu@nanobananaco.online
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

