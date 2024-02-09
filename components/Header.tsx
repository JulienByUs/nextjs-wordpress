import getMenuBySlug from '@/lib/queries/getMenuBySlug'
import Link from 'next/link'

/**
 * Header component.
 */
export default async function Header() {
  const menu = await getMenuBySlug('header');

  return (
    <header className="my-3 max-w-[800px]">

      <nav className="max-h-[80px] flex flex-col rounded-[5px] border-[1px] border-[#222225] bg-[#111113]">
        <section className="h-[40px] flex justify-center gap-8 text-sm items-center bg-[#111113]">
          {!!menu &&
            menu.menuItems.edges.map((item) => (
              <Link
                key={item.node.databaseId} href={item.node.uri}>
                {item.node.label}
              </Link>
            ))}
        </section>
        <section className="h-[40px] bg-[#151618] flex items-center justify-center">
          AAA
        </section>
      </nav>

    </header>
  )
}
