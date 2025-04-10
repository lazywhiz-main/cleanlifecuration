'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "ミニマルデスクオーガナイザー",
    category: "整理・収納",
    description: "デスクワークをより快適に。必要最小限のものだけを美しく収納できる、シンプルで機能的なオーガナイザー。",
    image: "/images/organizer.jpg",
    price: "¥4,800",
  },
  {
    id: 2,
    name: "エコフレンドリーボトル",
    category: "サステナブル",
    description: "環境に優しい素材を使用した、スタイリッシュなウォーターボトル。日々の水分補給を美しく演出します。",
    image: "/images/bottle.jpg",
    price: "¥3,200",
  },
  {
    id: 3,
    name: "アロマディフューザー",
    category: "リラックス",
    description: "ナチュラルな香りで空間を清々しく。シンプルなデザインで、どんなインテリアにも調和します。",
    image: "/images/diffuser.jpg",
    price: "¥6,800",
  },
  {
    id: 4,
    name: "オーガニックタオルセット",
    category: "バス・トイレタリー",
    description: "肌に優しいオーガニックコットン使用。吸水性が高く、素材本来の質感を大切にしたタオルセット。",
    image: "/images/towel.jpg",
    price: "¥5,400",
  },
  {
    id: 5,
    name: "バンブーストレージ",
    category: "整理・収納",
    description: "竹素材を使用した環境に優しい収納ボックス。温かみのある素材感で、整然と収納できます。",
    image: "/images/storage.jpg",
    price: "¥4,200",
  },
  {
    id: 6,
    name: "ミニマルノート",
    category: "ステーショナリー",
    description: "シンプルで使いやすいノート。再生紙を使用し、環境への配慮も忘れません。",
    image: "/images/notebook.jpg",
    price: "¥1,200",
  }
];

const categories = ["すべて", "整理・収納", "サステナブル", "リラックス", "バス・トイレタリー", "ステーショナリー"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const filteredProducts = selectedCategory === "すべて"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-[rgb(var(--primary-rgb))]">
        <div className="container">
          <h1 className="heading-1 text-center mb-6">プロダクト</h1>
          <p className="paragraph text-center max-w-2xl mx-auto">
            日々の暮らしをより清らかに、より軽やかにする
            <br className="hidden md:block" />
            厳選されたプロダクトをご紹介します。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-[rgb(var(--accent-rgb))]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 text-sm font-light tracking-wide transition-all duration-300 rounded-full
                  ${selectedCategory === category
                    ? 'bg-[rgb(var(--text-primary-rgb))] text-white'
                    : 'text-[rgb(var(--text-secondary-rgb))] hover:text-[rgb(var(--text-primary-rgb))] hover:bg-[rgb(var(--primary-rgb))]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container px-4">
          {/* Mobile View: List */}
          <div className="md:hidden space-y-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-[rgb(var(--primary-rgb))] animate-pulse" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-light text-[rgb(var(--text-light-rgb))] bg-[rgb(var(--primary-rgb))]">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-light mt-3 text-[rgb(var(--text-primary-rgb))]">
                    {product.name}
                  </h3>
                  <p className="text-[rgb(var(--text-secondary-rgb))] text-sm mt-2 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-[rgb(var(--text-primary-rgb))]">
                      {product.price}
                    </span>
                    <button className="button-primary text-sm px-4 py-2">
                      詳しく見る
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-[rgb(var(--primary-rgb))] animate-pulse" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-light text-[rgb(var(--text-light-rgb))] bg-[rgb(var(--primary-rgb))]">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-light mt-2 text-[rgb(var(--text-primary-rgb))]">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-[rgb(var(--text-secondary-rgb))] text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-[rgb(var(--text-primary-rgb))]">
                      {product.price}
                    </span>
                    <button className="button-primary text-sm px-4 py-2">
                      詳しく見る
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[rgb(var(--primary-rgb))]">
        <div className="container text-center px-4">
          <h2 className="heading-2 mb-6">新商品情報をお届けします</h2>
          <p className="paragraph max-w-2xl mx-auto mb-8">
            新しいプロダクトの情報や、クリーンライフに関する
            <br className="hidden md:block" />
            最新のトレンドをメールでお届けします。
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-4 py-2 rounded-full border border-[rgb(var(--accent-rgb))] bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[rgb(var(--text-light-rgb))] transition-colors"
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