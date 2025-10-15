import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Home/Footer';

const TermsConditions = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header */}
      <div className="bg-gradient-to-b from-[#03141A] to-[#042C3C] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg">
            Last Updated: January 15, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to Thrive Brands ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your access to and use of our website [www.thrivebrands.ai] ("Site") and any services, content, or materials offered through it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree, please refrain from using our Site or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Use of Our Website</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use this Site only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use the Site in any way that violates applicable laws or regulations.</li>
                <li>Attempt to gain unauthorized access to the Site or its related systems.</li>
                <li>Interfere with the Site's performance or security.</li>
                <li>Copy, distribute, or modify any content without written permission from Thrive Brands.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this Site—including text, graphics, logos, icons, images, videos, and software—is the property of Thrive Brands or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, republish, or exploit any material from this Site for commercial purposes without express written consent from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Thrive Brands provides marketing, branding, design, and technology services based on client requirements. All project timelines, deliverables, and outcomes depend on client cooperation, project scope, and mutual agreement outlined in separate service contracts.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We do not guarantee specific results or performance outcomes unless explicitly stated in a signed agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Site may include links to third-party websites or tools for your convenience. Thrive Brands has no control over these sites and is not responsible for their content, accuracy, or privacy practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Accessing third-party sites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, Thrive Brands shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use or inability to use the Site or its content,</li>
                <li>Reliance on information provided on the Site, or</li>
                <li>Any unauthorized access or alteration of your data.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your sole remedy for dissatisfaction with the Site is to stop using it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Thrive Brands, its employees, partners, and affiliates from any claims, damages, or expenses arising out of your use of the Site or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of our Site is also governed by our Privacy Policy, which explains how we collect and handle your personal information. Please review it carefully before using our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting on this page. Your continued use of the Site constitutes acceptance of any modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of [Insert Applicable Jurisdiction]. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Insert Location].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> client.service@thrivebrands.ai<br />
                  <strong>Website:</strong> www.thrivebrands.ai<br />
                  <strong>Address:</strong> 608 165th Ave NE, Bellevue WA 98008
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsConditions;
