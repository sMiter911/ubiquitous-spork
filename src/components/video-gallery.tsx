"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const videoData = [
    {
        src: "/videos/XRecorder_20250903_03.mp4",
        title: "ShipHustle Demo 1",
    },
    {
        src: "/videos/XRecorder_20250903_06.mp4",
        title: "ShipHustle Demo 2",
    },
];

export function VideoGallery() {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="mb-12 text-center">
                    <Typography
                        variant="h2"
                        color="blue-gray"
                        className="mb-4"
                        placeholder=""
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                    >
                        Watch Shiphustle in Action
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full px-4 !text-gray-500 lg:w-8/12"
                        placeholder=""
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                    >
                        See how merchants showcase their skills and how customers find what they need
                    </Typography>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {videoData.map((video, index) => (
                        <div key={index} className="flex justify-center">
                            {/* Android Phone Frame */}
                            <div className="relative">
                                {/* Phone Body */}
                                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                                    {/* Screen Bezel */}
                                    <div className="bg-black rounded-[2rem] p-1">
                                        {/* Screen */}
                                        <div className="relative bg-white rounded-[1.5rem] overflow-hidden">
                                            {/* Status Bar */}
                                            <div className="bg-black h-6 flex items-center justify-between px-4 text-white text-xs">
                                                <div className="flex items-center space-x-1">
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                </div>
                                                <div className="text-xs">9:41</div>
                                                <div className="flex items-center space-x-1">
                                                    <div className="w-4 h-2 border border-white rounded-sm">
                                                        <div className="w-3 h-1 bg-white rounded-sm"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Video Container */}
                                            <div className="relative aspect-[9/19.5] bg-black">
                                                <video
                                                    className="w-full h-full object-cover"
                                                    controls
                                                    preload="metadata"
                                                    poster=""
                                                >
                                                    <source src={video.src} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Home Button */}
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                                        <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Phone Shadow */}
                                <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] -z-10 transform translate-y-2 blur-lg opacity-30"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default VideoGallery;