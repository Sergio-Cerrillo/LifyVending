"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Large floating orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-[100px] animate-float-slow" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-accent/30 to-primary/30 rounded-full blur-[100px] animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating particles/stars */}
      <div className="absolute bottom-0 left-[10%] w-1 h-1 bg-primary rounded-full animate-particle" style={{ animationDuration: "20s", animationDelay: "0s" }} />
      <div className="absolute bottom-0 left-[25%] w-1.5 h-1.5 bg-primary/80 rounded-full animate-particle" style={{ animationDuration: "18s", animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-[40%] w-1 h-1 bg-secondary rounded-full animate-particle" style={{ animationDuration: "22s", animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-[55%] w-2 h-2 bg-primary/70 rounded-full animate-particle" style={{ animationDuration: "19s", animationDelay: "1s" }} />
      <div className="absolute bottom-0 left-[70%] w-1 h-1 bg-accent rounded-full animate-particle" style={{ animationDuration: "21s", animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-[85%] w-1.5 h-1.5 bg-primary/90 rounded-full animate-particle" style={{ animationDuration: "17s", animationDelay: "5s" }} />
      <div className="absolute bottom-0 left-[15%] w-1 h-1 bg-secondary/80 rounded-full animate-particle" style={{ animationDuration: "23s", animationDelay: "6s" }} />
      <div className="absolute bottom-0 left-[30%] w-2 h-2 bg-primary rounded-full animate-particle" style={{ animationDuration: "20s", animationDelay: "8s" }} />
      <div className="absolute bottom-0 left-[50%] w-1 h-1 bg-accent/80 rounded-full animate-particle" style={{ animationDuration: "19s", animationDelay: "7s" }} />
      <div className="absolute bottom-0 left-[65%] w-1.5 h-1.5 bg-primary/70 rounded-full animate-particle" style={{ animationDuration: "21s", animationDelay: "9s" }} />
      <div className="absolute bottom-0 left-[80%] w-1 h-1 bg-secondary rounded-full animate-particle" style={{ animationDuration: "18s", animationDelay: "10s" }} />
      <div className="absolute bottom-0 left-[95%] w-2 h-2 bg-primary/80 rounded-full animate-particle" style={{ animationDuration: "22s", animationDelay: "11s" }} />
      <div className="absolute bottom-0 left-[5%] w-1 h-1 bg-accent rounded-full animate-particle" style={{ animationDuration: "20s", animationDelay: "12s" }} />
      <div className="absolute bottom-0 left-[20%] w-1.5 h-1.5 bg-primary/90 rounded-full animate-particle" style={{ animationDuration: "19s", animationDelay: "13s" }} />
      <div className="absolute bottom-0 left-[35%] w-1 h-1 bg-secondary/80 rounded-full animate-particle" style={{ animationDuration: "21s", animationDelay: "14s" }} />
      <div className="absolute bottom-0 left-[45%] w-2 h-2 bg-primary rounded-full animate-particle" style={{ animationDuration: "18s", animationDelay: "15s" }} />
      <div className="absolute bottom-0 left-[60%] w-1 h-1 bg-accent/70 rounded-full animate-particle" style={{ animationDuration: "22s", animationDelay: "16s" }} />
      <div className="absolute bottom-0 left-[75%] w-1.5 h-1.5 bg-primary/80 rounded-full animate-particle" style={{ animationDuration: "20s", animationDelay: "17s" }} />
      <div className="absolute bottom-0 left-[90%] w-1 h-1 bg-secondary rounded-full animate-particle" style={{ animationDuration: "19s", animationDelay: "18s" }} />
      <div className="absolute bottom-0 left-[12%] w-2 h-2 bg-primary/70 rounded-full animate-particle" style={{ animationDuration: "21s", animationDelay: "19s" }} />

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg animate-rotate-slow" />
      <div
        className="absolute bottom-20 right-10 w-16 h-16 border-2 border-secondary/20 rounded-full animate-rotate-slow"
        style={{ animationDirection: "reverse" }}
      />
    </div>
  )
}
