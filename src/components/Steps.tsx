import Members from "./Modals/Members";

export const CommunityDetailsStepOne = () => {
  return (
    <>
      {" "}
      <Members heading="Members" total={12} seeMore={false} />
      <Members heading="Medical Practitionals" total={3} seeMore={false} />
    </>
  );
};

export const CommunityDetailsStepTwo = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="w-[720px] text-[#191b1c] text-base font-semibold font-['Public Sans'] leading-[23px]">
          Description
        </h2>
        <p className="w-[720px] text-[#626c70] text-sm font-normal font-['Public Sans'] leading-tight">
          In lobortis fermentum venenatis. Phasellus orci libero, feugiat et
          velit non, sagittis feugiat eros. In placerat risus vitae est
          faucibus, in laoreet enim rutrum. Mauris posuere vitae felis at
          convallis. Integer consequat et tellus vel tincidunt. Aenean rhoncus
          ligula eu risus molestie semper.
        </p>
      </div>
      <Members heading="Members" total={5} seeMore={true} />
    </>
  );
};
