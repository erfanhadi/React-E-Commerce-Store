export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">فروشگاه شاپینو</h3>
            <p className="text-pretty text-sm leading-relaxed text-slate-400">
              ما بهترین محصولات را با کیفیت عالی و قیمت مناسب به شما ارائه
              می‌دهیم. خرید آنلاین آسان و ارسال سریع در سراسر کشور.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="اینستاگرام"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="تلگرام"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="واتساپ"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">خدمات مشتریان</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  پیگیری سفارش
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  رویه‌های بازگرداندن کالا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  شیوه‌های پرداخت
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  راهنمای خرید
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  سوالات متداول
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about-us"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  تماس با ما
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  فرصت‌های شغلی
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  قوانین و مقررات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  حریم خصوصی
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">اطلاعات تماس</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-slate-400 leading-relaxed">
                  +989911871566
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-slate-400 leading-relaxed">
                  info@sabzlearn.ir
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-slate-400 leading-relaxed text-pretty">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 border-t border-slate-800" />

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800 p-2">
              <img
                src="/placeholder.svg?key=w4p8g"
                alt="نماد اعتماد الکترونیک"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800 p-2">
              <img
                src="/placeholder.svg?key=t6y8c"
                alt="نماد ساماندهی"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800 p-2">
              <img
                src="/placeholder.svg?key=tqz9f"
                alt="نماد رضایت"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="text-center text-sm text-slate-400 lg:text-right">
            <p className="leading-relaxed">
              تمامی حقوق این وب‌سایت متعلق به{" "}
              <span className="font-bold text-white">فروشگاه شاپینو</span>{" "}
              می‌باشد © 1405
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs leading-relaxed text-slate-500">
            خرید آنلاین با اطمینان کامل | ارسال رایگان برای سفارش‌های بالای ۵۰۰
            هزار تومان | پشتیبانی ۲۴ ساعته
          </p>
        </div>
      </div>
    </footer>
  );
}
