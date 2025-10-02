import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-sm text-muted-foreground">Last updated: January 2025</p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Agreement to Terms</h2>
                  <p>
                    By accessing or using Oren's services, you agree to be bound by these Terms of Service. If you
                    disagree with any part of these terms, you may not access our services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Services</h2>
                  <p>
                    Oren provides web development, custom platform development, e-commerce solutions, digital marketing,
                    and related services. The specific scope of services will be defined in individual project
                    agreements.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
                  <p>
                    Upon full payment, clients receive ownership of the final deliverables as specified in the project
                    agreement. Oren retains the right to use project work in portfolios and marketing materials unless
                    otherwise agreed.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Payment Terms</h2>
                  <p>Payment terms will be specified in individual project agreements. Typical terms include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Initial deposit required to begin work</li>
                    <li>Milestone payments for larger projects</li>
                    <li>Final payment due upon project completion</li>
                    <li>Late payments may incur additional fees</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Project Timeline</h2>
                  <p>
                    Project timelines are estimates and may be adjusted based on project complexity, client feedback,
                    and scope changes. We will communicate any timeline adjustments promptly.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Warranties and Disclaimers</h2>
                  <p>
                    We warrant that services will be performed in a professional manner. However, we do not guarantee
                    specific results or outcomes. Services are provided "as is" without warranties of any kind.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
                  <p>
                    Oren's liability is limited to the amount paid for services. We are not liable for indirect,
                    incidental, or consequential damages arising from the use of our services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
                  <p>
                    Either party may terminate services with written notice. Upon termination, client is responsible for
                    payment of work completed to date.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
                  <p>
                    For questions about these Terms of Service, contact us at{" "}
                    <a href="mailto:legal@oren.com" className="text-primary hover:underline">
                      legal@oren.com
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
