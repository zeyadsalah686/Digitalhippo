"use client";

import { ShoppingCart } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function Cart() {
    const itemCount = 0;

    return (
        <>
            <Sheet>
                <SheetTrigger className="group -m-2 flex items-center p-2">
                    <ShoppingCart
                        aria-hidden="true"
                        className="group-hover:text-gray-500 h-6 w-6 flex-shrink-0 text-gray-400"
                    />
                    <span className="text-sm ml-2 font-medium text-gray-700 group-hover:text-gray-800">
                        {itemCount}
                    </span>
                </SheetTrigger>
                <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                    <SheetHeader className="space-y-2.5 pr-6">
                        <SheetTitle>Cart ({itemCount})</SheetTitle>
                    </SheetHeader>
                    {itemCount > 0 ? (
                        <></>
                    ) : (
                        <>
                            <div className="flex h-full flex-col items-center justify-center space-y-1">
                                <div className="text-xl font-semibold">
                                    Your cart is empty
                                </div>
                                <div
                                    aria-hidden="true"
                                    className="relative mb-4 h-60 w-60 text-muted-foreground"
                                >
                                    <Image
                                        src="/hippo-empty-cart.png"
                                        fill
                                        alt="empty shopping cart hippo"
                                    />
                                </div>
                                <SheetTrigger asChild>
                                    <Link
                                        href="/products"
                                        className={buttonVariants({
                                            variant: "link",
                                            size: "sm",
                                            className:
                                                "text-sm text-muted-foreground",
                                        })}
                                    >
                                        Add items to your cart to checkout
                                    </Link>
                                </SheetTrigger>
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </>
    );
}
