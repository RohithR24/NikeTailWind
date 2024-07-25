const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-lg rounded-xl p-10">
      <div className="flex justify-center items-center  rounded-full bg-coral-red h-11 w-11">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h4 className="text-xl font-bold py-5">{label}</h4>
      <p className=" break-words info-text">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
