const fmt0 = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const BUDGET = 50000;
const DEPLOYED = 31400;
const CAC_MIN = 13000;
const CAC_MAX = 24000;
const RECRUITS = 12;

const PLAYERS = [
  { initials: "DW", name: "D. Washington", pos: "DT", leads: 31, recruits: 4, value: 9800 },
  { initials: "TM", name: "T. Monroe", pos: "DE", leads: 24, recruits: 3, value: 7600 },
  { initials: "RB", name: "R. Barnes", pos: "DT", leads: 19, recruits: 3, value: 6200 },
  { initials: "CJ", name: "C. Jefferson", pos: "LB", leads: 17, recruits: 2, value: 7800 },
];

export default function EnterpriseTab() {
  const pctDeployed = (DEPLOYED / BUDGET) * 100;
  const totalValueMin = RECRUITS * CAC_MIN;
  const totalValueMax = RECRUITS * CAC_MAX;
  const roiMin = Math.round((totalValueMin / BUDGET) * 100);
  const roiMax = Math.round((totalValueMax / BUDGET) * 100);

  return (
    <div className="space-y-4">
      {/* Campaign header */}
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
              Enterprise Campaign
            </div>
            <h2 className="mt-1 text-base font-bold text-slate-900">
              USAREC × Mizzou Defensive Line — Warm Lead Campaign
            </h2>
          </div>
          <span className="inline-flex items-center rounded-full bg-teal-100 text-teal-700 border border-teal-200 px-2 py-0.5 text-[11px] font-semibold shrink-0">
            Active
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-slate-500">Budget Allocated</div>
            <div className="font-bold text-slate-900 text-base">{fmt0(BUDGET)}</div>
          </div>
          <div>
            <div className="text-slate-500">Attributed to Date</div>
            <div className="font-bold text-slate-900 text-base">{fmt0(DEPLOYED)}</div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span>Budget deployed</span>
            <span className="font-semibold text-slate-700">{pctDeployed.toFixed(1)}%</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${pctDeployed}%` }}
            />
          </div>
        </div>
      </div>

      {/* CAC explanation */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 border-l-4 border-l-blue-600">
        <div className="text-sm font-bold text-slate-900">
          CAC-Anchored FMV — Eliminates Pay for Play Exposure
        </div>
        <p className="mt-2 text-xs leading-relaxed text-slate-700">
          USAREC's published cost-per-recruit is{" "}
          <strong>$13,000–$24,000 per qualified enlistee</strong> (Center for
          Naval Analysis, U.S. Army). This campaign confirmed{" "}
          <strong>12 recruits</strong>. CAC value delivered:{" "}
          <strong>$156,000–$288,000</strong> against a $50,000 sponsorship — an
          ROI of <strong>312–576%</strong>. The FMV is anchored to USAREC's own
          internal number, not a platform estimate. This is a performance
          marketing contract with verified ROI, not athlete compensation.
        </p>
        <p className="mt-2 text-[10px] text-slate-500 italic">
          Source: Center for Naval Analysis (CNA) — published Army CAC range,
          $13,000–$24,000 per qualified recruit
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-3">
        <Metric label="Token entries" sub="warm leads in" value="91" />
        <Metric label="Engaged" sub="follow-up confirmed" value="47" />
        <Metric label="Converted" sub="recruits confirmed" value="12" accent="text-emerald-600" />
      </div>

      {/* CAC Value Matrix */}
      <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100">
          <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
            CAC Value Matrix
          </div>
        </div>
        <table className="w-full text-xs">
          <tbody className="divide-y divide-slate-100">
            <Row label="Sponsorship total" value={fmt0(BUDGET)} />
            <Row label="USAREC CAC per recruit (published)" value={`${fmt0(CAC_MIN)} – ${fmt0(CAC_MAX)}`} />
            <Row label="Confirmed recruits via campaign" value={`${RECRUITS} recruits`} />
            <Row
              label="Total CAC value delivered"
              value={`${fmt0(totalValueMin)} – ${fmt0(totalValueMax)}`}
            />
            <Row
              label="FMV verdict"
              value={`Justified · ${roiMin}–${roiMax}% ROI on USAREC's own CAC`}
              valueClass="text-emerald-700 font-bold"
            />
          </tbody>
        </table>
      </div>

      {/* Per-player attribution */}
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-3">
          Per-Player Attribution
        </div>
        <div className="space-y-3">
          {PLAYERS.map((p) => {
            const share = (p.value / DEPLOYED) * 100;
            return (
              <div
                key={p.initials}
                className="rounded-md border border-slate-200 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                      {p.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 truncate">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-slate-500">{p.pos}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900 tabular-nums">
                      {fmt0(p.value)}
                    </div>
                    <div className="text-[10px] text-slate-500">attributed</div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 text-[11px]">
                  <div>
                    <span className="text-slate-500">Leads: </span>
                    <span className="font-semibold text-slate-800">{p.leads}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Recruits: </span>
                    <span className="font-semibold text-emerald-700">{p.recruits}</span>
                  </div>
                </div>

                <div className="mt-2 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-teal-500"
                    style={{ width: `${share}%` }}
                  />
                </div>
                <p className="mt-1.5 text-[10px] text-slate-500">
                  CAC value: {p.recruits} recruits × {fmt0(CAC_MIN)} ={" "}
                  <span className="font-semibold text-slate-700">
                    {fmt0(p.recruits * CAC_MIN)}
                  </span>{" "}
                  min value delivered
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  sub,
  value,
  accent = "text-slate-900",
}: {
  label: string;
  sub: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
        {label}
      </div>
      <div className={`mt-1 text-2xl font-black ${accent}`}>{value}</div>
      <div className="text-[10px] text-slate-500 mt-0.5">{sub}</div>
    </div>
  );
}

function Row({
  label,
  value,
  valueClass = "text-slate-900 font-semibold",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <tr>
      <td className="px-4 py-2.5 text-slate-600">{label}</td>
      <td className={`px-4 py-2.5 text-right tabular-nums ${valueClass}`}>{value}</td>
    </tr>
  );
}
