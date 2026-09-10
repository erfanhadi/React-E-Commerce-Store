import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";

function NotFound() {
    const navigate = useNavigate();
    
    return (
        <main className="flex min-h-dvh items-center justify-center bg-slate-50 px-6">
            <div className="max-w-xl text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
                    <HiMagnifyingGlass className="h-14 w-14 text-amber-600" />
                </div>

                <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-slate-900">
                    ۴۰۴
                </h1>

                <h2 className="mt-3 text-3xl font-bold text-slate-800">
                    صفحه پیدا نشد
                </h2>

                <p className="mt-4 leading-8 text-slate-500">
                    صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد، آدرس
                    آن تغییر کرده باشد یا لینک را اشتباه وارد کرده باشید.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        to="/"
                        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
                    >
                        بازگشت به صفحه اصلی
                    </Link>

                    <button
                        onClick={() => navigate("/")}
                        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100"
                    >
                        بازگشت
                    </button>
                </div>
            </div>
        </main>
    )
}

export default NotFound