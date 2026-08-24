import { LOREM_TEXT } from "../../../../lib/constants";
import Message from "./Fragments/Message";
import UserProfile from "./Fragments/UserProfile";

const Comment = () => {
  return (
    <article className="p-4 space-y-3 rounded-lg border border-slate-200 py-6">
      <div className="flex-between">
        <UserProfile />
        <div className="text-xs text-slate-400">1405/07/24</div>
      </div>
      <Message message={LOREM_TEXT} />
    </article>
  );
};

export default Comment;
