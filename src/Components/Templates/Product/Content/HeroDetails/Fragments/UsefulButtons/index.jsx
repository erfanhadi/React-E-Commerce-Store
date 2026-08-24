import CopyUrl from "./CopyUrl";
import FocusOnComments from "./FocusOnComments";

const UsefulButtons = () => {
  return (
    <div className="flex-ic gap-3">
      <CopyUrl />
      <FocusOnComments />
    </div>
  );
};

export default UsefulButtons;
