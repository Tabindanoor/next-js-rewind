"use client";
import { FormEvent, useState } from "react";

type RegistrationFormProps = {
  eventId: string;
};

export default function RegistrationForm({eventId}: RegistrationFormProps) {
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
      className="mt-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Register for this event
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Enter your email to secure your spot
        </p>
      </div>
      
      {message.type && (
        <div
          className={`mb-6 flex items-center gap-3 rounded-xl border p-4 text-sm ${
            message.type === "success"
              ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800/50 dark:bg-green-900/20 dark:text-green-400"
              : "border-red-200 bg-red-50 text-red-800 dark:border-red-800/50 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          <svg
            className={`h-5 w-5 flex-shrink-0 ${
              message.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {message.type === "success" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
          </svg>
          <span>{message.text}</span>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            disabled={isLoading}
            aria-label="Register for this event"
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Registering...
                </>
              ) : (
                <>
                  Register
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </button>
        </div>
      </div>
    </form>
  );
}
