import Comment from "../../../Common/Cards/Comment";
import CreateComment from "./Fragments/CreateComment";

const Comments = () => {
  return (
    <section className="mt-20! space-y-10">
      <h3 className="text-2xl text-slate-800">
        <strong>نظرات</strong>
      </h3>
      <div className="w-full space-y-10">
        <CreateComment />

        <div className="space-y-5">
          {Array.from({ length: 5 }).map((blog) => (
            <Comment />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
