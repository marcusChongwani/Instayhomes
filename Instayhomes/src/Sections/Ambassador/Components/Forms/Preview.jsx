

import React from "react";

export default function Preview(){
  return(
    <div class="w-full ">
        <h2 class="font-manrope font-bold text-3xl leading-10 text-gray-700 text-center">
            Preview Submission 👀
        </h2>
        <p class="mt-4 font-normal text-md leading-8 text-gray-500 mb-11 text-center">Ensure that the informaton you have entered is correct and complete. If you are happy with your submission, click the button below to submit.</p>

        <div class="flex flex-col lg:flex-row items-center border-b pb-4 border-gray-200 gap-6">
            <div class="img-box w-full lg:max-w-[140px] rounded-md">
                <img src="https://media.istockphoto.com/id/1368330586/photo/front-porch-and-entrance-to-new-home.jpg?s=612x612&w=0&k=20&c=h13209WqKTjXDnqNbcnQMMJo6evzmvzNeQlClRdL-jk=" alt="Premium Watch image" class="w-full aspect-square rounded-md object-cover"/>
            </div>
            <div class="flex flex-col lg:flex-row w-full">
                <div class="lg:w-1/2">
                    <h2 class="font-semibold text-xl text-black mb-3">Premium Quality Dust Watch</h2>
                    <p class="text-lg text-gray-500 mb-3">By: Dust Studios</p>
                    <div class="flex gap-4">
                        <p class="text-base text-black pr-4 mr-4 border-r border-gray-200">Size: <span class="text-gray-500">100 ml</span></p>
                        <p class="text-base text-black">Qty: <span class="text-gray-500">2</span></p>
                    </div>
                </div>
                <div class="lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="flex items-center">
                        <p class="text-sm text-black">Price</p>
                        <p class="mt-4 text-sm text-indigo-600">$100</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-sm text-black">Status</p>
                        <p class="bg-emerald-50 text-emerald-600 py-0.5 px-3 rounded-full">Ready for Delivery</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-sm text-black">Expected Delivery</p>
                        <p class="text-base text-emerald-500">23rd March 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}