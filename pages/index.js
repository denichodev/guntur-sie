import Head from "next/head";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  let { title, cats } = attributes;

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main className="bg-black h-screen overflow-auto pb-8 sm:pb-16">
        <div className="container mx-auto relative">
          <header className="py-4 sm:py-8 px-4 flex justify-between">
            <h1 className="text-white font-display font-bold text-2xl md:text-4xl subpixel-antialiased">
              Guntur Sie
            </h1>
            <nav className="pt-1 md:text-lg md:pt-2">
              <ol className="font-display flex">
                <li className="px-1 md:px-2 text-white">Projects</li>
                <li className="px-1 md:px-2 text-gray">About</li>
              </ol>
            </nav>
          </header>

          <div className="pb-4 sm:pb-8">
            <div className="p-4">
              <h3 className="text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                Why Does Something Really Matters?
              </h3>
              <h4 className="text-gray font-body text-sm sm:text-base sm:pt-2">
                Well, it probably isn't
              </h4>
            </div>
            <div class="relative overflow-hidden pb-1/3 sm:rounded-md">
              <img
                className="absolute h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80"
              />
            </div>
          </div>

          <div className="pb-8 sm:pb-8">
            <div className="p-4">
              <h3 className="text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                Brand Designing 101
              </h3>
              <h4 className="text-gray font-body text-sm sm:text-base sm:pt-2">
                Harder than we expect
              </h4>
            </div>
            <div class="relative overflow-hidden pb-1/3 sm:rounded-md">
              <img
                className="absolute h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1530712024539-ecd73dfb1c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
          </div>

          <div className="pb-8 sm:pb-8">
            <div className="p-4">
              <h3 className="text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                Lighting and Coloring Explained
              </h3>
              <h4 className="text-gray font-body text-sm sm:text-base sm:pt-2">
                Blah blah blah
              </h4>
            </div>
            <div class="relative overflow-hidden pb-1/3 sm:rounded-md">
              <img
                className="absolute h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1497015455546-1da71faf8d06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
