const Title = ({ firstText, secondText }) => {
  return (
    <div className="inline-flex gap-2 items-center">
      <p className="text-gray-500">
        {firstText}{" "}
        <span className="font-medium text-gray-700">{secondText}</span>
      </p>
      <p className="w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700"></p>
    </div>
  );
};

export default Title;
