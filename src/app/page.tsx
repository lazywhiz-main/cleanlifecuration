import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-bg.jpg"
              alt="Clean Life Curation"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 backdrop-blur-[2px]" />
          </div>
        </div>
        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-8">
              <span className="block text-[rgb(var(--text-primary-rgb))]">クリーンライフ</span>
              <span className="block mt-2 text-[rgb(var(--text-secondary-rgb))]">キュレーション</span>
            </h1>
            <p className="paragraph max-w-2xl mx-auto mb-12">
              清潔さや軽やかさを「価値観としての美意識」として再定義し、
              <br className="hidden md:block" />
              それに共感するアイテム・考え方・暮らしをキュレーションします。
            </p>
            <Link href="/about" className="button button-primary">
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-[rgb(var(--primary-rgb))]">
        <div className="container">
          <h2 className="heading-2 text-center mb-16">今月のキュレーション</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="card p-6">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/featured-1.jpg"
                  alt="Featured Item 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-3 text-[rgb(var(--text-primary-rgb))]">透明な気持ちでいるために</h3>
              <p className="text-[rgb(var(--text-secondary-rgb))]">日常の小さな気づきから生まれる、清らかな時間の過ごし方。</p>
            </div>
            {/* Featured Item 2 */}
            <div className="card p-6">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/featured-2.jpg"
                  alt="Featured Item 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-3 text-[rgb(var(--text-primary-rgb))]">整った暮らしの選択</h3>
              <p className="text-[rgb(var(--text-secondary-rgb))]">自分らしい清潔感を追求する、モダンなライフスタイル。</p>
            </div>
            {/* Featured Item 3 */}
            <div className="card p-6">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/featured-3.jpg"
                  alt="Featured Item 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-3 text-[rgb(var(--text-primary-rgb))]">軽やかな毎日を</h3>
              <p className="text-[rgb(var(--text-secondary-rgb))]">ストレスフリーな生活を実現する、シンプルなアイテムたち。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="heading-2 mb-8">Instagram</h2>
          <p className="paragraph text-[rgb(var(--text-secondary-rgb))] mb-12">
            日常の清らかな瞬間を、
            <br className="hidden md:block" />
            Instagramでシェアしています。
          </p>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Instagramをフォロー
          </Link>
        </div>
      </section>
    </div>
  );
}
