# Agent Guidelines for Rook Website

## Build Commands
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production (runs all checks first)
- `pnpm run check` - Run all checks (prettier, lint, types, deps, knip)
- `pnpm run check:lint` - ESLint with max 0 warnings
- `pnpm run check:types` - TypeScript type checking
- `pnpm run check:prettier` - Prettier formatting check
- `pnpm run fix` - Auto-fix prettier and knip issues

## Code Style
- **Imports**: Use `@/` alias for app directory imports, group external imports first
- **Components**: Default export functions, PascalCase filenames, use TypeScript
- **Styling**: TailwindCSS with `cn()` utility from `@/lib/utils` for conditional classes
- **Types**: Strict TypeScript, use `type` for object shapes, interfaces for extensible contracts
- **Naming**: camelCase variables/functions, PascalCase components, kebab-case files
- **Error Handling**: Use console.error/warn only, avoid console.log in production code
- **React**: No React import needed (JSX transform), use arrow functions, avoid nested ternaries
- **Formatting**: Prettier with Tailwind plugin, trailing commas ES5 style

## Architecture
- TanStack Router for routing, components in `app/components/`, routes in `app/routes/`
- Radix UI components with custom styling, Three.js for 3D elements