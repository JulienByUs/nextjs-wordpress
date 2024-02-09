import getPageBySlug from '@/lib/queries/getPageBySlug'
import {notFound} from 'next/navigation'

/**
 * The homepage route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function Home() {
  // Fetch homepage from WordPress.
  const homepage = await getPageBySlug('accueil')

  if (!homepage) {
    notFound()
  }


  return (
    <main className="flex flex-col gap-8">
      <article className="text-center mt-10">
        <span className="text-[42px]">👋🏾</span>
        <h1 className="text-[80px] mb-3">Hello,</h1>
        <div className="text-[24px] text-[#6D7079] font-light">
          Ce portfolio est un testament du dévouement de Julien Estanis à créer des expériences numériques exceptionnelles où chaque site web est le résultat d’innombrables heures de finesse de conception et de développement méticuleux.
        </div>

        <p className="mt-20 mb-[-20px] text-[#6D7079] text([16px] font-light">Reconnu par de grandes entreprises</p>
        <section className="marquee text-white uppercase font-semibold text-lg py-1 overflow-hidden">
          <div className="marquee__inner flex space-x-2 items-center justify-center">
            {homepage.description.clients.map((client, index) => (
              <div key={index} className="marquee__part flex-shrink-0 px-4">
                <img src={client.link} alt=""/>
              </div>
            ))}
          </div>
        </section>
      </article>

    </main>
  )
}
