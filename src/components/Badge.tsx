import React from 'react';

export default function Badge(props: { value: string, color?: string }) {
  // Destructure the props
  const { value, color = '#334afd' } = props; // Default color if not provided

  // Define the Tailwind CSS classes
  const badgeClasses = `
    inline-block px-2 py-1 text-xs font-bold rounded-lg text-white
  `;

  return <span className={badgeClasses} style={{ backgroundColor: color }}>{value}</span>;
}
