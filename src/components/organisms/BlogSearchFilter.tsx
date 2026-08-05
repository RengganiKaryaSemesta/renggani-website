import React, { useState, useMemo } from 'react';

export interface BlogItem {
  _id?: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  excerpt?: string;
  publishedAt?: string;
  categories?: { title: string }[];
  author?: { name: string };
  imageUrl?: string;
}

interface BlogSearchFilterProps {
  blogs: BlogItem[];
  categories: string[];
}

export const BlogSearchFilter: React.FC<BlogSearchFilterProps> = ({ blogs, categories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const allCategories = useMemo(() => ['Semua', ...categories], [categories]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'Semua' ||
        (blog.categories && blog.categories.some((cat) => cat.title.toLowerCase() === selectedCategory.toLowerCase()));

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  return (
    <div className="space-y-10 font-roboto">
      {/* Search Bar & Category Filter Controls */}
      <div className="bg-gray-50 dark:bg-gray-800/60 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/80 space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel berdasarkan judul atau topik..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors text-xs font-bold bg-gray-200 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 self-end md:self-center">
            Menampilkan <span className="text-blue-600 font-bold">{filteredBlogs.length}</span> dari {blogs.length} artikel
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 shrink-0 mr-1">
            Kategori:
          </span>
          {allCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered Articles Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredBlogs.map((blog) => (
            <a
              key={blog.slug.current}
              href={`/blogs/${blog.slug.current}`}
              className="group space-y-4 block bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                {blog.imageUrl ? (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white font-bold text-lg p-6 text-center">
                    {blog.title}
                  </div>
                )}
                {blog.categories?.[0]?.title && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white font-semibold text-xs rounded-full uppercase tracking-wider">
                    {blog.categories[0].title}
                  </span>
                )}
              </div>

              <div className="space-y-2 px-1">
                <h3 className="text-xl font-bold dark:text-white text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                  {blog.title}
                </h3>
                {blog.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between pt-2 text-xs text-gray-500 dark:text-gray-400">
                  {blog.publishedAt && (
                    <span>
                      {new Date(blog.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                  {blog.author?.name && (
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Oleh: {blog.author.name}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl font-bold">
            🔍
          </div>
          <h3 className="text-xl font-bold dark:text-white text-gray-900">
            Tidak ada artikel yang cocok
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Coba ubah kata kunci pencarian atau pilih kategori lain untuk menemukan artikel yang Anda cari.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
            }}
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSearchFilter;
