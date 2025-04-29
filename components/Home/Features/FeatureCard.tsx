import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  text: string;
};

export default function FeatureCard({ icon, text }: FeatureCardProps) {
  return (
    <div className="my-3 flex justify-center gap-3 bg-white p-3 rounded-lg shadow items-center">
        <div className="text-3xl p-3 rounded-full bg-gray-300">{icon}</div>
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
}
