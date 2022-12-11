import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="One of a kind SAAS (Sapar as a service)"
    description="Cutting Edge Cuts is the ultimate solution for tech professionals who want to look sharp without leaving the office. Our mobile salon brings experienced hairdressers to your workplace, where they provide high-quality haircuts and other styling services in a seamless, hassle-free way. With our hair-disaster-recovery plan and bug-free hair guarantee, you can book a visit from Cutting Edge Cuts with confidence. Plus, our zero-trust hair security ensures that your employees' hair is safe and secure at all times. Upgrade your office look today with Cutting Edge Cuts."
  >
    <VerticalFeatureRow
      title="Secure"
      description="At Cutting Edge Cuts, we take hair security seriously. We use state-of-the-art technology to protect your employees' hair, ensuring that it is safe and secure at all times. Book a visit from our mobile salon with confidence, knowing that your employees' hair will be in good hands with our experienced team."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Plug and play"
      description="Our team sets up quickly and efficiently at your office, providing high-quality haircuts and other services with minimal disruption to your workplace."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Scalable"
      description="Our services are scalable to meet the needs of companies of any size, from small startups to large corporations"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="User-friendly"
      description="Our booking process is simple and intuitive, making it easy for your employees to schedule a haircut with our mobile salon"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="High availability"
      description="Our mobile salon is available to visit your office at a time that works for you, ensuring that your employees can get a haircut without interrupting their workday"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
