import tyronImg from '../assets/TyronJeremyKordonPic.jpg'
import kianoImg from '../assets/KianoPolet.jpg'
import davidImg from '../assets/DavidKrnetic.jpg'

export const team = [
  {
    slug: 'kiano-polet',
    name: 'Kiano Polet',
    role: 'Co-Founder, CTO & Head of IT',
    motto: 'Coding, learning & building.',
    image: kianoImg,
    github: 'https://github.com/kpolet2010-hue',
    linkedin: 'https://www.linkedin.com/in/kiano-polet-10ba1b3bb/',
  },
  {
    slug: 'david-krnetić',
    name: 'David Krnetić',
    role: 'Co-Founder, CEO & Developer',
    motto: 'Leadership is Service.',
    bio: [
      'David Krnetić ist am 5. Mai 2009 geboren und ist von Beruf Informatiker mit Fokus auf Softwareentwicklung. Neben seiner Lehre arbeitet er an eigenen Projekten, von Full-Stack-Anwendungen bis hin zu Cloud-Infrastruktur, und vertieft dabei laufend sein Wissen in Bereichen wie Systemarchitektur und objektorientierte Logik.',
      'Ihn treibt an, Dinge nicht nur zu verstehen, sondern praktisch nachzubauen: praktisch, lösungsorientiert und mit einem Blick fürs Ganze.',
      {
        text: 'Langfristig möchte David Krnetić sein technisches Know-how nutzen, um eigene Ideen umzusetzen und zu leiten, sei es im Rahmen seiner Ausbildung und des Unternehmens oder darüber hinaus. Dies wiederspiegelt auch sein Motto:',
        mottoLine: '"Leadership is a Service."',
      },
    ],
    image: davidImg,
    github: 'https://github.com/Krneee',
    linkedin: 'https://www.linkedin.com/in/david-krneti%C4%87-246b78419',
  },
  {
    slug: 'tyron-jeremy-kordon',
    name: 'Tyron Jeremy Kordon',
    role: 'Co-Founder, CMO & Developer',
    motto: 'Walk your own Path.',
    bio: [
      'Tyron Jeremy Kordon ist am 30. August 2009 geboren und absolviert derzeit eine Lehre als Applikationsentwickler. Bereits während seiner Ausbildung hat er in zahlreichen Projekten mitgewirkt und dabei fundierte praktische Erfahrung in der Softwareentwicklung gesammelt.',
      'Er zeichnet sich durch eine ausgeprägte Teamfähigkeit aus und bringt sein technisches Know-how gezielt in die gemeinsame Projektarbeit ein. Für ihn steht dabei stets im Vordergrund, hochwertige und durchdachte Software zu entwickeln, die echten Mehrwert schafft.',
      {
        text: 'Getrieben von der Leidenschaft, stetig dazuzulernen und sein Wissen praktisch anzuwenden, verfolgt Tyron Jeremy Kordon konsequent seinen eigenen Weg, sei es in der Ausbildung, im Unternehmen oder in persönlichen Projekten. Dies spiegelt sich auch in seinem Motto wider:',
        mottoLine: '"Walk your own Path."',
      },
    ],
    image: tyronImg,
    github: 'https://github.com/Tyron-Kordon',
    linkedin: 'https://www.linkedin.com/in/tyron-kordon-8b223b3b5/',
  },
]

export function getTeamMember(slug) {
  return team.find((member) => member.slug === slug)
}
