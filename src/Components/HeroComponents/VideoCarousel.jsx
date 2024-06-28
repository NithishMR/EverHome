// import React, { useState } from "react";
// import Video1 from "./Video1.mp4";
// import Video2 from "./Video2.mp4";
// import Video3 from "./Video3.mp4";

// function VideoCarousel() {
//   const videos = [Video1, Video2, Video3];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextVideo = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
//   };

//   const prevVideo = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
//     );
//   };

//   return (
//     <div className="relative w-full">
//       <div className="carousel w-full">
//         {videos.map((src, index) => (
//           <div
//             key={index}
//             className={`carousel-item w-full ${
//               index === currentIndex ? "block" : "hidden"
//             }`}
//           >
//             <video
//               className="w-full h-full object-cover absolute top-0 left-0 z-0"
//               autoPlay
//               muted
//               loop
//               playsInline
//             >
//               <source src={src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//         onClick={prevVideo}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//         onClick={nextVideo}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default VideoCarousel;
