import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [loadedImages, setLoadedImages] = useState({});

  const features = [
    {
      title: "Live Engineering Timeline",
      description:
        "Visualize commits, deployments, and runtime errors in a unified real-time stream. No more switching between tools.",
      img: "/image1.jpg",
    },
    {
      title: "Contextual Team Collaboration",
      description:
        "Discuss issues directly on events. Keep conversations tied to code, deployments, and system behavior.",
      img: "/image2.jpg",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Automatically detect anomalies, summarize incidents, and highlight patterns across your system.",
      img: "/image3.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="px-8 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Understand your system <br /> as it evolves — in real time
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A unified platform to track engineering activity, debug faster, and
          collaborate with clarity. Built for modern development teams.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Get Started
          </Link>

          <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            View Demo
          </button>
        </div>

        {/* subtle trust line */}
        <p className="mt-6 text-sm text-gray-400">
          Trusted by engineers building scalable systems
        </p>
      </section>

      {/* STATS / TRUST */}
      <section className="px-8 py-12 border-y border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <div>
            <p className="text-3xl font-bold">10k+</p>
            <p className="text-gray-500 text-sm mt-1">Events processed</p>
          </div>
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-gray-500 text-sm mt-1">Teams onboarded</p>
          </div>
          <div>
            <p className="text-3xl font-bold">99.9%</p>
            <p className="text-gray-500 text-sm mt-1">Uptime</p>
          </div>
          <div>
            <p className="text-3xl font-bold">2x</p>
            <p className="text-gray-500 text-sm mt-1">Faster debugging</p>
          </div>
        </div>
      </section>

      {/* FEATURES (ZIG-ZAG) */}
      <section className="px-8 py-24 max-w-6xl mx-auto space-y-24">
        {features.map((feature, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div
                className={`overflow-hidden rounded-2xl shadow-sm ${isReversed ? "md:order-2" : "md:order-1"
                  }`}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  onLoad={() =>
                    setLoadedImages((prev) => ({
                      ...prev,
                      [index]: true,
                    }))
                  }
                  className={`w-full h-72 object-cover transition-all duration-700 ease-out
                  ${loadedImages[index]
                      ? "opacity-100 blur-0 scale-100"
                      : "opacity-0 blur-md scale-105"
                    }`}
                />
              </div>

              {/* TEXT */}
              <div
                className={`${isReversed ? "md:order-1" : "md:order-2"
                  }`}
              >
                <h3 className="text-3xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {feature.description}
                </p>

                <p className="text-gray-500 mt-4 text-sm">
                  Built for teams that need visibility, speed, and alignment
                  across engineering workflows.
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* WORKFLOW SECTION */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            From chaos to clarity
          </h2>

          <p className="text-gray-600 mt-4">
            Replace fragmented tools with a single source of truth for your
            engineering activity.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <div>
              <h4 className="font-semibold text-lg">Connect</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Integrate your repositories, CI/CD pipelines, and monitoring
                tools in minutes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Observe</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Watch your system activity unfold in real-time with full
                context.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Act</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Resolve issues faster with insights and team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-24 text-center">
        <h2 className="text-4xl font-semibold">
          Start building with clarity
        </h2>

        <p className="text-gray-600 mt-4">
          Join teams that are shipping faster with better visibility.
        </p>

        <div className="mt-8">
          <Link
            to="/dashboard"
            className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Start for Free
          </Link>
        </div>
      </section>
    </div>
  );
}