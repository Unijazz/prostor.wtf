const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="cs">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Prostor Developer Tools™</title>
      <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default Layout;
