import MainLayout from "@/components/MainLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <MainLayout>{children}</MainLayout>
    </main>
  );
}
