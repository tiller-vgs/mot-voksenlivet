function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full m-0 bg-background text-foreground">
      {children}
    </main>
  );
}

export default MainContainer;
