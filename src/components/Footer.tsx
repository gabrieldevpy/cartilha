"use client";

import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary/50">
      <div className="container py-6 text-center text-muted-foreground">
        <p>&copy; {year || new Date().getFullYear()} Alphabet Adventures. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
