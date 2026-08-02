import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center py-20 px-6 text-center relative z-10">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          {"//"} ERROR 404
        </span>
        <h1 className="font-display text-text-primary">Page Not Found</h1>
        <p className="text-text-secondary text-body-large">
          Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>
        <Button href="/" variant="primary" size="lg">
          Kembali ke Beranda
        </Button>
      </div>
    </main>
  );
}
