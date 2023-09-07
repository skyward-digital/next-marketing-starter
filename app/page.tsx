import { Hero } from '#/ui/components/Hero';

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center">
      <Hero
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Hero
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
        button={{ link: '#', label: 'Next' }}
      />
    </main>
  );
}
