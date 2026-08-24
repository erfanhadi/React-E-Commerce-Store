const SectionTitle = ({ text, description }) => {
  return (
    <div className="space-y-4">
      <div className="flex-ic gap-2">
        <div className="w-2 rounded-full h-6 bg-orange-500"></div>
        <h2 className="text-2xl font-extrabold">{text}</h2>
      </div>

      {String(description).length ? (
        <p className="text-sm max-w-2xl text-slate-400">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
