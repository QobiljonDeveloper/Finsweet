import React from 'react'

const Build = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Wrapper */}

        <div className="flex items-center justify-center flex-col">
          <h2 className="font-semibold text-5xl max-w-[50%] text-center">
            Let's build something great together
          </h2>
          <p className="font-normal text-[16px] text-[#696973] max-w-[40%] text-center mt-5 mb-10">
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <button className="py-4 px-[77px] grid place-items-center justify-self-center  rounded-full cursor-pointer duration-300 border border-transparent bg-[#FCD980]  mt-16 text-[#282938] hover:border hover:border-[#FCD980] hover:bg-transparent">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Build