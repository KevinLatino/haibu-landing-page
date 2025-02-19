import { HaibuContribution } from "@/components/landing-page/terminal"

export default function ContributeSection() {
    return (
        <section className="md:p-[8rem] w-full flex flex-col justify-evenly items-center">
            <h2 className="text-2xl md:text-3xl text-center font-medium">
                Are you a <strong className="text-light-yellow">developer</strong>? Join us and contribute to
                <strong className="text-haibu-purple"> Haibu!</strong>
            </h2>
  
            <article className="flex flex-col md:flex-row mt-[2rem] gap-[5rem] ">
                <div className="w-full md:w-[62%] flex flex-col justify-center">
                    <ul className="text-[1.08rem] flex-wrap font-raleway w-full md:w-[90%] h-full flex flex-col gap-6 justify-center">
                        <li className="flex text-[1.5rem] items-center w-full gap-4">
                            <p>
                                <strong className="text-stellar-blue">How can you help?</strong>
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-red-500">●</strong>
                            <p>
                                Fork our repo, pick an issue, contribute with code, documentation, or ideas. Every contribution matters!
                                🌟
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-purple-500">●</strong>
                            <p>
                                Join our community discussions, propose features, and be part of an open and inclusive development
                                process.
                            </p>
                        </li>
                        <li className="flex text-[1.5rem] items-center w-full gap-4">
                            <p>
                                <strong className="text-stellar-blue">Why contribute to Haibu?</strong>
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-blue-500">●</strong>
                            <p>
                                Get real-world open-source experience, build your portfolio, and collaborate with like-minded
                                developers.
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-green-500">●</strong>
                            <p>
                                Help create a decentralized, community-driven platform where governance is in the hands of the users.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-[60%]">
                    <HaibuContribution />
                </div>
            </article>
        </section>
    )
  }