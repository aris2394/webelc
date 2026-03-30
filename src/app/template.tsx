export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page-transition w-full min-h-screen">
      {children}
    </div>
  );
}
