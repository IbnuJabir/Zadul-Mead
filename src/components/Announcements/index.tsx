'use client';

function Announcements() {
  return (
    <div className="w-full h-full bg-announcement-bkg flex items-center justify-center  flex-col">
      <h1 className="text-2xl font-bold mb-10">ANNOUNCEMENTS</h1>
      <div className="flex items-center justify-center flex-col">
        <img src='/assets/kitab.png' alt="kitab" className="w-4/5 " />
        <div className="flex flex-col gap-6">
          <div className="w-full font-montserrat px-4 flex items-top justify-center gap-4">
            <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
              1
            </p>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-bold normal-case">Kitab Name</h3>
              <p className="text-left text-base">
                With lots of unique blocks, you can easily build a page without
                coding.{" "}
              </p>
            </div>
          </div>
          <div className="w-full font-montserrat px-4 flex items-top justify-center gap-4">
            <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
              2
            </p>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-bold normal-case">Scheduled Time</h3>
              <p className="text-left text-base">
                With lots of unique blocks, you can easily build a page without
                coding.{" "}
              </p>
            </div>
          </div>
          <div className="w-full font-montserrat px-4 flex items-top justify-center gap-4">
            <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
              3
            </p>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-bold normal-case">Starting Day</h3>
              <p className="text-left text-base">
                With lots of unique blocks, you can easily build a page without
                coding.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
