function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-full m-0 bg-background text-foreground">
      {children}
    </main>
  );
}

export default MainContainer;
