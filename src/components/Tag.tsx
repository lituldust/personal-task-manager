interface Props {
  tagName: string;
}

const Tag = ({ tagName }: Props) => {
  return (
    <button
      className="w-auto h-auto text-xs font-bold border border-bice-blue bg-white hover:!bg-bice-blue text-bice-blue rounded-md px-3 py-1 hover:text-white hover:border-hidden"
      type="button"
    >
      {tagName}
    </button>
  );
};

export default Tag;
