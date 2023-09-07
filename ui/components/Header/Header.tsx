import { Logo } from '#/ui/assets/Logo';
import Link from 'next/link';

type NavLink = {
  link: string;
  label: string;
};

type HeaderProps = {
  navigation: NavLink[];
};

export const Header = ({ navigation }: HeaderProps) => {
  return (
    <header className="container z-10 flex items-center justify-between py-4 md:px-24">
      <Link href="/" className="w-30">
        <Logo />
      </Link>
      <nav>
        <ul className="flex gap-x-3 sm:gap-x-8">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
