import { useState } from "react";
import fanpactLogo from "@/assets/FanPact_Logo1.png";
import LedgerTab from "@/components/mizzou/nil/LedgerTab";
import NSSTab from "@/components/mizzou/nil/NSSTab";
import NILGoTab from "@/components/mizzou/nil/NILGoTab";
import EnterpriseTab from "@/components/mizzou/nil/EnterpriseTab";
import TeamRosterReport from "@/components/mizzou/nil/TeamRosterReport";

type Player = {
  id: string;
  initials: string;
  firstName: string;
  lastName: string;
  position: string;
  sport: string;
};

const PLAYERS: Player[] = [
  { id: "kr", initials: "KR", firstName: "Kaylen", lastName: "Rush", position: "Defensive Specialist", sport: "Women's Volleyball" },
  { id: "mt", initials: "MT", firstName: "Marcus", lastName: "Thompson", position: "PG", sport: "Basketball" },
  { id: "dw", initials: "DW", firstName: "D.", lastName: "Washington", position: "DT", sport: "Football" },
  { id: "as", initials: "AS", firstName: "Aaliyah", lastName: "Simmons", position: "MF", sport: "Soccer" },
];

type TabKey = "ledger" | "nss" | "nilgo" | "enterprise";

const TABS: { key: TabKey; label: string; icon: JSX.Element }[] = [
  {
    key: "ledger",
    label: "Ledger",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    key: "nss",
    label: "NSS",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8" />
        <line x1="12" y1="13" x2="12" y2="9" />
        <line x1="12" y1="13" x2="15" y2="15" />
        <line x1="9" y1="2" x2="15" y2="2" />
      </svg>
    ),
  },
  {
    key: "nilgo",
    label: "NIL GO",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
  {
    key: "enterprise",
    label: "Enterprise",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <line x1="3" y1="13" x2="21" y2="13" />
      </svg>
    ),
  },
];

export default function MizzouNILDashboard() {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>("kr");
  const [rosterSelected, setRosterSelected] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("ledger");

  const selectedPlayer = PLAYERS.find((p) => p.id === selectedPlayerId);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Top header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0f1c2e] text-white">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img src={fanpactLogo} alt="FanPact" className="h-8 w-auto object-contain" />
            <span className="font-semibold tracking-tight">FanPact</span>
          </div>
          <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium">
            Mizzou Collective · 2024–25
          </div>
        </div>

        {/* Player selector */}
        <div className="border-t border-white/10 bg-[#0f1c2e]">
          <div className="flex gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PLAYERS.map((p) => {
              const active = !rosterSelected && selectedPlayerId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPlayerId(p.id);
                    setRosterSelected(false);
                  }}
                  className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium transition-colors ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-500 border-gray-300"
                  }`}
                >
                  {p.initials} · {p.lastName}
                </button>
              );
            })}
            <button
              onClick={() => setRosterSelected(true)}
              className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium transition-colors ${
                rosterSelected
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-gray-500 border-gray-300"
              }`}
            >
              Team Roster Report
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header (logo row ~56px + selector row ~44px) */}
      <div className="h-[100px]" />

      {/* Content */}
      <main className="px-4 py-4">
        <div className="mb-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
          <div className="text-[10px] uppercase tracking-wide text-slate-400 font-semibold">
            {rosterSelected ? "View" : "Selected Athlete"}
          </div>
          <div className="mt-0.5 text-base font-semibold text-slate-900">
            {rosterSelected
              ? "Team Roster Report"
              : `${selectedPlayer?.firstName} ${selectedPlayer?.lastName} · ${selectedPlayer?.position} · ${selectedPlayer?.sport}`}
          </div>
        </div>

        {rosterSelected ? (
          <TeamRosterReport
            onSelectPlayer={(id) => {
              setSelectedPlayerId(id);
              setRosterSelected(false);
              setActiveTab("ledger");
            }}
          />
        ) : (
          <>
            {activeTab === "ledger" && (
              <LedgerTab
                playerName={`${selectedPlayer?.firstName} ${selectedPlayer?.lastName}`}
              />
            )}
            {activeTab === "nss" && (
              <NSSTab
                playerName={`${selectedPlayer?.firstName} ${selectedPlayer?.lastName}`}
              />
            )}
            {activeTab === "nilgo" && (
              <NILGoTab
                playerName={`${selectedPlayer?.firstName} ${selectedPlayer?.lastName}`}
              />
            )}
            {activeTab === "enterprise" && <EnterpriseTab />}
          </>
        )}
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-slate-200 bg-white">
        {TABS.map((t) => {
          const active = activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`flex flex-1 flex-col items-center justify-center gap-1 py-2 border-t-2 transition-colors ${
                active
                  ? "border-blue-600 text-blue-600 bg-white"
                  : "border-transparent text-gray-400 bg-gray-50"
              }`}
            >
              {t.icon}
              <span className="text-[10px] font-semibold uppercase tracking-wide">{t.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
