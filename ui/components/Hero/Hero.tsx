import { Button } from '../Button';

type HeroProps = {
  title: string;
  description?: string;
  button?: {
    label: string;
    link: string;
  };
};

export const Hero = ({ title, description, button }: HeroProps) => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-20">
      <div className="container flex max-w-2xl flex-col items-start gap-6">
        <h2 className="text-7xl font-bold">{title}</h2>
        {description && <p className="text-2xl">{description}</p>}
        {button && <Button href={button.link}>{button.label}</Button>}
      </div>
    </section>
  );
};
