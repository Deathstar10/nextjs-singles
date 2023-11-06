"use client";

export default function Column({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid">
      <h1>{name}</h1>
      <div>{children}</div>
    </div>
  );
}
