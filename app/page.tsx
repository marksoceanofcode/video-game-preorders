import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-50 dark:bg-black">
      <section className="h-screen bg-[url(/images/metroid-ravenous.webp)] bg-center bg-cover w-full"></section>
      <section className="h-screen bg-[url(/images/stellar-balde-complete-edition.webp)] bg-center bg-cover w-full"></section>
    </main>
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

    //   </main>
    // </div>
  );
}
