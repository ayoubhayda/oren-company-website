import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-sm text-muted-foreground">Last updated: January 2025</p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                  <p>
                    At Oren, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information</li>
                    <li>Company information</li>
                    <li>Project details and requirements</li>
                    <li>Communication preferences</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your requests and transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Send you marketing communications (with your consent)</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist in our operations</li>
                    <li>Professional advisors such as lawyers and accountants</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@oren.com" className="text-primary hover:underline">
                      privacy@oren.com
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
