"use client";

import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary/50">
      <div className="container py-6 text-center text-muted-foreground">
        <p>&copy; {year} Alphabet Adventures. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
