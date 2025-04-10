'use client'

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを実装
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-[rgb(var(--primary-rgb))]">
        <div className="container">
          <h1 className="heading-1 text-center mb-6">お問い合わせ</h1>
          <p className="paragraph text-center max-w-2xl mx-auto">
            商品やサービスに関するご質問、
            <br className="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="name"
                    className="block text-sm font-light text-[rgb(var(--text-secondary-rgb))]"
                  >
                    お名前
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[rgb(var(--accent-rgb))]
                      bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[rgb(var(--text-light-rgb))]
                      transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="email"
                    className="block text-sm font-light text-[rgb(var(--text-secondary-rgb))]"
                  >
                    メールアドレス
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[rgb(var(--accent-rgb))]
                      bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[rgb(var(--text-light-rgb))]
                      transition-colors"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="subject"
                  className="block text-sm font-light text-[rgb(var(--text-secondary-rgb))]"
                >
                  お問い合わせ項目
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-[rgb(var(--accent-rgb))]
                    bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[rgb(var(--text-light-rgb))]
                    transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="product">商品について</option>
                  <option value="service">サービスについて</option>
                  <option value="business">ビジネスに関して</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="message"
                  className="block text-sm font-light text-[rgb(var(--text-secondary-rgb))]"
                >
                  お問い合わせ内容
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-[rgb(var(--accent-rgb))]
                    bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[rgb(var(--text-light-rgb))]
                    transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="button button-primary px-12 py-3"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-[rgb(var(--primary-rgb))]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-[rgb(var(--text-primary-rgb))]">
                営業時間
              </h3>
              <p className="text-[rgb(var(--text-secondary-rgb))] text-sm">
                平日 10:00 - 18:00
                <br />
                土日祝日 休業
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-[rgb(var(--text-primary-rgb))]">
                メールアドレス
              </h3>
              <p className="text-[rgb(var(--text-secondary-rgb))] text-sm">
                info@cleanlife.jp
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-[rgb(var(--text-primary-rgb))]">
                所在地
              </h3>
              <p className="text-[rgb(var(--text-secondary-rgb))] text-sm">
                〒150-0001
                <br />
                東京都渋谷区神宮前1-1-1
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 