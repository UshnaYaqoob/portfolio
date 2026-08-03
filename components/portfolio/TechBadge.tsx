/**
 * TechBadge
 * ---------
 * A tiny pill that displays a single technology name (e.g. "React", "Node.js").
 * Used inside ProjectCard, ServiceCard, and other components to list stacks.
 *
 * Props:
 *  - label: the technology name to display
 */

interface TechBadgeProps {
    label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
    return (
        <span
            className="
        inline-block px-2 py-0.5 text-xs font-medium rounded
        bg-blue-900/40 light:bg-blue-50 text-blue-300 light:text-blue-700 border border-blue-800/50 light:border-blue-200
        select-none
      "
        >
      {label}
    </span>
    );
}
