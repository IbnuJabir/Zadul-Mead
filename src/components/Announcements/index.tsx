'use client';

function Announcements() {
  return (
    <div className="w-full bg-announcement-bkg bg-no-repeat bg-cover bg-left md:bg-center flex items-center justify-center  flex-col py-4">
      <h1 className="text-2xl font-bold mb-10">ANNOUNCEMENTS</h1>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <img src='/assets/kitab.png' alt="kitab" className="w-4/5 " />
        <div className="flex flex-col gap-6 items-start">
          <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
            <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
              1
            </p>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-semibold normal-case">Riyad As-Sualihin</h3>
              <p className="text-left text-xs">
                With lots of unique blocks, you can easily build a page without
                coding.{" "}
              </p>
            </div>
          </div>
          <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
            <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
              2
            </p>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-semibold normal-case">Sat, Sun, Mon</h3>
              <p className="text-left text-xs">
                Weekly schedule{" "}
              </p>
            </div>
          </div>
          <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
            <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
              3
            </p>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-semibold normal-case">fri, Aug 2024</h3>
              <p className="text-left text-xs">
                Starts date{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
