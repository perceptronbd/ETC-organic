export const IncDecButton = (props) => {
  const { name, value, onChange } = props;

  let incNum = () => {
    if (value < 10) {
      onChange(value + 1);
    }
  };
  let decNum = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center my-4">
      {props.label ? (
        <label className="font-medium mb-2 mr-2 text-textColor-light">
          {props.label}
        </label>
      ) : (
        ""
      )}
      <div className="flex items-center">
        <button
          className="bg-background flex items-center justify-center w-6 h-6 rounded-md border-textColor-light border hover:bg-accent-primary hover:bg-opacity-40 hover:text-white transition-all ease-in-out duration-300"
          type="button"
          onClick={decNum}
        >
          -
        </button>
        <input
          name={name}
          type="text"
          className="w-10 bg-background rounded-md m-2 p-1"
          value={value}
          onChange={onChange}
        />

        <button
          className="bg-background flex items-center justify-center w-6 h-6 rounded-md border-textColor-light border hover:bg-accent-primary hover:bg-opacity-40 hover:text-white transition-all ease-in-out duration-300"
          type="button"
          onClick={incNum}
        >
          +
        </button>
      </div>
    </div>
  );
};
