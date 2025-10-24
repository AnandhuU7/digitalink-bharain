// app/blogs/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  data: {
    title: string;
    description?: string;
    cardImage: string;
    intro: string;
    author?: string;
    readingTime?: number;
    publishDate?: Date;
  };
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// Mock function - replace with your actual data fetching
async function getBlogPost(slug: string): Promise<BlogPost> {
  // Replace with your actual data fetching logic
  return {
    slug,
    data: {
      title: 'Sample Blog Post Title',
      description: 'This is a sample description for the blog post.',
      cardImage: '/images/blog-placeholder.jpg',
      intro: 'Sample intro text',
      author: 'John Doe',
      readingTime: 5,
      publishDate: new Date(),
    },
  };
}

// Mock function - replace with your actual data fetching
async function getRelatedBlogs(currentSlug: string): Promise<BlogPost[]> {
  // Replace with your actual data fetching logic
  return [
    {
      slug: 'related-1',
      data: {
        title: 'Related Article 1',
        cardImage: '/images/related-1.jpg',
        intro: 'This is a related article intro',
      },
    },
    {
      slug: 'related-2',
      data: {
        title: 'Related Article 2',
        cardImage: '/images/related-2.jpg',
        intro: 'This is another related article intro',
      },
    },
  ];
}

export default async function BlogPage({ params }: BlogPageProps) {
  const entry = await getBlogPost(params.slug);
  const relatedBlogs = await getRelatedBlogs(params.slug);
  
  const formattedDate = entry.data.publishDate
    ? new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(entry.data.publishDate)
    : null;

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background with improved colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#32869f] to-[#1d5566] z-0"></div>

        {/* Static background elements (no animations) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white opacity-5 rounded-full"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-white opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-white opacity-20"></div>

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <h1 className="text-4xl md:text-6xl font-bold mb-24 text-white">
              {/* Increased margin-bottom to mb-24 */}
              Insights & <span className="relative inline-block">
                <span className="relative z-10">Perspectives</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#f0cb35] opacity-70 rounded"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#f0cb35] opacity-30 blur-sm"></span>
              </span>
            </h1>
          </div>
        </div>

        <div className="absolute inset-0 z-20 flex items-end justify-center">
          <div className="container max-w-6xl mx-auto px-6 pb-16 pt-24">
            {/* Increased padding-top to pt-24 */}
            {/* Date and reading time */}
            <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-4 text-white/80">
              {/* Added flex-col for mobile, md:flex-row for desktop */}
              {formattedDate && (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{formattedDate}</span>
                </div>
              )}

              {/* Reading time (optional) */}
              {entry.data.readingTime && (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{entry.data.readingTime} min read</span>
                </div>
              )}

              {/* Author if exists */}
              {entry.data.author && (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>{entry.data.author}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.86,136.44,221.91,119.3,302.86,101.1,272,68,321.39,56.44Z"
              fill="#ffffff"
              fillOpacity="0.1"
            ></path>
          </svg>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-3 border-b border-gray-100" aria-label="Breadcrumb">
        <div className="container max-w-6xl mx-auto px-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#32869f]">Home</Link></li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </li>
            <li><Link href="/blogs" className="hover:text-[#32869f]">Blogs</Link></li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </li>
            <li
              className="text-[#32869f] font-medium truncate max-w-[200px] md:max-w-xs"
              aria-current="page"
            >
              {entry.data.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <article className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 max-w-3xl leading-tight border-l-4 border-blue-500 pl-4">
            {entry.data.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {entry.data.description && (
                <div
                  className="mb-8 text-xl text-gray-700 leading-relaxed font-light italic text-justify"
                  dangerouslySetInnerHTML={{
                    __html: entry.data.description.replace(/\n/g, '<br/>'),
                  }}
                />
              )}
              {/* Share buttons */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Share this article
                </h3>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${entry.data.title}&url=https://dubai-hikvision.com/blogs/${entry.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#1DA1F2] hover:text-white rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://dubai-hikvision.com/blogs/${entry.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#1877F2] hover:text-white rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://dubai-hikvision.com/blogs/${entry.slug}&title=${entry.data.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#0A66C2] hover:text-white rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href={`mailto:?subject=${entry.data.title}&body=Check out this article: https://dubai-hikvision.com/blogs/${entry.slug}`}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-800 hover:text-white rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              {/* Related posts */}
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedBlogs.map((blog) => (
                    <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <Image
                          src={blog.data.cardImage}
                          alt={blog.data.title}
                          className="w-20 h-20 object-cover rounded-lg"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900 group-hover:text-[#32869f] transition-colors leading-tight">
                          {blog.data.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {blog.data.intro}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/blogs"
                  className="mt-6 inline-flex items-center gap-2 text-[#32869f] font-medium hover:underline"
                >
                  View all blogs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to learn more about our solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover how Hikvision security systems can help safeguard your
            business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#32869f] hover:bg-[#266277] text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/productsnew"
              className="px-8 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Next/Prev Article Navigation */}
      <section className="border-t border-gray-200">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <Link href="/blogs" className="group py-8 px-6 flex items-center gap-4">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#32869f] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 group-hover:text-white transition-colors"
                >
                  <path d="M19 12H5"></path>
                  <path d="M12 19l-7-7 7-7"></path>
                </svg>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Back to</span>
                <span className="font-medium text-gray-900 group-hover:text-[#32869f] transition-colors">
                  All Blogs
                </span>
              </div>
            </Link>
            <Link
              href="/contact"
              className="group py-8 px-6 flex items-center justify-end gap-4"
            >
              <div>
                <span className="block text-sm text-gray-500 text-right">
                  Any questions?
                </span>
                <span className="font-medium text-gray-900 group-hover:text-[#32869f] transition-colors">
                  Contact Us
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#32869f] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 group-hover:text-white transition-colors"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}