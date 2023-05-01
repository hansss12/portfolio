import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import profile from "../assets/profile.jpeg";


export default function About () {
  return (
      <>
          <Navbar />
          <Hero type={"about"} />
          <div className="bg-white p-10">
              <figcaption className="mt-5 mb-10">
                  <img
                      className="mx-auto h-40 w-40 rounded-full"
                      src={profile}
                      alt="img"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">
                          Raihan Aqil Fadillah
                      </div>
                      <svg
                          viewBox="0 0 2 2"
                          width={3}
                          height={3}
                          aria-hidden="true"
                          className="fill-gray-900"
                      >
                          <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="text-gray-600">HCK-56 Student</div>
                  </div>
              </figcaption>
              <div>
                  <div className="px-4 sm:px-0">
                      <h3 className="text-base font-semibold leading-7 text-gray-900 text-center">
                          Personal Information
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-500 text-center">
                          Personal details and study.
                      </p>
                  </div>
                  <div className="m-10 flex justify-center">
                      <ul className="steps steps-horizontal lg:steps-horizontal">
                          <li className="step step-info">SMAN 1 Soreang</li>
                          <li className="step step-info">Hacktiv8 Bootcamp</li>
                          <li className="step">College</li>
                          <li className="step">Senior Developer</li>
                      </ul>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                      <dl className="divide-y divide-gray-100">
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  Full name
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  Raihan Aqil Fadillah
                              </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  Date of birth
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  12 may 2003
                              </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  Location
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  Pondok Indah South Jakarta
                              </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  Applicant for
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  Fullstack Developer
                              </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  Email address
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  raihan.aqil2003@gmail.com
                              </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  Salary expectation
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  $1,000
                              </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  About
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  Hello there my name is raihan aqil fadillah
                                  i'm from bandung city in indonesia my last
                                  study is in hacktiv8 indonesia in pondok indah
                                  south jakarta i have learn fullstack
                                  javascript with framework and library like
                                  react vue and express js i also learn REST API
                              </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                  Project
                              </dt>
                              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <ul
                                      role="list"
                                      className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                  >
                                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                          <div className="flex w-0 flex-1 items-center">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={1.5}
                                                  stroke="currentColor"
                                                  className="w-6 h-6"
                                              >
                                                  <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                                  />
                                              </svg>
                                              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                  <span className="truncate font-medium">
                                                      CFC clone admin
                                                  </span>
                                                  <span className="flex-shrink-0 text-gray-400">
                                                      12-04-2003
                                                  </span>
                                              </div>
                                          </div>
                                          <div className="ml-4 flex-shrink-0">
                                              <a
                                                  href="https://cfc-clone-admin.web.app"
                                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                              >
                                                  Go
                                              </a>
                                          </div>
                                      </li>
                                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                          <div className="flex w-0 flex-1 items-center">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={1.5}
                                                  stroke="currentColor"
                                                  className="w-6 h-6"
                                              >
                                                  <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                                  />
                                              </svg>

                                              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                  <span className="truncate font-medium">
                                                      CFC customer client
                                                  </span>
                                                  <span className="flex-shrink-0 text-gray-400">
                                                      13-04-2023
                                                  </span>
                                              </div>
                                          </div>
                                          <div className="ml-4 flex-shrink-0">
                                              <a
                                                  href="https://cfc-clone-customer.web.app"
                                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                              >
                                                  Go
                                              </a>
                                          </div>
                                      </li>
                                  </ul>
                              </dd>
                          </div>
                      </dl>
                  </div>
              </div>
          </div>
          <Footer />
      </>
  )
}