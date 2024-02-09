/**
 * Footer component.
 */
export default function Footer() {
  return (
    <footer className="text-sm text-center p-8">
      &copy; 2023-{new Date().getFullYear()} - Next.js WordPress by{' '}
      <a href="/">Julien Estanis</a>
    </footer>
  )
}
