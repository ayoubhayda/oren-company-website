"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

// Mock data - in a real app, this would come from a CMS or database
const posts: Record<
  string,
  {
    title: string
    excerpt: string
    content: string
    image: string
    category: string
    author: { name: string; avatar: string; role: string }
    date: string
    readTime: string
    relatedPosts: Array<{ id: string; title: string; image: string }>
  }
> = {
  "modern-web-development-trends-2025": {
    title: "Modern Web Development Trends in 2025",
    excerpt:
      "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.",
    content: `
      <p>The web development landscape continues to evolve at a rapid pace, with new technologies and methodologies emerging constantly. As we move through 2025, several key trends are shaping how we build and deploy web applications.</p>

      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development process. From AI-assisted coding to automated testing and optimization, developers are leveraging AI tools to increase productivity and code quality.</p>
      
      <p>Tools like GitHub Copilot, ChatGPT, and specialized AI coding assistants are now standard in many development workflows. These tools help with code completion, bug detection, documentation generation, and even architectural decisions. The key is learning to work alongside AI rather than being replaced by it.</p>

      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences directly through the browser. Major companies are investing heavily in PWA technology to reach users across all platforms.</p>
      
      <p>The latest PWA capabilities include improved offline support, better integration with device features, and enhanced performance. Companies like Twitter, Starbucks, and Uber have seen significant improvements in user engagement after adopting PWA technology.</p>

      <h2>Edge Computing</h2>
      <p>With the rise of edge computing, we're seeing faster, more responsive web applications. By processing data closer to the user, edge computing reduces latency and improves performance, especially for real-time applications.</p>
      
      <p>Platforms like Vercel Edge Functions and Cloudflare Workers are making it easier than ever to deploy code at the edge. This is particularly beneficial for applications that require low latency, such as gaming, video streaming, and real-time collaboration tools.</p>

      <h2>WebAssembly Growth</h2>
      <p>WebAssembly (Wasm) is enabling high-performance applications in the browser, opening up new possibilities for web-based gaming, video editing, and complex computational tasks that were previously only possible with native applications.</p>
      
      <p>Languages like Rust, C++, and Go can now be compiled to WebAssembly, bringing near-native performance to web applications. This is revolutionizing industries like CAD software, scientific computing, and multimedia processing.</p>

      <h2>Serverless Architecture</h2>
      <p>Serverless computing continues to gain traction, allowing developers to focus on code rather than infrastructure. This approach reduces operational overhead and scales automatically based on demand.</p>

      <h2>Conclusion</h2>
      <p>Staying current with these trends is essential for developers who want to build modern, efficient, and user-friendly web applications. The future of web development is exciting, with new possibilities emerging every day. By embracing these technologies and methodologies, developers can create better experiences for users while improving their own productivity and code quality.</p>
    `,
    image: "/placeholder.svg?key=blog1",
    category: "Web Development",
    author: {
      name: "Sarah Johnson",
      avatar: "/professional-woman-diverse.png",
      role: "Founder & CEO",
    },
    date: "2025-01-15",
    readTime: "5 min read",
    relatedPosts: [
      {
        id: "nextjs-performance-optimization",
        title: "Next.js Performance Optimization Tips",
        image: "/placeholder.svg?key=blog4",
      },
      {
        id: "ai-in-web-development",
        title: "How AI is Transforming Web Development",
        image: "/placeholder.svg?key=blog6",
      },
    ],
  },
  "designing-for-accessibility": {
    title: "Designing for Accessibility: A Complete Guide",
    excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of their abilities.",
    content: `
      <p>Accessibility in web design isn't just a legal requirement—it's a moral imperative and good business practice. Creating accessible websites ensures that everyone, regardless of their abilities, can access and interact with your content.</p>

      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites, tools, and technologies so that people with disabilities can use them. This includes people with auditory, cognitive, neurological, physical, speech, and visual disabilities.</p>
      
      <p>According to the World Health Organization, over 1 billion people worldwide have some form of disability. By making your website accessible, you're not just complying with regulations—you're opening your business to a significant portion of the population.</p>

      <h2>WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for web accessibility. The guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).</p>
      
      <p>WCAG 2.1 Level AA is the standard most organizations aim for, as it's often required by law in many countries. This includes requirements like providing text alternatives for images, ensuring keyboard navigation, maintaining sufficient color contrast, and making content readable and understandable.</p>

      <h2>Practical Implementation</h2>
      <p>Start with semantic HTML—use proper heading hierarchies, lists, and landmarks. Add ARIA labels where necessary, but remember that native HTML elements are often better than ARIA attributes.</p>
      
      <p>Ensure all interactive elements are keyboard accessible. Test your site by navigating with only a keyboard—if you can't reach or activate something, neither can users who rely on keyboards or assistive technologies.</p>

      <h2>Color and Contrast</h2>
      <p>Color contrast is crucial for users with visual impairments. WCAG requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Use tools like the WebAIM Contrast Checker to verify your color choices.</p>
      
      <p>Never rely on color alone to convey information. Always provide additional visual cues like icons, patterns, or text labels.</p>

      <h2>Testing and Tools</h2>
      <p>Use automated testing tools like axe DevTools, WAVE, or Lighthouse to catch common accessibility issues. However, automated tools only catch about 30% of accessibility problems—manual testing is essential.</p>
      
      <p>Test with actual screen readers like NVDA, JAWS, or VoiceOver. Better yet, involve users with disabilities in your testing process to get real-world feedback.</p>

      <h2>Conclusion</h2>
      <p>Accessibility should be considered from the start of any project, not added as an afterthought. By following these guidelines and making accessibility a priority, you'll create better experiences for all users while expanding your potential audience.</p>
    `,
    image: "/placeholder.svg?key=blog2",
    category: "Design",
    author: {
      name: "Emma Williams",
      avatar: "/professional-woman-diverse.png",
      role: "Lead Designer",
    },
    date: "2025-01-10",
    readTime: "8 min read",
    relatedPosts: [
      {
        id: "ui-design-principles",
        title: "Essential UI Design Principles for 2025",
        image: "/placeholder.svg?key=blog5",
      },
      {
        id: "modern-web-development-trends-2025",
        title: "Modern Web Development Trends in 2025",
        image: "/placeholder.svg?key=blog1",
      },
    ],
  },
  "seo-strategies-2025": {
    title: "SEO Strategies That Actually Work in 2025",
    excerpt: "Discover proven SEO techniques to improve your website's visibility and drive organic traffic.",
    content: `
      <p>Search Engine Optimization continues to evolve, with Google's algorithms becoming increasingly sophisticated. In 2025, successful SEO requires a holistic approach that combines technical excellence, quality content, and user experience optimization.</p>

      <h2>Core Web Vitals and Page Experience</h2>
      <p>Google's Core Web Vitals—Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—remain critical ranking factors. These metrics measure loading performance, interactivity, and visual stability.</p>
      
      <p>To optimize Core Web Vitals, focus on image optimization, efficient JavaScript loading, proper font loading strategies, and eliminating layout shifts. Tools like PageSpeed Insights and Lighthouse can help identify and fix issues.</p>

      <h2>Content Quality and E-E-A-T</h2>
      <p>Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, and Trustworthiness) is more important than ever. Create content that demonstrates real expertise and provides genuine value to users.</p>
      
      <p>Include author bios with credentials, cite authoritative sources, keep content updated, and ensure factual accuracy. For YMYL (Your Money or Your Life) topics like health and finance, E-E-A-T is especially critical.</p>

      <h2>Semantic Search and Intent Optimization</h2>
      <p>Modern SEO goes beyond keywords to understanding user intent. Google's algorithms now understand context, synonyms, and related concepts through natural language processing.</p>
      
      <p>Structure your content to answer specific questions and solve user problems. Use schema markup to help search engines understand your content's context and meaning. Focus on topic clusters rather than individual keywords.</p>

      <h2>Technical SEO Fundamentals</h2>
      <p>Ensure your site has a clean URL structure, proper XML sitemaps, and robots.txt configuration. Implement structured data markup for rich snippets. Fix broken links, duplicate content, and crawl errors.</p>
      
      <p>Mobile-first indexing means your mobile site is what Google primarily uses for ranking. Ensure your mobile experience is excellent, with fast loading times and easy navigation.</p>

      <h2>Link Building in 2025</h2>
      <p>Quality over quantity remains the golden rule for backlinks. Focus on earning links from authoritative, relevant sites through great content, digital PR, and relationship building.</p>
      
      <p>Guest posting, broken link building, and creating linkable assets like original research or comprehensive guides are effective strategies. Avoid link schemes and low-quality directories.</p>

      <h2>Local SEO</h2>
      <p>For businesses with physical locations, local SEO is crucial. Optimize your Google Business Profile, ensure NAP (Name, Address, Phone) consistency across the web, and encourage customer reviews.</p>
      
      <p>Create location-specific content and build local citations. Local link building from community organizations and local news sites can significantly boost local rankings.</p>

      <h2>Measuring Success</h2>
      <p>Track organic traffic, keyword rankings, conversion rates, and engagement metrics. Use Google Search Console to monitor performance and identify opportunities. Set up goal tracking in Google Analytics to measure SEO's impact on business objectives.</p>

      <h2>Conclusion</h2>
      <p>SEO in 2025 requires a comprehensive approach that balances technical optimization, quality content creation, and user experience. Stay updated with algorithm changes, focus on providing value to users, and be patient—SEO is a long-term investment that pays dividends over time.</p>
    `,
    image: "/placeholder.svg?key=blog3",
    category: "Marketing",
    author: {
      name: "Michael Chen",
      avatar: "/professional-man-diverse.png",
      role: "Marketing Director",
    },
    date: "2025-01-05",
    readTime: "6 min read",
    relatedPosts: [
      {
        id: "modern-web-development-trends-2025",
        title: "Modern Web Development Trends in 2025",
        image: "/placeholder.svg?key=blog1",
      },
      {
        id: "nextjs-performance-optimization",
        title: "Next.js Performance Optimization Tips",
        image: "/placeholder.svg?key=blog4",
      },
    ],
  },
  "nextjs-performance-optimization": {
    title: "Next.js Performance Optimization Tips",
    excerpt: "Practical tips and techniques to make your Next.js applications faster and more efficient.",
    content: `
      <p>Next.js is already optimized for performance out of the box, but there are many techniques you can use to make your applications even faster. This guide covers practical optimization strategies that can significantly improve your Next.js app's performance.</p>

      <h2>Image Optimization</h2>
      <p>Next.js's Image component automatically optimizes images, but you need to use it correctly. Always specify width and height to prevent layout shifts, use the priority prop for above-the-fold images, and choose the right format (WebP for modern browsers).</p>
      
      <p>Consider using blur placeholders for a better perceived performance. The Image component supports both static imports and dynamic URLs, with automatic optimization for both.</p>

      <h2>Code Splitting and Dynamic Imports</h2>
      <p>Next.js automatically code-splits at the page level, but you can further optimize by dynamically importing heavy components. Use next/dynamic for components that aren't needed immediately or are only used in certain conditions.</p>
      
      <p>For example, dynamically import modals, charts, or rich text editors that aren't visible on initial page load. This reduces the initial JavaScript bundle size significantly.</p>

      <h2>Server Components and Streaming</h2>
      <p>Next.js 13+ introduces React Server Components, which run on the server and send only the rendered HTML to the client. This dramatically reduces the JavaScript bundle size and improves initial page load.</p>
      
      <p>Use streaming with Suspense boundaries to show content progressively as it becomes available. This improves perceived performance by showing users something quickly rather than waiting for everything to load.</p>

      <h2>Font Optimization</h2>
      <p>Use next/font to automatically optimize and self-host fonts. This eliminates external network requests and prevents layout shifts caused by font loading. The font files are cached efficiently and loaded with optimal strategies.</p>
      
      <p>Preload critical fonts and use font-display: swap to ensure text remains visible during font loading. Consider using system fonts for body text to eliminate font loading entirely.</p>

      <h2>API Route Optimization</h2>
      <p>Implement caching strategies for API routes using Cache-Control headers. Use ISR (Incremental Static Regeneration) for pages that need to be updated periodically but don't require real-time data.</p>
      
      <p>Consider using edge functions for API routes that need low latency globally. Edge functions run closer to users, reducing response times significantly.</p>

      <h2>Database Query Optimization</h2>
      <p>Optimize database queries by selecting only needed fields, using proper indexes, and implementing connection pooling. Consider using a caching layer like Redis for frequently accessed data.</p>
      
      <p>Use parallel data fetching where possible to reduce waterfall requests. Next.js Server Components make it easy to fetch data in parallel at the component level.</p>

      <h2>Bundle Analysis</h2>
      <p>Regularly analyze your bundle size using @next/bundle-analyzer. Identify large dependencies and consider alternatives or lazy loading. Remove unused dependencies and tree-shake libraries properly.</p>
      
      <p>Pay special attention to third-party scripts. Use next/script with the appropriate loading strategy (afterInteractive, lazyOnload) to prevent blocking the main thread.</p>

      <h2>Monitoring and Metrics</h2>
      <p>Use Vercel Analytics or similar tools to monitor real-world performance metrics. Track Core Web Vitals, Time to First Byte (TTFB), and other key metrics to identify performance regressions.</p>
      
      <p>Set up performance budgets and automated alerts to catch performance issues before they reach production.</p>

      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Start with the biggest wins—image optimization, code splitting, and proper caching—then progressively enhance. Always measure the impact of your optimizations with real-world data.</p>
    `,
    image: "/placeholder.svg?key=blog4",
    category: "Web Development",
    author: {
      name: "Sarah Johnson",
      avatar: "/professional-woman-diverse.png",
      role: "Founder & CEO",
    },
    date: "2024-12-28",
    readTime: "7 min read",
    relatedPosts: [
      {
        id: "modern-web-development-trends-2025",
        title: "Modern Web Development Trends in 2025",
        image: "/placeholder.svg?key=blog1",
      },
      {
        id: "ai-in-web-development",
        title: "How AI is Transforming Web Development",
        image: "/placeholder.svg?key=blog6",
      },
    ],
  },
  "ui-design-principles": {
    title: "Essential UI Design Principles for 2025",
    excerpt: "Master the fundamental principles of user interface design to create beautiful, functional interfaces.",
    content: `
      <p>Great user interface design is both an art and a science. While trends come and go, certain fundamental principles remain constant. Understanding and applying these principles will help you create interfaces that are not only beautiful but also functional and user-friendly.</p>

      <h2>Visual Hierarchy</h2>
      <p>Visual hierarchy guides users through your interface by establishing the order of importance. Use size, color, contrast, and spacing to direct attention to the most important elements first.</p>
      
      <p>Primary actions should be the most prominent, secondary actions less so, and tertiary actions subtle. Headlines should be larger than body text, and important information should stand out through contrast or positioning.</p>

      <h2>Consistency and Standards</h2>
      <p>Consistency creates familiarity and reduces cognitive load. Use consistent colors, typography, spacing, and interaction patterns throughout your interface. Follow platform conventions so users can apply their existing knowledge.</p>
      
      <p>Create and maintain a design system with reusable components, defined spacing scales, and clear guidelines. This ensures consistency across your product and speeds up the design and development process.</p>

      <h2>White Space and Breathing Room</h2>
      <p>White space (or negative space) is not wasted space—it's a crucial design element. Proper spacing improves readability, creates visual hierarchy, and makes interfaces feel less cluttered and more premium.</p>
      
      <p>Don't be afraid of empty space. Give your content room to breathe. Use generous padding and margins, especially around important elements. Group related items together and separate unrelated ones.</p>

      <h2>Typography and Readability</h2>
      <p>Typography is fundamental to UI design. Choose fonts that are readable at various sizes and weights. Maintain a clear hierarchy with distinct heading levels and body text.</p>
      
      <p>Use a line height of 1.5-1.6 for body text, limit line length to 50-75 characters for optimal readability, and ensure sufficient contrast between text and background. Consider using system fonts for better performance and familiarity.</p>

      <h2>Color Theory and Accessibility</h2>
      <p>Color communicates meaning, creates mood, and guides attention. Use a limited color palette—typically one primary color, one or two accent colors, and a range of neutrals.</p>
      
      <p>Ensure sufficient contrast for accessibility (4.5:1 for normal text, 3:1 for large text). Don't rely on color alone to convey information—use icons, labels, or patterns as well. Test your designs in grayscale to verify hierarchy works without color.</p>

      <h2>Feedback and Affordances</h2>
      <p>Provide clear feedback for user actions. Buttons should have hover, active, and disabled states. Show loading indicators for async operations. Display success or error messages clearly.</p>
      
      <p>Use affordances—visual cues that suggest how an element should be used. Buttons should look clickable, links should be distinguishable, and interactive elements should respond to user input.</p>

      <h2>Mobile-First and Responsive Design</h2>
      <p>Design for mobile first, then enhance for larger screens. This ensures your core experience works on the most constrained devices. Use responsive layouts that adapt gracefully to different screen sizes.</p>
      
      <p>Consider touch targets—make interactive elements at least 44x44 pixels for easy tapping. Ensure important actions are reachable with one hand on mobile devices.</p>

      <h2>Progressive Disclosure</h2>
      <p>Don't overwhelm users with too much information at once. Use progressive disclosure to show only what's necessary initially, revealing additional options or information as needed.</p>
      
      <p>This can be achieved through expandable sections, multi-step forms, tooltips, or modal dialogs. The goal is to reduce cognitive load while keeping advanced features accessible.</p>

      <h2>Conclusion</h2>
      <p>These principles form the foundation of good UI design. While trends and tools change, these fundamentals remain relevant. Practice applying them consistently, and you'll create interfaces that are both beautiful and highly functional.</p>
    `,
    image: "/placeholder.svg?key=blog5",
    category: "Design",
    author: {
      name: "Emma Williams",
      avatar: "/professional-woman-diverse.png",
      role: "Lead Designer",
    },
    date: "2024-12-20",
    readTime: "5 min read",
    relatedPosts: [
      {
        id: "designing-for-accessibility",
        title: "Designing for Accessibility: A Complete Guide",
        image: "/placeholder.svg?key=blog2",
      },
      {
        id: "modern-web-development-trends-2025",
        title: "Modern Web Development Trends in 2025",
        image: "/placeholder.svg?key=blog1",
      },
    ],
  },
  "ai-in-web-development": {
    title: "How AI is Transforming Web Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and maintain websites.",
    content: `
      <p>Artificial Intelligence is fundamentally changing how we approach web development. From code generation to automated testing and intelligent user experiences, AI is making developers more productive while enabling entirely new types of applications.</p>

      <h2>AI-Assisted Coding</h2>
      <p>Tools like GitHub Copilot, ChatGPT, and specialized coding assistants are transforming the development workflow. These tools can generate boilerplate code, suggest completions, explain complex code, and even help debug issues.</p>
      
      <p>The key is learning to work effectively with AI assistants. They're best used for routine tasks, generating test cases, writing documentation, and exploring different approaches to problems. Developers still need to understand the code, make architectural decisions, and ensure quality.</p>

      <h2>Automated Testing and QA</h2>
      <p>AI-powered testing tools can automatically generate test cases, identify edge cases, and even predict where bugs are likely to occur. Visual regression testing tools use AI to detect unintended UI changes.</p>
      
      <p>Machine learning models can analyze code changes and predict their impact, helping teams prioritize testing efforts. This leads to better test coverage and faster release cycles.</p>

      <h2>Intelligent User Experiences</h2>
      <p>AI enables personalized user experiences at scale. Recommendation engines, chatbots, and adaptive interfaces can tailor content and functionality to individual users based on their behavior and preferences.</p>
      
      <p>Natural language processing allows users to interact with applications conversationally. Computer vision enables features like image recognition, document scanning, and augmented reality experiences directly in the browser.</p>

      <h2>Code Review and Quality Assurance</h2>
      <p>AI tools can review code for potential bugs, security vulnerabilities, and performance issues. They can suggest improvements, identify code smells, and ensure adherence to coding standards.</p>
      
      <p>These tools learn from millions of code repositories, identifying patterns that human reviewers might miss. They complement human code review by catching routine issues, allowing reviewers to focus on architecture and business logic.</p>

      <h2>Performance Optimization</h2>
      <p>AI can analyze application performance and suggest optimizations. It can identify slow database queries, inefficient algorithms, and resource bottlenecks. Some tools can even automatically apply optimizations.</p>
      
      <p>Predictive analytics can forecast traffic patterns and automatically scale resources, ensuring optimal performance while minimizing costs.</p>

      <h2>Accessibility Improvements</h2>
      <p>AI-powered tools can automatically generate alt text for images, suggest ARIA labels, and identify accessibility issues. Some tools can even automatically fix common accessibility problems.</p>
      
      <p>Voice interfaces powered by AI make applications more accessible to users with disabilities, while real-time translation breaks down language barriers.</p>

      <h2>Content Generation and Management</h2>
      <p>AI can generate content, from product descriptions to blog posts. While human oversight is still necessary, AI can significantly speed up content creation and help maintain consistency.</p>
      
      <p>Intelligent content management systems can automatically tag and categorize content, suggest related articles, and optimize content for search engines.</p>

      <h2>The Future of AI in Web Development</h2>
      <p>We're just scratching the surface of what's possible. Future developments might include AI that can design entire applications from natural language descriptions, automatically refactor legacy code, or predict and prevent production issues before they occur.</p>
      
      <p>The role of developers is evolving from writing every line of code to orchestrating AI tools, making high-level decisions, and ensuring quality and ethics in AI-generated solutions.</p>

      <h2>Conclusion</h2>
      <p>AI is not replacing developers—it's augmenting their capabilities. By embracing AI tools and learning to work effectively with them, developers can be more productive, creative, and focused on solving complex problems. The future of web development is a collaboration between human creativity and artificial intelligence.</p>
    `,
    image: "/placeholder.svg?key=blog6",
    category: "Technology",
    author: {
      name: "Michael Chen",
      avatar: "/professional-man-diverse.png",
      role: "Marketing Director",
    },
    date: "2024-12-15",
    readTime: "6 min read",
    relatedPosts: [
      {
        id: "modern-web-development-trends-2025",
        title: "Modern Web Development Trends in 2025",
        image: "/placeholder.svg?key=blog1",
      },
      {
        id: "nextjs-performance-optimization",
        title: "Next.js Performance Optimization Tips",
        image: "/placeholder.svg?key=blog4",
      },
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  const { t } = useLanguage()

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("blog.backToBlog")}
                </Link>
              </Button>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="secondary">{post.category}</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">{post.title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                          <span>{post.readTime.replace("min read", t("blog.readTime"))}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t("blog.shareArticle")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="py-20 lg:py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">{t("blog.relatedArticles")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                      <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
