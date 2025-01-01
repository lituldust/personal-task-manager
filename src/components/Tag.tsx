interface Props {
  tagName: string;
  isSelected: boolean;
  selectTag: (tag: string) => void;
}

const Tag = ({ tagName, isSelected, selectTag }: Props) => {
  return (
    <button
      className={`w-auto h-auto text-xs font-bold border rounded-md px-3 py-1 ${
        isSelected
          ? "bg-bice-blue text-white border-bice-blue"
          : "bg-white text-bice-blue border-bice-blue hover:bg-bice-blue"
      }`}
      type="button"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
