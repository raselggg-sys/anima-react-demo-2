export const AccountSidebar = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent hidden">
        <div className="fixed items-center bg-black/60 box-border caret-transparent flex justify-center z-[2147483647] inset-0">
          <div
            role="dialog"
            className="fixed bg-white box-border caret-transparent flex flex-col h-full max-h-[1000px] max-w-[450px] w-full overflow-auto m-0 left-0 top-10 md:h-[calc(100%_-_15px)] md:m-3 md:top-0"
          >
            <header className="items-center bg-stone-200 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px,rgba(0,0,0,0.06)_0px_2px_8px_0px] box-border caret-transparent flex h-[70px] justify-start text-left mb-2.5 p-5">
              <a
                href="https://beyondalpha.co/pages/estrocontrol-detox#rivo"
                aria-label="Go to home"
                className="box-border caret-transparent flex h-full underline w-4/5 md:h-auto md:w-[90%]"
              >
                <img
                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-25.svg"
                  alt="Icon"
                  className="box-border caret-transparent shrink-0 mb-[-30px]"
                />
              </a>
              <div className="items-center box-border caret-transparent gap-x-2.5 hidden gap-y-2.5 w-[90%] px-2.5">
                <div
                  role="progressbar"
                  aria-label="Survey progress"
                  className="bg-gray-200 box-border caret-transparent basis-[0%] grow h-2.5 overflow-hidden rounded-[3px]"
                >
                  <div className="bg-slate-600 box-border caret-transparent flex h-full w-full"></div>
                </div>
                <button
                  aria-label="Skip current survey question"
                  className="text-[13px] bg-transparent caret-transparent leading-[14.95px] text-center p-[5px]"
                >
                  Skip
                </button>
              </div>
              <button
                aria-label="Close modal"
                className="absolute text-zinc-800 text-[15px] font-extrabold bg-zinc-300 caret-transparent block h-[25px] leading-[22.5px] text-center w-[25px] z-[2147483647] p-0 rounded-[25px] right-2.5 top-2.5 before:accent-auto before:items-center before:box-border before:caret-transparent before:text-zinc-800 before:flex before:text-[15px] before:not-italic before:normal-nums before:font-extrabold before:h-[25px] before:justify-center before:tracking-[normal] before:leading-[22.5px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-dm_sans"
              ></button>
            </header>
            <main className="relative box-border caret-transparent flex basis-[0%] flex-col grow h-full text-left overflow-scroll pt-5 pb-[150px] px-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="relative box-border caret-transparent">
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent">
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] mb-[15px] font-oswald md:leading-[45.4737px]">
                        Sign in to your account
                      </h2>
                      <p className="box-border caret-transparent mb-[15px]">
                        Get access to your orders, referrals, and more
                      </p>
                      <div className="box-border caret-transparent">
                        <form className="box-border caret-transparent flex flex-col text-center">
                          <div className="absolute items-center bg-white/70 box-border caret-transparent hidden justify-center z-[100] inset-0">
                            <div className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent flex h-10 w-10 rounded-[50%] border-4 border-solid"></div>
                          </div>
                          <input
                            type="email"
                            name="otc_login[email]"
                            placeholder="Email"
                            className="text-neutral-600 bg-stone-200 box-border caret-transparent block leading-[18.4px] text-start border border-slate-600 p-[15px] border-solid"
                          />
                          <div className="text-red-600 box-border caret-transparent hidden text-left pt-[5px]"></div>
                          <label className="items-center box-border caret-transparent gap-x-[3px] flex gap-y-[3px] ml-[3px] mt-2.5">
                            <input
                              type="checkbox"
                              name="accepts_marketing"
                              className="text-neutral-600 accent-black bg-transparent box-border caret-transparent block h-2.5 leading-[18.4px] text-start w-2.5 mr-2 p-0"
                            />
                            <span className="box-border caret-transparent block">
                              Email me with updates and offers
                            </span>
                          </label>
                          <div className="box-border caret-transparent"></div>
                          <input
                            type="submit"
                            value="Sign In"
                            className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent flex justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 uppercase text-nowrap mt-5 px-0 py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                          />
                          <div className="text-red-600 box-border caret-transparent hidden pt-[5px]"></div>
                        </form>
                        <div className="box-border caret-transparent hidden flex-col justify-center text-center">
                          <span className="text-xs box-border caret-transparent leading-[18px] my-2.5">
                            OR
                          </span>
                          <div className="box-border caret-transparent gap-x-[15px] flex flex-col justify-center gap-y-[15px]">
                            <div className="box-border caret-transparent"></div>
                            <div className="box-border caret-transparent"></div>
                            <div className="box-border caret-transparent"></div>
                            <div className="box-border caret-transparent hidden flex-col justify-center">
                              <button className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] caret-transparent gap-x-2.5 flex justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 gap-y-2.5 uppercase overflow-hidden px-0 py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4">
                                <span className="box-border caret-transparent flex">
                                  <img
                                    src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-26.svg"
                                    alt="Icon"
                                    className="box-border caret-transparent shrink-0 h-5 w-5"
                                  />
                                </span>
                                <span className="box-border caret-transparent block">
                                  Sign in with Google
                                </span>
                                <span className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent hidden h-5 w-5 mx-auto rounded-[50%] border-2 border-solid"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent flex">
                          <label className="text-xs box-border caret-transparent block leading-[18px] py-[15px]">
                            By signing in, you agree to our{" "}
                            <a
                              href="https://beyondalpha.co/policies/privacy-policy"
                              className="box-border caret-transparent underline"
                            >
                              privacy policy
                            </a>
                            and{" "}
                            <a
                              href="https://beyondalpha.co/policies/terms-of-service"
                              className="box-border caret-transparent underline"
                            >
                              terms of service
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent"></div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="box-border caret-transparent">
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Having issues signing in?
                      </h2>
                      <div className="box-border caret-transparent">
                        Use one of the following methods below to sign in.
                      </div>
                      <ul className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 border-slate-600 mt-2.5 mb-4 pl-[15px] pt-5 border-t">
                        <li className="box-border caret-transparent">
                          <a
                            href="https://beyondalpha.co/pages/estrocontrol-detox#rivo"
                            className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5"
                          >
                            <span className="box-border caret-transparent block">
                              Try sending another code
                            </span>
                            <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                              <img
                                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                                alt="Icon"
                                className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                              />
                            </span>
                          </a>
                        </li>
                        <li className="box-border caret-transparent">
                          <a
                            href="https://beyondalpha.co/pages/account/login?skip_rivo_redirect=true"
                            className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5"
                          >
                            <span className="box-border caret-transparent block">
                              Sign in with an email and password
                            </span>
                            <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                              <img
                                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                                alt="Icon"
                                className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                              />
                            </span>
                          </a>
                        </li>
                        <li className="box-border caret-transparent hidden">
                          <a
                            href="https://beyondalpha.co/pages/estrocontrol-detox#rivo"
                            className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5"
                          >
                            <span className="box-border caret-transparent block">
                              Sign in with Google
                            </span>
                            <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                              <img
                                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                                alt="Icon"
                                className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                              />
                            </span>
                          </a>
                        </li>
                        <li className="box-border caret-transparent hidden">
                          <a
                            href="https://beyondalpha.co/pages/estrocontrol-detox"
                            className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5"
                          >
                            <span className="box-border caret-transparent block">
                              Sign in to an existing account with Shop Pay
                            </span>
                            <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                              <img
                                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                                alt="Icon"
                                className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                              />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="box-border caret-transparent">
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Gift Card Balance
                      </h2>
                      <div className="box-border caret-transparent">
                        Enter the code below to redeem your gift card
                      </div>
                    </div>
                    <div className="box-border caret-transparent mt-[15px]">
                      <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5">
                        <div className="box-border caret-transparent gap-x-[25px] flex justify-between gap-y-[25px]">
                          <input
                            type="text"
                            placeholder="Enter Gift Card Code"
                            className="text-neutral-600 bg-stone-200 box-border caret-transparent block grow leading-[18.4px] text-start border border-slate-600 p-[15px] border-solid"
                          />
                        </div>
                        <div className="box-border caret-transparent gap-x-[25px] flex justify-between gap-y-[25px]">
                          <button className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] caret-transparent flex justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase overflow-hidden px-0 py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4">
                            <span className="box-border caret-transparent block">
                              Lookup Gift Card
                            </span>
                            <span className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent hidden h-5 w-5 mx-auto rounded-[50%] border-2 border-solid"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="box-border caret-transparent">
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Buy Gift Card
                      </h2>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="box-border caret-transparent"></div>
                  <div className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent flex h-5 w-5 mx-auto rounded-[50%] border-2 border-solid"></div>
                  <div className="box-border caret-transparent"></div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent gap-x-5 hidden flex-col gap-y-5 pt-2.5">
                    <div className="box-border caret-transparent">
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Welcome{" "}
                        <span className="box-border caret-transparent leading-[45px] md:leading-[45.4737px]"></span>
                      </h2>
                      <div className="box-border caret-transparent"></div>
                    </div>
                    <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5">
                      <div className="box-border caret-transparent gap-x-2.5 hidden flex-col gap-y-2.5">
                        <a
                          href="https://beyondalpha.co/pages/loyalty-program"
                          className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent hidden justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase w-full overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                        >
                          View Rewards
                        </a>
                        <a
                          href="https://beyondalpha.co/pages/estrocontrol-detox"
                          className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent hidden justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase w-full overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                        >
                          Manage Subscriptions
                        </a>
                        <a
                          href="https://beyondalpha.co/pages/estrocontrol-detox"
                          className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent hidden justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase w-full overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                        ></a>
                      </div>
                      <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5">
                        <a
                          href="https://beyondalpha.co/pages/estrocontrol-detox"
                          className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent hidden justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase w-full overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                        >
                          <div className="items-center box-border caret-transparent flex justify-between w-full p-4">
                            <div className="items-center box-border caret-transparent hidden">
                              <span className="text-[22px] box-border caret-transparent inline-block h-2.5 leading-[34.5714px] mt-[-5px] align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-[22px] after:not-italic after:normal-nums after:font-medium after:h-[11px] after:tracking-[normal] after:leading-[34.5714px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:uppercase after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-oswald"></span>
                              <span className="text-base box-border caret-transparent leading-[25.1429px]">
                                Points
                              </span>
                            </div>
                            <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px] normal-case">
                              <span className="box-border caret-transparent block">
                                My Rewards
                              </span>
                              <span className="items-center box-border caret-transparent flex">
                                <img
                                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-28.svg"
                                  alt="Icon"
                                  className="box-border caret-transparent flex shrink-0 h-1.5 mt-0.5"
                                />
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://beyondalpha.co/pages/estrocontrol-detox"
                          className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent hidden justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase w-full overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                        >
                          <div className="box-border caret-transparent inline-block h-2.5 mt-[-5px] align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-[15.4px] after:not-italic after:normal-nums after:font-medium after:h-[11px] after:tracking-[normal] after:leading-[24.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:uppercase after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-oswald"></div>
                          <div className="items-center box-border caret-transparent hidden justify-between w-full p-4">
                            <div className="items-center box-border caret-transparent hidden">
                              <span className="text-[22px] box-border caret-transparent inline-block h-2.5 leading-[34.5714px] mt-[-5px] align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-[22px] after:not-italic after:normal-nums after:font-medium after:h-[11px] after:tracking-[normal] after:leading-[34.5714px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:uppercase after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-oswald"></span>
                              <span className="text-base box-border caret-transparent leading-[25.1429px]">
                                Credit
                              </span>
                            </div>
                            <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px] normal-case">
                              <span className="box-border caret-transparent block">
                                Join our Membership
                              </span>
                              <span className="items-center box-border caret-transparent flex">
                                <img
                                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-28.svg"
                                  alt="Icon"
                                  className="box-border caret-transparent flex shrink-0 h-1.5 mt-0.5"
                                />
                              </span>
                            </div>
                          </div>
                        </a>
                        <button className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] caret-transparent hidden flex-col justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase overflow-hidden px-0 py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4">
                          <div className="items-center box-border caret-transparent flex justify-between w-full p-4">
                            <div className="items-center box-border caret-transparent hidden">
                              <span className="text-[22px] box-border caret-transparent inline-block h-2.5 leading-[34.5714px] mt-[-5px] align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-[22px] after:not-italic after:normal-nums after:font-medium after:h-[11px] after:tracking-[normal] after:leading-[34.5714px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:uppercase after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-oswald"></span>
                            </div>
                            <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px] normal-case">
                              <span className="box-border caret-transparent block">
                                My Credit
                              </span>
                              <span className="items-center box-border caret-transparent flex">
                                <img
                                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-28.svg"
                                  alt="Icon"
                                  className="box-border caret-transparent flex shrink-0 h-1.5 mt-0.5"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="items-center border-t-zinc-800 box-border caret-transparent hidden w-full border-b-white border-x-white border-t">
                            <div className="relative items-center box-border caret-transparent flex justify-center w-6/12 p-4">
                              <span className="box-border caret-transparent block">
                                ID:{" "}
                              </span>
                              <span className="box-border caret-transparent block"></span>
                            </div>
                            <div className="relative items-center border-l-zinc-800 box-border caret-transparent gap-x-2.5 flex justify-center gap-y-2.5 w-6/12 p-4 border-r-white border-y-white border-l">
                              <span className="box-border caret-transparent flex">
                                <img
                                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-29.svg"
                                  alt="Icon"
                                  className="box-border caret-transparent shrink-0 h-5 w-6"
                                />
                              </span>
                              <span className="box-border caret-transparent block">
                                Copy ID
                              </span>
                            </div>
                          </div>
                        </button>
                        <a
                          href="https://beyondalpha.co/collections/all-products"
                          className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent flex justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase w-full overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                        >
                          Shop Now
                        </a>
                        <a
                          href="https://beyondalpha.co/tools/recurring/login"
                          className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent flex justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase w-full overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                        >
                          Manage Subscription
                        </a>
                      </div>
                    </div>
                    <div className="box-border caret-transparent hidden"></div>
                  </div>
                  <div className="box-border caret-transparent"></div>
                  <div className="box-border caret-transparent"></div>
                  <div className="box-border caret-transparent"></div>
                  <div className="relative box-border caret-transparent border-slate-600 mt-2.5 pt-[25px] border-t">
                    <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                      Recently Viewed
                    </h2>
                    <div className="relative box-border caret-transparent">
                      <div className="relative box-border caret-transparent flex w-full overflow-auto">
                        <div className="box-border caret-transparent"></div>
                        <div className="relative box-border caret-transparent gap-x-5 flex gap-y-5 mt-2.5">
                          <div className="box-border caret-transparent"></div>
                        </div>
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start gap-y-5 w-full mt-2.5">
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        </div>
                        <div className="box-border caret-transparent"></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent hidden pt-[15px]">
                    <a
                      href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-saved"
                      className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5"
                    >
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Saved from Cart
                      </h2>
                      <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                        />
                      </span>
                    </a>
                    <div className="relative box-border caret-transparent">
                      <div className="relative box-border caret-transparent flex w-full overflow-auto">
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start gap-y-5 w-full mt-2.5">
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        </div>
                        <div className="box-border caret-transparent"></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent pt-[15px]">
                    <a
                      href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-favorites"
                      className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5"
                    >
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Favorites
                      </h2>
                      <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                        />
                      </span>
                    </a>
                    <div className="relative box-border caret-transparent">
                      <div className="relative box-border caret-transparent flex w-full overflow-auto">
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent"></div>
                        <div className="bg-stone-200 box-border caret-transparent text-center w-full border border-slate-600 mt-2.5 p-[30px] rounded-[5px] border-solid">
                          Sign in to access your favorites
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent pt-[15px]">
                    <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                      Popular Today
                    </h2>
                    <div className="relative box-border caret-transparent">
                      <div className="relative box-border caret-transparent flex w-full overflow-auto">
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start gap-y-5 w-full mt-2.5">
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent"></div>
                  <div className="relative box-border caret-transparent flex flex-col pt-2.5">
                    <div className="box-border caret-transparent flex flex-col order-1 w-full mt-[15px]">
                      <div className="box-border caret-transparent"></div>
                      <a
                        href="https://beyondalpha.co/pages/about-us"
                        className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2 w-full py-[5px]"
                      >
                        <span className="font-semibold box-border caret-transparent block">
                          About Us
                        </span>
                        <span className="box-border caret-transparent block">
                          <img
                            src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-31.svg"
                            alt="Icon"
                            className="box-border caret-transparent shrink-0 h-[11px]"
                          />
                        </span>
                      </a>
                      <a
                        href="https://beyondalpha.co/pages/ingredients"
                        className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2 w-full py-[5px]"
                      >
                        <span className="font-semibold box-border caret-transparent block">
                          Ingredient Benefits
                        </span>
                        <span className="box-border caret-transparent block">
                          <img
                            src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-31.svg"
                            alt="Icon"
                            className="box-border caret-transparent shrink-0 h-[11px]"
                          />
                        </span>
                      </a>
                      <a
                        href="https://beyondalpha.co/pages/support"
                        className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2 w-full py-[5px]"
                      >
                        <span className="font-semibold box-border caret-transparent block">
                          Support / Contact Us
                        </span>
                        <span className="box-border caret-transparent block">
                          <img
                            src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-31.svg"
                            alt="Icon"
                            className="box-border caret-transparent shrink-0 h-[11px]"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="box-border caret-transparent order-2 mt-[15px]">
                      <div className="box-border caret-transparent hidden"></div>
                      <div className="box-border caret-transparent">
                        <a
                          href="https://beyondalpha.co/collections/all-products"
                          className="box-border caret-transparent flex flex-col"
                        >
                          <div className="relative box-border caret-transparent h-[250px] w-full z-[1] overflow-hidden mb-[5px] rounded-[10px]">
                            <img
                              src="https://cdn.shopify.com/s/files/1/0888/9293/2371/files/95227d5d30f245e33532bc6f4925cdd301484a3e.jpg?v=1761033903"
                              alt="Never Settle"
                              className="box-border caret-transparent h-full object-cover w-full rounded-[10px]"
                            />
                          </div>
                          <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] my-[5px] font-oswald md:leading-[45.4737px]">
                            Never Settle
                          </h2>
                          <div className="box-border caret-transparent">
                            Try Beyond Alpha to finally stop feeling weak,
                            sluggish, overweight, and like a shadow of the
                            former self… And regain the youthful confidence,
                            strength, and drive once again!
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="box-border caret-transparent">
                    <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                      Your Orders
                    </h2>
                  </div>
                  <div className="box-border caret-transparent"></div>
                  <div className="box-border caret-transparent hidden">
                    <div className="box-border caret-transparent"></div>
                  </div>
                  <div className="box-border caret-transparent"></div>
                  <div className="relative box-border caret-transparent h-5 w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                  <div className="box-border caret-transparent hidden justify-center my-5">
                    <button className="text-white text-sm bg-black caret-transparent leading-[16.1px] opacity-70 text-center px-5 py-2.5 rounded-bl rounded-br rounded-tl rounded-tr">
                      <span className="box-border caret-transparent">
                        Load More
                      </span>
                      <div className="box-border caret-transparent"></div>
                    </button>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent text-center pt-2.5">
                    <div className="box-border caret-transparent">
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        undefined
                      </h2>
                    </div>
                    <div className="box-border caret-transparent mt-[25px]">
                      <div className="box-border caret-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="box-border caret-transparent">
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]"></h2>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="absolute items-center bg-white/70 box-border caret-transparent hidden justify-center z-[100] inset-0">
                      .
                    </div>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent">
                      <div className="relative box-border caret-transparent h-[50px] w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      <div className="relative box-border caret-transparent h-[50px] w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <a
                      href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-preferences"
                      className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5"
                    >
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        My Preferences
                      </h2>
                      <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                        />
                      </span>
                    </a>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent border border-slate-600 mt-[15px] mb-[30px] rounded-[10px] border-solid">
                      <a
                        href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-preferences"
                        className="box-border caret-transparent flex flex-col px-4 py-3"
                      >
                        <span className="text-[13px] box-border caret-transparent block leading-[19.5px]">
                          Email
                        </span>
                        <span className="box-border caret-transparent block"></span>
                      </a>
                      <a
                        href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-preferences"
                        className="box-border caret-transparent flex flex-col border-slate-600 px-4 py-3 border-t"
                      >
                        <span className="text-[13px] box-border caret-transparent block leading-[19.5px]">
                          Name
                        </span>
                        <span className="box-border caret-transparent block"></span>
                      </a>
                    </div>
                    <a
                      href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-shipping-addresses"
                      className="items-center box-border caret-transparent gap-x-2.5 hidden gap-y-2.5"
                    >
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        My Addresses
                      </h2>
                      <span className="items-center bg-zinc-100 box-border caret-transparent flex h-[18px] justify-center w-[18px] rounded-[50%]">
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-27.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-3/4 w-[30px]"
                        />
                      </span>
                    </a>
                    <div className="relative box-border caret-transparent">
                      <div className="relative box-border caret-transparent gap-x-5 flex gap-y-5 w-full overflow-auto mt-[15px]">
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent"></div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent hidden mt-[25px]">
                      <a
                        href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-logout"
                        className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent inline-flex justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase overflow-hidden px-5 py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                      >
                        <span className="box-border caret-transparent block">
                          Log out
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        My Preferences
                      </h2>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Saved from Cart
                      </h2>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent"></div>
                      <div className="box-border caret-transparent"></div>
                      <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start gap-y-5 w-full mt-2.5">
                        <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      </div>
                      <div className="box-border caret-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Favorites
                      </h2>
                    </div>
                    <div className="box-border caret-transparent">
                      <h3 className="text-[26px] font-semibold box-border caret-transparent leading-[35.2857px] font-poppins md:leading-[33.6471px]">
                        Collections
                      </h3>
                      <div className="relative box-border caret-transparent">
                        <div className="relative box-border caret-transparent flex w-full overflow-auto mb-10">
                          <div className="relative box-border caret-transparent gap-x-5 flex gap-y-5 mt-2.5">
                            <div className="box-border caret-transparent"></div>
                          </div>
                          <div className="box-border caret-transparent"></div>
                          <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start gap-y-5 w-full mt-2.5">
                            <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                            <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                            <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          </div>
                          <div className="box-border caret-transparent"></div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent">
                      <h3 className="text-[26px] font-semibold box-border caret-transparent leading-[35.2857px] font-poppins md:leading-[33.6471px]">
                        All Favorites
                      </h3>
                      <div className="box-border caret-transparent"></div>
                      <div className="box-border caret-transparent"></div>
                      <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start gap-y-5 w-full mt-2.5">
                        <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      </div>
                      <div className="box-border caret-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Shipping Addresses
                      </h2>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent"></div>
                      <div className="box-border caret-transparent"></div>
                      <div className="relative box-border caret-transparent h-5 w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      <div className="box-border caret-transparent"></div>
                    </div>
                    <div className="box-border caret-transparent hidden mt-5">
                      <a
                        href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-add-shipping-address"
                        className="relative text-white text-[15.4px] font-medium items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] box-border caret-transparent inline-flex justify-center leading-[24.2px] max-w-full min-h-12 outline-white outline-offset-0 text-center uppercase overflow-hidden py-2.5 rounded-2xl font-oswald md:outline-orange-400 md:outline-offset-4"
                      >
                        Add Shipping Address
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Add Shipping Address
                      </h2>
                    </div>
                    <div className="box-border caret-transparent"></div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Edit Shipping Address
                      </h2>
                    </div>
                    <div className="box-border caret-transparent"></div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2
                        role="heading"
                        className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]"
                      ></h2>
                      <button
                        aria-label="Share collection"
                        className="items-center bg-transparent caret-transparent hidden leading-[18.4px] text-center ml-auto p-0"
                      >
                        <span className="box-border caret-transparent">
                          Share
                        </span>
                        <span className="box-border caret-transparent">
                          <img
                            src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-33.svg"
                            alt="Icon"
                            className="box-border caret-transparent shrink-0 h-5 w-5 ml-[5px]"
                          />
                        </span>
                      </button>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="relative box-border caret-transparent gap-x-[50px] flex flex-col gap-y-[50px] mt-2.5">
                        <div className="box-border caret-transparent"></div>
                        <div className="relative box-border caret-transparent h-5 w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-dm_sans after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="box-border caret-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Manage Membership
                      </h2>
                    </div>
                    <div className="box-border caret-transparent"></div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Community
                      </h2>
                    </div>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent mt-5">
                      <div className="box-border caret-transparent">
                        <div className="box-border caret-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-[25px] hidden flex-col gap-y-[25px]">
                  <div className="relative box-border caret-transparent pt-2.5">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5">
                      <button
                        type="button"
                        aria-label="Back to Previous Page"
                        className="items-center bg-transparent caret-transparent flex leading-[18.4px] text-center p-0"
                      >
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-32.svg"
                          alt="Icon"
                          className="box-border caret-transparent shrink-0 h-2"
                        />
                      </button>
                      <h2 className="text-4xl font-semibold box-border caret-transparent leading-[45px] font-oswald md:leading-[45.4737px]">
                        Manage Membership
                      </h2>
                    </div>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent"></div>
            </main>
            <footer className="fixed bg-[linear-gradient(rgb(255,255,255),rgb(241,241,241))] shadow-[rgba(48,48,48,0.08)_0px_0px_0px_1px,rgba(48,48,48,0.06)_0px_-2px_8px_0px] box-border caret-transparent text-left w-full z-[999999999] bottom-10 md:bottom-0">
              <div className="box-border caret-transparent gap-x-2.5 flex justify-between gap-y-2.5 px-[60px] py-5">
                <a
                  href="https://beyondalpha.co/pages/estrocontrol-detox#rivo"
                  aria-label="Navigate to home"
                  className="items-center box-border caret-transparent flex flex-col"
                >
                  <div className="box-border caret-transparent hidden">
                    <img
                      src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-36.svg"
                      alt="Icon"
                      className="box-border caret-transparent shrink-0 h-5 w-5"
                    />
                  </div>
                  <div className="text-neutral-400 text-sm font-medium box-border caret-transparent leading-[21px] uppercase">
                    For You
                  </div>
                </a>
                <a
                  href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-orders"
                  aria-label="Navigate to orders"
                  className="items-center box-border caret-transparent flex flex-col"
                >
                  <div className="box-border caret-transparent hidden">
                    <img
                      src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-37.svg"
                      alt="Icon"
                      className="box-border caret-transparent shrink-0 h-5 w-5"
                    />
                  </div>
                  <div className="text-neutral-400 text-sm font-medium box-border caret-transparent leading-[21px] uppercase">
                    Orders
                  </div>
                </a>
                <a
                  href="https://beyondalpha.co/pages/estrocontrol-detox#rivo-profile"
                  aria-label="Navigate to profile"
                  className="items-center box-border caret-transparent flex flex-col"
                >
                  <div className="box-border caret-transparent hidden">
                    <img
                      src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-38.svg"
                      alt="Icon"
                      className="box-border caret-transparent shrink-0 h-5 w-5"
                    />
                  </div>
                  <div className="text-neutral-400 text-sm font-medium box-border caret-transparent leading-[21px] uppercase">
                    Profile
                  </div>
                </a>
                <div className="box-border caret-transparent"></div>
              </div>
              <div className="box-border caret-transparent"></div>
            </footer>
            <div className="box-border caret-transparent hidden z-[2147483647]">
              <div className="fixed items-center bg-black/30 box-border caret-transparent flex justify-center z-[2147483645] inset-0">
                <div
                  role="dialog"
                  className="absolute bg-white shadow-[rgba(0,0,0,0.1)_0px_-4px_6px_-1px] box-border caret-transparent max-h-[800px] w-full overflow-auto pt-2.5 pb-20 px-5 rounded-t-[10px] bottom-0 md:pb-10"
                >
                  <button
                    aria-label="Close modal"
                    className="absolute text-zinc-800 text-[15px] font-extrabold bg-zinc-300 caret-transparent block h-[25px] leading-[22.5px] text-center w-[25px] z-[2147483647] p-0 rounded-[25px] right-2.5 top-2.5 before:accent-auto before:items-center before:box-border before:caret-transparent before:text-zinc-800 before:flex before:text-[15px] before:not-italic before:normal-nums before:font-extrabold before:h-[25px] before:justify-center before:tracking-[normal] before:leading-[22.5px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-dm_sans"
                  ></button>
                  <div className="box-border caret-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
