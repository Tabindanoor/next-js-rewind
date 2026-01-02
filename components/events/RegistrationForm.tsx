"use client";

import { FormEvent } from "react";

type RegistrationFormProps = {
  eventId: string;
  onSubmit?: (email: string) => void;
};

export default function RegistrationForm({
  eventId,
  onSubmit,
}: RegistrationFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (onSubmit) {
      onSubmit(email);
    } else {
      // Default behavior - could be enhanced with API call
      console.log("Registering email:", email, "for event:", eventId);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700"
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        Register for this event
      </h2>
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          aria-label="Register for this event"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Register
        </button>
      </div>
    </form>
  );
}
