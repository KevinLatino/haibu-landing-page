import { Card } from "../ui/card";
import ModularTweet from "../../../public/ModularCloud-Tweet.jpeg";
import ModularCloud from '../../../public/Modular-Cloud.jpg'
import { BadgeCheck } from "lucide-react";
import X from "../../../public/icons/x.svg";
import Image from "next/image";

export default function TwitterCard() {

    const handleURL = (): void => {
        window.open(
            "https://x.com/modularcloud1/status/1819040553708998966",
            "_blank"
        );
    };

    return (
        <Card
            onClick={handleURL}
            className="cursor-pointer mt-4 w-[92%] p-4 bg-white border-4 border-gray-300 rounded-2xl shadow-sm"
        >
            <section className="flex-1">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Image
                            className="rounded-full"
                            src={ModularCloud}
                            alt="Modular Cloud Logo"
                            width={50}
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-[15px] text-gray-900">
                                Modular Cloud
                            </span>{" "}
                            <span className="text-[15px] text-gray-500">@modularcloud1</span>
                        </div>
                        <BadgeCheck className="text-[#1DA1F2] w-5 h-5" />
                    </div>
                    <Image src={X} alt="X (Twitter Logo)" width={25} className="mr-4" />
                </div>
                <p className="mt-2">
                    We are launching
                    @chopinframework, a framework that converts regular web2 apps into application-specific rollups with
                    @CelestiaOrg
                    underneath.
                </p>
                <p className="mt-1 text-[15px] text-gray-800 leading-normal">
                    This is the first step toward our goal of moving the entire World Wide Web onchain.
                </p>
                <div className="flex justify-center">
                    <Image
                        src={ModularTweet}
                        alt="Modular Cloud Tweet"
                        className="rounded-2xl mt-3"
                        width={440}
                    />
                </div>
            </section>
        </Card>
    );
}
