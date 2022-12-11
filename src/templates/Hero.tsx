import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const callToAction = (attr: any) => {
  return (
    <Link href="https://creativedesignsguru.com/category/nextjs/">
      <a className="bg-gray-100">
        <Button {...attr}>Contact our hair engineer now!</Button>
      </a>
    </Link>
  );
};

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {callToAction({ s: true })}
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Cutting Edge \n'}
            <span className="text-primary-500">Haircut as a service</span>
          </>
        }
        description='Enjoy a hassle-free, professional "Cutting Edge" haircut in the comfort of your own office.'
        button={callToAction({ xl: true })}
      />
    </Section>
  </Background>
);

export { Hero };
