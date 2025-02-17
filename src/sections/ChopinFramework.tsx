import TwitterCard from "@/components/landing-page/tweet-card"


export default function ChopinFrameworkSection() {
    return (
        <>
            <h2 className="text-3xl text-center font-medium text-strong-blue" id="chopinFramework">
                Why does <strong className="text-light-yellow">Haibu</strong> use <strong className="text-haibu-purple">Chopin Framework</strong>?
            </h2>
            <article className="w-full flex justify-evenly items-center">
                <div className="w-[42%] flex justify-center">
                    <ul className="text-[1.08rem] flex-wrap font-raleway w-[90%] h-full flex flex-col gap-6 justify-center">
                        <li className="flex text-[1.5rem] gap-4">
                            <p>
                                <strong className="text-stellar-blue">What is Chopin Framework?</strong>
                            </p>
                        </li>
                        <li className="flex w-full gap-4 justify-center">
                            <strong className="text-light-yellow">●</strong>
                            <p>
                                <strong className="text-haibu-purple">Chopin Framework</strong> turns HTTP requests into blockchain transactions, allowing seamless integration without wallets or extensions.
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-light-green">●</strong>
                            <p>
                                Transactions are signed in the browser using an embedded Capsule wallet and stored on a data availability (DA) layer for verification.
                            </p>
                        </li>
                        <li className="flex text-[1.5rem] items-center w-full gap-4">
                            <p>
                                <strong className="text-stellar-blue">Why does Haibu use Chopin?</strong>
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-red-500">●</strong>
                            <p>
                                <strong className="text-haibu-purple">Haibu</strong> uses Chopin to increase security by ensuring all interactions are verifiable and tamper-proof on-chain.
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-purple-500">●</strong>
                            <p>
                                Eliminates centralized authentication risks, making Haibu a safer and more resilient platform.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-[40%] flex justify-center">
                    <TwitterCard />
                </div>
            </article>
        </>
    )
}