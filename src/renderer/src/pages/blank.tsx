import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'

export function Blank() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold text-xs">
          TABLE OF CONTENTS
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Prisma</ToC.Link>
            <ToC.Link>Testes</ToC.Link>
            <ToC.Link>Deploy</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        <Editor />
      </section>
    </main>
  )
}
