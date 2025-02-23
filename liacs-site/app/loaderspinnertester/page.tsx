"use client";

import LoadingSpinner from "../../components/Loader/LoadingSpinner";

export default function LoaderSpinnerTester() {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-white">
      <LoadingSpinner />
    </section>
  );
}
