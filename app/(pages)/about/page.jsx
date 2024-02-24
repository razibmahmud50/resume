"use client";
export default function About() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
      <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
        <div className="">
          <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
            Hi, This Is <span className="text-primary">Cris Rayaan</span> 👋
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
            A Passionate
            <span className="font-semibold text-dark dark:text-white">
              Full Stack Developer
            </span>
            🖥️ &
            <span className="font-semibold text-dark dark:text-white">
              Product Designer
            </span>
            having
            <span className="font-semibold text-dark dark:text-white">
              12 years
            </span>
            of Experiences over 24+ Country Worldwide.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
            <span
              className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span>Available For Hire</span>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
        <div className="flex flex-wrap items-start gap-6 lg:gap-10">
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              <span>40</span>+
            </h2>
            <p className="mt-2 text-muted">Year of Experience</p>
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              <span>86</span>+
            </h2>
            <p className="mt-2 text-muted">Project Completed</p>
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              <span>72</span>+
            </h2>
            <p className="mt-2 text-muted">Happy Client</p>
          </div>
        </div>

        <div className="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
          <img src="circle-text.svg" alt="" className="absolute inset-0 h-full w-full animate-spin-slow dark:hidden" />
          <img src="circle-text-light.svg" alt="" className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block" />
          <div className="grid h-full w-full place-content-center rounded-full bg-primary text-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10">
              <path d="M20 5v30m-5-5 5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-14">
        <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
          Working With 50+ Brands ✨ Worldwide
        </h3>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="zeplin.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="figma.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="zeplin.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="figma.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src="framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            Trusted By 1200+ Clients
          </h3>

          <div className="flex items-center gap-2">
            <button className="review-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
              </svg>
            </button>
            <button className="review-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <div className="swiper review-carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1">
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                    </div>

                    <a href="#" className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                      <span>framer.com</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                      </svg>
                    </a>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    "We've been using BentoFolio for over a year now,
                    and I must say, it's been a game-changer for us. The
                    user interface is intuitive and the feature.
                  </blockquote>

                  <p className="mt-8 font-medium">
                    Oliver Clain -
                    <span className="font-normal text-muted">
                      Product Designer
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1">
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                    </div>

                    <a href="#" className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                      <span>framer.com</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                      </svg>
                    </a>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    "We've been using BentoFolio for over a year now,
                    and I must say, it's been a game-changer for us. The
                    user interface is intuitive and the feature.
                  </blockquote>

                  <p className="mt-8 font-medium">
                    Oliver Clain -
                    <span className="font-normal text-muted">
                      Product Designer
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1">
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                      <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                    </div>

                    <a href="#" className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                      <span>framer.com</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                      </svg>
                    </a>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    "We've been using BentoFolio for over a year now,
                    and I must say, it's been a game-changer for us. The
                    user interface is intuitive and the feature.
                  </blockquote>

                  <p className="mt-8 font-medium">
                    Oliver Clain -
                    <span className="font-normal text-muted">
                      Product Designer
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-14">
        <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
          Awards and Recognitions
        </h3>

        <div className="mt-8 space-y-4">
          <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
              <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                <img src="adobe.svg" alt="" className="h-6 w-6 shrink-0" />
              </div>
              <div className="">
                <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                  Adobe Design Contest
                </h5>
                <p className="text-muted">2022 - 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
              </svg>
              <h5 className="font-medium leading-tight text-dark dark:text-light">
                Runner Up
              </h5>
            </div>

            <div className="text-right">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                  <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
              <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                <img src="dribbble.svg" alt="" className="h-6 w-6 shrink-0" />
              </div>
              <div className="">
                <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                  Dribbble Design Contest
                </h5>
                <p className="text-muted">2022 - 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
              </svg>
              <h5 className="font-medium leading-tight text-dark dark:text-light">
                Gold Winner
              </h5>
            </div>

            <div className="text-right">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                  <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
              <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                <img src="awwwards.png" alt="" className="h-6 w-6 shrink-0" />
              </div>
              <div className="">
                <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                  Awwwards Nominee
                </h5>
                <p className="text-muted">2022 - 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
              </svg>
              <h5 className="font-medium leading-tight text-dark dark:text-light">
                Runner Up
              </h5>
            </div>

            <div className="text-right">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                  <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
              <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                <img src="behance.svg" alt="" className="h-6 w-6 shrink-0" />
              </div>
              <div className="">
                <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                  Behance Design Contest
                </h5>
                <p className="text-muted">2022 - 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
              </svg>
              <h5 className="font-medium leading-tight text-dark dark:text-light">
                Gold Winner
              </h5>
            </div>

            <div className="text-right">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                  <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            Article and Publications
          </h3>

          <div className="flex items-center gap-2">
            <button className="blog-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
              </svg>
            </button>
            <button className="blog-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="swiper blog-carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="">
                  <div className="relative">
                    <a href="article.html" className="group block aspect-6/4 overflow-hidden rounded-lg">
                      <img src="blog-img-1.jpg" alt="" className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
                    </a>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                        Development
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-xl font-medium xl:text-2xl">
                      <a href="article.html" className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                        Want To Upgrade Your Brain? Stop Doing These
                        7 Things
                      </a>
                    </h2>

                    <ul className="mt-4 flex flex-wrap items-center gap-2">
                      <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        15 min read
                      </li>
                      <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        Nov 6, 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="">
                  <div className="relative">
                    <a href="article.html" className="group block aspect-6/4 overflow-hidden rounded-lg">
                      <img src="blog-img-2.jpg" alt="" className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
                    </a>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                        Development
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-xl font-medium xl:text-2xl">
                      <a href="article.html" className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                        Want To Upgrade Your Brain? Stop Doing These
                        7 Things
                      </a>
                    </h2>

                    <ul className="mt-4 flex flex-wrap items-center gap-2">
                      <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        15 min read
                      </li>
                      <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        Nov 6, 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="">
                  <div className="relative">
                    <a href="article.html" className="group block aspect-6/4 overflow-hidden rounded-lg">
                      <img src="blog-img-3.jpg" alt="" className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
                    </a>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                        Development
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-xl font-medium xl:text-2xl">
                      <a href="article.html" className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                        Want To Upgrade Your Brain? Stop Doing These
                        7 Things
                      </a>
                    </h2>

                    <ul className="mt-4 flex flex-wrap items-center gap-2">
                      <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        15 min read
                      </li>
                      <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        Nov 6, 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-14">
        <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
          <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
              Let's 👋 Work Together
            </a>
            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
              Let's 👋 Work Together
            </a>
          </div>
          <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
              Let's 👋 Work Together
            </a>
            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
              Let's 👋 Work Together
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}