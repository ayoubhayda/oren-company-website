import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Accessibility Statement</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-sm text-muted-foreground">Last updated: January 2025</p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Our Commitment</h2>
                  <p>
                    Oren is committed to ensuring digital accessibility for people with disabilities. We are continually
                    improving the user experience for everyone and applying the relevant accessibility standards.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Conformance Status</h2>
                  <p>
                    We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These
                    guidelines explain how to make web content more accessible for people with disabilities.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Accessibility Features</h2>
                  <p>Our website includes the following accessibility features:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Semantic HTML structure for screen reader compatibility</li>
                    <li>Keyboard navigation support throughout the site</li>
                    <li>Sufficient color contrast ratios for text readability</li>
                    <li>Alternative text for images and visual content</li>
                    <li>Responsive design that works across devices</li>
                    <li>Clear focus indicators for interactive elements</li>
                    <li>ARIA labels and landmarks for better navigation</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Known Limitations</h2>
                  <p>
                    Despite our best efforts, some content may not yet be fully accessible. We are actively working to
                    address these issues and improve accessibility across our entire website.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Feedback</h2>
                  <p>
                    We welcome your feedback on the accessibility of our website. If you encounter any accessibility
                    barriers, please contact us at{" "}
                    <a href="mailto:accessibility@oren.com" className="text-primary hover:underline">
                      accessibility@oren.com
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Technical Specifications</h2>
                  <p>
                    Accessibility of this website relies on the following technologies to work with the particular
                    combination of web browser and assistive technologies or plugins installed on your computer:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>ARIA (Accessible Rich Internet Applications)</li>
                  </ul>
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
