// import React, { useState } from 'react';
//
// interface TestimonyProps {
//   authorImage: string;
//   authorName: string;
//   authorTitle: string;
//   authorTestimony: string;
// }
//
// interface TestimonyProps {
//   authorImage: string;
//   authorName: string;
//   authorTitle: string;
//   authorTestimony: string;
// }
//
// const Testimony: React.FC<TestimonyProps> = ({
//   authorImage,
//   authorName,
//   authorTitle,
//   authorTestimony,
// }) => {
//   return (
//     <div className="border rounded p-4 flex flex-col items-center transition: all 0.3s ease-in-out">
//       <img
//         className="h-24 w-24 rounded-full mb-2"
//         src={authorImage}
//         alt={authorName}
//       />
//       <h3 className="text-xl font-bold mb-1">{authorName}</h3>
//       <p className="text-gray-600 text-sm mb-3">{authorTitle}</p>
//       <p className="text-gray-700 text-base">{authorTestimony}</p>
//     </div>
//   );
// };
//
// export const TestimonialSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonials = [
//     {
//       authorImage: 'https://via.placeholder.com/150',
//       authorName: 'Jane Doe',
//       authorTitle: 'CEO at Acme Corp',
//       authorTestimony:
//         "This product is amazing! I can't believe how much it has helped my company.",
//     },
//     {
//       authorImage: 'https://via.placeholder.com/150',
//       authorName: 'John Doe',
//       authorTitle: 'CTO at Foobar Inc',
//       authorTestimony:
//         "This product has saved us so much time and money. It's a game changer.",
//     },
//   ];
//
//   const handlePrev = () => {
//     setCurrentIndex(
//       currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
//     );
//   };
//
//   const handleNext = () => {
//     setCurrentIndex(
//       currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
//     );
//   };
//
//   return (
//     <div className="relative rounded-lg shadow-lg">
//       <button className="absolute left-0 top-0 mt-12 ml-4" onClick={handlePrev}>
//         &lt;
//       </button>
//       <button
//         className="absolute right-0 top-0 mt-12 mr-4"
//         onClick={handleNext}
//       >
//         &gt;
//       </button>
//       <Testimony
//         authorImage={testimonials[currentIndex].authorImage}
//         authorName={testimonials[currentIndex].authorName}
//         authorTitle={testimonials[currentIndex].authorTitle}
//         authorTestimony={testimonials[currentIndex].authorTestimony}
//       />
//     </div>
//   );
// };

import React from 'react';

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';

type Props = {
  avatar: string;
  name: string;
  profession: string;
  testimonial: string;
  rating: number;
};

const Testimonial: React.FC<Props> = (props) => {
  const { avatar, name, profession, testimonial, rating } = props;

  return (
    <div>
      <img
        src={avatar}
        alt={name}
        className="rounded-circle shadow-1-strong mb-4 mx-auto"
        style={{ width: '150px' }}
      />
      <h5 className="mb-3">{name}</h5>
      <p>{profession}</p>
      <p className="text-muted">
        <MDBIcon fas icon="quote-left" className="pe-2" />
        {testimonial}
      </p>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <MDBIcon fas icon="star" size="sm" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export const TestimonialSlider = () => {
  const testimonials = [
    {
      avatar:
        'https://media-exp1.licdn.com/dms/image/C4D03AQExXZCVx00wow/profile-displayphoto-shrink_800_800/0/1635771609175?e=1676505600&v=beta&t=cQcdSPg3xrVU71EP2QIbfMDCojuDWswDjQk6Ovmxwq4',
      name: 'Idan C',
      profession: 'Data scientist at Mesh',
      testimonial:
        "As a data scientist with curly hair, I'm used to dealing with disasters – whether it's a faulty algorithm, a broken model, or a missed deadline. But the one disaster I never thought I'd have to deal with was a bad haircut. That was, until I heard about Cutting Edge Cuts and their hair disaster recovery plan. I decided to give them a try. They came to my office and gave me a perfect haircut without interrupting my workday. It was so convenient and the hairdressers were professional and friendly. They understood my curly hair and gave me a cut that made my curls look amazing. And if something went wrong, I knew I was covered by the hair disaster recovery plan. I'm a happy customer and I highly recommend Cutting Edge Cuts to any tech professional with curly hair who wants to look sharp and stay focused at work, even in the face of unexpected disasters.",
      rating: 5,
    },
    {
      avatar:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFhTkBMwcQGhw/profile-displayphoto-shrink_800_800/0/1624288067638?e=2147483647&v=beta&t=aiMrfO0QI7O71DFmhBiqkiXO15IO_tPKe2cfULhDzFI',
      name: 'Lior k',
      profession: 'Developer at Lusha',
      testimonial:
        "As a developer, I used to spend a lot of time worrying about my hair. It would always get in my face and interrupt my work. I would try to fix it myself, but I never seemed to get it right. It was a real problem for me. But then I heard about Cutting Edge Cuts and their bug-free hair guarantee. I decided to give them a try. They came to my office and gave me a perfect haircut without interrupting my workday. It was so convenient and the hairdressers were professional and friendly. My hair no longer gets in my face and I can focus on my work. I'm a happy customer and I highly recommend Cutting Edge Cuts to any tech professional who wants to look sharp and stay focused at work.",
      rating: 5,
    },
    {
      avatar:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFTtROHPghL1g/profile-displayphoto-shrink_800_800/0/1627029197523?e=1676505600&v=beta&t=ZFdgXMDi94c9ZZgPE-mlEu8whO6Sa7OxxocOKeldELM',
      name: 'Ariel T',
      profession: 'Project Manager at Similar Web',
      testimonial:
        "As a project manager, I know that Agile is all about delivering value quickly and efficiently. But when my team's haircuts started getting in the way of their work, it felt like our project was stuck in a sprint backlog. That was, until I heard about Cutting Edge Cuts. I decided to give them a try. They came to our office and gave my team perfect haircuts without interrupting our workday. It was so convenient and the hairdressers were professional and friendly. My team looked and felt great, and they could focus on their work without being distracted by bad haircuts. Our project started moving again, and we were able to deliver value to our stakeholders. I'm a happy customer and I highly recommend Cutting Edge Cuts to any tech team who wants to look sharp and stay focused at work, even in the face of unexpected distractions.",
      rating: 5,
    },
  ];

  return (
    <MDBContainer className="my-5">
      <h3 className="mb-4 text-center text-3xl font-bold text-gray-700">
        What Our Customers Say
      </h3>
      <MDBCarousel showControls dark interval={15000} pause={true}>
        <MDBCarouselInner>
          {testimonials.map((testimonial, index) => (
            <MDBCarouselItem
              key={index}
              className={index === 0 ? 'active text-center' : 'text-center'}
            >
              <Testimonial {...testimonial} />
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};
