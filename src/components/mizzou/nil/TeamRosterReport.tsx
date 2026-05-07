type RosterAthlete = {
  id: string;
  initials: string;
  name: string;
  sport: string;
  position: string;
  nss: number;
  txCount: number;
  gross: number;
  earnings: number; // settled athlete 70% cut
  poolCount: number;
  pending: number;
};

const ROSTER: RosterAthlete[] = [
  {
    id: "kr",
    initials: "KR",
    name: "Kaylen Rush",
    sport: "Football",
    position: "WR",
    nss: 91,
    txCount: 8,
    gross: 10199.92,
    earnings: 188.64,
    poolCount: 2,
    pending: 74.98,
  },
  {
    id: "mt",
    initials: "MT",
    name: "Marcus Thompson",
    sport: "Basketball",
    position: "PG",
    nss: 84,
    txCount: 5,
    gross: 612.5,
    earnings: 392.0,
    poolCount: 1,
    pending: 39.99,
  },
  {
    id: "dw",
    initials: "DW",
    name: "D. Washington",
    sport: "Football",
    position: "DT",
    nss: 87,
    txCount: 6,
    gross: 14250.0,
    earnings: 825.5,
    poolCount: 0,
    pending: 0,
  },
  {
    id: "as",
    initials: "AS",
    name: "Aaliyah Simmons",
    sport: "Soccer",
    position: "MF",
    nss: 78,
    txCount: 4,
    gross: 248.96,
    earnings: 142.75,
    poolCount: 1,
    pending: 24.99,
  },
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

function nssClasses(score: number) {
  if (score >= 90) return "bg-emerald-100 text-emerald-700";
  if (score >= 80) return "bg-blue-100 text-blue-700";
  return "bg-slate-200 text-slate-700";
}

export default function TeamRosterReport({
  onSelectPlayer,
}: {
  onSelectPlayer: (id: string) => void;
}) {
  const totalGross = ROSTER.reduce((s, a) => s + a.gross, 0);
  const totalEarnings = ROSTER.reduce((s, a) => s + a.earnings, 0);
  const required1099s = ROSTER.filter((a) => a.earnings > 600).length;

  return (
    <div className="space-y-4">
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Summary label="Gross Platform Volume" value={fmt(totalGross)} />
        <Summary
          label="Total Athlete Earnings"
          value={fmt(totalEarnings)}
          accent="text-blue-600"
        />
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
            1099s Required
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div
              className={`text-xl font-bold ${
                required1099s > 0 ? "text-red-600" : "text-slate-900"
              }`}
            >
              {required1099s}
            </div>
            {required1099s > 0 && (
              <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-[10px] font-semibold">
                Action needed
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Roster table */}
      <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-[900px]">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wide">
              <tr>
                <Th>Athlete</Th>
                <Th>Sport · Position</Th>
                <Th>NSS</Th>
                <Th align="right">Tx</Th>
                <Th align="right">Gross Volume</Th>
                <Th align="right">Athlete 70%</Th>
                <Th align="right">Pool</Th>
                <Th align="right">Pending</Th>
                <Th>1099</Th>
                <Th>NIL GO</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ROSTER.map((a) => {
                const needs1099 = a.earnings > 600;
                return (
                  <tr
                    key={a.id}
                    onClick={() => onSelectPlayer(a.id)}
                    className="cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <Td>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                          {a.initials}
                        </div>
                        <div className="font-semibold text-slate-900">
                          {a.name}
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <span className="text-slate-600">
                        {a.sport} · {a.position}
                      </span>
                    </Td>
                    <Td>
                      <span
                        className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-[11px] font-bold ${nssClasses(
                          a.nss
                        )}`}
                      >
                        {a.nss}
                      </span>
                    </Td>
                    <Td align="right">
                      <span className="tabular-nums text-slate-700">{a.txCount}</span>
                    </Td>
                    <Td align="right">
                      <span className="tabular-nums font-semibold text-slate-900">
                        {fmt(a.gross)}
                      </span>
                    </Td>
                    <Td align="right">
                      <span className="tabular-nums font-semibold text-blue-700">
                        {fmt(a.earnings)}
                      </span>
                    </Td>
                    <Td align="right">
                      <span className="text-slate-500">{a.poolCount} pool</span>
                    </Td>
                    <Td align="right">
                      <span
                        className={`tabular-nums ${
                          a.pending > 0 ? "text-amber-700 font-medium" : "text-slate-400"
                        }`}
                      >
                        {a.pending > 0 ? fmt(a.pending) : "—"}
                      </span>
                    </Td>
                    <Td>
                      {needs1099 ? (
                        <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-[10px] font-semibold">
                          Required
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-2 py-0.5 text-[10px] font-semibold">
                          N/A
                        </span>
                      )}
                    </Td>
                    <Td>
                      <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-[10px] font-semibold">
                        Clear
                      </span>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 italic px-1">
        Click any row to view that player's full ledger, NSS score breakdown,
        and NIL GO compliance detail.
      </p>
    </div>
  );
}

function Summary({
  label,
  value,
  accent = "text-slate-900",
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
        {label}
      </div>
      <div className={`mt-1 text-xl font-bold ${accent}`}>{value}</div>
    </div>
  );
}

function Th({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className={`px-3 py-2.5 font-semibold whitespace-nowrap ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <td
      className={`px-3 py-2.5 align-middle whitespace-nowrap ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </td>
  );
}
