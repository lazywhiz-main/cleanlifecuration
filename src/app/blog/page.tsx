'use client'

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "ミニマルライフで得られる5つのメリット",
    category: "ライフスタイル",
    date: "2024.04.10",
    image: "/images/featured-1.jpg",
    excerpt: "物を減らすことで得られる心の余裕と、本当に大切なものが見えてくる暮らしについて考えます。",
  },
  {
    id: 2,
    title: "環境に優しい暮らしのはじめ方",
    category: "サステナブル",
    date: "2024.04.08",
    image: "/images/featured-2.jpg",
    excerpt: "日々の小さな選択から始められる、地球に優しいライフスタイルのヒントをご紹介。",
  },
  {
    id: 3,
    title: "整理収納のプロが教える片付けのコツ",
    category: "整理・収納",
    date: "2024.04.05",
    image: "/images/featured-3.jpg",
    excerpt: "毎日の暮らしが楽しくなる、効率的で続けやすい片付けの方法をお伝えします。",
  },
  {
    id: 4,
    title: "心地よい香りで整える朝時間",
    category: "ウェルネス",
    date: "2024.04.03",
    image: "/images/diffuser.jpg",
    excerpt: "アロマの力を借りて、より良い1日のスタートを切るための方法をご紹介。",
  },
  {
    id: 5,
    title: "デスク周りの整理術",
    category: "整理・収納",
    date: "2024.04.01",
    image: "/images/organizer.jpg",
    excerpt: "仕事や勉強の効率を上げる、スマートなデスク周りの整理方法について。",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-[rgb(var(--primary-rgb))]">
        <div className="container">
          <h1 className="heading-1 text-center mb-6">ブログ</h1>
          <p className="paragraph text-center max-w-2xl mx-auto">
            クリーンでミニマルな暮らしのヒントから、
            <br className="hidden md:block" />
            サステナブルなライフスタイルのアイデアまで。
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-[rgb(var(--primary-rgb))] animate-pulse" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-light text-[rgb(var(--text-light-rgb))]">
                      {post.date}
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-light 
                      text-[rgb(var(--text-light-rgb))] bg-[rgb(var(--primary-rgb))]">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-light mb-3 text-[rgb(var(--text-primary-rgb))]
                    group-hover:text-[rgb(var(--text-secondary-rgb))] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[rgb(var(--text-secondary-rgb))] text-sm">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[rgb(var(--primary-rgb))]">
        <div className="container text-center px-4">
          <h2 className="heading-2 mb-6">最新情報をお届けします</h2>
          <p className="paragraph max-w-2xl mx-auto mb-8">
            クリーンライフに関する情報や、
            <br className="hidden md:block" />
            暮らしを豊かにするヒントをメールでお届けします。
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-4 py-2 rounded-full border border-[rgb(var(--accent-rgb))]
                bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[rgb(var(--text-light-rgb))]
                transition-colors"
            />
            <button className="button button-primary whitespace-nowrap">
              登録する
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 