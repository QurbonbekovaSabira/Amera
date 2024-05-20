// "use client";
// import { signOut, signIn } from "next-auth/react";

// import React from "react";
// import { useSession } from "next-auth/react";

// import GitHub from "../../../../public/img/gitHub.png";
// import google from "../../../../public/img/google.png";
// import logOut from "../../../../public/img/logOut.png";

// export const MainProfile = () => {
//   const session = useSession();

//   const LogOut = () => {
//     signOut({ callbackUrl: "/" });
//   };
//   const signInGoogle = () => {
//     signIn("google", { callbackUrl: "/" });
//   };
//   const sigInGitHub = () => {
//     signIn("github", { callbackUrl: "/" });
//   };
//   return (
//     <div>
//       <div className="bg-[url(/profile_img.jpg)] relative h-[500px] w-full flex flex-col items-center justify-center">
//         <h1 className="text-white text-[50px]">Sign In</h1>
//         <p className="text-gray mb-[10px]">
//           Home/<span className="text-white">Sign In</span>
//         </p>
//         <div className="flex items-center gap-[20px]">
//           <button
//             className="text-white w-[40px] h-[40px] bg-gray rounded-[50%]"
//             onClick={signInGoogle}
//           >
//             <img src={GitHub.src} alt="" />
//           </button>
//           <button
//             className="text-white w-[40px] h-[40px] bg-gray rounded-[50%]"
//             onClick={sigInGitHub}
//           >
//             <img src={google.src} alt="" />
//           </button>
//         </div>
//         <div className="absolute top-3 right-2 flex items-center justify-center text-black w-[40px] h-[40px] bg-gray rounded-[50%]">
//           <button className="" onClick={LogOut}>
//             <img src={logOut.src} alt="" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
