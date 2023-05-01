import LogoCode from "./Logo";
import profile from "../assets/profile.jpeg"

export default function ProfileDetail() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-12 lg:px-8">
      <LogoCode />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://cdn-icons-png.flaticon.com/512/6528/6528597.png" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "If you find a same tree in the forest that mean you are lost"
            </p>
            <p>
              "And if you find a same code in your project that mean your code is redundant"
            </p>
          </blockquote>
          <figcaption className="mt-5">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={profile}
              alt="img"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Raihan Aqil Fadillah</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">HCK-56 Student</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
