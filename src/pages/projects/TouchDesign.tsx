import React from "react";

const TouchDesign = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading text-foreground mb-4">Touch Design</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Exploring tactile and touch-based interaction design. (Project details coming soon!)
        </p>
        {/* Add more sections here: Overview, Process, Gallery, etc. */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-base text-foreground/80">
            This project investigates the principles and creative possibilities of designing for touch interfaces, focusing on user experience, feedback, and accessibility.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center text-muted-foreground">
            (Images and demos coming soon)
          </div>
        </section>
      </div>
    </div>
  );
};

export default TouchDesign;
