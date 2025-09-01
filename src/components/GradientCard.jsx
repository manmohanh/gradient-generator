import { toast } from "react-toastify";

const GradientCard = ({ item }) => {
  const onCopy = (css) => {
    navigator.clipboard.writeText(css);
    toast.success("Gradient code copied!", { position: "top-center" });
  };

  return (
    <div
      className="h-[180px] rounded-xl relative"
      style={{ background: item.gradient }}
    >
      <button
        onClick={() => onCopy(item.css)}
        className="bg-black/50 hover:bg-black hover:cursor-pointer text-white rounded absolute bottom-3 right-3 text-[10px] py-1 px-2"
      >
        COPY
      </button>
    </div>
  );
};

export default GradientCard;
