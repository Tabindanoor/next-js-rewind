"use client";

import { FormEvent, useState } from "react";

type RegistrationFormProps = {
  eventId: string;
  onSubmit?: (email: string) => void;
};

export default function RegistrationForm({
  eventId,
  onSubmit,
}: RegistrationFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage({ type: null, text: "" });
    setIsLoading(true);

    try {
      // If custom onSubmit is provided, use it
      if (onSubmit) {
        onSubmit(email);
        setMessage({
          type: "success",
          text: "Registration successful!",
        });
        setEmail("");
        setIsLoading(false);
        return;
      }

      // Otherwise, call the API
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage({
          type: "error",
          text: data.error || "Failed to register. Please try again.",
        });
      } else {
        setMessage({
          type: "success",
          text: data.message || "Successfully registered for the event!",
        });
        setEmail("");
        // Refresh the page to update the registration count
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
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
      
      {message.type && (
        <div
          className={`mb-4 rounded-lg p-3 text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          aria-label="Register for this event"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </div>
    </form>
  );
}
