/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-[minmax(0,1fr)_clamp(76px,18vw,230px)] items-end gap-[clamp(12px,3vw,30px)] px-[clamp(14px,2.4vw,30px)] pt-5">
        <h1 className="whitespace-nowrap font-display text-[clamp(46px,14vw,190px)] font-black uppercase leading-[.8]">
          Tamzeed <span className="text-accent">Q.</span>
        </h1>
        <div className="aspect-[4/5] rotate-[3deg] overflow-hidden rounded-[10px] bg-photo-bg">
          <img
            src="/images/tamzeed/profile_pic.jpg"
            alt="Tamzeed Quazi"
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-x-[30px] gap-y-[6px] px-page-x pt-[22px] text-[15px] text-muted">
        <span>Software developer · CS + Statistics @ UBC</span>
        <span>Vancouver, Canada</span>
      </div>
    </>
  )
}
