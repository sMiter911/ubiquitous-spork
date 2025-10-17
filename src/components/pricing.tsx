"use client";

import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const pricingPlans = [
    {
        name: "Free Plan",
        price: "0",
        period: "/month",
        description: "Perfect for getting started",
        features: {
            "Hustle Management": [
                "1 hustle",
                "7 menu items per hustle",
                "1 tag per hustle/post"
            ],
            "Promotion & Content": [
                "Boost 3 items",
                "10-second audio promotion"
            ],
            "Social & Networking": [
                "2 social links",
                "Direct messaging",
                "Community access"
            ]
        },
        buttonText: "Get Started Free",
        buttonColor: "gray",
        popular: false,
        availability: "Available on Android",
        note: "iOS coming soon"
    },
    {
        name: "Premium Plan",
        price: "149",
        period: "/ 3 months",
        description: "Unlock your full potential",
        badge: "Early Bird Special",
        features: {
            "Hustle Management": [
                "3 hustles",
                "30 menu items per hustle",
                "3 tags per hustle/post",
                "Premium Badge"
            ],
            "Promotion & Content": [
                "Boost 5 menu items",
                "60-second audio promotion",
                "10 snippets (60 seconds each)"
            ],
            "Social & Networking": [
                "6 social links",
                "Map browsing for other locations",
                "Enhanced networking features"
            ],
            "AI & Support": [
                "AI description assistance",
                "Content optimization",
                "Priority support"
            ]
        },
        buttonText: "Start Early Bird Trial",
        buttonColor: "green",
        popular: true,
        availability: "Available on Android",
        note: "iOS coming soon",
        paymentMethods: "💳 In app purchases available via • Ozow • EFT • Credit/Debit Cards"
    }
];

export function Pricing() {
    return (
        <section className="py-28 px-4 bg-gray-50" id="pricing">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-4"
                        placeholder=""
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                    >
                        Choose Your Plan
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full px-4 !text-gray-500 lg:w-8/12"
                        placeholder=""
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                    >
                        Start free and upgrade when you&apos;re ready to grow
                    </Typography>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative ${plan.popular
                                    ? "border-2 border-green-500 shadow-2xl transform scale-105"
                                    : "border border-gray-200 shadow-lg"
                                }`}
                            placeholder=""
                            onPointerEnterCapture={() => { }}
                            onPointerLeaveCapture={() => { }}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            <CardBody
                                className="p-8"
                                placeholder=""
                                onPointerEnterCapture={() => { }}
                                onPointerLeaveCapture={() => { }}
                            >
                                <div className="text-center mb-8">
                                    <Typography
                                        variant="h3"
                                        color="blue-gray"
                                        className="mb-2"
                                        placeholder=""
                                        onPointerEnterCapture={() => { }}
                                        onPointerLeaveCapture={() => { }}
                                    >
                                        {plan.name}
                                    </Typography>

                                    <div className="flex items-baseline justify-center mb-2">
                                        <Typography
                                            variant="h1"
                                            color={plan.popular ? "green" : "blue-gray"}
                                            className="mr-1"
                                            placeholder=""
                                            onPointerEnterCapture={() => { }}
                                            onPointerLeaveCapture={() => { }}
                                        >
                                            R{plan.price}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            placeholder=""
                                            onPointerEnterCapture={() => { }}
                                            onPointerLeaveCapture={() => { }}
                                        >
                                            {plan.period}
                                        </Typography>
                                    </div>

                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="mb-6"
                                        placeholder=""
                                        onPointerEnterCapture={() => { }}
                                        onPointerLeaveCapture={() => { }}
                                    >
                                        {plan.description}
                                    </Typography>
                                </div>

                                <div className="space-y-6 mb-8">
                                    {Object.entries(plan.features).map(([category, features]) => (
                                        <div key={category}>
                                            <Typography
                                                variant="h6"
                                                color={plan.popular ? "green" : "blue-gray"}
                                                className="mb-3 text-center"
                                                placeholder=""
                                                onPointerEnterCapture={() => { }}
                                                onPointerLeaveCapture={() => { }}
                                            >
                                                {category}
                                            </Typography>
                                            <ul className="space-y-2">
                                                {features.map((feature: string, idx: number) => (
                                                    <li key={idx} className="flex items-center">
                                                        <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                                        <Typography
                                                            variant="small"
                                                            color="gray"
                                                            placeholder=""
                                                            onPointerEnterCapture={() => { }}
                                                            onPointerLeaveCapture={() => { }}
                                                        >
                                                            {feature}
                                                        </Typography>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    size="lg"
                                    color={plan.buttonColor as any}
                                    className="w-full mb-4"
                                    placeholder=""
                                    onPointerEnterCapture={() => { }}
                                    onPointerLeaveCapture={() => { }}
                                >
                                    {plan.buttonText}
                                </Button>

                                <div className="text-center text-sm text-gray-500">
                                    <p>{plan.availability}</p>
                                    <p>{plan.note}</p>
                                    {plan.paymentMethods && (
                                        <p className="mt-2">{plan.paymentMethods}</p>
                                    )}
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center space-y-2">
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <span className="mr-2">🕒</span>
                        <Typography
                            variant="small"
                            color="gray"
                            placeholder=""
                            onPointerEnterCapture={() => { }}
                            onPointerLeaveCapture={() => { }}
                        >
                            <strong>Limited Time:</strong> Early bird pricing ends November 30, 2025
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        placeholder=""
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                    >
                        All plans include basic customer support and regular app updates
                    </Typography>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <span className="mr-2">🔒</span>
                        <Typography
                            variant="small"
                            color="gray"
                            placeholder=""
                            onPointerEnterCapture={() => { }}
                            onPointerLeaveCapture={() => { }}
                        >
                            <strong>Secure Payments:</strong> All premium subscriptions are processed securely through Ozow in the Android app
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;