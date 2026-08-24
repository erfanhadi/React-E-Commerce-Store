import { Link } from "react-router";

const ProductCard = () => {
  return (
    <article className="w-full h-64 relative space-y-3 flex pl-2 justify-between flex-col">
      <Link
        className="absolute size-full"
        to={`/product/${crypto.randomUUID()}`}
      />

      <header className="h-[138px] flex-center w-full">
        <img
          src="/assets/static/product1.png"
          className="h-full object-cover"
        />
      </header>
      <main className="h-full">
        <p className="font-bold  line-clamp-2 text-slate-700 text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و
        </p>
      </main>
      <footer className="mt-auto! flex items-end justify-end">
        <div className="flex-ic gap-1">
          <p className="font-black">
            {Number(27_000_000).toLocaleString("fa-IR")}
          </p>
          <div className="text-slate-600 text-xs">تومان</div>
        </div>
      </footer>
    </article>
  );
};

export default ProductCard;
