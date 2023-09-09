import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Header title={'Home'}/>
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl leading-10 mb-4 font-bold text-white">
              The Place to Buy a
              <br className="hidden lg:inline-block py-2" />
              Business or Sell a Business
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">The Premiere Business Broker in Canada.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Find Business</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="object-cover object-center rounded" alt="hero" src="https://plus.unsplash.com/premium_photo-1674777843119-dea5ff80f469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
          </div>
        </div>
      </section>
      {/* Stack Blogs on homepage */}
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.sunbeltcanada.com/wp-content/uploads/2022/11/home-sell-min-1-min.jpg" alt="blog" />
                <div className="p-6">
                  <h2 className="title-font text-lg font-medium text-white mb-3">Sell a Business</h2>
                  <p className="leading-relaxed text-gray-400 mb-3">Have You Ever Thought About Selling Your Business? If so we can help answer many of these questions about selling your business in Canada:
                    <br />
                    Is it saleable? How much risk is involved? Can I keep it private? What is my business worth? What do I need to do to get the most value? Are there buyers for my business?
                    <br />
                    Call us and have your questions answered.</p>
                  <div className="flex items-center flex-wrap ">
                    <a href="#" className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.sunbeltcanada.com/wp-content/uploads/2022/11/home-buy-min-1-min.jpg" alt="blog" />
                <div className="p-6">
                  <h2 className="title-font text-lg font-medium text-white mb-3">Buy a Business</h2>
                  <p className="leading-relaxed text-gray-400 mb-3">For first time buyers and experienced business buyers we offer an excellent inventory of businesses for sale with all of the information a serious buyer would want to review. View Businesses to look at businesses for sale or learn How to Buy a Business with our helpful articles and free book. No matter what size of business you are looking to buy, our business brokers have the expertise, resources and contacts you require to buy a business in Canada.</p>
                  <div className="flex items-center flex-wrap">
                    <a href="#" className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">Search Our Postings
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.sunbeltcanada.com/wp-content/uploads/2022/11/home-offices-min-1-min.jpg" alt="blog" />
                <div className="p-6">
                  <h2 className="title-font text-lg font-medium text-white mb-3">Our Offices</h2>
                  <p className="leading-relaxed text-gray-400 mb-3">Looking for a great Business Broker near you? We have brokers across Canada who know your region, they will provide excellent guidance and insight to make the best of your business sale or purchase?
                    <br />
                    Please reach out and we will answer your questions about buying a business or selling a business so you can move forward with confidence.</p>
                  <div className="flex items-center flex-wrap ">
                    <a href="#" className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">Find an office near you
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About SEction  */}
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-bold text-4xl mb-6 text-white">About Mk Timothy Company</h1>
              <div className="leading-relaxed text-gray-400">With more than 30 offices in Canada and the largest number of certified professional brokers in the country, we have more exposure to the market than anyone else.
                <br />
                <br />
                The Canadian offices benefit from access to an international network of more than 250 licensed offices and 1,400 brokers that coordinate the sale of some 3,000 small and mid-sized businesses each year.
                <br />
                <br />
                Our extensive network of professional contacts among accountants, lawyers, bankers, business coaches, consultants, wealth planners, insurance experts, venture and entrepreneurial sources also ensures that active buyers in the market are routinely, and in some cases exclusively, referred to us.
              </div>
              <a href="#" className="text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg mt-4 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="stats" />
          </div>
        </div>
      </section>
      {/* Why Choose us */}
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-600 bg-white/5 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Why Buy or Sell with Us?</h2>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">10,000+</h2>
                <p className="leading-relaxed text-gray-400">business sold</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">98%</h2>
                <p className="leading-relaxed text-gray-400">purchaser success rate</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">20+</h2>
                <p className="leading-relaxed text-gray-400">years of experience</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">27</h2>
                <p className="leading-relaxed text-gray-400">offices across Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What clients Say */}
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
          <div className="flex flex-wrap -m-4">

            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white/5 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed text-gray-400 mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a className="inline-flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">Alper Kamu</span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bussiness Postings */}
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Our latest postings?</h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.sunbeltcanada.com/wp-content/uploads/2023/09/pexels-piotr-arnoldes-6109673-scaled-768x510.jpg" alt="blog" />
                <div className="p-6">
                  <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REPAIR AND MAINTENANCE</h3>
                  <h2 className="title-font text-lg font-medium text-white mb-3">
                    Drill & Rock Breaker Supplier & Service Business For Sale</h2>
                  <p className="leading-relaxed text-gray-400 mb-3">

                    Asking Price: <b>$ 1,650,000</b>
                    <br />
                    Business ID: <b>NONT0027</b>
                    <br />
                    Location: <b>Ontario</b>
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="#" className="uppercase text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all text-sm duration-300 rounded-lg mt-4 inline-flex items-center md:mb-2 lg:mb-0 py-1 px-2">more info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}
