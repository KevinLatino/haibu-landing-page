  import { MarqueeDemo } from "@/components/landing-page/user-opinions"

export default function CommunitySection() {
    return (
        <section className="mt-[8rem]">
            <h2 className="text-2xl md:text-3xl text-center font-medium">
                <strong className="text-haibu-purple">Take a look</strong> to lastest Haibu's Comunnity{" "}
                <strong className="text-haibu-purple">Hais (posts)</strong>.
            </h2>
            <article className="overflow-x-hidden">
                <MarqueeDemo />
            </article>
        </section>
    )
  }