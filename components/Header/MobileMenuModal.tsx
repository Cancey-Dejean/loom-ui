import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { MobileMenu } from "./MobileMenu"

export default function MyModal({ isOpen, handleMobileMenu }) {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleMobileMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all flex flex-col justify-center">
                  <div className="h-full overflow-x-scroll pt-[var(--thd-nav-h-sm)]">
                    {/* Mobile Menu */}
                    <MobileMenu />

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Et recusandae architecto porro, modi officiis incidunt
                      eius perferendis nihil voluptate corporis expedita minus
                      dolorum nam autem quae consequatur optio enim cumque sed
                      velit facere ipsum. Veniam alias aperiam, ipsam ex eos
                      voluptas animi quibusdam omnis pariatur possimus libero
                      numquam unde, suscipit fugit ab rerum dignissimos
                      excepturi perspiciatis voluptate qui iusto maiores nobis
                      quisquam saepe? Neque, quia nam! Modi placeat quisquam
                      eligendi distinctio magnam, atque cum eveniet recusandae
                      doloribus quidem et nam, repudiandae deserunt autem. Eum
                      soluta unde aut magni voluptatum voluptatem excepturi
                      dolore dolores culpa, doloribus accusantium temporibus at
                      hic sint. Quaerat quas, esse quo nesciunt aut iste sit
                      enim molestiae quod sint repellendus repellat, laborum,
                      facilis voluptate non harum unde delectus omnis? Dolorem
                      reiciendis distinctio nihil rerum cumque soluta officia
                      dolore ut maxime impedit, voluptatibus sed ratione
                      pariatur aliquid corrupti adipisci est suscipit dolor
                      deleniti voluptate! Nulla voluptate corrupti sequi,
                      obcaecati laboriosam sint atque labore. Consequuntur
                      deserunt doloribus assumenda sapiente odit eligendi
                      quaerat ad sunt adipisci consectetur laudantium, quis
                      dicta non id, ipsam, labore quibusdam maxime quia deleniti
                      dolorum voluptatum. Accusamus eligendi dicta sunt,
                      molestias corporis, hic laboriosam sequi minus, ducimus
                      alias temporibus excepturi quae harum necessitatibus velit
                      in ex facilis tempora illo? Sit earum vero accusantium
                      alias necessitatibus. Reprehenderit explicabo, aut,
                      placeat sed blanditiis excepturi nemo ad maxime corporis
                      totam repellat voluptatibus modi ullam fugit inventore?
                      Magnam vitae quis veniam exercitationem nam hic nesciunt
                      impedit aperiam ipsa mollitia nemo est illo quia aliquam
                      atque sed at eligendi, quos animi. Voluptate tempora ad,
                      inventore unde quod voluptas, odio asperiores laborum
                      libero laboriosam vero dicta quos similique velit quo
                      culpa qui provident aut iusto cumque eaque, corporis
                      magnam illum! Distinctio deleniti amet quod nemo minima
                      architecto ab quisquam laborum unde exercitationem
                      officia, consequuntur, incidunt maiores modi accusamus
                      omnis ex iure ut. Iusto animi saepe tenetur rem ex a
                      adipisci libero dolore natus, iure, cupiditate vero
                      corporis, nisi ab. Consectetur odio fugit quo facere
                      labore cumque ratione ab nobis dolorem, aut necessitatibus
                      tempora ea. Cumque, voluptates. Qui sint reiciendis soluta
                      maxime asperiores repellat consequuntur, cum quisquam,
                      recusandae rem ullam explicabo quidem omnis quod enim
                      facilis minima autem dolore aliquam labore temporibus
                      neque doloremque possimus dolorem. In eum nisi quam, quis
                      eius rem temporibus doloremque ab, eligendi porro libero
                      neque debitis tempore, pariatur sint voluptate quasi
                      assumenda? Tenetur porro minus eius dolorem? Assumenda,
                      soluta? Et modi doloremque, illum similique, ullam
                      suscipit numquam pariatur fuga atque deleniti nihil non
                      porro id iure ducimus at eius! Obcaecati dolores eveniet
                      incidunt culpa ducimus odio eos reprehenderit magni ex eum
                      deserunt quia, dolore quidem veniam totam enim blanditiis
                      atque dolor voluptas debitis voluptatibus provident
                      pariatur aliquam impedit. Autem illum atque beatae
                      repellat ratione ipsum eligendi dolorem dolore veritatis
                      dicta deserunt odio cum expedita vitae perferendis
                      asperiores culpa impedit accusantium magnam porro quo, nam
                      accusamus? Atque eius culpa odio iste voluptatum modi
                      eaque odit accusamus commodi et dolores provident
                      voluptatibus veniam, nesciunt unde! Corporis, aliquam.
                      Odio laudantium, ut provident eaque optio excepturi dicta
                      soluta inventore vel incidunt aliquid. Aut, maxime. Velit
                      vero odio, quis voluptatibus sit id aliquid at optio nisi!
                      Placeat corrupti maiores commodi deleniti! Explicabo hic
                      eius esse, perferendis est, dolore laboriosam sit
                      dignissimos dolores officiis natus voluptate temporibus
                      quaerat assumenda necessitatibus ducimus molestiae dolor
                      quisquam expedita voluptas vel voluptates! Dignissimos,
                      fugit esse? Cumque quo distinctio voluptates, veritatis
                      aut eveniet sunt nulla eum numquam suscipit repellendus
                      aliquam reiciendis laborum possimus in blanditiis adipisci
                      dolores, eius perspiciatis ad iure! Ad quibusdam animi
                      molestias ipsam blanditiis ullam similique quam quae
                      pariatur a quos, suscipit quisquam aspernatur nisi
                      aliquid. Magnam rerum dicta mollitia vero iure amet! Modi
                      sed aspernatur, tenetur quidem eius, minima aperiam eum
                      architecto at qui dolores quasi accusantium magnam eaque?
                      Quod iste nesciunt atque non ipsa earum culpa enim
                      deserunt optio dignissimos, ducimus in quae vitae harum!
                      Suscipit quam, veritatis, beatae soluta, ipsa mollitia
                      quidem ullam quaerat vel odio nisi! In nostrum aperiam
                      consectetur. Numquam enim molestias, veniam similique
                      culpa iusto esse ratione veritatis eos neque asperiores
                      saepe ipsa cupiditate, odit magnam error! Id enim
                      quibusdam nemo earum beatae distinctio expedita
                      perferendis dicta, ex aspernatur nihil eveniet ullam.
                      Reiciendis perspiciatis laboriosam minus voluptate
                      pariatur? Aspernatur cum blanditiis cumque provident illo
                      voluptatibus nemo non animi iure consectetur. Error
                      voluptatibus animi dicta provident minima debitis tenetur
                      quos quidem pariatur necessitatibus saepe amet architecto
                      eaque nisi, similique ex! Modi nam nulla voluptas
                      perspiciatis minima repellat mollitia odit saepe iusto
                      ratione voluptate aspernatur repudiandae, porro alias
                      repellendus officia nihil! Iusto sapiente, rem ipsa fugiat
                      quaerat omnis laboriosam excepturi rerum nisi asperiores
                      error quae, debitis et ab temporibus velit quod, veritatis
                      ducimus eos? Ipsum dicta unde nobis itaque recusandae
                      facilis commodi qui quaerat laborum molestiae, rem,
                      perferendis blanditiis reiciendis incidunt quis neque
                      minus eaque quasi modi asperiores similique quas
                      perspiciatis odio! Architecto, soluta illum, deleniti
                      molestiae culpa porro suscipit dolores praesentium
                      inventore aut animi voluptatum id recusandae tenetur cum
                      nihil odio. Nihil et laboriosam minima repudiandae cumque
                      sed distinctio, eos similique? Eaque inventore veniam
                      fugit! Delectus quisquam corrupti quas enim atque modi
                      consequuntur ullam, earum libero odit vero illo cum,
                      quibusdam officia fuga nemo quaerat cupiditate est dolor
                      itaque. Nam incidunt iure beatae sapiente quaerat
                      provident aspernatur, similique eveniet labore vero
                      officiis voluptatum repellat corporis accusantium facere.
                      Ratione, eaque vel. Placeat quos, voluptatibus eos ut
                      officiis expedita illo illum vitae repellendus itaque
                      atque ipsam et sint explicabo eum repellat omnis voluptate
                      temporibus eaque. Neque a quidem esse ullam sint dolores
                      fuga laborum saepe, voluptas perspiciatis quia explicabo
                      dolor facere. Sint facilis ab deserunt similique,
                      assumenda quae soluta ullam placeat modi consequuntur
                      veniam corrupti rem unde impedit voluptatibus et explicabo
                      voluptatum, mollitia totam quisquam labore ipsum! Aut
                      labore doloribus tenetur voluptatem quis harum laboriosam
                      id asperiores dignissimos. Dolor molestiae sint, ipsum ut
                      perspiciatis, beatae quae, voluptatem voluptas quisquam
                      dolorum adipisci consequatur accusamus itaque? Tempora
                      aspernatur, officia vitae consequatur perspiciatis
                      voluptatum excepturi. Molestias consectetur reiciendis
                      impedit quos autem totam odio fugiat at laborum, eveniet
                      ratione libero eaque. Quidem quasi unde accusamus fugit?
                      Dicta error nam maxime reiciendis cupiditate perspiciatis
                      quisquam. Excepturi, illum cupiditate.
                    </p>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleMobileMenu}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
