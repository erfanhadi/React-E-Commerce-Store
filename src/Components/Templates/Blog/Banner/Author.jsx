const Author = ({ src, name }) => {
  return (
    <div className="absolute -bottom-8 right-6 flex-ic gap-4 h-[84px]">
      <div className="size-[72px] rounded-full p-1 bg-[linear-gradient(45deg,#ffa95f_5%,#f99c4a_15%,#f47838_30%,#e75157_45%,#d92d7a_70%,#cc2a92_80%,#c32e92_95%)]">
        <img
          src={src}
          alt={name}
          className="size-full rounded-full object-cover"
        />
      </div>
      <div className="h-[80%] my-auto text-sm justify-between flex flex-col ">
        <p className="text-white px-2 py-1.5 rounded-md bg-white/10">
          1405/07/28
        </p>
        <p>
          <strong>{name}</strong>
        </p>
      </div>
    </div>
  );
};

export default Author;
