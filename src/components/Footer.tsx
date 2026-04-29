import { Separator } from "@/components/ui/separator"
import { CONTACT_EMAIL, footerLinks } from "@/data/site"

export function Footer() {
  const midpoint = Math.ceil(footerLinks.length / 2)

  return (
    <footer className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
      <Separator className="mb-8" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            DvadesetJedan
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            Regionalni Bitcoin-only signal za Balkan. Lokalni jezik. Otvorena
            zajednica.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
            Sadržaj je obrazovne naravi i ne predstavlja financijsko, porezno ni
            pravno savjetovanje.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {[footerLinks.slice(0, midpoint), footerLinks.slice(midpoint)].map(
            (group, index) => (
              <ul
                key={index}
                className="space-y-3 text-sm text-muted-foreground"
              >
                {group.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      rel={item.external ? "noreferrer" : undefined}
                      target={item.external ? "_blank" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {index === 1 && CONTACT_EMAIL ? (
                  <li id="kontakt">
                    <a href={`mailto:${CONTACT_EMAIL}`}>Kontakt</a>
                  </li>
                ) : null}
              </ul>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
