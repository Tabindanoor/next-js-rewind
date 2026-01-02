# Project Structure & Component Organization

This document outlines the optimized component structure for the Next.js Events application.

## 📁 Directory Structure

```
learn-next-js/
├── app/                          # Next.js App Router pages
│   ├── events/
│   │   ├── [event]/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx     # Event detail page (refactored)
│   │   │   └── page.tsx          # Event category page (refactored)
│   │   └── page.tsx              # Main events page
│   └── ...
├── components/                   # Reusable React components
│   ├── events/                   # Event-specific components
│   │   ├── BackNavigation.tsx
│   │   ├── CategoryHeader.tsx
│   │   ├── EventActionButtons.tsx
│   │   ├── EventCard.tsx
│   │   ├── EventDescription.tsx
│   │   ├── EventHeader.tsx
│   │   ├── EventImage.tsx
│   │   ├── EventStats.tsx
│   │   ├── EventsPage.tsx
│   │   ├── RegistrationForm.tsx
│   │   └── index.ts              # Barrel export
│   └── ui/                       # Generic UI components
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── index.ts              # Barrel export
├── types/                        # TypeScript type definitions
│   └── events.ts                 # Event & EventCategory types
├── utils/                        # Utility functions
│   └── events.ts                 # Event-related helper functions
└── data/                         # Static data
    └── data.json
```

## 🧩 Component Architecture

### UI Components (`components/ui/`)

Generic, reusable UI components that can be used throughout the application:

- **Button**: Flexible button component with variants (primary, secondary, outline) and support for links
- **Badge**: Badge component for displaying labels/tags
- **Card**: Container component with consistent styling and padding options

### Event Components (`components/events/`)

Event-specific components that handle event-related functionality:

- **BackNavigation**: Navigation link component for going back
- **CategoryHeader**: Displays event category with image and description
- **EventActionButtons**: Action buttons for event pages
- **EventCard**: Card component for displaying event in lists
- **EventDescription**: Displays event description section
- **EventHeader**: Displays event title and city badge
- **EventImage**: Image component for events with gradient overlay
- **EventStats**: Displays event statistics (attendees, event ID)
- **EventsPage**: Main events listing component
- **RegistrationForm**: Form component for event registration

## 📝 Type Definitions (`types/`)

Centralized TypeScript types:

- **Event**: Type for individual events
- **EventCategory**: Type for event categories
- **EventsData**: Type for the complete events data structure

## 🔧 Utility Functions (`utils/`)

Reusable helper functions:

- **getRegisteredCount**: Calculates the number of registered attendees
- **filterEventsByCity**: Filters events by city name

## 🎯 Benefits of This Structure

1. **Reusability**: Components can be easily reused across different pages
2. **Maintainability**: Changes to components only need to be made in one place
3. **Type Safety**: Centralized types ensure consistency across the application
4. **Separation of Concerns**: UI components are separated from business logic
5. **Testability**: Smaller, focused components are easier to test
6. **Scalability**: Easy to add new components following the same pattern

## 📦 Using Components

### Import from Barrel Exports

```typescript
// Import multiple components from events
import { EventCard, EventHeader, EventStats } from "@/components/events";

// Import UI components
import { Button, Card, Badge } from "@/components/ui";
```

### Import Individual Components

```typescript
// Import single component
import EventCard from "@/components/events/EventCard";
import Button from "@/components/ui/Button";
```

## 🔄 Refactoring Guidelines

When adding new features:

1. **Check for existing components** that can be reused or extended
2. **Create new components** in the appropriate directory (`ui/` for generic, `events/` for event-specific)
3. **Update types** in `types/events.ts` if needed
4. **Add utility functions** to `utils/events.ts` for reusable logic
5. **Export from index.ts** files for easier imports
6. **Keep components focused** - each component should have a single responsibility

## 🚀 Next Steps

Potential improvements:

- Add Storybook for component documentation
- Implement unit tests for components
- Add error boundaries for better error handling
- Create loading and error state components
- Add form validation utilities
- Implement API integration for registration form
