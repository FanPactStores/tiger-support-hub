import { KAYLEN_TX_EXPORT } from "./LedgerTab";

type Component = { label: string; weight: number; value: number };

const COMPONENTS: Component[] = [
  { label: "On-field performance", weight: 35, value: 94 },
  { label: "Social engagement", weight: 25, value: 89 },
  { label: "Brand deal outcomes", weight: 20, value: 91 },
  { label: "Reach & impressions", weight: 12, value: 88 },
  { label: "Academic standing", weight: 8, value: 95 },
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

function tierFor(score: number) {
  if (score >= 90) return { label: "Elite", classes: "bg-emerald-100 text-emerald-700 border-emerald-200" };
  if (score >= 80) return { label: "High", classes: "bg-blue-100 text-blue-700 border-blue-200" };
  return { label: "Mid", classes: "bg-slate-200 text-slate-700 border-slate-300" };
}

export default function NSSTab({ playerName }: { playerName: string }) {
  const score = Math.round(
    COMPONENTS.reduce((s, c) => s + (c.value * c.weight) / 100, 0)
  );
  const tier = tierFor(score);
  const transactions = KAYLEN_TX_EXPORT;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
              Dynamic NIL Score
            </div>
            <div className="mt-1 text-base font-semibold text-slate-900">
              {playerName}
            </div>
            <p className="mt-2 text-xs text-slate-500 max-w-sm">
              Score moves only when transactions settle — not when initiated.
            </p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-black leading-none text-[#F1B82D]">
              {score}
            </div>
            <span
              className={`mt-2 inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${tier.classes}`}
            >
              {tier.label}
            </span>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-3">
          Score Components
        </div>
        <div className="space-y-3">
          {COMPONENTS.map((c) => (
            <div key={c.label}>
              <div className="flex items-center justify-between text-xs">
                <div className="text-slate-700 font-medium">
                  {c.label}{" "}
                  <span className="text-slate-400 font-normal">· {c.weight}%</span>
                </div>
                <div className="font-bold text-slate-900 tabular-nums">{c.value}</div>
              </div>
              <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${c.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settlement table */}
      <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100">
          <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
            Attribution-linked settlements
          </div>
          <p className="mt-0.5 text-[11px] text-slate-500">
            Every score movement traces to a verified transaction.
          </p>
        </div>
        <div className="divide-y divide-slate-100">
          {transactions.map((t) => {
            const typeBadge =
              t.type === "token"
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : t.type === "pool"
                ? "bg-slate-100 text-slate-600 border-slate-200"
                : "bg-emerald-50 text-emerald-700 border-emerald-200";
            const typeLabel =
              t.type === "token" ? "Token" : t.type === "pool" ? "Pool" : "Enterprise";
            const counts = t.status === "settled";
            return (
              <div
                key={t.id}
                className="grid grid-cols-12 gap-2 items-center px-4 py-2.5 text-xs"
              >
                <div className="col-span-5 truncate font-medium text-slate-800">
                  {t.product.replace(/^NIL Platform — |^Enterprise — /, "")}
                </div>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${typeBadge}`}
                  >
                    {typeLabel}
                  </span>
                </div>
                <div className="col-span-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      counts
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {counts ? "Counts toward NSS" : "Pending — not counted"}
                  </span>
                </div>
                <div className="col-span-2 text-right font-semibold text-slate-900 tabular-nums">
                  {fmt(t.amount)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
