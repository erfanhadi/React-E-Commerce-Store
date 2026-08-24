const UserProfile = ({
  name = "کاربر ناشناس",
  email = "example@sabzlearn.ir",
}) => {
  return (
    <div className="flex-ic gap-1.5">
      <img
        src="/assets/static/user.svg"
        className="size-10 rounded-full"
        alt={name}
      />
      <div className="space-y-0.5 ">
        <p className="text-xs text-slate-700">
          <strong>{name}</strong>
        </p>
        <p className="text-xs text-slate-400 select-none font-light">{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
