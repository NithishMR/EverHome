// function OurStory() {
//   return (
//     <>
//       <div className="w-full grid grid-cols-2 my-20">
//         <span className="text-[60px] text-justify mx-10 mt-10">
//           <p className="TimesNewRoman">Our Story</p>
//           <p className="text-[20px] ml-16 mt-4 text-justify">
//             The Everhome Agency wasn't born out of a boardroom meeting or a
//             market analysis. It sprouted from a seed of passion – a passion for
//             helping people find the place they can truly call home. Our founder,
//             wasn't always a seasoned realtor. It all started with his idea. This
//             experience ignited a desire to bridge the gap between aspiring
//             homeowners and a smooth, stress-free real estate journey.
//           </p>
//         </span>

//         <span className=" m-auto">
//           <img
//             className="w-[95%]"
//             src="../src/Components/ImageRight2.webp"
//             alt="rightIamge"
//           />
//         </span>
//       </div>
//     </>
//   );
// }
// export default OurStory;
import React from "react";
import { useInView } from "react-intersection-observer";

function OurStory() {
  const options = {
    threshold: 0.5,
    triggerOnce: true,
  };

  const { ref: textRef, inView: textInView } = useInView(options);
  const { ref: imageRef, inView: imageInView } = useInView(options);

  return (
    <>
      <div className="w-full grid grid-cols-2 my-20">
        <span
          className={`text-[60px] text-justify mx-10 mt-10 transition-transform duration-1000 ${
            textInView
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          ref={textRef}
        >
          <p className="TimesNewRoman">Our Story</p>
          <p className="text-[20px] ml-16 mt-4 text-justify">
            The Everhome Agency wasn't born out of a boardroom meeting or a
            market analysis. It sprouted from a seed of passion – a passion for
            helping people find the place they can truly call home. Our founder,
            wasn't always a seasoned realtor. It all started with his idea. This
            experience ignited a desire to bridge the gap between aspiring
            homeowners and a smooth, stress-free real estate journey.
          </p>
        </span>
        <span
          className={`m-auto transition-transform duration-1000 ${
            imageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          ref={imageRef}
        >
          <img
            className="w-[95%]"
            src="../src/Components/ImageRight2.webp"
            alt="rightIamge"
          />
        </span>
      </div>
    </>
  );
}

export default OurStory;
