export type LegacyRedirect = {
  from: string
  to: string
  reason: string
}

export const legacyRedirects: LegacyRedirect[] = [
  {
    from: "/events/",
    to: "/dogadaji/",
    reason: "Stari engleski indeks događaja preusmjerava na novu regionalnu rutu.",
  },
  {
    from: "/event/meetup-rab/",
    to: "/dogadaji/meetup-rab/",
    reason: "Stara WordPress ruta događaja preusmjerava na statičku stranicu događaja.",
  },
  {
    from: "/never-stop-learning/",
    to: "/clanci/never-stop-learning/",
    reason: "Stara WordPress ruta članka preusmjerava na novu arhivu članaka.",
  },
  {
    from: "/borba-protiv-monetarnog-kolonijalizma-pomocu-otvorenog-koda/",
    to: "/clanci/borba-protiv-monetarnog-kolonijalizma-pomocu-otvorenog-koda/",
    reason: "Stara WordPress ruta članka preusmjerava na novu arhivu članaka.",
  },
  {
    from: "/niko-ne-moze-zabraniti-bitcoin/",
    to: "/clanci/niko-ne-moze-zabraniti-bitcoin/",
    reason: "Stara WordPress ruta članka preusmjerava na novu arhivu članaka.",
  },
  {
    from: "/zasto-je-vazna-decentralizacija-bitcoina/",
    to: "/clanci/zasto-je-vazna-decentralizacija-bitcoina/",
    reason: "Stara WordPress ruta članka preusmjerava na novu arhivu članaka.",
  },
  {
    from: "/bitcoin-privatnost-najbolje-prakse/",
    to: "/clanci/bitcoin-privatnost-najbolje-prakse/",
    reason: "Stara WordPress ruta članka preusmjerava na novu arhivu članaka.",
  },
  {
    from: "/bitcoin-je-vrijeme/",
    to: "/clanci/bitcoin-je-vrijeme/",
    reason: "Stara WordPress ruta članka preusmjerava na novu arhivu članaka.",
  },
]
