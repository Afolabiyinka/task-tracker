import React from "react";
import PricingCard from "../../Components/Basic Components/PricingCard";

const Pricing = () => {
  // async function getPermissions() {
  //   try {
  //     // Camera & Mic
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: true,
  //     });

  //     const notifications = await Notification.requestPermission();
  //     notifications();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // getPermissions();
  return (
    <div className="h-full w-full flex flex-col md:flex-row justify-center items-center px-4 py-8">
      <PricingCard />
    </div>
  );
};

export default Pricing;
