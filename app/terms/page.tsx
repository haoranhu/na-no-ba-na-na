import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function TermsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using ImageEditor ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                ImageEditor is an online image editing platform that provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>AI-powered image generation and editing tools</li>
                <li>Browser-based image processing</li>
                <li>Subscription-based premium features</li>
                <li>Free tier with limited usage</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Important:</strong> Our platform is an independent product and is not affiliated with, endorsed by, or sponsored by Google. We provide access to AI models (including Gemini 2.5 Flash Image) through our custom interface.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-3">When you create an account, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Upload content that violates intellectual property rights</li>
                <li>Upload content that is harmful, offensive, or violates others' rights</li>
                <li>Attempt to reverse engineer or extract AI models</li>
                <li>Use automated systems to access the Service (except with our permission)</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Create multiple accounts to circumvent usage limits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Payment</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Subscription Plans</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We offer various subscription plans with different features and usage limits. Subscription fees are billed in advance on a monthly or annual basis, as selected by you.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Payment Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Payments are processed securely through Creem, our payment provider. By subscribing, you authorize us to charge your payment method for the subscription fees.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Subscription Renewal</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You can cancel your subscription at any time through your account settings or by contacting support.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Price Changes</h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify subscription prices. Price changes will be communicated to you in advance, and you may cancel your subscription if you do not agree to the new pricing.
              </p>
            </section>

            <section className="mb-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refund Policy</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Refund Eligibility</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We offer refunds under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Within 14 days of purchase:</strong> Full refund for any reason</li>
                <li><strong>Service issues:</strong> If the Service is unavailable or not functioning as described</li>
                <li><strong>Billing errors:</strong> If you were charged incorrectly</li>
                <li><strong>Duplicate charges:</strong> If you were charged multiple times for the same subscription</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Refund Process</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                To request a refund:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                <li>Contact us at <a href="mailto:fufu@nanobananaco.online" className="text-banana-600 hover:text-banana-700 font-semibold">fufu@nanobananaco.online</a></li>
                <li>Include your account email and subscription details</li>
                <li>Explain the reason for your refund request</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Response Time</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>We commit to responding to all refund requests within 3 business days.</strong> Refunds will be processed to your original payment method within 5-10 business days after approval.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.4 Non-Refundable Items</h3>
              <p className="text-gray-700 leading-relaxed">
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Usage of credits or features after the refund period</li>
                <li>Subscriptions that have been active for more than 14 days</li>
                <li>Refunds requested due to violation of these Terms of Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                All content, features, and functionality of the Service are owned by ImageEditor and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Your Content</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You retain ownership of any images or content you upload. By using the Service, you grant us a limited license to process your content solely for the purpose of providing the Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Generated Content</h3>
              <p className="text-gray-700 leading-relaxed">
                Images generated using our AI tools are owned by you, subject to the terms of your subscription plan. Free tier users may be subject to watermarks or usage restrictions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain high availability of the Service but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or unforeseen circumstances. We are not liable for any losses resulting from Service unavailability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>The Service is provided "as is" without warranties of any kind</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid us in the 12 months preceding the claim</li>
                <li>We are not responsible for any loss or damage to your content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, if you violate these Terms of Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may terminate your account at any time by canceling your subscription and contacting us to delete your account. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify you of significant changes by email or through the Service. Your continued use of the Service after changes become effective constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes arising from these terms will be resolved through appropriate legal channels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{' '}
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

