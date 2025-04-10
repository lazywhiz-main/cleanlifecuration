import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="About Clean Life Curation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="heading-1 text-neutral-900 mb-6">
            クリーンライフキュレーションとは
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-8">私たちの哲学</h2>
            <p className="paragraph text-neutral-700 mb-6">
              清潔さや軽やかさは、単なる衛生概念ではありません。
              それは、私たちの生き方そのものを形作る「価値観としての美意識」です。
            </p>
            <p className="paragraph text-neutral-700 mb-6">
              治療や通院も、単なる「病人の時間」ではありません。
              私たちは、その時間も含めて、主体的に生きるための選択肢として捉えています。
            </p>
            <p className="paragraph text-neutral-700">
              不浄を嫌う文化を、現代的な視点で再解釈し、
              透明で軽やか、ストレスフリーなライフスタイルを提案します。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">私たちが大切にする価値観</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-light mb-4">透明感</h3>
              <p className="text-neutral-600">
                心も空間も、透明でクリアな状態を保つこと。
                余計なものを取り除き、本質を見つめる姿勢。
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-4">軽やかさ</h3>
              <p className="text-neutral-600">
                重たいものを抱え込まず、軽やかに生きること。
                ストレスフリーな選択を積み重ねることで生まれる、心地よい日常。
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-4">整った美しさ</h3>
              <p className="text-neutral-600">
                無駄を省き、必要なものだけを選び取ること。
                シンプルでありながら、洗練された美しさを追求します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-8">目指す未来</h2>
            <p className="paragraph text-neutral-700">
              私たちは、清潔さや軽やかさを「生き方の選択」として捉え直し、
              それに共感する人々と共に、新しいライフスタイルの可能性を探求していきます。
            </p>
            <p className="paragraph text-neutral-700 mt-6">
              InstagramやZ世代の美意識と相性の良い、
              清らかで儚く美しい世界観を、これからも発信し続けていきます。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 