import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal"

export function HaibuContribution() {
  return (
    <Terminal className="bg-[rgba(85,77,234,0.1)] rounded-xl shadow-md border border-[rgba(85,77,234,0.3)] w-full max-w-[43rem] p-4">
      <TypingAnimation className="text-lg font-semibold text-[rgba(85,77,234,0.9)] mb-4">🚀 Contributing to Haibu</TypingAnimation>

      <AnimatedSpan delay={1000} className="text-base text-[rgba(85,77,234,0.8)] block mb-2">
        🔍 Issue #42: "Update user profile page"
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-base text-green-600 block mb-2">
        ✅ Issue assigned to you
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-base text-[rgba(85,77,234,0.8)] block mb-2">
        📦 Cloning repository...
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-base text-green-600 block mb-2">
        🌿 Created branch: feature/update-profile
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-base text-[rgba(85,77,234,0.8)] block mb-2">
        💻 Making changes...
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-base text-green-600 block mb-2">
        🚀 Changes pushed to Haibu
      </AnimatedSpan>

      <TypingAnimation delay={7000} className="text-base font-semibold text-[rgba(85,77,234,0.9)] mt-4">
        🎉 Contribution successful!
      </TypingAnimation>
    </Terminal>
  )
}
