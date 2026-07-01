import { Link, useParams } from 'react-router-dom'
import { getTeamMember } from '../data/team'

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.18-.02-2.14-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.96 10.96 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.39-2.69 5.36-5.25 5.65.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.66.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7.5 0H14v1.71h.05c.5-.92 1.71-1.9 3.52-1.9 3.76 0 4.45 2.47 4.45 5.69V21h-4v-5.41c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.08 1.41-2.08 2.86V21h-4V9Z" />
    </svg>
  )
}

export default function TeamMember() {
  const { slug } = useParams()
  const member = getTeamMember(slug)

  if (!member) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          to="/team"
          className="font-mono text-xs tracking-widest text-chronix-accent hover:text-chronix-glow transition-colors"
        >
          ZURÜCK ZUM TEAM
        </Link>
        <h1 className="font-mono text-4xl text-chronix-glow text-glow mt-8">
          Profil nicht gefunden
        </h1>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <Link
        to="/team"
        className="font-mono text-xs tracking-widest text-chronix-accent hover:text-chronix-glow transition-colors"
      >
        ZURÜCK ZUM TEAM
      </Link>

      <section className="mt-8 border border-chronix-blue/40 bg-chronix-navy/30 rounded-lg p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-glow-blue"
          />

          <div className="flex-1">
            <h1 className="font-mono text-4xl md:text-5xl text-chronix-glow text-glow mb-3">
              {member.name}
            </h1>
            <p className="text-chronix-accent text-sm tracking-wide mb-4">
              {member.role}
            </p>
            <p className="text-slate-300 text-xl leading-relaxed mb-6">
              {member.motto}
            </p>

            <div className="flex gap-4">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on GitHub`}
                  className="text-slate-400 hover:text-chronix-glow transition-colors"
                >
                  <GitHubIcon />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-slate-400 hover:text-chronix-glow transition-colors"
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t border-chronix-blue/30 pt-10">
        <h2 className="font-mono text-2xl text-chronix-glow mb-6">
          Über {member.name}
        </h2>
        <div className="space-y-5 text-slate-400 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae turpis sed neque facilisis gravida. Donec nec augue in lorem
            posuere posuere. Praesent consequat, arcu vitae tincidunt placerat,
            justo nisl luctus sem, vitae dignissim mi neque sed urna.
          </p>
          <p>
            Curabitur at massa vel lacus interdum fermentum. Sed a nisl at
            tortor pretium consequat. Morbi vitae augue non erat tristique
            viverra. Duis non lectus ac lorem cursus tincidunt in vitae nibh.
          </p>
          <p>
            Aenean finibus, ipsum sed faucibus tincidunt, justo sem gravida
            lorem, et luctus mi neque id nibh. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </section>
    </div>
  )
}
