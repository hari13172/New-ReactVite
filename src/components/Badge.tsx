export default function Badge(props: { value: string }) {
  // Destructure the props
  const { value } = props;

  // Define the Tailwind CSS classes
  const badgeClasses = `
    inline-block px-2 py-1 text-xs font-bold rounded-lg bg-primary text-white bg-[#334afd]
  `;

  return <span className={badgeClasses}>{value}</span>;
}
