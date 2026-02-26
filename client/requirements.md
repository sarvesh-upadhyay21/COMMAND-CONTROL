## Packages
recharts | For building the analytics bar, pie, and line charts in Row 4
framer-motion | For the pulsing Live VC spotlight and the scrolling bottom ticker
date-fns | For formatting times and the real-time clock
lucide-react | Standard icons for dashboard widgets

## Notes
The dashboard uses a 30-second refetch interval via TanStack Query to keep the display updated for the wall screen.
Assuming all data comes from `/api/vcs` and `/api/stats`.
